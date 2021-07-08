
export const Filter = () => {
  const filterInput = document.querySelector('.filter-input')
  const filterBtn = document.querySelector('.filter-btn')
  const cancelBtn = document.querySelector('.filter-cancel-btn')
  
  filterBtn.addEventListener('click', filterUsersHandler)
  cancelBtn.addEventListener('click', cancelHandler)
  
  function filterUsersHandler () {
    console.log(filterInput.value)
    //Filter users
  }

  function cancelHandler () {
    filterInput.value = ''
  }

}
