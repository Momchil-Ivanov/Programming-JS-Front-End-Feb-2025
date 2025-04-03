function solve() {
    const checkboxes = document.querySelectorAll('th input[type="checkbox"]');
    const rows = document.querySelectorAll('tbody tr');
    const output = document.getElementById('output');
    const selectedColumns = [];

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked) {
            selectedColumns.push(index);
        }
    });

    const report = Array.from(rows).map(row => {
        const cells = row.querySelectorAll('td');
        const rowData = {};

        selectedColumns.forEach(index => {
            const header = checkboxes[index].name;
            rowData[header] = cells[index].textContent.trim();
        });

        return rowData;
    });

    output.value = JSON.stringify(report, null, 2);
}