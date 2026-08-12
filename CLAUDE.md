# CLAUDE.md

Dieses Repo ist die **statische Marketing-Landing-Page für chatbieger.com**,
gehostet über **GitHub Pages**. Es ist **öffentlich** und bewusst unabhängig
vom Produkt-Monorepo (`~/chatbieger-app`) — kein gemeinsamer Build, keine
npm-Workspace-Verknüpfung.

## Quelle der Wahrheit für Inhalte und Design

Mission, Messaging und Design-Assets leben **nicht hier**, sondern im
Produkt-Repo. Vor jeder inhaltlichen oder gestalterischen Änderung dort
nachlesen (Session am besten mit `claude --add-dir ~/chatbieger-app` starten,
oder die Dateien per absolutem Pfad lesen):

- `~/chatbieger-app/docs/PR-FAQ.md` — Mission Statement, Pressemitteilung,
  FAQs. **Nur der Pressemitteilungs-Teil und die externen FAQs
  (Kunden-/Anwendersicht) sind Grundlage für die Website.**
- `~/chatbieger-app/design/export/` — exportierte Design-Assets (u. a. Favicon)
- `~/chatbieger-app/chatbieger_logo.sketch` — Logo-Quelldatei

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

Wenn die PR-FAQ im Produkt-Repo überarbeitet wurde: die Seite gegen
`~/chatbieger-app/docs/PR-FAQ.md` abgleichen und Abweichungen in Messaging,
Wording und Feature-Beschreibung auflisten, bevor etwas geändert wird.

## Rahmenbedingungen

- **Sprache:** Deutsch (wie das Produkt — Prototyp ist bewusst German-only)
- **Statisch:** kein Framework-Zwang; was immer gebaut wird, muss als
  statische Dateien auf GitHub Pages laufen (kein Server, keine API-Keys
  im Client)
- **Produktname:** ChatBieger. Die Domain ist chatbieger.com.
  Das Beispiel-Unternehmen "MBB" aus dem Produkt-Repo ist ein Demo-Tenant,
  nicht der Produktname.
