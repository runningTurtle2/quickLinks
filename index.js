document.getElementById("btn-save").addEventListener("click", () => {
  const platform = document.getElementById("plug").value;
  const url = document.getElementById("link").value;

  alert(`${platform}: ${url}`);
});
