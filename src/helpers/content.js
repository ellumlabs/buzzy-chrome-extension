// document.addEventListener('click', function(event) {
//     event.preventDefault();

//     var clickedElement = event.target;

//     var imgElement = document.createElement('img');
//     imgElement.src = 'https://example.com/path/to/your/image.png'; // URL of the image you want to drop
//     imgElement.style.position = 'absolute';
//     imgElement.style.left = event.pageX + 'px';
//     imgElement.style.top = event.pageY + 'px';
//     imgElement.style.zIndex = '1000';

//     document.body.appendChild(imgElement);
//   }, false);
const textBox = document.createElement('input');
textBox.setAttribute('type', 'text');
textBox.setAttribute('placeholder', 'Enter note');

// Style the text box (optional)
textBox.style.width = '200px'; // Set width
textBox.style.padding = '10px'; // Set padding for inside the text box for better readability
textBox.style.margin = '10px 0'; // Add some margin for spacing
textBox.style.borderRadius = '5px'; // Optional: rounded corners
textBox.style.border = '1px solid #ccc'; // Optional: border color

const targetElement = document.getElementById('unv_39651796');

if (targetElement) {
  targetElement.insertAdjacentElement('afterend', textBox);
} else {
  console.log('Target element not found');
}
