/**
 * Dadi's Swad - Homemade Pickles & Papads
 * Products.js - Live Search, Category Filters, Enquiry Modal Autofill & Product Detail Gallery
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* 1. Live Product Search & Category Filtering */
  var searchInput = document.getElementById('productSearchInput');
  var categoryTabs = document.querySelectorAll('.category-tabs .tab-btn');
  var productCards = document.querySelectorAll('.product-grid .product-card');
  var emptyNotice = document.getElementById('productEmptyNotice');

  var currentCategory = 'all';
  var currentSearchQuery = '';

  function filterProducts() {
    var visibleCount = 0;

    productCards.forEach(function (card) {
      var title = (card.querySelector('.product-title') ? card.querySelector('.product-title').textContent : '').toLowerCase();
      var desc = (card.querySelector('.product-desc') ? card.querySelector('.product-desc').textContent : '').toLowerCase();
      var cardCategory = (card.getAttribute('data-category') || '').toLowerCase();

      var matchesCategory = (currentCategory === 'all' || cardCategory === currentCategory);
      var matchesSearch = (!currentSearchQuery || title.includes(currentSearchQuery) || desc.includes(currentSearchQuery));

      if (matchesCategory && matchesSearch) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (emptyNotice) {
      emptyNotice.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (searchInput) {
    searchInput.addEventListener('input', function (e) {
      currentSearchQuery = e.target.value.trim().toLowerCase();
      filterProducts();
    });
  }

  if (categoryTabs.length > 0) {
    // Check for ?cat= parameter in URL
    var urlParams = new URLSearchParams(window.location.search);
    var catParam = urlParams.get('cat');
    if (catParam) {
      categoryTabs.forEach(function (tab) {
        if ((tab.getAttribute('data-filter') || '').toLowerCase() === catParam.toLowerCase()) {
          categoryTabs.forEach(function (t) { t.classList.remove('active'); });
          tab.classList.add('active');
          currentCategory = catParam.toLowerCase();
        }
      });
      filterProducts();
    }

    categoryTabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        categoryTabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        currentCategory = (tab.getAttribute('data-filter') || 'all').toLowerCase();
        filterProducts();
      });
    });
  }

  /* 2. Quick Product Enquiry Modal Autofill */
  var enquireButtons = document.querySelectorAll('.btn-enquire-product');
  enquireButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var productName = btn.getAttribute('data-product-name') || 'Signature Homemade Pickle';
      var productPrice = btn.getAttribute('data-product-price') || '₹249';

      var modal = document.getElementById('productEnquiryModal');
      if (modal) {
        var modalProductName = modal.querySelector('#modalProductName');
        var inputProduct = modal.querySelector('#enquiryProductField');
        if (modalProductName) modalProductName.textContent = productName;
        if (inputProduct) inputProduct.value = productName;
        window.openModal('productEnquiryModal');
      }
    });
  });

  /* 3. Product Details Page: Gallery & Size Selection */
  var mainImage = document.getElementById('mainProductImage');
  var thumbnails = document.querySelectorAll('.gallery-thumb');

  if (mainImage && thumbnails.length > 0) {
    thumbnails.forEach(function (thumb) {
      thumb.addEventListener('click', function () {
        thumbnails.forEach(function (t) { t.classList.remove('active'); });
        thumb.classList.add('active');
        var newSrc = thumb.getAttribute('data-full-img') || thumb.querySelector('img').src;
        mainImage.src = newSrc;
      });
    });
  }

  // Packaging size price updates on Product Details page
  var sizeRadios = document.querySelectorAll('input[name="packageSize"]');
  var displayPrice = document.getElementById('productDynamicPrice');

  if (sizeRadios.length > 0 && displayPrice) {
    sizeRadios.forEach(function (radio) {
      radio.addEventListener('change', function () {
        var price = radio.getAttribute('data-price');
        if (price) {
          displayPrice.innerHTML = price + ' <span class="demo-tag">(Demo Price)</span>';
        }
      });
    });
  }
});
