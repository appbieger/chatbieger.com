// Spam-Schutz: E-Mail-Adresse und Telefonnummer stehen im HTML nur
// rückwärts in data-Attributen und werden erst hier im Browser zu
// klickbaren Links zusammengesetzt — einfache Crawler lesen sie so nicht.
document.addEventListener("DOMContentLoaded", function () {
  var rev = function (s) { return s.split("").reverse().join(""); };

  document.querySelectorAll("[data-em-user]").forEach(function (el) {
    var addr = rev(el.dataset.emUser) + "@" + rev(el.dataset.emDomain);
    var a = document.createElement("a");
    a.href = "mailto:" + addr;
    a.textContent = addr;
    el.replaceChildren(a);
  });

  document.querySelectorAll("[data-tel]").forEach(function (el) {
    var a = document.createElement("a");
    a.href = "tel:" + rev(el.dataset.tel);
    a.textContent = rev(el.dataset.telAnzeige);
    el.replaceChildren(a);
  });
});
