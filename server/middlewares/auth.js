const spareRoutes = []

/**
 * Needs to be authenticated to continue, except
 * if the requested route is in `spareRoutes`.
 */
function base (req, res, next) {
  if (
    !(spareRoutes.some((route) => (
      route.test(`${req.method} ${req.originalUrl}`)
    ))) &&
    !req.isAuthenticated()
  ) {
    res.status(401).json({
      message: 'Unauthorized.'
    })
    return
  }
  next()
}

module.exports = { base }
