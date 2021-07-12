import { UsersApi } from "../api/api"
import { Store } from "./Store"

const SET_USERS = "users/SET-USERS"
const FILTER_USERS = "users/FILTER-USERS"

const UsersReducer = (state, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      }
    }
    case FILTER_USERS: {
      if (action.name !== "") {
        return {
          ...state,
          filterUsers: state.users.filter((u) => {
            if (
              u.name.first
                .toLowerCase()
                .startsWith(action.name.toLowerCase()) ||
              u.name.last.toLowerCase().startsWith(action.name.toLowerCase())
            ) {
              return u
            }
          }),
        }
      }
      return {
        ...state,
        filterUsers: [],
      }
    }
    default:
      return state
  }
}

const setUsersAction = (users) => ({ type: SET_USERS, users })
export const usersFilter = (name) => ({ type: FILTER_USERS, name })

export function setUsers() {
  UsersApi.getUsers().then((response) => {
    Store.dispatch(setUsersAction(response))
  })
}

export default UsersReducer
