import { UsersApi } from "../api/api"
import { Store } from "./Store"

const SET_USERS = 'users/SET-USERS'

const UsersReducer = (state, action) => {
  switch(action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: action.users
      }
    }
    default:
      return state
  }
}

const setUsersActionCreator = (users) => ({type: SET_USERS, users})

export function setUsers () {
  if (Store.getState().users.users.length <= 0) {
    UsersApi.getUsers().then(
      response => {
        Store.dispatch(setUsersActionCreator(response))
      }
    )
  }
}

export default UsersReducer