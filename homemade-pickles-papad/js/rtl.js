/**
 * Dadi's Swad - Homemade Pickles & Papads
 * RTL.js - LTR / RTL Direction Controller with LocalStorage Persistence
 */

(function () {
  'use strict';

  var DIRECTION_KEY = 'pickles_direction';
  var root = document.documentElement;

  function getSavedDirection() {
    var saved = localStorage.getItem(DIRECTION_KEY);
    return saved === 'rtl' ? 'rtl' : 'ltr';
  }

  function applyDirection(dir) {
    if (dir === 'rtl') {
      root.setAttribute('dir', 'rtl');
    } else {
      root.setAttribute('dir', 'ltr');
    }
    updateRTLButtonText(dir);
  }

  function updateRTLButtonText(dir) {
    var buttons = document.querySelectorAll('.rtl-toggle');
    buttons.forEach(function (btn) {
      if (dir === 'rtl') {
        btn.innerHTML = '<span>LTR</span>';
        btn.setAttribute('title', 'Switch to Left-to-Right layout');
        btn.setAttribute('aria-label', 'Switch to Left-to-Right layout');
      } else {
        btn.innerHTML = '<span>RTL</span>';
        btn.setAttribute('title', 'Switch to Right-to-Left layout');
        btn.setAttribute('aria-label', 'Switch to Right-to-Left layout');
      }
    });
  }

  function toggleDirection() {
    var current = root.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr';
    var next = current === 'rtl' ? 'ltr' : 'rtl';
    localStorage.setItem(DIRECTION_KEY, next);
    applyDirection(next);
  }

  // Initial execution immediately
  var initialDir = getSavedDirection();
  applyDirection(initialDir);

  // Attach event listeners and sync button text once DOM is ready
  document.addEventListener('DOMContentLoaded', function () {
    updateRTLButtonText(getSavedDirection());
    var buttons = document.querySelectorAll('.rtl-toggle');
    buttons.forEach(function (btn) {
      btn.addEventListener('click', toggleDirection);
    });
  });
})();

