let index = async()=>{
    let students = await getStudents();
    let colleges = await getColleges();
    let companies = await getCompanies();
    let jobroles = await getJobRoles();

    // console.log(students.length);

    // let studentsbox = document.getElementById("students");
    // let collegesbox = document.getElementById("colleges");

    // studentsbox.innerHTML = `<h1>Total students ${students.length}</h1>`;
    // collegesbox.innerHTML = `<h1>Total Colleges ${colleges.length}</h1>`;

    // let companybox = document.getElementById("companies");
    // let jobrolebox = document.getElementById("jobs");

    // companybox.innerHTML = `<h1>Total Companies ${companies.length}</h1>`;
    // jobrolebox.innerHTML = `<h1>Total Job Roles ${jobroles.length}</h1>`;
    // console.log(jobroles);

document.getElementById("colleges").innerHTML = `
  <h2>Colleges</h2>
  <p>Registered Colleges</p>
  <span>10</span>
`;

document.getElementById("companies").innerHTML = `
  <h2>Companies</h2>
  <p>Recruiting Partners</p>
  <span>8</span>
`;

document.getElementById("students").innerHTML = `
  <h2>Students</h2>
  <p>Total Enrolled Students</p>
  <span>120</span>
`;

document.getElementById("jobs").innerHTML = `
  <h2>Job Roles</h2>
  <p>Available Positions</p>
  <span>4</span>
`;

// Card navigation from Home page
document.getElementById("colleges").addEventListener("click", () => {
    window.location.href = "./college.html";
});

document.getElementById("companies").addEventListener("click", () => {
    window.location.href = "./company.html";
});

document.getElementById("students").addEventListener("click", () => {
    window.location.href = "./students.html";
});

document.getElementById("jobs").addEventListener("click", () => {
    window.location.href = "./jobRole.html";
});

};

index();


