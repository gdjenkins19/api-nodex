module.exports = function(router) {
  router.get("/test1", function(req, res) {
    res.send("Test #1");
  });

  router.get("/test2", function(req, res) {
    res.send("Test #2");
  });
};
