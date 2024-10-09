const form = document.getElementById('form')
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;

    const tableBody = document.querySelector('#data-table tbody');
    const newRow = tableBody.insertRow();

    const nameCell = newRow.insertCell(0);
    const phoneCell =  newRow.insertCell(1);

    nameCell.textContent =  name;
    phoneCell.textContent = phone;

    document.getElementById('form').reset();
})

