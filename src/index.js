const fs = require('fs'); // file system, zm lesen des dateisystem
const path = require('path'); // path, zum arbeiten mit dateipfaden

// benutzername genrator
// beispiele benutzer : shinysunflower555555 oder FlyingAutomobile34567
//was benötigen wir ?
// - eine funktion um die werte aus der json datei zu lesen 
/**
 * @function getWords
 * @description reads words from json file
 * @returns { object }
 */

function getWords ()
{
    const json = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'words.json'), 'utf-8'));

    return json;
}
getWords();

// -Eine Funktion um die zufällige Nummer hinter dem Namen zu generieren
// -Eine Funktion mit der wir den ersten Buchstaben des jeweligen Wirtes groß schreiben (PascalCase)
// -Eine Funktion mit der wir den benutzernamen generieren und auf die ergebnisse der anderen funktion zugreifen
// -Eine export, um die Applikation in einer anderen datei zu nutzen



