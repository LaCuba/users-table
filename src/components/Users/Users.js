export class Users {

  static drawUsers (users) {
    const user = document.querySelector('.users-list')
    const html = users.map(Users.htmlUser).join('')
    user.innerHTML = html
  }

  static htmlUser (user) {
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
              <h4 class="content">${user.location.state}</h4>
            </div>
            <div class="location-city">
              <h4 class="title">City: </h4>
              <h4 class="content">${user.location.city}</h4>
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
            <h4 class="content">${user.registered.date}</h4>
          </div>
        </div>
      </div>
    `
  }
}