const API_URL = `http://${process.env.DB_URI}:5000`;

export async function toggleLockAPI() {
  try {
    console.log("fetching data from rpi");
    const response = await fetch(`${API_URL}/toggle-lock`, {
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

export async function initalState() {
  try {
    console.log("fetching data from rpi");
    const response = await fetch(`${API_URL}/initial-state`, {
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
