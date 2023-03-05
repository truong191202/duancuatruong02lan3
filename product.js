// Nhan cac bien duoc truyen tu main.js
let titleSource = sessionStorage.getItem("viewInfoTitle")
let priceSource = sessionStorage.getItem("viewInfoPrice")
let imageSource = sessionStorage.getItem("viewInfoImage")
// Tao cac bien moi cua product.js
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const image = $$(".product-image img:not(.share-image img)")
const title = $(".title")
const price = $(".price")
image.forEach(function(value){
    value.src = imageSource
})
title.innerHTML = `<p>${titleSource}</p>`
price.innerHTML = `<p>${priceSource}</p>`
// Xu ly giu nguyen login khi reset trang
const loginButton = $(".nav-search button");
const cart = $(".nav-search .cart")
const avatar = $(".nav-search .avatar")
const nameUser = $(".avatar ~ p")
isLogin = sessionStorage.getItem("isLogin")
if(isLogin){
	loginButton.style.display = "none"
	cart.style.display = "block"
	avatar.style.display = "block"
	nameUser.style.display = "inline"
	nameUser.innerHTML = sessionStorage.getItem("nameUser")
}


const addProduct = $(".add-product")
let parse = sessionStorage.getItem("productCurrentArrayStringify")
productCurrentArray = JSON.parse(parse)
addProduct.onclick = () => {
	if(isLogin){
	productCurrentArray === null ? productCurrentArray = [] : productCurrentArray
	viewInfoTitle = titleSource;
	viewInfoPrice = priceSource;
	viewInfoImage = imageSource;
	productNewArray = [{
		viewInfoTitle, viewInfoPrice, viewInfoImage
	}]
	productCurrentArray = productCurrentArray.concat(productNewArray)
	productStringify = JSON.stringify(productCurrentArray)
	sessionStorage.setItem("productStringify", productStringify);
	productCurrentArrayStringify = JSON.stringify(productCurrentArray)
	sessionStorage.setItem("productCurrentArrayStringify", productCurrentArrayStringify)
	}
	else{
		viewInfo.style.display = "none"
		loginOn()
	}
}
