export const usersApi = {
  getUsers() {
    return fetch("https://randomuser.me/api/?results=16")
      .then((response) => response.json())
      .then((response) => response.results)
  },
}
