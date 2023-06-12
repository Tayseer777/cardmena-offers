// 'use strict';

// /**
//  * offer controller
//  */

// const { createCoreController } = require('@strapi/strapi').factories;

// module.exports = createCoreController('api::offer.offer', ({strapi}) => ({
//     async customAction(ctx){
//         // let {uid} = ctx.params
//         // let {query} = ctx

//         // let entity = await strapi.service('api::offer.offer').findOne(uid, query)
//         // let sanitizeEntity = await this.sanitizeOutput(entity, ctx)
//         // return this.transformResponse(sanitizeEntity)
//         let {query} = ctx
//         const sanitizedQueryParams = await this.sanitizeQuery(ctx);
//         const { results, pagination } = await strapi.service('api::offer.offer').find(sanitizedQueryParams, query);
//         const sanitizedResults = await this.sanitizeOutput(results, ctx);
    
//         return this.transformResponse(sanitizedResults, { pagination });
//     }
//     // async customAction(ctx) {
//     //     const { uid } = ctx.params;
//     //     const { query } = ctx.request;
      
//     //     const sanitizedQueryParams = await this.sanitizeQuery(ctx);
      
//     //     // Extract the populate field from the query parameters
//     //     const populateFields = query.populate ? query.populate.split(',') : [];
      
//     //     // Set the populate option in the sanitizedQueryParams
//     //     sanitizedQueryParams.populate = populateFields;
      
//     //     const { results, pagination } = await strapi
//     //       .service('api::offer.offer')
//     //       .find(sanitizedQueryParams);
      
//     //     const sanitizedResults = await this.sanitizeOutput(results, ctx);
      
//     //     return this.transformResponse(sanitizedResults, { pagination });
//     //   }
      
      
//     // async customAction(ctx) {
//     //     const { uid } = ctx.params;
//     //     const { populate } = ctx.query;
      
//     //     // Build the populate object to include the related fields
//     //     const populateOptions = populate.split(',').map(field => ({
//     //       path: field,
//     //       select: 'package client sales', // Specify the fields you want to include
//     //     }));
      
//     //     // Retrieve the entity with the related fields
//     //     const entity = await strapi
//     //         .service('api::offer.offer')
//     //         .findOne({ uid })
//     //         .populate(populateOptions);
      
//     //     const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
//     //     return this.transformResponse(sanitizedEntity);
//     //   }
      
//     // async findOne(ctx) {
//     //     let { uid } = ctx.params;
//     //     let { query } = ctx;
      
//     //     let entity = await strapi
//     //       .query('offer')
//     //       .findOne({ uid }, query);
      
//     //     let sanitizeEntity = await strapi
//     //       .query('offer')
//     //       .model
//     //       .sanitizeEntity(entity, { model: strapi.models.offer });
      
//     //     return this.transformResponse(sanitizeEntity);
//     //   }
//     // async findOne(ctx){
//     //     let {uid} = ctx.params
//     //     let {query} = ctx

//     //     let entity = await strapi.service('api::offer.offer').findOne(uid, query)
//     //     let sanitizeEntity = await this.sanitizedOutput(entity, ctx)
//     //     return this.transformResponse(sanitizeEntity)
//     // }
//     // async findOne(ctx) {
//     //     const sanitizedQueryParams = await this.sanitizeQuery(ctx);
//     //     const { results, pagination } = await strapi.service('api::offer.offer').find(sanitizedQueryParams);
//     //     const sanitizedResults = await this.sanitizeOutput(results, ctx);
    
//     //     return this.transformResponse(sanitizedResults, { pagination });
//     //   }
//     // async findOne(ctx) {
//     //     const { id: uid } = ctx.params;
//     //     const { query } = ctx;
//     //     if (!query.filters) query.filters = {}
//     //     query.filters.uid = { '$eq': uid }
//     //     const entity = await strapi.service('api::offer.offer').find(query);
//     //     const { results } = await this.sanitizeOutput(entity, ctx);
    
//     //     return this.transformResponse(results[0]);
//     //   }
//     // async findOne(ctx) {
//     //     const { uid } = ctx.params;
//     //     const entity = await strapi.db.query('api::offer.offer').findOne({
//     //         where: { uid: uid }
//     //     });
//     //     const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

//     //     return this.transformResponse(sanitizedEntity);
//     // }
// }));
  
"use strict";

/**
 *  offer controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::offer.offer", ({ strapi }) => ({
  async findOne(ctx) {
    const { uid } = ctx.params;

    const query = {
      filters: { uid },
      ...ctx.query,
    };
            // let {query} = ctx


    const offer = await strapi.entityService.findMany("api::offer.offer", query);

    // const sanitizedEntity = await this.sanitizeOutput(offer);

    return this.transformResponse(offer[0]);
  },
}));