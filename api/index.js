import express from 'express';
import dotenv from 'dotenv';
import db from './database/configdb.js';
import userRoutes from './routes/user.route.js'; // importa as rotas de usuário
import User from './models/User.js'; // cria a collection de users
import exampleRoute from './routes/protected.route.js'; 
import cors from 'cors'; // importa o CORS

// Importações para o Swagger
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './config/swagger.config.js';



dotenv.config();
db.connect();

const app = express();

// Configuração do CORS
app.use(cors());

// Configuração do CORS
app.use(cors({
  origin: ['http://localhost:5173', 'https://congenial-space-giggle-x757v679xgr36jj6-5173.app.github.dev'],  // permite requisições do frontend na porta 3001
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],  // métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'],  // cabeçalhos permitidos
}));

app.use(express.json()); // para aceitar JSON no corpo das requisições

// Rota para a documentação Swagger
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rotas da API
app.use("/users", userRoutes); // define o prefixo para as rotas de usuário
app.use("/secure", exampleRoute); // define o prefixo para as rotas de exemplo

app.get('/', (req, res) => {
  res.send({ message: 'API is running...' });
});

const PORT = process.env.PORT || 3000; // O Swagger foi configurado para localhost:3001, mas a API pode rodar em outra porta. Ajuste se necessário.

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta http://localhost:${PORT}/`);
  console.log(`Documentação Swagger disponível em http://localhost:${PORT}/docs`); // Log para URL do Swagger
});

