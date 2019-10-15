$(function(){
    $('button').click(function(){
        $('.card:eq(2)').slideDown(6000);
        $('.card:eq(0)').slideDown(3000);
        $('.card:eq(1)').slideDown(1000);        
    })
})