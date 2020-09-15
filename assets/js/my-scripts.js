$(document).ready(function () {

    // expand function
    $('body').on('click', '.click-expand', function (e) {
        let this_data = $(this).attr('data-expand');
        let this_child = $(this).parent().find('.expand-block:first');

        let arrow = $(this).find('.icon-arrow');

        if (arrow.hasClass('icon-arrow__top')) {
            $(arrow).removeClass('icon-arrow__top');
        } else {
            $(arrow).addClass('icon-arrow__top');
        }
        $(arrow).toggleClass('icon-arrow__bottom');

        if (this_data === 'true') {
            this_child.slideUp(250);
            $(this).attr('data-expand', 'false');
        } else if (this_data === 'false') {
            this_child.slideDown(250);
            $(this).attr('data-expand', 'true');
        } else {
            this_child.slideUp(250);
        }
    });


    // change_active function
    $('body').on('click', '.change_active', function () {
        let thic_parent = $(this).parent();
        let this_active = $(thic_parent).find('.change_active');
        $(this_active).removeClass('active');
        $(this).addClass('active');
    });

    // catalog function

    // function clickCatalogBtnIcon() {
    //     if ($('.clickCatalogBtnIcon').hasClass('icon-catalog')) {
    //         $('.icon-catalog').removeClass('icon-catalog');
    //         $('.clickCatalogBtnIcon').addClass('icon-catalog-cancel');
    //     } else if ($('.clickCatalogBtnIcon').hasClass('icon-catalog-cancel')) {
    //         $('.icon-catalog-cancel').removeClass('icon-catalog-cancel');
    //         $('.clickCatalogBtnIcon').addClass('icon-catalog');
    //     }
    // }

    if (window.screen.width >= 768) {
        $('body').on('click', '.clickCatalogOpenClose', function () {
            $(this).parent().toggleClass('active');
            $('.clickCatalogName').removeClass('active');
            $('.catalogSubMenu').removeClass('open');
            $('.arrowBackToCategories').hide();
            $('body').toggleClass('overflow-hidden');
            $('.clickCatalogBtnIcon').toggle();
            $('.clickCatalogBtnIconClose').toggle();
            $('.catalogItem').each(function () {
                let this_parent = $(this).parent();
                let this_childrn = $(this_parent).children();
                let first_box_show = $(this_childrn)[0];
                $(first_box_show).find('.clickCatalogName').addClass('active');
                let catalogSubMenuFirst = $(first_box_show).find('.catalogSubMenu');
                catalogSubMenuFirst.addClass('open');
            });

            $('.headerCatalog').toggle();
        });
    }

    if (window.screen.width < 768) {
        $('body').on('click', '.clickCatalogOpenClose', function () {
            $(this).parent().toggleClass('active');
            $('.clickCatalogName').removeClass('active');
            $('.catalogSubMenu').removeClass('open');
            $('.headerCatalog').toggle();
            $('.arrowBackToCategories').hide();
            $('.select-zone__nameCatalog').text('Բաժիններ');
            $('body').toggleClass('overflow-hidden');
            $('.clickCatalogBtnIcon').toggle();
            $('.clickCatalogBtnIconClose').toggle();
        });
        $('body').on('click', '.arrowBackToCategories', function () {
            $(this).hide();
            $('.catalogSubMenu').removeClass('open');
            $('.clickCatalogName').removeClass('active');
            $('.select-zone__nameCatalog').text('Բաժիններ');
        });
    }

    $('body').on('mouseover', '.clickCatalogName', function () {
        let catalogList = $(this).parent();
        let catalogItem = $(catalogList).parent();
        let catalogItemOpen = $(catalogItem).find('.catalogSubMenu');
        let catalogName = $(this).parent();
        let subMenu = $(catalogName).find('.catalogSubMenu');
        if ($(catalogItemOpen).hasClass('open')) {
            $(catalogItemOpen).removeClass('open');
        }
        $(subMenu).addClass('open');

        if (window.screen.width < 768) {
            let child_select_name = $('body').find('.select-zone__nameCatalog');
            let select_text = $(this).find('span').text();
            console.log(select_text)
            $(child_select_name).text(select_text);
            $('.arrowBackToCategories').show();
        }
    });

    $('body').on('mouseover', '.change_activeCatalog', function () {
        let this_active = $('.change_activeCatalog');
        $(this_active).removeClass('active');
        $(this).addClass('active');
    });

    // function for window click
    $(window).on('click', function (e) {
        if (!$(e.target).closest('.window-click').length) {
            $('.headerCatalog').hide();
            $('.clickCatalogName, .boxCatalogBtn').removeClass('active');
            $('.catalogSubMenu').removeClass('open');
            $('.clickCatalogBtnIcon').show();
            $('.clickCatalogBtnIconClose, .arrowBackToCategories').hide();
            $('.select-zone__nameCatalog').text('Բաժիններ');
            $('body').removeClass('overflow-hidden');
        }
    });

    // nav-scrollDown
    $(function () {
        let lastScrollTop = 0,
            delta = 140;
        $(window).scroll(function (event) {
            let st = $(this).scrollTop();
            if (Math.abs(lastScrollTop - st) <= delta) return;
            if (st > lastScrollTop) {
                // downscroll code
                $('#nav').addClass('nav-scrollDown');
            } else {
                // upscroll code
                $('#nav').removeClass('nav-scrollDown');
            }
            lastScrollTop = st;
        });
    });

    // clickMobileSearsh
    $('body').on('click', '.clickMobileSearsh', function () {
        $('.mobileSearchForm').css({
            display: 'flex',
        })
    });

    $('body').on('click', '.clickMobileSearsClose', function () {
        $('.mobileSearchForm').css({
            display: 'none',
        })
    });


    // animation js
    new WOW().init();


    // filters

    $('.dropdown-click__open').on('click', function () {
        $('.dropdown-modal').hide()
    })

    $('.dropdown-click__open').on('click', function () {
        let parent = $(this).parent()
        let child = $(parent).find('.dropdown-modal')
        $(child).fadeToggle()
        if ($('.dropdown-modal').is(":hidden")) {
            $('.dropdown').removeClass('dropdown-modal__open')
        }
        $(parent).addClass('dropdown-modal__open')
    })

    $('.select-item').on('click', function () {
        let this_parent = $(this).parent()
        let parent_this = $(this_parent).parent()
        let parent = $(parent_this).parent()
        let child_select_input = $(parent).find('.select-zone__input')
        let select_text = $(this).text()
        $(child_select_input).val(select_text);
    })

    //  ================ -RANGE-JS-START- ================


    $('#range-calc').on('input', function () {
        this.value = Math.min(this.value, this.parentNode.childNodes[5].value - 1);
        let value = (this.value / parseInt(this.max)) * 100
        var children = this.parentNode.childNodes[1].childNodes;
        children[1].style.width = value + '%';
        children[5].style.left = value + '%';
        children[7].style.left = value + '%';
        children[11].style.left = value + '%';
        children[11].childNodes[1].innerHTML = this.value;
    })
    $('#range-calc__second').on('input', function () {
        this.value = Math.max(this.value, this.parentNode.childNodes[3].value - (-1));
        let value = (this.value / parseInt(this.max)) * 100
        var children = this.parentNode.childNodes[1].childNodes;
        children[3].style.width = (100 - value) + '%';
        children[5].style.right = (100 - value) + '%';
        children[9].style.left = value + '%';
        children[13].style.left = value + '%';
        children[13].childNodes[1].innerHTML = this.value;
    })



});