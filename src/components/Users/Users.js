import { store } from "../../stateManagment/store"

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
          <img class="avatar-min" src=${user.picture.thumbnail} alt="" />
          <div class="tooltip-avatar">
            <img class="avatar-max" src=${user.picture.large} alt="" />
          </div>
        </div>
        <div class="name">
          <h3>${user.name.first} ${user.name.last}</h3>
        </div>
        <div class="location">
          <h4 class="location-content">${user.location.state}, </h4>
          <h4 class="location-content">${user.location.city}</h4>
        </div>
        <div class="email">
          <h4 class="title">Email: </h4>
          <h4 class="email-content content">${user.email}</h4>
          <span class="tooltip-email">${user.email}</span>
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
  if (store.getState().users.users.length > 0) {
    const usersContainer = document.querySelector(".users-list")

    if (store.getState().users.filterMessage) {
      usersContainer.style.cssText = "none"
      usersContainer.style.cssText = `
      width: 1120px;
      margin: 0 auto;
      margin-bottom: 50px;`

      const html = `<h2 class="message-filter">${
        store.getState().users.filterMessage
      }</h2>`
      usersContainer.innerHTML = html
    } else {
      usersContainer.style.cssText = `
      width: 1120px;
      margin: 0 auto;
      margin-bottom: 50px;
      display: grid;
      grid-template-columns: repeat(4, 265px);
      gap: 20px;`

      let users =
        store.getState().users.filterUsers.length > 0
          ? store.getState().users.filterUsers
          : store.getState().users.users

      const html = users.map(renderOne).join("")
      usersContainer.innerHTML = html
    }
  }
}
