module.exports = {
  init: () => [],
  addStudent: (students, student) => students.concat(student),
  updateStudent: (students, updatedStudent) => {
    students.map((student) => {
      if (student.id == updatedStudent.id) {
        return updatedStudent
      }
      return student
    })
  }
}
