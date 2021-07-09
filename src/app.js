import { Filter } from './components/Filter/Filter'
import { Users } from './components/Users/Users'
import { UsersApi } from './api/api'

import './Styles.css'
import './components/Filter/FilterStyles.css'
import './components/Users/UsersStyles.css'

Filter()

UsersApi.getUsers().then(
  response => {
    Users.drawUsers(response)
  }
)