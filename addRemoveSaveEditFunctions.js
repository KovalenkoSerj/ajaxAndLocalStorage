function addItem(e) {
    e.preventDefault();
    var text = (this.querySelector('[name=item]')).value,
        item = {
            text,
            done: false
        };
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    
    this.reset();
}



function removeItem (e) {
    items.splice(e.target.dataset.index,1);
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}


function editItem (e) {
    var index = e.target.dataset.index,
        label = document.querySelectorAll('label')[index],
        saveButton = document.querySelectorAll('.save')[index],
        editButton = document.querySelectorAll('.edit')[index],
        editInput = document.querySelectorAll('.editInput')[index];
    editInput.style.display = 'inline-block';
    editInput.value = label.innerText;
    saveButton.style.display = 'block';
    editButton.style.display = 'none';
}


function saveItem(e) {
    var index = e.target.dataset.index,
        label = document.querySelectorAll('label')[index],
        saveButton = document.querySelectorAll('.save')[index],
        editButton = document.querySelectorAll('.edit')[index],
        editInput = document.querySelectorAll('.editInput')[index];
    editButton.style.display = 'block';
    saveButton.style.display = 'none';
    editInput.style.display = 'none';
    label.innerHTML = editInput.value;
    items[index].text = label.innerText;
    if(editInput.value === ''){
        return removeItem(e) ;
    }
    localStorage.setItem('items', JSON.stringify(items))

}


