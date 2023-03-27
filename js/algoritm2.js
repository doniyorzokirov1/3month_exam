var userNumber = Number(prompt('Input number'))
function numberSum(num) {
  var startNumber = 0
  var newArray = []
  // -->
  for (var i = num; i >= 1; i--) {
    newArray.unshift(i)
  }
  console.log(newArray)
  // -->
  for (var i = 1; i <= num; i++) {
    startNumber += i
  }
  console.log(startNumber)
  // -->
}
numberSum(userNumber)
