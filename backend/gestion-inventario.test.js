const request = require('supertest');
const express = require('express');
const gestionInventario = require('./gestion-inventario');
const app = express();
app.use(express.json()); 

const mockConnection = {}; // Mock de la conexión a la base de datos
const router = gestionInventario(mockConnection);
app.use('/api/inventario', router);

describe('gestion-inventario', () => {
    it('debería obtener todos los productos', async () => {
        // Simular la respuesta de la base de datos
        const products = [
            {
                id: 1,
                producto: 'Pegamento',
                cantidad: 3,
                peso_volumen: 'kg',
                precio: 5.50,
                proveedor: 'Almacen Kywy',
                almacen: 70
            }
        ];

        // Simular el método de la conexión a la base de datos
        mockConnection.query = jest.fn().mockResolvedValue([products]);

        const response = await request(app).get('/api/inventario');
        expect(response.status).toBe(200);
        expect(response.body).toEqual(products);
    });

    it('debería agregar un nuevo producto', async () => {
        const newProduct = {
            producto: 'Nuevo Pegamento',
            cantidad: 5,
            peso_volumen: 'kg',
            precio: 7.00,
            proveedor: 'Nuevo Proveedor',
            almacen: 50
        };

        // Simular la inserción en la base de datos
        mockConnection.query = jest.fn().mockResolvedValue([{ affectedRows: 1 }]);

        const response = await request(app).post('/api/inventario').send(newProduct);
        expect(response.status).toBe(201);
        expect(response.body).toEqual({ message: 'Producto agregado' });
    });

    
});
