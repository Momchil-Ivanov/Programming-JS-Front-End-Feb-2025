function solve() {
    const searchField = document.getElementById('searchField');
    const searchText = searchField.value.toLowerCase();
    
    if (searchText === '') {
        const rows = document.querySelectorAll('table.container tbody tr');
        rows.forEach(row => row.classList.remove('select'));
        searchField.value = '';
        return;
    }
    
    const rows = document.querySelectorAll('table.container tbody tr');
    
    rows.forEach(row => row.classList.remove('select'));

    rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        cells.forEach(cell => {
            if (cell.textContent.toLowerCase().includes(searchText)) {
                row.classList.add('select');
            }
        });
    });

    searchField.value = '';
}
