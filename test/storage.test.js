const Storage = require('../storage')

test('Test the connection', async () => {
  await Storage.db.authenticate()
})

test('Sync the database', async () => {
  await Storage.db.sync({ force: true })
})
