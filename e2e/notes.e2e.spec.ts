import { test, expect } from '@playwright/test';
import { resetAndSeed } from './helpers';

test.describe('E2E Notas', () => {
    
    // Resetea la base con datos de prueba
    test.beforeEach(async ({ baseURL }) => {await resetAndSeed(baseURL!);
    });

    // Test optimista
    test('Happy path: crear una nota y que aparezca en la lista', async ({ request }) => {
        throw new Error('Fallo forzado para el test en rojo.')
    });

    // Test pesimista
    test('Caso de error: rechaza una nota inválida y no modifica el estado inicial', async ({ request }) => {
        throw new Error('Fallo forzado para el test en rojo.')
    });
});