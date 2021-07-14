import usersReducer from "./usersReducer"

export const store = {
  _state: {
    users: {
      users: [],
      filterUsers: [],
      filterMessage: undefined,
      isFetching: false,
    },
  },

  _observers: [],

  getState() {
    return this._state
  },

  _update() {
    for (const observer of this._observers) {
      observer()
    }
  },

  subscribes(observer) {
    this._observers.push(observer)
  },

  dispatch(action) {
    this._state.users = usersReducer(this._state.users, action)
    this._update()
  },
}

window.store = store
