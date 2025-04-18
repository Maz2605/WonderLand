//Cuộn
let prevScrollPos = window.pageYOffset;
const menu = document.getElementById("mainMenu");

window.addEventListener("scroll", function () {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Cuộn lên → hiện menu
    menu.style.top = "0";
  } else {
    // Cuộn xuống → ẩn menu
    menu.style.top = "-70px"; // cao hơn chiều cao menu một chút
  }

  prevScrollPos = currentScrollPos;
});

