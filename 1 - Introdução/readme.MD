## jQuery

### Intro

jQuery é um framework Javascript. Um Framework tem como principal objetivo resolver problemas recorrentes com uma abordagem genérica, permitindo ao desenvolvedor focar seus esforços na resolução do problema em si, e não ficar reescrevendo software. Pode-se dizer que é um conjunto de bibliotecas ou componentes que são usados para criar uma base onde sua aplicação será construída.

Lançada em 2006, por John Resig, jQuery, segundo definição consta em seu site, trata-se de uma rápida, pequena e rica em features biblioteca JavaScript.

> "Write less, do more."

Com jQuery é possível fazer diversos efeitos com poucas linhas e, que custariam dezenas de linhas em JavaScript puro.

### Recursos

* Seleção e manipulação de elementos HTML
* Manipulação de CSS
* Efeitos e animações
* Navegação pelo DOM
* Ajax
* Eventos

### Utilização

Igualmente qualquer arquivo JavaScript você precisa inseri-lo na página com as tags script.

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>

    <script src="js/jquery.min.js"></script>

#### Sintaxe

    $(seletor).acao();

* $ símbolo que define/acessa jQuery
* (seletor) encontrar elementos HTML
* acao() jQuery que será executada. Pode ou não ter parâmetros/argumentos

Os seletores utilizam uma sintaxe similar, senão igual, a sintaxe de seleção do CSS. Alguns seletores comuns são:

* $("p") – seleciona todos os elementos \<p>
* $("[href]") – seleciona todos os elementos que possuem o atributo href
* $("#algumId") – seleciona todos os elementos onde id="algumId"
* $(".algumaClasse") – seleciona todos os elementos onde class="algumaClasse"
* $("p#algumId") – seleciona todos os elementos \<p> onde id="algumId"
* $("p.algumaClasse") – seleciona todos os elementos \<p> onde class="algumaClasse"
* $("p:first") – seleciona o primeiro elemento \<p>
* $("ul li:first") – seleciona o primeiro elemento \<li> de um elemento \<ul>
* $(":even") – seleciona todos os elementos pares (utilizável em tabelas, listas e afins)
* $(":odd") – seleciona todos os elementos ímpares (utilizável em tabelas, listas e afins)

Para outros seletores consulte https://api.jquery.com/category/selectors/

Uma boa prática é aguardar que toda sua página tenha sido carregada/renderezida antes de utilizar JavaScript/jQuery. Isso é importante para evitar que seu código acesse elementos que ainda não existem, e acabe dando erro. Para evitar que seu código jQuery seja executado antes da página terminar de carregar completamente, seu código deve estar contido em um dos dois blocos de código abaixo:

    $(document).ready(function(){
        // Seu código aqui
    });

    $(function(){
        // Seu código aqui
    });