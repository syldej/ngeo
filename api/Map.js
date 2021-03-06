// see https://github.com/camptocamp/cgxp/blob/master/core/src/script/CGXP/api/Map.js

import OLMap from 'ol/Map.js';
import Feature from 'ol/Feature.js';
import Point from 'ol/geom/Point.js';
import {Icon, Style} from 'ol/style.js';
import View from 'ol/View.js';
import VectorSource from 'ol/source/Vector.js';
import VectorLayer from 'ol/layer/Vector.js';
import TileLayer from 'ol/layer/Tile.js';

import {get as getProjection} from 'ol/proj.js';

import * as constants from './constants.js';

// FIXME: temporary
import SwisstopoSource from '@geoblocks/sources/Swisstopo.js';
import EPSG21781 from '@geoblocks/sources/EPSG21781.js';


class Map {

  /**
   * @param {Object} options
   * @property {string} div
   * @property {ol.Coordinate} center
   * @property {number} [zoom=10]
   * TODO: more options
   */
  constructor(options) {
    /**
     * @private
     * @type {View}
     */
    this.view_ = new View({
      projection: getProjection(constants.projection || 'EPSG:21781'),
      resolutions: constants.resolutions,
      zoom: options.zoom !== undefined ? options.zoom : 10,
      center: options.center
    });

    /**
     * @private
     * @type {OLMap}
     */
    this.map_ = new OLMap({
      controls: [],
      target: options.div,
      view: this.view_
    });

    // FIXME: temporary
    const background = new TileLayer({
      source: new SwisstopoSource({
        layer: 'ch.swisstopo.pixelkarte-farbe',
        format: 'image/jpeg',
        timestamp: 'current',
        projection: EPSG21781,
        crossOrigin: 'anonymous'
      })
    });
    this.map_.addLayer(background);

    /**
     * @private
     * @type {VectorSource}
     */
    this.vectorSource_ = new VectorSource();

    /**
     * @private
     * @type {VectorLayer}
     */
    this.vectorLayer_ = new VectorLayer({
      source: this.vectorSource_
    });

    this.map_.addLayer(this.vectorLayer_);
  }

  /**
   * @param {ol.Coordinate} center
   * @param {number} zoom
   */
  recenter(center, zoom) {
    this.view_.setCenter(center);
    this.view_.setZoom(zoom);
  }

  /**
   * @param {Object} options
   * @property {ol.Coordinate} position
   * @property {string} [icon]
   * @property {ol.Size} [size]
   */
  addMarker(options = {}) {
    const marker = new Feature({
      geometry: new Point(options.position ? options.position : this.view_.getCenter())
    });
    if (options.icon) {
      // FIXME: use size?
      marker.setStyle(new Style({
        image: new Icon({
          src: options.icon
        })
      }));
    }
    this.vectorSource_.addFeature(marker);
  }

  /**
   * @param {string} layer
   * @param {Array.<string>} ids
   * @param {boolean} [highlight=false]
   */
  recenterOnObjects(layer, ids, highlight = false) {

  }

  /**
   * @param {string} type Layer type, only 'text' format is supported.
   * @param {string} name
   * @param {string} url
   * @param {Object} [options]
   * @property {Array.<string>} [attr=['title', 'description']]
   * @property {function()} [success]
   * @property {function()} [error]
   */
  addCustomLayer(type, name, url, options = {}) {
    fetch(url)
      .then((response) => response.text())
      .then((text) => {
        const attr = options.attr || ['title', 'description'];
        const lines = text.split(/\r\n|\r|\n/);
        const columns = lines.shift().split('\t');
        for (const line of lines) {
          if (line) {
            const values = zip(columns, line.split('\t'));
            const marker = new Feature({
              geometry: new Point(values.point.split(',').map(parseFloat))
            });
            marker.setProperties(filterByKeys(values, attr));
            marker.setId(values.id);
            // FIXME: handle values.iconSize
            // FIXME: handle values.iconOffset
            marker.setStyle(new Style({
              image: new Icon({
                src: values.icon
              })
            }));
            this.vectorSource_.addFeature(marker);
          }
        }
        this.view_.fit(this.vectorSource_.getExtent());
      })
      .then(() => {
        if (options.success) {
          options.success();
        }
      })
      .catch(() => {
        if (options.error) {
          options.error();
        }
      });
  }

  /**
  * @param {string} id
  */
  selectObject(id) {
    const feature = this.vectorSource_.getFeatureById(id);
    if (feature) {
      // TODO
    }
  }

}


/**
 * @param {Array.<string>} keys
 * @param {Array.<*>} values
 */
function zip(keys, values) {
  const obj = {};
  keys.forEach((key, index) => {
    obj[key] = values[index];
  });
  return obj;
}


/**
 * @param {Object.<string, *>} obj
 * @param {Array.<string>} keys
 */
function filterByKeys(obj, keys) {
  const filtered = {};
  keys.forEach((key) => {
    filtered[key] = obj[key];
  });
  return filtered;
}


export default Map;
