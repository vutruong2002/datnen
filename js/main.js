$('.img_product_One').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
});
let show_img = document.querySelectorAll('.show_img')
show_img.forEach((a) => {
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


$('.single-item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 6000,
});
let toggle = false;
function footer(){
  var images = document.querySelectorAll('.icon_list');
  images.forEach((element,index) => {
      var foter = document.querySelectorAll('.subnav_mobile')
      var li = document.querySelectorAll('.bg_li_check')
      element.addEventListener('click', () => {
           toggle = !toggle;
          if(!toggle){
            foter[index].classList.add('hedden');
            li[index].classList.remove('bg_li');
          }
          else{
              foter[index].classList.remove('hedden');
              li[index].classList.add('bg_li');
          }
      })
  })
}
footer();

function Clone(){
  var menu = document.querySelector('.menu_mobile_a');
  document.querySelectorAll(".open").forEach((element) => {
      element.addEventListener("click", () => {
          toggle = !toggle;
          if (!toggle) {
              console.log(toggle)
              menu.classList.remove('hedden');
          } else {
              console.log(toggle)
              menu.classList.add('hedden');
          }
      })
  });
  
}
Clone();
