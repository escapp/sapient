'use strict';
$(document).ready(function() {
    $('#contact-form').submit(function(event) {
        var name = $('#name').val();
        var nameArr = name.split(' ');
        console.log("name", name, "first name", nameArr[0], "last name", nameArr[1]);
        $('#firstname').val(nameArr[0]);
        $('#lastname').val(nameArr[1]);
        console.log("name", name, "$('#firstname').val(nameArr[0]);", $('#firstname').val(), "$('#lastname').val(nameArr[1]);", $('#lastname').val());
        return false;
    });

    var source = $('#ajax-carousel').html();
    //var Handlebars = Handlebars;
    var template = Handlebars.compile(source);
    var placeHolder = $('#owl-carousel');

    $.getJSON('/json/carousel-data.json', function(json) {
        $.each(json, function(index, element) {
            // Generate the HTML for each post
            var html = template(element);
            // Render the posts into the page
            placeHolder.append(html);
        });
    })
        .done(function(json) {
            $('.owl-carousel').owlCarousel({
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                autoPlay: true
            });
        })
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ', ' + error;
            console.log('Request Failed: ' + err);
        });

});