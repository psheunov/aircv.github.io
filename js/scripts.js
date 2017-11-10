$(function() {
    $('.menu-opener').on('click', function() {
        $('.main-nav').slideToggle(300, function() {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });

    $(document).on('click', '.scroll[href^="#"]', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });

    $('.dropdown-title').click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        if ($(this).parent().hasClass('active')) {
            $('.dropdown.active').removeClass('active');
        } else {
            $('.dropdown.active').removeClass('active');
            $(this).parent().addClass('active');
        }
    });

    $('.dropdown-box').click(function(event) {
        event.stopPropagation();
    });

    $(document).click(function() {
        $('.dropdown.active').removeClass('active');
    });

    $('.check-all').click(function(event) {
        event.preventDefault();
        $(this).parent().next().find('input[type=checkbox]').prop('checked', true);
    });

    $('.prop-select').niceSelect();

    $('.thumbnails button').click(function() {
        $('.thumbnails button.active').removeClass('active');
        $('.preview-images .preview.active').removeClass('active');
        $('.preview-images .preview').eq($(this).index()).addClass('active');
        $(this).addClass('active');
        currentSlide = $(this).index();
    });

    $('.preview-images').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        dots: false,
        fade: true,
        asNavFor: '.thumbnails',
        responsive: [{
                breakpoint: 768,
                settings: {
                    dots: true
                }
            }
        ]
    });

    $('.thumbnails').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.preview-images',
        dots: false,
        infinite: false,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        autoplay: true,
        autoplaySpeed: 8000
    });

    $('.reviews-list').slick({
        dots: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        vertical: true,
        verticalSwiping: true,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    vertical: false,
                    verticalSwiping: false
                }
            }
        ]
    });

    $('.recommended-list').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.your-order-list').slick({
        dots: false,
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },{
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.steps form').submit(function(event) {
        event.preventDefault();
        if ($(this).parent().siblings().length > $(this).parent().index()) {
            $(this).parent().removeClass('active');
            $(this).parent().next().addClass('active');
            $('.steps-road li').eq($(this).parent().index()+1).addClass('active');
        }
    });

    $('.btn-back').click(function(event) {
        event.preventDefault();
        if ($(this).parents('li').index() > 0) {
            $(this).parents('li').removeClass('active');
            $(this).parents('li').prev().addClass('active');
            $('.steps-road li').eq($(this).parents('li').index()).removeClass('active');
        }
    });

    $('.toggle-link').click(function(event) {
        event.preventDefault();
        $(this).parent().next().slideToggle(500, function() {});
        $(this).toggleClass('active');
    });

    $('.subscribe-form').submit(function() {

    });

    $('input[type=tel]').mask("+ 7 (999) 999-99-99");

    $('.filter.xs-only .filter-params li').click(function() {
        $(this).remove();
    });

    $('.filter.xs-only .filter-selection button[type=reset]').click(function() {
        $('.filter.xs-only .filter-params li').remove();
    });
});

function toggleInfo(index) {
    $('.delivery-info .info.active').removeClass('active');
    $('.delivery-info .info').eq(index).addClass('active');
    $('.delivery-info-titles button.active').removeClass('active');
    $('.delivery-info-titles button').eq(index).addClass('active');
}
