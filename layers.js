var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleRoad_1 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var lyr_Granadaobras19381946_modified_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Granada obras 1938-1946_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Granadaobras19381946_modified_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-402917.837315, 4460875.477300, -397956.998477, 4466804.471607]
                            })
                        });
var lyr_Mapamonumentos_modified_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Mapa monumentos_modified",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Mapamonumentos_modified_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-403090.745956, 4461062.795723, -397932.027046, 4466659.960650]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleRoad_1.setVisible(true);lyr_Granadaobras19381946_modified_2.setVisible(true);lyr_Mapamonumentos_modified_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleRoad_1,lyr_Granadaobras19381946_modified_2,lyr_Mapamonumentos_modified_3];
