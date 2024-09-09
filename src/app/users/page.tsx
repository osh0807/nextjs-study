import React from 'react'

const UsersPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const users = await res.json();
  return (
    <div>
      hih
    </div>
  )
}

export default UsersPage
