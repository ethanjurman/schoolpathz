const Tram = require('tram-one')
const html = Tram.html({
  header: require('../elements/header'),
  Student: require('../elements/Student')
})

module.exports = ({students}, {addStudent}) => {

  const inputHandler = ({target, keyCode}) => {
    if (keyCode == 13) {
      addStudent({
        id: students.length,
        name: target.value
      })
    }
  }
  const studentsDOM = students.map((student) => {
    return html`<Student studentName=${student.name}></Student>`
  })
  return html`
    <div>
      <header></header>
      <input onkeyup=${inputHandler} />
      ${studentsDOM}
    </div>
  `
}
