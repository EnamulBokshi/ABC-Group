const notificationBtn = document.querySelector('.notification-btn');
const notificationPanel = document.querySelector(".notification-panel");
const closeBtn = document.querySelector('.btn-close')
console.log(notificationBtn.classList)

notificationBtn.addEventListener('click',()=>{
    notificationPanel.style.display = 'block';
   
})

closeBtn.addEventListener('click',()=>{
    notificationPanel.style.display = 'none';
})

