let imageDropEnabled = false;

// I have to have init() below me
const fetchData = async () => {
  try {
    const resp = await fetch("http://localhost:3000/sites");
    const sites = await resp.json();

    const currentSiteData = sites.filter(
      (site) => site.url === window.location.href
    );
    return currentSiteData;
  } catch (err) {
    console.log("Error:", err);
  }
};

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "triggerBuzz") {
    changeCursor();
    imageDropEnabled = true;
  }
});

async function init() {
  try {
    const siteData = await fetchData();
    console.log("init", siteData);
    siteData.forEach((data) => {
      console.log("dom content loaded", data);
      dropImageAtClick(data.x, data.y);
    });
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const siteData = await fetchData();
  siteData.forEach((data) => {
    console.log("dom content loaded", data);
    createBuzzyImage(data);
  });
});

document.addEventListener(
  "click",
  (e) => {
    if (imageDropEnabled) {
      e.preventDefault();
      dropImageAtClick(e.clientX, e.clientY);
      handleServerAdd(e.clientX, e.clientY);
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

  let isDragging = false;
  let offsetX, offsetY;

  buzzyDivElement.addEventListener(
    "mousedown",
    (e) => {
      isDragging = true;
      offsetX = e.clientX - buzzyDivElement.getBoundingClientRect().left;
      offsetY = e.clientY - buzzyDivElement.getBoundingClientRect().top;
      e.stopPropagation();
    },
    true
  );

  document.addEventListener(
    "mousemove",
    (e) => {
      if (isDragging) {
        buzzyDivElement.style.left = `${e.clientX - offsetX}px`;
        buzzyDivElement.style.top = `${e.clientY - offsetY}px`;
        e.stopPropagation();
      }
    },
    true
  );

  document.addEventListener(
    "mouseup",
    (e) => {
      isDragging ? (isDragging = false) : null;
      e.stopPropagation();
    },
    true
  );

  buzzyDivElement.addEventListener("click", onBuzzyClick);

  document.body.appendChild(buzzyDivElement);
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

const createBuzzyImage = (data) => {
  const img = document.createElement("img");
  img.style.backgroundImage = `url('${chrome.runtime.getURL(
    "images/customCursor.svg"
  )}')`;
  img.style.position = "absolute";
  img.style.left = `${data.x}px`;
  img.style.top = `${data.y}px`;
  img.style.zIndex = "1000"; 
  console.log("createBuzzyImage", data);
  document.body.appendChild(img);
  console.log("createBuzzyImage2", data);
};

const onBuzzyClick = (event) => {
  event.stopPropagation();

  const clickedDiv = event.currentTarget;

  // Create buzzyDiv if it doesn't exist
  if (!clickedDiv.buzzyDiv) {
    clickedDiv.buzzyDiv = document.createElement("div");
    clickedDiv.buzzyDiv.style.width = "250px";
    clickedDiv.buzzyDiv.style.height = "100px";
    clickedDiv.buzzyDiv.style.backgroundColor = "#F0F0F0";
    clickedDiv.buzzyDiv.style.border = "1px solid #ddd";
    clickedDiv.buzzyDiv.boxShadow = "0 2px 4px rgba(0,0,0,0.2)";
    clickedDiv.buzzyDiv.style.borderRadius = "5px";
    clickedDiv.buzzyDiv.style.position = "fixed";
    document.body.appendChild(clickedDiv.buzzyDiv);

    const textField = document.createElement("input");
    textField.type = "text";
    textField.placeholder = "Enter text here...";
    textField.style.width = "90%";
    textField.style.marginBottom = "10px";
    clickedDiv.buzzyDiv.appendChild(textField);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = "🗑️";
    trashButton.style.width = "30px";
    trashButton.style.height = "30px";
    trashButton.style.display = "inline-block";
    trashButton.style.verticalAlign = "top";

    trashButton.onclick = function () {
      if (document.body.contains(clickedDiv)) {
        document.body.removeChild(clickedDiv);
        document.body.removeChild(clickedDiv.buzzyDiv);
        clickedDiv.buzzyDiv = null;
      }
    };
    clickedDiv.buzzyDiv.appendChild(trashButton);

    function createButton(icon, text) {
      const button = document.createElement("button");
      button.style.marginRight = "5px";
      button.innerHTML = icon ? icon : text;
      return button;
    }

    const paperclipButton = createButton("📎", "");
    const folderButton = createButton("📁", "");
    const saveButton = createButton("💾", "Save");
    clickedDiv.buzzyDiv.appendChild(paperclipButton);
    clickedDiv.buzzyDiv.appendChild(folderButton);
    clickedDiv.buzzyDiv.appendChild(saveButton);

    const rect = clickedDiv.getBoundingClientRect();
    clickedDiv.buzzyDiv.style.left = `${rect.left}px`;
    clickedDiv.buzzyDiv.style.top = `${window.scrollY + rect.bottom}px`; // Adjust for scrolling
  } else {
    // Toggle visibility
    clickedDiv.buzzyDiv.style.display =
      clickedDiv.buzzyDiv.style.display === "none" ? "" : "none";

    // Update position in case the div has moved
    if (clickedDiv.buzzyDiv.style.display !== "none") {
      const rect = clickedDiv.getBoundingClientRect();
      clickedDiv.buzzyDiv.style.left = `${rect.left}px`;
      clickedDiv.buzzyDiv.style.top = `${window.scrollY + rect.bottom}px`;
    }
  }
};

const handleServerAdd = (x, y) => {
  const newSite = {
    id: uuidv4(),
    url: window.location.href,
    timeAdded: new Date().toISOString(),
    x: x,
    y: y,
  };

  fetch("http://localhost:3000/sites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSite),
  })
    .then((resp) => resp.json())
    .then((data) => {
      console.log("Data", data);
    })
    .catch((err) => {
      console.log("Error:", err);
    });
};

// I have to have fetchData() above me
init();

function uuidv4() {
  return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

