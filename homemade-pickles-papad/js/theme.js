/**
 * Dadi's Swad - Homemade Pickles & Papads
 * Theme.js - Dark Mode / Light Mode Controller with LocalStorage Persistence
 */

(function () {
  'use strict';

  var THEME_KEY = 'pickles_theme';
  var root = document.documentElement;

  // Retrieve saved theme or detect system preference
  function getPreferredTheme() {
    var saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  // Apply theme to document
  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      root.classList.add('dark-theme');
    } else {
      root.removeAttribute('data-theme');
      root.classList.remove('dark-theme');
    }
    updateThemeToggleIcons(theme);
  }

  // Update button icons & title
  function updateThemeToggleIcons(theme) {
    var toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(function (btn) {
      if (theme === 'dark') {
        btn.innerHTML = '<i class="fa-solid fa-sun" aria-hidden="true"></i>';
        btn.setAttribute('title', 'Switch to Light Mode');
        btn.setAttribute('aria-label', 'Switch to Light Mode');
      } else {
        btn.innerHTML = '<i class="fa-solid fa-moon" aria-hidden="true"></i>';
        btn.setAttribute('title', 'Switch to Dark Mode');
        btn.setAttribute('aria-label', 'Switch to Dark Mode');
      }
    });
  }

  // Toggle theme
  function toggleTheme() {
    var current = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    var next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(THEME_KEY, next);
    applyTheme(next);
  }

  // Initial execution (runs immediately to prevent flash)
  var initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Attach event listener once DOM is loaded
  document.addEventListener('DOMContentLoaded', function () {
    var toggles = document.querySelectorAll('.theme-toggle');
    toggles.forEach(function (btn) {
      btn.addEventListener('click', toggleTheme);
    });
  });

  // Listen to OS theme changes if user has not set explicit preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem(THEME_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
})();

