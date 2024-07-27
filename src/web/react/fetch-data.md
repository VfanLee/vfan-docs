# Fetch 数据

::: code-group

```jsx [App.jsx]
import useFetchUsers from './useFetchUsers'

export default function App() {
  const { isLoading, error, data: users } = useFetchUsers()

  return (
    <>
      {isLoading ? (
        <p>Fetching users...</p>
      ) : error ? (
        <p>An error occurred while fetching users</p>
      ) : (
        users && (
          <ul>
            {users.map(user => (
              <li key={user.login.uuid}>
                <img src={user.picture.thumbnail} alt="user" />
                <p>
                  {user.name.first} {user.name.last}
                </p>
              </li>
            ))}
          </ul>
        )
      )}
    </>
  )
}
```

```js [useFetchUsers.js]
import { useEffect, useState } from 'react'

export default function useFetchUsers() {
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      try {
        const response = await fetch('https://randomuser.me/api/?results=3')
        const { results: users } = await response.json()
        setData(users)
        setError()
      } catch (err) {
        setData()
        setError(err)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return { isLoading, error, data }
}
```

:::
