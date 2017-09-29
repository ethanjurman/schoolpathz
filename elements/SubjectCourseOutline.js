const Tram = require('tram-one')
const html = Tram.html({
  ProgressBar: require('./ProgressBar')
})

const subjectNameStyle = `
  text-weight: bold;
  width: 300px;
  display: inline-block;
  text-transform: uppercase;
`

module.exports = ({subjectName, subjectCourses}) => {
  return html`
    <details>
      <summary>
        <span style=${subjectNameStyle}>
          ${subjectName}
          <span style="padding: 4px; float: right;"> <ProgressBar width="100"> </ProgressBar> </span>
        </span>
      </summary>
      ${subjectCourses}
    </details>
  `
}
