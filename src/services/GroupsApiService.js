const BASE_URL = import.meta.env.VITE_API_URL;

export async function getGroups() {
  try {
    const response = await fetch(`${BASE_URL}groups/`);
    if (!response.ok) {
      throw new Error("server error - obtener los grupos");
    }
    const data = await response.json();
    console.log("🚀 ~ getGroups ~ data:", data);
    return data;
  } catch (error) {
    console.error("Error en getGroups:", error);
    throw error;
  }
}
