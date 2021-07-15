import { filter } from "./components/filter/filter"
import * as users from "./components/users/users"
import { store } from "./stateManagment/store"

import "./styles.css"
import "./components/filter/filterStyles.css"
import "./components/users/usersStyles.css"
import { setUsers } from "./stateManagment/usersReducer"

const app = () => {
  if (store.getState().users.users.length === 0) {
    setUsers()
  } else {
    const clearFilter = filter()
    users.draw()
    return () => {
      clearFilter()
    }
  }
}

store.subscribes(() => {
  if (clear) {
    clear()
  }
  clear = app()
})

let clear = app()
