
//---------------------------- Menu-items ---------------------------//
const toP = document.querySelector(".top")
window.addEventListener("scroll",function(){
    const X = this.pageYOffset;
    if(x>1)
    {
        toP.classList.add("active");
    }
    else
    {
        toP.classList.remove("active");
    }
})

//---------------------------- Menu-SLIDEBAR-CATEGORY ---------------------------//
const itemsliderbar = document.querySelectorAll(".category-left-li")

itemsliderbar.forEach(function(menu, index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})

//---------------------------- Product ---------------------------//
const bigImg = document.querySelector(".product-content-left-big-img img");
const smallImg = document.querySelectorAll(".product-content-left-small-img img");
smallImg.forEach(function(imgItem, X){
    imgItem.addEventListener("click", function(){
        bigImg.src = imgItem.src;
    })
})




const baoquan = document.querySelector(".baoquan");
const chitiet = document.querySelector(".chitiet");

if(baoquan) {
    baoquan.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "none"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "block"
    })
}
if(chitiet) {
    chitiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-chitiet").style.display = "block"
        document.querySelector(".product-content-right-bottom-content-baoquan").style.display = "none"
    })
}

const button = document.querySelector(".product-content-right-bottom-top")
if(button) {
    button.addEventListener("click", function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}