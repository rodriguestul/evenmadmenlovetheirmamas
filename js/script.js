// horizontal scroll

var masksContainer = document.querySelector(".masks-container");
var serieContainer = document.querySelector(".serie-container");

(function () {
  var throttle = function (type, name, obj) {
    var obj = obj || window;
    var running = false;
    var func = function () {
      if (running) {
        return;
      }
      running = true;
      requestAnimationFrame(function () {
        obj.dispatchEvent(new CustomEvent(name));
        running = false;
      });
    };
    obj.addEventListener(type, func);
  };

  throttle("scroll", "optimizedScroll");
})();

window.addEventListener("optimizedScroll", function () {
  masksContainer.style.transform = "translate(-" + window.pageYOffset + "px)";
});

window.addEventListener("optimizedScroll", function () {
  serieContainer.style.transform = "translate(-" + window.pageYOffset + "px)";
});

// filme info

var infoBtn = document.querySelector(".info-btn"),
  overlay = document.querySelector(".overlay"),
  description = document.querySelector(".filme-description"),
  video = document.querySelector(".filme");

infoBtn.addEventListener("click", () => {
  description.classList.toggle("visible"), overlay.classList.toggle("visible");

  const initialText = "Info";
  if (infoBtn.textContent.toLowerCase().includes(initialText.toLowerCase())) {
    infoBtn.textContent = "Voltar";
  } else {
    infoBtn.textContent = initialText;
  }

  video.pause();
});
