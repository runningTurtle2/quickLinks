document.addEventListener("DOMContentLoaded", () => {
  console.log("edit loaded");

  const key = localStorage.getItem("tempKey");
  const value = localStorage.getItem("tempValue");

  const label = document.getElementById("edit-label");
  const input = document.getElementById("edit-url");

  if(key){
    label.innerText = "Editing: " + key.charAt(0).toUpperCase() + key.slice(1);
  }
  if(value){
    input.value = value;
  }

  document.getElementById("edit-form").addEventListener("submit", (e) => {
    e.preventDefault();

    const newUrl = input.value.trim();
    if (!newUrl) {
      alert("Please enter a valid URL.");
      return;
    }
    localStorage.setItem(key, newUrl);

    localStorage.removeItem("tempKey");
    localStorage.removeItem("tempValue");

    window.location.href = "/main.html";
  });
});

// test