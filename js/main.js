var oP = document.querySelector('p');
var onOff = true;
oP.onclick = function (){
	if (onOff) {
		this.style.background = 'yellow';
	} else {
		this.style.background = 'red';
	}
	onOff = !onOff;
}