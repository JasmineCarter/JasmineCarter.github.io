 const items = document.querySelectorAll('li');

for(let i=0; i<items.length; i++){
	items[i].addEventListener('mouseover', function(){
		this.style.fontSize = "200%"; 
}); 
}

var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";

}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}





