/**
 * producto controller
 */

import { factories } from '@strapi/strapi'
import producto from '../routes/producto';

export default factories.createCoreController('api::producto.producto', ({ strapi }) => ({
    async find(ctx) {
        try {
            const { data } = await super.find(ctx);
            return { data };
        } catch (error) {
            ctx.throw(500, 'Error obteniendo los productos');
        }
    },

    async findOne(ctx) {
        try {
            const { data } = await super.findOne(ctx);
            return { data };
        } catch (error) {
            ctx.throw(500, 'Error obteniendo el producto');
        }
    },

    async create(ctx) {
        try {
            const { data } = await super.create(ctx);
            return { data };
        } catch (error) {
            ctx.throw(500, 'Error creando el producto');
        }
    },

    async update(ctx) {
        try {            
            const { data } = await super.update(ctx);
            return { data };
        } catch (error) {
            ctx.throw(500, 'Error actualizando el producto');
        }
    },

    async delete(ctx) {
        try {
            const { data } = await super.delete(ctx);
            return { data };
        } catch (error) {
            ctx.throw(500, 'Error eliminando el producto');
        }
    }
}));