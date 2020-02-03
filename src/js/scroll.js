window.Object.defineProperty( Element.prototype, 'documentOffsetTop', {
    get: function () { 
        return this.offsetTop + ( this.offsetParent ? this.offsetParent.documentOffsetTop : 0 );
    }
});

window.speed = 10;

function goScroll(id){	
    let to = document.getElementById(id).documentOffsetTop;
    animateScroll(to);
    getSection(event.target);
    console.log(event.target);
}

function animateScroll(to){
	function checkPos(){
		let pos= Math.round(document.body.scrollTop/10)*10;
        window.scrollTo(0, pos);
        console.log(pos);
		return pos;
	}
	let from = checkPos();
	if(from != to){
		let sign;
		if(from<to){
			sign = 1;
		}else{
			sign = -1;
		}
		let dif = (to-from)*sign;
		let step = dif/window.speed;
		let timer = setInterval(function(){
			from = (Math.round(from*100)/100) + (step*sign);
			window.scrollTo(0, from);
			if (Math.round(from) == to || (window.innerHeight + window.scrollY) >= document.body.offsetHeight){
				clearInterval(timer);
			}
		}, window.speed);

	}
}

function getSection(btn){
	let activeBtn = document.getElementsByClassName("is-active")
	if (activeBtn.length > 0){	
		activeBtn[0].className = "";
	}
	btn.className = "is-active";
}

function speedVal(speed) {
	window.speed = speed;
	let activeBtn = document.getElementsByClassName("is-selected")
	if (activeBtn.length > 0){	
		activeBtn[0].className = "";
	}
	event.target.className = "is-selected";
}
