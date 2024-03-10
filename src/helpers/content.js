let imageDropEnabled = false;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "triggerBuzz") {
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
  const buzzyDivElement = document.createElement("div");
  buzzyDivElement.style.position = "fixed";
  buzzyDivElement.style.left = `${x}px`;
  buzzyDivElement.style.top = `${y}px`;
  buzzyDivElement.style.height = "50px";
  buzzyDivElement.style.width = "50px";
  buzzyDivElement.style.backgroundImage = `url('${chrome.runtime.getURL(
    "images/customCursor.svg"
  )}')`;
  buzzyDivElement.style.backgroundSize = "cover";
  buzzyDivElement.style.zIndex = "1000";
  document.body.appendChild(buzzyDivElement);
  console.log(buzzyDivElement);
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
