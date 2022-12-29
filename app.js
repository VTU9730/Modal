let btnEl=document.getElementById('btn')
let modalEl=document.getElementById('modal-el')
let modalDiv=document.getElementById('modal-div')
let crossEl=document.getElementById('cross-el')
btnEl.addEventListener('click',()=>{
    modalDiv.style.visibility='visible';
    modalEl.style.opacity=0;
})
crossEl.addEventListener('click',()=>{
    modalDiv.style.visibility='hidden';
    modalEl.style.opacity=1;
})
