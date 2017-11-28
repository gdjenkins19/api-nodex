module.exports = function(router) {
  router.get("/", function(req, res) {
    res.send("Microservice Routes ...");
  });

  router.get("/status", function(req, res) {
    res.send("Microservice Status ...");
  });
};
