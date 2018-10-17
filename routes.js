const routes = require('next-routes')()

routes
  .add('/projects/create', 'project/create')
  .add('/projects/:address', 'project/detail')
  .add('/project/:address/payment/create', 'projects/payment/create')

module.exports = routes
