import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import Inventory from '../components/Inventory';

jest.mock('axios');

describe('Inventory Component', () => {
    test('should render and display products', async () => {
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

        axios.get.mockResolvedValue({ data: products });

        render(<Inventory />);

        expect(screen.getByText('Inventario')).toBeInTheDocument();
        expect(screen.getByText('Nuevo Producto')).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Pegamento')).toBeInTheDocument();
            expect(screen.getByText('3')).toBeInTheDocument();
            expect(screen.getByText('kg')).toBeInTheDocument();
            expect(screen.getByText('5.5')).toBeInTheDocument();
            expect(screen.getByText('Almacen Kywy')).toBeInTheDocument();
            expect(screen.getByText('70')).toBeInTheDocument();
        });
    });
});
