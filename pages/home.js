const Tram = require('tram-one')
const curriculum = require('../utils/standardCurriculum')
const html = Tram.html({
  header: require('../elements/header'),
  Student: require('../elements/Student'),
  ProgressBar: require('../elements/ProgressBar')
})

module.exports = ({students}, {addStudent}) => {

  const inputHandler = ({target, keyCode}) => {
    if (keyCode == 13) {
      addStudent({
        id: students.length,
        name: target.value,
        curriculum: curriculum
      })
    }
  }
  const studentsDOM = students.map((student) => {
    return html`<Student studentName=${student.name} studentCurriculum=${student.curriculum}></Student>`
  })
  return html`
    <div>
      <header></header>
      <input onkeyup=${inputHandler} />
      ${studentsDOM}
    </div>
  `
}
