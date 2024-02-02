;(function () {
  var userinfo1 = {
    id: 1,
    username: 'foo',
    password: 'foo'
  }

  function sayHi1(name) {
    console.log('hello ' + name)
  }

  window.module1 = {
    userinfo1,
    sayHi1
  }
})()
