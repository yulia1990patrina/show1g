$(function(){
    $('.banner-section__slider').slick({
    dots: true,
    arrows: false,
    });
    
    $('.tab').on('click', function(e){
        e.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active')
    });

    $('.history__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn romance-slider__slider-btnprev"><img src="icons/romance/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn romance-slider__slider-btnnext"><img src="icons/romance/arrow-right.svg" alt=""></button>',
            responsive: [
        {
            breakpoint: 890,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }
    ]
    });
    $('.all-history__tabs').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn romance-slider__slider-btnprev"><img src="icons/romance/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn romance-slider__slider-btnnext"><img src="icons/romance/arrow-right.svg" alt=""></button>',
        responsive: [
        {
            breakpoint: 1880,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true
            }
        }
    ]
    });
    
    $('.characters__slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn romance-slider__slider-btnprev"><img src="icons/romance/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn romance-slider__slider-btnnext"><img src="icons/romance/arrow-right.svg" alt=""></button>',
        responsive: [
        {
            breakpoint: 1880,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 968,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                dots: true
            }
        },
                {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }
    ]
    });

    document.querySelectorAll('.faq__item').forEach(item => {
    const question = item.querySelector('.faq__question');
    const answer = item.querySelector('.faq__answer');

    question.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');
    if (isOpen) {
        answer.style.maxHeight = '0';
        answer.style.paddingTop = '0';
        answer.style.paddingBottom = '0';
        item.classList.remove('active');
    } 
    else {
        answer.style.maxHeight = answer.scrollHeight + '0px';
        answer.style.paddingTop = '30px';
        answer.style.paddingBottom = '30px';
        item.classList.add('active');
    }
    });
});
    $('.romance-guide__slider').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn romance-slider__slider-btnprev"><img src="icons/romance/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn romance-slider__slider-btnnext"><img src="icons/romance/arrow-right.svg" alt=""></button>',
            responsive: [
        {
            breakpoint: 1610,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 760,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }
    ]
    });
        $('.walkthrough__tabs, .walkthrough__tabs-1').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="icons/romance/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="icons/romance/arrow-right.svg" alt=""></button>',
        responsive: [
        {
            breakpoint: 1610,
            settings: {
                slidesToShow: 6
            }
        },
        {
            breakpoint: 1420,
            settings: {
                slidesToShow: 5
            }
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true
            }
        }
    ]
    });
    document.querySelectorAll('.toggle-submenu').forEach(btn => {
    btn.addEventListener('click', () => {
    btn.parentElement.classList.toggle('open');
    });
    });
    $('.romance-gallery__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn romance-slider__gallery-btnprev"><img src="icons/romance/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn romance-slider__gallery-btnnext"><img src="icons/romance/arrow-right.svg" alt=""></button>',
            responsive: [
        {
            breakpoint: 1260,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true
            }
        }
    ]
    });
});