export default function getStudentsBylocation(students, city) {
    return students.filter((student) => student.location == city);
}