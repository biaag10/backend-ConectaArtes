import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "RankEat API",
      version: "1.0.0",
      description: "Documentação da API do RankEat com Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000", // Altere para a URL base da sua API
        description: "Servidor de Desenvolvimento"
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
    security: [{
      bearerAuth: []
    }]
  },
  apis: ["./api/routes/*.js"], // Caminho relativo para os arquivos de rota
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;
