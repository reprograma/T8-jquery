$(function(){
    $('button').click(function(){
        $('.card:eq(2)').toggle(6000);
        $('.card:eq(0)').toggle(3000);
        $('.card:eq(1)').toggle(1000);        
    })
});