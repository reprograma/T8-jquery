## jQuery

### Eventos

Eventos são ações que são disparadas no exato momento em que ocorrem. Por exemplo, o clique em um elemento, apertar uma tecla ou rolar a página para cima.

#### Sintaxe

Para chamar o evento:

    $("p").click();

Para definir o que ocorre quando o evento é chamado:

    $("p").click(function(){
        // Seu código aqui
    });

#### Eventos do Mouse

Eventos disparados em ações que envolvem o mouse (exceto o scroll).

##### click()

A função será executada quando o usuário clica num elemento HTML.

    $("p").click(function(){
        $(this).hide();
    });

##### mouseenter()

A função será executada quando o ponteiro do mouse "entra" em um elemento HTML.

    $("#p1").mouseenter(function(){
        alert("You entered p1!");
    });

##### mouseleave()

A função será executada quando o ponteiro do mouse deixar um elemento HTML.

    $("#p1").mouseleave(function(){
        alert("Bye! You now leave p1!");
    });

##### hover()

hover() é a combinação de mouseenter() e mouseleave(). A função sera executada quando o mouse passar por cima do elemento. Muito utilizada para efeitos no menu.

    $(seletor).hover(handlerEntrada, handlerSaida);

    $(seletor).mouseenter(handlerEntrada).mouseleave(handlerSaida);


    $("#p1").hover(
        function(){
            alert("You entered p1!");
        },
        function(){
            alert("Bye! You now leave p1!");
        }
    );

#### Eventos do Formulário

Eventos disparados em ações que envolvem o form e seus elementos filhos.

##### focus()

A função será executada quando um campo receber foco.

    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });

##### blur()

A função será executada quando o campo perder o foco.

    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });

##### change()

A função será executada quando o valor do campo mudar.

    $("input[type='text']").change(function() {
        alert($(this).val());
    });

#### Outros eventos

Para outros eventos consulte https://api.jquery.com/category/events/. Cuidado com os eventos depreciados e removidos.