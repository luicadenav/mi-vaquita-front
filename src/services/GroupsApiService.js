const BASE_URL = import.meta.env.VITE_API_URL;

export async function getGroups() {
  const response = await fetch(`${BASE_URL}groups/`, {
    headers: {
      authorization: `bearer ${sessionStorage.getItem("token")}`,
    },
  });
  return await response.json();
}

export async function createGroup(body) {
  const response = await fetch(`${BASE_URL}groups/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${sessionStorage.getItem("token")}`,
    },
    body: JSON.stringify(body),
  });
  return await response.json();
}
