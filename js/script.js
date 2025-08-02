


const menuShow = () => {
  let menuMobile = document.querySelector('.mobile-menu')
  if(menuMobile.classList.contains('open')){
    menuMobile.classList.remove('open')
    document.querySelector('.icon').src = "img/menu_white_36dp.svg"
  }else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "img/close_white_36dp.svg"
  }
}


// carrossel


 document.addEventListener('DOMContentLoaded', function() {
            const carousel = document.querySelector('.carousel');
            const prevBtn = document.querySelector('#prevBtn');
            const nextBtn = document.querySelector('#nextBtn');
            const indicatorsContainer = document.querySelector('.carousel-indicators');
            const items = document.querySelectorAll('.carousel-item');
            
            let currentIndex = 0;
            const totalItems = items.length;
            
            // Create indicators
            items.forEach((_, index) => {
                const indicator = document.createElement('div');
                indicator.classList.add('indicator');
                if (index === 0) indicator.classList.add('active');
                indicator.addEventListener('click', () => goToIndex(index));
                indicatorsContainer.appendChild(indicator);
            });
            
            // Function to update carousel position
            function updateCarousel() {
                carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // Update indicators
                document.querySelectorAll('.indicator').forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === currentIndex);
                });
            }
            
            // Function to go to specific index
            function goToIndex(index) {
                currentIndex = index;
                updateCarousel();
            }
            
            // Next button
            nextBtn.addEventListener('click', () => {
                currentIndex = (currentIndex + 1) % totalItems;
                updateCarousel();
            });
            
            // Previous button
            prevBtn.addEventListener('click', () => {
                currentIndex = (currentIndex - 1 + totalItems) % totalItems;
                updateCarousel();
            });
            
            // Auto slide
            let autoSlide = setInterval(() => {
                currentIndex = (currentIndex + 1) % totalItems;
                updateCarousel();
            }, 5000);
            
            // Pause on hover
            carouselContainer = document.querySelector('.carousel-container');
            carouselContainer.addEventListener('mouseenter', () => {
                clearInterval(autoSlide);
            });
            
            carouselContainer.addEventListener('mouseleave', () => {
                autoSlide = setInterval(() => {
                    currentIndex = (currentIndex + 1) % totalItems;
                    updateCarousel();
                }, 5000);
            });
        });



