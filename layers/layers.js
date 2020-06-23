var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'Stamen Terrain',
    'type': 'base',
    source: new ol.source.Stamen({
        layer: 'terrain'
    })
})
]
});
var format_UNIDADREGIONALQUINTAJURISDICCION_0 = new ol.format.GeoJSON();
var features_UNIDADREGIONALQUINTAJURISDICCION_0 = format_UNIDADREGIONALQUINTAJURISDICCION_0.readFeatures(json_UNIDADREGIONALQUINTAJURISDICCION_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNIDADREGIONALQUINTAJURISDICCION_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_UNIDADREGIONALQUINTAJURISDICCION_0.addFeatures(features_UNIDADREGIONALQUINTAJURISDICCION_0);var lyr_UNIDADREGIONALQUINTAJURISDICCION_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UNIDADREGIONALQUINTAJURISDICCION_0, 
                style: style_UNIDADREGIONALQUINTAJURISDICCION_0,
    title: 'UNIDAD REGIONAL QUINTA JURISDICCION<br />\
    <img src="styles/legend/UNIDADREGIONALQUINTAJURISDICCION_0_0.png" /> COMISARI 49 CORDERO<br />\
    <img src="styles/legend/UNIDADREGIONALQUINTAJURISDICCION_0_1.png" /> COMISARIA 24 BARRIO DON BOSCO<br />\
    <img src="styles/legend/UNIDADREGIONALQUINTAJURISDICCION_0_2.png" /> COMISARIA 26 FERNANDEZ ORO<br />\
    <img src="styles/legend/UNIDADREGIONALQUINTAJURISDICCION_0_3.png" /> COMISARIA 32 CIPOLLETTI<br />\
    <img src="styles/legend/UNIDADREGIONALQUINTAJURISDICCION_0_4.png" /> COMISARIA 4 CIPOLLETTI<br />\
    <img src="styles/legend/UNIDADREGIONALQUINTAJURISDICCION_0_5.png" /> COMISARIA 43 CINCO SALTOS<br />\
    <img src="styles/legend/UNIDADREGIONALQUINTAJURISDICCION_0_6.png" /> COMISARIA 44 VILLA MANZANO<br />\
    <img src="styles/legend/UNIDADREGIONALQUINTAJURISDICCION_0_7.png" /> COMISARIA 45 ANAHI MAPU<br />\
    <img src="styles/legend/UNIDADREGIONALQUINTAJURISDICCION_0_8.png" /> COMISARIA 7 CINCO SALTOS<br />\
    <img src="styles/legend/UNIDADREGIONALQUINTAJURISDICCION_0_9.png" /> COMISARIA 79 CIPOLLETTI<br />\
    <img src="styles/legend/UNIDADREGIONALQUINTAJURISDICCION_0_10.png" /> COMISARIA 9 CATRIEL<br />\
    <img src="styles/legend/UNIDADREGIONALQUINTAJURISDICCION_0_11.png" /> SUBCOMISARIA 61 BARDA DEL MEDIO<br />\
    <img src="styles/legend/UNIDADREGIONALQUINTAJURISDICCION_0_12.png" /> SUBCOMISARIA 82 BALSA LAS PERLAS<br />'
        });

lyr_UNIDADREGIONALQUINTAJURISDICCION_0.setVisible(true);
var layersList = [baseLayer,lyr_UNIDADREGIONALQUINTAJURISDICCION_0];
lyr_UNIDADREGIONALQUINTAJURISDICCION_0.set('fieldAliases', {'ID': 'ID', 'UNIDAD': 'UNIDAD', 'REGIONAL': 'REGIONAL', 'AREA': 'AREA', 'SRES': 'SRES', 'IDE': 'IDE', });
lyr_UNIDADREGIONALQUINTAJURISDICCION_0.set('fieldImages', {'ID': 'TextEdit', 'UNIDAD': 'Hidden', 'REGIONAL': 'Hidden', 'AREA': 'TextEdit', 'SRES': 'TextEdit', 'IDE': 'TextEdit', });
lyr_UNIDADREGIONALQUINTAJURISDICCION_0.set('fieldLabels', {'ID': 'no label', 'AREA': 'no label', 'SRES': 'no label', 'IDE': 'no label', });
lyr_UNIDADREGIONALQUINTAJURISDICCION_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});