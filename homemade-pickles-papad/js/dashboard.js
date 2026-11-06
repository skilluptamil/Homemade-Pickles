/**
 * Dadi's Swad - Homemade Pickles & Papads
 * Dashboard.js - Admin Template Sidebar, Section Switcher & Interactive Demonstration Actions
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* 1. Sidebar Toggle on Mobile */
  var sidebar = document.querySelector('.dashboard-sidebar');
  var menuToggle = document.querySelector('.dashboard-menu-toggle');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function () {
      sidebar.classList.toggle('active');
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('active');
      }
    });
  }

  /* 2. Dashboard Navigation / Tab Switcher */
  var sidebarLinks = document.querySelectorAll('.sidebar-link[data-target]');
  var dashboardSections = document.querySelectorAll('.dashboard-section');
  var sectionTitleEl = document.getElementById('dashboardCurrentTitle');

  sidebarLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var targetId = link.getAttribute('data-target');

      // Update link active state
      sidebarLinks.forEach(function (l) { l.classList.remove('active'); });
      link.classList.add('active');

      // Hide all sections, show target
      dashboardSections.forEach(function (sec) {
        if (sec.id === targetId) {
          sec.style.display = 'block';
        } else {
          sec.style.display = 'none';
        }
      });

      // Update topbar title
      if (sectionTitleEl) {
        var linkText = link.querySelector('span') ? link.querySelector('span').textContent : 'Dashboard';
        sectionTitleEl.textContent = linkText;
      }

      // Close mobile sidebar if open
      if (sidebar && sidebar.classList.contains('active')) {
        sidebar.classList.remove('active');
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  /* 3. Interactive Demonstration Actions (Frontend Mock) */
  // Change Order Status
  var statusButtons = document.querySelectorAll('.btn-update-status');
  statusButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var row = btn.closest('tr');
      var statusPill = row ? row.querySelector('.status-pill') : null;
      if (statusPill) {
        if (statusPill.classList.contains('status-pending')) {
          statusPill.className = 'status-pill status-processing';
          statusPill.textContent = 'Processing';
        } else if (statusPill.classList.contains('status-processing')) {
          statusPill.className = 'status-pill status-delivered';
          statusPill.textContent = 'Delivered';
        } else {
          statusPill.className = 'status-pill status-pending';
          statusPill.textContent = 'Pending';
        }
        if (window.showToast) {
          window.showToast('Status Updated', 'Order status toggled for demonstration.', 'info');
        }
      }
    });
  });

  // Reply to Customer Enquiry
  var replyButtons = document.querySelectorAll('.btn-reply-enquiry');
  replyButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var customer = btn.getAttribute('data-customer') || 'Customer';
      if (window.showToast) {
        window.showToast('Reply Window', 'Opened mock reply composer for ' + customer + '.', 'success');
      }
    });
  });

  // Export CSV mock
  var exportBtn = document.getElementById('btnExportReport');
  if (exportBtn) {
    exportBtn.addEventListener('click', function () {
      if (window.showToast) {
        window.showToast('Report Exported', 'Sample CSV report generated for demonstration.', 'success');
      }
    });
  }
});

