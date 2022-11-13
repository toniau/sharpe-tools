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
    this.currentImage;
    // IPG - Interactive Photo Gallery
    this.isIPG = false;

    // Function to init tool package
    this.render = () => {
        this.imagesArray = [];
        this.currentImage = null;
        this.isIPG = false;

        // Grab all images and populate images array
        document.querySelectorAll('img.sharpe-IPG').forEach((el, index) => {
            _this.imagesArray.push(el);
            el.setAttribute('data-ipg-index', index);

            // Attach listeners to each image
            el.addEventListener('hover', () => {
                _this.hoverImage(el);
            });
            el.addEventListener('click', () => {
                _this.clickImage(el);
            });
        });
    }

    // Function - Hover interaction
    this.hoverImage = _el => {
        
    }

    // Function - Click interaction
}