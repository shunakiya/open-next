const API_URL = `http://192.168.137.196:5000`;

export async function toggleLockAPI() {
  try {
    console.log("sending togglelock to rpi");

    const startTime = performance.now();

    const response = await fetch(`${API_URL}/togglelock`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`HTTP Error. Status:, ${response.status}`);
    }

    const data = await response.json();

    const endTime = performance.now();
    const latency = endTime - startTime;

    console.log(`Request completed in ${latency.toFixed(2)}ms`);

    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    return -1;
  }
}
