import { Store } from "../../stateManagment/Store"
import {
  resultsFilterRemoter,
  usersFilter,
} from "../../stateManagment/UsersReducer"

export const renderFilter = () => {
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

export const Filter = () => {
  const filterContainer = document.getElementById("filter")
  if (!filterContainer.firstChild) {
    const html = renderFilter()
    filterContainer.innerHTML = html
  }

  const filterInput = document.querySelector(".filter-input")
  const filterBtn = document.querySelector(".filter-btn")
  const cancelBtn = document.querySelector(".filter-cancel-btn")

  filterBtn.addEventListener("click", filterUsersHandler)
  cancelBtn.addEventListener("click", cancelHandler)

  function filterUsersHandler() {
    let filterUsers = Store.getState().users.users.filter((u) => {
      if (
        u.name.first
          .toLowerCase()
          .startsWith(filterInput.value.toLowerCase()) ||
        u.name.last.toLowerCase().startsWith(filterInput.value.toLowerCase())
      ) {
        return u
      }
    })
    Store.dispatch(usersFilter(filterUsers))
  }

  function cancelHandler() {
    Store.dispatch(resultsFilterRemoter())
    filterInput.value = ""
  }

  return () => {
    filterBtn.removeEventListener("click", filterUsersHandler)
    cancelBtn.removeEventListener("click", cancelHandler)
  }
}
