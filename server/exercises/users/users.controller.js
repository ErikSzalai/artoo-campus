module.exports = function () {
    function query(req, res) {
       res.send([{name: 'Sid', email: 'silvia.peveri01@gmail.com'}]);
    }
    
    //public API
    return {
        query:query,
    }
}