const imageDisplay = document.getElementById("img");
const fetchButton = document.getElementById("fetch-img");

fetchButton.addEventListener("click", async () => {
  fetchButton.textContent = "Please wait...";
  fetchButton.disabled = true; // Disable the button
  fetchButton.classList.add("disabled-button");
  await fetchFoodImg();
  setTimeout(() => {
    fetchButton.textContent = "Fetch another image!";
    fetchButton.disabled = false; // Enable the button
    fetchButton.classList.remove("disabled-button");
  }, 3000);
});

async function fetchFoodImg() {
  const response = await fetch("https://foodish-api.com/api/");
  const data = await response.json();
  const randomImage = data.image;
  imageDisplay.src = randomImage;
}