$(function () {

    function configurateHover(){
        $('.card-title').off('mouseenter').on('mouseenter',
            function () {
                $(this).css('color', 'yellow');
            }
        )

        $('.card-title').off('mouseleave').on('mouseleave',
            function () {
                $(this).css('color', 'black');
            }
        )
    }

    configurateHover();

    $('.btn-toggle').click(function () {
        $('.card:eq(2)').toggle(6000);
        $('.card:eq(0)').toggle(3000);
        $('.card:eq(1)').toggle(1000);
    })

    $('.btn-copy').click(function () {
        let content = $(".div-original").html();

        $(".div-original").after('<div class="row">' + content + '</div>');

        configurateHover();
    })




});