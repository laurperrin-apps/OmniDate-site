(function () {
  const saved = localStorage.getItem("omnidate-lang");
  if (saved === "en") document.body.classList.add("en");

  const btn = document.getElementById("langButton");
  if (!btn) return;

  function updateLabel() {
    btn.textContent = document.body.classList.contains("en") ? "FR" : "EN";
  }

  btn.addEventListener("click", function () {
    document.body.classList.toggle("en");
    const lang = document.body.classList.contains("en") ? "en" : "fr";
    localStorage.setItem("omnidate-lang", lang);
    document.documentElement.lang = lang;
    updateLabel();
  });

  updateLabel();
})();
