document.addEventListener('DOMContentLoaded', function() {
  var screenshotInput = document.getElementById('screenshotInput');

  screenshotInput.addEventListener('paste', function(event) {
    // Handle pasted image
    handlePaste(event);
  });

  screenshotInput.addEventListener('change', function(event) {
    // Handle selected file
    handleFileInput(event);
  });
});

function handlePaste(event) {
  event.preventDefault();

  var items = (event.clipboardData || event.originalEvent.clipboardData).items;

  for (var i = 0; i < items.length; i++) {
    if (items[i].type.indexOf('image') !== -1) {
      var blob = items[i].getAsFile();
      // Handle the image blob, e.g., display it or upload it
      handleImageBlob(blob);
    }
  }
}
function handleFileInput(event) {
  var file = event.target.files[0];

  if (file && file.type.indexOf('image') !== -1) {
    // Handle the image file, e.g., display it or upload it
    handleImageFile(file);
  }
}

function handleImageBlob(blob) {
  // Implement your logic to handle the image blob
  // For example, you can display it or upload it
  console.log('Handling image blob:', blob);

  var url = URL.createObjectURL(blob);
  // Create a temporary anchor element
  var a = document.createElement('a');
  a.href = url;
  // Set the file name (you can customize this)
  a.download = 'screenshot.png';
  // Append the anchor element to the document
  document.body.appendChild(a);
  // Trigger a click event on the anchor element
  a.click();
  // Remove the anchor element from the document
  document.body.removeChild(a);
  // Release the object URL
  URL.revokeObjectURL(url);
}

function handleImageFile(file) {
  // Implement your logic to handle the image file
  // For example, you can display it or upload it
  console.log('Handling image file:', file);
}
