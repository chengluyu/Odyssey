const fastify = require('fastify')()

fastify.get('/', function (request, reply) {
  reply.send('Hello, Odyssey!')
})

fastify.listen(3000, function (err) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
