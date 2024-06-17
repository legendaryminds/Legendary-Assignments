module.exports = (req, res, next) => {
    req.spell = 'Expecto Patronum!'; next();
};