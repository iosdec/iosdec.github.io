const inputField = document.getElementById('input-field');
const attendButton = document.getElementById('attend-button');
const messageBox = document.getElementById('message-box');
const presaveButton = document.getElementById('presave-button')

// enable the attend button when there is text in the input field
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
      presaveButton.classList.add('show');
      inputField.style.display = 'none';
      attendButton.style.display = 'none';
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
        // Hide the input field and attend button
        $('#input-field').hide();
        $('#attend-button').hide();
        
        // Show the message box and presave button
        $('#message-box').show();
        $('#presave-button').show();
      },
      error: function() {
        // Handle errors if necessary
      }
    });
  });
});