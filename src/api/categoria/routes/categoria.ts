/**
 * categoria router
 */

export default {
  routes: [
    {
      method: "GET",
      path: "/categorias/nombre_de_categorias",
      handler: "categoria.default",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/categorias",
      handler: "categoria.find",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "GET",
      path: "/categorias/:id",
      handler: "categoria.findOne",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "POST",
      path: "/categorias",
      handler: "categoria.create",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "PUT",
      path: "/categorias/:id",
      handler: "categoria.update",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    },
    {
      method: "DELETE",
      path: "/categorias/:id",
      handler: "categoria.delete",
      config: {
        auth: false,
        policies: [],
        middlewares: [],
      },
    }
  ],
};
