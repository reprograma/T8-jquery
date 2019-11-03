$(function () {

    function loadDetails(url) {
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            success: function (data) {
                $('.modal-title').text(data.name);
                $('.img-front').attr('src', data.sprites.front_default);
                $('.img-front').attr('alt', data.name);
                $('.types').html('');
                data.types.forEach(function (item) {
                    html = '<span class="badge badge-info">' + item.type.name + '</span>';
                    $('.types').append(html);
                })

                $('.stats ul').html('');
                data.stats.forEach(function (item) {
                    html = '<li class="list-group-item d-flex justify-content-between align-items-center">' + item.stat.name +
                        '<span class="badge badge-primary badge-pill">' + item.base_stat + '</span>' +
                        '</li>';
                    $('.stats ul').append(html);
                })

                $('#modalDetalhes').modal('show');
            },
            error: function () {
                alert('Deu um erro... Que tristeza');
            }
        });
    }

    $.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon/?limit=151",
        dataType: "json",
        success: function (data) {
            data.results.forEach(function (item, index) {
                let html = '<li class="list-group-item list-group-item-danger">' +
                    '<div class="d-flex w-100 justify-content-between">' +
                    '<h5 class="mb-1">' + (index + 1) + ' - ' + item.name + '</h5>' +
                    '</div>' +
                    '<small><a href="#" class="details" data-url="' + item.url + '">Detalhes</a></small>' +
                    '</li>';

                if (index < 50) {
                    $('.list-1').append(html);
                } else if (index >= 50 && index < 100) {
                    $('.list-2').append(html);
                } else {
                    $('.list-3').append(html);
                }
            });

            $('.details').on('click', function (e) {
                e.preventDefault();
                loadDetails($(this).data('url'));
            });
        },
        error: function () {
            alert('Deu um erro... Que tristeza');
        }
    });
})