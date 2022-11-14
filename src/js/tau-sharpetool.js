/*
 * SHARPE-tools
 * Copyright 2022
 * Author: Toni Au
 * All Rights Reserved.
 * Use, reproduction, distribution, and modification of this code is subject to the terms and
 * conditions of the MIT license, available at http://www.opensource.org/licenses/mit-license.php
 *
 * Project: https://www.github.com/toniau/sharpe-tools
 */

function SHARPEtools() {
    
    var _this = this;

    // Set up global vars
    this.imagesArray = [];
    this.currentIndex;
    // IPG - Interactive Photo Gallery
    this.isIPG = false;

    // Function to init tool package
    this.render = () => {
        this.imagesArray = [];
        this.currentIndex = 0;
        this.isIPG = false;

        // Grab all images and populate images array
        document.querySelectorAll('.sharpe-ipg-grid__item').forEach((el, index) => {
            _this.imagesArray.push(el);
            el.setAttribute('data-ipg-index', index);
        });
		
		// Create carousel navigation
		let carouselNav = document.querySelector('.sharpe-ipg-text-carousel__nav');
		for(let i=0; i < this.imagesArray.length; i++) {
			let navDot = document.createElement('span');
			navDot.classList.add('dot');
			navDot.setAttribute('data-carousel-index', i);
			carouselNav.append(navDot);
			
			// Attach click handler
			navDot.addEventListener('click', (el) => {
				// Remove past active classes
				let lastDot = document.querySelector(`.dot[data-carousel-index="${_this.currentIndex}"]`);
				lastDot.classList.remove('active-dot');
				let lastImage = document.querySelector(`.sharpe-ipg-grid__item[data-ipg-index="${_this.currentIndex}"]`);
				lastImage.classList.remove('active-image');
				
				// Get new index
				_this.currentIndex = el.target.dataset.carouselIndex;
				
				// Mark active nav dot
				el.target.classList.add('active-dot');
				
				// Transition corresponding image
				_this.imagesArray[_this.currentIndex].classList.add('active-image');
				
			});
		}
		
		// Trigger first image
		document.querySelector('.dot[data-carousel-index="0"]').click();
    }

}