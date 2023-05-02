export async function getResults() {
  return await fetch(
    "https://shyftlabs-dev-test-api.onrender.com/api/results"
  ).then((res) => res.json());
}

export async function createResult(body) {
  let options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  };
  return await fetch(
    "https://shyftlabs-dev-test-api.onrender.com/api/results",
    options
  ).then((res) => res.json());
}
