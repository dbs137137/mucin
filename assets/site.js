const modal=document.getElementById('posterModal');
const open=document.getElementById('posterOpen'),close=document.getElementById('posterClose');
if(modal&&open)open.addEventListener('click',()=>modal.showModal());
if(modal&&close)close.addEventListener('click',()=>modal.close());
if(modal)modal.addEventListener('click',event=>{if(event.target===modal)modal.close()});
const menu=document.querySelector('.mobile-menu'),nav=document.getElementById('mainNav');
if(menu&&nav)menu.addEventListener('click',()=>{const isOpen=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(isOpen));nav.classList.toggle('is-open',isOpen);menu.textContent=isOpen?'닫기 ×':'메뉴 ☰'});
