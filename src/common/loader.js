export const loader = (isFetching) => {
  if (isFetching) {
    const usersContainer = document.querySelector(".users-list")
    usersContainer.style.cssText = "none"
    usersContainer.style.cssText = `
      width: 1120px;
      margin: 0 auto;
      margin-bottom: 50px;
      text-align: center;`
    usersContainer.innerHTML = `<img class="loader" src="./src/icons/loader.gif" alt="preloader" />`
  } else {
    return
  }
}
