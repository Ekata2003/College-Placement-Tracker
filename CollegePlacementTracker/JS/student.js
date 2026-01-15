// let studentsContainer = document.getElementById("students-container");
// let allstudents;

// let callStudentsFromAPI = async()=>{
//     allstudents = await getStudents();
//     // displayStudents(allstudents);
// }
// callStudentsFromAPI();

// let displayStudents = async(students)=>{
// studentsContainer.innerHTML= students.map((ele)=>
//     `<div id="student-card">
//     <img src ="${ele.personal_info.profile_image}">
//     <h4>Name:${ele.personal_info.full_name}</h4>
//     <h4>CollegeID:${ele.academic_info.college_id}</h4>
//     <h5>Placement Status:${ele.placement_status}</h5>
//     <button id="edit" onclick="editStudent('${ele.student_id}')">Edit</button>
//     <button id="delete" onclick ="deleteStudent('${ele.student_id}')">Delete</button>
//     </div>`).join("")
// };

// let deleteStudent = async (id)=>{
    
//     let confirmDelete = confirm("Are You sure to delete?");
//     if(!confirmDelete) return
    
//     await fetch(`https://placementstracker-4.onrender.com/api/students/${id}`,{method:"DELETE",});
//     console.log("deleteStudent", id);   
//     callStudentsFromAPI();
// };

// let editStudent= (id)=>{
//     console.log("editStudent",id);
//     window.location.href=`../Html/editStudent.html?id=${id}`
// }

// displayStudents(allstudents);

// let placedStudents = document.getElementById("placedStudents");

// placedStudents.addEventListener("click",()=>{
//     let filterPlaced = allstudents.filter((ele)=>{
//         return ele.placement_status==="Placed";
//     });
//     console.log(filterPlaced);
//     displayStudents(filterPlaced);
// });


// let notPlacedStudents = document.getElementById("notPlacedStudents");

// notPlacedStudents.addEventListener("click",()=>{
//     let filterNotPlaced = allstudents.filter((ele)=>{
//         return ele.placement_status==="Not Placed";
//     });
//     console.log(notPlacedStudents);
//     displayStudents(filterNotPlaced);
    
// });

// let newStudent = document.getElementById("newStudent");

// newStudent.addEventListener("click",()=>{
//     window.location.href = "../HTML/addStudent.html";
// })


let studentsContainer = document.getElementById("students-container");
let allstudents = [];

/* ================= FETCH STUDENTS ================= */
let callStudentsFromAPI = async () => {
  try {
    const data = await getStudents();

    // SAFETY CHECK
    if (!Array.isArray(data)) {
      console.error("Students API did not return an array");
      studentsContainer.innerHTML = "<h3>No students data available</h3>";
      return;
    }

    allstudents = data;
    displayStudents(allstudents);

  } catch (error) {
    console.error("Error fetching students:", error);
    studentsContainer.innerHTML = "<h3>Failed to load students</h3>";
  }
};

callStudentsFromAPI();

/* ================= DISPLAY STUDENTS ================= */
let displayStudents = (students = []) => {

  // SAFETY CHECK
  if (!Array.isArray(students)) {
    console.error("displayStudents received invalid data");
    return;
  }

  if (students.length === 0) {
    studentsContainer.innerHTML = "<h3>No students found</h3>";
    return;
  }

  studentsContainer.innerHTML = students.map((ele) => `
    <div class="student-card">
      <img src="${ele.personal_info?.profile_image || ''}" alt="profile">
      <h4>Name: ${ele.personal_info?.full_name || "N/A"}</h4>
      <h4>College ID: ${ele.academic_info?.college_id || "N/A"}</h4>
      <h5>Status: ${ele.placement_status}</h5>

      <button onclick="editStudent('${ele.student_id}')">Edit</button>
      <button onclick="deleteStudent('${ele.student_id}')">Delete</button>
    </div>
  `).join("");
};

/* ================= DELETE STUDENT ================= */
async function deleteStudent(id) {
  let confirmDelete = confirm("Are you sure you want to delete?");
  if (!confirmDelete) return;

  await fetch(`https://placementstracker-4.onrender.com/api/students/${id}`, {
    method: "DELETE"
  });

  callStudentsFromAPI();
}

/* ================= EDIT STUDENT ================= */
function editStudent(id) {
  window.location.href = `../HTML/editStudent.html?id=${id}`;
}

/* ================= FILTER BUTTONS ================= */
document.getElementById("placedStudents").onclick = () => {
  displayStudents(allstudents.filter(s => s.placement_status === "Placed"));
};

document.getElementById("notPlacedStudents").onclick = () => {
  displayStudents(allstudents.filter(s => s.placement_status === "Not Placed"));
};

document.getElementById("newStudent").onclick = () => {
  window.location.href = "../HTML/addStudent.html";
};
