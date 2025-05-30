    const slider = document.getElementById('slider');

    function scrollSlider(direction) {
      const cardWidth = document.querySelector('.card').offsetWidth + 24;
      slider.scrollLeft += direction * cardWidth;
    }

    // Mouse drag functionality
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('pointerdown', (e) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.setPointerCapture(e.pointerId);
    });

    slider.addEventListener('pointerup', (e) => {
      isDown = false;
      slider.releasePointerCapture(e.pointerId);
    });

    slider.addEventListener('pointermove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.5;
      slider.scrollLeft = scrollLeft - walk;
    });




    // prrooooooooooooooooooooooooooooooooooooooo////////////////////////////////////


        const itemsPerPage = 8; // عدد الكارتات في الصفحة
    const productsContainer = document.getElementById("products");
    const paginationContainer = document.getElementById("pagination");
    const allCarts = Array.from(productsContainer.querySelectorAll(".cart"));
    let currentPage = 1;

    function showPage(page) {
      const start = (page - 1) * itemsPerPage;
      const end = start + itemsPerPage;

      allCarts.forEach((el, index) => {
        el.classList.toggle("hidden", !(index >= start && index < end));
      });
    }

    function renderPagination() {
      const totalPages = Math.ceil(allCarts.length / itemsPerPage);
      paginationContainer.innerHTML = "";

      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        if (i === currentPage) btn.classList.add("active");
        btn.addEventListener("click", () => {
          currentPage = i;
          showPage(currentPage);
          renderPagination();
        });
        paginationContainer.appendChild(btn);
      }
    }

    // تشغيل أول مرة
    showPage(currentPage);
    renderPagination();







    //////////////////////////// product//////////////////////////////////////////////






    




