async function generateImage() {
  const prompt = document.getElementById("prompt").value;
  const output = document.getElementById("output");
  output.innerHTML = "<p>Generating image, please wait...</p>";

  try {
    const response = await fetch("https://mannubairos26-ghibli-ai-generator.hf.space/run/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [prompt]
      })
    });

    const result = await response.json();
    const imageUrl = result.data[0];
    output.innerHTML = `<img src="${imageUrl}" alt="Generated Ghibli Image">`;
  } catch (error) {
    output.innerHTML = "<p>Something went wrong. Please try again later.</p>";
    console.error("Error:", error);
  }
}