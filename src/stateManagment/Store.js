import UsersReducer from "./UsersReducer"

export const Store = {
  _state: {
    users: {
      users: [],
      filterUsers: [],
      filterMessage: undefined,
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
    this._state.users = UsersReducer(this._state.users, action)
    this._update()
  },
}

window.store = Store
