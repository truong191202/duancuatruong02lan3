const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
let rootProduct = []
let productStringify = sessionStorage.getItem("productStringify")
let newProduct = JSON.parse(productStringify)
let currentProductStringify = sessionStorage.getItem("currentProductStringify")
currentProduct = JSON.parse(currentProductStringify)
currentProduct = rootProduct.concat(currentProduct).concat(newProduct)
const productList = $(".product-list")
let productBlock = 0
let ArrayToCheck = []
    // Tao ra san pham moi
    currentProduct.forEach(function(value, key){
        // Check xem product co bi trung lap khong
        isValueExist = ArrayToCheck.some(p => p.viewInfoTitle === value.viewInfoTitle && p.viewInfoPrice === value.viewInfoPrice && p.viewInfoImage === value.viewInfoImage)
        // Render ra product
        if(value !== null && value !== undefined && !isValueExist){
        ArrayToCheck.push(value)
        // Tạo một đối tượng div
        var productDiv = document.createElement('div');
        // Thêm class "product" vào div
        productDiv.classList.add('product');
        // Tạo thẻ img và đặt thuộc tính src và alt
        var img = document.createElement('img');
        img.setAttribute('src', `${value.viewInfoImage}`);
        img.setAttribute('alt', '');
        // Tạo div cho nội dung sản phẩm
        var contentDiv = document.createElement('div');
        contentDiv.classList.add('content');
        // Tạo div cho tiêu đề sản phẩm và đặt nội dung
        var titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        titleDiv.innerHTML = `<p>${value.viewInfoTitle}</p>`;
        // Tạo div cho phụ tiêu đề sản phẩm và đặt nội dung
        var subTitleDiv = document.createElement('div');
        subTitleDiv.classList.add('sub-title');
        subTitleDiv.innerHTML = '<p>Kiểu dáng năng động và thời trang rất thích hợp để làm quà tặng<br/>Vạch chia rõ ràng và chi tiết từng milimets<br/>Vỏ máy bằng thép chống oxy hóa hiệu quả</p>';
        // Tạo div cho giá sản phẩm và đặt nội dung
        var priceDiv = document.createElement('div');
        priceDiv.classList.add('price');
        priceDiv.innerHTML = `<p>${value.viewInfoPrice}</p>`;
        // Tạo div cho số lượng sản phẩm và đặt nội dung
        var numberChooseDiv = document.createElement('div');
        numberChooseDiv.classList.add('number-choose');
        // Tạo nút giảm số lượng sản phẩm
        var lessBtn = document.createElement('div');
        lessBtn.classList.add('btn');
        lessBtn.classList.add('less');
        lessBtn.innerHTML = '-';
        // Tạo thẻ p để hiển thị số lượng sản phẩm
        var numberP = document.createElement('p');
        numberP.classList.add('number');
        numberP.innerHTML = '1';
        // Tạo nút tăng số lượng sản phẩm
        var moreBtn = document.createElement('div');
        moreBtn.classList.add('btn');
        moreBtn.classList.add('more');
        moreBtn.innerHTML = '+';
        // Thêm nút giảm, số lượng và nút tăng vào div số lượng sản phẩm
        numberChooseDiv.appendChild(lessBtn);
        numberChooseDiv.appendChild(numberP);
        numberChooseDiv.appendChild(moreBtn);
        // Tạo div cho tổng giá sản phẩm và đặt nội dung
        var sumDiv = document.createElement('div');
        sumDiv.classList.add('sum');
        sumDiv.innerHTML = '<p>1200$</p>';
        // Tạo div cho các nút thao tác sản phẩm
        var actionDiv = document.createElement('div');
        actionDiv.classList.add('action');
        // Tạo nút xóa sản phẩm
        var deleteBtn = document.createElement('div');
        deleteBtn.classList.add('btn');
        deleteBtn.innerHTML = '<i class="far fa-trash-alt"></i>';
        // Tạo nút hủy đặt hàng
        var cancelBtn = document.createElement('div');
        cancelBtn.classList.add('btn');
        cancelBtn.innerHTML = '<i class="fas fa-calendar-times"></i>';
        // thao tác sản phẩm
        actionDiv.appendChild(deleteBtn);
        actionDiv.appendChild(cancelBtn);
        // Thêm ảnh, nội dung sản phẩm, giá sản phẩm, số lượng sản phẩm, tổng giá và các nút thao tác vào div sản phẩm
        productDiv.appendChild(img);
        productDiv.appendChild(contentDiv);
        contentDiv.appendChild(titleDiv);
        contentDiv.appendChild(subTitleDiv);
        productDiv.appendChild(priceDiv);
        productDiv.appendChild(numberChooseDiv);
        productDiv.appendChild(sumDiv);
        productDiv.appendChild(actionDiv);
        // Đặt div sản phẩm vào một đối tượng cha trong HTML (ví dụ, một thẻ div với id là "products")
        productList.appendChild(productDiv);
        }  
        else{
            productBlock = $$(".product")
            productBlock.forEach(function(valueProduct){
                valueProductTitle = valueProduct.querySelector(".title p")
                valueProductPrice = valueProduct.querySelector(".price p")
                valueProductImage = valueProduct.querySelector("img")
                valueProductNumber = valueProduct.querySelector(".number-choose .number")
                if(value.viewInfoTitle == valueProductTitle.innerHTML && value.viewInfoPrice == valueProductPrice.innerHTML && value.viewInfoImage == valueProductImage.src){
                    valueProductNumber.innerHTML = parseInt(valueProductNumber.innerHTML) + 1
                }
            })
        } 
}  
)
// Xu ly tang giam so luong
const more = $$(".more")  
const less = $$(".less") 
let currentChangeNumber = {}
for(let i = 0; i < more.length; i++){
    more[i].onclick = () => {
        more[i].closest(".number-choose").querySelector(".number").innerHTML = 
        parseInt(more[i].closest(".number-choose").querySelector(".number").innerHTML) + 1
        calculateSum()
        calculateAllSum()
    }
}

for(let i = 0; i < more.length; i++){
    less[i].onclick = () => {
        if(parseInt(less[i].closest(".number-choose").querySelector(".number").innerHTML) > 1){
            less[i].closest(".number-choose").querySelector(".number").innerHTML = 
            parseInt(less[i].closest(".number-choose").querySelector(".number").innerHTML) - 1
            calculateSum()
            calculateAllSum()
        }
    }
}
// Xu ly tinh tong tien cua tung product
const sum = $$(".sum p")
const price = $$(".price p")
const number = $$(".number")
const calculateSum = function(){
    for(let i = 0; i < sum.length; i++){
        sum[i].innerHTML = "$" + price[i].innerHTML.replace("$", "") * number[i].innerHTML 
    }
}
calculateSum()
// Tinh tong tien cua tat ca product
const allSum = $(".pay-sum span")
const calculateAllSum = function(){
    startSum = 0
    for(let i = 0; i < sum.length; i++){
        startSum += parseInt(sum[i].innerHTML.replace("$", ""))
    }
    allSum.innerHTML = startSum
}
calculateAllSum()
// Xu ly khi khach hang bam vao nut thanh toan
const payButton = $(".pay-btn")
const coat = $(".coat")
const payForm = $(".pay-form")
const exitButton = $(".exit")
payButton.onclick = () => {
    coat.style.display = "block"
    payForm.style.display = "block"
    payForm.style.animation = "notice ease-in-out 0.6s 0s";
}
// Xu ly khi khach hang bam vao thanh toan sau khi dien form
const payButtonOnForm = $(".pay-form .btn")
const addressForm = $("#address")
const addressWaring = $("#address ~ .waring")
const phoneNumberForm = $("#phonenumber")
const phoneWaring = $("#phonenumber ~ .waring")
const wrongInfoNotice = $(".wrong-info")
const surePayNotice = $(".sure-pay")
const surePayNoticeCancel = $(".sure-pay .cancel")
const surePayNoticeOk = $(".sure-pay .ok")
const paySuccessNotice = $(".pay-success")
const paySuccessNoticeOk = $(".pay-success .ok")
const WrongInfoOkButton = $(".wrong-info .ok")
const productRendered = $$(".product")
payButtonOnForm.onclick = () => {
    surePaySumWrite()
    if(addressForm.value.length == 0){
        addressWaring.style.display = "block";
    }
    if(phoneNumberForm.value.length < 9 || phoneNumberForm.value[0] !== "0"){
        phoneWaring.style.display = "block";
        wrongInfoNotice.style.display = "block"
        wrongInfoNotice.style.animation = "notice ease-in-out 0.6s 0s";
    }
    if(addressForm.value.length > 0 && phoneNumberForm.value.length >= 9 && phoneNumberForm.value[0] == "0"){
        surePayNotice.style.display = "block"
        surePayNotice.style.animation = "notice ease-in-out 0.6s 0s";
    }
}
surePayNoticeCancel.onclick = () =>{
    surePayNotice.style.display = "none"
}
surePayNoticeOk.onclick = () => {
    surePayNotice.style.display = "none"
    paySuccessNotice.style.display = "block"
    paySuccessNotice.style.animation = "notice ease-in-out 0.6s 0s";
    for(let i = 0; i < productRendered.length; i++){
        productRendered[i].style.display = "none"
    }
    allSum.innerHTML = 0
    sessionStorage.removeItem("productCurrentArrayStringify")
    sessionStorage.removeItem("productStringify")
}
paySuccessNoticeOk.onclick = () => {
    paySuccessNotice.style.display = "none"
    payForm.style.display = "none"
    coat.style.display = "none"
}
WrongInfoOkButton.onclick = () => {
    wrongInfoNotice.style.display = "none"
}
addressForm.onclick = () => addressWaring.style.display = "none";
phoneNumberForm.onclick = () => phoneWaring.style.display = "none";
// Xu ly viet so tien vao sure-pay
const surePaySum = $(".sure-pay .sub-title span")
const surePaySumWrite = function(){
    surePaySum.innerHTML = allSum.innerHTML
}
// Xu ly tat moi thu khi bam vao exitButton
exitButton.onclick = () => {
    exitAll()
}
// Xu ly tat moi thu khi bam vao coat
coat.onclick = () => {
    exitAll()
}
// Xu ly exit moi thu
const exitAll = function(){
	coat.style.display = "none";
    payForm.style.display = "none";
}
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
returnProduct = currentProduct.slice(0, (currentProduct.length - newProduct.length));
currentProductStringify = JSON.stringify(returnProduct)
sessionStorage.setItem("currentProductStringify" ,currentProductStringify)
