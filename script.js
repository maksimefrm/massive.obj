let studentName = document.getElementById("name");
let studentSurname = document.getElementById("surname");
let studentCourse = document.getElementById("course");

let addStudent = document.querySelector(".addList");
let clearStudents = document.querySelector(".clearList");
let studentList = document.querySelector(".students"); // Corrected selector

let studentArray = [];

addStudent.addEventListener("click", student);

function student() {
    let studentNameValue = studentName.value;
    let studentSurnameValue = studentSurname.value;
    let studentCourseValue = studentCourse.value;
    
    if(studentNameValue !== "" && studentSurnameValue !== "" && studentCourseValue !== "") {
        let obj = {
            studentName: studentNameValue,
            studentSurname: studentSurnameValue,
            studentCourse: studentCourseValue,
        };
        studentArray.push(obj);
    } else {
        alert("Заполните все поля");
    }

    updateStudentList(); // Call function to update the student list

    studentName.value = "";
    studentSurname.value = "";
    studentCourse.value = "";
}

function updateStudentList() {
    let studentWithElem = "";
    studentArray.forEach((value, i) => {
        studentWithElem += `<div class="student">
                            Имя: ${value.studentName}; Фамилия: ${value.studentSurname}; № поток: ${value.studentCourse}
                            <button class="delete" onclick="btnClick(${i})">Удалить</button> </div>`;
    });
    studentList.innerHTML = studentWithElem;
}

clearStudents.addEventListener("click", clearList);

function clearList() {
    studentList.innerHTML = "";
    studentArray = [];
}

function btnClick(index) {
    studentArray.splice(index, 1); // Remove item from array
    updateStudentList(); // Update the displayed list
}
