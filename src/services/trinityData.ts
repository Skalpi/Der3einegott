import { TheologicalProof } from '../types';

export const trinityData: TheologicalProof[] = [
  {
    id: 'im-anfang-war-das-wort',
    title: 'Das Wort war Gott (Der Logos)',
    category: 'Jesus ist Gott',
    shortDescription: 'Johannes 1 identifiziert Jesus als das ewige Wort, das nicht nur bei Gott war, sondern Gott selbst war.',
    primaryVerse: {
      verse: 'Johannes 1,1',
      text: 'Im Anfang war das Wort, und das Wort war bei Gott, und das Wort war Gott.',
      source: 'Schlachter 2000'
    },
    contextVerses: [
      {
        verse: 'Johannes 1,14',
        text: 'Und das Wort wurde Fleisch und wohnte unter uns, und wir sahen seine Herrlichkeit...',
        source: 'Schlachter 2000'
      }
    ],
    commentary: `
      <p class="mb-4">Johannes beginnt sein Evangelium mit einer gewaltigen Proklamation: Jesus (der Logos) ist wesenhaft Gott. Im griechischen Urtext wird durch das Fehlen des Artikels vor <em>Theos</em> betont, dass das Wort die Natur Gottes besitzt.</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li><strong>Ewigkeit:</strong> "Im Anfang war..." bezeichnet ein Sein ohne Anfang.</li>
        <li><strong>Unterscheidbarkeit:</strong> "bei Gott" zeigt die Relation zum Vater.</li>
        <li><strong>Wesensgleichheit:</strong> "war Gott" bestätigt die Gottheit des Sohnes.</li>
      </ul>
    `,
    authorOrSource: 'Roger Liebi / Schlachter 2000'
  },
  {
    id: 'der-allmaechtige',
    title: 'Jesus ist der Allmächtige',
    category: 'Jesus ist Gott',
    shortDescription: 'In der Offenbarung beansprucht Jesus den Titel des Allmächtigen, der allein Gott zusteht.',
    primaryVerse: {
      verse: 'Offenbarung 1,8',
      text: 'Ich bin das A und das O, der Anfang und das Ende, spricht der Herr, der ist und der war und der kommt, der Allmächtige.',
      source: 'Schlachter 2000'
    },
    commentary: `
      <p class="mb-4">Hier spricht Jesus Christus als der Auferstandene. Er verwendet Titel, die im Alten Testament ausschließlich für JAHWE reserviert waren ("Ich bin das A und das O", Jesaja 44,6).</p>
      <p>Die Bezeichnung als "der Allmächtige" (griech. <em>Pantokrator</em>) lässt keinen Raum für die Interpretation Jesu als ein niedrigeres Wesen. Er ist der souveräne Herrscher über die gesamte Schöpfung.</p>
    `,
    authorOrSource: 'Schlachter 2000'
  },
  {
    id: 'wahrhaftiger-gott-1joh5',
    title: 'Der wahrhaftige Gott und das ewige Leben',
    category: 'Jesus ist Gott',
    shortDescription: 'Der Apostel Johannes schließt seinen ersten Brief mit einer unmissverständlichen Identifikation Jesu als Gott ab.',
    primaryVerse: {
      verse: '1. Johannes 5,20',
      text: 'Wir wissen aber, dass der Sohn Gottes gekommen ist und uns einen Sinn gegeben hat, damit wir den Wahrhaftigen erkennen; und wir sind in dem Wahrhaftigen, in seinem Sohn Jesus Christus. Dieser ist der wahrhaftige Gott und das ewige Leben.',
      source: 'Schlachter 2000'
    },
    commentary: `
      <p class="mb-4">Diese Stelle ist einer der explizitesten Beweise der Gottheit Jesu. Johannes setzt Jesus Christus ("Dieser") direkt gleich mit dem "wahrhaftigen Gott".</p>
    `,
    authorOrSource: 'Johannes / Schlachter 2000'
  },
  {
    id: 'jesus-der-schoepfer',
    title: 'Jesus: Der Schöpfer aller Dinge',
    category: 'Jesus ist Gott',
    shortDescription: 'Ohne Jesus ist nichts entstanden. Er ist der Architekt und Erhalter des gesamten Universums.',
    primaryVerse: {
      verse: 'Johannes 1,3',
      text: 'Alles ist durch dasselbe entstanden; und ohne dasselbe ist auch nicht eines entstanden, was entstanden ist.',
      source: 'Schlachter 2000'
    },
    // Fix: Added missing required commentary property
    commentary: `
      <p class="mb-4">Jesus Christus ist nicht nur der Erlöser, sondern auch der Schöpfer. Alles, was existiert, verdankt sein Dasein Ihm. Wenn Jesus der Schöpfer von allem ist, kann Er selbst kein Teil der Schöpfung sein.</p>
      <p>Dieser Vers betont die absolute Exklusivität: Ohne Ihn ist <em>nichts</em> entstanden. Dies untermauert seine göttliche Natur, da nur Gott aus dem Nichts erschaffen kann (Creatio ex nihilo).</p>
    `,
    authorOrSource: 'Schlachter 2000'
  },
  {
    id: 'geist-ist-gott-apg5',
    title: 'Den Heiligen Geist belügen ist Gott belügen',
    category: 'Der Heilige Geist ist Gott',
    shortDescription: 'In Apostelgeschichte 5 setzt Petrus den Heiligen Geist direkt mit Gott gleich.',
    primaryVerse: {
      verse: 'Apostelgeschichte 5,3-4',
      text: 'Petrus aber sprach: Ananias, warum hat der Satan dein hart erfüllt, dass du den Heiligen Geist belügst... Du hast nicht Menschen belogen, sondern Gott!',
      source: 'Schlachter 2000'
    },
    commentary: `
      <p class="mb-4">Petrus verwendet hier eine parallele Struktur: Im Vers 3 spricht er davon, den <strong>Heiligen Geist</strong> zu belügen. In Vers 4 schlussfolgert er: "Du hast nicht Menschen belogen, sondern <strong>Gott</strong>."</p>
      <p>Dies ist ein direkter Beweis für die volle Gottheit des Geistes. Man kann keine unpersönliche Kraft belügen, sondern nur eine Person, die Gott selbst ist.</p>
    `,
    authorOrSource: 'Roger Liebi / Schlachter 2000'
  },
  {
    id: 'geist-ewig-hebr9',
    title: 'Der ewige Geist',
    category: 'Der Heilige Geist ist Gott',
    shortDescription: 'Der Heilige Geist teilt das göttliche Attribut der Ewigkeit.',
    primaryVerse: {
      verse: 'Hebräer 9,14',
      text: '...wieviel mehr wird das Blut des Christus, der sich selbst durch den ewigen Geist als ein makelloses Opfer Gott dargebracht hat, euer Gewissen reinigen...',
      source: 'Schlachter 2000'
    },
    commentary: `
      <p class="mb-4">Hier wird der Heilige Geist explizit als der "ewige Geist" bezeichnet. Ewigkeit ist ein exklusives Attribut Gottes. Alles Geschaffene hat einen Anfang, nur Gott ist von Ewigkeit zu Ewigkeit.</p>
    `,
    authorOrSource: 'Schlachter 2000'
  },
  {
    id: 'geist-allgegenwaertig-ps139',
    title: 'Die Allgegenwart des Geistes',
    category: 'Der Heilige Geist ist Gott',
    shortDescription: 'Psalm 139 bezeugt, dass man der Gegenwart des Geistes nirgends entfliehen kann.',
    primaryVerse: {
      verse: 'Psalm 139,7',
      text: 'Wohin sollte ich gehen vor deinem Geist, und wohin sollte ich fliehen vor deinem Angesicht?',
      source: 'Schlachter 2000'
    },
    commentary: `
      <p class="mb-4">Der Psalmist stellt fest, dass der Geist Gottes überall präsent ist – im Himmel, im Totenreich und an den äußersten Enden des Meeres. Allgegenwart ist eine Eigenschaft, die nur Gott allein zukommt.</p>
    `,
    authorOrSource: 'Roger Liebi / Schlachter 2000'
  },
  {
    id: 'geist-allwissend-1kor2',
    title: 'Die Allwissenheit des Geistes',
    category: 'Der Heilige Geist ist Gott',
    shortDescription: 'Der Geist erforscht die Tiefen Gottes, was seine Allwissenheit belegt.',
    primaryVerse: {
      verse: '1. Korinther 2,10-11',
      text: 'Uns aber hat es Gott geoffenbart durch seinen Geist; denn der Geist erforscht alles, auch die Tiefen Gottes... so weiß auch niemand, was in Gott ist, als nur der Geist Gottes.',
      source: 'Schlachter 2000'
    },
    commentary: `
      <p class="mb-4">Der Geist besitzt vollkommenes Wissen über das Wesen Gottes. Er "erforscht" nicht im Sinne von "lernen", sondern im Sinne von "durchdringen". Nur ein göttliches Wesen kann die unendlichen Tiefen Gottes vollkommen kennen.</p>
    `,
    authorOrSource: 'Roger Liebi / Schlachter 2000'
  },
  {
    id: 'geist-der-schoepfer-hiob33',
    title: 'Der Geist als Schöpfer',
    category: 'Der Heilige Geist ist Gott',
    shortDescription: 'Der Heilige Geist ist aktiv an der Schöpfung und Erhaltung des Lebens beteiligt.',
    primaryVerse: {
      verse: 'Hiob 33,4',
      text: 'Der Geist Gottes hat mich gemacht, und der Odem des Allmächtigen hat mir das Leben gegeben.',
      source: 'Schlachter 2000'
    },
    contextVerses: [
      {
        verse: '1. Mose 1,2',
        text: '...und der Geist Gottes schwebte über den Wassern.',
        source: 'Schlachter 2000'
      }
    ],
    commentary: `
      <p class="mb-4">Die Schöpfung ist ein gemeinsames Werk des dreieinigen Gottes. Wie der Vater plant und der Sohn ausführt, so belebt und vollendet der Heilige Geist das Geschaffene.</p>
    `,
    authorOrSource: 'Schlachter 2000'
  }
];

export const getProofById = (id: string): TheologicalProof | undefined => {
  return trinityData.find(p => p.id === id);
};

export const getProofsByCategory = (category: string | null): TheologicalProof[] => {
  if (!category) return trinityData;
  return trinityData.filter(p => p.category === category);
};