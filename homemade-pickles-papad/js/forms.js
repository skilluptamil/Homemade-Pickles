/**
 * Dadi's Swad - Homemade Pickles & Papads
 * Forms.js - Client-Side Validation, Password Strength Meter & Interactive Alerts
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  /* 1. Show / Hide Password Toggle */
  var passwordToggles = document.querySelectorAll('.password-toggle-btn');
  passwordToggles.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var input = btn.closest('.input-password-group').querySelector('input');
      if (input) {
        if (input.type === 'password') {
          input.type = 'text';
          btn.innerHTML = '<i class="fa-solid fa-eye-slash" aria-hidden="true"></i>';
          btn.setAttribute('aria-label', 'Hide Password');
        } else {
          input.type = 'password';
          btn.innerHTML = '<i class="fa-solid fa-eye" aria-hidden="true"></i>';
          btn.setAttribute('aria-label', 'Show Password');
        }
      }
    });
  });

  /* 2. Password Strength Meter (for register.html) */
  var registerPasswordInput = document.getElementById('regPassword');
  var strengthBar = document.getElementById('passwordStrengthBar');
  var strengthText = document.getElementById('passwordStrengthText');

  if (registerPasswordInput && strengthBar && strengthText) {
    registerPasswordInput.addEventListener('input', function () {
      var val = registerPasswordInput.value;
      var score = 0;

      if (val.length >= 8) score++;
      if (/[A-Z]/.test(val)) score++;
      if (/[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;

      strengthBar.className = 'password-strength-bar';
      if (val.length === 0) {
        strengthBar.style.width = '0%';
        strengthText.textContent = '';
      } else if (score <= 1) {
        strengthBar.classList.add('strength-weak');
        strengthText.textContent = 'Weak Password';
        strengthText.style.color = '#EF4444';
      } else if (score === 2 || score === 3) {
        strengthBar.classList.add('strength-medium');
        strengthText.textContent = 'Medium Strength';
        strengthText.style.color = '#F59E0B';
      } else {
        strengthBar.classList.add('strength-strong');
        strengthText.textContent = 'Strong Password';
        strengthText.style.color = '#10B981';
      }
    });
  }

  /* 3. Helper Validation Functions */
  function validateName(name) {
    var trimmed = name.trim();
    if (!trimmed) {
      return { valid: false, message: 'Please enter a valid name.' };
    }
    if (/[0-9]/.test(trimmed)) {
      return { valid: false, message: 'Name cannot contain numbers.' };
    }
    if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\u0900-\u097F' .-]+$/.test(trimmed)) {
      return { valid: false, message: 'Name cannot contain invalid special characters.' };
    }
    if (/^['.-]|['-]$|[.'-]{2}/.test(trimmed)) {
      return { valid: false, message: 'Please enter a valid full name without repeated punctuation.' };
    }
    var lettersOnly = trimmed.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\u0900-\u097F]/g, '');
    if (lettersOnly.length < 2) {
      return { valid: false, message: 'Name must contain at least 2 letters.' };
    }
    return { valid: true, message: '' };
  }

  function isNameField(field) {
    return field.getAttribute('data-validate') === 'name' || /name/i.test(field.id || field.name || '');
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    var digits = phone.replace(/\D/g, '');
    return /^[0-9+\-\s()]{7,18}$/.test(phone) && digits.length >= 7 && digits.length <= 15;
  }

  function setFieldValidation(input, isValid, errorMsg) {
    var group = input.closest('.form-group');
    if (!group) return;

    var feedback = group.querySelector('.invalid-feedback');
    if (!isValid) {
      group.classList.add('is-invalid');
      input.setAttribute('aria-invalid', 'true');
      if (feedback && errorMsg) feedback.textContent = errorMsg;
    } else {
      group.classList.remove('is-invalid');
      input.removeAttribute('aria-invalid');
    }
  }

  function validateSingleField(field) {
    if (field.type === 'checkbox') {
      var checked = field.checked;
      setFieldValidation(field, checked, 'You must accept the terms.');
      return checked;
    }

    var val = field.value.trim();
    var isValid = true;
    var msg = 'This field is required.';

    if (!val) {
      isValid = false;
    } else if (isNameField(field)) {
      var nameCheck = validateName(val);
      if (!nameCheck.valid) {
        isValid = false;
        msg = nameCheck.message;
      }
    } else if (field.type === 'email' && !validateEmail(val)) {
      isValid = false;
      msg = 'Please enter a valid email address.';
    } else if (field.type === 'tel' && !validatePhone(val)) {
      isValid = false;
      msg = 'Please enter a valid phone number.';
    } else if (field.id === 'regPassword' && val.length < 8) {
      isValid = false;
      msg = 'Password must be at least 8 characters.';
    } else if (field.id === 'regConfirmPassword') {
      var pwd = document.getElementById('regPassword');
      if (pwd && pwd.value !== val) {
        isValid = false;
        msg = 'Passwords do not match.';
      }
    }

    setFieldValidation(field, isValid, msg);
    return isValid;
  }

  /* 4. Form Validation Handlers */
  var validatedForms = [
    { id: 'contactGeneralForm', successMsg: 'Your message has been sent successfully. (Demonstration Only)' },
    { id: 'contactOrderForm', successMsg: 'Your order enquiry has been received! Our team will contact you shortly. (Demonstration Only)' },
    { id: 'bulkOrderForm', successMsg: 'Bulk enquiry submitted successfully! We will prepare a customized quote. (Demonstration Only)' },
    { id: 'quickEnquiryForm', successMsg: 'Enquiry submitted successfully! (Demonstration Only)' },
    { id: 'modalEnquiryForm', successMsg: 'Enquiry received! We will connect with you on WhatsApp / Phone. (Demonstration Only)' },
    { id: 'loginForm', successMsg: 'Logged in successfully! Redirecting to home page... (Demonstration Only)', redirect: 'index.html' },
    { id: 'registerForm', successMsg: 'Registration completed! Welcome to Dadi\'s Swad family. (Demonstration Only)', redirect: 'login.html' }
  ];

  validatedForms.forEach(function (formConfig) {
    var form = document.getElementById(formConfig.id);
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var hasError = false;

      // Validate required inputs
      var requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(function (field) {
        if (!validateSingleField(field)) {
          hasError = true;
        }
      });

      if (!hasError) {
        var alertEl = form.querySelector('.form-alert');
        if (alertEl) {
          alertEl.textContent = formConfig.successMsg;
          alertEl.classList.add('alert-success');
          alertEl.style.display = 'block';
        }

        if (window.showToast) {
          window.showToast('Success!', formConfig.successMsg, 'success');
        }

        // Close modal if this was inside one
        var modal = form.closest('.modal-backdrop');
        if (modal) {
          setTimeout(function () {
            modal.classList.remove('active');
            document.body.style.overflow = '';
          }, 1500);
        }

        form.reset();
        if (strengthBar) strengthBar.style.width = '0%';
        if (strengthText) strengthText.textContent = '';

        if (formConfig.redirect) {
          setTimeout(function () {
            window.location.href = formConfig.redirect;
          }, 1800);
        }
      }
    });

    // Live validation on blur and while correcting invalid state
    form.querySelectorAll('.form-control, .form-select, .form-textarea, input[type="checkbox"]').forEach(function (input) {
      input.addEventListener('blur', function () {
        if (input.hasAttribute('required') && input.value.trim().length > 0) {
          validateSingleField(input);
        }
      });

      input.addEventListener('input', function () {
        if (isNameField(input) && input.value.trim().length > 0) {
          var check = validateName(input.value);
          // Show immediate warning if user types a digit or invalid symbol in a name field
          if (/[0-9]/.test(input.value) || !/^[A-Za-zÀ-ÖØ-öø-ÿ\u0900-\u097F' .-]*$/.test(input.value)) {
            setFieldValidation(input, false, check.message);
            return;
          }
        }
        var group = input.closest('.form-group');
        if (group && group.classList.contains('is-invalid')) {
          validateSingleField(input);
        }
      });
    });
  });
});

