const Tram = require('tram-one')
const html = Tram.html()

module.exports = ({courseName, courseCompleted}) => {
  const checked = courseCompleted != 'undefined' ? 'checked' : ''
  return html`
    <div>
      <input type="checkbox" ${checked} /> ${courseName}
    </div>
  `
}
