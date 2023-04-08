(function () {
  var userinfo = {
    id: 1,
    username: "lee",
    password: "123456",
  };

  function sayHi(name) {
    console.log("hello " + name);
  }

  window.module1 = {
    userinfo,
    sayHi,
  };
})();
