/**
 * categoria service
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreService("api::categoria.categoria", ({ strapi }) => ({
  async getCategorias() {
    try {
      const categorias = await strapi.entityService.findMany("api::categoria.categoria", {
        fields: ["nombreCategoria"],
      });
      return categorias.map(cat => cat.nombreCategoria);
    } catch (error) {
      throw new Error("Error obteniendo categorías");
    }
  }
}));
