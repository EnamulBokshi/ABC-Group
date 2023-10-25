const notiBtn = document.querySelector('.notification-btn');
const nPanel = document.querySelector(".notification-panel");
const nPanelClose = document.querySelector('.btn-close');
const acBxCls = document.querySelector('#acBxCls');
const dsAcBx = document.querySelector('#ds-display-account');
const dsUser = document.querySelector('#ds-user');
const sideMenu = document.querySelector("#dashBar");

notiBtn.addEventListener('click',()=>{
    nPanel.classList.contains('d-none') ? nPanel.classList.remove('d-none') : nPanel.classList += ' d-none';
    if( ! dsAcBx.classList.contains('d-none'))  dsAcBx.classList += ' d-none' ;
})
nPanelClose.addEventListener('click',()=>{
    nPanel.classList += ' d-none';
})

dsUser.addEventListener('click',()=>{
    dsAcBx.classList.contains('d-none') ? dsAcBx.classList.remove('d-none') : dsAcBx.classList += ' d-none';
    if( ! nPanel.classList.contains('d-none'))  nPanel.classList += ' d-none' ;
})
document.querySelector('#acBxCls').addEventListener('click',()=>{
    dsAcBx.classList += ' d-none';
})
const userName = dsUser.textContent;
document.querySelector('#ds-uder-show-head').textContent = userName;


document.querySelector('.navbar-brand').addEventListener('click',()=>{
    sideMenu.classList.contains('d-none') ? sideMenu.classList.remove('d-none') : sideMenu.classList += ' d-none';
})


window.onclick = (e)=>{
    if((e.target === document.body) || (e.target === document.querySelector('#navWrapper'))){
        dsAcBx.classList += ' d-none';
        nPanel.classList += ' d-none'; 
        sideMenu.classList += ' d-none';  
    };
    console.log(e.target);
}