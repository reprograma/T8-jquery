## jQuery

### Ajax

AJAX = Asynchronous JavaScript and XML.

Ajax permite carregar um conteúdo em segundo plato e mostra-lo na página sem ter que recarrega-la completamente.

#### load()

O método load() carrega dados de uma fonte e os coloca no elemento selecionado.

    $("#div1").load("demo_test.txt");

Exemplo:

    $("button").click(function(){
        $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
            if(statusTxt == "success")
                alert("External content loaded successfully!");
            else
                alert("Error: " + xhr.status + ": " + xhr.statusText);
        });
    });

#### ajax()

O método $.ajax() permite fazer requisições HTTP.

#### get()

O método $.get() requisita dados de um servidor com uma requisição HTTP GET.

    $.get(url [, data ] [, success ] [, dataType ]);

https://api.jquery.com/jQuery.ajax/

Exemplo:

    $.get( "test.php" );

    $.get( "test.php", { name: "John", time: "2pm" } );

    $.get( "test.php", { "choices[]": ["Jon", "Susan"] } );
    
    $.get( "test.php", function( data ) {
        alert( "Data Loaded: " + data );
    });

    $.get( "test.cgi", { name: "John", time: "2pm" } )
        .done(function( data ) {
            alert( "Data Loaded: " + data );
    });

    $.get( "example.php", function() {
        alert( "success" );
    })
    .done(function() {
        alert( "second success" );
    })
    .fail(function() {
        alert( "error" );
    })
    .always(function() {
        alert( "finished" );
    });

    $.get( "test.php", function( data ) {
        $( "body" )
            .append( "Name: " + data.name ) // John
            .append( "Time: " + data.time ); //  2pm
    }, "json" );

#### post()

O método $.post() requisita dados de um servidor com uma requisição HTTP GET.

    $.post(url [, data ] [, success ] [, dataType ]);

Exemplo:

    $.post( "test.php" );

    $.post( "test.php", { name: "John", time: "2pm" } );

    $.post( "test.php", { 'choices[]': [ "Jon", "Susan" ] } );

    $.post( "test.php", $( "#testform" ).serialize() );

    $.post( "test.php", function( data ) {
        alert( "Data Loaded: " + data );
    });

    $.post( "test.php", { name: "John", time: "2pm" })
        .done(function( data ) {
            alert( "Data Loaded: " + data );
    });

    $.post( "test.php", { func: "getNameAndTime" }, function( data ) {
        console.log( data.name ); // John
        console.log( data.time ); // 2pm
    }, "json");