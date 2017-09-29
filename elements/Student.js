const Tram = require('tram-one')
const html = Tram.html()

module.exports = ({studentName}) => {
  return html`
    <div>
      ${studentName}
      3 science credits with 1 regents exam
      4 english credits with the ELA 3 regents exam
      3 math credits with 2 regents exams
      4 social studies credits with 3 regents exams
      2 gym credits
      1 art credit
      1 language credit and passed regents exam
      <hr />
    </div>
  `
}
