var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_LINZNZAerialImagery_1 = new ol.layer.Tile({
            'title': 'LINZ NZ Aerial Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.linz.govt.nz/data/licensing-and-using-data/attributing-elevation-or-aerial-imagery-data">Sourced from LINZ CC-BY 4.0</a>',
                url: 'https://basemaps.linz.govt.nz/v1/tiles/aerial/EPSG:3857/{z}/{x}/{y}.jpg?api=d01egend5f8dv4zcbfj6z2t7rs3'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_LINZNZAerialImagery_1.setVisible(true);lyr_OSMStandard_2.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_LINZNZAerialImagery_1,lyr_OSMStandard_2];
