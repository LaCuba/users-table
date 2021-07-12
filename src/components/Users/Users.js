import { Store } from "../../stateManagment/Store"
import { setUsers } from "../../stateManagment/UsersReducer"

const renderOne = (user) => {
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }
  const date = new Date(user.registered.date)
  const newDate = date.toLocaleString("ru", options)

  return `
    <div class="container">
      <div class="info">
        <div class="avatar">
          <img src=${user.picture.thumbnail} alt="" />
        </div>
        <div class="name">
          <h3>${user.name.first} ${user.name.last}</h3>
        </div>
        <div class="location">
          <div class="location-state">
            <h4 class="title">State: </h4>
            <h4 class="location-content content">${user.location.state}</h4>
          </div>
          <div class="location-city">
            <h4 class="title">City: </h4>
            <h4 class="location-content content">${user.location.city}</h4>
          </div>
        </div>
        <div class="email">
          <h4 class="title">Email: </h4>
          <h4 class="content">${user.email}</h4>
        </div>
        <div class="phone">
          <h4 class="title">Phone: </h4>
          <h4 class="content">${user.phone}</h4>
        </div>
        <div class="registerDate">
          <h4 class="title">Register date: </h4>
          <h4 class="content">${newDate}</h4>
        </div>
      </div>
    </div>
  `
}

export const draw = () => {
  if (Store.getState().users.users.length === 0) {
    setUsers()
  }

  const usersContainer = document.querySelector(".users-list")

  let users =
    Store.getState().users.filterUsers.length > 0
      ? Store.getState().users.filterUsers
      : Store.getState().users.users

  const html = users.map(renderOne).join("")
  usersContainer.innerHTML = html
}
