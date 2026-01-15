let companyContainer = document.getElementById("companies");
let allCompanies = [];

/* ============ FETCH COMPANIES ============ */
async function callCompaniesFromAPI() {
  try {
    const data = await getCompanies();

    if (!Array.isArray(data)) {
      companyContainer.innerHTML = "<h3>No companies found</h3>";
      return;
    }

    allCompanies = data;
    displayCompanies(allCompanies);

  } catch (err) {
    console.error("UI render error:", err);
    companyContainer.innerHTML = "<h3>Failed to load companies</h3>";
  }
}


callCompaniesFromAPI();

/* ============ DISPLAY COMPANIES ============ */
function displayCompanies(companies = []) {
  companyContainer.innerHTML = companies.map(c => {
    // 🔥 Normalize fields safely
    const name = c.name || c.company_name || "Unknown Company";
    const id = c.company_id || c.companie_id || "N/A";
    const industry = c.industry || "General";

    return `
      <div class="company-card">
        <div class="logo">${name.charAt(0)}</div>
        <h3>${name}</h3>
        <p><b>ID:</b> ${id}</p>
        <span class="badge ${
          industry.includes("IT") ? "it" : "product"
        }">${industry}</span>
      </div>
    `;
  }).join("");
}

/* ============ ADD COMPANY BUTTON ============ */
document.getElementById("addCompany").onclick = () => {
  window.location.href = "../HTML/addCompany.html";
};
