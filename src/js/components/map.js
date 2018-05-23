export default class Map {
  constructor(config) {
    this._mapHTML = config.map.get(0);
    this._icon = './img/marker.png';
    this._center = {
      lat: 56.00772542,
      lng: 37.19483232,
    };
    this.modal = null,
    this.duration = 300;
    this._init();
  }
  _init() {
    this._createMap();
  }
  _createMap() {
    this._map = new google.maps.Map(this._mapHTML, {
      center: this._center,
      zoom: 16,
      disableDefaultUI: true,
      scrollwheel: false,
      zoomControl: true,
      zoomControl: false,
      backgroundColor: '#e9e9e9',
      styles: [
        {
          'featureType': 'all',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': '32'
            },
            {
              'lightness': '-3'
            },
            {
              'visibility': 'on'
            },
            {
              'weight': '1.18'
            }
          ]
        },
        {
          'featureType': 'administrative',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'landscape',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'landscape.man_made',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': '-70'
            },
            {
              'lightness': '14'
            }
          ]
        },
        {
          'featureType': 'poi',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'road',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'transit',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'all',
          'stylers': [
            {
              'saturation': '100'
            },
            {
              'lightness': '-14'
            }
          ]
        },
        {
          'featureType': 'water',
          'elementType': 'labels',
          'stylers': [
            {
              'visibility': 'off'
            },
            {
              'lightness': '12'
            }
          ]
        }
      ]

    });
    var that = this;
    var marker = new google.maps.Marker({
      position: this._center,
      map: null,
      icon: {
        url: that._icon
      }
    });

    // To add the marker to the map, call setMap();
    marker.setMap(this._map);
  }
};

let map = $('.js-map');
if (map.length) {
  map.each(function() {
    new Map({
      map: $(this)
    });
  });
};

console.log('sdf');
