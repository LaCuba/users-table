import { Filter } from "./components/Filter/Filter"
import * as Users from "./components/Users/Users"
import { Store } from "./stateManagment/Store"

import "./Styles.css"
import "./components/Filter/FilterStyles.css"
import "./components/Users/UsersStyles.css"

const App = () => {
  const clearFilter = Filter()
  Users.draw()

  return () => {
    clearFilter()
  }
}

Store.subscribes(() => {
  clear()
  clear = App()
})

let clear = App()
