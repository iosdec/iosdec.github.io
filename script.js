const inputField = document.getElementById('input-field');
const attendButton = document.getElementById('attend-button');
const messageBox = document.getElementById('message-box');

inputField.addEventListener('input', () => {

  if (inputField.value) {
    attendButton.classList.remove('disabled');
    attendButton.classList.add('enabled');
  } else {
    attendButton.classList.remove('enabled');
    attendButton.classList.add('disabled');
  }
});

document.addEventListener('DOMContentLoaded', () => {

    inputField.removeAttribute('disabled');
});

attendButton.addEventListener('click', () => {

    if (inputField.value) {

      messageBox.classList.add('show');
      inputField.hidden = true;
      attendButton.hidden = true;
    }
});

$(document).ready(function() {
  $('form').submit(function(e) {

    e.preventDefault();
    $.ajax({
      url: $(this).attr('action'),
      method: 'POST',
      data: $(this).serialize(),
      dataType: 'json',
      success: function() {

      },
      error: function() {

      }
    });
  });
});