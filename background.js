chrome.commands.onCommand.addListener((command) => {
  if (command === "triggerBuzz") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: main,
      });
    });
  }
});



function main() {
  // Var for standard cursor
  let originalCursorStyle;
  let customCursorAdded = false;
  let originalCursor = true;
  

  function triggerBuzz() {
    if (originalCursor) {
      originalCursor = false;
      console.log("Triggering Buzz");
      console.log(originalCursor)

      const customCursorURL = chrome.runtime.getURL("cursorY.svg");
      originalCursorStyle = document.documentElement.style.cursor;
      // modify the 15 15 auto to displace the cursor alignment
      document.documentElement.style.cursor = `url('${customCursorURL}') 15 15, auto`;

      customCursorAdded = true;

      document.addEventListener("click", handleMouseClickElementSelect, {
        once: true,
      });
      // document.addEventListener("click", resetCursor, { once: true });
    }
  }

  function removeCustomCursor() {
    if (customCursorAdded) {
      document.documentElement.style.cursor = originalCursorStyle;
      customCursorAdded = false;
    }
  }

  function handleMouseClickElementSelect(event) {
    document.documentElement.style.cursor = originalCursorStyle;
    customCursorAdded = false;
    const clickedElement = event.target;

    if (isTextElement(clickedElement)) {
      document.documentElement.style = originalCursorStyle;
      //   clickedElement.classList.add("selected");

      //   console.log("Clicked on element:", clickedElement);
      const inputField = document.createElement("input");
      inputField.type = "text";
      inputField.placeholder = "Type here...";

      const rect = clickedElement.getBoundingClientRect();
      inputField.style.position = "absolute";
      inputField.style.left = rect.left + "px";
      inputField.style.top = rect.bottom + "px";
      inputField.style.transform = "translate(0, 0)"; // Ensure it's fixed at the clicked position

      document.body.appendChild(inputField);

      inputField.focus();

      inputField.addEventListener("blur", function () {
        document.body.removeChild(inputField);
      });
    } else {
      const divElement = findParentDiv(clickedElement);

      if (divElement) {
        document.documentElement.style.cursor = originalCursorStyle;
        // divElement.classList.add("selected");
        // console.log("Clicked on Div:", divElement);
        // Create a container div for the input field
        const containerDiv = document.createElement("div");
        containerDiv.style.position = "relative";

        // Create an input field for text input
        const inputField = document.createElement("input");
        inputField.type = "text";
        inputField.placeholder = "Type here...";

        // Position the input field under the clicked word
        const rect = clickedElement.getBoundingClientRect();
        inputField.style.position = "absolute";
        inputField.style.left = "0";
        inputField.style.top = "100%";

        // Append the input field to the container div
        containerDiv.appendChild(inputField);

        // Append the container div to the clicked element's parent
        const parentElement = clickedElement.parentNode;
        parentElement.insertBefore(containerDiv, clickedElement.nextSibling);

        // Focus on the input field for text input
        inputField.focus();

        // Handle text input
        inputField.addEventListener("blur", function () {
          // When the input field loses focus (e.g., user clicks outside), remove it and its container
          parentElement.removeChild(containerDiv);
        });
      }
    }
    originalCursor = true;
  }

  // checks if function is word, used to compare div vs text
  function isTextElement(element) {
    while (element) {
      if (
        (element.nodeType === Node.ELEMENT_NODE &&
          element.nodeName === "SPAN") ||
        (element.nodeType === Node.TEXT_NODE && /\S/.test(element.textContent))
      ) {
        return element;
      }
      element = element.parentNode;
    }
    return null; // No text element found
  }

  // Find parent <div> of element
  function findParentDiv(element) {
    while (element) {
      if (element.nodeName === "DIV") {
        return element;
      }
      element = element.parentNode;
    }
    return null;
  }

  //   function resetCursor() {
  //     document.documentElement.style.cursor = originalCursorStyle;
  //   }

  triggerBuzz();
}
