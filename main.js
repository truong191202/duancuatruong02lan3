const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const productList = $(".product-list");
// Product list
let product = [
	{
		id: 1,
		title: "MACBOOK PRO 13",
		price: "$1200",
		source: "./asset/image/macbook1.jpg",
	},
	{
		id: 2,
		title: "IPHONE 13 PRO MAX NEW",
		price: "$2000",
		source: "./asset/image/13promax.jpg",
	},
	{
		id: 3,
		title: "MACBOOK PRO 9",
		price: "$1560",
		source: "./asset/image/macbook3.jpg",
	},
	{
		id: 4,
		title: "IPAD Pro 10",
		price: "$980",
		source: "./asset/image/ipad2.jpg",
	},
	{
		id: 5,
		title: "IPHONE PROMAX 12",
		price: "$2900",
		source: "./asset/image/131mobile1.jpg",
	},
	{
		id: 6,
		title: "IPAD Pro 8",
		price: "$2100",
		source: "./asset/image/ipad4.jpg",
	},
	{
		id: 7,
		title: "MACBOOK PRO 6",
		price: "$680",
		source: "./asset/image/macbook4.jpg",
	},
	{
		id: 8,
		title: "IPHONE 13 LIGHT",
		price: "$1750",
		source: "./asset/image/131mobile5.jpg",
	},
	{
		id: 9,
		title: "MACBOOK PRO 5",
		price: "$890",
		source: "./asset/image/macbook7.jpg",
	},
	{
		id: 10,
		title: "IPAD Pro 14",
		price: "$2490",
		source: "./asset/image/ipad6.jpg",
	},
	{
		id: 11,
		title: "IPHONE PROMAX 12",
		price: "$2900",
		source: "./asset/image/131mobile2.jpg",
	},
	{
		id: 12,
		title: "IPAD Pro 5",
		price: "$1430",
		source: "./asset/image/ipad2.jpg",
	},
	{
		id: 13,
		title: "MACBOOK PRO 12",
		price: "$1100",
		source: "./asset/image/macbook5.jpg",
	},
	{
		id: 14,
		title: "IPHONE 13 PRO LIGHT",
		price: "$2000",
		source: "./asset/image/131mobile5.jpg",
	},
	{
		id: 15,
		title: "MACBOOK PRO 9A",
		price: "$1780",
		source: "./asset/image/macbook6.jpg",
	},
	{
		id: 16,
		title: "IPAD Pro 12",
		price: "$1980",
		source: "./asset/image/ipad3.jpg",
	},
	{
		id: 17,
		title: "IPHONE PROMAX 12A",
		price: "$3000",
		source: "./asset/image/131mobile4.jpg",
	},
	{
		id: 18,
		title: "IPAD Pro 8CC",
		price: "$1890",
		source: "./asset/image/ipad2.jpg",
	},
	{
		id: 19,
		title: "MACBOOK PRO 13",
		price: "$1200",
		source: "./asset/image/macbook2.jpg",
	},
	{
		id: 20,
		title: "IPHONE 13 PRO MAX NEW",
		price: "$1890",
		source: "./asset/image/13mini.jpg",
	},
	{
		id: 21,
		title: "MACBOOK PRO 9",
		price: "$1560",
		source: "./asset/image/macbook3.jpg",
	},
	{
		id: 22,
		title: "IPAD Pro 10",
		price: "$980",
		source: "./asset/image/ipad2.jpg",
	},
	{
		id: 23,
		title: "IPHONE PROMAX 12",
		price: "$2900",
		source: "./asset/image/131mobile1.jpg",
	},
	{
		id: 24,
		title: "IPAD Pro 8",
		price: "$2100",
		source: "./asset/image/ipad4.jpg",
	},
	{
		id: 25,
		title: "MACBOOK PRO 13",
		price: "$1200",
		source: "./asset/image/macbook1.jpg",
	},
	{
		id: 26,
		title: "IPHONE 13 PRO MAX NEW",
		price: "$2000",
		source: "./asset/image/13promax.jpg",
	},
	{
		id: 27,
		title: "MACBOOK PRO 9",
		price: "$1560",
		source: "./asset/image/macbook4.jpg",
	},
	{
		id: 28,
		title: "IPAD Pro 16",
		price: "$2320",
		source: "./asset/image/ipad3.jpg",
	},
	{
		id: 29,
		title: "IPHONE PROMAX 05",
		price: "$890",
		source: "./asset/image/131mobile1.jpg",
	},
	{
		id: 30,
		title: "IPAD Pro 4",
		price: "$790",
		source: "./asset/image/ipad4.jpg",
	},
	{
		id: 31,
		title: "MACBOOK PRO 08",
		price: "$490",
		source: "./asset/image/macbook7.jpg",
	},
	{
		id: 32,
		title: "IPHONE 13 PRO NEW MAX",
		price: "$1760",
		source: "./asset/image/131mobile4.jpg",
	},
	{
		id: 33,
		title: "MACBOOK PRO 15",
		price: "$2900",
		source: "./asset/image/macbook6.jpg",
	},
	{
		id: 34,
		title: "IPAD Pro 3",
		price: "$480",
		source: "./asset/image/ipad7.jpg",
	},
	{
		id: 35,
		title: "IPHONE PROMAX 12",
		price: "$2900",
		source: "./asset/image/13mini.jpg",
	},
	{
		id: 36,
		title: "IPAD Pro 13",
		price: "$2500",
		source: "./asset/image/ipad1.jpg",
	},
];

// Render product-info

product.forEach(function (value, key) {
	const productInfoDiv = document.createElement("div");
	productInfoDiv.classList.add("product-info");
	if (key < 8) {
		productInfoDiv.classList.add("active");
	}

	// Tạo thẻ img
	const img = document.createElement("img");
	img.src = value.source;
	img.alt = "";

	// Tạo thẻ div.title và thẻ p
	const titleDiv = document.createElement("div");
	titleDiv.classList.add("title");
	const titleP = document.createElement("p");
	titleP.textContent = value.title;
	titleDiv.appendChild(titleP);

	// Tạo thẻ div.star và thẻ p
	const starDiv = document.createElement("div");
	starDiv.classList.add("star");
	const starP = document.createElement("p");
	starP.textContent = "(1 reviewer)";
	for (let i = 0; i < 5; i++) {
		const starI = document.createElement("i");
		starI.classList.add("appreciate-item-btn", "fas", "fa-star");
		starDiv.appendChild(starI);
	}
	starDiv.appendChild(starP);

	// Tạo thẻ div.price
	const priceDiv = document.createElement("div");
	priceDiv.classList.add("price");
	priceDiv.textContent = value.price;

	// Tạo thẻ div.view-info và thẻ button
	const viewInfoDiv = document.createElement("div");
	viewInfoDiv.classList.add("view-info");
	const viewInfoButton = document.createElement("button");
	viewInfoButton.textContent = "View Info";
	viewInfoDiv.appendChild(viewInfoButton);

	// Gộp tất cả các thẻ con vào thẻ cha
	productInfoDiv.appendChild(img);
	productInfoDiv.appendChild(titleDiv);
	productInfoDiv.appendChild(starDiv);
	productInfoDiv.appendChild(priceDiv);
	productInfoDiv.appendChild(viewInfoDiv);
	productList.appendChild(productInfoDiv);
});
// Xu ly list product
const nextButton = $(".next");
const prevButton = $(".prev");
const homeButton = $(".home");
const productInfo = $$(".product-info");
const categoryIphone = $("#iphone");
const categoryIpad = $("#ipad");
const categoryMacBook = $("#macbook");
const productInfoObject = [].concat(...productInfo);
const priceSort = $("#sort");
const priceChoose = $("#price-choose");
const startPrice = $("#from");
const endPrice = $("#to");
const letFind = $("#letFind");
const search = $(".search input");
const more = $(".more");
const button = $$(".home, .prev, .next");
let contain = productInfoObject;
var haveItemGrid = 0;
let isPhone = false;
let isIpad = false;
let isMacBook = false;

// Next button render product
nextButton.onclick = function () {
	const haveActive = $$(".product-info.active");
	for (let i = 0; i < productInfo.length; i++) {
		if (
			contain[i].classList.contains("active") &&
			!contain[i + 1].classList.contains("active")
		) {
			haveActive.forEach(function (value) {
				value.classList.remove("active");
			});
			for (let j = 0; j < 8; j++) {
				contain[++i].classList.add("active");
			}
			break;
		}
	}
};

// Prev button render product
prevButton.onclick = function () {
	const haveActive = $$(".product-info.active");
	for (let i = 0; i < productInfo.length; i++) {
		if (
			contain[i].classList.contains("active") &&
			!contain[i - 1].classList.contains("active")
		) {
			haveActive.forEach(function (value) {
				value.classList.remove("active");
			});
			for (let j = 0; j < 8; j++) {
				contain[--i].classList.add("active");
			}
			break;
		}
	}
};

// Home button render product
homeButton.onclick = function () {
	resetInputFunction();
	resetValueFunction();
	contain = productInfo;
	arrange();
	auto();
};

// Render category iphone
var productPhone = contain.filter((values) =>
	values.innerText.includes("PHONE")
);
categoryIphone.onclick = function () {
	resetInputFunction();
	resetValueFunction();
	isMacBook = false;
	isPhone = true;
	isIpad = false;
	contain = productPhone;
	arrange();
	auto();
};
// Render category ipad
var productIpad = contain.filter((values) => values.innerText.includes("IPAD"));
categoryIpad.onclick = function () {
	resetInputFunction();
	resetValueFunction();
	isMacBook = false;
	isPhone = false;
	isIpad = true;
	contain = productIpad;
	arrange();
	auto();
};
// Render category Macbook
var productMacBook = contain.filter((values) => values.innerText.includes("MACBOOK"));
categoryMacBook.onclick = function () {
	resetInputFunction();
	resetValueFunction();
	isMacBook = true;
	isPhone = false;
	isIpad = false;
	contain = productMacBook;
	arrange();
	auto();
};
// Render with price arrange
priceSort.onchange = function () {
	if (priceSort.value === "any") {
	} else if (priceSort.value === "smallToHigher") {
		contain = contain.sort(
			(a, b) =>
				parseFloat(
					a.children[3].innerHTML.replace(/[!@#$%^&*()+]/g, "")
				) -
				parseFloat(
					b.children[3].innerHTML.replace(/[!@#$%^&*()+]/g, "")
				)
		);
		arrange();
		auto();
		console.log(contain);
	} else if (priceSort.value === "highToSmaller") {
		contain = contain.sort(
			(b, a) =>
				parseFloat(
					a.children[3].innerHTML.replace(/[!@#$%^&*()+]/g, "")
				) -
				parseFloat(
					b.children[3].innerHTML.replace(/[!@#$%^&*()+]/g, "")
				)
		);
		arrange();
		auto();
	}
};

// Render with price input
letFind.onclick = function () {
	if (isPhone) {
		contain = productPhone;
	} else if (isIpad) {
		contain = productIpad;
	} else if (isMacBook) {
		contain = productMacBook;
	} else contain = productInfoObject;
	contain = contain.filter(
		(value) =>
			parseFloat(
				value.children[3].innerHTML.replace(/[!@#$%^&*()+]/g, "")
			) > startPrice.value &&
			parseFloat(
				value.children[3].innerHTML.replace(/[!@#$%^&*()+]/g, "")
			) < endPrice.value
	);
	arrange();
	auto();
};

// Render with price choose
priceChoose.onchange = function () {
	const productInfoObject = [].concat(...productInfo);
	if (priceChoose.value === "any") {
	} else if (priceChoose.value === "mt2000") {
		if (isPhone) {
			contain = productPhone;
		} else if (isIpad) {
			contain = productIpad;
		} else if (isMacBook) {
			contain = productMacBook;
		} else contain = productInfoObject;
		contain = contain.filter(
			(value) =>
				parseFloat(
					value.children[3].innerHTML.replace(/[!@#$%^&*()+]/g, "")
				) > 2000
		);
		arrange();
		auto();
	} else if (priceChoose.value === "from1000to2000") {
		if (isPhone) {
			contain = productPhone;
		} else if (isIpad) {
			contain = productIpad;
		} else if (isMacBook) {
			contain = productMacBook;
		} else contain = productInfoObject;
		contain = contain.filter(
			(value) =>
				1000 <
					parseFloat(
						value.children[3].innerHTML.replace(
							/[!@#$%^&*()+]/g,
							""
						)
					) &&
				parseFloat(
					value.children[3].innerHTML.replace(/[!@#$%^&*()+]/g, "")
				) < 2000
		);
		arrange();
		auto();
	} else if (priceChoose.value === "lt1000") {
		if (isPhone) {
			contain = productPhone;
		} else if (isIpad) {
			contain = productIpad;
		} else if (isMacBook) {
			contain = productMacBook;
		} else contain = productInfoObject;
		contain = contain.filter(
			(value) =>
				parseFloat(
					value.children[3].innerHTML.replace(/[!@#$%^&*()+]/g, "")
				) < 1000
		);
		arrange();
		auto();
	}
	console.log(contain);
};

// Render with search
search.onkeyup = function () {
	console.log(search.value);
	if (isPhone) {
		contain = productPhone;
	} else if (isIpad) {
		contain = productIpad;
	} else if (isMacBook) {
		contain = productMacBook;
	} else contain = productInfoObject;
	contain = contain.filter((value) =>
		value.children[1].innerText
			.toLowerCase()
			.includes(search.value.toLowerCase())
	);
	arrange();
	auto();
	for (let i = 0; i < button.length; i++) {
		button[i].style.display = "none";
	}
	more.style.display = "block";
};

// More view product
more.onclick = function () {
	haveItemGrid = $$(
		".item0, .item1, .item2, .item3, .item4, .item5, .item6, .item7"
	);
	haveItemGrid.forEach((value) => value.classList.remove(value.classList[1]));
	for (let i = 0; i < contain.length; i++) {
		contain[i].classList.add("active");
	}
	more.style.display = "none";
};

// Render contain auto
const auto = function () {
	const haveActive = $$(".product-info.active");
	for (let i = 0; i < 8; ++i) {
		for (let i = 0; i < productInfo.length; i++) {
			if (productInfo[i].classList.contains("active")) {
				haveActive.forEach(function (value) {
					value.classList.remove("active");
				});
			}
		}
	}
	if (contain.length >= 8) {
		for (let j = 0; j < 8; j++) {
			contain[j].classList.add("active");
		}
	} else {
		for (let j = 0; j < contain.length; j++) {
			contain[j].classList.add("active");
		}
	}
};
// Auto arrange grid
const arrange = function () {
	var j = 0;
	var x = contain.length % 8;
	var z = x;
	if (haveItemGrid == 0) {
	} else {
		haveItemGrid.forEach((value) =>
			value.classList.remove(value.classList[1])
		);
	}
	if (contain.length > 8) {
		for (let i = 0; i < contain.length - x - 1; i++) {
			if (j > 7) {
				j = 0;
			}
			contain[i].classList.add(`item${j}`);
			j++;
		}
		for (let i = 0; i < z; i++) {
			contain[contain.length - x--].classList.add(`item${i}`);
		}
	} else {
		for (let i = 0; i < contain.length; i++) {
			contain[i].classList.add(`item${i}`);
		}
	}
	haveItemGrid = $$(
		".item0, .item1, .item2, .item3, .item4, .item5, .item6, .item7"
	);
};

// Xu ly bang thong bao
const exitButton = $(".viewinfo .exit");
const viewInfo = $(".viewinfo");
const coat = $(".coat");
let haveActive = $$(".product-info");
const viewDetail = $(".viewinfo .btn1");
// Chon ra cac the con cua haveActive
const findChildHavActive = function (haveActive) {
	return (ObjectHaveActive = {
		nameTitle: haveActive.querySelector(".title p"),
		namePrice: haveActive.querySelector(".price"),
		nameImage: haveActive.querySelector("img"),
	});
};
// Chon ra cac the con cua viewInfo
const findChildViewInfo = function () {
	return (ObjectViewInfo = {
		titleShared: viewInfo.querySelector(".title p"),
		priceShared: viewInfo.querySelector(".price-info span"),
		imageShared: viewInfo.querySelector("img"),
	});
};
// Xu ly tat thong bao
exitButton.onclick = () => {
	viewInfo.style.display = "none";
	coat.style.display = "none";
};

// Xu ly mo thong bao va viet thong tin san pham
for (let i = 0; i < haveActive.length; i++) {
	haveActive[i].onclick = () => {
		viewInfo.style.animation = "notice ease-in-out 0.6s 0s";
		findChildHavActive(haveActive[i]);
		findChildViewInfo();
		viewInfo.style.display = "flex";
		coat.style.display = "block";
		ObjectViewInfo.titleShared.innerHTML =
		ObjectHaveActive.nameTitle.innerHTML;
		ObjectViewInfo.priceShared.innerHTML =
		ObjectHaveActive.namePrice.innerHTML;
		ObjectViewInfo.imageShared.src = ObjectHaveActive.nameImage.src;
		sessionStorageSet()
	};
}

     										// Xu ly login
// object constructor
function account(admin, username, password){
	this.admin = admin;
	this.username = username;
	this.password = password;
}
// 
let isLogin = false;
isLogin = sessionStorage.getItem("isLogin")
let notChange = true;
let listAccount = [
	{
		admin : 1,
		username : "admin",
		password : "12345"
	}
]
const loginButton = $(".nav-search button");
const exitButtonLogin = $(".login .exit");
const login = $(".login");
const signUp = $(".login .sign-up");
const signUpGmail = $(".login .gmail");
const loginTitle = $(".login .login-title");
const registerButton = $(".login .button p");
const accountLoginButton = $(".login .button")
const inputForm = $$(".login input")
const inputFormWarn = $$(".login input ~ p")
const loginSuccess = $(".login-success")
const loginFail = $(".login-fail")
const exitButtonSuccess = $(".login-success .exit")
const exitButtonFail = $(".login-fail .exit")
const cart = $(".nav-search .cart")
const avatar = $(".nav-search .avatar")
const nameUser = $(".avatar ~ p")
const loginOn = function(){
	login.style.animation = "notice ease-in-out 0.6s 0s";
	login.style.display = "block";
	coat.style.display = "block";
}
exitButtonLogin.onclick = () => {
	login.style.display = "none";
	coat.style.display = "none";
};
loginButton.onclick = () => {
	loginOn()
};
signUp.onclick = () => {
	if (notChange) {
		changeTo()
	} else {
		changeBack()
	}
};
// Xu ly doi qua doi lai giao dien sign up va login
const changeTo = () => {
	signUpGmail.style.display = "block";
	loginTitle.innerHTML = "REGISTER";
	registerButton.innerHTML = "REGISTER";
	signUp.innerHTML = "LOG IN";
	notChange = false;
}
const changeBack = () => {
	signUpGmail.style.display = "none";
	loginTitle.innerHTML = "LOG IN";
	registerButton.innerHTML = "LOG IN";
	signUp.innerHTML = "SIGN UP";
	notChange = true;
}
// Xu ly thong bao fail sign up va thong bao login thanh cong
accountLoginButton.onclick = () => {
	if(notChange){
		// Xu ly khi login
		for(let i = 0; i < listAccount.length; i++){
			if(inputForm[0].value == listAccount[i].username && inputForm[1].value == listAccount[i].password){
				exitAll();
				loginSuccess.style.display = "block";
				loginSuccess.style.animation = "notice ease-in-out 0.6s 0s"
				coat.style.display = "block"
				loginButton.style.display = "none"
				cart.style.display = "block"
				avatar.style.display = "block"
				nameUser.style.display = "inline"
				nameUser.innerHTML = `${inputForm[0].value}`
				isLogin = true
				sessionStorage.setItem("isLogin", isLogin)
				sessionStorage.setItem("nameUser", nameUser.innerHTML)
			}
			else{
				exitAll();
				loginFail.style.display = "block";
				loginFail.style.animation = "notice ease-in-out 0.6s 0s"
				coat.style.display = "block"
			}
		}
	}
	else{
		// Mo thong bao fail sign up
		for(let i = 0; i < inputForm.length - 1; i++){
			if(inputForm[i].value.length <= 5){
				inputFormWarn[i].style.display = "block";
			} 
		}
		if(!inputForm[2].value.includes("@gmail.com")){
			inputFormWarn[2].style.display = "block";
		}
		// Tat thong bao fail sign up
		for(let i = 0; i < inputForm.length; i++){
			inputForm[i].onclick = () => {
			inputFormWarn[i].style.display = "none";	
			}
		}
		// Xu ly luu username va password khi sign up thanh cong
		if(inputForm[0].value.length > 5 && inputForm[1].value.length > 5 && inputForm[2].value.includes("@gmail.com")){
			newAccount = new account(0,`${inputForm[0].value}`,`${inputForm[1].value}`)
			changeBack()
			return listAccount = listAccount.concat(newAccount)
		}
	}
}

// Xu ly giu nguyen login khi reset trang
if(isLogin){
	loginButton.style.display = "none"
	cart.style.display = "block"
	avatar.style.display = "block"
	nameUser.style.display = "inline"
	nameUser.innerHTML = sessionStorage.getItem("nameUser")
}
// Xu ly tat thong bao success va fail
exitButtonSuccess.onclick = () => {exitAll()}
exitButtonFail.onclick = () => {exitAll()}
// Xu ly bam vao coat thi exit login hoac viewInfo
coat.onclick = () => {
	exitAll()
};

// Xu ly exit moi thu
const exitAll = function(){
	coat.style.display = "none";
	login.style.display = "none";
	viewInfo.style.display = "none";
	loginSuccess.style.display = "none";
	loginFail.style.display = "none";
	addProductAsk.style.display = "none"
	addProductDone.style.display = "none"
}

// Xu ly reset cac input khi chuyen category hoac nut home
const resetSortInput = $$(
	"#price-choose option[value = any], #sort option[value = any]"
);
const resetValueInput = $$("#from, #to");
const resetInputFunction = function () {
	for (let i = 0; i < resetSortInput.length; i++) {
		resetSortInput[i].selected = true;
	}
};
const resetValueFunction = function () {
	for (let i = 0; i < resetValueInput.length; i++) {
		resetValueInput[i].value = "";
	}
};

// Truyen cac gia tri cua san pham xem chi tiet vao sessionStorage
const sessionStorageSet = function(){
 	viewInfoTitle = $(".viewinfo .title p").innerHTML;
	viewInfoPrice = $(".viewinfo .price-info span").innerHTML;
	viewInfoImage = $(".viewinfo img").src
	sessionStorage.setItem("viewInfoTitle", viewInfoTitle);
	sessionStorage.setItem("viewInfoPrice", viewInfoPrice);
	sessionStorage.setItem("viewInfoImage", viewInfoImage)
}

// Truyen cac gia tri san pham xem chi tiet sang gio hang sau khi bam nut them vao gio hang
const addProduct = $(".viewinfo .btn2")
const addProductSuccess = $(".sure-add .ok")
const addProductFailure = $(".sure-add .cancel")
const addProductAsk = $(".sure-add")
const addProductDone = $(".add-success")
const doneButton = $(".add-success .ok")
// Xu ly khi khach hang bam nut them vao gio
addProduct.onclick = () => {
	exitAll()
	addProductAsk.style.display = "block";
	coat.style.display = "block"
	addProductAsk.style.animation = "notice ease-in-out 0.6s 0s";
}
// Xu ly khi khach hang tu choi add san pham
addProductFailure.onclick = () => {
	exitAll()
}
// Xu ly khi khach hang dong y add san pham
let parse = sessionStorage.getItem("productCurrentArrayStringify")
productCurrentArray = JSON.parse(parse)
addProductSuccess.onclick = () => {
	if(isLogin){
	exitAll()
	addProductDone.style.display = "block"
	coat.style.display = "block"
	productCurrentArray === null ? productCurrentArray = [] : productCurrentArray
	viewInfoTitle = $(".viewinfo .title p").innerHTML;
	viewInfoPrice = $(".viewinfo .price-info span").innerHTML;
	viewInfoImage = $(".viewinfo img").src
	productNewArray = [{
		viewInfoTitle, viewInfoPrice, viewInfoImage
	}]
	productCurrentArray = productCurrentArray.concat(productNewArray)
	console.log(productCurrentArray)
	productStringify = JSON.stringify(productCurrentArray)
	sessionStorage.setItem("productStringify", productStringify);
	productCurrentArrayStringify = JSON.stringify(productCurrentArray)
	sessionStorage.setItem("productCurrentArrayStringify", productCurrentArrayStringify)
	numberProductOnCart.setAttribute('data-before-content',productCurrentArray == null ? 0 : `${productCurrentArray.length}`);
	}
	else{
		exitAll()
		loginOn()
	}
}
// Xu ly khi khach hang doi video
const rowVideo = $$(".video-summary .row")
const videoSummary = $$(".video-summary .row video")
const titleVideoSummary = $$(".video-summary .row p")
const videoDetail = $(".video-detail video")
const titleVideoDetail = $(".video-detail p")
for (let i = 0; i < rowVideo.length; i++){
	rowVideo[i].onclick = () => {
		a = videoDetail.src
		b = videoSummary[i].src
		videoDetail.src = b
		videoSummary[i].src = a
		c = titleVideoDetail.innerHTML
		d = titleVideoSummary[i].innerHTML
		titleVideoDetail.innerHTML = d
		titleVideoSummary[i].innerHTML = c
	}
}

// Xu ly hien so luong san pham
const numberProductOnCart = $(".nav-search .cart") 
numberProductOnCart.setAttribute('data-before-content',productCurrentArray == null ? 0 : `${productCurrentArray.length}`);
// Xu ly khi khach hang add san pham thanh cong va bam ok
doneButton.onclick = () => {
	exitAll()
}