import UsersReducer from "./UsersReducer"

export const Store = {
  
  _state: {
    users: {
      users: []
    },
  },
  
  getState() {
    return this._state
  },

  _renderProject() {
    console.log("State changed")
  },

  subscribes(observer) {
    this._renderProject = observer
  },

  dispatch(action) {  // TYPE
    this._state.users = UsersReducer(this._state.users, action)

    this._renderProject(this._state)
  }
}