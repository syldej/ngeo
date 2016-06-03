/**
 * Externs for the GeoMapFish "themes" web service.
 *
 * @externs
 */


/**
 * @constructor
 */
var GmfThemesNode = function() {};


/**
 * @type {number}
 */
GmfThemesNode.prototype.id;


/**
 * @type {Array.<GmfThemesNode>}
 */
GmfThemesNode.prototype.children;


/**
 * @type {Array.<GmfChildLayerNode>}
 */
GmfThemesNode.prototype.childLayers;


/**
 * @type {string}
 */
GmfThemesNode.prototype.layers;


/**
 * @type {number}
 */
GmfThemesNode.prototype.maxResolutionHint;


/**
 * @type {GmfMetaData}
 */
GmfThemesNode.prototype.metadata;


/**
 * @type {number}
 */
GmfThemesNode.prototype.minResolutionHint;


/**
 * @type {boolean}
 */
GmfThemesNode.prototype.mixed;


/**
 * @type {string}
 */
GmfThemesNode.prototype.name;


/**
 * @type {string}
 */
GmfThemesNode.prototype.type;


/**
 * @type {string|undefined}
 */
GmfThemesNode.prototype.url;


/**
 * @type {gmfx.TimeProperty|undefined}
 */
GmfThemesNode.prototype.time;

/**
 * @type {string|undefined}
 */
GmfThemesNode.prototype.wmsUrl;


/**
 * @type {number|undefined}
 */
GmfThemesNode.prototype.queryable;


/**
 * @type {boolean|undefined}
 */
GmfThemesNode.prototype.wfsSupport;


/**
 * @type {string|undefined}
 */
GmfThemesNode.prototype.urlWfs;


/**
 * @constructor
 */
var GmfThemesNodeCustom = function() {};


/**
 * @type {Array.<string>}
 */
GmfThemesNodeCustom.prototype.layers;


/**
 * @type {GmfThemesNode}
 */
GmfThemesNodeCustom.prototype.node;


/**
 * @constructor
 */
var GmfChildLayerNode = function() {};


/**
 * @type {string}
 */
GmfChildLayerNode.prototype.name;


/**
 * @type {number|boolean|undefined}
 */
GmfChildLayerNode.prototype.queryable;


/**
 * @constructor
 */
var GmfMetaData = function() {};


/**
 * @type {string|undefined}
 */
GmfMetaData.prototype.identifierAttributeField;


/**
 * @type {string|undefined}
 */
GmfMetaData.prototype.queryLayers;


/**
 * @type {string|undefined}
 */
GmfMetaData.prototype.wmsLayers;


/**
 * @type {string|undefined}
 */
GmfMetaData.prototype.wmsUrl;
