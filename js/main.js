$(function () {




    $('.burger-menu').on('click', () => {
        if ($(window).width() >= 915) {
            $('.header__menu').slideToggle();



        } else {
            $('.header__menu').slideToggle();
            $('.pre-header').hide();
        }




    });

    $('.user-burger-menu').on('click', () => {
        $('.pre-header').toggle();
        $('.header__menu').hide();


    });



    $(window).resize(() => {
        if ($(window).width() >= 1100) {
            $('.header__menu').removeAttr('style');
        }
        if ($(window).width() >= 915) {
            $('.pre-header').removeAttr('style');
        }
        if ($(window).width() <= 475) {
            $('.search__form-input').attr('placeholder', 'Поиск');
        } else {
            $('.search__form-input').attr('placeholder', 'Найдите ваше идеальное доменное имя');
        }
        if ($(window).width() <= 915) {
            $(document).click(function (event) {
                if ($(event.target).closest("#user-burger-menu").length) return;
                $(".pre-header").hide();
                event.stopPropagation();
            });
        } else {
            $(document).click(function (event) {
                if ($(event.target).closest("#user-burger-menu").length) return;
                $(".pre-header").show();
                event.stopPropagation();
            });

        }
        if ($(window).width() <= 1100) {

            $(function () {
                $(document).click(function (event) {
                    if ($(event.target).closest(".burger-menu").length) return;
                    $(".header__menu").hide();
                    event.stopPropagation();
                });
            });
        } else {
            $(function () {
                $(document).click(function (event) {
                    if ($(event.target).closest(".burger-menu").length) return;
                    $(".header__menu").show();
                    event.stopPropagation();
                });
            });
        }


    });

    if ($(window).width() <= 475) {
        $('.search__form-input').attr('placeholder', 'Поиск');
    } else {
        $('.search__form-input').attr('placeholder', 'Найдите ваше идеальное доменное имя');
    }


    $('.reviews__items').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        dots: true,
        infinite: true,

        responsive: [{
            breakpoint: 1270,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    });

    let wow = new WOW({
        mobile: false,
    });

    wow.init()

    if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
        console.log('phone');
    } else {
        console.log('desktop');
        document.body.classList.add('no-touch');
    }

});