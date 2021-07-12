import { Store } from "../../stateManagment/Store"
import { usersFilter } from "../../stateManagment/UsersReducer"

export const Filter = () => {
  const filterInput = document.querySelector(".filter-input")
  const filterBtn = document.querySelector(".filter-btn")
  const cancelBtn = document.querySelector(".filter-cancel-btn")

  filterBtn.addEventListener("click", filterUsersHandler)
  cancelBtn.addEventListener("click", cancelHandler)

  function filterUsersHandler() {
    Store.dispatch(usersFilter(filterInput.value))
  }

  function cancelHandler() {
    Store.dispatch(usersFilter(""))
    filterInput.value = ""
  }

  return () => {
    filterBtn.removeEventListener("click", filterUsersHandler)
    cancelBtn.removeEventListener("click", cancelHandler)
  }
}
