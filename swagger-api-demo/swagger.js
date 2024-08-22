// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Diseño de APIs Axity-2024',
    version: '1.0.0',
    description: 'Aplicación demo en Express para mostrar la funcionalida de swagger',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'QA Server Test',
    },
    {
      url: 'http://localhost:4000',
      description: 'Pre-Production Server Test',
    }
  ],
  components:{
    securitySchemes: {
      bearerAuth:{
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
      }
    }
  },
  security:
    [{  bearerAuth: [] }]
  
};

const options = {
  swaggerDefinition,
  apis: ['./index.js'], // Puntos a las anotaciones de la API
};

const swaggerSpec = swaggerJSDoc(options);

function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}

module.exports = setupSwagger;
