function addItem() {
    const ul = document.getElementById('items');
    const newItemText = document.getElementById('newItemText').value;

    if (newItemText.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = newItemText;

        const deleteLink = document.createElement('a');
        deleteLink.href = '#';
        deleteLink.textContent = '[Delete]';
        deleteLink.onclick = function() {
            ul.removeChild(li);
        };

        li.appendChild(deleteLink);
        ul.appendChild(li);

        document.getElementById('newItemText').value = '';
    }
}
