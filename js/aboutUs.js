const ab001 = document.querySelector("#ab001");
const ab002 = document.querySelector("#ab002");
const ab003 = document.querySelector("#ab003");
const ab004 = document.querySelector("#ab004");
const ab005 = document.querySelector("#ab005");
const ab006 = document.querySelector("#ab006");
const ab007 = document.querySelector("#ab007");
const ab008 = document.querySelector("#ab008");
function viewdata(e,id){
    const lists = document.querySelectorAll("#aboutParent li");
    for(let li of lists){
        li.className = li.className.replace("activated","hover");
    }
    e.currentTarget.className += ' activated';
    const items = [ab001,ab002,ab003,ab004,ab005,ab006,ab007,ab008];
    items.forEach(item =>{
        item.classList += ' d-none';
    })
    console.log(id);
    const currentItem = document.getElementById(id);
    currentItem.classList.remove("d-none");
}