# CLAUDE.md

Dieses Repo ist die **statische Marketing-Landing-Page für chatbieger.com**,
gehostet über **GitHub Pages**. Es ist **öffentlich** und bewusst unabhängig
vom Produkt-Monorepo (`~/chatbieger-app`) — kein gemeinsamer Build, keine
npm-Workspace-Verknüpfung.

## Stand: Landing für v2 ist live

Die Baustellen-Phase ist vorbei: `index.html` ist die aus der v2-Vision
abgeleitete Landingpage. Die vollständige v1-Website liegt weiterhin im
Branch **`v1.0`** dieses Repos.

Preise und Tarifaussagen kommen aus den Entscheidungen des Produkt-Repos
(`docs/entscheidungen/0004` Preis, `0006` Datenhoheit als Tarifgrenze) —
Änderungen dort werden hier nachgezogen, nie hier erfunden. Der
Professional-Preis steht bewusst öffentlich auf der Seite; Enterprise
bleibt „auf Anfrage".

## Quelle der Wahrheit für Inhalte und Design

Mission, Messaging und Design-Assets leben **nicht hier**, sondern im
Produkt-Repo. Vor jeder inhaltlichen oder gestalterischen Änderung dort
nachlesen (Session am besten mit `claude --add-dir ~/chatbieger-app` starten,
oder die Dateien per absolutem Pfad lesen):

- `~/chatbieger-app/docs/vision.md` — die Vision für v2. Solange die noch
  nicht ausgefüllt ist, gibt es keine belastbare Grundlage für Website-Inhalte.
- `~/chatbieger-app/docs/learnings-v1.md` — was v1 gelehrt hat (Hintergrund,
  keine Vorlage für Website-Texte)
- `~/chatbieger-app/marke/` — Logo-Quelldatei und Favicon
- Die alte PR-FAQ, aus der die v1-Website abgeleitet war, liegt im
  Produkt-Repo im Branch `v1.0` unter `docs/PR-FAQ.md`.

Assets, die die Website braucht, werden von dort **hierher kopiert**
(GitHub Pages muss alles selbst ausliefern) — aber die Quelle bleibt drüben.
Bei Abweichungen gewinnt das Produkt-Repo; hier nachziehen, nie umgekehrt.

## Dieses Repo ist öffentlich — was hier NICHT hingehört

- Interne FAQs, Roadmap- und Strategie-Überlegungen aus der PR-FAQ
  (die Website ist eine redaktionelle *Ableitung*, keine Kopie)
- Alles aus `tenants/` (Kundendaten des Produkt-Repos), Secrets, `.env`-Werte
- Interna über Deployment, Architektur oder ausgeschlossenen Scope des Produkts

Im Zweifel: Inhalte so schreiben, wie sie ein Interessent auf einer
öffentlichen Produktseite erwarten würde.

## Drift-Check

Entfällt im Baustellen-Modus. Sobald `~/chatbieger-app/docs/vision.md`
steht, wird die Website aus der neuen Vision heraus neu gebaut — nicht aus
dem v1-Stand fortgeschrieben.

## Rahmenbedingungen

- **Sprache:** Deutsch (wie das Produkt — Prototyp ist bewusst German-only)
- **Statisch:** kein Framework-Zwang; was immer gebaut wird, muss als
  statische Dateien auf GitHub Pages laufen (kein Server, keine API-Keys
  im Client)
- **Produktname:** ChatBieger. Die Domain ist chatbieger.com.
  Das Beispiel-Unternehmen "MBB" aus dem Produkt-Repo ist ein Demo-Tenant,
  nicht der Produktname.
