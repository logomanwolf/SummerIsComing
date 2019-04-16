const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  // app.use(proxy('/api/', { target: 'http://localhost:3000/' }));
  app.use(
    proxy(
      [
        "/users/",
        "/grade/",
        "/kaoqin/",
        "/teacher/",
        "/exam/",
        "/kaoqin_type/",
        "/exam_type/"
      ],
      { target: "http://localhost:3003" }
    )
  );
};
