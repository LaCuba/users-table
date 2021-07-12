import { Filter } from "./components/Filter/Filter"
import { Store } from "./stateManagment/Store"

import "./Styles.css"
import "./components/Filter/FilterStyles.css"
import "./components/Users/UsersStyles.css"

const App = () => {
  const clearFilter = Filter()
  render()

  return () => {
    clearFilter()
  }
}

let clear = App()

Store.subscribes(() => {
  clear()
  clear = App()
})
