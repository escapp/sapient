'use strict';
$(document).ready(function() {

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