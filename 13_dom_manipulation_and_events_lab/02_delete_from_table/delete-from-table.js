function deleteByEmail() {
    const emailInput = document.querySelector('input[name="email"]').value;
    const table = document.getElementById('customers').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    let found = false;

    for (let i = 0; i < rows.length; i++) {
        const emailCell = rows[i].getElementsByTagName('td')[1];
        if (emailCell && emailCell.textContent === emailInput) {
            table.deleteRow(i);
            found = true;
            break;
        }
    }

    const resultDiv = document.getElementById('result');
    if (found) {
        resultDiv.textContent = 'Deleted.';
    } else {
        resultDiv.textContent = 'Not found.';
    }
}
