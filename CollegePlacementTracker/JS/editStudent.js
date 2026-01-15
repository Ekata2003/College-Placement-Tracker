let UrlId = new URLSearchParams(window.location.search)
console.log(UrlId);

let id = UrlId.get("id");
console.log(UrlId.get("id"));

let loadStudent = async ()=>{
    let data = fetch(`https://placementstracker-4.onrender.com/api/students/${id}`);

    let student = (await data).json();
    console.log(student);
   
   studentName.value = student.personal_info.full_name;
   studentGender.value = student.personal_info.gender;
   dob.value = student.personal_info.date_of_birth;
   profileimg.value = student.personal_info.profile_image;
   placementStatus.value = student.personal_info.placement_status;
   collegeId.value = student.academic_info.college_id;
   department.value = student.academic_info.department;
   degree.value = student.academic_info.degree;
   graduation.value = student.academic_info.graduation_year;
   cgpa.value = student.academic_info.cgpa;
   backlogs.value = student.academic_info.backlogs;
   programing.value = student.skills.programming;
   database.value = student.skills.databases;
   tools.value = student.skills.tools;

};

loadStudent();




let studentForm = document.getElementById("studentform");
// console.log(studentForm);

studentForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  //  console.log("HELLO");
  // console.log(studentName.value);
  // console.log(studentGender.value);
  // console.log(programing.value.split(","));
  let student = {
    personal_info: {
      full_name: studentName.value,
      gender: studentGender.value,
      date_of_birth: dob.value,
      profile_image: profileimg.value,
    },
    academic_info: {
      college_id: collegeId.value,
      department: department.value,
      degree: degree.value,
      graduation_year: graduation.value,
      cgpa: cgpa.value,
      backlogs: backlogs.value,
    },
    skills: {
      programming: programing.value.split(","),
      databases: database.value.split(","),
      tools: tools.value.split(","),
    },
    placement_status: placementStatus.value,
  };
  console.log(student);

  await fetch(`https://placementstracker-4.onrender.com/api/students/${id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(student),
  });

  alert("Student Upated Successfuly")

});


