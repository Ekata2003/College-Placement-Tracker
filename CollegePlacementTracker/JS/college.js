let collegeContainer = document.getElementById("college-container");
let allColleges = [];

// FETCH & DISPLAY COLLEGES
async function callCollegesFromAPI() {
  try {
    allColleges = await getColleges(); // wait for data
    displayColleges(allColleges);
  } catch (error) {
    console.error("Error fetching colleges:", error);
  }
}

// DISPLAY COLLEGES
function displayColleges(colleges) {
  collegeContainer.innerHTML = colleges.map((ele) => `
    <div id="college-card">
      <h4>College ID: ${ele.college_id}</h4>
      <h4>Name: ${ele.name}</h4>
      <h4>Type: ${ele.type}</h4>
      <h5>Affiliated To: ${ele.affiliated_to}</h5>
    </div>
  `).join("");
}

// REMOVE COLLEGE (FILTER DEMO)
let removeCollege = document.getElementById("removeCollege");
removeCollege.addEventListener("click", () => {
  let filtered = allColleges.filter(col => col.type === "Government");
  displayColleges(filtered);
});

// ADD NEW COLLEGE
let newCollege = document.getElementById("newCollege");
newCollege.addEventListener("click", () => {
  window.location.href = "../HTML/addCollege.html";
});

// INITIAL CALL
callCollegesFromAPI();
