function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
        return `
        <li>
          <input type ="text" class="editInput" data-index=${i} maxlength="20" />
          <input type ="checkbox" class ='checkbox' data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
          <label for ="item${i}"> ${plate.text}</label>
          <img class ="edit" src ='ico/edit.ico' data-index=${i} onclick="editItem(event)" title="edit">
          <img class ="save" src="ico/disk.ico" data-index=${i} onclick="saveItem(event)" alt="save">
          <img class ="close" src="ico/delete.ico" data-index=${i} onclick="removeItem(event)" type='delete' title="remove">
        </li>
        
      `;
    }).join('');
}

function foodNewsView(){
    var randomResultData = [filterData(foodStories)[Math.floor(Math.random() * filterData(foodStories).length)]];
    foodHeaders.innerHTML =(randomResultData.map(item => {
        return  `
            <br/>
            <li>Title: ${item.section}</li>
            <li>Abstract: ${item.abstract}</li> <a href="${item.url}" target="_blank">Read More...</a>
            <br/>
    `

    })).join('')

}


function toggleDone(e) {
    if (!e.target.matches('input')) return;
    var el = e.target,
        index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items))

}



addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
populateList(items, itemsList);
getNews.addEventListener('click', foodNewsView);