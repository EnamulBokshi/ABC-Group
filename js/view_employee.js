const view_aside = document.querySelector('aside');
const clsBtn = document.querySelector('aside .clsBtn');
const view_sidebar = document.querySelector('.sidebar span');
const body = document.querySelector('table');
const SectionA = document.querySelector('.SectionA');
const SectionB = document.querySelector('.SectionB')
const SectionC = document.querySelector('.SectionC')
const SectionD = document.querySelector('.SectionD')
const header = document.getElementsByTagName('header')


view_aside.style.display = 'none';
clsBtn.addEventListener('click', ()=>{
    view_aside.style.display = 'none';
})

view_sidebar.addEventListener('click',()=>{
    view_aside.style.display = 'block';
    
})
body.addEventListener('click',()=>{
    view_aside.style.display = 'none';

})

SectionA.addEventListener('click',(e)=> {
    console.log(e.id)
    
})

SectionB.addEventListener('click',(e)=> {
    console.log("SectionB clicked")
})
SectionA.addEventListener('click',(e)=> {
    console.log("SectionA clicked")
})
SectionC.addEventListener('click',(e)=> {
    console.log("SectionC clicked")
})
SectionD.addEventListener('click',(e)=> {
    console.log("SectionD clicked")
})
function change_active(e,id){
    const links = document.querySelectorAll('aside .nav a');
    for(let link of links){
        link.className = link.className.replace('active','');
       
    }
    console.log(id);
    e.currentTarget.className += ' active';
    if(e.currentTarget.id == 'SectionA'){
        SectionA.style.display = 'block';
        SectionB.style.display = 'none';
        SectionC.style.display = 'none';
        SectionD.style.display = 'none';
    }
    if(e.currentTarget.id == 'SectionB'){
        SectionA.style.display = 'none';
        SectionB.style.display = 'block';
        SectionC.style.display = 'none';
        SectionD.style.display = 'none';
    }
    if(e.currentTarget.id == 'SectionC'){
        SectionA.style.display = 'none';
        SectionB.style.display = 'none';
        SectionC.style.display = 'block';
        SectionD.style.display = 'none';
    }
    if(e.currentTarget.id == 'SectionD'){
        SectionA.style.display = 'none';
        SectionB.style.display = 'none';
        SectionC.style.display = 'none';
        SectionD.style.display = 'block';
    }  
}