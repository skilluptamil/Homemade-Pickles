/**
 * Dadi's Swad - Homemade Pickles & Papads
 * Blog.js - Live Search, Category Filters, Social Share Links & Newsletter Subscription
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* 1. Blog Search & Filter */
  var blogSearchInput = document.getElementById('blogSearchInput');
  var blogCategoryButtons = document.querySelectorAll('.blog-cat-btn');
  var blogCards = document.querySelectorAll('.blog-grid .blog-card');
  var blogEmptyNotice = document.getElementById('blogEmptyNotice');

  var currentBlogCategory = 'all';
  var currentBlogQuery = '';

  function filterBlogPosts() {
    var visibleCount = 0;

    blogCards.forEach(function (card) {
      var title = (card.querySelector('.blog-title') ? card.querySelector('.blog-title').textContent : '').toLowerCase();
      var desc = (card.querySelector('.blog-desc') ? card.querySelector('.blog-desc').textContent : '').toLowerCase();
      var category = (card.getAttribute('data-category') || '').toLowerCase();

      var matchesCat = (currentBlogCategory === 'all' || category === currentBlogCategory);
      var matchesQuery = (!currentBlogQuery || title.includes(currentBlogQuery) || desc.includes(currentBlogQuery));

      if (matchesCat && matchesQuery) {
        card.style.display = 'flex';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });

    if (blogEmptyNotice) {
      blogEmptyNotice.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (blogSearchInput) {
    blogSearchInput.addEventListener('input', function (e) {
      currentBlogQuery = e.target.value.trim().toLowerCase();
      filterBlogPosts();
    });
  }

  if (blogCategoryButtons.length > 0) {
    var urlParams = new URLSearchParams(window.location.search);
    var catParam = urlParams.get('cat');
    if (catParam) {
      blogCategoryButtons.forEach(function (btn) {
        if ((btn.getAttribute('data-filter') || '').toLowerCase() === catParam.toLowerCase()) {
          blogCategoryButtons.forEach(function (b) { b.classList.remove('active'); });
          btn.classList.add('active');
          currentBlogCategory = catParam.toLowerCase();
        }
      });
      filterBlogPosts();
    }

    blogCategoryButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        blogCategoryButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        currentBlogCategory = (btn.getAttribute('data-filter') || 'all').toLowerCase();
        filterBlogPosts();
      });
    });
  }

  /* 2. Social Sharing Functionality (on blog-details.html) */
  var shareButtons = document.querySelectorAll('[data-share]');
  shareButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      var platform = btn.getAttribute('data-share');
      var pageUrl = encodeURIComponent(window.location.href);
      var pageTitle = encodeURIComponent(document.title);

      var shareUrl = '';
      switch (platform) {
        case 'whatsapp':
          shareUrl = 'https://api.whatsapp.com/send?text=' + pageTitle + '%20' + pageUrl;
          break;
        case 'facebook':
          shareUrl = 'https://www.facebook.com/sharer/sharer.php?u=' + pageUrl;
          break;
        case 'twitter':
          shareUrl = 'https://twitter.com/intent/tweet?url=' + pageUrl + '&text=' + pageTitle;
          break;
        case 'pinterest':
          shareUrl = 'https://pinterest.com/pin/create/button/?url=' + pageUrl + '&description=' + pageTitle;
          break;
        case 'copy':
          if (navigator.clipboard) {
            navigator.clipboard.writeText(window.location.href).then(function () {
              if (window.showToast) {
                window.showToast('Link Copied!', 'Article link copied to your clipboard.', 'success');
              }
            });
          }
          return;
      }

      if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
      }
    });
  });

  /* 3. Newsletter Subscription */
  var newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var emailInput = newsletterForm.querySelector('input[type="email"]');
      if (!emailInput || !emailInput.value.trim()) {
        if (window.showToast) {
          window.showToast('Please Enter Email', 'A valid email address is required.', 'error');
        }
        return;
      }

      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        if (window.showToast) {
          window.showToast('Invalid Email', 'Please enter a valid email address.', 'error');
        }
        return;
      }

      if (window.showToast) {
        window.showToast('Subscribed!', 'Thank you for subscribing to our recipes & traditional kitchen stories.', 'success');
      }
      emailInput.value = '';
    });
  }
});
