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
        });var format_UNIDADESURV_1 = new ol.format.GeoJSON();
var features_UNIDADESURV_1 = format_UNIDADESURV_1.readFeatures(json_UNIDADESURV_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNIDADESURV_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_UNIDADESURV_1.addFeatures(features_UNIDADESURV_1);var lyr_UNIDADESURV_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UNIDADESURV_1, 
                style: style_UNIDADESURV_1,
                title: '<img src="styles/legend/UNIDADESURV_1.png" /> UNIDADES URV'
            });

lyr_UNIDADREGIONALQUINTAJURISDICCION_0.setVisible(true);lyr_UNIDADESURV_1.setVisible(true);
var layersList = [baseLayer,lyr_UNIDADREGIONALQUINTAJURISDICCION_0,lyr_UNIDADESURV_1];
lyr_UNIDADREGIONALQUINTAJURISDICCION_0.set('fieldAliases', {'ID': 'ID', 'UNIDAD': 'UNIDAD', 'REGIONAL': 'REGIONAL', 'AREA': 'AREA', 'SRES': 'SRES', 'IDE': 'IDE', });
lyr_UNIDADESURV_1.set('fieldAliases', {'Ver': 'Ver', 'Dep. Codig': 'Dep. Codig', 'Descripcio': 'Descripcio', 'Domicilio': 'Domicilio', 'Localidad': 'Localidad', 'Estado': 'Estado', 'Departamen': 'Departamen', 'Resoluciï¿': 'Resoluciï¿', 'Fecha Reso': 'Fecha Reso', 'Regional': 'Regional', 'Tipo': 'Tipo', 'Clase': 'Clase', 'Dep. Anter': 'Dep. Anter', 'Dep. Padre': 'Dep. Padre', 'Resoluci_1': 'Resoluci_1', 'Fecha Baja': 'Fecha Baja', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_UNIDADREGIONALQUINTAJURISDICCION_0.set('fieldImages', {'ID': 'TextEdit', 'UNIDAD': 'Hidden', 'REGIONAL': 'Hidden', 'AREA': 'TextEdit', 'SRES': 'TextEdit', 'IDE': 'TextEdit', });
lyr_UNIDADESURV_1.set('fieldImages', {'Ver': 'TextEdit', 'Dep. Codig': 'TextEdit', 'Descripcio': 'TextEdit', 'Domicilio': 'TextEdit', 'Localidad': 'TextEdit', 'Estado': 'TextEdit', 'Departamen': 'TextEdit', 'Resoluciï¿': 'TextEdit', 'Fecha Reso': 'TextEdit', 'Regional': 'TextEdit', 'Tipo': 'TextEdit', 'Clase': 'TextEdit', 'Dep. Anter': 'TextEdit', 'Dep. Padre': 'TextEdit', 'Resoluci_1': 'TextEdit', 'Fecha Baja': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_UNIDADREGIONALQUINTAJURISDICCION_0.set('fieldLabels', {'ID': 'no label', 'AREA': 'no label', 'SRES': 'no label', 'IDE': 'no label', });
lyr_UNIDADESURV_1.set('fieldLabels', {'Ver': 'no label', 'Dep. Codig': 'no label', 'Descripcio': 'no label', 'Domicilio': 'no label', 'Localidad': 'no label', 'Estado': 'no label', 'Departamen': 'no label', 'Resoluciï¿': 'no label', 'Fecha Reso': 'no label', 'Regional': 'no label', 'Tipo': 'no label', 'Clase': 'no label', 'Dep. Anter': 'no label', 'Dep. Padre': 'no label', 'Resoluci_1': 'no label', 'Fecha Baja': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_UNIDADESURV_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});