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

const main = () => {
  const originalCursorStyle = document.documentElement.style.cursor;

  let originalCursor = true;

  const triggerBuzz = () => {
    // console.log("background");
    if (originalCursor) {
      originalCursor = false;
      console.log("Trigger Buzz");

      const customCursorURL = chrome.runtime.getURL("images/customCursor.svg");
      document.documentElement.style.cursor = `url('${customCursorURL}') 15 15, auto`;

      document.addEventListener("click", handleMouseClickElementSelect);
    }
  };

  const handleMouseClickElementSelect = (e) => {
    // console.log("mouse clicked");
    document.documentElement.style.cursor = originalCursorStyle;
    let clickedElement = e.target;

    console.log('clickedElement: ', clickedElement);
    if (clickedElement != null) {
      console.log('chrome', chrome)
      chrome.action.onClicked.addListener((tab) => {
        console.log('tab: ', tab)
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          files: ["content.js"],
        });
      });
    }
  };

  triggerBuzz();
};
