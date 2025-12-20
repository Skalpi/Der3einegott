import React from 'react';
import { Info, CheckCircle, ExternalLink, Scroll, History, Target, Eye } from 'lucide-react';

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
              Die Lehre von der Dreieinigkeit ist ein Eckpfeiler der christlichen Theologie. Sie definiert das Wesen Gottes als einen einzigen Gott, der in drei distinkten, aber untrennbaren Personen existiert: Gott der Vater, Gott der Sohn und Gott der Heilige Geist. Diese drei Personen sind in ihrem Wesen eins, aber in ihrer Funktion und Beziehung zueinander verschieden.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-amber-800">1.2. Die Gottheit des Sohnes, Jesus Christus</h3>
            <div className="space-y-4 text-slate-700">
              <p>Johannes 1,1 identifiziert ihn als das ewige Wort. Römer 9,5 bezeichnet ihn unmissverständlich als den souveränen Gott: „...Christus..., der da ist über allem, Gott, gepriesen in Ewigkeit.“ In Hebräer 1,8 spricht Gott der Vater den Sohn direkt an: „Dein Thron, o Gott, ist von Ewigkeit zu Ewigkeit.“</p>
              <p>Jesus Christus besitzt zudem Attribute und vollbringt Werke, die allein Gott zugeschrieben werden. Er ist der Schöpfer und Erhalter des Universums (Joh 1,3; Hebr 1,3). Er ist sündlos (1. Petr 2,22) und nimmt Anbetung an (Hebr 1,6; Offb 5), eine Ehre, die ausschließlich Gott vorbehalten ist.</p>
            </div>
          </div>

          <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
            <h3 className="text-xl font-bold mb-4 text-amber-800">1.3. Die Gottheit und Personalität des Heiligen Geistes</h3>
            <p className="text-slate-700">
              Die Schrift offenbart den Heiligen Geist als eine göttliche Person mit eigenem Willen, Intellekt und Emotionen. Er spricht (Apg 28,25), leitet (Röm 8,14) und vertritt die Gläubigen im Gebet (Röm 8,26). Seine volle Gottheit wird bekräftigt, indem neutestamentliche Autoren Worte Jahwes aus dem Alten Testament direkt dem Heiligen Geist zuschreiben (vgl. Hebr 10,15-17).
            </p>
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
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <p className="text-slate-800 text-lg leading-relaxed mb-4">
                Die prädiktive Prophetie ist ein zentraler Beweis für die göttliche Urheberschaft der Bibel. Hunderte spezifische Vorhersagen wurden Jahrhunderte vor Christus niedergeschrieben und in Jesus von Nazareth präzise erfüllt.
              </p>
              <div className="flex items-center text-amber-700 font-semibold italic">
                <Target className="h-5 w-5 mr-2" />
                Erfüllte Prophetie ist der objektive Fingerabdruck Gottes in der Geschichte.
              </div>
            </div>
            <div className="flex-shrink-0">
              <a 
                href="https://posttenebras-lux.de/prophetien/" 
                className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-amber-600 transition-all shadow-lg group"
              >
                <span>Alle Prophetien ansehen</span>
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Belege für die Glaubwürdigkeit der Bibel */}
      <section className="space-y-12">
        <div className="flex items-center space-x-4 mb-6">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold">3</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Belege für die Glaubwürdigkeit der Bibel</h2>
        </div>

        <p className="text-slate-700 text-lg leading-relaxed bg-stone-50 p-6 rounded-xl border border-stone-200 italic">
          Die Glaubwürdigkeit der Heiligen Schrift stützt sich auf eine beeindruckende Fülle interner und externer Beweise, die ihre göttliche Inspiration und historische Genauigkeit unterstreichen. Im Folgenden werden diese Belege detailliert aufgeschlüsselt:
        </p>

        <div className="grid gap-12">
          
          {/* 3.1 Ehrlichkeit */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-amber-800">
              <History className="h-6 w-6" />
              <h3 className="text-xl font-bold">1. Ehrlichkeit der Berichte der Bibel</h3>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-3 text-slate-700">
              <p>• <strong>Keine Idealisierung:</strong> Im Gegensatz zu antiken Herrschern berichtet die Bibel offen über Versagen, Sünden und Gerichtsurteile über Israel.</p>
              <p>• <strong>Offenlegung von Sünden:</strong> Fehler zentraler Figuren wie Abraham, Jakob oder David werden schonungslos dokumentiert.</p>
              <p>• <strong>Selbstzeugnis:</strong> Die Tora wird als „Spiegel“ beschrieben, der die sündige Natur des Menschen aufzeigt, anstatt ihn fälschlich als gerecht darzustellen.</p>
            </div>
          </div>

          {/* 3.2 Thematische Einheit */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-amber-800">
              <Scroll className="h-6 w-6" />
              <h3 className="text-xl font-bold">2. Thematische Einheit</h3>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-4 text-slate-700">
              <p>Trotz 1600 Jahren Entstehungszeit weist die Bibel eine tiefgreifende Harmonie auf:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Vom Schatten zur Wirklichkeit:</strong> Das AT-Opfersystem weist als „Schattenbild“ auf die „Wirklichkeit“ in Jesus Christus hin.</li>
                <li><strong>Mathematische Unmöglichkeit von Zufall:</strong> Die Wahrscheinlichkeit, dass sich nur 8 Prophetien zufällig in einer Person erfüllen, liegt bei 1 zu 10<sup>17</sup>. Bei 48 Prophetien sinkt sie auf 1 zu 10<sup>157</sup> – ein Zufall ist faktisch ausgeschlossen.</li>
              </ul>
            </div>
          </div>

          {/* 3.3 Historische Verankerung */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-amber-800">
              <CheckCircle className="h-6 w-6" />
              <h3 className="text-xl font-bold">3. Historische Verankerung</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                <h4 className="font-bold mb-3">Archäologische Funde</h4>
                <ul className="text-sm space-y-3">
                  <li><strong>Jericho:</strong> Mauern stürzten „nach außen“ ein (Rampe für Israeliten). Die Stadt wurde verbrannt, nicht geplündert (identisch zum Bericht).</li>
                  <li><strong>Avaris:</strong> Funde semitischer Siedler mit 12 Gräbern und einer Statue eines Mannes im „bunten Gewand“ (Hinweis auf Joseph).</li>
                  <li><strong>Alphabet-Schrift:</strong> Funde im Sinai belegen Hebräer-Schrift um 1600 v. Chr., was die Autorschaft von Mose untermauert.</li>
                </ul>
              </div>
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
                <h4 className="font-bold mb-3">Quellen & Stelen</h4>
                <ul className="text-sm space-y-3">
                  <li><strong>Qumran:</strong> Die Jesajarolle beweist eine fast buchstabengetreue Überlieferung über 1000 Jahre hinweg.</li>
                  <li><strong>Israel-Stelen:</strong> Die Merenptah-Stele (1210 v. Chr.) nennt Israel als eigenständiges Volk in Kanaan.</li>
                  <li><strong>Assyrische Belege:</strong> Prismen von Sanherib bestätigen König Hiskia und die Belagerung Jerusalems exakt.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 3.4 Augenzeugenschaft */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-amber-800">
              <Eye className="h-6 w-6" />
              <h3 className="text-xl font-bold">4. Augenzeugenschaft</h3>
            </div>
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm space-y-3 text-slate-700">
              <p>• <strong>Lukas als Historiker:</strong> Geographische und politische Details sind bis ins kleinste Detail korrekt wiedergegeben.</p>
              <p>• <strong>Zeitnahe Niederschrift:</strong> Die Evangelien entstanden, als noch viele Augenzeugen lebten, die Unwahrheiten hätten korrigieren können.</p>
              <p>• <strong>Zeugen der Auferstehung:</strong> Über 500 namentlich bekannte Augenzeugen sahen den auferstandenen Jesus; viele starben für dieses Zeugnis.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Final Synthesis */}
      <section className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <h2 className="text-3xl font-serif font-bold mb-6">Abschluss und Synthese</h2>
        <p className="text-stone-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Die analysierten Quelltexte liefern ein vielschichtiges Plädoyer für die rationale Vertretbarkeit des christlichen Glaubens. Die kumulative Kraft der Beweise beruht auf der kohärenten biblischen Offenbarung der Natur Gottes, der empirisch überprüfbaren Erfüllung der Prophetie und der bemerkenswerten historischen Zuverlässigkeit. Dieses Gesamtzeugnis begründet einen Glauben, der auf einem Fundament aus solider Evidenz steht.
        </p>
      </section>

    </div>
  );
};

export default SystematicAnalysis;