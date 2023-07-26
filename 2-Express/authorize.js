const authorize = (req, res, next) => {
    const { user } = req.query
    if (user === 'john') {
        req.user = { use: "john", id: 4 }
        next()
    } else {
        res.status(401).send('unauthorized')
    }
}

module.exports = authorize