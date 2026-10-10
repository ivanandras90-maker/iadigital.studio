IVÁN ANDRÁS DIGITAL STUDIO — V30

Admin felület: WordPress-szerű tartalomkezelés + GrapesJS vizuális oldalépítő + GitHub publikálási kapcsolat.

HASZNÁLAT
1. A teljes mappát töltsd fel a weboldal GitHub-repójába.
2. Nyisd meg az admin.html oldalt, majd lépj be az admin jelszóval.
3. A Vizuális szerkesztő menüben szerkeszthetsz blokkokat, és elmentheted a piszkozatot.
4. A GitHub / Publikálás menüben add meg a GitHub felhasználót/szervezetet, repository nevét és branch-et.
5. A GitHub tokenhez hozz létre fine-grained tokent, kizárólag a megfelelő repóhoz, Contents: Read and write jogosultsággal. A token csak sessionStorage-ban él, a projektfájlokba nem kerül bele. Kilépéskor törlődik.
6. A kapcsolat tesztelése után a Vizuális szerkesztőből publikálhatsz. Alapértelmezett cél a visual-editor-preview.html, így az index.html nem változik.

FONTOS
- A vizuális szerkesztő önálló HTML-oldalt állít elő. A jelenlegi főoldal összetett JavaScript-funkcióit nem alakítja át automatikusan szerkeszthető blokkokká.
- Az index.html közvetlen felülírása külön jóváhagyást kér, és előtte backups/ könyvtárba mentést készít az eredeti index.html-ről. Ennek ellenére a főoldal lecserélése megváltoztathatja vagy eltávolíthatja az eredeti működést; először a visual-editor-preview.html fájlt ellenőrizd.
- A GitHub Pages telepítésének frissülése néhány percet vehet igénybe.
- A GrapesJS CSS és JavaScript külső CDN-ről töltődik be, ezért a vizuális szerkesztő használatához internetkapcsolat kell.
- A kliensoldali admin jelszó nem tekinthető valódi szerveroldali biztonsági védelemnek. A GitHub Pages statikus adminfelületét ne kezeld bizalmas adatokhoz készült, erős hitelesítésű rendszerként.

Demo admin jelszó az eredeti projektben: digital2026

V31 javítás: a vizuális szerkesztő nem függ külső GrapesJS CDN-től; offline/közvetlen fájlmegnyitás esetén is betölt egy egyszerű vizuális szerkesztőt.

V32 VISUAL EDITOR FIXES (2026-10-09)
- Fixed visual editor CSS state: setStyle now applies and persists styles instead of being a no-op.
- Preserved header and footer when loading the current homepage into the editor.
- Added basic drag-and-drop reordering for common content elements in the preview iframe.
- Added text/background color controls to the visual editor.
- Hardened draft CSS parsing against malformed local browser data.
- Improved UTF-8 decoding for the GitHub index backup flow.
- Validated admin JavaScript syntax with Node.js.

Important limitations:
- GitHub publishing still requires testing with the user's actual repository/token; no real commit was made during this code review.
- The editor exports a standalone HTML document and cannot guarantee preservation of all application-specific scripts or behavior from the original homepage. Publish to a preview file first.
- Browser-local drafts are stored in localStorage on this browser/device; they are not a server-side CMS backup.


V35: enhanced visual editor. See EDITOR-V35-NOTES.txt for behavior and limitations.


ADMIN LÁTOGATOTTSÁGI STATISZTIKA
- Az adminfelület bal menüjében nyisd meg: Látogatottsági statisztika.
- Hozz létre egy GoatCounter webhelyet és API-kulcsot olvasási/statisztikai jogosultsággal.
- Add meg a webhelykódot és az API-kulcsot az adminfelületen. Az API-kulcs csak sessionStorage-ban marad, a munkamenet végéig.
- Az analytics-tracking.js fájlban cseréld le a SET_YOUR_GOATCOUNTER_CODE értéket a saját webhelykódodra.
- A követőkód a nyilvános oldalakon mér, de számláló nem jelenik meg a látogatóknak; az adatok az admin Statisztika menüjében láthatók.
- A statisztikák megjelenítéséhez internetkapcsolat és érvényes API-kulcs kell.
