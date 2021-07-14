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
    <span class="filter-btn-container">
      <button class="filter-btn">Filter</button>
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
  const filterBtn = document.querySelector(".filter-btn")
  const cancelBtn = document.querySelector(".filter-cancel-btn")

  filterBtn.addEventListener("click", filterHandler)
  cancelBtn.addEventListener("click", cancelHandler)

  function filterHandler() {
    let filterUsers = store.getState().users.users.filter((u) => {
      if (
        u.name.first
          .toLowerCase()
          .startsWith(filterInput.value.toLowerCase()) ||
        u.name.last.toLowerCase().startsWith(filterInput.value.toLowerCase())
      ) {
        return u
      }
    })
    store.dispatch(usersFilter(filterUsers))
  }

  function cancelHandler() {
    store.dispatch(resultsFilterRemoter())
    filterInput.value = ""
  }

  return () => {
    filterBtn.removeEventListener("click", filterHandler)
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
