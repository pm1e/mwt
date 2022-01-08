const pageIcon = document.querySelector('link[rel="icon"]');
let counter = 1;
const faviconChange =()=>{
	if (counter === 1) {
		pageIcon.setAttribute('href', 'resourse/fav2.ico');
		counter = 2;
	} else {
		pageIcon.setAttribute('href', 'resourse/fav1.ico');
		counter = 1;
	}
}
setInterval(faviconChange, 600);