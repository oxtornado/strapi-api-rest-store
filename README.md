# Proyecto: Proveedores, Productos y Categorías

## Descripción del problema
Se necesita una base de datos para gestionar la relación entre proveedores, productos y categorías de una tienda. Un producto puede estar asociado a varias categorías, y una categoría puede contener varios productos. Además, se debe almacenar información sobre los proveedores que suministran los productos.

---

## Tecnologías utilizadas
- **BackEnd:** Strapi
- **Base de Datos:** SQLite
- **API:** RESTful

---

## Modelado de Datos

### **Entidades principales:**

1. **Proveedores**
   - ID del proveedor
   - Nombre
   - Dirección
   - Teléfono
   - Correo electrónico
   - Nombre del contacto

2. **Productos**
   - ID del producto
   - Nombre del producto
   - Descripción
   - Precio
   - Cantidad en stock
   - ID del proveedor

3. **Categorías**
   - ID de la categoría
   - Nombre de la categoría
   - Descripción de la categoría

### **Entidad intermedia:**
Se puede crear una entidad intermedia para gestionar la relación **muchos a muchos** entre productos y categorías si es necesario.

---

## Relaciones
- Un **proveedor** puede suministrar varios productos (**uno a muchos**).
- Un **producto** está asociado a un único proveedor (**muchos a uno**).
- Un **producto** puede estar en varias categorías (**muchos a muchos**).
- Una **categoría** puede contener varios productos (**muchos a muchos**).

---

## Reglas de Negocio
1. Cada producto debe estar asociado a un proveedor.
2. Un producto debe estar vinculado al menos a una categoría.
3. Un proveedor puede proveer varios productos, pero cada producto solo puede tener un proveedor.

---

## Consultas esperadas
1. Listar todos los productos de un proveedor específico.
2. Consultar las categorías en las que está clasificado un producto.
3. Ver todos los productos que pertenecen a una categoría específica.
4. Listar los productos que pertenecen a múltiples categorías.
5. Obtener información detallada de un proveedor junto con sus productos.

---

## Configuración y Uso
1. **Instalar dependencias:**
   ```bash
   npm install
   ```
2. **Ejecutar Strapi:**
   ```bash
   npm run develop
   ```
3. **Acceder a la API:**
   - `GET /api/proveedores`
   - `GET /api/productos`
   - `GET /api/categorias`
   - `GET /api/productos?filters[categorias][id][$eq]=1` (Ejemplo de filtro por categoría)
   
---

## Datos de prueba
Para poblar la base de datos, puedes usar generadores de datos como:
- [Mockaroo](https://www.mockaroo.com/)
- [Faker.js](https://fakerjs.dev/)

