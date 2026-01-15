let baseUrl = "https://placementstracker-4.onrender.com/api/";

let getStudents = async ()=> {
  try {
    const res = await fetch("https://placementstracker-4.onrender.com/api/students");
    return await res.json();
  } catch (error) {
    console.error("API error:", error);
    return [];
  }
}

   console.log(getStudents());
let getColleges =async () => {
     return fetch("https://placementstracker-4.onrender.com/api/colleges")
     .then((res)=>{
        return res.json()
    })
};


let getCompanies =async () => {
     return fetch("https://placementstracker-4.onrender.com/api/companies")
     .then((res)=>{
        return res.json()
    })
};
console.log(getCompanies());


let getJobRoles =async () => {
     return fetch("https://placementstracker-4.onrender.com/api/job-roles")
     .then((res)=>{
        return res.json()
    })
};

const createJobRoleAPI = async (title) => {
  try {
    const res = await fetch("https://placementstracker-4.onrender.com/api/job-roles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accept: "*/*"
      },
      body: JSON.stringify({
        title: title
      })
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(err);
    }

    return await res.json();
  } catch (error) {
    console.error("Create Job Role API Error:", error);
    throw error;
  }
};













