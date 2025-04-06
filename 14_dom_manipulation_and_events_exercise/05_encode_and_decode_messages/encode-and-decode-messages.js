document.addEventListener('DOMContentLoaded', solve);

function solve() {
    const encodeButton = document.querySelector('#encode button');
    const decodeButton = document.querySelector('#decode button');
    const messageInput = document.querySelector('#encode textarea');
    const messageOutput = document.querySelector('#decode textarea');

    encodeButton.addEventListener('click', (event) => {
        event.preventDefault();
        const message = messageInput.value;
        const encodedMessage = message.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
        messageOutput.value = encodedMessage;
        messageInput.value = '';
    });

    decodeButton.addEventListener('click', (event) => {
        event.preventDefault();
        const encodedMessage = messageOutput.value;
        const decodedMessage = encodedMessage.split('').map(char => String.fromCharCode(char.charCodeAt(0) - 1)).join('');
        messageOutput.value = decodedMessage;
    });
}