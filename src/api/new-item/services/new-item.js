'use strict';

/**
 * new-item service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::new-item.new-item');
