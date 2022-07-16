

var data = 0;


document.getElementById("counting").innerText = data;


function increment() {
	data = data + 1;
	document.getElementById("counting").innerText = data;
}

function decrement() {
	if(data=0)
		alert("dislike can't be negative);
		return;
	data = data - 1;
	document.getElementById("counting").innerText = data;
}
