const BASE_URL = import.meta.env.VITE_API_URL;
console.log("🚀 ~ BASE_URL:", BASE_URL);

export async function login(body) {
  try {
    const response = await fetch(`${BASE_URL}auth/login`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("server error - login");
    }
    const data = await response.json();
    console.log("🚀 ~  ~ data:", data);

    return data;
  } catch (error) {
    console.error("Error en login:", error);
    throw error;
  }
}
