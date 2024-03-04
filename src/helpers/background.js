chrome.commands.onCommand.addListener((command) => {
  if (command === "triggerBuzz") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: main,
      })
    })
  }
})

function main() {
  console.log('background')
}
