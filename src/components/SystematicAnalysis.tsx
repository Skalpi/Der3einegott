import React from 'react';
import { Info, CheckCircle, ExternalLink, Scroll, History, Target, Eye, BookOpen, Map, Landmark } from 'lucide-react';

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

      {/* 1. Trinität (Bestehend & Fundiert) */}
      <section className="space-y-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold">1</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Der biblische Beweis der Dreieinigkeit</h2>
        </div>
        <div className="grid gap-6">
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-amber-800 flex items-center">
              <BookOpen className="h-5 w-5 mr-2" /> 1.1. Einleitende Analyse
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Die Lehre von der Dreieinigkeit definiert das Wesen Gottes als einen einzigen Gott, der in drei distinkten, aber untrennbaren Personen existiert: Vater, Sohn und Heiliger Geist. In Johannes 1,1 wird das Wort (Jesus) als Gott identifiziert, während Matthäus 28,19 die Taufe auf den einen Namen (Singular) der drei Personen befiehlt.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-amber-800 flex items-center">
              <History className="h-5 w-5 mr-2" /> 1.2. Gottheit des Sohnes & des Geistes
            </h3>
            <p className="text-slate-700 leading-relaxed">
              Jesus Christus besitzt Titel (Kyrios), Attribute (Ewigkeit, Sündlosigkeit) und Werke (Schöpfung), die allein Gott zustehen. Der Heilige Geist wirkt als göttliche Person, die spricht, leitet und im Gebet vertritt (Römer 8,26).
            </p>
          </div>
        </div>
      </section>

      {/* 2. Die Erfüllung messianischer Prophezeiungen (Kompakt nach Wunsch) */}
      <section className="space-y-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold">2</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Die Erfüllung messianischer Prophezeiungen</h2>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <p className="text-slate-800 text-lg mb-6 leading-relaxed">
            Es gibt eine überwältigende Fülle an erfüllter Prophetie, die die göttliche Inspiration der Bibel bezeugt. Hunderte spezifische Vorhersagen des Alten Testaments erfüllten sich wortwörtlich in der Person Jesu Christi.
          </p>
          <a 
            href="https://posttenebras-lux.de/prophetien/" 
            className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-amber-600 transition-all shadow-lg font-medium group"
          >
            Ausführliche Analyse der Prophetien ansehen
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 3. Belege für die Glaubwürdigkeit der Bibel (Detailliert) */}
      <section className="space-y-12">
        <div className="flex items-center space-x-4 mb-6">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold">3</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Belege für die Glaubwürdigkeit der Bibel</h2>
        </div>

        <p className="text-slate-700 text-lg leading-relaxed bg-stone-50 p-6 rounded-xl border border-stone-200 italic">
          Die Glaubwürdigkeit der Heiligen Schrift stützt sich auf eine beeindruckende Fülle interner und externer Beweise, die ihre göttliche Inspiration und historische Genauigkeit unterstreichen. Im Folgenden werden diese Belege detailliert nach den geforderten Kategorien aufgeschlüsselt:
        </p>

        <div className="grid gap-12">
          
          {/* 3.1 Ehrlichkeit */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-amber-800 flex items-center border-b border-stone-200 pb-2">
              <Scroll className="h-6 w-6 mr-3" /> 1. Ehrlichkeit der Berichte der Bibel
            </h3>
            <div className="bg-white p-6 md:p-8 rounded-xl border border-stone-200 shadow-sm space-y-4 text-slate-700">
              <p>• <strong>Keine Idealisierung:</strong> Während antike Herrscher (z.B. assyrische Könige) niemals Niederlagen eingestanden, berichtet die Bibel offen über Versagen, Sünden und Gerichtsurteile über Israel.</p>
              <p>• <strong>Offenlegung von Sünden:</strong> Die Schrift beschreibt die „Verdorbenheit des Menschen“ und spart schwere Fehler zentraler Figuren wie Abraham, Jakob oder David nicht aus.</p>
              <p>• <strong>Selbstzeugnis der Unzulänglichkeit:</strong> Das Gesetz (Tora) wird als „Spiegel“ beschrieben, der die sündige Natur des Menschen ans Licht bringt, anstatt ihn fälschlich gerecht darzustellen.</p>
              <p>• <strong>Warnung vor Fälschung:</strong> Strenge Warnungen davor, Worte hinzuzufügen oder wegzunehmen, dokumentieren den hohen Anspruch an die Unverfälschtheit.</p>
            </div>
          </div>

          {/* 3.2 Thematische Einheit */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-amber-800 flex items-center border-b border-stone-200 pb-2">
              <Target className="h-6 w-6 mr-3" /> 2. Thematische Einheit
            </h3>
            <div className="bg-white p-6 md:p-8 rounded-xl border border-stone-200 shadow-sm space-y-4 text-slate-700">
              <p>Trotz 1600 Jahren Entstehungszeit und ca. 40 Autoren weist die Bibel eine tiefgreifende Harmonie auf:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Vom Schatten zur Wirklichkeit:</strong> Typologie (Stiftshütte, Opfersystem) als Schattenbilder auf die Wirklichkeit in Christus.</li>
                <li><strong>Siebenteiligkeit:</strong> Struktur aus 7 komplementären Teilen (Tora, Propheten, Schriften; Evangelien, Apg, Briefe, Offenbarung).</li>
                <li><strong>Messianische Prophetie:</strong> Über 300 präzise Vorhersagen erfüllten sich wortwörtlich.</li>
                <li><strong>Mathematische Unmöglichkeit von Zufall:</strong> Wahrscheinlichkeit für 8 Prophetien: 1 zu 10<sup>17</sup>. Bei 48 Prophetien: 1 zu 10<sup>157</sup>. Ein Zufall ist faktisch ausgeschlossen.</li>
              </ul>
            </div>
          </div>

          {/* 3.3 Historische Verankerung */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-amber-800 flex items-center border-b border-stone-200 pb-2">
              <Map className="h-6 w-6 mr-3" /> 3. Historische Verankerung
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-4">
                <h4 className="font-bold flex items-center text-slate-900">
                  <Landmark className="h-4 w-4 mr-2" /> Archäologie & Funde
                </h4>
                <div className="text-sm space-y-3 text-slate-700">
                  <p><strong>Jericho:</strong> Mauern stürzten „nach außen“ (Rampe für Israel). Stadt verbrannt, nicht geplündert. Haus der Rahab blieb stehen.</p>
                  <p><strong>Avaris:</strong> Überreste semitischer Siedler („Proto-Israeliten“), 12 Gräber und Statue eines Mannes im „bunten Gewand“ (Joseph-Hinweis).</p>
                  <p><strong>Alphabet-Schrift:</strong> Funde im Sinai (1600 v. Chr.) belegen hebräische Buchstabenschrift (Proto-Sinaitisch), untermauert Mose-Autorschaft.</p>
                </div>
              </div>
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-4">
                <h4 className="font-bold flex items-center text-slate-900">
                  <Scroll className="h-4 w-4 mr-2" /> Dokumente & Stelen
                </h4>
                <div className="text-sm space-y-3 text-slate-700">
                  <p><strong>Qumran:</strong> Jesajarolle (125 v. Chr.) beweist buchstabengetreue Überlieferung über 1000 Jahre hinweg.</p>
                  <p><strong>Septuaginta:</strong> Griechische Übersetzung (280 v. Chr.) belegt Existenz der Prophezeiungen lange vor Christus.</p>
                  <p><strong>Israel-Stelen:</strong> Berlin-Sockel (1360 v. Chr.) und Merenptah-Stele (1210 v. Chr.) erwähnen „Israel“ namentlich im Land Kanaan.</p>
                  <p><strong>Prisma von Sanherib:</strong> Bestätigt König Hiskia und die Rettung Jerusalems, exakt wie biblisch berichtet.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3.4 Augenzeugenschaft */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-amber-800 flex items-center border-b border-stone-200 pb-2">
              <Eye className="h-6 w-6 mr-3" /> 4. Augenzeugenschaft
            </h3>
            <div className="bg-white p-6 md:p-8 rounded-xl border border-stone-200 shadow-sm space-y-4 text-slate-700">
              <p>• <strong>Lukas als Präzisionshistoriker:</strong> Geographische und politische Details (William Ramsay) bis in kleinste Einzelheiten korrekt.</p>
              <p>• <strong>Zeitnahe Niederschrift:</strong> Evangelien verbreitet, als noch viele Augenzeugen zur Korrektur lebten.</p>
              <p>• <strong>Zeugen der Auferstehung:</strong> Über 500 namentlich bekannte Augenzeugen; viele starben für dieses Zeugnis.</p>
              <p>• <strong>Unmittelbare Erfahrung:</strong> Apostel verkündigten, was sie „gesehen, gehört und betastet“ hatten.</p>
              <p>• <strong>Extra-biblische Quellen:</strong> Tacitus, Josephus Flavius und Thallus bestätigen Jesus, sein Wirken und die Finsternis bei der Kreuzigung.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Final Synthesis */}
      <section className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <h2 className="text-3xl font-serif font-bold mb-6">Abschluss und Synthese</h2>
        <p className="text-stone-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Das Gesamtzeugnis begründet einen Glauben, der nicht auf blinder Annahme, sondern auf einem Fundament aus solider, nachvollziehbarer Evidenz steht. Die Einheit von Offenbarung, erfüllter Prophetie und historischer Zuverlässigkeit bezeugt: Christus ist Gott.
        </p>
      </section>

    </div>
  );
};

export default SystematicAnalysis;