document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-image");
  const zoomContainer = document.querySelector(".zoom-container");
  const zoomableImg = document.querySelector(".zoomable-image");
  const closeBtn = document.querySelector(".close");
  
  const ZOOM_LEVEL = 2;
  
  // Add a small delay to prevent flickering
  let zoomTimeout;
  let isZoomed = false;
  
  // Define a boundary threshold (in pixels) to create a buffer zone
  const BOUNDARY_THRESHOLD = 10;

  // Mouse hover zoom effect
  zoomContainer.addEventListener("mousemove", function (e) {
    // Clear any pending timeouts to prevent conflicts
    if (zoomTimeout) clearTimeout(zoomTimeout);
    
    const rect = zoomContainer.getBoundingClientRect();
    
    // Check if mouse is within the safe zone (not too close to edges)
    const isInsideSafeZone = 
      e.clientX > rect.left + BOUNDARY_THRESHOLD && 
      e.clientX < rect.right - BOUNDARY_THRESHOLD && 
      e.clientY > rect.top + BOUNDARY_THRESHOLD && 
      e.clientY < rect.bottom - BOUNDARY_THRESHOLD;
    
    if (isInsideSafeZone) {
      // Calculate mouse position as percentage of container
      const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
      const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
      
      // Apply zoom with mouse position as transform origin
      zoomableImg.style.transformOrigin = `${xPercent}% ${yPercent}%`;
      zoomableImg.style.transform = `scale(${ZOOM_LEVEL})`;
      isZoomed = true;
    } else if (isZoomed) {
      // If we're near the edge and currently zoomed, start the exit timeout
      zoomTimeout = setTimeout(() => {
        zoomableImg.style.transformOrigin = "center center";
        zoomableImg.style.transform = "scale(1)";
        isZoomed = false;
      }, 100);
    }
  });

  // Reset zoom when mouse leaves container
  zoomContainer.addEventListener("mouseleave", function () {
    // Set a timeout to prevent flickering
    zoomTimeout = setTimeout(() => {
      zoomableImg.style.transformOrigin = "center center";
      zoomableImg.style.transform = "scale(1)";
      isZoomed = false;
    }, 100);
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