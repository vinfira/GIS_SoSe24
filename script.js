document.getElementById('button').addEventListener('click', function(event) {

    var itemName = document.getElementById('itemName').value;
    var expiryDate = document.getElementById('expiryDate').value;

    if (itemName && expiryDate) {
        addItem(itemName, expiryDate);
        document.getElementById('itemName').value = '';
        document.getElementById('expiryDate').value = '';
    } else {
        alert('Bitte geben Sie sowohl den Namen als auch das Ablaufdatum des Lebensmittels ein.');
    }
});

function addItem(name, expiry) {
    var itemList = document.getElementById('itemList');
    var listItem = document.createElement('li');
    listItem.textContent = name + ' - Ablaufdatum: ' + expiry;
    
    var removeButton = document.createElement('span');
    removeButton.textContent = 'X';
    removeButton.className = 'remove';
    removeButton.onclick = function() {
        itemList.removeChild(listItem);
    };

    listItem.appendChild(removeButton);
    itemList.appendChild(listItem);
}
