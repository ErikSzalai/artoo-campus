
module.exports = function (req, res, next) {
    var ip = req.headers['x-forwarded-for'];
    if (ip[3] % 2 === 1) return next();
    res.status(400).send('fuck off');
};