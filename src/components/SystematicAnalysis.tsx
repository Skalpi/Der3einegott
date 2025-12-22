import React from 'react';
import { Info, CheckCircle, ExternalLink, Scroll, History, Target, Eye, BookOpen, Map, Landmark, Zap, Shield, Star, Crown, Anchor } from 'lucide-react';

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
          Die Heilige Schrift offenbart Gott nicht als isolierte Monade, sondern als ein Wesen in drei Personen. Diese Lehre der Dreieinigkeit zieht sich durch das gesamte Wort Gottes und ist für das christliche Heil entscheidend.
        </p>
      </section>

      {/* 1. Der biblische Beweis der Dreieinigkeit (Trinity 2.0) */}
      <section className="space-y-12">
        <div className="flex items-center space-x-4 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold shadow-lg">1</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Der biblische Beweis der Dreieinigkeit (Trinität)</h2>
        </div>

        <div className="space-y-10">
          
          {/* 1.1 Gott der Vater */}
          <div className="bg-stone-50 p-6 md:p-8 rounded-2xl border border-stone-200 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-amber-800 flex items-center">
              <Star className="h-5 w-5 mr-2" /> 1.1 Gott der Vater
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-slate-700">
              <div className="space-y-3">
                <p>Gott der Vater wird in den Quellen explizit als Gott und Schöpfer ausgewiesen:</p>
                <ul className="text-sm list-disc pl-5 space-y-2">
                  <li><strong>Identifikation:</strong> In Johannes 1,1 wird das Wort (Jesus) als „bei Gott“ (dem Vater) beschrieben.</li>
                  <li><strong>Vaterschaft:</strong> Jesaja 63 offenbart den HERRN bereits im AT: <em>„Denn du bist unser Vater...“</em> (Schlachter 2000).</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg border border-stone-100 text-sm italic italic">
                „Von dem Sohn aber [spricht der Vater]: Dein Thron, o Gott, währt von Ewigkeit zu Ewigkeit...“ (Hebräer 1,8, Schlachter 2000)
              </div>
            </div>
          </div>

          {/* 1.2 Gott der Sohn - ULTIMATE PROOF CATEGORIES */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-slate-900 flex items-center">
              <Crown className="h-6 w-6 mr-3 text-amber-600" /> 1.2 Gott der Sohn (Jesus Christus)
            </h3>
            <p className="text-slate-600 italic">Die Gottheit Jesu Christi ist das zentrale Fundament der biblischen Lehre. Die Quellen liefern hierfür einen „ultimativen Beweis“:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Category A: Titel */}
              <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-md">
                <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">A. Göttliche Titel</h4>
                <ul className="text-sm space-y-3 text-slate-700">
                  <li><strong>Gott (Theos):</strong> Explizite Bezeichnung in Joh 1,1; Joh 20,28; Tit 2,13; 1. Joh 5,20; Hebr 1,8.</li>
                  <li><strong>Ich bin (Ego eimi):</strong> <em>„Ehe Abraham wurde, bin ich“</em> (Joh 8,58). Direkter Bezug auf 2. Mose 3,14.</li>
                  <li><strong>Jahwe:</strong> Er ist der „Ewigseiende“ (Hoon), der Ursprung von allem.</li>
                </ul>
              </div>

              {/* Category B: Eigenschaften */}
              <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-md">
                <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">B. Göttliche Eigenschaften</h4>
                <ul className="text-sm space-y-3 text-slate-700">
                  <li><strong>Ewigkeit:</strong> Er hat keinen Anfang (Joh 1,1; Micha 5,1).</li>
                  <li><strong>Allmacht:</strong> <em>„...der Allmächtige“</em> (Offb 1,8).</li>
                  <li><strong>Allwissenheit:</strong> Er wusste alles (Joh 18,4).</li>
                  <li><strong>Unwandelbarkeit:</strong> Er bleibt ewig derselbe (Hebr 1,12; 13,8).</li>
                </ul>
              </div>

              {/* Category C: Handlungen */}
              <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-md">
                <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">C. Göttliche Handlungen</h4>
                <ul className="text-sm space-y-3 text-slate-700">
                  <li><strong>Schöpfung:</strong> <em>„Alles wurde durch dasselbe erschaffen“</em> (Joh 1,3; Kol 1,16).</li>
                  <li><strong>Erhaltung:</strong> Er trägt das Universum (Hebr 1,3; Kol 1,17).</li>
                  <li><strong>Sündenvergebung:</strong> Er vergibt Sünden, was allein Gott vorbehalten ist (Lukas 5).</li>
                  <li><strong>Gericht:</strong> Er wird die Welt richten (Joh 5; Apg 17,31).</li>
                </ul>
              </div>

              {/* Category D: Anbetung */}
              <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-md">
                <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">D. Annahme von Anbetung</h4>
                <div className="text-sm text-slate-700 space-y-3">
                  <p>Jesus weist Anbetung niemals zurück. Thomas bekennt: <em>„Mein Herr und mein Gott!“</em> (Joh 20,28), und Jesus preist seinen Glauben.</p>
                  <p>Im Himmel beten Millionen Engel und die ganze Schöpfung das Lamm an (Offb 5,8-14).</p>
                </div>
              </div>
            </div>
          </div>

          {/* 1.3 Gott der Heilige Geist */}
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200">
            <h3 className="text-xl font-bold mb-4 text-amber-800 flex items-center">
              <Zap className="h-5 w-5 mr-2" /> 1.3 Gott der Heilige Geist
            </h3>
            <div className="text-slate-700 space-y-4">
              <p>Der Heilige Geist wird als göttliche Person dargestellt, die in die Einheit der Gottheit eingebunden ist:</p>
              <ul className="text-sm list-disc pl-5 space-y-2">
                <li><strong>Autorität:</strong> Die Taufe erfolgt auf den <strong>Namen (Einzahl)</strong> des Vaters, des Sohnes und des Heiligen Geistes (Mt 28,19).</li>
                <li><strong>Offenbarung:</strong> Wahre theologische Erkenntnis über die Einheit Gottes ist nur durch die Offenbarung des Heiligen Geistes möglich.</li>
              </ul>
            </div>
          </div>

          {/* 1.4 Die Einheit (Trinitarische Formeln) */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-4 flex items-center text-amber-500">
              <Shield className="h-5 w-5 mr-2" /> 1.4 Die Einheit (Trinitarische Formeln)
            </h3>
            <div className="space-y-4 text-stone-300">
              <p><strong>Granville Sharp’s Rule:</strong> Diese griechische Grammatikregel beweist, dass Ausdrücke wie <em>„unser großer Gott und Heiland Jesus Christus“</em> (Titus 2,13) sich auf eine einzige Person beziehen.</p>
              <p><strong>Jüdischer Kontext:</strong> Sogar in der jüdischen Literatur (Zohar) finden sich Andeutungen der Trinität, wo drei Namen Gottes als eine Einheit verstanden werden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Die Erfüllung messianischer Prophezeiungen */}
      <section className="space-y-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold shadow-lg">2</span>
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

      {/* 3. Belege für die Glaubwürdigkeit der Bibel */}
      <section className="space-y-12">
        <div className="flex items-center space-x-4 mb-6">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold shadow-lg">3</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Belege für die Glaubwürdigkeit der Bibel</h2>
        </div>

        <p className="text-slate-700 text-lg leading-relaxed bg-stone-50 p-6 rounded-xl border border-stone-200 italic">
          Die Glaubwürdigkeit der Heiligen Schrift stützt sich auf eine beeindruckende Fülle interner und externer Beweise, die ihre göttliche Inspiration und historische Genauigkeit unterstreichen.
        </p>

        <div className="grid gap-12">
          
          {/* 3.1 Ehrlichkeit */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-amber-800 flex items-center border-b border-stone-200 pb-2">
              <Anchor className="h-6 w-6 mr-3" /> 1. Ehrlichkeit & Charakter der Berichte
            </h3>
            <div className="bg-white p-6 md:p-8 rounded-xl border border-stone-200 shadow-sm space-y-4 text-slate-700">
              <p>• <strong>Keine Heroisierung:</strong> Die Bibel berichtet schonungslos über die Sünden ihrer größten Leiter (Davids Ehebruch, Moses Zorn, Petrus' Verleugnung). Antike Texte dienten meist der Propaganda; die Bibel dient der Wahrheit.</p>
              <p>• <strong>Warnung vor Veränderung:</strong> Der Text selbst verbietet streng jede Hinzufügung oder Weglassung (Offb 22,18-19).</p>
            </div>
          </div>

          {/* 3.2 Thematische Einheit */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-amber-800 flex items-center border-b border-stone-200 pb-2">
              <Target className="h-6 w-6 mr-3" /> 2. Thematische & Mathematische Einheit
            </h3>
            <div className="bg-white p-6 md:p-8 rounded-xl border border-stone-200 shadow-sm space-y-4 text-slate-700">
              <p>Die Bibel ist ein harmonisches Ganzes von 66 Büchern:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Typologie:</strong> Alttestamentliche Strukturen (wie die Stiftshütte) sind geometrische Schattenbilder auf die Person Jesu Christi.</li>
                <li><strong>Statistische Evidenz:</strong> Die Wahrscheinlichkeit für die Erfüllung von nur 8 Prophetien beträgt 1 zu 10<sup>17</sup>.</li>
              </ul>
            </div>
          </div>

          {/* 3.3 Historische Verankerung & Qumran */}
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
                  <p><strong>Die Jesaja-Rolle (1QIsa):</strong> Überbrückt eine Lücke von 1000 Jahren Überlieferung. Der Text ist zu <strong>95% wortwörtlich identisch</strong> mit modernen Ausgaben.</p>
                  <p>Die Genauigkeit der jüdischen Schreiber (Sopherim), die Buchstaben zählten, wird hier eindrücklich bestätigt.</p>
                </div>
              </div>
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-4 shadow-inner">
                <h4 className="font-bold flex items-center text-slate-900 uppercase tracking-wider text-sm">
                  <Scroll className="h-4 w-4 mr-2 text-amber-600" /> Archäologische Bestätigung
                </h4>
                <div className="text-sm space-y-3 text-slate-700 leading-relaxed">
                  <p><strong>Merenptah-Stele:</strong> Älteste Erwähnung Israels (1210 v. Chr.).</p>
                  <p><strong>Prisma von Sanherib:</strong> Bestätigt König Hiskia und die Belagerung Jerusalems (701 v. Chr.).</p>
                  <p><strong>Jericho:</strong> Wood's Ausgrabungen bestätigen den Kollaps der Mauern exakt nach biblischem Bericht.</p>
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
              <p>• <strong>Historische Zeugen:</strong> Josephus Flavius und Tacitus bestätigen die Kreuzigung Christi.</p>
              <p>• <strong>Das Zeugnis des Blutes:</strong> Die Apostel starben für ihr Zeugnis. Niemand stirbt für eine bewusste Lüge.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Final Synthesis */}
      <section className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <h2 className="text-3xl font-serif font-bold mb-6 italic">Glaube basiert auf Evidenz</h2>
        <p className="text-stone-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Die Einheit von biblischer Offenbarung, historischer Archäologie und erfüllter Prophetie bezeugt: Christus ist Gott.
        </p>
      </section>

    </div>
  );
};

export default SystematicAnalysis;