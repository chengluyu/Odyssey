const fastify = require('fastify')()
const routes = require('./routes')

fastify.register(routes)

fastify.listen(3000, function (err) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
