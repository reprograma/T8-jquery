## jQuery

### Traversing

O jQuery Transversing é usado para selecionar elementos HTML com base em sua relação com outros elementos. Começando com uma seleção e "se movendo" por essa seleção até alcançar os elementos que deseja.

#### Ancestrais

* parent()

O método parent() retorna o pai (direto) do elemento selecionado.

    $(document).ready(function(){
        $("span").parent();
    });

* parents()

O método parents() retorna todos os ancestrais do elemento selecionado, incluíndo a tag html.

    $(document).ready(function(){
        $("span").parents();
    });

    $(document).ready(function(){
        $("span").parents("ul");
    });

* parentsUntil()

O método parentsUntil() retorna todos os ancestrais entre dois elementos.

    $(document).ready(function(){
        $("span").parentsUntil("div");
    });

#### Descendentes

* children()

O método children() retorna todos os filhos (diretos) do elemento selecionado.

    $(document).ready(function(){
        $("div").children();
    });

    $(document).ready(function(){
        $("div").children("p.first");
    });


* find()

O método find() retorna todos os descendentes do elemento selecionado, até o último descendente. É necessário especificar que tipo de descendente deseja obter, ou usar como parâmetro um asterisco.

    $(document).ready(function(){
        $("div").find("span");
    });

    $(document).ready(function(){
        $("div").find("*");
    });

#### Irmãos

* siblings()

O método siblings() retorna todos os elementos no mesmo nível do elemento selecionado.

    $(document).ready(function(){
        $("h2").siblings();
    });

    $(document).ready(function(){
        $("h2").siblings("p");
    });

* next()

O método next() retorna o próximo elemento no mesmo nível do elemento selecionado.

    $(document).ready(function(){
        $("h2").next();
    });

* nextAll()

O método nextAll() retorna todos os próximos elementos do mesmo nível do elemento selecionado.

    $(document).ready(function(){
        $("h2").nextAll();
    });

* nextUntil()

O método nextUntil() retorna todos os próximos elementos do mesmo nível entre dois elementos.

    $(document).ready(function(){
        $("h2").nextUntil("h6");
    });

* prev()

O método prev() retorna elemento anterior no mesmo nível do elemento selecionado.

    $(document).ready(function(){
        $("h2").prev();
    });

* prevAll()

O método prevAll() retorna todos os elementos anteriores do mesmo nível do elemento selecionado.

    $(document).ready(function(){
        $("h2").prevAll();
    });

* prevUntil()

O método prevUntil() retorna todos os elementos anteriores do mesmo nível entre dois elementos.

    $(document).ready(function(){
        $("h2").prevUntil("h6");
    });

#### Filtros

* first()

O método first() retorna o primeiro elemento de um grupo especificado de elementos.

    $(document).ready(function(){
        $("div").first();
    });

    $(document).ready(function(){
        $("div:first");
    });

* last()

O método last() retorna o último elemento de um grupo especificado de elementos.

    $(document).ready(function(){
        $("div").last();
    });

    $(document).ready(function(){
        $("div:last");
    });

* eq()

O método eq() retorna um elemento com um índice específico de um grupo especificado de elementos.

    $(document).ready(function(){
        $("p").eq(1);
    });

    $(document).ready(function(){
        $("p:ep(1)");
    });

* filter()

O método filter() permite que você especifique um critérios. Apenas elementos que satisfazem a condição serão retornados.

    $(document).ready(function(){
        $("p").filter(".intro");
    });

    $(document).ready(function(){
        $("p.intro");
    });

* not()

O método not() retorna todos os elementos que não satisfazem a condição.

    $(document).ready(function(){
        $("p").not(".intro");
    });