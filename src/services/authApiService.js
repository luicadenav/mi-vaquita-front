const BASE_URL = import.meta.env.VITE_API_URL;

export async function login(body) {
  const response = await fetch(`${BASE_URL}auth/login`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}

export async function createUser(body) {
  const response = await fetch(`${BASE_URL}/users/`, {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await response.json();
}
