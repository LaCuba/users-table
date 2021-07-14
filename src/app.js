import { filter } from "./components/filter/filter"
import * as users from "./components/users/users"
import { store } from "./stateManagment/store"

import "./styles.css"
import "./components/filter/filterStyles.css"
import "./components/users/usersStyles.css"

const app = () => {
  const clearFilter = filter()
  users.draw()

  return () => {
    clearFilter()
  }
}

store.subscribes(() => {
  clear()
  clear = app()
})

let clear = app()
