var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Argenmap_1 = new ol.layer.Tile({
            'title': 'Argenmap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG:3857@png/{z}/{x}/{-y}.png'
            })
        });
var format_DepartamentosCorrientes_2 = new ol.format.GeoJSON();
var features_DepartamentosCorrientes_2 = format_DepartamentosCorrientes_2.readFeatures(json_DepartamentosCorrientes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosCorrientes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentosCorrientes_2.addFeatures(features_DepartamentosCorrientes_2);
var lyr_DepartamentosCorrientes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DepartamentosCorrientes_2, 
                style: style_DepartamentosCorrientes_2,
                popuplayertitle: 'Departamentos-Corrientes',
                interactive: true,
                title: '<img src="styles/legend/DepartamentosCorrientes_2.png" /> Departamentos-Corrientes'
            });
var format_DepartamentosEntreRios_3 = new ol.format.GeoJSON();
var features_DepartamentosEntreRios_3 = format_DepartamentosEntreRios_3.readFeatures(json_DepartamentosEntreRios_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DepartamentosEntreRios_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DepartamentosEntreRios_3.addFeatures(features_DepartamentosEntreRios_3);
var lyr_DepartamentosEntreRios_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DepartamentosEntreRios_3, 
                style: style_DepartamentosEntreRios_3,
                popuplayertitle: 'Departamentos-Entre-Rios',
                interactive: true,
                title: '<img src="styles/legend/DepartamentosEntreRios_3.png" /> Departamentos-Entre-Rios'
            });
var format_UdeVegBosqueesclerofitasPaffinis_4 = new ol.format.GeoJSON();
var features_UdeVegBosqueesclerofitasPaffinis_4 = format_UdeVegBosqueesclerofitasPaffinis_4.readFeatures(json_UdeVegBosqueesclerofitasPaffinis_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UdeVegBosqueesclerofitasPaffinis_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UdeVegBosqueesclerofitasPaffinis_4.addFeatures(features_UdeVegBosqueesclerofitasPaffinis_4);
var lyr_UdeVegBosqueesclerofitasPaffinis_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UdeVegBosqueesclerofitasPaffinis_4, 
                style: style_UdeVegBosqueesclerofitasPaffinis_4,
                popuplayertitle: 'UdeVeg-Bosque-esclerofitas-P.affinis',
                interactive: false,
                title: '<img src="styles/legend/UdeVegBosqueesclerofitasPaffinis_4.png" /> UdeVeg-Bosque-esclerofitas-P.affinis'
            });
var format_AreasNaturalesProtegidas_5 = new ol.format.GeoJSON();
var features_AreasNaturalesProtegidas_5 = format_AreasNaturalesProtegidas_5.readFeatures(json_AreasNaturalesProtegidas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AreasNaturalesProtegidas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AreasNaturalesProtegidas_5.addFeatures(features_AreasNaturalesProtegidas_5);
var lyr_AreasNaturalesProtegidas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AreasNaturalesProtegidas_5, 
                style: style_AreasNaturalesProtegidas_5,
                popuplayertitle: 'Areas-Naturales-Protegidas',
                interactive: true,
                title: '<img src="styles/legend/AreasNaturalesProtegidas_5.png" /> Areas-Naturales-Protegidas'
            });
var format_CuencaLasConchas_6 = new ol.format.GeoJSON();
var features_CuencaLasConchas_6 = format_CuencaLasConchas_6.readFeatures(json_CuencaLasConchas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencaLasConchas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencaLasConchas_6.addFeatures(features_CuencaLasConchas_6);
var lyr_CuencaLasConchas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuencaLasConchas_6, 
                style: style_CuencaLasConchas_6,
                popuplayertitle: 'Cuenca-Las-Conchas',
                interactive: false,
                title: '<img src="styles/legend/CuencaLasConchas_6.png" /> Cuenca-Las-Conchas'
            });
var format_CuencaGuayquiraro_7 = new ol.format.GeoJSON();
var features_CuencaGuayquiraro_7 = format_CuencaGuayquiraro_7.readFeatures(json_CuencaGuayquiraro_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencaGuayquiraro_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencaGuayquiraro_7.addFeatures(features_CuencaGuayquiraro_7);
var lyr_CuencaGuayquiraro_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuencaGuayquiraro_7, 
                style: style_CuencaGuayquiraro_7,
                popuplayertitle: 'Cuenca-Guayquiraro',
                interactive: false,
                title: '<img src="styles/legend/CuencaGuayquiraro_7.png" /> Cuenca-Guayquiraro'
            });
var format_CuencaFeliciano_8 = new ol.format.GeoJSON();
var features_CuencaFeliciano_8 = format_CuencaFeliciano_8.readFeatures(json_CuencaFeliciano_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CuencaFeliciano_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CuencaFeliciano_8.addFeatures(features_CuencaFeliciano_8);
var lyr_CuencaFeliciano_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CuencaFeliciano_8, 
                style: style_CuencaFeliciano_8,
                popuplayertitle: 'Cuenca-Feliciano',
                interactive: false,
                title: '<img src="styles/legend/CuencaFeliciano_8.png" /> Cuenca-Feliciano'
            });
var format_Redvialnacional_9 = new ol.format.GeoJSON();
var features_Redvialnacional_9 = format_Redvialnacional_9.readFeatures(json_Redvialnacional_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Redvialnacional_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Redvialnacional_9.addFeatures(features_Redvialnacional_9);
var lyr_Redvialnacional_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Redvialnacional_9, 
                style: style_Redvialnacional_9,
                popuplayertitle: 'Red-vial-nacional',
                interactive: true,
                title: '<img src="styles/legend/Redvialnacional_9.png" /> Red-vial-nacional'
            });
var format_Cursosdeagua_10 = new ol.format.GeoJSON();
var features_Cursosdeagua_10 = format_Cursosdeagua_10.readFeatures(json_Cursosdeagua_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cursosdeagua_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cursosdeagua_10.addFeatures(features_Cursosdeagua_10);
var lyr_Cursosdeagua_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cursosdeagua_10, 
                style: style_Cursosdeagua_10,
                popuplayertitle: 'Cursos-de-agua',
                interactive: true,
                title: '<img src="styles/legend/Cursosdeagua_10.png" /> Cursos-de-agua'
            });
var format_Localidades_11 = new ol.format.GeoJSON();
var features_Localidades_11 = format_Localidades_11.readFeatures(json_Localidades_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Localidades_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Localidades_11.addFeatures(features_Localidades_11);
var lyr_Localidades_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Localidades_11, 
                style: style_Localidades_11,
                popuplayertitle: 'Localidades',
                interactive: true,
                title: '<img src="styles/legend/Localidades_11.png" /> Localidades'
            });
var format_LUSn3_12 = new ol.format.GeoJSON();
var features_LUSn3_12 = format_LUSn3_12.readFeatures(json_LUSn3_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LUSn3_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LUSn3_12.addFeatures(features_LUSn3_12);
var lyr_LUSn3_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LUSn3_12, 
                style: style_LUSn3_12,
                popuplayertitle: 'LUS-n3',
                interactive: true,
    title: 'LUS-n3<br />\
    <img src="styles/legend/LUSn3_12_0.png" /> LUS01-Areas Urbanas<br />\
    <img src="styles/legend/LUSn3_12_1.png" /> LUS02-Bosque Natural o seminatural<br />\
    <img src="styles/legend/LUSn3_12_2.png" /> LUS03-Bosque o matorrales con uso ganadero con predominio de bovinos<br />\
    <img src="styles/legend/LUSn3_12_3.png" /> LUS04-Cuerpos de Agua<br />\
    <img src="styles/legend/LUSn3_12_4.png" /> LUS05-Cultivo de herbáceas<br />\
    <img src="styles/legend/LUSn3_12_5.png" /> LUS06-Cultivo de herbáceas o leñosas no forestales bajo riego<br />\
    <img src="styles/legend/LUSn3_12_6.png" /> LUS07-Cultivo de leñosas no forestales en secano<br />\
    <img src="styles/legend/LUSn3_12_7.png" /> LUS08-Ganadería extensiva con predominio de bovinos<br />\
    <img src="styles/legend/LUSn3_12_8.png" /> LUS09-Ganadería extensiva en humedales con predominio de bovinos<br />\
    <img src="styles/legend/LUSn3_12_9.png" /> LUS10-Ganadería Intensiva con predominio bovino para leche<br />\
    <img src="styles/legend/LUSn3_12_10.png" /> LUS11-Humedales, pantanos o esteros<br />\
    <img src="styles/legend/LUSn3_12_11.png" /> LUS12-Plantaciones forestales<br />' });
var group_Sistemadeusodelatierra20122017 = new ol.layer.Group({
                                layers: [lyr_LUSn3_12,],
                                fold: 'open',
                                title: 'Sistema de uso de la tierra 2012-2017'});
var group_Informacincomplementaria = new ol.layer.Group({
                                layers: [lyr_DepartamentosCorrientes_2,lyr_DepartamentosEntreRios_3,lyr_UdeVegBosqueesclerofitasPaffinis_4,lyr_AreasNaturalesProtegidas_5,lyr_CuencaLasConchas_6,lyr_CuencaGuayquiraro_7,lyr_CuencaFeliciano_8,lyr_Redvialnacional_9,lyr_Cursosdeagua_10,lyr_Localidades_11,],
                                fold: 'open',
                                title: 'Información complementaria'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Argenmap_1.setVisible(true);lyr_DepartamentosCorrientes_2.setVisible(true);lyr_DepartamentosEntreRios_3.setVisible(true);lyr_UdeVegBosqueesclerofitasPaffinis_4.setVisible(true);lyr_AreasNaturalesProtegidas_5.setVisible(true);lyr_CuencaLasConchas_6.setVisible(true);lyr_CuencaGuayquiraro_7.setVisible(true);lyr_CuencaFeliciano_8.setVisible(true);lyr_Redvialnacional_9.setVisible(true);lyr_Cursosdeagua_10.setVisible(true);lyr_Localidades_11.setVisible(true);lyr_LUSn3_12.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Argenmap_1,group_Informacincomplementaria,group_Sistemadeusodelatierra20122017];
lyr_DepartamentosCorrientes_2.set('fieldAliases', {'gid': 'gid', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_DepartamentosEntreRios_3.set('fieldAliases', {'gid': 'gid', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'fdc': 'fdc', 'sag': 'sag', });
lyr_UdeVegBosqueesclerofitasPaffinis_4.set('fieldAliases', {'CODIGO': 'CODIGO', 'REGION': 'REGION', 'DOMINIO': 'DOMINIO', 'UNID_FITOG': 'UNID_FITOG', 'NOMFISONOM': 'NOMFISONOM', 'NOMVULGAR': 'NOMVULGAR', 'SUP_HA': 'SUP_HA', 'X': 'X', 'Y': 'Y', 'ROTATION': 'ROTATION', });
lyr_AreasNaturalesProtegidas_5.set('fieldAliases', {'name': 'name', 'desig': 'desig', 'desig_type': 'desig_type', 'iucn_cat': 'iucn_cat', 'rep_m_area': 'rep_m_area', 'gis_m_area': 'gis_m_area', 'rep_area': 'rep_area', 'gis_area': 'gis_area', 'status_yr': 'status_yr', 'sub_loc': 'sub_loc', });
lyr_CuencaLasConchas_6.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_CuencaGuayquiraro_7.set('fieldAliases', {'area': 'area', 'perimeter': 'perimeter', 'cuencas_': 'cuencas_', 'cuencas_id': 'cuencas_id', 'cuen_cod': 'cuen_cod', 'nombre': 'nombre', 'provincia': 'provincia', 'numero': 'numero', 'sistema': 'sistema', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', 'sistemas': 'sistemas', 'sistemas_l': 'sistemas_l', 'cuencas_la': 'cuencas_la', });
lyr_CuencaFeliciano_8.set('fieldAliases', {'name': 'name', 'folders': 'folders', 'descriptio': 'descriptio', 'altitude': 'altitude', 'alt_mode': 'alt_mode', 'time_begin': 'time_begin', 'time_end': 'time_end', 'time_when': 'time_when', });
lyr_Redvialnacional_9.set('fieldAliases', {'gid': 'gid', 'rtn': 'rtn', 'typ': 'typ', 'rst': 'rst', 'hct': 'hct', 'fdc': 'fdc', 'sag': 'sag', });
lyr_Cursosdeagua_10.set('fieldAliases', {'UNION': 'UNION', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'REGIMEN': 'REGIMEN', 'NAVEGABILI': 'NAVEGABILI', 'PROVINCIA': 'PROVINCIA', 'PAIS': 'PAIS', 'OBSERVACIO': 'OBSERVACIO', 'HOJA': 'HOJA', 'FUENTE': 'FUENTE', });
lyr_Localidades_11.set('fieldAliases', {'gid': 'gid', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'in1': 'in1', 'tgl': 'tgl', 'cod_tgl': 'cod_tgl', 'nam_prov': 'nam_prov', 'cod_prov': 'cod_prov', 'fdc': 'fdc', 'sag': 'sag', });
lyr_LUSn3_12.set('fieldAliases', {'Nivel_1': 'Nivel_1', 'Nivel_3': 'Nivel_3', 'geoser_n3': 'geoser_n3', });
lyr_DepartamentosCorrientes_2.set('fieldImages', {'gid': 'Range', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_DepartamentosEntreRios_3.set('fieldImages', {'gid': 'Range', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_UdeVegBosqueesclerofitasPaffinis_4.set('fieldImages', {'CODIGO': '', 'REGION': '', 'DOMINIO': '', 'UNID_FITOG': '', 'NOMFISONOM': '', 'NOMVULGAR': '', 'SUP_HA': '', 'X': '', 'Y': '', 'ROTATION': '', });
lyr_AreasNaturalesProtegidas_5.set('fieldImages', {'name': '', 'desig': '', 'desig_type': '', 'iucn_cat': '', 'rep_m_area': '', 'gis_m_area': '', 'rep_area': '', 'gis_area': '', 'status_yr': '', 'sub_loc': '', });
lyr_CuencaLasConchas_6.set('fieldImages', {'name': '', 'folders': '', 'descriptio': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_CuencaGuayquiraro_7.set('fieldImages', {'area': '', 'perimeter': '', 'cuencas_': '', 'cuencas_id': '', 'cuen_cod': '', 'nombre': '', 'provincia': '', 'numero': '', 'sistema': '', 'shape_leng': '', 'shape_area': '', 'sistemas': '', 'sistemas_l': '', 'cuencas_la': '', });
lyr_CuencaFeliciano_8.set('fieldImages', {'name': '', 'folders': '', 'descriptio': '', 'altitude': '', 'alt_mode': '', 'time_begin': '', 'time_end': '', 'time_when': '', });
lyr_Redvialnacional_9.set('fieldImages', {'gid': 'TextEdit', 'rtn': 'TextEdit', 'typ': 'TextEdit', 'rst': 'TextEdit', 'hct': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_Cursosdeagua_10.set('fieldImages', {'UNION': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'REGIMEN': 'TextEdit', 'NAVEGABILI': 'TextEdit', 'PROVINCIA': 'TextEdit', 'PAIS': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'HOJA': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_Localidades_11.set('fieldImages', {'gid': 'Range', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'gna': 'TextEdit', 'nam': 'TextEdit', 'in1': 'TextEdit', 'tgl': 'TextEdit', 'cod_tgl': 'TextEdit', 'nam_prov': 'TextEdit', 'cod_prov': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_LUSn3_12.set('fieldImages', {'Nivel_1': 'TextEdit', 'Nivel_3': 'TextEdit', 'geoser_n3': 'TextEdit', });
lyr_DepartamentosCorrientes_2.set('fieldLabels', {'gid': 'hidden field', 'objeto': 'hidden field', 'fna': 'hidden field', 'gna': 'hidden field', 'nam': 'inline label - visible with data', 'in1': 'hidden field', 'fdc': 'hidden field', 'sag': 'hidden field', });
lyr_DepartamentosEntreRios_3.set('fieldLabels', {'gid': 'hidden field', 'objeto': 'hidden field', 'fna': 'hidden field', 'gna': 'hidden field', 'nam': 'inline label - visible with data', 'in1': 'hidden field', 'fdc': 'hidden field', 'sag': 'hidden field', });
lyr_UdeVegBosqueesclerofitasPaffinis_4.set('fieldLabels', {'CODIGO': 'no label', 'REGION': 'no label', 'DOMINIO': 'no label', 'UNID_FITOG': 'no label', 'NOMFISONOM': 'no label', 'NOMVULGAR': 'no label', 'SUP_HA': 'no label', 'X': 'no label', 'Y': 'no label', 'ROTATION': 'no label', });
lyr_AreasNaturalesProtegidas_5.set('fieldLabels', {'name': 'inline label - visible with data', 'desig': 'hidden field', 'desig_type': 'hidden field', 'iucn_cat': 'hidden field', 'rep_m_area': 'hidden field', 'gis_m_area': 'hidden field', 'rep_area': 'hidden field', 'gis_area': 'hidden field', 'status_yr': 'hidden field', 'sub_loc': 'hidden field', });
lyr_CuencaLasConchas_6.set('fieldLabels', {'name': 'no label', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_CuencaGuayquiraro_7.set('fieldLabels', {'area': 'no label', 'perimeter': 'no label', 'cuencas_': 'no label', 'cuencas_id': 'no label', 'cuen_cod': 'no label', 'nombre': 'no label', 'provincia': 'no label', 'numero': 'no label', 'sistema': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', 'sistemas': 'no label', 'sistemas_l': 'no label', 'cuencas_la': 'no label', });
lyr_CuencaFeliciano_8.set('fieldLabels', {'name': 'no label', 'folders': 'no label', 'descriptio': 'no label', 'altitude': 'no label', 'alt_mode': 'no label', 'time_begin': 'no label', 'time_end': 'no label', 'time_when': 'no label', });
lyr_Redvialnacional_9.set('fieldLabels', {'gid': 'hidden field', 'rtn': 'inline label - visible with data', 'typ': 'hidden field', 'rst': 'hidden field', 'hct': 'hidden field', 'fdc': 'hidden field', 'sag': 'hidden field', });
lyr_Cursosdeagua_10.set('fieldLabels', {'UNION': 'hidden field', 'TIPO': 'hidden field', 'NOMBRE': 'inline label - visible with data', 'REGIMEN': 'hidden field', 'NAVEGABILI': 'hidden field', 'PROVINCIA': 'hidden field', 'PAIS': 'hidden field', 'OBSERVACIO': 'hidden field', 'HOJA': 'hidden field', 'FUENTE': 'hidden field', });
lyr_Localidades_11.set('fieldLabels', {'gid': 'hidden field', 'objeto': 'hidden field', 'fna': 'hidden field', 'gna': 'hidden field', 'nam': 'inline label - visible with data', 'in1': 'hidden field', 'tgl': 'hidden field', 'cod_tgl': 'hidden field', 'nam_prov': 'hidden field', 'cod_prov': 'hidden field', 'fdc': 'hidden field', 'sag': 'hidden field', });
lyr_LUSn3_12.set('fieldLabels', {'Nivel_1': 'no label', 'Nivel_3': 'no label', 'geoser_n3': 'no label', });
lyr_LUSn3_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});