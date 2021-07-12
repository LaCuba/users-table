import { UsersApi } from "../api/api"
import { Store } from "./Store"

const SET_USERS = "users/SET-USERS"
const FILTER_USERS = "users/FILTER-USERS"
const REMOTE_RESULT_FILTER = "users/REMOTE-RESULT-FILTER"

const UsersReducer = (state, action) => {
  switch (action.type) {
    case SET_USERS: {
      return {
        ...state,
        users: action.users,
      }
    }
    case FILTER_USERS: {
      if (action.users.length > 0) {
        return {
          ...state,
          filterUsers: action.users,
          filterMessage: undefined,
        }
      } else if (action.users.length === 0) {
        return {
          ...state,
          filterUsers: [],
          filterMessage: "Пользователи с таким именем не найдены!",
        }
      }
    }
    case REMOTE_RESULT_FILTER: {
      return {
        ...state,
        filterUsers: [],
        filterMessage: undefined,
      }
    }
    default:
      return state
  }
}

const setUsersAction = (users) => ({ type: SET_USERS, users })
export const usersFilter = (users) => ({ type: FILTER_USERS, users })
export const resultsFilterRemoter = () => ({ type: REMOTE_RESULT_FILTER })

export function setUsers() {
  UsersApi.getUsers().then((response) => {
    Store.dispatch(setUsersAction(response))
  })
}

export default UsersReducer
