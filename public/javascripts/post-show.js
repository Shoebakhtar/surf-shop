// toggle edit review form
$('.toggle-edit-form').on('click', function(){
    // toggle the edit button text on click
    $(this).text() === 'Edit' ? $(this).text('Cancel') : $(this).text('Edit');
    // toggle visibility of the edit review form
    $(this).siblings('.edit-review-form').toggle();
});

// clear rating 

$('.clear-rating').click(function(){
    $(this).siblings('.input-no-rate').click();
});

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hvZWJha2h0YXIwNSIsImEiOiJjazhzYTR5a3EwZzIxM3F0bHFvN3Iya29yIn0.WHugGe-teUcQYpon5e1c-Q';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: post.coordinates ,
    zoom: 5
});


// create a HTML element for each feature
var el = document.createElement('div');
el.className = 'marker';

// make a marker for each feature and add to the map
new mapboxgl.Marker(el)
    .setLngLat(post.coordinates)
    .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h3>' + post.title + '</h3><p>' + post.location + '</p>'))
    .addTo(map);

