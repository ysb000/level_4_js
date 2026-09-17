const heroB = new Swiper('.hero_bnr',{
    autoplay:{delay:3000,},
    loop:true,
    navigation:{
        nextEl:'.hero .swiper-button-next',
        prevEl:'.hero .swiper-button-prev'
    }
})

const bestS = new Swiper('.best-swiper', {
    slidesPerView:5,
    spaceBetween:10,
})
const bookS = new Swiper('.book-swiper', {
    slidesPerView:4,
    spaceBetween:10,
})