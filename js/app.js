(function($) {
    $(function() {
        $(document).on('click', '.modal .close', function(e){
            e.preventDefault();
            $(this).parents('.modal').addClass('hidden');
        });

        $(document).on('click', '.member a', function(e){
            e.preventDefault();
            var that = $(this);
            $('.modal .photo img').attr('src', that.find('img').attr('src'));
            $('.modal .phone').html(that.attr('data-phone'));
            $('.modal .email a').html(that.attr('data-email')).attr('href', 'mailto:'+that.attr('data-email'));
            $('.modal .name').html(that.siblings('.name').html());
            $('.modal .position').html(that.siblings('.position').html());
            $('.modal .description').html(that.siblings('.description').html());
            $('#biography').removeClass('hidden');

        });

        $('.jcarousel').jcarousel({
                wrap: 'both'
            })
        //$('.slider-wrapper>.jcarousel').jcarouselAutoscroll({
        //        interval: 5000
        //});

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'li', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'li', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination({
                'perPage':1,
                'item': function(page, carouselItems) {
                    return '<li class="' + (page == 1 ? "active" : "") + '">&nbsp;</li>';
                }
            });

    });

})(jQuery);
