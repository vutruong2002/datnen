$('.img_product_One').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});
let show_img = document.querySelectorAll('.show_img')
show_img.forEach((a) => {
  // document.querySelectorAll(".img-top").src = a[0].src;
  a.children[0].innerHTML; 
  a.addEventListener('mouseover', () => {
    let images = a.querySelectorAll('.img_child');
    images.forEach((element) => {
      element.addEventListener('mouseover', () => {
       a.querySelector(".img-top").src = element.src;


      })
    })
  })
})



//   function myFunction(x) {
//     var element = document.querySelector('.freeback_destop');
//     var element = document.querySelector('.freeback_mobile');
//     if (x.matches) {
//       element.classList.add('single-item');

//     } else {
//       element.classList.remove('single-item');
//     }

//   }

// const mmObj = window.matchMedia("(max-width: 550px)")
// myFunction(mmObj);
// mmObj.addListener(myFunction)

$('.single-item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
});
