
const header = document.querySelector("header");
    window.addEventListener("scroll", function(){
        x = window.pageYOffset
        if(x > 0){
            header.classList.add("sticky");
        }
        else{
            header.classList.remove("sticky")
        }

    })

    // Begin Slider
    const imgItem = document.querySelectorAll(".aspect-ratio-169 img")
    const imgItemContainer = document.querySelector(".aspect-ratio-169")
    const dotItem = document.querySelectorAll(".dot")
    let index = 0;
    let imgLeng = imgItem.length;
    imgItem.forEach(function (image, index) {
        image.style.left = index * 100 + "%"
        dotItem[index].addEventListener("click", function () {
            slideRun(index)
        })
    })
    function slide() {
        index++;
        if (index >= imgNumber) {
            index = 0;
        }
        slideRun(index)
    }
    function slider(index) {
        imgItemContainer.style.left = "-" + index * 100 + "%"
        const dotActive = document.querySelector('.active')
        dotActive.classList.remove("active")
        dotItem[index].classList.add("active")
    }
    setInterval(slider, 5000)
    // End Slider