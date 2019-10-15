## jQuery

### HTML

O jQuery permite manipular com maior facilidade o HTML de uma página, atributos, propriedades e estilos dos elementos.

#### text(), html(), and val()

* text() - Modifica ou retorna o conteúdo de texto de um elmento
* html() - Modifica ou retorna o conteúdo de um elemento
* val() - Modifica ou retorna o valor de um campo do formulário

    $("#btn1").click(function(){
        alert("Text: " + $("#test").text());
    });

    $("#btn").click(function(){
        $("#test").text('TESTE');
    });

#### attr(), prop()

* attr() - Modifica ou retorna o valor de um atributo
* prop() - Modifica ou retorna o valor de um atributo

    $("button").click(function(){
        alert($("#w3s").attr("href"));
    });

    $("button").click(function(){
        alert($("#w3s").prop("href"));
    });

#### append(), prepend(), after(), before()

* append() - Insere conteúdo no fim do elemento selecionado
* prepend() - Insere conteúdo no começo do elemento selecionado
* after() - Insere conteúdo depois do elemento selecionado
* before() - Insere conteúdo antes do elemento selecionado

    $("p").append("Some appended text.");

    $("p").prepend("Some prepended text.");

    $("img").after("Some text after");

    $("img").before("Some text before");

Com esses métodos é possível inserir mais de um conteúdo.

#### remove(), empty()

* remove() - Remove o elemento selecionado (e seus filhos)
* empty() - Remove os filhos do elemento selecionado

    $("#div1").remove();
    $("p").remove(".test");

    $("#div1").empty();

#### addClass(), removeClass(), css()

* addClass() - Adiciona uma ou mais classes ao elemento selecionado
* removeClass() - Remove uma ou mais classes ao elemento selecionado
* css() - Modifica ou retorna um atributo de estilo

    $("h1, h2, p").addClass("blue");

    $("h1, h2, p").removeClass("blue otherOne");

    $("p").css("background-color");
    $("p").css("background-color", "yellow");
    $("p").css({"background-color": "yellow", "font-size": "200%"});

#### Quero mais manipulação de HTML

https://api.jquery.com/category/manipulation/