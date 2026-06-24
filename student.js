let schoolData = `{
 "classA": [
  {"name": "Amara", "CSC101": 72, "CSC102": 55, "CSC103": 68},
  {"name": "Chidi", "CSC101": 40, "CSC102": 48, "CSC103": 35},
  {"name": "Ngozi", "CSC101": 85, "CSC102": 90, "CSC103": 78},
  {"name": "Emeka", "CSC101": 60, "CSC102": 52, "CSC103": 44}],

 "classB": [
  {"name": "Fatima", "CSC101": 91, "CSC102": 88, "CSC103": 95},
  {"name": "Chidi", "CSC101": 30, "CSC102": 45, "CSC103": 50},
  {"name": "Ngozi", "CSC101": 77, "CSC102": 63, "CSC103": 70},
  {"name": "Emeka", "CSC101": 55, "CSC102": 49, "CSC103": 58}
 ]
}`;

const data = JSON.parse(schoolData);

const table = document.getElementById("resultTable");

function displayStudents(students) {
  students.forEach(student => {

    const average =  (student.CSC101 + student.CSC102 + student.CSC103) / 3;
    const status = average >= 50 ? "pass" : "fail";

    table.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${average.toFixed(2)}</td>
            <td>${status}</td>
        </tr>
    `;
    
  });
}

displayStudents(data.classA);
displayStudents(data.classB);