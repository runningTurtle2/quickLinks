document.getElementById("btn-copy").addEventListener("click", (e) => {
  e.preventDefault();
  const text = document.getElementById("target").innerText;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("copied " + text);
    })
    .catch((err) => {
      alert("Failed to copy: ", err);
    });
});
