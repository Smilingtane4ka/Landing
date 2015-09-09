$(document).ready(function() {
    $slider = $('.js-bxslider').bxSlider({
        mode: 'vertical',
        touchEnabled: true,
        adaptiveHeight: true,
        controls: false,
        infiniteLoop: false,
        onSliderLoad: function(currentIndex) {
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
        }
    });
});
