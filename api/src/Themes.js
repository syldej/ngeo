import WMTSCapabilities from 'ol/format/WMTSCapabilities.js';
import WMTS, {optionsFromCapabilities} from 'ol/source/WMTS.js';
import TileLayer from 'ol/layer/Tile.js';

import * as constants from './constants.js';

/**
 * @type {Promise}
 */
const themesPromise = fetch(constants.themesUrl).then((response) => response.json());

export function getBackgroundLayers() {
  return themesPromise.then((themes) => {
    const promises = [];
    for (const config of themes.background_layers) {
      if (config.type === 'WMTS') {
        promises.push(getWMTSCapability(config.url).then((capability) => {
          const options = optionsFromCapabilities(capability, {
            crossOrigin: 'anonymous',
            layer: config.layer,
            matrixSet: config.matrixSet
          });
          const source = new WMTS(options);
          source.updateDimensions(config.dimensions);
          const layer = new TileLayer({
            preload: Infinity,
            source: source
          });
          layer.set('config.layer', config.layer);
          layer.set('config.name', config.name);
          return layer;
        }));
      } else if (config.type === 'WMS') {
        console.log(config);
        // FIXME?
      }
    }
    return Promise.all(promises);
  });
}

const capabilities = new Map();

function getWMTSCapability(url) {
  if (!(url in capabilities)) {
    const request = fetch(url)
      .then((response) => response.text())
      .then((capability) => {
        const parser = new WMTSCapabilities();
        return parser.read(capability);
      });
    capabilities.set(url, request);
  }
  return capabilities.get(url);
}