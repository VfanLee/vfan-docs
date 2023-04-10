var module2 = (function () {
  var userinfo2 = {
    id: 1,
    username: "lee",
    password: "123456",
  };

  function sayHi2(name) {
    console.log("hello " + name);
  }

  return {
    userinfo2,
    sayHi2,
  };
})();
