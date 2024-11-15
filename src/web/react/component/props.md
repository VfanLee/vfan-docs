
# Props

::: code-group

```jsx [App.jsx]
import UserProfile from './UserProfile.jsx'

function App() {
  return (
    <UserProfile
      name="John"
      age={20}
      favouriteColors={['green', 'blue', 'red']}
      isAvailable
    />
  )
}

export default App
```

```jsx [UserProfile.jsx]
import PropTypes from 'prop-types'

function UserProfile({
  name = '',
  age = null,
  favouriteColors = [],
  isAvailable = false
}) {
    return (
    <>
      <p>My name is {name}!</p>
      <p>My age is {age}!</p>
      <p>My favourite colors are {favouriteColors.join(', ')}!</p>
      <p>I am {isAvailable ? 'available' : 'not available'}</p>
    </>
  )
}

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  favouriteColors: PropTypes.arrayOf(PropTypes.string).isRequired,
  isAvailable: PropTypes.bool.isRequired,
}

export default UserProfile
```

:::

::: tip prop-types?

`prop-types` 是一个独立的 npm 包，并不是 React 自带的功能。为了减少 React 的核心库体积，React 团队在 **React v15.5** 之后将 PropTypes 分离出来，放到 `prop-types` 包中，因此需要单独安装并导入。

```sh
npm install prop-types
```

👉 [props-types 快速入门](https://www.youtube.com/watch?v=cx0S8JyiVxc)
:::
