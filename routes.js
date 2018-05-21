async function routes(fastify, options) {

  fastify.get('/', async (request, reply) => {
    reply.send('You get homepage!')
  })

  fastify.get('/categories', async (request, reply) => {
    reply.send('You get all categories!')
  })

  fastify.get('/category/:name', async (request, reply) => {
    const name = request.params['name']
    if (name === '') {
      reply.redirect(302, '/categories')
    } else {
      reply.send(`You get category "${name}"!`)
    }
  })

  fastify.get('/tags', async (request, reply) => {
    reply.send('You get all tags!')
  })

  fastify.get('/tag/:name', async (request, reply) => {
    const name = request.params['name']
    if (name === '') {
      reply.redirect(302, '/tags')
    } else {
      reply.send(`You get tag "${name}"!`)
    }
  })

  fastify.get('/archives', async (request, reply) => {
    reply.send('You get archives!')
  })

  fastify.get('/post/:permalink', async (request, reply) => {
    const permalink = request.params['permalink']
    if (permalink === '') {
      reply.redirect(302, '/archives')
    } else {
      reply.send(`You get post with permalink "${permalink}!`)
    }
  })

  fastify.get('/series/:title', async (request, reply) => {
    const title = request.params['title']
    if (title === '') {
      reply.send('You get all series!')
    } else {
      reply.send(`You get series "${title}!`)
    }
  })
}

module.exports = routes
