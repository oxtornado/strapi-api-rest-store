/**
 * categoria controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController("api::categoria.categoria", ({ strapi }) => ({
  async default(ctx) {
    try {
      const nombres = await strapi.service("api::categoria.categoria").getCategorias();
      return ctx.send(nombres);
    } catch (error) {
      ctx.throw(500, "Error obteniendo categorías");
    }
  },
  
  async find(ctx) {
    try {
      const { data } = await super.find(ctx);
      return { data };
    } catch (error) {
      ctx.throw(500, "Error obteniendo las categorías");
    }
  },

  async findOne(ctx) {
    try {
      const { data } = await super.findOne(ctx);
      return { data };
    } catch (error) {
      ctx.throw(500, "Error obteniendo la categoría");
    }
  },

  async create(ctx) {
    try {
      const { data } = await super.create(ctx);
      return { data };
    } catch (error) {
      ctx.throw(500, "Error creando la categoría");
    }
  },

  async update(ctx) {
    try {
      const { data } = await super.update(ctx);
      return { data };
    } catch (error) {
      ctx.throw(500, "Error actualizando la categoría");
    }
  },

  async delete(ctx) {
    try {
      const { data } = await super.delete(ctx);
      return { data };
    } catch (error) {
      ctx.throw(500, "Error eliminando la categoría");
    }
  }
}));
