export async function getPrediction() {
    try {
        const data = await ();

        const response = data.json();

        return response;
    } catch (error) {
        console.log("Error fetching data from GPT:", error)
    }
  return 0;
}
