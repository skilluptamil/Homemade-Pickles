/**
 * Dadi's Swad - Homemade Pickles & Papads
 * Main.js - Core UI Interactions, Accordions, Modals, Toasts & Countdown Timer
 */

(function () {
  'use strict';

  /* 1. Global Toast Notification System */
  window.showToast = function (title, message, type) {
    type = type || 'success';
    var container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    var toast = document.createElement('div');
    toast.className = 'toast toast-' + type;

    var iconClass = 'fa-circle-check';
    if (type === 'error') iconClass = 'fa-circle-xmark';
    if (type === 'info') iconClass = 'fa-circle-info';

    toast.innerHTML = [
      '<div class="toast-icon"><i class="fa-solid ' + iconClass + '"></i></div>',
      '<div class="toast-content">',
      '  <h6>' + (title || 'Notification') + '</h6>',
      '  <p>' + (message || '') + '</p>',
      '</div>'
    ].join('');

    container.appendChild(toast);

    // Trigger animation
    setTimeout(function () {
      toast.classList.add('show');
    }, 20);

    // Auto-dismiss after 4 seconds
    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 350);
    }, 4000);
  };

  /* 2. Global Modal Helpers */
  window.openModal = function (modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  window.closeModal = function (modalId) {
    var modal = document.getElementById(modalId);
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    /* Modal Close Button Listeners */
    var closeButtons = document.querySelectorAll('[data-close-modal]');
    closeButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var modal = btn.closest('.modal-backdrop');
        if (modal) {
          modal.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    // Close modal on clicking backdrop background
    document.querySelectorAll('.modal-backdrop').forEach(function (backdrop) {
      backdrop.addEventListener('click', function (e) {
        if (e.target === backdrop) {
          backdrop.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });

    /* 3. Back to Top Button */
    var backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 400) {
          backToTop.classList.add('active');
        } else {
          backToTop.classList.remove('active');
        }
      }, { passive: true });

      backToTop.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }

    /* 4. Accordion Component (FAQ) */
    var accordionHeaders = document.querySelectorAll('.accordion-header');
    accordionHeaders.forEach(function (header) {
      header.addEventListener('click', function () {
        var item = header.closest('.accordion-item');
        var parent = item.parentElement;
        var isActive = item.classList.contains('active');

        // Optional accordion collapse others
        if (parent.dataset.singleExpand !== 'false') {
          parent.querySelectorAll('.accordion-item').forEach(function (sibling) {
            sibling.classList.remove('active');
            var body = sibling.querySelector('.accordion-body');
            if (body) body.style.maxHeight = null;
          });
        }

        if (!isActive) {
          item.classList.add('active');
          var body = item.querySelector('.accordion-body');
          if (body) {
            body.style.maxHeight = body.scrollHeight + 'px';
          }
        } else {
          item.classList.remove('active');
          var body = item.querySelector('.accordion-body');
          if (body) {
            body.style.maxHeight = null;
          }
        }
      });
    });

    // Initialize any open accordion items
    document.querySelectorAll('.accordion-item.active .accordion-body').forEach(function (body) {
      body.style.maxHeight = body.scrollHeight + 'px';
    });

    /* 5. Countdown Timer (for coming-soon.html) */
    var countdownEl = document.getElementById('comingSoonTimer');
    if (countdownEl) {
      var daysEl = document.getElementById('timerDays');
      var hoursEl = document.getElementById('timerHours');
      var minutesEl = document.getElementById('timerMinutes');
      var secondsEl = document.getElementById('timerSeconds');

      // Set launch date 30 days from current date
      var launchDate = new Date();
      launchDate.setDate(launchDate.getDate() + 30);

      function updateCountdown() {
        var now = new Date().getTime();
        var distance = launchDate.getTime() - now;

        if (distance < 0) {
          countdownEl.innerHTML = '<div class="alert alert-success">We are officially live!</div>';
          return;
        }

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = days < 10 ? '0' + days : days;
        if (hoursEl) hoursEl.textContent = hours < 10 ? '0' + hours : hours;
        if (minutesEl) minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
        if (secondsEl) secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
      }

      updateCountdown();
      setInterval(updateCountdown, 1000);
    }
  });
})();

