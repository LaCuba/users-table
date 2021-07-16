import { store } from "../../stateManagment/store"
import {
  resultsFilterRemoter,
  usersFilter,
} from "../../stateManagment/usersReducer"

const renderFilter = () => {
  return `
    <span class="filter-input-container">
      <input class="filter-input" type="text" />
    </span>
    <span class="filter-cancel-btn-container">
      <button class="filter-cancel-btn">X</button>
    </span>
  `
}

const draw = () => {
  const filterContainer = document.getElementById("filter")
  if (!filterContainer.firstChild) {
    const html = renderFilter()
    filterContainer.innerHTML = html
  }
}

const filterUsersHandler = () => {
  const filterInput = document.querySelector(".filter-input")
  const cancelBtn = document.querySelector(".filter-cancel-btn")

  filterInput.addEventListener("input", filterHandler)
  cancelBtn.addEventListener("click", cancelHandler)

  let timer = null

  function filterHandler(e) {
    debugger
    if (e.target.value) {
      clearTimeout(timer)
      timer = window.setTimeout(
        (name) => {
          let filterUsers = store.getState().users.users.filter((u) => {
            if (
              u.name.first.toLowerCase().startsWith(name.toLowerCase()) ||
              u.name.last.toLowerCase().startsWith(name.toLowerCase())
            ) {
              return u
            }
          })
          store.dispatch(usersFilter(filterUsers))
        },
        1500,
        e.target.value
      )
    }
  }

  function cancelHandler() {
    store.dispatch(resultsFilterRemoter())
    filterInput.value = ""
  }

  return () => {
    filterInput.removeEventListener("input", filterHandler)
    cancelBtn.removeEventListener("click", cancelHandler)
  }
}

export const filter = () => {
  draw()
  let clear = filterUsersHandler()
  return () => {
    clear()
  }
}
