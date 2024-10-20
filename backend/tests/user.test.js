const mongoose = require('mongoose');
const User = require('../models/User'); // Ajuste o caminho para o seu modelo
const dotenv = require('dotenv');

dotenv.config();

// Configuração do MongoDB para testes
const mongoURI = process.env.MONGODB_URI; // Use um banco de dados separado para testes
beforeAll(async () => {
    await mongoose.connect(mongoURI);
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('User Model Test', () => {
    test('should create & save user successfully', async () => {
        const userData = { name: 'Test User', email: 'test@example.com', password: 'password123' };
        const user = new User(userData);
        const savedUser = await user.save();

        expect(savedUser._id).toBeDefined();
        expect(savedUser.name).toBe(userData.name);
        expect(savedUser.email).toBe(userData.email);
    });
});