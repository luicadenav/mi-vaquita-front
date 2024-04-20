const BASE_URL = ' http://localhost:3000/';

export async function getGroups() {
  try {
    const response = await fetch(`${BASE_URL}groups/`);
    if (!response.ok) {
      throw new Error('server error - obtener los grupos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error en getGroups:', error);
    throw error;
  }
}
