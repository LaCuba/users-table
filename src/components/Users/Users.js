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
            <h3>${user.name.first}</h3>
            <h3>${user.name.last}</h3>
          </div>
          <div class="location">
            <h4>${user.location.state}</h4>
            <h4>${user.location.city}</h4>
          </div>
          <div class="email">
            <h4>${user.email}</h4>
          </div>
          <div class="phone">
            <h4>${user.phone}</h4>
          </div>
          <div class="registerDate">
            <h4>${user.registered.data}</h4>
          </div>
        </div>
      </div>
    `
  }
}