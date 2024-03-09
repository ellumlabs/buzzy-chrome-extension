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

document.addEventListener("click", function (event) {
    
  console.log("content.js", event);
});
