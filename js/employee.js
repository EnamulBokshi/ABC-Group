// // getting the display elements
// const Personal_section = document.querySelector("#Personal")
// const Company_section = document.querySelector("#Company")
// const Salary_section = document.querySelector("#Salary")
// const Financial_section = document.querySelector("#Financial")
// const Performance_section = document.querySelector("#Performance")
// const Document_section = document.querySelector("#Document")
// const Leaves_section = document.querySelector("#Leaves")
// const Attendance_section = document.querySelector("#Attendance")
// const Transactions_section= document.querySelector("#Transactions")

// // getting the navs elements
// const Personal = document.querySelector(".Personal")
// const Company = document.querySelector(".Company")
// const Salary = document.querySelector(".Salary")
// const Financial = document.querySelector(".Financial")
// const performance = document.querySelector(".Performance")
// const Documents = document.querySelector(".Document")
// const Leaves = document.querySelector(".Leaves")
// const Attendance = document.querySelector(".Attendance")
// const Transactions= document.querySelector(".Transactions")

// // console.log(Personal.classList,Company.classList,Salary_section.classList,Financial_section.classList,Performance_section.classList,Document_section.classList,Leaves_section.classList,Attendance_section.classList,Transactions_section.classList);

// //console.log(Personal.classList,Company.classList,Salary_section.classList,Financial_section.classList,Performance_section.classList,Document_section.classList,Leaves_section.classList,Attendance_section.classList,Transactions_section.classList);

// const myList = [Personal_section,
//     Company_section,
//     Salary_section,
//     Financial_section,
//     Performance_section,
//     Document_section,
//     Leaves_section,
//     Attendance_section,
//     Transactions_section];

// function view_data(e,id){
//     const links = document.querySelectorAll('ul li');
//     for(let link of links)
//     {
//         link.className = link.className.replace('bg-light','')
//         link.className = link.className.replace('fst-italic','')
//         link.className = link.className.replace('fw-bold','')
//         link.className = link.className.replace('text-primary','')
//     }
//     e.currentTarget.className += ' bg-light fst-italic fw-bold text-primary';
//     console.log(e.currentTarget.id)
//     if(id == Document_section.id)
//     {
//         Document_section.className += ' d-block'
//     }
//     else{
//         console.log(id,Document_section.id)
       
//     }
//     if(e.currentTarget.id == Company_section.id)
//     {
//         Document_section.className += ' d-block'
//         console.log(Document_section.id)
//     }
//     else{
//         console.log('not match!')
//     }
//     // for(let item of myList){
//     //     if(item.id == e.currentTarget.id)
//     //     {
//     //        item.className = item.className.replace('hide','')
//     //        item.innerHTML = 'item does not match'
//     //     }
//     //     else{
//     //         item.innerHTML = 'Does not match';
//     //     }
//     // }
// }

const personal = document.querySelector('#personal')
const company = document.querySelector('#company')
const salary = document.querySelector('#salary')
const financial = document.querySelector('#financial')
const perFormance = document.querySelector('#performance')
const doc = document.querySelector('#document')
const leaves = document.querySelector('#leaves')
const transactions = document.querySelector('#transactions')
const attendance = document.querySelector('#AT');
const editIcon = document.querySelector("#edit-icon");
const crudBox = document.querySelector("#curd-edit");
const crudCancel = document.querySelector("#crudCancel");
function view_data(e,id){
    const links = document.querySelectorAll('nav div a');
    
    for(let link of links){
        link.className = link.className.replace('fw-bold','')
        link.className = link.className.replace('bg-white','')
        link.className = link.className.replace('text-dark','')
    }
    e.currentTarget.className += ' fw-bold bg-white text-dark'

    const lists = [personal,company,salary,financial,perFormance,doc,leaves,transactions,attendance]
    lists.forEach(list => {
        list.classList += ' d-none';
    });

    const targetElement = document.getElementById(id);
    targetElement.classList.remove('d-none');
}

editIcon.addEventListener('click',() => {
    crudBox.className = crudBox.className.replace("d-none","");
})
crudCancel.addEventListener("click", () =>{
    crudBox.classList += ' d-none';
})
window.onclick =(e) =>{
    const pf001 = document.getElementById("pf001")
  if(e.target == pf001){
    crudBox.classList += ' d-none';
  }
}