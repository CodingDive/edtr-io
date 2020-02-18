import { Document, EditorProvider } from '@edtr-io/core/beta'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { DndProvider } from 'react-dnd'
import html5Backend from 'react-dnd-html5-backend'

import { addStory, EditorStory } from '../src'
import { plugins } from '../src/plugins'

const state = JSON.parse(
  '{"plugin":"rows","state":[{"plugin":"text","state":[{"type":"p","children":[{"text":"Ein Kreis beschreibt die Menge aller Punkte, die denselben Abstand "},{"type":"math","src":"r","inline":true,"children":[{"text":""}]},{"text":" zum Mittelpunkt "},{"type":"math","src":"M","inline":true,"children":[{"text":""}]},{"text":" besitzen. In diesem Artikel lernst du die folgenden Formeln kennen:\\r"}]}]},{"plugin":"text","state":[{"type":"unordered-list","children":[{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":""},{"type":"a","href":"#umfang","children":[{"text":"Berechnung des Umfangs\\r"}]},{"text":""}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":""},{"type":"a","href":"#bogen","children":[{"text":"Berechnung der Kreisbogenlänge"}]},{"text":"\\r"}]}]}]}]},{"plugin":"image","state":{"src":"https://assets.serlo.org/legacy/58ef269467e34_35c96883eb85496db4814393e6c1babd5e3987c1.png","maxWidth":400}},{"plugin":"text","state":[{"type":"h","level":2,"children":[{"text":"Zusammenfassung"}]}]},{"plugin":"text","state":[{"type":"unordered-list","children":[{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Umfang","strong":true},{"text":": "},{"type":"math","src":"U=2\\\\pi r","inline":true,"children":[{"text":""}]},{"text":"","strong":true}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Kreisbogenlänge:","strong":true},{"text":" "},{"type":"math","src":"b=U\\\\cdot\\\\frac{\\\\alpha}{360^{\\\\circ}}","inline":true,"children":[{"text":""}]},{"text":""}]}]}]}]},{"plugin":"anchor","state":"umfang"},{"plugin":"text","state":[{"type":"h","level":2,"children":[{"text":"Bestimmung des Umfangs"}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"Den "},{"type":"a","href":"https://de.serlo.org/36162","children":[{"text":"Umfang"}]},{"text":" erhältst du durch Abrollen des "},{"type":"a","href":"https://de.serlo.org/36162","children":[{"text":"Kreises"}]},{"text":" und messen der abgerollten "},{"type":"a","href":"https://de.serlo.org/1953","children":[{"text":"Strecke"}]},{"text":". Auf diese Weise kannst du die "},{"type":"a","href":"https://de.serlo.org/2107","children":[{"text":"Kreiszahl"}]},{"text":" "},{"type":"math","src":"\\\\pi","inline":true,"children":[{"text":""}]},{"text":" definieren.\\r"}]},{"type":"p","children":[{"text":"\\r"}]},{"type":"p","children":[{"text":"In der Abbildung rechts siehst du, wie ein Kreis mit "},{"type":"a","href":"https://de.serlo.org/36162","children":[{"text":"Durchmesser"}]},{"text":" "},{"type":"math","src":"d=1","inline":true,"children":[{"text":""}]},{"text":" abgerollt wird.\\r"}]}]},{"plugin":"image","state":{"src":"https://assets.serlo.org/legacy/58eb97b7e5376_7d4211710d8bab642798e39e07788e6f2912e86a.gif"}},{"plugin":"text","state":[{"type":"p","children":[{"text":"Sein Umfang beträgt "},{"type":"math","src":"\\\\pi","inline":true,"children":[{"text":""}]},{"text":", also etwa "},{"type":"math","src":"3,14","inline":true,"children":[{"text":""}]},{"text":".    \\r"}]},{"type":"p","children":[{"text":"Für den Umfang findest du so den folgenden Zusammenhang: \\r"}]},{"type":"p","children":[{"text":""},{"type":"math","src":"U=2\\\\cdot r\\\\cdot\\\\pi=d\\\\cdot\\\\pi","inline":true,"children":[{"text":""}]},{"text":"\\r"}]}]},{"plugin":"text","state":[{"type":"h","level":3,"children":[{"text":"Applett (nicht ganz zum Thema)"}]}]},{"plugin":"geogebra","state":"https://www.geogebra.org/m/JkhUAAYY"},{"plugin":"text","state":[{"type":"p","children":[{"text":"Hier siehst du, wie du einen "},{"text":"Umkreis ","strong":true},{"text":"konstruierst. "}]},{"type":"p","children":[{"text":"Hat zwar nichts mit dem Thema zu tun, aber trotzdem schön!"}]}]},{"plugin":"spoiler","state":{"title":"Übung","content":{"plugin":"rows","state":[{"plugin":"text","state":[{"type":"p","children":[{"text":"Ein Kreis hat den Radius "},{"type":"math","src":"r=\\\\ 3\\\\ cm","inline":true,"children":[{"text":""}]},{"text":". Berechne seinen Umfang. Runde auf eine ganze Zahl. Verwende "},{"type":"math","src":"\\\\pi=3,14","inline":true,"children":[{"text":""}]},{"text":"!"}]}]},{"plugin":"inputExercise","state":{"type":"Text","unit":"","answers":[{"value":"19","isCorrect":true,"feedback":{"plugin":"text","state":[]}},{"value":"18","isCorrect":false,"feedback":{"plugin":"text","state":[{"type":"p","children":[{"text":"Hast du für "},{"type":"math","src":"\\\\pi=\\\\ 3,14\\\\ ","inline":true,"children":[{"text":""}]},{"text":"verwendet?"}]}]}}]}}]}}},{"plugin":"anchor","state":"bogen"},{"plugin":"text","state":[{"type":"h","level":2,"children":[{"text":"Berechnung der Kreisbogenlänge"}]},{"type":"p","children":[{"text":" Die "},{"type":"a","href":"https://de.serlo.org/36162","children":[{"text":"Kreisbogenlänge"}]},{"text":" "},{"type":"math","src":"b","inline":true,"children":[{"text":""}]},{"text":" kannst du über den vom Kreissektor eingeschlossenen "},{"type":"a","href":"https://de.serlo.org/1707","children":[{"text":"Winkel"}]},{"text":" "},{"type":"math","src":"\\\\alpha","inline":true,"children":[{"text":""}]},{"text":" und den "},{"type":"a","href":"https://de.serlo.org/1557","children":[{"text":"Radius"}]},{"text":" "},{"type":"math","src":"r","inline":true,"children":[{"text":""}]},{"text":" bestimmen.  \\r"}]},{"type":"p","children":[{"text":"\\r"}]},{"type":"p","children":[{"text":"Der Kreis hat einen Innenwinkel von "},{"type":"math","src":"360^{\\\\circ}","inline":true,"children":[{"text":""}]},{"text":"."}]},{"type":"p","children":[{"text":"Das Verhältnis des Winkels "},{"type":"math","src":"\\\\alpha","inline":true,"children":[{"text":""}]},{"text":" zu "},{"type":"math","src":"360\\\\degree","inline":true,"children":[{"text":""}]},{"text":" , gibt dir den Anteil der Kreisbogenlänge "},{"type":"math","src":"b","inline":true,"children":[{"text":""}]},{"text":" vom Umfang "},{"type":"math","src":"U\\\\ ","inline":true,"children":[{"text":""}]},{"text":"an.\\r"}]},{"type":"p","children":[{"text":"Du erhältst so die Formel:  \\r"}]},{"type":"p","children":[{"text":"\\r"}]},{"type":"p","children":[{"text":""},{"type":"math","src":"b=\\\\frac{\\\\alpha}{360^{\\\\circ}}\\\\cdot U=\\\\frac{\\\\alpha}{360^{\\\\circ}}\\\\cdot2\\\\pi r","inline":true,"children":[{"text":""}]},{"text":""}]}]},{"plugin":"image","state":{"src":"https://assets.serlo.org/legacy/58ecbe6a58ce5_08c8e0a67329de398b57f2611d115762e72ecd08.png","maxWidth":300}},{"plugin":"text","state":[{"type":"h","level":2,"children":[{"text":"Video zum Thema"}]}]},{"plugin":"video","state":{"src":"https://youtu.be/B8eVrg1ki5g","alt":""}}]}'
)

const state2 = JSON.parse(
  '{"plugin":"rows","state":[{"plugin":"text","state":[{"type":"p","children":[{"text":"Alle Inhalte, die neu auf serlo.org angelegt werden, stehen automatisch unter der freien Lizenz CC-BY-SA 4.0. Alle Inhalte von externen Quellen, die du in serlo.org integrieren möchtest - egal ob vollständiger Inhalt, Video oder nur Abbildung - müssen ebenfalls unter einer sehr offenen freien Lizenz stehen. Dazu mehr in dieser Richtlinie."}]}]},{"plugin":"text","state":[{"type":"h","level":3,"children":[{"text":"Urheberrecht"}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"Gehe bei jedem Werk davon aus, dass es dem Schutz des Urheberrechts unterliegt und du es nicht verwenden darfst."}]}]},{"plugin":"text","state":[{"type":"h","level":3,"children":[{"text":"Lizenzen"}]}]},{"plugin":"text","state":[{"type":"unordered-list","children":[{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Eine Lizenz ist eine explizite Genehmigung des Urhebers dir gegenüber zur Nutzung des Werkes."}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Diese Genehmigung geht häufig mit Einschränkungen oder Bedingungen einher. (z.B.: Geldzahlung, Namensnennung, keine kommerzielle Nutzung, keine Veränderungen,...)"}]}]}]}]},{"plugin":"text","state":[{"type":"h","level":3,"children":[{"text":"Freie Lizenzen"}]}]},{"plugin":"text","state":[{"type":"unordered-list","children":[{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Eine freie Lizenz ist eine vom Urheber "},{"text":"für alle im Internet bereitgestellte","strong":true},{"text":" Lizenz."}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Das Wort frei in freie Lizenzen bedeutet absolut nicht, dass diese Lizenz frei von Bedingungen oder Einschränkungen ist."}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Erspart den Nutzern den Aufwand der persönlichen Anfrage. (Häufig findet man auch keine Möglichkeit den Urheber zu erreichen oder er antwortet nicht.)"}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Erspart dem Urheber die Bearbeitung vieler Anfragen."}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Freie Lizenzen regeln die Nutzungsrechte von Werken und beinhalten Bedingungen und Einschränkungen, unter welchen die Nutzung dieser Werke gestattet wird. "}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Man kann den Urheber natürlich trotzdem persönlich um eine Lizenz mit weniger Bedingungen bitten."}]}]}]}]},{"plugin":"image","state":{"src":"https://assets.serlo.org/5d77c39725fe9_0c947449a5dac551c23b78fba2c78f5879320fbb.png"}},{"plugin":"text","state":[{"type":"h","level":3,"children":[{"text":"Häufig verwendete Lizenzen"}]}]},{"plugin":"text","state":[{"type":"unordered-list","children":[{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Die für die Verwendung fremder Werke angenehmsten Freien Lizenzen stellen gemeinfrei, public domai und CC0 , weil sie keine Bedingungen oder Einschränkungen auf die Nutzung legen. "}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Creative Commons (kurz: CC) Lizenzen werden sehr häufig verwendet."}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Auch serlo.org oder Wikipedia (Wikipedia allerdings nur im Text) verwenden diese Creative Commons Lizenzen."}]}]}]}]},{"plugin":"text","state":[{"type":"h","level":3,"children":[{"text":"Creative Commons Lizenzen"}]}]},{"plugin":"text","state":[{"type":"unordered-list","children":[{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Im Folgenden Bild sind die CC Lizenzen die Symbolreihen auf der rechten Seite und fangen mit CC an. "}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Je mehr Symbole rechts des CC zu sehen sind, um so mehr Einschränkungen und Bedingungen liegen auf der Nutzung des Werkes."}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Die CC Lizenzen lassen sich grob nach der Menge der Einschränkungen und Bedingungen sortieren"}]}]}]}]},{"plugin":"image","state":{"src":"https://assets.serlo.org/5d7897b5a02df_67074bffc800665dd3118bea035a180dd9fd2371.svg"}},{"plugin":"text","state":[{"type":"h","level":3,"children":[{"text":"Auf serlo.org erlaubte Lizenzen"}]}]},{"plugin":"text","state":[{"type":"unordered-list","children":[{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Auf serlo.org sind nur Inhalte mit den Lizenzen gemeinfrei, public domain, CC0, CC-BY und CC-BY-SA zulässig."}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Auf Serlo.org veröffentlichst du deine Inhalte unter dem Namen der Serlo Education und der freien Lizenz CC-BY-SA."}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Diese Lizenz ist in obigem Bild als sehr offen klassifiziert."}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Die CC-BY-SA Lizenz verpflichtet jeden der Inhalte von serlo.org verwenden will, den Inhalt unter der selben Lizenz weiter zu geben"}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Die CC-BY-SA Lizenz verpflichtet jeden der Inhalte von serlo.org verwenden will "},{"text":"ohne sie zu verändern","strong":true},{"text":", auf Serlo Education für diese Veröffentlichung zu verweisen."}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"So verbreitet sich unser Name im Internet. "}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Veränderungen an dem Inhalt und eine kommerzielle Nutzung des Inhalts sind gestattet. Dabei gilt für jeden folgenden Nutzer trotzdem immer die CC-BY-SA Lizenz."}]}]}]}]},{"plugin":"text","state":[{"type":"h","level":3,"children":[{"text":"Werke von Anderen verwenden"}]}]},{"plugin":"text","state":[{"type":"unordered-list","children":[{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Willst du ein Werk mit einer CC-BY Lizenz verwenden und "},{"text":"nimmst Veränderungen daran vor","strong":true},{"text":", dann musst du den Namen des ursprünglichen Urhebers nicht mehr nennen. Du bist jetzt der neue Urheber dieses Werkes und könntest eine neue freie Lizenz auf dein Werk legen. Sobald du das WErk auf serlo.org veröffentlichst, ohne auf dich als Urheber zu verweisen, ist Serlo Education der neue Urheber."}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Willst du ein Werk mit einer CC-BY-SA Lizenz verwenden und "},{"text":"nimmst Veränderungen daran vor,","strong":true},{"text":" dann musst du zwar nicht auf den Autor verweisen, musst aber die Lizenz CC-BY-SA auf dem Werk lassen. Trotzdem bist du der neue Urheber. Sobald du das Werk auf serlo.org veröffentlichst, ohne auf dich zu verweisen ist Serlo Education der neue Urheber."}]}]},{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Nimmst du (nicht absolut triviale) Veränderungen an einem Bild vor, welches du auch bearbeiten darfst, so bist du der neue Urheber und musst keinen Lizenzbedingungen mehr Folge leisten. Sobald du dieses Werk auf serlo.org online stellst, gibst du dieses Werk unter der CC-BY-SA Lizenz für alle frei. Wenn du ein Bild von jemand anderem zur Verbildlichung neben dem Text benutzt, dann ist dies keine Veränderung an seinem Werk und du musst unter das Bild alle der Lizenz entsprechenden Information schreiben und auf die entsprechende Lizenz verlinken. Dies gilt auch für gemeinfreie- und public domain-Werke. Verwendest du also ein Werk (nicht auf serlo.org veröffentlicht) von jemand anderem, welches mit einer CC-BY oder CC-BY-SA Lizenz versehen ist, dann musst du seinen Namen unter dem Werk angeben und auf die Lizenz verlinken. "}]}]}]}]},{"plugin":"spoiler","state":{"title":"Erläuterungen zu einem veränderten Werk mit einer CC-BY Lizenz","content":{"plugin":"rows","state":[{"plugin":"text","state":[{"type":"p","children":[{"text":""}]},{"type":"unordered-list","children":[{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Willst du ein Werk mit einer CC-BY Lizenz verwenden und "},{"text":"nimmst Veränderungen daran vor","strong":true},{"text":", dann musst du den Namen des ursprünglichen Urhebers nicht mehr nennen. Du bist jetzt der neue Urheber dieses Werkes und könntest eine neue freie Lizenz auf dein Werk legen. Sobald du das WErk auf serlo.org veröffentlichst, ohne auf dich als Urheber zu verweisen, ist Serlo Education der neue Urheber."}]}]}]}]}]}}},{"plugin":"text","state":[{"type":"p","children":[{"text":"Beispiel 1:","strong":true}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"In diesem Beispiel wird ein gemeinfreies Bild aus dem Internet als einführendes Beispiel verwendet. "},{"type":"a","href":"https://de.wikipedia.org/wiki/Parallelogrammgleichung#/media/Datei:Parallelogram_measures.svg","children":[{"text":"Hier ist ein Bild"}]},{"text":" von einem Parallelogramm bei dem alle Strecken benannt werden. "}]}]},{"plugin":"spoiler","state":{"title":"Hinweise","content":{"plugin":"rows","state":[{"plugin":"text","state":[{"type":"p","children":[{"text":"Dieses Bild ist gemeinfrei. Nach einem klick auf das Wort gemeinfrei rechts unter dem Bild, erfährst du, dass dieses Bild ohne Bedingungen vom Urheber ins public domain übergeben wurde. "}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"In Beispiel 3 findest du ein gemeinfreies Bild auf dem eine Bedingung liegt."}]}]},{"plugin":"image","state":{"src":"https://assets.serlo.org/5d78e29bbd4d9_4290314175c34e53a243ab48aab221269bf2c21c.png"}}]}}},{"plugin":"image","state":{"src":"https://upload.wikimedia.org/wikipedia/commons/1/1d/Parallelogram_measures.svg"}},{"plugin":"text","state":[{"type":"p","children":[{"text":""}]},{"type":"unordered-list","children":[{"type":"list-item","children":[{"type":"list-item-child","children":[{"text":"Willst du ein Werk mit einer CC-BY Lizenz verwenden und "},{"text":"nimmst Veränderungen daran vor","strong":true},{"text":", dann musst du den Namen des ursprünglichen Urhebers nicht mehr nennen. Du bist jetzt der neue Urheber dieses Werkes und könntest eine neue freie Lizenz auf dein Werk legen. Sobald du das WErk auf serlo.org veröffentlichst, ohne auf dich als Urheber zu verweisen, ist Serlo Education der neue Urheber."}]}]}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"Beispiel 2:","strong":true}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"In diesem Beispiel wird ein Bild mit einer CC-BY Lizenz von einer externen Quelle im Internet verwendet. "},{"type":"a","href":"https://de.wikipedia.org/wiki/Datei:Sydney_by_taxi_gnangarra_41.jpg","children":[{"text":"Hier ist ein Bild"}]},{"text":" von einer Brücke, welches du vielleicht in einer Aufgabe zu Parabeln verwenden möchtest. "}]}]},{"plugin":"spoiler","state":{"title":"Hinweise","content":{"plugin":"rows","state":[{"plugin":"text","state":[{"type":"p","children":[{"text":"Hier hat der Autor selber einen Eintrag gemacht, unter welcher Lizenz er sein Werk veröffentlichen will."}]}]},{"plugin":"image","state":{"src":"https://assets.serlo.org/5d78da2b72351_e4e9aac11d45f895e1b547a234a9b3bd2bca7321.png"}},{"plugin":"text","state":[{"type":"p","children":[{"text":"Indem man auf die Lizenzverlinkung klickt, erfährt man, dass sich die urheberrechtlichen Bedingungen dieser australischen CC-BY 2.5 Lizenz in diesem Fall nicht von den allgemeinen unterscheiden."}]}]}]}}},{"plugin":"text","state":[{"type":"p","children":[{"text":"Eine mögliche korrekte Verwendung:"}]}]},{"plugin":"image","state":{"src":"https://upload.wikimedia.org/wikipedia/commons/0/0a/Sydney_by_taxi_gnangarra_41.jpg"}},{"plugin":"text","state":[{"type":"p","children":[{"text":"Fotografie von Gnangarra für wikimedia.commons, "},{"type":"a","href":"https://creativecommons.org/licenses/by/2.5/au/","children":[{"text":"CC-BY 2.5 AU Lizenz"}]},{"text":" "}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":""}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"Beispiel 3:","strong":true}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"In diesem Beispiel geht es um gemeinfreie Werke auf denen Bedingungen liegen. "},{"type":"a","href":"https://commons.wikimedia.org/wiki/File:GodfreyKneller-IsaacNewton-1689.jpg","children":[{"text":"Hier ist ein Bild von Isaac Newton"}]},{"text":", welches du vielleicht für eine Aufgabe aus der Physik verwenden möchtest."}]}]},{"plugin":"spoiler","state":{"title":"Hinweise","content":{"plugin":"rows","state":[{"plugin":"text","state":[{"type":"p","children":[{"text":"In dem Abschnitt zur Lizenz steht, dass dieses Werk Teil der public domain ist."}]}]},{"plugin":"image","state":{"src":"https://assets.serlo.org/5d78b7ff85ae8_b8a448d0893439785550f724b9a2aa389a6d589f.png"}},{"plugin":"text","state":[{"type":"p","children":[{"text":"Es steht jedoch auch mit einem Warnschild versehen dabei, dass man dieses Werk mit dem public domain Tag versehen muss und erklären soll, warum es in der public domain liegt."}]}]},{"plugin":"image","state":{"src":"https://assets.serlo.org/5d78b995185e9_04e652363eca99b478a785d055c2200d6aa0509a.png"}}]}}},{"plugin":"text","state":[{"type":"p","children":[{"text":"Eine mögliche korrekte Verwendung:"}]}]},{"plugin":"image","state":{"src":"https://upload.wikimedia.org/wikipedia/commons/3/39/GodfreyKneller-IsaacNewton-1689.jpg"}},{"plugin":"text","state":[{"type":"p","children":[{"text":""},{"type":"a","href":"https://en.wikipedia.org/wiki/Public_domain","children":[{"text":"Public Domain"}]},{"text":" auch in den USA, "},{"text":"Grund:","strong":true},{"text":" Autor vor mehr als 100 Jahren verstorben "}]}]},{"plugin":"text","state":[{"type":"h","level":2,"children":[{"text":"Frei lizenzierte Inhalte finden"}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"Im Folgenden werden einige nützliche Tipps und Seiten genannt um nach Inhalten mit bestimmten Lizenzen suchen zu können."}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"Bei der Googlesuche nach Bildern kann man bei Tools die Nutzungsrechte einstellen. Für Serlo-Inhalte ist dann die Einstellung zur Wiederverwendung und Veränderung gekennzeichnet"}]}]},{"plugin":"spoiler","state":{"title":"Spezialfälle und Trivia","content":{"plugin":"rows","state":[{"plugin":"text","state":[{"type":"h","level":3,"children":[{"text":"Lang verstorbener Urheber"}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"Die Originalwerke des Urhebers sind in Deutschland 70 Jahre nach dem Tod des Urhebers gemeinfrei. Doch häufig findet man eine Fotografie, Übersetzung, Darstellung, Zusammenstellung oder Interpretation. Es genügen schon wenige Worte, die eine Übersetzung oder Interpretation von dem Original unterscheiden und damit neue zeitliche Daten bezüglich des Verfalls der Urheberrechte festlegen. "}]}]},{"plugin":"text","state":[{"type":"h","level":3,"children":[{"text":"Fotografien von Werken"}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"Fotografien sind spätestens 50 Jahre nach ihrem ersten Erscheinen gemeinfrei. "},{"type":"a","href":"","children":[{"text":"⁸"}]},{"text":""}]}]},{"plugin":"text","state":[{"type":"h","level":3,"children":[{"text":"Bleibe ich Urheber?"}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"Wenn du beispielsweise ein Bild, von welchem du der Urheber bist, in eine Aufgabe auf serlo.org einbindest und deinen Namen mit Lizenz und Verlinkung unter das Bild schreibst, dann bleibst du als Urheber dieses einen Werkes vermerkt. Du bist dann zwar der Urheber des einen Werkes im Artikel, doch für den gesamten Artikel wird nur Serlo Education als Autor unter der CC-BY-SA Lizenz genannt."}]}]},{"plugin":"text","state":[{"type":"h","level":3,"children":[{"text":"Unterschiedliche Lizenzen zu einem Werk"}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"Es kommt vor, dass man von einem Werk unterschiedliche Lizenzen im Internet findet. Man hat dann eigentlich die Wahl, für welche Lizenz man sich entscheidet, doch in der Regel entscheidet man sich natürlich für die offenere."}]}]},{"plugin":"text","state":[{"type":"h","level":3,"children":[{"text":"Was geschieht, wenn man die Bedingungen einer Lizenz verletzt?"}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"Seit den 4.0 Lizenzversionen ist es rechtmäßig das entsprechende Werk weiterhin zu verwenden solange innerhalb von 30 Tagen nachdem es bemerkt wird für die korrekte Abhandlung der Lizenzbedingungen gesorgt wird."}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"Bei früheren Lizenzversionen verfällt die Lizenz für den entsprechenden Nutzer selbst bei unabsichtlicher Verletzung. "}]}]},{"plugin":"text","state":[{"type":"h","level":3,"children":[{"text":"Schriftarten/Fonts"}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":""}]}]}]}}},{"plugin":"text","state":[{"type":"h","level":2,"children":[{"text":"Quellen angeben"}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"8: Fotografien von Werken: "},{"type":"a","href":"https://www.gesetze-im-internet.de/urhg/__72.html","children":[{"text":"§72 UrhG"}]},{"text":""}]}]},{"plugin":"text","state":[{"type":"p","children":[{"text":"siehe "},{"type":"a","href":"/50371","children":[{"text":"Englische Originalseite"}]},{"text":""}]}]},{"plugin":"text","state":[{"type":"h","level":2,"children":[{"text":"Lizenz eines Lerninhalts ändern"}]},{"type":"p","children":[{"text":"Klicke bei einem Lerninhalt auf das Ausklappmenü und dort auf Lizenz auswählen."}]},{"type":"p","children":[{"text":"Bitte wende dich an "},{"type":"a","href":"mailto:de@serlo.org","children":[{"text":"de@serlo.org"}]},{"text":", wenn du nicht über die ausreichenden Bearbeitungsrechte verfügst."}]}]},{"plugin":"text","state":[{"type":"h","level":2,"children":[{"text":"Neue Lizenzen anlegen"}]},{"type":"p","children":[{"text":"Steht eine erlaubte freie Lizenz noch nicht zur Auswahl? Neue Lizenzen können durch Admins hinzugefügt werden. Bitte wende dich dafür an "},{"type":"a","href":"mailto:de@serlo.org","children":[{"text":"de@serlo.org"}]},{"text":"."}]},{"type":"p","children":[{"text":"Details dazu stehen in der Richtlinie"},{"type":"a","href":"/140486","children":[{"text":"Lizenzen verwalten"}]},{"text":"."}]}]}]}'
)

addStory('Article/Initial State', {
  state
})

addStory('Article/Alternative State', {
  state: state2
})

storiesOf('Article', module)
  .add('Initial State (w/ outer DragDropContext)', () => {
    return (
      <DndProvider backend={html5Backend}>
        <EditorStory initialState={state} omitDragDropContext />
      </DndProvider>
    )
  })
  .add('Initial State (w/ change listener)', () => {
    return <EditorStory initialState={state} onChange={action('changed')} />
  })
  .add('Multiple Editors', () => {
    const state2 = {
      plugin: 'rows',
      state: [
        {
          plugin: 'text'
        }
      ]
    }
    return (
      <EditorProvider>
        <div
          style={{
            position: 'fixed',
            width: '20vw',
            right: '0',
            top: '0',
            overflow: 'hidden',
            height: '100vh',
            borderLeft: '4px solid black',
            backgroundColor: '#eee',
            zIndex: 999
          }}
        >
          Here is a small preview of the rendered Document
          <div>
            <div
              style={{
                width: '850px',
                transformOrigin: 'left top 0px',
                transform: 'scale(0.22)',
                overflow: 'hidden'
              }}
            >
              <Document
                initialState={state}
                plugins={plugins}
                scope="instance1"
                mirror
              />
            </div>
          </div>
        </div>
        <Document
          initialState={state}
          plugins={plugins}
          scope="instance1"
          editable
        />
        <p>And here is a second instance</p>
        <Document
          initialState={state2}
          plugins={plugins}
          scope="instance2"
          editable
        />
        <p>And here is the rendered output of Instance 1:</p>
        <Document plugins={plugins} scope="instance1" mirror />
      </EditorProvider>
    )
  })
