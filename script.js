// var modal = document.getElementById('myModal');
// var btn = document.getElementById("myBtn");
// var span = document.getElementsByClassName("close")[0];
// btn.onclick = function() {
//     modal.style.display = "block";
// }
// span.onclick = function() {
//     modal.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// const items = document.querySelectorAll('li');

// for(let i=0; i<items.length; i++){
//   let button = articles[i].querySelector('button');
//   let para = articles[i].querySelector('p');
  
//   button.addEventListener('click', function(){
//     articles[i].classList.toggle('expanded');
//     button.innerHTML = articles[i].classList.contains('expanded') ?
//       'Hide Details' : 'Show Details';
//  });
// }
 const items = document.querySelectorAll('li');

for(let i=0; i<items.length; i++){
	items[i].addEventListener('mouseover', function(){
		this.style.fontSize = "200%"; 
}); 
items.addEventListener('mouseout', function(){
	items.classList.remove('hover'); 
}); 
}


h3.addEventListener('mouseout', function (){
  h3.classList.remove('hover'); 

const button = document.querySelector('button');
const h2 = document.querySelector('h2');
button.addEventListener('click', function(){
  h2.classList.toggle('styled');
});

const h3 = document.querySelector('h3');
h3.addEventListener('mouseover', function (){
  h3.classList.add('hover');
})
h3.addEventListener('mouseout', function (){
  h3.classList.remove('hover');    
});