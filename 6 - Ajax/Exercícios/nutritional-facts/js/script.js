$(function () {
    $.ajax({
        type: "GET",
        url: "./resources/nutrition.xml",
        dataType: "xml",
        success: function (data) {
            $(data).find('food').each(function () {
                let html = '<tr>' +
                    '<th scope="row">' + $(this).find('name').text() + '</th>' +
                    '<td>' + $(this).find('serving').text() + ' ' + $(this).find('serving').attr('units') + '</td>' +
                    '<td>' + $(this).find('calories').attr('total') + '</td>' +
                    '<td>' + $(this).find('carb').text() + '</td>' +
                    '<td>' + $(this).find('fiber').text() + '</td>' +
                    '<td>' + $(this).find('protein').text() + '</td>' +
                    '<td>' + $(this).find('vitamins a').text() + '</td>' +
                    '<td>' + $(this).find('vitamins c').text() + '</td>' +
                    '</tr>';

                $('tbody').append(html);
            });
        },
        error: function () {
            alert('Deu um erro... Que tristeza');
        }
    })
})