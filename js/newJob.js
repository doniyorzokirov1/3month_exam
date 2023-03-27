var elForm = document.querySelector('.form')
var elJobsName = document.querySelector('.input-name')
var elJobsTitle = document.querySelector('.input-title')
var elJobsSalary = document.querySelector('.input-salary')
var elJobsLists = document.querySelector('.jobs-lists')
// -->
var allNewJobs = [
    {
      id: 2, 
      textCompanyName: "Google",
      textJobTitle: "Front-End",
      textJobsSalary: "4000$"
    },
    {
      id: 1,
      textCompanyName: "Najot Ta'lim",
      textJobTitle: "Front-End",
      textJobsSalary: "4000000 so'm"
    }
]
// -->
function onSubmit(evt) {
  evt.preventDefault()
  var newJob = {
    id: allNewJobs.length + 1 ,
    textCompanyName: elJobsName.value.trim(),
    textJobTitle: elJobsTitle.value.trim(),
    textJobsSalary: elJobsSalary.value.trim(),
  }
  allNewJobs.unshift(newJob)
  elJobsName.value = null
  elJobsTitle.value = null
  elJobsSalary.value = null
}
// -->
function forJobs() {
    elJobsLists.innerHTML = null
  for (let i = 0; i < allNewJobs.length; i++) {
    var elLi = document.createElement('li')
    elLi.className = 'border rounded list-unstyled mb-3'
    elLi.innerHTML = `
  <h5 class="border-bottom p-1 bg-body-secondary ps-3 pt-2 pb-2">
    ${allNewJobs[i].textJobTitle}
  </h5>
  <p class="ps-3 pt-2 pb-2">
    Company:
    <b>${allNewJobs[i].textCompanyName}</b>
  </p>
  <p class="ps-3 pb-2">
    Salary:
    <b>${allNewJobs[i].textJobsSalary}</b>
  </p>`
  elJobsLists.appendChild(elLi)
  }
}
// -->
forJobs()
elForm.addEventListener('submit', onSubmit)
elForm.addEventListener('submit', forJobs)

