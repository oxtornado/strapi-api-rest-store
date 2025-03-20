/**
 * producto router
 */

export default {
    routes: [
        {
        method: "GET",
        path: "/productos/:nombre",
        handler: "producto.default",
        config: {
            auth: false,
            policies: [],
            middlewares: [],
        },
        },
        {
        method: "GET",
        path: "/productos",
        handler: "producto.find",
        config: {
            auth: false,
            policies: [],
            middlewares: [],
        },
        },
        {
        method: "GET",
        path: "/productos/:id",
        handler: "producto.findOne",
        config: {
            auth: false,
            policies: [],
            middlewares: [],
        },
        },
        {
        method: "POST",
        path: "/productos",
        handler: "producto.create",
        config: {
            auth: false,
            policies: [],
            middlewares: [],
        },
        },
        {
        method: "PUT",
        path: "/productos/:id",
        handler: "producto.update",
        config: {
            auth: false,
            policies: [],
            middlewares: [],
        },
        },
        {
        method: "DELETE",
        path: "/productos/:id",
        handler: "producto.delete",
        config: {
            auth: false,
            policies: [],
            middlewares: [],
        },
        }
    ],
}