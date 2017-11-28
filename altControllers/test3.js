module.exports = function(router) {
    router.get("/test3", function(req, res) {
      res.send("Test #3");
    });
};