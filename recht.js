/* Lernbuddy – Reiter „KI & Recht“
   Stand der Recherche: 19. Oktober 2026. Keine Rechtsberatung.
   Bitte vor jedem Schuljahr prüfen und den Stand aktualisieren. */

const RECHT_STAND = "19. Oktober 2026";

/* Fallbeispiele für den Check „Erlaubt, mit Absprache oder tabu?“ */
const SZENARIEN = [
  { fall: "Du lässt dir Osmose von der KI deines Schulzugangs noch einmal mit einem Alltagsbeispiel erklären.",
    antwort: "gruen", erklaerung: "Das ist erlaubt und sinnvoll. Du nutzt ein freigegebenes Tool und gibst keine persönlichen Daten ein. Prüfe die Erklärung trotzdem mit deinem Heft." },
  { fall: "Du fotografierst dein Arbeitsblatt mit Namen und Klasse und lädst es in eine private KI-App hoch.",
    antwort: "rot", erklaerung: "Name und Klasse sind personenbezogene Daten. Sie gehören nicht in Tools, die die Schule nicht freigegeben hat. Außerdem kann das Arbeitsblatt urheberrechtlich geschützt sein." },
  { fall: "Für deine GFS lässt du dir von der KI Rückfragen zu deiner Gliederung stellen und gibst das im Quellenverzeichnis an.",
    antwort: "gelb", erklaerung: "Das ist in Ordnung, wenn deine Lehrkraft KI-Hilfe für die GFS zulässt. Sprich es vorher ab und kennzeichne genau, wofür du die KI genutzt hast." },
  { fall: "Du gibst einen KI-Text als deine eigene Hausarbeit ab, ohne es anzugeben.",
    antwort: "rot", erklaerung: "Wer KI-Texte als eigene Leistung ausgibt, kann einen Täuschungsversuch begehen. KI-Nutzung muss gekennzeichnet werden." },
  { fall: "Du bearbeitest mit einer KI ein Foto einer Mitschülerin und teilst es in der Klassengruppe.",
    antwort: "rot", erklaerung: "Fotos anderer darfst du ohne Einwilligung nicht bearbeiten und verbreiten (Recht am eigenen Bild). Manipulierte Bilder können zudem strafbar sein und müssen nach der KI-Verordnung als KI-erzeugt gekennzeichnet werden." },
  { fall: "Du schreibst der KI, dass du wegen deiner ADHS-Diagnose Lernprobleme hast, und bittest um einen Lernplan.",
    antwort: "gelb", erklaerung: "Gesundheitsdaten sind besonders geschützt. In Schul-KI-Anwendungen dürfen sie nicht verarbeitet werden. Formuliere allgemein, zum Beispiel: „Ich kann mich schlecht lange konzentrieren.“" },
  { fall: "Du nutzt in der Klassenarbeit heimlich eine KI-App auf dem Handy.",
    antwort: "rot", erklaerung: "Nicht zugelassene Hilfsmittel in einer Klassenarbeit sind eine Täuschung. KI ist nur dann erlaubt, wenn die Lehrkraft sie ausdrücklich als Hilfsmittel zulässt." },
  { fall: "Du lässt dir aus deinem eigenen Hefteintrag zehn Quizfragen erstellen und beantwortest sie ohne Hilfe.",
    antwort: "gruen", erklaerung: "Genau so unterstützt KI das Lernen: Sie liefert Übungsfragen, du rufst das Wissen selbst ab." }
];

/* Quellen des Reiters */
const RECHT_QUELLEN = [
  ["Verordnung (EU) 2024/1689 (KI-Verordnung), Amtsblatt der EU, 12.7.2024", "https://eur-lex.europa.eu/eli/reg/2024/1689/oj?locale=de"],
  ["Verordnung (EU) 2026/1744 (Digital-Omnibus zur KI) vom 8.7.2026, in Kraft seit 27.7.2026", "https://eur-lex.europa.eu/eli/reg/2026/1744/oj?locale=de"],
  ["KI-Verordnung, Anhang III (Hochrisiko-Bereiche, Nr. 3 Bildung), dejure.org", "https://dejure.org/gesetze/KI-Verordnung/Anhang_III.html"],
  ["activemind.legal: Änderungen der KI-Verordnung durch den Digitalen Omnibus", "https://www.activemind.legal/de/guides/aenderungen-ki-verordnung/"],
  ["Ministerium für Kultus BW: Künstliche Intelligenz im Unterricht (abgerufen 19.10.2026)", "https://km.baden-wuerttemberg.de/de/schule/digitalisierung/kuenstliche-intelligenz-im-unterricht"],
  ["Ministerium für Kultus BW: KI-Chatbot für Schulen geht an den Start, Pressemitteilung vom 13.10.2025", "https://km.baden-wuerttemberg.de/de/service/pressemitteilung/pid/ki-chatbot-fuer-schulen-geht-an-den-start"],
  ["ZSL Baden-Württemberg: FAQ KI und Schule (abgerufen 19.10.2026)", "https://zsl-bw.de/,Lde/Startseite/lernen-ueberall/ki-faq"],
  ["LMZ Baden-Württemberg: ChatGPT im Unterricht – was Lehrkräfte wissen sollten (Stand 26.7.2024)", "https://www.lmz-bw.de/lmz-spotlights/chatgpt-im-unterricht-was-lehrkraefte-wissen-sollten"],
  ["LfDI Baden-Württemberg: Rechtsgrundlagen im Datenschutz beim Einsatz von KI, Diskussionspapier Version 2.0 vom 17.10.2024", "https://www.baden-wuerttemberg.datenschutz.de/rechtsgrundlagen-datenschutz-ki/"],
  ["KMK: Handlungsempfehlung für die Bildungsverwaltung zum Umgang mit KI in schulischen Bildungsprozessen, Beschluss vom 10.10.2024", "https://cdn.table.media/assets/wp-content/uploads/2024/10/10195511/2024_10_10-Handlungsempfehlung-KI.pdf"],
  ["CMS Hasche Sigle: Urheberrechtsschutz oder frei verfügbar? Zwei Gerichte entscheiden über KI-Inhalte (14.4.2026), zu AG München, Az. 142 C 9786/25, und LG Frankfurt, Az. 06 O 401/25", "https://cms.law/de/deu/legal-updates/urheberrechtsschutz-oder-frei-verfuegbar-zwei-gerichte-entscheiden-ueber-ki-inhalte"],
  ["Datenschutz-Grundverordnung (DSGVO), Art. 6, 8, 9 und 22", "https://eur-lex.europa.eu/eli/reg/2016/679/oj?locale=de"]
];

/* Baustein zum Kennzeichnen von KI-Nutzung */
const KENNZEICHNUNG = "Hinweis zur KI-Nutzung: Ich habe [Tool, z. B. fobizz] am [Datum] genutzt, um [wofür, z. B. Rückfragen zu meiner Gliederung zu erhalten]. Alle Formulierungen und Ergebnisse habe ich selbst geprüft und überarbeitet. Nicht genutzt habe ich KI für [z. B. das Schreiben des Textes].";
