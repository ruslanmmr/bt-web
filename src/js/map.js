ymaps.ready(init);
var myMap;

function init(){
    myMap = new ymaps.Map ("map", {
        center: [55.791771, 37.748064],
        zoom: 17
    });

    myMap.controls.remove('searchControl').remove('trafficControl').remove('geolocationControl');

      myMap.behaviors.disable(['drag', 'scrollZoom']);
    
    myMap.geoObjects
        .add(new ymaps.Placemark([55.791744, 37.748619], {
            balloonContent: '',
            iconCaption: 'Измайловское шоссе 71, к4 Г-Д'
        },{
          preset: 'islands#blueCircleDotIconWithCaption'
      }));

}