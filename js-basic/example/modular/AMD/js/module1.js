define([], function () {
  var userinfo1 = {
    id: 1,
    username: 'foo',
    password: 'foo'
  }

  function sayHi1(name) {
    console.log('hello ' + name)
  }

  return {
    userinfo1,
    sayHi1
  }
})
