// Not going to need jQuery for this...
// function updatehash() {
//     var hash = window.location.hash.substring(1);

//     if(document.querySelector('.view')) {
//     	document.querySelector('.view').classList.remove('view');
// 	}
    
//     document.getElementById(hash).classList.add('view');
// }

// window.addEventListener("hashchange", updatehash);

// if(!window.location.hash) {
// 	window.location.hash = "#quantum-computing-is-coming";
	
// }
// updatehash();



setTimeout(function() {
	document.querySelector('.section').classList.add('view');
},1);
