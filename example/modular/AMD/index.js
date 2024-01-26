define(['jquery', 'lodash', 'module1', 'module2'], function (jq, ld, m1, m2) {
  console.log($, _)
  console.log(jq, ld)

  console.log(m1.userinfo1)
  m1.sayHi1('module1')

  console.log(m2.userinfo2)
  m2.sayHi2('module2')
})
