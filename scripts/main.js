document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("links-container");
  container.innerHTML = "";

  const keys = ["linkedin", "github", "portfolio", "other"];

  keys.forEach((key) => {
    const value = localStorage.getItem(key);
    if (!value) return;

    const row = document.createElement("div");
    row.className = "w-full border rounded pl-4 pr-0 flex justify-between items-stretch text-sm h-12 mb-2";

    const label = document.createElement("p");
    label.className = "self-center font-medium";
    label.innerText = key.charAt(0).toUpperCase() + key.slice(1);

    const btnContainer = document.createElement("div");
    btnContainer.className = "flex h-full";

    const editBtn = document.createElement("button");
    editBtn.className = "border border-b-0 border-t-0 px-4 h-full hover:bg-gray-100";
    editBtn.innerHTML = '<img src="assets/icons/edit.png" alt="edit" class="h-6 w-6" />';
    editBtn.addEventListener("click", (e) => {
      e.preventDefault();
      localStorage.setItem("tempKey", key);
      localStorage.setItem("tempValue", value);
      window.location.href = "/edit.html";
    });

    const copyBtn = document.createElement("button");
    copyBtn.className = "px-4 h-full rounded-r hover:bg-gray-100";
    copyBtn.innerHTML = '<img src="assets/icons/copy_content.png" alt="copy" class="h-6 w-6" />';
    copyBtn.addEventListener("click", (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(value).then(() => {
        alert("Copied: " + value);
      });
    });

    btnContainer.appendChild(editBtn);
    btnContainer.appendChild(copyBtn);

    row.appendChild(label);
    row.appendChild(btnContainer);

    container.appendChild(row);
  });
});