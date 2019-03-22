'use strict'

const path = require('path')
const AutoLoad = require('fastify-autoload')

module.exports = function (fastify, opts, next) {
  // Place here your custom code!

  fastify.register(require('fastify-cors'), {
    origin: true
  })

  // swagger-ui
  fastify.register(require('fastify-swagger'), {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
      info: {
        title: 'mock swagger',
        description: 'frontend api server',
        version: '0.1.0'
      },
      externalDocs: {
        url: 'https://swagger.io',
        description: 'Find more info here'
      },
      host: 'localhost:3000',
      schemes: ['http'],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'check', description: '远程阅片' },
        { name: 'code', description: 'Code related end-points' }
      ],
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header'
        }
      }
    }
  })

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in services
  // define your routes in one of these
  opts.prefix = '/mock-api';
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'services'),
    options: Object.assign({}, opts),
  })

  // Make sure to call next when done
  next()
}
