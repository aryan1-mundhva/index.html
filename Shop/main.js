function searchItems() {
  let input = document.getElementById("searchBox");
  let filter = input.value.toLowerCase();
  let ul = document.getElementById("itemList");
  let li = ul.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    let text = li[i].textContent || li[i].innerText;
    li[i].style.display = text.toLowerCase().includes(filter) ? "" : "none";
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const input = document.getElementById("searchBox").value.toLowerCase();
  const container = document.getElementById("imageContainer");

  container.innerHTML = "";

  let targetPage = "";
  let images = [];

  if (input.includes("men")) {
    targetPage = "men.html";
    
  } else if (input.includes("ladies")) {
    targetPage = "ladies.html";

  } else if (input.includes("kid")) {
    targetPage = "kids.html";
    
  } else {
    alert("Item not found!");
    return;
  }

  images.forEach((src) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Item Image";
    img.style.width = "200px";
    img.style.margin = "10px";
    container.appendChild(img);
  });

  window.open(targetPage, "_blank");
}
