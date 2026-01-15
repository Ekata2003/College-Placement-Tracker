// let container = document.getElementById("jobrole-container");
// let modal = document.getElementById("jobModal");
// let addBtn = document.getElementById("addNewJobRole");
// let closeBtn = document.querySelector(".close");
// let saveBtn = document.getElementById("saveRole");

// let roleIdInput = document.getElementById("roleId");
// let roleTitleInput = document.getElementById("roleTitle");

// let allRoles = [];

// // Load job roles
// async function loadJobRoles() {
//   allRoles = await getJobRoles();
//   renderRoles(allRoles);
// }

// // Render cards
// function renderRoles(roles) {
//   container.innerHTML = roles.map(r => `
//     <div class="card">
//       <h3>${r.title}</h3>
//       <p><strong>ID:</strong> ${r.role_id}</p>
//       <button class="danger" onclick="removeRole('${r.role_id}')">Delete</button>
//     </div>
//   `).join("");
// }

// // Delete role
// async function removeRole(id) {
//   if (!confirm("Delete this job role?")) return;
//   await deleteJobRole(id);
//   loadJobRoles();
// }

// // Modal open/close
// addBtn.onclick = () => modal.classList.remove("hidden");
// closeBtn.onclick = () => modal.classList.add("hidden");

// // Save role
// saveBtn.onclick = async () => {
//   let data = {
//     role_id: roleIdInput.value,
//     title: roleTitleInput.value
//   };

//   if (!data.role_id || !data.title) {
//     alert("All fields required");
//     return;
//   }

//   await createJobRole(data);
//   modal.classList.add("hidden");
//   roleIdInput.value = "";
//   roleTitleInput.value = "";
//   loadJobRoles();
// };

// loadJobRoles();

// document.addEventListener("DOMContentLoaded", () => {

//   let container = document.getElementById("jobrole-container");

//   async function loadJobRoles() {
//     try {
//       const roles = await getJobRoles();
//       renderRoles(roles);
//     } catch (err) {
//       console.error("Error loading job roles:", err);
//     }
//   }

//   function renderRoles(roles) {
//     container.innerHTML = roles.map(role => `
//       <div class="job-card">
//         <h3>${role.title}</h3>
//         <p><strong>ID:</strong> ${role.role_id}</p>
//       </div>
//     `).join("");
//   }

//   loadJobRoles();
// });


let jobroleContainer = document.getElementById("jobrole-container");
let allJobroles = [];

/* ================= FETCH JOB ROLES ================= */
async function callJobRolesFromAPI() {
  try {
    const data = await getJobRoles();

    if (!Array.isArray(data)) {
      jobroleContainer.innerHTML = "<h3>No job roles found</h3>";
      return;
    }

    allJobroles = data;
    displayJobRoles(allJobroles);

  } catch (error) {
    console.error("Job role API error:", error);
    jobroleContainer.innerHTML = "<h3>Failed to load job roles</h3>";
  }
}

/* ================= DISPLAY JOB ROLES ================= */
function displayJobRoles(roles = []) {

  if (!Array.isArray(roles) || roles.length === 0) {
    jobroleContainer.innerHTML = "<h3>No job roles available</h3>";
    return;
  }

  jobroleContainer.innerHTML = roles.map(role => `
    <div class="jobrole-card">
      <h3>${role.title}</h3>
      <p>Role ID: ${role.role_id}</p>
    </div>
  `).join("");
}

/* ================= BUTTONS ================= */
document.getElementById("addNewJobRole")?.addEventListener("click", () => {
  alert("Add Job Role API not implemented yet");
});

document.getElementById("removeJobRole")?.addEventListener("click", () => {
  jobroleContainer.innerHTML = "<h3>Remove feature coming soon</h3>";
});

/* ================= INIT ================= */
callJobRolesFromAPI();
const modal = document.getElementById("jobRoleModal");
const addBtn = document.getElementById("addJobRoleBtn");

addBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

const closeModal = () => {
  modal.style.display = "none";
};

// function createJobRole() {
//     const roleId = document.getElementById('roleId').value.trim();
//     const roleTitle = document.getElementById('roleTitle').value.trim();

//     if (!roleId || !roleTitle) {
//         alert("Please enter both Role ID and Job Title!");
//         return;
//     }

//     // Example: Add to your job roles container
//     const container = document.getElementById('jobrole-container');

//     const card = document.createElement('div');
//     card.className = 'job-card';
//     card.innerHTML = `
//         <h3>${roleTitle}</h3>
//         <p>ID: ${roleId}</p>
//     `;

//     container.appendChild(card);

//     // Clear inputs
//     document.getElementById('roleId').value = '';
//     document.getElementById('roleTitle').value = '';

//     // Close modal
//     closeModal();

//     alert("Job Role added successfully!");
// }


async function createJobRole() {
  const input = document.getElementById("jobRoleInput");
  const title = input.value.trim();

  if (!title) {
    alert("Job role title required");
    return;
  }

  try {
    await createJobRoleAPI(title);
    alert("Job role created successfully");
    input.value = "";
    loadJobRoles(); // reload cards
  } catch (err) {
    alert("Failed to create job role");
  }
}


const loadJobRoles = async () => {
  const jobRoles = await getJobRoles();

  const container = document.getElementById("jobrole-container");
  container.innerHTML = jobRoles.map(role => `
    <div class="job-card">
      <h3>${role.title}</h3>
      <p>ID: ${role.role_id}</p>
    </div>
  `).join("");
};

loadJobRoles();


const addJobRoleBtn = document.getElementById('addJobRoleBtn');
const jobRoleModal = document.getElementById('jobRoleModal');

addJobRoleBtn.addEventListener('click', () => {
    jobRoleModal.style.display = 'flex';
});

