const API_URL = `http://192.168.137.8:5000`;

export async function toggleLockAPI() {
  try {
    console.log("sending togglelock to rpi");
    const response = await fetch(`${API_URL}/togglelock`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP Error. Status:, ${response.status}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    throw error;
  }
}
