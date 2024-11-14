document.addEventListener("DOMContentLoaded", () => {
  console.log("XANTYS loaded successfully!");
});

function goBack() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = "index.html"; // Redirects to the main page if no history
  }
}

// function copyCode(button) {
//   const codeBlock = button.nextElementSibling.textContent;
//   navigator.clipboard
//     .writeText(codeBlock)
//     .then(() => {
//       button.textContent = "Copied!";

//       setTimeout(() => {
//         // Create an SVG element
//         const svg = document.createElementNS(
//           "http://www.w3.org/2000/svg",
//           "svg"
//         );
//         svg.setAttribute("width", "16");
//         svg.setAttribute("height", "16");
//         svg.setAttribute("fill", "currentColor");
//         svg.setAttribute("class", "bi bi-clipboard-check");
//         svg.setAttribute("viewBox", "0 0 16 16");
//         svg.innerHTML = `
//           <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
//           <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
//           <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
//         `;

//         // Clear the button's text and append the SVG
//         button.textContent = "";
//         button.appendChild(svg);
//       }, 2000);
//     })
//     .catch((err) => {
//       console.log("Something went wrong", err);
//     });
// }

function copyCode(button) {
  const codeBlock = button.nextElementSibling.textContent;
  const originalSVG = button.innerHTML;

  navigator.clipboard
    .writeText(codeBlock)
    .then(() => {
      // Immediately replace the button content with the SVG
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "16");
      svg.setAttribute("height", "16");
      svg.setAttribute("fill", "currentColor");
      svg.setAttribute("class", "bi bi-clipboard-check");
      svg.setAttribute("viewBox", "0 0 16 16");
      svg.innerHTML = `
        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1z"/>
        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0z"/>
      `;

      // Clear the button's text and append the SVG immediately
      button.textContent = "";
      button.appendChild(svg);

      setTimeout(() => {
        button.innerHTML = originalSVG; // Restore the original button content
      }, 2000);
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
}

function openLinkedIn(url) {
  cordova.InAppBrowser.open(url, "_system");
}

document.addEventListener(
  "deviceready",
  function () {
    var options = {
      location: "yes",
      clearcache: "yes",
      toolbar: "yes",
    };

    var ref = cordova.InAppBrowser.open(url, "_system", options);
  },
  false
);
