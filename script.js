document.getElementById('button').addEventListener('click', check)
let age = 0
let date = 'Saturday'

function check () {
  age = document.getElementById('day').value
  age = parseInt(age)

  date = document.getElementById('age').value

  if ((date === 'Wednesday' || date === 'Saturday') || (age > 13 || age < 20)) {
    document.getElementById('answer').innerHTML = 'student discount.'
  } else {
    document.getElementById('answer').innerHTML = 'regular pricing.'
  }
}
