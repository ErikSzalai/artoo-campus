module.exports = function() {
  function query(req, res) {
    console.log(req, timeRequest);
     res.status(200).send([{name:'ascia bipenne', description: 'blablabla armi blablabla armi'}]);
  }
  
  function save(req, res) {
    console.log(req.body);
    res.status(201).send();
  }
    return {
      query: query,
      save: save,
    };
}