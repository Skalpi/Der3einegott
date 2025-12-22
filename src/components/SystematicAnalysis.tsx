import React from 'react';
import { Info, CheckCircle, ExternalLink, Scroll, History, Target, Eye, BookOpen, Map, Landmark, Zap, Shield } from 'lucide-react';

const SystematicAnalysis: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      
      {/* Introduction */}
      <section className="bg-white rounded-2xl shadow-sm border border-stone-200 p-8 md:p-12">
        <div className="flex items-center space-x-3 mb-6">
          <Info className="h-8 w-8 text-amber-600" />
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-slate-900">
            Systematische Analyse zentraler theologischer Wahrheiten
          </h2>
        </div>
        <p className="text-slate-700 leading-relaxed text-lg italic border-l-4 border-amber-500 pl-6 py-2">
          Diese systematische Analyse legt dar, wie drei fundamentale Säulen des christlichen Glaubens – die trinitarische Natur Gottes, die Erfüllung messianischer Prophetie in Jesus Christus und die historische Glaubwürdigkeit der Heiligen Schrift – auf einem Fundament aus biblischer Offenbarung, historischer Evidenz und erfüllter Prophetie ruhen.
        </p>
      </section>

      {/* 1. Der biblische Beweis der Dreieinigkeit */}
      <section className="space-y-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold">1</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Der biblische Beweis der Dreieinigkeit</h2>
        </div>

        <div className="grid gap-8">
          <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
            <h3 className="text-xl font-bold mb-3 text-amber-800">1.1. Einleitende Analyse der Trinitätslehre</h3>
            <p className="text-slate-700">
              Gott ist ein Wesen, das in drei Personen existiert. Die Bibel lehrt keinen Tritheismus (drei Götter), sondern die Einheit des Wesens bei gleichzeitiger Unterscheidbarkeit der Personen. Ein Schlüsselbegriff ist hier <em>Echad</em> (Einheit in Vielfalt), wie es im Schema Israel (5. Mose 6,4) angedeutet wird.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-amber-800">1.2. Die Gottheit des Sohnes, Jesus Christus</h3>
            <div className="space-y-4 text-slate-700">
              <p>Jesus Christus beansprucht göttliche Privilegien: Sündenvergebung (Markus 2,5), Herrschaft über den Sabbat und das Recht auf Anbetung. In der Granville-Sharp-Regel (Titus 2,13) wird er explizit als „unser großer Gott und Heiland“ bezeichnet.</p>
              <p>Seine Werke sind Schöpferwerke: „Ohne ihn ist nicht eines geworden“ (Joh 1,3). Er ist der Erhalter, der alle Dinge durch das Wort seiner Macht trägt (Hebr 1,3).</p>
            </div>
          </div>

          {/* Expanded Holy Spirit Section */}
          <div className="bg-stone-50 p-8 rounded-xl border border-stone-200 space-y-6">
            <h3 className="text-2xl font-serif font-bold text-amber-800 flex items-center">
              <Zap className="h-6 w-6 mr-3" /> 1.3. Die Gottheit und Personalität des Heiligen Geistes
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-slate-700">
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 border-b pb-1">Beweis der Personalität</h4>
                <p className="text-sm leading-relaxed">Der Heilige Geist ist keine unpersönliche Energie (wie Strom), sondern eine Person mit:</p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li><strong>Intellekt:</strong> Er erforscht die Tiefen Gottes und weiß, was in Gott ist (1. Kor 2,10-11).</li>
                  <li><strong>Wille:</strong> Er teilt Gaben aus, „wie er will“ (1. Kor 12,11).</li>
                  <li><strong>Emotion:</strong> Er kann betrübt werden (Eph 4,30).</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold text-slate-900 border-b pb-1">Identität mit Jahweh</h4>
                <p className="text-sm leading-relaxed">Neutestamentliche Autoren identifizieren den Geist direkt mit dem Gott des Alten Testaments:</p>
                <ul className="text-sm list-disc pl-5 space-y-1">
                  <li>In <strong>Exodus 17,7</strong> wird gesagt, dass Israel <strong>Jahweh</strong> versuchte.</li>
                  <li>In <strong>Hebräer 3,7-9</strong> zitiert der Autor dies und sagt: „...wie der <strong>Heilige Geist</strong> spricht“.</li>
                  <li>Den Geist zu belügen, bedeutet Gott zu belügen (Apg 5,3-4).</li>
                </ul>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-stone-200 mt-4">
              <p className="text-sm font-semibold text-amber-900">Göttliche Attribute des Geistes:</p>
              <div className="grid grid-cols-3 gap-2 mt-2 text-xs text-slate-600">
                <div className="bg-stone-100 p-2 rounded text-center"><strong>Ewigkeit</strong> (Hebr 9,14)</div>
                <div className="bg-stone-100 p-2 rounded text-center"><strong>Allwissenheit</strong> (1. Kor 2,10)</div>
                <div className="bg-stone-100 p-2 rounded text-center"><strong>Allgegenwart</strong> (Ps 139,7)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Die Erfüllung messianischer Prophezeiungen */}
      <section className="space-y-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold">2</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Die Erfüllung messianischer Prophezeiungen</h2>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <p className="text-slate-800 text-lg mb-6 leading-relaxed">
            Hunderte spezifische Vorhersagen des Alten Testaments wurden in der Person Jesu Christi punktgenau erfüllt. Diese mathematisch unmögliche Koinzidenz beweist die göttliche Steuerung der Weltgeschichte.
          </p>
          <a 
            href="https://posttenebras-lux.de/prophetien/" 
            className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-amber-600 transition-all shadow-lg font-medium group"
          >
            Zur Datenbank der erfüllten Prophetien
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 3. Belege für die Glaubwürdigkeit der Bibel (Detailed expansion) */}
      <section className="space-y-12">
        <div className="flex items-center space-x-4 mb-6">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold">3</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Belege für die Glaubwürdigkeit der Bibel</h2>
        </div>

        <p className="text-slate-700 text-lg leading-relaxed bg-stone-50 p-6 rounded-xl border border-stone-200 italic">
          Die Glaubwürdigkeit der Heiligen Schrift stützt sich auf eine beeindruckende Fülle interner und externer Beweise, die ihre göttliche Inspiration und historische Genauigkeit unterstreichen.
        </p>

        <div className="grid gap-12">
          
          {/* 3.1 Ehrlichkeit */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-amber-800 flex items-center border-b border-stone-200 pb-2">
              <Shield className="h-6 w-6 mr-3" /> 1. Ehrlichkeit & Charakter der Berichte
            </h3>
            <div className="bg-white p-6 md:p-8 rounded-xl border border-stone-200 shadow-sm space-y-4 text-slate-700">
              <p>• <strong>Keine Heroisierung:</strong> Die Bibel berichtet schonungslos über die Sünden ihrer größten Leiter (Davids Ehebruch, Moses Zorn, Petrus' Verleugnung). Antike Texte dienten meist der Propaganda; die Bibel dient der Wahrheit.</p>
              <p>• <strong>Warnung vor Veränderung:</strong> Der Text selbst verbietet streng jede Hinzufügung oder Weglassung (Offb 22,18-19), was den Überlieferungsprozess ethisch band.</p>
            </div>
          </div>

          {/* 3.2 Thematische Einheit */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-amber-800 flex items-center border-b border-stone-200 pb-2">
              <Target className="h-6 w-6 mr-3" /> 2. Thematische & Mathematische Einheit
            </h3>
            <div className="bg-white p-6 md:p-8 rounded-xl border border-stone-200 shadow-sm space-y-4 text-slate-700">
              <p>Die Bibel ist kein Buch, sondern eine Bibliothek von 66 Büchern, geschrieben in 3 Sprachen auf 3 Kontinenten. Dennoch ist sie ein harmonisches Ganzes:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Typologie:</strong> Alttestamentliche Strukturen (wie die Stiftshütte) sind mathematisch-geometrische Schattenbilder auf die Person Jesu Christi.</li>
                <li><strong>Statistische Evidenz:</strong> Peter Stoner berechnete, dass die Wahrscheinlichkeit für die Erfüllung von nur 8 Prophetien 1 zu 10<sup>17</sup> beträgt. Dies entspricht der Fläche von Texas, bedeckt mit Silberdollarn (60cm hoch), wobei man blind den einen markierten Dollar finden müsste.</li>
              </ul>
            </div>
          </div>

          {/* 3.3 Historische Verankerung - MAJOR EXPANSION */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-amber-800 flex items-center border-b border-stone-200 pb-2">
              <Map className="h-6 w-6 mr-3" /> 3. Historische Verankerung & Qumran-Funde
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-4 shadow-inner">
                <h4 className="font-bold flex items-center text-slate-900 uppercase tracking-wider text-sm">
                  <Landmark className="h-4 w-4 mr-2 text-amber-600" /> Die Qumran-Revolution (1947)
                </h4>
                <div className="text-sm space-y-3 text-slate-700 leading-relaxed">
                  <p>Vor 1947 stammten unsere ältesten hebräischen Manuskripte aus dem 10. Jahrhundert n. Chr. Die Funde von Qumran (Totes Meer) lieferten Texte von ca. 125 v. Chr.</p>
                  <p><strong>Die Jesaja-Rolle (1QIsa):</strong> Diese fast 7,5 Meter lange Rolle überbrückt eine Lücke von 1000 Jahren Überlieferung. Das Ergebnis: Der Text ist zu <strong>95% wortwörtlich identisch</strong>. Die 5% Abweichung betreffen lediglich Rechtschreibung und Grammatik – keine einzige Lehre wurde verändert.</p>
                  <p>Dies beweist die übernatürliche Genauigkeit der jüdischen Schreiber (Sopherim), die sogar Buchstaben zählten, um Fehler auszuschließen.</p>
                </div>
              </div>
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-4 shadow-inner">
                <h4 className="font-bold flex items-center text-slate-900 uppercase tracking-wider text-sm">
                  <Scroll className="h-4 w-4 mr-2 text-amber-600" /> Archäologische Bestätigung
                </h4>
                <div className="text-sm space-y-3 text-slate-700 leading-relaxed">
                  <p><strong>Die Merenptah-Stele:</strong> Älteste außerbiblische Erwähnung Israels (1210 v. Chr.) als eigenständiges Volk.</p>
                  <p><strong>Prisma von Sanherib:</strong> Der assyrische König beschreibt die Belagerung Jerusalems (701 v. Chr.) und erwähnt König Hiskia. Er behauptet jedoch nicht, die Stadt eingenommen zu haben – eine exakte Übereinstimmung mit dem biblischen Bericht der Rettung.</p>
                  <p><strong>Jericho-Mauern:</strong> Die Ausgrabungen von Bryant Wood zeigen, dass die Mauern „nach außen“ kollabierten (einzigartig!) und dass die Stadt im Frühling (Erntezeit) verbrannt wurde – genau wie Josua 6 berichtet.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3.4 Augenzeugenschaft */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-amber-800 flex items-center border-b border-stone-200 pb-2">
              <Eye className="h-6 w-6 mr-3" /> 4. Unmittelbare Augenzeugenschaft
            </h3>
            <div className="bg-white p-6 md:p-8 rounded-xl border border-stone-200 shadow-sm space-y-4 text-slate-700">
              <p>• <strong>Historische Zeugen:</strong> Nicht-christliche Historiker wie <strong>Josephus Flavius</strong> und <strong>Tacitus</strong> bestätigen die Hinrichtung Jesu unter Pontius Pilatus und die Existenz einer wachsenden Gemeinde, die an seine Auferstehung glaubte.</p>
              <p>• <strong>Das Zeugnis des Blutes:</strong> Fast alle Apostel starben einen gewaltsamen Tod für ihr Zeugnis. Menschen sterben für das, was sie für wahr halten, aber niemand stirbt für eine Lüge, von der er weiß, dass sie erfunden ist.</p>
              <p>• <strong>Lukas' Detailgenauigkeit:</strong> Der Archäologe Sir William Ramsay, der ursprünglich skeptisch war, bezeichnete Lukas nach umfangreichen Forschungen als einen „Historiker ersten Ranges“.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Final Synthesis */}
      <section className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <h2 className="text-3xl font-serif font-bold mb-6 italic">Glaube basiert auf Evidenz</h2>
        <p className="text-stone-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Die Einheit von biblischer Offenbarung, historischer Archäologie und erfüllter Prophetie bildet eine Beweiskette, die den christlichen Glauben aus dem Bereich des Mythos in den Bereich der historisch belegten Wahrheit hebt. Gott hat sich in seinem Wort und in seinem Sohn Jesus Christus unmissverständlich offenbart.
        </p>
      </section>

    </div>
  );
};

export default SystematicAnalysis;