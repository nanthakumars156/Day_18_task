const imageDisplay = document.getElementById("img");
const fetchButton = document.getElementById("fetch-img");

fetchButton.addEventListener("click", async () => {
  fetchButton.textContent = "Please wait...";
  fetchButton.disabled = true; // Disable the button
  fetchButton.classList.add("disabled-button");
  await fetchDogImg();
  setTimeout(() => {
    fetchButton.textContent = "Fetch another image!";
    fetchButton.disabled = false; // Enable the button
    fetchButton.classList.remove("disabled-button");
  }, 3000);
});

async function fetchDogImg() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await response.json();
  const randomImage = data.message;
  imageDisplay.src = randomImage;
}