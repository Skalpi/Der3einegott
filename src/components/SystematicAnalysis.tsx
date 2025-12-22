import React from 'react';
import { Info, ExternalLink, Scroll, Map, Landmark, Zap, Shield, Star, Crown, UserCheck, MessageSquare, Quote } from 'lucide-react';

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

      {/* 1. Der biblische Beweis der Dreieinigkeit */}
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
              <div className="bg-white p-4 rounded-lg border border-stone-100 text-sm italic">
                „Von dem Sohn aber [spricht der Vater]: Dein Thron, o Gott, währt von Ewigkeit zu Ewigkeit...“ (Hebräer 1,8, Schlachter 2000)
              </div>
            </div>
          </div>

          {/* 1.2 Gott der Sohn - UNVERÄNDERT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-slate-900 flex items-center">
              <Crown className="h-6 w-6 mr-3 text-amber-600" /> 1.2 Gott der Sohn (Jesus Christus)
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-md">
                <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">A. Göttliche Titel</h4>
                <ul className="text-sm space-y-3 text-slate-700">
                  <li><strong>Gott (Theos):</strong> Explizite Bezeichnung in Joh 1,1; Joh 20,28; Tit 2,13; 1. Joh 5,20.</li>
                  <li><strong>Ich bin (Ego eimi):</strong> <em>„Ehe Abraham wurde, bin ich“</em> (Joh 8,58).</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-md">
                <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">B. Göttliche Eigenschaften</h4>
                <ul className="text-sm space-y-3 text-slate-700">
                  <li><strong>Ewigkeit:</strong> Er hat keinen Anfang (Joh 1,1; Micha 5,1).</li>
                  <li><strong>Allmacht:</strong> <em>„...der Allmächtige“</em> (Offb 1,8).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 1.3 Gott der Heilige Geist - AKTUALISIERT & ERWEITERT */}
          <div className="bg-stone-50 p-8 rounded-2xl border border-stone-200 space-y-8">
            <div className="flex items-center justify-between border-b border-stone-200 pb-4">
              <h3 className="text-2xl font-serif font-bold text-amber-800 flex items-center">
                <Zap className="h-6 w-6 mr-3" /> 1.3 Gott der Heilige Geist
              </h3>
              <span className="text-xs font-bold text-amber-600 uppercase tracking-widest bg-amber-100 px-3 py-1 rounded-full">Personalität & Gottheit</span>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h4 className="font-bold text-slate-900 flex items-center">
                  <UserCheck className="h-5 w-5 mr-2 text-amber-600" /> Beweis der Personalität
                </h4>
                <div className="text-sm text-slate-700 leading-relaxed space-y-4">
                  <p>
                    Der Heilige Geist ist keine „Kraft“ oder „Energie“, sondern eine <strong>Person</strong>. Dies wird durch seine Eigenschaften und die biblische Grammatik belegt:
                  </p>
                  <ul className="space-y-3">
                    <li><span className="font-bold text-amber-800">Souveräner Wille:</span> Er teilt Gaben aus, „wie Er will“ (1. Kor 12,11).</li>
                    <li><span className="font-bold text-amber-800">Emotionen:</span> Er kann „betrübt“ werden (Eph 4,30). Eine Kraft kennt keinen Schmerz.</li>
                    <li><span className="font-bold text-amber-800">Handlungsfähigkeit:</span> Er lehrt, erinnert (Joh 14,26), bezeugt (Joh 15,26) und spricht (Apg 13,2).</li>
                    <li><span className="font-bold text-amber-800">Grammatik (Joh 16,13):</span> Jesus verwendet für den Geist (gr. <em>pneuma</em>, Neutrum) das maskuline Pronomen <em>ekeinos</em> („Er“), was seine Personalität unterstreicht.</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-bold text-slate-900 flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2 text-amber-600" /> Identität mit JAHWE
                </h4>
                <div className="text-sm text-slate-700 leading-relaxed space-y-4">
                  <p>Das Neue Testament offenbart, dass der Heilige Geist derjenige ist, der im Alten Testament als <strong>JAHWE</strong> sprach:</p>
                  <div className="bg-white p-5 rounded-xl border border-stone-200 space-y-4 shadow-sm">
                    <div className="border-l-4 border-amber-600 pl-3">
                      <div className="text-[10px] text-slate-500 font-bold uppercase">Beleg A: Hebräer 3,7-9</div>
                      <p className="italic text-xs mt-1">Der Heilige Geist sagt: „...wo eure Väter <strong>mich</strong> versuchten“ (Bezug auf JAHWE in 2. Mose 17,7).</p>
                    </div>
                    <div className="border-l-4 border-amber-600 pl-3">
                      <div className="text-[10px] text-slate-500 font-bold uppercase">Beleg B: Hebräer 10,15-17</div>
                      <p className="italic text-xs mt-1">Der Geist bezeugt: „Dies ist der Bund...“ (Zitierung der Verheißung JAHWES aus Jeremia 31).</p>
                    </div>
                    <div className="border-l-4 border-amber-600 pl-3">
                      <div className="text-[10px] text-slate-500 font-bold uppercase">Beleg C: Apostelgeschichte 28,25</div>
                      <p className="italic text-xs mt-1">Paulus identifiziert die Stimme JAHWES aus Jesaja 6 mit dem Heiligen Geist.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-stone-200">
              <h4 className="font-bold text-slate-900 mb-4 text-center uppercase tracking-widest text-xs">Göttliche Attribute des Geistes</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                  <div className="font-bold text-amber-800 text-sm">Ewigkeit</div>
                  <div className="text-[10px] text-slate-500 italic">Hebr 9,14</div>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                  <div className="font-bold text-amber-800 text-sm">Allgegenwart</div>
                  <div className="text-[10px] text-slate-500 italic">Ps 139,7-10</div>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                  <div className="font-bold text-amber-800 text-sm">Allwissenheit</div>
                  <div className="text-[10px] text-slate-500 italic">1. Kor 2,10-11</div>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg border border-stone-100">
                  <div className="font-bold text-amber-800 text-sm">Schöpferkraft</div>
                  <div className="text-[10px] text-slate-500 italic">Hiob 33,4</div>
                </div>
              </div>
            </div>
          </div>

          {/* 1.4 Die Einheit */}
          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-xl font-bold mb-4 flex items-center text-amber-500">
              <Shield className="h-5 w-5 mr-2" /> 1.4 Die Einheit (Trinitarische Formeln)
            </h3>
            <div className="space-y-4 text-stone-300">
              <p><strong>Matthäus 28,19:</strong> Die Taufe erfolgt auf den <strong>Namen (Einzahl)</strong> des Vaters, des Sohnes und des Heiligen Geistes.</p>
              <p><strong>Granville Sharp’s Rule:</strong> Grammatikalischer Beweis aus Titus 2,13 für die Identität von Gott und Retter in Jesus Christus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Prophetien Section - UNVERÄNDERT */}
      <section className="space-y-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold shadow-lg">2</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Die Erfüllung messianischer Prophetien</h2>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8">
          <p className="text-slate-800 text-lg mb-6 leading-relaxed">
            Hunderte spezifische Vorhersagen des Alten Testaments wurden in der Person Jesu Christi punktgenau erfüllt.
          </p>
          <a href="https://posttenebras-lux.de/prophetien/" className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-amber-600 transition-all shadow-lg font-medium group">
            Zur Datenbank der erfüllten Prophetien
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 3. Historische Verankerung - UNVERÄNDERT */}
      <section className="space-y-12">
        <div className="flex items-center space-x-4 mb-6">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold shadow-lg">3</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Belege für die Glaubwürdigkeit der Bibel</h2>
        </div>
        <div className="grid gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-amber-800 flex items-center border-b border-stone-200 pb-2">
              <Map className="h-6 w-6 mr-3" /> 3. Historische Verankerung & Qumran-Funde
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-4 shadow-inner text-sm text-slate-700">
                <h4 className="font-bold flex items-center text-slate-900 uppercase tracking-wider">
                  <Landmark className="h-4 w-4 mr-2 text-amber-600" /> Die Qumran-Revolution
                </h4>
                <p><strong>Die Jesaja-Rolle:</strong> Der Text ist zu 95% wortwörtlich identisch mit modernen Ausgaben trotz 1000 Jahren Differenz.</p>
              </div>
              <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-4 shadow-inner text-sm text-slate-700">
                <h4 className="font-bold flex items-center text-slate-900 uppercase tracking-wider">
                  <Scroll className="h-4 w-4 mr-2 text-amber-600" /> Archäologische Bestätigung
                </h4>
                <p>Merenptah-Stele, Sanherib-Prisma und Jericho-Mauern bestätigen die historische Präzision der biblischen Berichte.</p>
              </div>
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