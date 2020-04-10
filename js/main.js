// First Slider
$(".slider-one")
    .not(".slick-initalized")
    .slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow:".site-slider .slider-btn .prev",
        nextArrow:".site-slider .slider-btn .next"
    });

// Second Slider
    $('.slider-two').not(".slick-initalized").slick({
        speed: 600,
        prevArrow:".site-slider-two .prev",
        nextArrow:".site-slider-two .next",
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });