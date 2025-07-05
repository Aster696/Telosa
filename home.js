document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("mainContent");
    const toggleBtn = document.getElementById("toggleSidebar");
  
    toggleBtn.addEventListener("click", function () {
      sidebar.classList.toggle("hide-sidebar");
      mainContent.classList.toggle("full-width");
    });
  });
  