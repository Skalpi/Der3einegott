import React from 'react';
import { Info, ExternalLink, Scroll, Map, Landmark, Zap, Shield, Star, Crown, CheckCircle } from 'lucide-react';

const SystematicAnalysis: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
      
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
      <section className="space-y-16">
        <div className="flex items-center space-x-4 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold shadow-lg">1</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900 underline decoration-amber-500 decoration-2 underline-offset-8">
            Der biblische Beweis der Dreieinigkeit (Trinität)
          </h2>
        </div>

        {/* 1.1 Gott der Vater */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Star className="h-7 w-7 text-amber-600" />
            <h3 className="text-2xl font-serif font-bold text-slate-900">1.1 Gott der Vater</h3>
          </div>
          <p className="text-slate-600 italic mb-6">Gott der Vater steht als Ursprung und Planer im Zentrum der göttlichen Heilsökonomie:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-md">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">A. Göttliche Identität</h4>
              <ul className="text-sm space-y-2 text-slate-700">
                <li><span className="font-bold">Gott (Ho Theos):</span> In Johannes 1,1 als derjenige bezeichnet, bei dem das Wort war.</li>
                <li><span className="font-bold">Vater der Lichter:</span> Der Geber jeder guten Gabe (Jakobus 1,17).</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-md">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">B. Handlungen des Vaters</h4>
              <ul className="text-sm space-y-2 text-slate-700">
                <li><span className="font-bold">Aussendung des Sohnes:</span> Der Vater liebt die Welt und gab seinen Sohn (Joh 3,16).</li>
                <li><span className="font-bold">Zeugnis:</span> Der Vater gibt Zeugnis über die Gottheit Jesu (Hebr 1,8; Mt 3,17).</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 1.2 Gott der Sohn - EXACT IMAGE 2 MATCH */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Crown className="h-7 w-7 text-amber-600" />
            <h3 className="text-2xl font-serif font-bold text-slate-900">1.2 Gott der Sohn (Jesus Christus)</h3>
          </div>
          <p className="text-slate-600 italic mb-6">Die Gottheit Jesu Christi ist das zentrale Fundament der biblischen Lehre. Die Quellen liefern hierfür einen „ultimativen Beweis“:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-md">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">A. GÖTTLICHE TITEL</h4>
              <ul className="text-sm space-y-3 text-slate-700">
                <li><span className="font-bold">Gott (Theos):</span> Explizite Bezeichnung in Joh 1,1; Joh 20,28; Tit 2,13; 1. Joh 5,20; Hebr 1,8.</li>
                <li><span className="font-bold">Ich bin (Ego eimi):</span> „Ehe Abraham wurde, bin ich“ (Joh 8,58). Direkter Bezug auf 2. Mose 3,14.</li>
                <li><span className="font-bold">Jahwe:</span> Er ist der „Ewigseiende“ (Hoon), der Ursprung von allem.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-md">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">B. GÖTTLICHE EIGENSCHAFTEN</h4>
              <ul className="text-sm space-y-3 text-slate-700">
                <li><span className="font-bold">Ewigkeit:</span> Er hat keinen Anfang (Joh 1,1; Micha 5,1).</li>
                <li><span className="font-bold">Allmacht:</span> „...der Allmächtige“ (Offb 1,8).</li>
                <li><span className="font-bold">Allwissenheit:</span> Er wusste alles (Joh 18,4).</li>
                <li><span className="font-bold">Unwandelbarkeit:</span> Er bleibt ewig derselbe (Hebr 1,12; 13,8).</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-md">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">C. GÖTTLICHE HANDLUNGEN</h4>
              <ul className="text-sm space-y-3 text-slate-700">
                <li><span className="font-bold">Schöpfung:</span> „Alles wurde durch dasselbe erschaffen“ (Joh 1,3; Kol 1,16).</li>
                <li><span className="font-bold">Erhaltung:</span> Er trägt das Universum (Hebr 1,3; Kol 1,17).</li>
                <li><span className="font-bold">Sündenvergebung:</span> Er vergibt Sünden, was allein Gott vorbehalten ist (Lukas 5).</li>
                <li><span className="font-bold">Gericht:</span> Er wird die Welt richten (Joh 5; Apg 17,31).</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-md">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">D. ANNAHME VON ANBETUNG</h4>
              <div className="text-sm space-y-4 text-slate-700 leading-relaxed">
                <p>Jesus weist Anbetung niemals zurück. Thomas bekennt: <span className="italic">„Mein Herr und mein Gott!“</span> (Joh 20,28), und Jesus preist seinen Glauben.</p>
                <p>Im Himmel beten Millionen Engel und die ganze Schöpfung das Lamm an (Offb 5,8-14).</p>
              </div>
            </div>
          </div>
        </div>

        {/* 1.3 Gott der Heilige Geist - IMAGE 1 CONTENT, IMAGE 2 STYLE */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <Zap className="h-7 w-7 text-amber-600" />
            <h3 className="text-2xl font-serif font-bold text-slate-900">1.3 Gott der Heilige Geist</h3>
          </div>
          <p className="text-slate-600 italic mb-6">Der Heilige Geist ist die dritte Person der Gottheit, kein unpersönliches Etwas, sondern Jemand:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-md">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">A. BEWEIS DER PERSONALITÄT</h4>
              <ul className="text-sm space-y-3 text-slate-700">
                <li><span className="font-bold">Intellekt:</span> Er „erforscht“ und „weiß“ (1. Kor 2,10-11).</li>
                <li><span className="font-bold">Wille:</span> Er teilt Gaben aus, „wie er will“ (1. Kor 12,11).</li>
                <li><span className="font-bold">Emotion:</span> Er kann „betrübt“ werden (Eph 4,30).</li>
                <li><span className="font-bold">Grammatikalische Besonderheit:</span> In Joh 16,13 wird das maskuline Pronomen <span className="italic">ekeinos</span> („Er“) verwendet.</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-md">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">B. IDENTITÄT MIT JAHWE</h4>
              <div className="text-sm space-y-4 text-slate-700">
                <div className="border-b border-stone-100 pb-3">
                  <p className="font-bold text-amber-800 text-xs mb-1">2. MOSE 17,7 / HEBR 3,7-9</p>
                  <p>In der Wüste versuchte Israel <span className="font-bold">JAHWE</span>. Hebräer sagt: Der <span className="font-bold">Heilige Geist</span> spricht: „...wo eure Väter mich versuchten.“</p>
                </div>
                <div>
                  <p className="font-bold text-amber-800 text-xs mb-1">JER 31,33 / HEBR 10,15</p>
                  <p><span className="font-bold">JAHWE</span> verheißt den neuen Bund. Hebräer identifiziert: „Das bezeugt uns aber auch der <span className="font-bold">Heilige Geist</span>.“</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-md">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">C. GÖTTLICHE ATTRIBUTE</h4>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-2 bg-stone-50 rounded border border-stone-100">
                  <p className="font-bold text-amber-800 text-xs">Schöpfung</p>
                  <p className="text-[10px] text-slate-500 italic">Hiob 33,4</p>
                </div>
                <div className="p-2 bg-stone-50 rounded border border-stone-100">
                  <p className="font-bold text-amber-800 text-xs">Ewigkeit</p>
                  <p className="text-[10px] text-slate-500 italic">Hebr 9,14</p>
                </div>
                <div className="p-2 bg-stone-50 rounded border border-stone-100">
                  <p className="font-bold text-amber-800 text-xs">Allwissenheit</p>
                  <p className="text-[10px] text-slate-500 italic">1. Kor 2,10</p>
                </div>
                <div className="p-2 bg-stone-50 rounded border border-stone-100">
                  <p className="font-bold text-amber-800 text-xs">Allgegenwart</p>
                  <p className="text-[10px] text-slate-500 italic">Ps 139,7</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border-t-4 border-amber-500 shadow-md">
              <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider text-xs">D. TRINITÄRISCHE EINHEIT</h4>
              <p className="text-sm text-slate-700 leading-relaxed italic">
                „Darum gehet hin und lehret alle Völker: Taufet sie auf den <span className="font-bold underline decoration-amber-500">Namen</span> (Einzahl!) des Vaters und des Sohnes und des Heiligen Geistes.“ (Mt 28,19)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Prophetien Section */}
      <section className="space-y-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold shadow-lg">2</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Die Erfüllung messianischer Prophetien</h2>
        </div>
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 shadow-sm">
          <p className="text-slate-800 text-lg mb-6 leading-relaxed">
            Hunderte spezifische Vorhersagen des Alten Testaments wurden in der Person Jesu Christi punktgenau erfüllt. Jede einzelne Erfüllung ist ein statistisches Wunder.
          </p>
          <a href="https://posttenebras-lux.de/prophetien/" className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-xl hover:bg-amber-600 transition-all shadow-lg font-medium group">
            Zur Datenbank der erfüllten Prophetien
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 3. Historische Verankerung - EXACT IMAGE 3 MATCH */}
      <section className="space-y-12">
        <div className="flex items-center space-x-4 mb-6">
          <CheckCircle className="h-10 w-10 text-amber-800" />
          <h2 className="text-3xl font-serif font-bold text-amber-800">3. Historische Verankerung</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Spalte 1: Archäologische Funde */}
          <div className="bg-white rounded-xl border border-stone-200 shadow-md overflow-hidden">
            <div className="bg-stone-50 px-6 py-4 border-b border-stone-200">
              <h3 className="text-xl font-bold text-slate-900">Archäologische Funde</h3>
            </div>
            <div className="p-6 space-y-6 text-sm text-slate-700">
              <div>
                <p className="font-bold text-slate-900 mb-1">Jericho:</p>
                <p>Mauern stürzten „nach außen“ ein (Rampe für Israeliten). Die Stadt wurde verbrannt, nicht geplündert (identisch zum Bericht).</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Avaris:</p>
                <p>Funde semitischer Siedler mit 12 Gräbern und einer Statue eines Mannes im „bunten Gewand“ (Hinweis auf Joseph).</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Alphabet-Schrift:</p>
                <p>Funde im Sinai belegen Hebräer-Schrift um 1600 v. Chr., was die Autorschaft von Mose untermauert.</p>
              </div>
            </div>
          </div>

          {/* Spalte 2: Quellen & Stelen */}
          <div className="bg-white rounded-xl border border-stone-200 shadow-md overflow-hidden">
            <div className="bg-stone-50 px-6 py-4 border-b border-stone-200">
              <h3 className="text-xl font-bold text-slate-900">Quellen & Stelen</h3>
            </div>
            <div className="p-6 space-y-6 text-sm text-slate-700">
              <div>
                <p className="font-bold text-slate-900 mb-1">Qumran:</p>
                <p>Die Jesajarolle beweist eine fast buchstabengetreue Überlieferung über 1000 Jahre hinweg.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Israel-Stelen:</p>
                <p>Die Merenptah-Stele (1210 v. Chr.) nennt Israel als eigenständiges Volk in Kanaan.</p>
              </div>
              <div>
                <p className="font-bold text-slate-900 mb-1">Assyrische Belege:</p>
                <p>Prismen von Sanherib bestätigen König Hiskia und die Belagerung Jerusalems exakt.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Synthesis */}
      <section className="bg-slate-900 text-white rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl font-serif font-bold mb-6 italic">Glaube basiert auf Evidenz</h2>
          <p className="text-stone-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Die Einheit von biblischer Offenbarung, historischer Archäologie und erfüllter Prophetie bezeugt unmissverständlich: Christus ist der Herr und Gott.
          </p>
        </div>
      </section>

    </div>
  );
};

export default SystematicAnalysis;