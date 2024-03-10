let imageDropEnabled = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log("req", request);
  if (request.action === "triggerBuzz") {
    console.log("content triggererd");
    changeCursor();
    imageDropEnabled = true;
  }
});

document.addEventListener(
  "click",
  (e) => {
    if (imageDropEnabled) {
      e.preventDefault();
      dropImageAtClick(e.clientX, e.clientY);
      resetCursor();
      imageDropEnabled = false;
    }
  },
  true
);

const dropImageAtClick = (x, y) => {
  console.log("dropImage");
  const img = document.createElement("img");
  img.src = chrome.runtime.getURL("images/customCursor.svg");
  img.style.position = "fixed";
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;
  img.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(img);
};

const changeCursor = () => {
  const customCursorURL = chrome.runtime.getURL("images/customCursor.svg");
  document.documentElement.style.cursor = `url('${customCursorURL}') 15 15, auto`;

  Array.from(document.querySelectorAll("*")).forEach((el) => {
    el.style.cursor = `url('${customCursorURL}') 15 15, auto`;
  });
};

const resetCursor = () => {
  Array.from(document.querySelectorAll("*")).forEach((el) => {
    el.style.cursor = "auto";
  });
};
