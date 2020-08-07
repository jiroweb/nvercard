$(document).ready(function () {
    // catalog function
    if (window.screen.width < 768) {
        $("body").on('click', '.select-itemCatalog', function () {
            let child_select_name = $('body').find('.select-zone__nameCatalog');
            let select_text = $(this).text();
            $(child_select_name).text(select_text);
            $('.arrowBackToCategories').css('display', 'flex');
        });
        $('body').on('click', '.arrowBackToCategories', function () {
            $(this).hide();
            $('.catalogSubMenu').removeClass('open');
            $('.clickCatalogName').removeClass('active');
            $('.select-zone__nameCatalog').text('Весь каталог');
        });
    }
    if (window.screen.width >= 768) {
        $('body').on('click', '.clickCatalogOpenClose', function () {
            $('.clickCatalogName').removeClass('active');
            $('.catalogSubMenu').removeClass('open');

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


    $("body").on('mouseover', '.clickCatalogName', function () {
        let catalogList = $(this).parent();
        let catalogItem = $(catalogList).parent();
        let catalogItemOpen = $(catalogItem).find('.catalogSubMenu');
        let catalogName = $(this).parent();
        let subMenu = $(catalogName).find('.catalogSubMenu');
        if ($(catalogItemOpen).hasClass('open')) {
            $(catalogItemOpen).removeClass('open');
        }
        $(subMenu).addClass('open');
    });
    $("body").on('mouseover', '.change_activeCatalog', function () {
        let this_active = $('.change_activeCatalog');
        $(this_active).removeClass('active');
        $(this).addClass('active');
    });




    // function for window click
    $(window).on('click', function (e) {
        if (!$(e.target).closest('.window-click').length) {
            $('.headerCatalog').hide();
            $('.clickCatalogName').removeClass('active');
            $('.catalogSubMenu').removeClass('open');
        }
    });
});