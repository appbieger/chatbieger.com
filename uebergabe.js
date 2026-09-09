// Die stille Übergabe auf den Segment-Seiten (0045).
//
// Auf der Startseite wächst das Adressfeld zum Chatfenster — dort ist Platz
// dafür. Hier steht das Formular unten in der Preis-Sektion; ein wachsendes
// Fenster hätte keinen Ort. Was bleibt, ist der Kern: Wer abschickt, sieht
// nicht die Seite wechseln, sondern ChatBieger anfangen. Die Pille bleibt
// dieselbe, darüber erscheint seine Tippanzeige, und in dieser Ruhe wechselt
// der Server.
//
// Ohne JavaScript bleibt das Formular ein GET. Wer Bewegung abbestellt hat,
// geht den geraden Weg.
(function () {
  var formulare = document.querySelectorAll("form.start[data-uebergabe]");
  if (!formulare.length) return;

  formulare.forEach(function (form) {
    var feld = form.querySelector('input[name="start"]');
    var knopf = form.querySelector('button[type="submit"]');
    if (!feld || !knopf) return;
    var laeuft = false;

    form.addEventListener("submit", function (ereignis) {
      if (laeuft) { ereignis.preventDefault(); return; }
      if (!form.checkValidity()) return; // der Browser meldet es selbst
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      ereignis.preventDefault();
      laeuft = true;

      var ziel = form.action + "?start=" + encodeURIComponent(feld.value.trim());
      // Das Dokument liegt im Cache, bevor wir hingehen — die Sekunde der
      // Bewegung ist die Ladezeit.
      var vor = document.createElement("link");
      vor.rel = "prefetch";
      vor.as = "document";
      vor.href = ziel;
      document.head.appendChild(vor);

      // Die eigene Zeile bleibt stehen: Was ich gesagt habe, verschwindet nicht.
      var lauf = document.createElement("div");
      lauf.className = "uebergabe-lauf";
      lauf.setAttribute("aria-hidden", "true");
      var meins = document.createElement("div");
      meins.className = "uebergabe-zeile meins";
      meins.textContent = feld.value.trim();
      lauf.appendChild(meins);
      var reihe = form.querySelector(".start-row") || form;
      reihe.parentNode.insertBefore(lauf, reihe);

      var stand = form.querySelector(".uebergabe-stand");
      if (!stand) {
        stand = document.createElement("p");
        stand.className = "uebergabe-stand sr-only";
        stand.setAttribute("role", "status");
        form.appendChild(stand);
      }
      stand.textContent = "Einen Moment – ChatBieger übernimmt.";

      feld.value = "";
      feld.readOnly = true;
      feld.placeholder = "Antworten …";
      knopf.setAttribute("aria-disabled", "true");

      window.setTimeout(function () {
        var seins = document.createElement("div");
        seins.className = "uebergabe-zeile seins";
        seins.innerHTML =
          '<img src="chatbieger-logo.png" alt="" width="22" height="22">' +
          '<span class="uebergabe-punkte"><i></i><i></i><i></i></span>';
        lauf.appendChild(seins);
      }, 500);

      window.setTimeout(function () { window.location.assign(ziel); }, 1900);
    });
  });
})();
