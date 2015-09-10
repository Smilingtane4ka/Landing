$(document).ready(function() {
    $slider = $('.js-bxslider').bxSlider({
        mode: 'vertical',
        touchEnabled: true,
        adaptiveHeight: true,
        controls: false,
        pager: false,
        infiniteLoop: false,
        onSliderLoad: function(currentIndex) {
            $('.mac-content > div').hide();
            $(document).on('mousewheel', function(event) {
                if (event.deltaY === 0) {
                    return;
                }
                if (event.deltaY < 0) {
                    $slider.goToNextSlide();
                } else {
                    $slider.goToPrevSlide();
                }
            });
        },
        onSlideNext: function($slideElement, oldIndex, newIndex) {
            if (newIndex == 1) {
                $('.mac-container').fadeIn('slow');
            }
            if (newIndex == 10) {
                $('.mac-container').fadeOut('slow');
            }
            console.log(oldIndex);
            console.log(newIndex);
            if (oldIndex >= 0) {
                $('.mac-content > div').eq(oldIndex - 1).hide();
            }
            $('.mac-content > div').eq(newIndex - 1).slideDown();
        },
        onSlidePrev: function($slideElement, oldIndex, newIndex) {
            if (newIndex == 0) {
                $('.mac-container').fadeOut('slow');
            }
            if (newIndex == 9) {
                $('.mac-container').fadeIn('slow');
            }
            $('.mac-content > div').eq(newIndex - 1).slideDown();
            $('.mac-content > div').eq(oldIndex - 1).hide();
        }
    });
});
