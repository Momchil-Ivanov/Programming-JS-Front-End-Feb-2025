function attachEvents() {
    console.log('TODO...');
}

attachEvents(
    document.getElementById('submit').addEventListener('click', onPost),
    document.getElementById('refresh').addEventListener('click', onRefresh)
);

async function onPost() {
    let authorInput = document.querySelector('input[name="author"]');
    let contentInput = document.querySelector('input[name="content"]');

    let author = authorInput.value;
    let content = contentInput.value;
    
    await postMessage(author, content);

    authorInput.value = '';
    contentInput.value = '';
}

async function onRefresh() {
    let messages = await loadMessages();

    let output = messages.map(m => `${m.author}: ${m.content}`);

    document.getElementById('messages').value = output.join('\n');
}

async function loadMessages() {
    let rest = await fetch('http://localhost:3030/jsonstore/messenger');
    let data = await rest.json();
    
    return Object.values(data);
}

async function postMessage(author, content) {
    let messsage = {author, content};
    let options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(messsage)
    };

    await fetch('http://localhost:3030/jsonstore/messenger', options);
}

