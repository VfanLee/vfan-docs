define([], function () {
  var userinfo2 = {
    id: 2,
    username: 'bar',
    password: 'bar'
  }

  function sayHi2(name) {
    console.log('hello ' + name)
  }

  return {
    userinfo2,
    sayHi2
  }
})
