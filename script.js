document.querySelectorAll('input[type=checkbox]').forEach((c,i)=>{
const k='camp_'+i;
c.checked=localStorage.getItem(k)==='1';
c.addEventListener('change',()=>localStorage.setItem(k,c.checked?'1':'0'));
});