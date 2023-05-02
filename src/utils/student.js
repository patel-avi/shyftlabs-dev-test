export async function getStudents() {
  return await fetch(
    "https://shyftlabs-dev-test-api.onrender.com/api/students"
  ).then((res) => res.json());
}

export async function createStudent(body) {
  let options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  return await fetch(
    "https://shyftlabs-dev-test-api.onrender.com/api/students",
    options
  ).then((res) => res.json());
}
