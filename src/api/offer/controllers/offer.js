'use strict';

/**
 * offer controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::offer.offer', {
    /**
     * 
     * @param {Object} ctx - Koa context
     * @returns {Object}
     */
    async findOne(ctx) {
      const { uid } = ctx.params;
      const entity = await strapi.services.offer.findOne({ uid });
      return strapi.services.offer.sanitizeEntity(entity);
    }
  });

// const {sanitizeEntity} = require('strapi-utils')

  