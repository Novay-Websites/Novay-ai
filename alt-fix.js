document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll("img");
  images.forEach((img, index) => {
    if (!img.hasAttribute("alt") || img.getAttribute("alt").trim() === "") {
      img.setAttribute("alt", "Novay AI image " + (index + 1));
    }
  });
});
