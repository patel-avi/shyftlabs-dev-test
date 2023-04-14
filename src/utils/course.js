export async function getCourses() {
  return await fetch("/api/courses").then((res) => res.json());
}

export async function createCourse(body) {
  let options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  return await fetch("/api", options).then((res) => res.json());
}
