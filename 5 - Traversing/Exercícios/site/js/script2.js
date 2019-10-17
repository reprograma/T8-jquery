$(function () {
    $('input').filter('[type="text"]').parent().addClass('alert alert-info');

    $('.list-group-item').on('click', function () {
        $(this).removeClass('list-group-item-dark').addClass('list-group-item-info');
        $(this).siblings().removeClass('list-group-item-info').addClass('list-group-item-dark');
    })
})