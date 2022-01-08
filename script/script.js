const menuItems = document.querySelectorAll(".nav-item")
const pages = document.querySelectorAll(".page")
const up = document.querySelector(".up-button")
window.onscroll = ()=>window.pageYOffset>260?up.style.display="flex":up.style.display="none"
up.onclick = ()=>window.scrollTo(0,0)

Array.from(menuItems)
	.map(item=>item.onclick = event=>showPage(event.target.dataset.targetPageClass, event.target.innerHTML))

const showPage = (className, pageName)=>Array.from(pages)
	.map(page=>{
		if(page.classList.contains(className)){
			page.style.display = "flex"
			document.title = pageName;
		}else{
			page.style.display = "none"
		}
	})
