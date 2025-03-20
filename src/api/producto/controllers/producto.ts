/**
 * producto controller
 */

import { factories } from '@strapi/strapi'
import producto from '../routes/producto';

export default factories.createCoreController('api::producto.producto', ({ strapi }) => ({
    async default(ctx) {
        try {
        // call al products related to a supplier name
        //     const { proveedor } = ctx.query; // Recibir parámetro del nombre del proveedor 
        //     if (!proveedor) {
        //         ctx.throw(500, 'No se ha especificado el proveedor');
        //     }
        // Llamar al servicio y pasarle el filtro
        //     const products = await strapi
        //       .service("api::producto.producto")
        //       .getFilteredSupplier(proveedor);
        //     ctx.body = { message: "Productos related to this supplier", products };
        // } catch (error) {
        //     ctx.throw(500, 'Error obteniendo productos');
        // }
        // de esta forma nuestro request se veria asi:
        // http://localhost:1337/productos?supplier=proveedor1


        // pero si queremos que el request se vea asi:
        // http://localhost:1337/api/productos/proveedor1
        // debemos hacer lo siguiente:
        // Obtener el nombre del proveedor desde la URL
        const { nombre } = ctx.params; // Debes usar ctx.params, no ctx.query
        const decodedSupplier = decodeURIComponent(nombre);

        console.log("Buscando proveedor:", decodedSupplier);

        // Buscar el proveedor en la base de datos
        const supplierRecord = await strapi.entityService.findMany("api::proveedor.proveedor", {
            filters: { nombre: decodedSupplier }
        });

        if (!supplierRecord || supplierRecord.length === 0) {
            ctx.throw(404, "Proveedor no encontrado");
            return;
        }

        const supplierId = supplierRecord[0].id;
        console.log("Proveedor encontrado con ID:", supplierId);

        // Buscar los productos asociados a ese proveedor
        const products = await strapi.entityService.findMany("api::producto.producto", {
            filters: { idProveedor: supplierId } // Filtrar por el id del proveedor
        });

        ctx.body = { message: "Productos relacionados con este proveedor", products };
    } catch (error) {
        console.error("Error en el controlador:", error);
        ctx.throw(500, "Error obteniendo productos");
    }
    },
    
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