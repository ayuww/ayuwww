var wms_layers = [];

var lyr_034_modified_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "034_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/034_modified_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12428015.146494, -588685.375024, 12449416.474297, -571582.041066]
                            })
                        });
var format_POLIGONAREA_1 = new ol.format.GeoJSON();
var features_POLIGONAREA_1 = format_POLIGONAREA_1.readFeatures(json_POLIGONAREA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLIGONAREA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGONAREA_1.addFeatures(features_POLIGONAREA_1);
var lyr_POLIGONAREA_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLIGONAREA_1, 
                style: style_POLIGONAREA_1,
                interactive: true,
    title: 'POLIGON AREA <br />\
    <img src="styles/legend/POLIGONAREA_1_0.png" /> BRAJASELEBAH<br />\
    <img src="styles/legend/POLIGONAREA_1_1.png" /> LABUHANMARINGGAI<br />\
    <img src="styles/legend/POLIGONAREA_1_2.png" /> MATARAMBARU<br />\
    <img src="styles/legend/POLIGONAREA_1_3.png" /> SUKADANA<br />\
    <img src="styles/legend/POLIGONAREA_1_4.png" /> WAYJEPARA<br />\
    <img src="styles/legend/POLIGONAREA_1_5.png" /> <br />'
        });
var format_JALAN_2 = new ol.format.GeoJSON();
var features_JALAN_2 = format_JALAN_2.readFeatures(json_JALAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_2.addFeatures(features_JALAN_2);
var lyr_JALAN_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_2, 
                style: style_JALAN_2,
                interactive: true,
                title: '<img src="styles/legend/JALAN_2.png" /> JALAN'
            });
var format_SUNGAI_3 = new ol.format.GeoJSON();
var features_SUNGAI_3 = format_SUNGAI_3.readFeatures(json_SUNGAI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_3.addFeatures(features_SUNGAI_3);
var lyr_SUNGAI_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_3, 
                style: style_SUNGAI_3,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_3.png" /> SUNGAI'
            });
var format_KOTA_4 = new ol.format.GeoJSON();
var features_KOTA_4 = format_KOTA_4.readFeatures(json_KOTA_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KOTA_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KOTA_4.addFeatures(features_KOTA_4);
var lyr_KOTA_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KOTA_4, 
                style: style_KOTA_4,
                interactive: true,
                title: '<img src="styles/legend/KOTA_4.png" /> KOTA'
            });

lyr_034_modified_0.setVisible(true);lyr_POLIGONAREA_1.setVisible(true);lyr_JALAN_2.setVisible(true);lyr_SUNGAI_3.setVisible(true);lyr_KOTA_4.setVisible(true);
var layersList = [lyr_034_modified_0,lyr_POLIGONAREA_1,lyr_JALAN_2,lyr_SUNGAI_3,lyr_KOTA_4];
lyr_POLIGONAREA_1.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', });
lyr_JALAN_2.set('fieldAliases', {'id': 'id', });
lyr_SUNGAI_3.set('fieldAliases', {'id': 'id', });
lyr_KOTA_4.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', });
lyr_POLIGONAREA_1.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', });
lyr_JALAN_2.set('fieldImages', {'id': 'TextEdit', });
lyr_SUNGAI_3.set('fieldImages', {'id': 'TextEdit', });
lyr_KOTA_4.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', });
lyr_POLIGONAREA_1.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', });
lyr_JALAN_2.set('fieldLabels', {'id': 'no label', });
lyr_SUNGAI_3.set('fieldLabels', {'id': 'no label', });
lyr_KOTA_4.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', });
lyr_KOTA_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});