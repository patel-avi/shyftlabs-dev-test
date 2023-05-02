export async function getCourses() {
  return await fetch(
    "https://shyftlabs-dev-test-api.onrender.com/api/courses"
  ).then((res) => res.json());
}

export async function createCourse(body) {
  let options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  return await fetch(
    "/https://shyftlabs-dev-test-api.onrender.comapi/courses",
    options
  ).then((res) => res.json());
}
