import { Filter } from './components/Filter/Filter'
import { Users } from './components/Users/Users'
import { Store } from './stateManagment/Store'

import './Styles.css'
import './components/Filter/FilterStyles.css'
import './components/Users/UsersStyles.css'

const App = () => {
  Filter()
  Users.drawUsers()
}

App()

Store.subscribes(App)