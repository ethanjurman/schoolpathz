const Tram = require('tram-one')
const html = Tram.html({
  CourseCheckBox: require('./CourseCheckBox'),
  SubjectCourseOutline: require('./SubjectCourseOutline')
})

module.exports = ({studentName, studentCurriculum}) => {
  const coursesDOM = Object.keys(studentCurriculum).map((subject) => {
    const courses = studentCurriculum[subject].map((course) => {
      return html`
        <CourseCheckBox
          courseName=${course.name}
          courseCompleted=${course.completed}>
        </CourseCheckBox>
      `
    })
    return html`
      <SubjectCourseOutline
        subjectName=${subject}
        subjectCourses=${courses}>
      </SubjectCourseOutline
    `
  })
  return html`
    <div>
      <h3> ${studentName} </h3>
      ${coursesDOM}
      <hr />
    </div>
  `
}
