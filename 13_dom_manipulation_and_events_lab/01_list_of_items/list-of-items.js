function addItem() {
    const inputField = document.getElementById('newItemText');
    const newItemText = inputField.value;
    if (newItemText.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = newItemText;
        document.getElementById('items').appendChild(listItem);
        inputField.value = '';
    }
}
