function getAndupdate(){
    tit = document.getElementById('tit').value;
    desc = document.getElementById('desc').value;
    if (localStorage.getItem('itemjson') == null) {
        itemjsonArray = [];
        // tit=document.getElementById('tit');
        // desc=document.getElementById('desc');
        itemjsonArray.push([tit, desc]);
        localStorage.setItem('itemjson', JSON.stringify(itemjsonArray));
    }
    else {
        str = localStorage.getItem('itemjson');
        itemjsonArray = JSON.parse(str);
        itemjsonArray.push([tit, desc]);
        localStorage.setItem('itemjson', JSON.stringify(itemjsonArray));
    }
    update();
}
function update() {
    if (localStorage.getItem('itemjson') == null) {
        itemjsonArray = [];
        localStorage.setItem('itemjson', JSON.stringify(itemjsonArray));
    }
    else {
        str = localStorage.getItem('itemjson');
        itemjsonArray = JSON.parse(str);
    }
    //table.......................
    tableBody = document.getElementById("tableBody");
    str = "";
    itemjsonArray.forEach((element, index) => {
        str += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button type="button" class="btn btn-danger" onclick="deleted(${index})">Delete</button></td>
            </tr>
        `
        tableBody.innerHTML = str;
    });
}
add = document.getElementById("add");
add.addEventListener("click", getAndupdate);
update();
function deleted(item) {
    s=localStorage.getItem('itemjson');
    itemjsonArray=JSON.parse(s);
    itemjsonArray.splice(item, 1);
    localStorage.setItem('itemjson',JSON.stringify(itemjsonArray));
    update();
    window.location.reload(true);
}
function clearStorage() {
    // c = document.getElementById("Clear");
    // c.addEventListener('click', () => {
        if(confirm("Do you want to clear?")){
        localStorage.clear();
        window.location.reload(true);
        }
    // })
}