// populate the screen with lists
document.addEventListener('DOMContentLoaded', () =>{
  console.log("main loaded");

  
  const t1 = localStorage.getItem('linkedin');
  const t2 = localStorage.getItem('github');
  const t3 = localStorage.getItem('portfolio');
  const t4 = localStorage.getItem('other');
  

  
});

// to copy
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

// to edit
document.getElementById('btn-edit').addEventListener('click', (e) => {
  e.preventDefault();
  const key = document.getElementById('target').innerText;
  const value = localStorage.getItem(key);
  localStorage.setItem("temp", value);
})