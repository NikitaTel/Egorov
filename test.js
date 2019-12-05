let icon = document.getElementById("menu_icon");
let menu = document.querySelector(".submenu");
let cross=document.getElementById("cross");
let search_global=document.getElementById('search_global')
let search_icon= document.getElementById('search_icon');
let site=document.querySelector('.site');
let search_cross=document.getElementById('search_cross');
let electronics = document.querySelector('.electronics');
let block = document.querySelectorAll('.block');
let block_hover =document.querySelectorAll('.block_hover')


icon.addEventListener("click",()=>{
	menu.style.display="block";

});

cross.addEventListener("click",()=>{
	menu.style.display='none';
})


search_icon.addEventListener('click',()=>{
	
	search_global.style.display="block";
	


})

search_cross.addEventListener('click', ()=>{
	search_global.style.display='none';
	
})

for(let i=0;i<6;i++)
{

j=i+3;

if(i%2==0)
{

	block_hover[i].style.backgroundColor= "#4285F4";
}
else {

block_hover[i].style.background= "#F44242";

}

	block[j].addEventListener('mouseover',()=>{

block_hover[i].style.display='grid';

})

block[j].addEventListener('mouseout',()=>{
block_hover[i].style.display='none';
})

}

let mobile_block = document.querySelectorAll('.mobile_block');
let mobile_submenu= document.getElementById('mobile_submenu');
let mobile_menu_icon = document.getElementById('mobile_menu_icon');
let mobile_cross=document.getElementById("mobile_cross");
let mobile=document.querySelector('.mobile');
let mobile_search_icon=document.getElementById('mobile_search_icon');
let mobile_up = document.getElementById('mobile_up');

mobile_up.addEventListener('click', backToTop);

function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }

mobile_search_icon.addEventListener('click',()=>{
	search_global.style.display='block';

})
search_cross.addEventListener('click',()=>{
	search_global.style.display='none';
	
})


mobile_cross.addEventListener('click',()=>{
	mobile_submenu.style.display='none';

})
mobile_menu_icon.addEventListener('click',()=>{
	mobile_submenu.style.display='block';

})
for(let i=1;i<7;i++)
{
	if(i%2==0){
		mobile_block[i].style.background='#4285F4';
	}
	else
	{
		mobile_block[i].style.background ='#F44242';
	}
}
