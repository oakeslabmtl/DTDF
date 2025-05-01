document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const zoomContainer = document.querySelector(".zoom-container");
  const zoomableImg = document.querySelector(".zoomable-image");
  const closeBtn = document.querySelector(".close");
  
  // Magnification factor
  const ZOOM_LEVEL = 2;

  // Mouse hover zoom effect
  zoomContainer.addEventListener("mousemove", function (e) {
    const rect = zoomContainer.getBoundingClientRect();
    // Calculate mouse position as percentage of container
    const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
    
    // Apply zoom with mouse position as transform origin
    zoomableImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
    zoomableImg.style.transform = `scale(${ZOOM_LEVEL})`;
  });

  // Reset zoom when mouse leaves container
  zoomContainer.addEventListener("mouseleave", function () {
    zoomableImg.style.transformOrigin = "center center";
    zoomableImg.style.transform = "scale(1)";
  });

  // Open modal when the image is clicked
  zoomableImg.addEventListener("click", function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
  });

  // Close modal when the close button is clicked
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});