import { usersApi } from "../api/api"
import { loader } from "../common/loader"
import { store } from "./store"

const SET_USERS = "users/SET-USERS"
const FILTER_USERS = "users/FILTER-USERS"
const REMOTE_RESULT_FILTER = "users/REMOTE-RESULT-FILTER"

const usersReducer = (state, action) => {
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
  loader(true)
  usersApi.getUsers().then((response) => {
    store.dispatch(setUsersAction(response))
    loader(false)
  })
}

export default usersReducer
