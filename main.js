
// Modules-DIV auswählen
var modulesDiv = document.getElementById("modules");

// Array, das die Reihenfolge der Module enthält
var order = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}, {id: 8}, {id: 9}, {id: 10}, {id: 11}, {id: 12}];
// Leeres DIV auswählen, in dem die Module hinzugefügt werden sollen
var teacherDiv = document.getElementById("teacher");

// Funktion zum Rendern der Module
function renderModules() {
  // Module-DIV leeren
  modulesDiv.innerHTML = "";

  // Durchsuche die Module und rendere passende Ergebnisse
  var searchText = searchInput.value.toLowerCase();
  var filteredModules = modules.filter(function (module) {
    return module.title.toLowerCase().includes(searchText);
  });

  // Rendere jedes gefilterte Modul
  filteredModules.forEach(function (module) {
    var moduleDiv = document.createElement("div");
    moduleDiv.className = "module";
    moduleDiv.innerHTML = "<h3>" + module.title + "</h3>";

    // Klick-Event für jedes Modul hinzufügen
    moduleDiv.addEventListener("click", function () {
      // Überprüfe, ob das angeklickte Modul mit dem nächsten Modul in der Reihenfolge übereinstimmt
      if (module.id === order[0].id) {
        // Hole den Inhalt des Moduls basierend auf dem aktuellen Fall
        var content = getModuleContent(module.id);

        // Füge den Inhalt des Moduls dem leeren DIV hinzu
        teacherDiv.innerHTML += content;

        // Entferne das erste Element aus dem order-Array
        order.shift();

        // Entferne das Modul aus der Liste
        modules = modules.filter(function (m) {
          return m.id !== module.id;
        });

        // Rendere die Module erneut
        renderModules();
      } else {
        // Füge die CSS-Klassen "shake" und "highlight" hinzu, um die Animationen auszulösen
        moduleDiv.classList.add("shake");

        // Entferne die CSS-Klassen nach einer kurzen Verzögerung, um die Animationen abzuschließen
        setTimeout(function () {
          moduleDiv.classList.remove("shake");
        }, 1000);
      }
    });

    // Füge das Modul dem Modules-DIV hinzu
    modulesDiv.appendChild(moduleDiv);
  });
}

// Funktion zum Abrufen des Modulinhalts basierend auf der Modul-ID
function getModuleContent(moduleId) {
  // Hier können Sie Ihre individuellen Inhalt für jedes Modul basierend auf der Modul-ID definieren
  // Zum Beispiel können Sie eine switch-Anweisung verwenden, um den Inhalt für jedes Modul festzulegen
  switch (moduleId) {
    case 1:
      // Inhalt für Modul 1 basierend auf dem aktuellen Fall
      return "<h4>A. Anspruch entstanden</h4>Der Anspruch aus § 433 I 1 BGB müsste zunächst entstanden sein.";
    case 2:
      // Inhalt für Modul 2 basierend auf dem aktuellen Fall
      return "<h4>I. Einigung</h4>A und B müssten einen Kaufvertrag geschlossen haben. Dies setzt zwei übereinstimmende Willenserklärungen, namentlich Antrag (§ 145 BGB) und Annahme (§ 147 BGB), voraus.";
    case 3:
      // Inhalt für Modul 3 basierend auf dem aktuellen Fall
      return "<h4>1. Antrag</h4>Der Antrag könnte durch A erfolgt sein (§ 145 BGB), indem sie gegenüber B geäußert hat: „Eine Tüte Chips, bitte.“ Fraglich ist, ob die Erklärung auch eine Angabe zum Kaufpreis beinhaltet. Eine ausdrückliche Angabe zum Kaufpreis enthält die Äußerung nicht. Jedoch könnte sich eine solche konkludent, d.h. durch schlüssiges Verhalten, aus den Umständen der Äußerung ergeben. Die Tüte Chips hat einen Verkaufspreis von 2,50€, der im Kiosk dank eines Schildchens vor dem Fach des Regals, in dem sich die Chips befanden, zu sehen war. Darauf hat A nach den Umständen ihrer Äußerung Bezug genommen. Damit ist der Kaufpreis objektiv für jedermann erkennbar und damit bestimmbar. Ein wirksamer Antrag liegt vor.";
    case 4:
        // Inhalt für Modul 4 basierend auf dem aktuellen Fall
        return "<h4>2. Annahme</h4>Indem B „2,50 Euro, bitte“ sagt, erklärt er zwar nicht ausdrücklich, aber aus Sicht eines objektiven Drittens in der Position des Empfängers konkludent sein vorbehaltloses Einverständnis mit dem Antrag der A. Eine wirksame Annahme durch B liegt somit vor.";
    case 5:
        // Inhalt für Modul 4 basierend auf dem aktuellen Fall
        return "<h4>II. Wirksamkeitshindernisse</h4>Dem Kaufvertrag stehen keine Wirksamkeitshindernisse (= rechtshindernde Einwendungen) entgegen.";
    case 6:
        // Inhalt für Modul 4 basierend auf dem aktuellen Fall
        return "<h4>B. Anspruch erloschen</h4>Vorliegend könnte der Anspruch durch Erfüllung gem. § 362 I BGB erloschen sein.";
    case 7:
        // Inhalt für Modul 4 basierend auf dem aktuellen Fall
        return "<h4>I. Bewirken der geschuldeten Leistung</h4>Die geschuldete Leistung müsste bewirkt worden sein. B schuldet A gem. § 433 I 1 BGB Übergabe und Übereignung der Tüte Chips.";
    case 8:
        // Inhalt für Modul 4 basierend auf dem aktuellen Fall
        return "<h4>1. Übereignung</h4>Hier kommt eine Übereignung nach § 929 S. 1 BGB in Betracht.Inhalt für Modul 8 im aktuellen Fall";
    case 9:
        // Inhalt für Modul 4 basierend auf dem aktuellen Fall
        return "<h4>a. dingliche Einigung</h4>Eine dingliche Einigung besteht aus zwei übereinstimmenden und wirksamen Willenserklärungen, namentlich Antrag (§ 145 BGB) und Annahme (§ 147 BGB). Inhalt der dinglichen Einigung ist, dass A Eigentümerin der Tüte Chips werden soll. Indem B der A die Chipstüte entgegenstreckt und A die Chipstüte entgegennimmt, haben sich A und B konkludent darauf geeinigt, dass das Eigentum daran auf A übergehen soll.";
    case 10:
        // Inhalt für Modul 4 basierend auf dem aktuellen Fall
        return "<h4>b. Übergabe</h4>Die Chipstüte ist eine bewegliche Sache. Eine Übergabe setzt voraus, dass B den Besitz an der Chipstüte vollständig aufgibt und A den Besitz (§ 854 BGB) auf Veranlassung des B erworben hat. B hat A die Tüte Chips gegeben und ihr so den unmittelbaren Besitz nach § 854 I BGB verschafft. Eine Übergabe ist erfolgt.";
    case 11:
        // Inhalt für Modul 4 basierend auf dem aktuellen Fall
        return "<h4>c. Verfügungsbefugnis</h4>Verfügungsbefugt ist insbesondere der in seiner Verfügungsmacht unbeschränkte Eigentümer. Da nach § 1006 I 1 BGB jedenfalls vermutet wird, dass Besitzer B auch Eigentümer der Tüte Chips ist, ist er somit zur Verfügung befugt.";
    case 12:
        // Inhalt für Modul 4 basierend auf dem aktuellen Fall
        return "<h4>C. Anspruch durchsetzbar</h4>Da der Anspruch erloschen ist, kommt es auf die Durchsetzbarkeit und etwaige Einreden nicht an.";     
        // Weitere Module hier hinzufügen
    default:
      return "";
  }
}

// Event-Listener für die Suchleiste hinzufügen
searchInput.addEventListener("input", renderModules);

// Rendere die Module beim Laden der Seite
renderModules();

