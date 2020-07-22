// FUNCTIONS
$(document).ready(function () {
    // expand function
    $("body").on('click', '.click-expand', function (e) {
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
            this_child.slideUp();
            $(this).attr('data-expand', 'false');
            $(this).find('.text-show').show();
            $(this).find('.text-hide').hide();
            $('.input-expand').blur();
        } else if (this_data === 'false') {
            this_child.slideDown();
            $(this).attr('data-expand', 'true');
            $(this).find('.text-show').hide();
            $(this).find('.text-hide').show();
        } else {
            this_child.slideUp();
            $('.input-expand').blur();
        }
    });
    // change_active function
    $("body").on('click', '.change_active', function () {
        let this_active = $('.change_active');
        $(this_active).removeClass('active');
        $(this).addClass('active');
    });

    // function for window click
    $(window).on('click', function (e) {
        if (!$(e.target).closest('.window-click').length) {
            $('.dropdown-list').hide();
            $('.creditClick, .creditDrop').removeClass('active');
            $('.dropdown-select').attr('data-expand', 'false');
            let arrow = $('.dropdown .icon-arrow');
            if (arrow.hasClass('icon-arrow__top')) {
                $(arrow).removeClass('icon-arrow__top');
            }
            $(arrow).addClass('icon-arrow__bottom');
        }
    });
});

// add files style js function
function dragEnter() {
    let body = document.body;
    body.classList.add("adding-file");
}

function dragLeave() {
    let body = document.body;
    body.classList.remove("adding-file");
}

function drop() {
    let body = document.body;
    body.classList.remove("adding-file");
}

//   //  ================ -RANGE-JS-START- ================
 
 

$('#rangeCalc').on('input', function () {
    this.value=Math.min(this.value,this.parentNode.childNodes[5].value-1);
    let value = (this.value/parseInt(this.max))*100
    var children = this.parentNode.childNodes[1].childNodes;
    children[1].style.width=value+'%';
    children[5].style.left=value+'%';
    children[7].style.left=value+'%';children[11].style.left=value+'%';
    children[11].childNodes[1].innerHTML=this.value;
})
$('#range-calc__second').on('input', function () {
     this.value=Math.max(this.value,this.parentNode.childNodes[3].value-(-1));
    let value = (this.value/parseInt(this.max))*100
    var children = this.parentNode.childNodes[1].childNodes;
    children[3].style.width=(100-value)+'%';
    children[5].style.right=(100-value)+'%';
    children[9].style.left=value+'%';children[13].style.left=value+'%';
    children[13].childNodes[1].innerHTML=this.value;
})


//  ================ -RANGE-JS-END- ================

// function for play video
$('.video-play__bg').click(function () {
var this_prt = $(this).parent()
var parent_video = $(this_prt)
var icon_video = $(parent_video).find(".video-play__bg")
var video = $(parent_video).find(".video")
$(video).trigger('play')
$(video).attr("controls", "controls")
$(icon_video).fadeOut()
});




