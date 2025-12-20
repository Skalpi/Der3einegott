import React from 'react';
import { ShieldCheck, Info, FileText, CheckCircle } from 'lucide-react';

const SystematicAnalysis: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
      
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

      {/* 1. Trinität */}
      <section className="space-y-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold">1</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Der biblische Beweis der Dreieinigkeit</h2>
        </div>

        <div className="grid gap-8">
          <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
            <h3 className="text-xl font-bold mb-3 text-amber-800">1.1. Einleitende Analyse der Trinitätslehre</h3>
            <p className="text-slate-700">
              Die Lehre von der Dreieinigkeit definiert das Wesen Gottes als einen einzigen Gott, der in drei distinkten, aber untrennbaren Personen existiert: Gott der Vater, Gott der Sohn und Gott der Heilige Geist. Ein korrektes Verständnis dieser göttlichen Natur ist grundlegend, da es die Basis für die Erlösung, die Anbetung und die gesamte Beziehung zwischen Gott und der Menschheit bildet.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-amber-800">1.2. Die Gottheit des Sohnes, Jesus Christus</h3>
            <div className="space-y-4 text-slate-700">
              <p>Johannes 1,1 identifiziert ihn als das ewige Wort. Römer 9,5 bezeichnet ihn als den souveränen Gott: „...Christus..., der da ist über allem, Gott, gepriesen in Ewigkeit.“ In Hebräer 1,8 spricht der Vater den Sohn direkt an: „Dein Thron, o Gott, ist von Ewigkeit zu Ewigkeit.“</p>
              <p>Jesus besitzt Attribute, die allein Gott zugeschrieben werden. Er ist Schöpfer (Joh 1,3) und Erhalter (Hebr 1,3). Er ist sündlos (1. Petr 2,22) und nimmt Anbetung an (Hebr 1,6), eine Ehre, die ausschließlich Gott vorbehalten ist.</p>
            </div>
          </div>

          <div className="bg-stone-50 p-6 rounded-xl border border-stone-200">
            <h3 className="text-xl font-bold mb-4 text-amber-800">1.3. Die Gottheit und Personalität des Heiligen Geistes</h3>
            <p className="text-slate-700">
              Der Heilige Geist ist eine göttliche Person mit eigenem Willen und Intellekt. Er spricht (Apg 28,25), leitet (Röm 8,14) und vertritt die Gläubigen (Röm 8,26). Seine Gottheit wird belegt, indem Reden Jahwes aus dem AT im NT dem Heiligen Geist zugeschrieben werden (vgl. Jer 31 mit Hebr 10).
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
            <h3 className="text-xl font-bold mb-4 text-amber-800">1.4. Die Einheit und Pluralität im Wesen Gottes</h3>
            <p className="text-slate-700 italic border-l-2 border-slate-300 pl-4 mb-4">
              "Taufet sie auf den Namen (Singular) des Vaters und des Sohnes und des Heiligen Geistes." (Matthäus 28,19)
            </p>
            <p className="text-slate-700">
              Bereits in 1. Mose 1,26 spricht Gott im Plural: „Lasst uns Menschen machen.“ In 1. Mose 19,24 interagiert Jahwe auf der Erde mit Jahwe im Himmel – eine profunde Darstellung der Pluralität innerhalb der Gottheit.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Prophetie */}
      <section className="space-y-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold">2</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Die Erfüllung messianischer Prophezeiungen</h2>
        </div>

        <div className="bg-white overflow-hidden rounded-2xl border border-stone-200 shadow-lg">
          <div className="p-6 bg-slate-900 text-white">
            <h3 className="text-xl font-serif font-bold">2.2. Synopse von Prophezeiung und Erfüllung</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-stone-100 text-slate-600 uppercase text-xs tracking-wider">
                  <th className="px-6 py-4 font-bold border-b">Prophezeiung (AT)</th>
                  <th className="px-6 py-4 font-bold border-b">Erfüllung (NT)</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-700">
                <tr className="border-b hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Geburtsort: Bethlehem Ephrata. (Micha 5,1)</td>
                  <td className="px-6 py-4">Jesus wurde in Bethlehem geboren. (Lukas 2)</td>
                </tr>
                <tr className="border-b hover:bg-stone-50 transition-colors bg-stone-50/30">
                  <td className="px-6 py-4 font-medium">Wegbereiter: „Stimme eines Rufenden“. (Jes 40,3)</td>
                  <td className="px-6 py-4">Johannes der Täufer bereitete den Weg.</td>
                </tr>
                <tr className="border-b hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Verrat: Durch einen nahen Freund. (Ps 41,10)</td>
                  <td className="px-6 py-4">Judas Iskariot verriet ihn.</td>
                </tr>
                <tr className="border-b hover:bg-stone-50 transition-colors bg-stone-50/30">
                  <td className="px-6 py-4 font-medium">Kreuzigung: Hände/Füße durchgraben. (Ps 22,17)</td>
                  <td className="px-6 py-4">Römische Kreuzigung Jesu Christi.</td>
                </tr>
                <tr className="border-b hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Kleiderlos: Gewand das Los geworfen. (Ps 22,19)</td>
                  <td className="px-6 py-4">Soldaten losten um sein Untergewand. (Joh 19)</td>
                </tr>
                <tr className="border-b hover:bg-stone-50 transition-colors bg-stone-50/30">
                  <td className="px-6 py-4 font-medium">Keine gebrochenen Knochen. (Ex 12,46; Ps 34,21)</td>
                  <td className="px-6 py-4">Beine wurden nicht gebrochen. (Joh 19)</td>
                </tr>
                <tr className="border-b hover:bg-stone-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Auferstehung: Nicht im Totenreich. (Ps 16,10)</td>
                  <td className="px-6 py-4">Er ist am dritten Tag auferstanden.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 3. Glaubwürdigkeit */}
      <section className="space-y-8">
        <div className="flex items-center space-x-4 mb-4">
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 text-white font-bold">3</span>
          <h2 className="text-3xl font-serif font-bold text-slate-900">Belege für die Glaubwürdigkeit der Bibel</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex space-x-4">
            <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg mb-2">Ehrlichkeit der Berichte</h4>
              <p className="text-slate-600 text-sm">Die Bibel verschweigt Fehler ihrer Helden nicht (z.B. Zweifel der Jünger, Götzendienst Israels). Dies spricht gegen mythologische Heldenbildung.</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg mb-2">Historische Verankerung</h4>
              <p className="text-slate-600 text-sm">Archäologische Funde wie Streitwagenräder im Roten Meer oder assyrische Chroniken bestätigen biblische Details exakt.</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg mb-2">Thematische Einheit</h4>
              <p className="text-slate-600 text-sm">Trotz 1500 Jahren Entstehungszeit zieht sich der Heilsplan Gottes als roter Faden durch ca. 40 Autoren hindurch.</p>
            </div>
          </div>
          <div className="flex space-x-4">
            <CheckCircle className="h-6 w-6 text-amber-600 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-lg mb-2">Augenzeugenschaft</h4>
              <p className="text-slate-600 text-sm">Der Anspruch auf direkte Beobachtung (Hebr 2,3) unterscheidet die Schrift fundamental von späteren Legenden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">Abschluss und Synthese</h2>
        <p className="text-slate-700 max-w-3xl mx-auto">
          Dieses Gesamtzeugnis begründet einen Glauben, der nicht auf blinder Annahme, sondern auf einem Fundament aus solider, nachvollziehbarer Evidenz steht. Die Einheit von biblischer Offenbarung, Prophetie und Geschichte bezeugt: Christus ist Gott.
        </p>
      </section>

    </div>
  );
};

export default SystematicAnalysis;