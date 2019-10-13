## jQuery

### Efeitos

Efeitos, firulas, giroflex e muito mais.

#### hide(), show(), toggle()

    $("#hide").click(function(){
        $("p").hide();
    });

    $("#show").click(function(){
        $("p").show();
    });

    $("button").click(function(){
        $("p").toggle();
    });

#### fadeIn(), fadeOut(), fadeToggle(), fadeTo()

    $("button").click(function(){
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });

    $("button").click(function(){
        $("#div1").fadeOut();
        $("#div2").fadeOut("fast");
        $("#div3").fadeOut(3000);
    });

    $("button").click(function(){
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.7);
    });

#### slideDown(), slideUp(), slideToggle()

    $("#flip").click(function(){
        $("#panel").slideDown();
    });

    $("#flip").click(function(){
        $("#panel").slideUp();
    });

    $("#flip").click(function(){
        $("#panel").slideToggle();
    });

#### animate()

    $("button").click(function(){
        $("div").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        });
    }); 

#### Quero mais efeitos

https://api.jquery.com/category/effects/