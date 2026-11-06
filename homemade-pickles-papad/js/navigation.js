/**
 * Dadi's Swad - Homemade Pickles & Papads
 * Navigation.js - Sticky Header, Dropdowns, Mobile Hamburger & Active Nav
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var header = document.querySelector('.site-header');
  var mobileToggle = document.querySelector('.mobile-toggle');
  var navMenuWrapper = document.querySelector('.nav-menu-wrapper');
  var dropdownItems = document.querySelectorAll('.nav-item.dropdown');
  var navLinks = document.querySelectorAll('.nav-link, .dropdown-item');

  /* 1. Sticky Navbar on Scroll */
  function handleScroll() {
    if (!header) return;
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* 2. Mobile Hamburger Menu Toggle */
  if (mobileToggle && navMenuWrapper) {
    mobileToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = mobileToggle.classList.toggle('active');
      navMenuWrapper.classList.toggle('active');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile menu on click outside
    document.addEventListener('click', function (e) {
      if (navMenuWrapper.classList.contains('active') && !navMenuWrapper.contains(e.target) && !mobileToggle.contains(e.target)) {
        mobileToggle.classList.remove('active');
        navMenuWrapper.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* 3. Home Dropdown Menu Behaviors (Desktop & Mobile) */
  dropdownItems.forEach(function (dropdown) {
    var toggle = dropdown.querySelector('.dropdown-toggle');
    var chevron = dropdown.querySelector('.dropdown-chevron');

    if (toggle) {
      toggle.addEventListener('click', function (e) {
        // Prevent default navigation if clicked to toggle dropdown
        e.preventDefault();
        e.stopPropagation();

        var isOpen = dropdown.classList.toggle('open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

        // Close any other open dropdowns
        dropdownItems.forEach(function (other) {
          if (other !== dropdown) {
            other.classList.remove('open');
            var otherToggle = other.querySelector('.dropdown-toggle');
            if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
          }
        });
      });
    }
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    dropdownItems.forEach(function (dropdown) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        var toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Close dropdown on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      dropdownItems.forEach(function (dropdown) {
        dropdown.classList.remove('open');
        var toggle = dropdown.querySelector('.dropdown-toggle');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
      if (mobileToggle && navMenuWrapper && navMenuWrapper.classList.contains('active')) {
        mobileToggle.classList.remove('active');
        navMenuWrapper.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  });

  /* 4. Active Nav Link Highlighting based on current page */
  var currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var targetFile = href.split('/').pop().split('#')[0];
    if (targetFile === currentPath || (currentPath === '' && targetFile === 'index.html')) {
      link.classList.add('active');
      // If inside a dropdown, also highlight parent dropdown toggle
      var parentDropdown = link.closest('.nav-item.dropdown');
      if (parentDropdown) {
        var parentToggle = parentDropdown.querySelector('.dropdown-toggle');
        if (parentToggle) parentToggle.classList.add('active');
      }
    }
  });
});

