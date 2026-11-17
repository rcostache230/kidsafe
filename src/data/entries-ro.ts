import type { Entry } from "@/data/entries";

type LocalizedEntry = Omit<Entry, "slug" | "category" | "riskLevel" | "riskBarPosition" | "related">;

export const roEntryTranslations: Partial<Record<Entry["slug"], Partial<LocalizedEntry>>> = {
  "bump": {
    "name": "Bump by amo",
    "riskLabelText": "Risc ridicat",
    "summary": "O hartă pe care prietenii își partajează locația în timp real. Verifică cine poate vedea deplasările adolescentului și ce informații apar în profilul lui.",
    "description": "Bump le permite prietenilor să se vadă pe o hartă în timp real, să discute și să vadă locurile pe care le-au vizitat. Dacă telefonul îi dă acces la locație în fundal, Bump poate partaja locația adolescentului cu prietenii acceptați, chiar și atunci când aplicația nu e pe ecran. Verificați împreună lista de prieteni, permisiunile de localizare și profilul public.",
    "ageRating": "App Store România: 13+. Pe Google Play în România apare „Acord parental”.",
    "userCount": "Peste 10 milioane de descărcări pe Google Play",
    "platform": "iOS, Android",
    "ageRecommendation": "Recomandarea noastră: de la 16 ani, doar cu prieteni de încredere",
    "quickActions": [
      {
        "title": "Verifică vârsta minimă pentru cont",
        "description": "Bump spune că în majoritatea țărilor trebuie să ai cel puțin 16 ani. Unele țări permit accesul de la 13 ani. Verifică regula locală la înscriere și introdu vârsta reală."
      },
      {
        "title": "Verificați prietenii înainte de a partaja locația",
        "description": "Acceptați doar persoane pe care adolescentul le cunoaște în viața reală și în care are încredere. Prietenii noi pot vedea locația în timp real în mod implicit. Activează Private Mode pentru a limita cererile primite."
      },
      {
        "title": "Stabiliți când opriți partajarea locației",
        "description": "E firesc să luați o pauză. Când adolescentul vrea să nu mai partajeze locația cu nimeni, oprește din setările telefonului accesul aplicației Bump la locație."
      }
    ],
    "watchFor": [
      {
        "title": "Rutina de acasă și de la școală",
        "description": "Un prieten care vede în timp real unde se află adolescentul și cât timp stă într-un loc îi poate deduce rutina zilnică.",
        "severity": "high"
      },
      {
        "title": "Presiunea de a rămâne vizibil pe hartă",
        "description": "Verificările repetate, întrebările despre deplasări sau insistența de a lăsa locația pornită pot fi semne de control. Stabiliți că adolescentul poate opri oricând partajarea.",
        "severity": "high"
      },
      {
        "title": "Profil public și listă de elevi",
        "description": "Alți utilizatori Bump pot vedea profilul. Dacă adolescentul se înscrie pe pagina unei școli, primește o insignă în profil și apare în lista elevilor acelei școli.",
        "severity": "high"
      },
      {
        "title": "Chat și capturi de ecran",
        "description": "Prietenii pot trimite mesaje, fotografii și alte fișiere în conversații individuale sau de grup. Oricine vede un profil sau un marcaj pe hartă poate face o captură și o poate trimite mai departe.",
        "severity": "medium"
      }
    ],
    "appMetrics": [
      {
        "label": "Locația în timp real",
        "value": "Prietenii acceptați pot vedea implicit locația în timp real, inclusiv în fundal dacă telefonul permite. Marcajul de pe hartă poate arăta și de cât timp stă cineva acolo."
      },
      {
        "label": "Private Mode (modul privat)",
        "value": "Când îl activezi, doar persoanele din contactele telefonului îți pot trimite cereri de prietenie. Bump descrie profilurile ca fiind publice. Verifică ce apare pe al tău."
      },
      {
        "label": "Ghost Mode (modul fantomă)",
        "value": "Lasă ultima locație partajată pe harta prietenului ales. Setarea se aplică individual. Aplicația poate înregistra în continuare locații pentru Scratch Map și Nights."
      },
      {
        "label": "Istoricul Scratch Map",
        "value": "Prietenii pot vedea în detaliu zonele pe care le-ai explorat. Alți utilizatori Bump văd o versiune mai puțin detaliată. Potrivit amo, ștergerea istoricului locației presupune ștergerea contului."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Highest concern",
        "description": "Partajarea locației poate continua când Bump rulează în fundal. Un prieten acceptat poate primi imediat acces la locația adolescentului."
      },
      {
        "type": "tip",
        "title": "Most impactful action",
        "description": "Decideți împreună dacă adolescentul își dorește o hartă care se actualizează pe parcursul zilei. Dacă vrea să oprească orice actualizare nouă, retrage accesul aplicației Bump la locație din setările telefonului."
      }
    ],
    "setupGuide": [
      {
        "title": "Limitează cererile de prietenie și verifică profilul",
        "steps": [
          "În Bump, deschide profilul → Friending Settings → Private Mode. Verificați separat lista de prieteni și eliminați persoanele pe care adolescentul nu le cunoaște sau în care nu are încredere.",
          "Verificați poza de profil, locurile salvate și insigna școlii. Pentru a ieși din lista unei școli, atinge numele ei în profil, deschide setările școlii și alege Leave school."
        ]
      },
      {
        "title": "Oprește temporar partajarea locației cu un prieten",
        "steps": [
          "Atinge marcajul prietenului pe hartă, apoi pictograma cu fantomă și activează Ghost Mode pentru acea persoană. Prietenul va vedea în continuare ultima locație pe care i-ai partajat-o."
        ]
      },
      {
        "title": "Oprește accesul la locație din setările telefonului",
        "steps": [
          "Pe iPhone, mergi la Configurări → Intimitate și securitate → Servicii de localizare → Bump și alege Niciodată.",
          "Pe Android, mergi la Setări → Aplicații → Bump → Permisiuni → Locație și alege Nu permite.",
          "Bump nu va mai primi locații noi de pe acel telefon. Harta în timp real și actualizările Scratch Map depind de permisiunea de localizare. Pentru istoricul deja salvat, verifică opțiunea de ștergere a contului."
        ]
      },
      {
        "title": "Blochează sau raportează contactele nedorite",
        "steps": [
          "Deschide profilul persoanei, atinge meniul cu trei puncte și alege opțiunea de blocare sau de raportare. Potrivit Bump, persoanele blocate pot apărea în continuare în grupurile comune. Verificați și acele conversații."
        ]
      },
      {
        "title": "Șterge contul dacă renunțați la Bump",
        "steps": [
          "În Bump, deschide setările → Privacy and terms → Delete my account și confirmă. Bump spune că dezactivează imediat contul. Dacă te conectezi din nou în următoarele 30 de zile, contul se reactivează."
        ]
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-17",
      "availability": "Aplicația apare în magazinele iOS și Android din România. Clasificarea din magazin și vârsta minimă pentru cont sunt reguli separate. Bump precizează că accesul între 13 și 15 ani depinde de țară. Nu am putut confirma rezultatul înscrierii la aceste vârste în România sau documentația pentru un cont de părinte conectat.",
      "sources": [
        {
          "title": "Bump: vârsta minimă pentru cont",
          "url": "https://help.bumpmaps.com/ro/articles/11420225-despre-bump"
        },
        {
          "title": "App Store România: Bump și clasificarea de vârstă",
          "url": "https://apps.apple.com/ro/app/bump-hart%C4%83-pt-prieteni/id6471519217?l=ro"
        },
        {
          "title": "Google Play: pagina Bump în limba română",
          "url": "https://play.google.com/store/apps/details?hl=ro&id=co.amo.android.location"
        },
        {
          "title": "amo: locația în timp real și setările implicite pentru prieteni noi",
          "url": "https://amo.co/services/"
        },
        {
          "title": "Bump: modul Private Mode și cererile de prietenie",
          "url": "https://help.bumpmaps.com/en/articles/14736924-private-mode"
        },
        {
          "title": "Bump: modul fantomă",
          "url": "https://help.bumpmaps.com/en/articles/11604192-ghost-mode"
        },
        {
          "title": "Bump: profiluri publice, locuri și chat",
          "url": "https://help.bumpmaps.com/en/articles/11420926-how-bump-works"
        },
        {
          "title": "Bump: lista elevilor și ieșirea din pagina școlii",
          "url": "https://help.bumpmaps.com/en/articles/13369606-school"
        },
        {
          "title": "Bump: istoricul locației și vizibilitatea hărții Scratch Map",
          "url": "https://help.bumpmaps.com/en/articles/11604738-scratch-map"
        },
        {
          "title": "Bump: blocarea și raportarea utilizatorilor",
          "url": "https://help.bumpmaps.com/en/articles/12141158-community-guidelines"
        },
        {
          "title": "Bump: ce se întâmplă când blochezi pe cineva",
          "url": "https://help.bumpmaps.com/en/articles/11458996-block-someone"
        },
        {
          "title": "Bump: ștergerea contului",
          "url": "https://help.bumpmaps.com/en/articles/11459030-want-to-delete-your-bump-account"
        },
        {
          "title": "amo: politica de confidențialitate și datele de localizare",
          "url": "https://amo.co/privacy-policy"
        },
        {
          "title": "Apple: accesul aplicațiilor la locație pe iPhone",
          "url": "https://support.apple.com/ro-ro/102647"
        },
        {
          "title": "Google: accesul aplicațiilor la locație pe Android",
          "url": "https://support.google.com/android/answer/6179507?hl=ro"
        }
      ]
    }
  },
  "twitch": {
    "name": "Twitch",
    "riskLabelText": "Risc mediu-ridicat",
    "homeBadgeLabel": "Merită urmărit",
    "summary": "O platformă de transmisiuni live axată pe jocuri. Verifică chatul, conținutul despre pariuri, cheltuielile și atașamentul copilului față de streameri.",
    "description": "O platformă de transmisiuni live axată pe jocuri. Verifică chatul, conținutul despre pariuri, cheltuielile și atașamentul copilului față de streameri.",
    "quickActions": [
      {
        "title": "Verifică filtrele și vârsta contului",
        "description": "În Content Preferences, verifică fiecare filtru. Patru categorii sensibile sunt filtrate implicit sub 18 ani, dar adolescentul le poate schimba; Mature-rated Games este o opțiune separată."
      },
      {
        "title": "Alegeți streamerii împreună",
        "description": "Alegeți între 5 și 10 streameri și folosiți lista Following în loc de Browse sau Discovery."
      },
      {
        "title": "Șterge metodele de plată salvate",
        "description": "Elimină cardurile salvate pentru a limita abonamentele și cumpărăturile impulsive de Bits."
      }
    ],
    "watchFor": [
      {
        "title": "Mesaje nepotrivite în chatul live",
        "description": "Pe canalele populare, mesajele apar foarte repede. Copilul poate vedea mesaje sexuale, ură, hărțuire sau tentative de manipulare înainte ca moderatorii să le elimine.",
        "severity": "high"
      },
      {
        "title": "Conținut despre jocuri de noroc și pariuri",
        "description": "Prezentarea repetată a pariurilor drept divertisment le poate face să pară o activitate obișnuită pentru copiii care urmăresc transmisiunea.",
        "severity": "high"
      },
      {
        "title": "Raid-uri cu spectatori necunoscuți",
        "description": "Un raid trimite publicul unui streamer pe alt canal. Copilul poate întâlni brusc un grup mare de spectatori, inclusiv persoane ostile.",
        "severity": "medium"
      },
      {
        "title": "Presiune pentru abonamente și donații",
        "description": "Streamerii cer abonamente și Bits. Copiii se pot simți obligați să-i susțină financiar pe cei de care s-au atașat.",
        "severity": "medium"
      },
      {
        "title": "Atașament față de streameri",
        "description": "Un copil poate avea impresia că îl cunoaște personal pe streamer. Această apropiere poate influența felul în care privește produsele, opiniile sau persoanele promovate în transmisiune.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Verifică fiecare filtru de conținut",
        "steps": [
          "Sub 18 ani sunt filtrate implicit Sexual Themes, Drugs/Intoxication, Violent/Graphic Depictions și Gambling. Verifică separat Mature-rated Games. Sunt preferințe modificabile, nu o blocare controlată exclusiv de părinte; etichetele și moderarea live pot rata conținut."
        ]
      },
      {
        "title": "Blochează mesajele Whispers de la necunoscuți",
        "steps": [
          "În Security and Privacy, verifică Block Whispers from Strangers. Definiția Twitch include excepții, precum conturile urmărite sau contactate deja; regula nu se limitează la urmărirea reciprocă."
        ]
      },
      {
        "title": "Faceți o listă de streameri aprobați",
        "steps": [
          "Urmăriți împreună conținutul a 5 până la 10 streameri și adăugați-i în Following. Folosiți această listă în locul paginilor Browse sau Discovery."
        ]
      },
      {
        "title": "Stabiliți cum folosiți Browse și Discovery",
        "steps": [
          "Twitch nu are o blocare parentală pentru Browse. Conveniți să începeți cu lista Following și reveniți asupra regulii pe măsură ce copilul învață să aleagă conținutul."
        ]
      },
      {
        "title": "Verifică metodele de plată",
        "steps": [
          "Elimină cardurile salvate și verifică separat plățile prin magazinul aplicației și abonamentele active. Acest pas oferă o pauză înaintea unor cumpărături, dar nu blochează fiecare mod de plată."
        ]
      },
      {
        "title": "Vorbiți despre relația cu streamerii",
        "steps": [
          "Explică faptul că un streamer este un creator de divertisment. Copilul poate simți că îl cunoaște, chiar dacă streamerul nu îl cunoaște personal. Discutați cum poate influența această apropiere deciziile și cumpărăturile."
        ]
      },
      {
        "title": "Setează limita de vizionare pe dispozitiv",
        "steps": [
          "Folosește controalele parentale ale dispozitivului pentru o limită a aplicației. Alegeți o durată potrivită pentru școală, somn și celelalte activități."
        ]
      }
    ],
    "ageRating": "13+ oficial",
    "userCount": "Public larg de transmisiuni live",
    "platform": "Web, iOS, Android, Smart TV, console",
    "ageRecommendation": "Cu o listă de streameri aleasă împreună și limite pe dispozitiv",
    "appMetrics": [
      {
        "label": "Filtre de conținut",
        "value": "Adolescentul poate modifica aceste preferințe. Setările nu sunt protejate printr-o deblocare rezervată părintelui."
      },
      {
        "label": "Moderare live",
        "value": "Un moderator poate elimina conținutul dăunător după ce copilul l-a văzut deja."
      },
      {
        "label": "Mesaje private: Whispers",
        "value": "Verifică Block Whispers from Strangers în Security and Privacy. Regula are excepții, inclusiv pentru unele contacte existente."
      },
      {
        "label": "Abonamente și Bits",
        "value": "Ambele pot implica bani reali. Verificați împreună metodele de plată și abonamentele active."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Conținutul live se poate schimba rapid",
        "description": "Filtrele și moderatorii nu pot verifica integral o transmisiune în avans. Copilul poate vedea un mesaj înainte de eliminare."
      },
      {
        "type": "tip",
        "title": "Începe de aici",
        "description": "Alegeți streamerii împreună, verificați filtrele și stabiliți limitele de cheltuieli și vizionare."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Sub 18 ani sunt filtrate implicit patru etichete de conținut sensibil. Mature-rated Games este separat, iar adolescentul poate modifica preferințele. Setările nu sunt o blocare parentală. Portalul de ajutor a afișat o eroare de încărcare; detaliile etichetelor au fost consultate în ghidul oficial indexat.",
      "sources": [
        {
          "title": "Twitch: content display preferences",
          "url": "https://help.twitch.tv/s/article/how-to-customize-content"
        },
        {
          "title": "Twitch: parent and educator guide",
          "url": "https://safety.twitch.tv/s/article/Guide-Parents-Educators?language=en_US"
        },
        {
          "title": "Twitch: safety and Whisper defaults",
          "url": "https://safety.twitch.tv/s/article/Safety-at-Twitch?language=en_US"
        }
      ]
    }
  },
  "steam": {
    "name": "Steam",
    "riskLabelText": "Risc mediu-ridicat",
    "homeBadgeLabel": "Setează controalele mai întâi",
    "summary": "Un magazin și o comunitate de jocuri pentru PC. Verifică accesul la jocuri pentru adulți, discuțiile, schimburile de obiecte și cumpărăturile.",
    "description": "Un magazin și o comunitate de jocuri pentru PC. Verifică accesul la jocuri pentru adulți, discuțiile, schimburile de obiecte și cumpărăturile.",
    "quickActions": [
      {
        "title": "Configurează Steam Families",
        "description": "Creează o familie Steam din contul tău de adult și adaugă copilul cu rol de copil. Activează controalele parentale pentru contul lui."
      },
      {
        "title": "Verifică accesul la Community și chat",
        "description": "Restricționează Community, Store sau chat din controalele copilului dacă nu vrei să folosească aceste funcții."
      },
      {
        "title": "Elimină metodele de plată salvate",
        "description": "Șterge cardurile și folosește carduri cadou sau un sold fix în portofel, ca să păstrezi cheltuielile în buget."
      }
    ],
    "watchFor": [
      {
        "title": "Jocuri nepotrivite vârstei",
        "description": "Verifică jocurile permise în Steam Families. Preferințele de conținut ale magazinului nu decid singure ce este potrivit copilului.",
        "severity": "high"
      },
      {
        "title": "Contact nedorit în Community și chat",
        "description": "Postările și mesajele pot conține hărțuire, conținut pentru adulți sau înșelătorii. Verifică aceste permisiuni separat de lista jocurilor.",
        "severity": "high"
      },
      {
        "title": "Înșelătorii cu schimburi sau conturi",
        "description": "Verifică atent linkurile de schimb și mesajele care pretind că vin de la Steam Support. Nu distribui coduri de conectare.",
        "severity": "high"
      },
      {
        "title": "Cheltuieli în timpul reducerilor",
        "description": "Reducerile și pachetele pot încuraja depășirea bugetului. Verifică metodele de plată și soldul portofelului.",
        "severity": "medium"
      },
      {
        "title": "Cereri de prietenie din jocuri",
        "description": "Întreabă pe cine adaugă copilul și verificați împreună contactele necunoscute.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Creează familia și rolul de copil",
        "steps": [
          "În Steam Settings → Family, creează sau gestionează familia și adaugă copilul ca membru cu rol de copil. Activează controalele parentale și verifică jocurile permise și accesul la Store, Community și chat."
        ]
      },
      {
        "title": "Verifică accesul la Community și chat",
        "steps": [
          "În controalele Steam Families, alege dacă poate folosi Store, Community și chat. Verifică și setările din fiecare joc permis."
        ]
      },
      {
        "title": "Șterge cardurile salvate",
        "steps": [
          "Steam → account name → Account Details → elimină metodele de plată. Poți folosi carduri Steam Wallet cu o valoare lunară fixă, pentru ca alegerile copilului să rămână în buget."
        ]
      },
      {
        "title": "Verificați lista de prieteni",
        "steps": [
          "Steam → profile → Friends. Eliminați persoanele pe care copilul nu le poate identifica din viața reală sau dintr-un context de joc verificat împreună."
        ]
      },
      {
        "title": "Aprobă jocurile disponibile copilului",
        "steps": [
          "În Steam Families, permite o listă de jocuri pe care le-ai verificat. Copilul poate cere adăugarea unui joc nou, iar tu aprobi sau refuzi cererea."
        ]
      },
      {
        "title": "Verifică vârsta recomandată pentru jocurile instalate",
        "steps": [
          "Deschide Library, apasă cu butonul drept pe un joc și deschide pagina sa din magazin pentru clasificarea PEGI sau ESRB. Discutați jocurile recomandate unei vârste mai mari."
        ]
      },
      {
        "title": "Setează timpul și verifică cererile",
        "steps": [
          "Steam Families are limite de timp, program de joacă și cereri pentru timp suplimentar sau cumpărături. Aceste controale nu înlocuiesc setările de chat și confidențialitate din fiecare joc."
        ]
      }
    ],
    "ageRating": "13+ pentru conturi",
    "userCount": "Platformă de jocuri pentru PC",
    "platform": "PC, Mac, Linux, aplicație mobilă companion",
    "ageRecommendation": "Verifică jocurile permise și Community înainte de utilizare independentă",
    "appMetrics": [
      {
        "label": "Steam Families",
        "value": "Adaugă copilul cu rol de copil, apoi activează controalele parentale pentru contul lui."
      },
      {
        "label": "Alegerea jocurilor permise",
        "value": "Poți alege ce jocuri are voie să joace copilul din biblioteca disponibilă."
      },
      {
        "label": "Acces la Community și chat",
        "value": "Verifică aceste permisiuni separat de lista jocurilor. Un joc permis poate avea și propriile setări de chat."
      },
      {
        "label": "Limite pentru timpul de joacă",
        "value": "Setează limite de timp și un program. Copilul poate trimite cereri de timp suplimentar pe care să le verifici."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Verifică și fiecare joc",
        "description": "Steam Families controlează accesul la funcțiile Steam. Un joc permis poate avea propriul multiplayer, cumpărături sau cont extern."
      },
      {
        "type": "tip",
        "title": "Începe de aici",
        "description": "Adaugă rolul de copil, activează controalele parentale și alegeți jocurile și funcțiile comunității."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Steam Families înlocuiește Family View și Family Sharing. Eligibilitatea familiei și partajarea jocurilor au reguli proprii; verifică separat chatul și cumpărăturile din jocuri. Portalul de ajutor a afișat o pagină limitată la această verificare; ghidul și anunțul înlocuirii au fost consultate în textul oficial indexat.",
      "sources": [
        {
          "title": "Steam: Families user guide and parental controls",
          "url": "https://help.steampowered.com/en/faqs/view/054C-3167-DD7F-49D4"
        },
        {
          "title": "Steam: Family View replacement notice",
          "url": "https://help.steampowered.com/en/faqs/view/6B1A-66BE-E911-3D98"
        }
      ]
    }
  },
  "gemini": {
    "summary": "Asistentul AI Google pentru întrebări, scris și învățare. Verifică tipul contului și țara înainte de a te baza pe controalele Family Link.",
    "description": "Asistentul AI Google pentru întrebări, scris și învățare. Verifică tipul contului și țara înainte de a te baza pe controalele Family Link.",
    "ageRating": "Eligibilitatea depinde de țară și tipul contului",
    "userCount": "Elevi și utilizatori de instrumente AI",
    "platform": "Web, Android, iOS",
    "ageRecommendation": "Recomandarea noastră: conturi eligibile, cu reguli de confidențialitate și învățare",
    "quickActions": [
      {
        "title": "Verifică mai întâi eligibilitatea",
        "description": "Google exclude în prezent conturile Gemini Apps supravegheate în SEE, inclusiv România, precum și în Regatul Unit și Elveția."
      },
      {
        "title": "Verifică ce cont folosește",
        "description": "Priviți împreună dacă este un cont personal, supravegheat sau școlar. Accesul școlar depinde de administratorul instituției."
      },
      {
        "title": "Stabiliți ce rămâne privat",
        "description": "Nu introduceți parole, fotografii private sau date de identificare în cereri. Cereți explicații, apoi verificați răspunsurile importante."
      }
    ],
    "setupGuide": [
      {
        "title": "Identifică tipul contului",
        "steps": [
          "Deschideți împreună meniul contului. Un cont școlar și unul personal pot avea reguli diferite de acces și date; întreabă școala cum gestionează contul."
        ]
      },
      {
        "title": "Folosește Family Link doar unde este acceptat",
        "steps": [
          "Pentru un cont supravegheat eligibil din afara regiunilor excluse: Family Link → selectează copilul → Controls → Gemini → Gemini Apps. Verifică dacă accesul este pornit sau oprit. Nu elimina supravegherea și nu schimba data nașterii pentru a ocoli condițiile."
        ]
      },
      {
        "title": "Verifică setările de confidențialitate",
        "steps": [
          "Citește Gemini Privacy Hub pentru contul folosit. Unde există Keep Activity, verificați setarea împreună; oprirea ei nu înseamnă ștergerea imediată a tuturor conversațiilor sau absența verificărilor de siguranță."
        ]
      },
      {
        "title": "Verifică serviciile conectate și fișierele",
        "steps": [
          "Înainte de a permite accesul la altă aplicație sau de a încărca un fișier, discutați ce informații sunt necesare. Evitați documentele care conțin date personale ale altor oameni."
        ]
      },
      {
        "title": "Exersați verificarea unui răspuns",
        "steps": [
          "Încercați o întrebare de la școală și cere copilului să explice răspunsul cu propriile cuvinte. Verificați afirmațiile într-un manual sau într-o sursă originală de încredere."
        ]
      },
      {
        "title": "Raportează un răspuns îngrijorător",
        "steps": [
          "Folosește opțiunea de feedback pentru un răspuns nepotrivit sau incorect. Stabiliți că poate opri conversația și cere ajutorul unei persoane de încredere."
        ]
      }
    ],
    "watchFor": [
      {
        "title": "Greșeli prezentate cu încredere",
        "description": "O explicație clară poate fi greșită. Verificați înainte de a acționa pe baza unui răspuns important.",
        "severity": "high"
      },
      {
        "title": "Informații private în cereri",
        "description": "O fișă sau o captură încărcată poate include nume, fotografii ori alte detalii inutile pentru întrebare.",
        "severity": "high"
      },
      {
        "title": "Instrumentul devine confident",
        "description": "Observă când folosirea AI înlocuiește cererea de ajutor de la oameni sau timpul cu prietenii.",
        "severity": "high"
      },
      {
        "title": "Alt cont decât cel așteptat",
        "description": "Verificați accesul real împreună, fără a presupune că o setare a dispozitivului acoperă fiecare cont.",
        "severity": "high"
      }
    ],
    "appMetrics": [
      {
        "label": "Conturi supravegheate în România",
        "value": "Google nu oferă Gemini Apps conturilor supravegheate din România, care face parte din SEE."
      },
      {
        "label": "Conturi școlare",
        "value": "Administratorul școlii decide dacă Gemini este disponibil pentru un cont școlar."
      },
      {
        "label": "Setări de confidențialitate",
        "value": "Setările pentru date depind de tipul contului. Verifică regulile contului folosit efectiv de copil."
      },
      {
        "label": "Verificarea răspunsurilor",
        "value": "Gemini poate da un răspuns greșit cu multă siguranță. Verificați afirmațiile importante într-o sursă de încredere."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "România și conturile supravegheate",
        "description": "Nu urma un ghid Family Link pentru SUA presupunând că permite Gemini Apps pe un cont supravegheat în România. Documentația Google exclude în prezent SEE."
      },
      {
        "type": "tip",
        "title": "Începe de aici",
        "description": "Verifică tipul contului și alegeți o activitate utilă de învățare pe care să o încercați împreună înainte de utilizarea independentă."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Google exclude în continuare conturile Gemini Apps supravegheate în SEE, Regatul Unit și Elveția. România este în SEE. Conturile școlare au reguli separate ale administratorului; Privacy Hub a fost actualizat la 26 octombrie.",
      "sources": [
        {
          "title": "Google: supervised Gemini Apps accounts",
          "url": "https://support.google.com/gemini/answer/16109150?hl=en"
        },
        {
          "title": "Google: account eligibility",
          "url": "https://support.google.com/gemini/answer/13278668?hl=en"
        },
        {
          "title": "Google: Gemini Privacy Hub",
          "url": "https://support.google.com/gemini/answer/13594961?hl=en"
        }
      ]
    },
    "name": "Gemini",
    "riskLabelText": "Risc ridicat"
  },
  "meta-ai": {
    "summary": "Asistentul AI Meta poate apărea în aplicațiile deja folosite de adolescent. Verifică aplicația și contul: informațiile pentru părinți și alertele nu sunt identice peste tot.",
    "description": "Asistentul AI Meta poate apărea în aplicațiile deja folosite de adolescent. Verifică aplicația și contul: informațiile pentru părinți și alertele nu sunt identice peste tot.",
    "ageRating": "Verifică vârsta minimă a aplicației și eligibilitatea AI regională",
    "userCount": "Utilizatori ai aplicațiilor Meta și instrumentelor AI",
    "platform": "Aplicația și site-ul Meta AI; disponibilitate variabilă în Instagram, Facebook, Messenger și WhatsApp",
    "ageRecommendation": "Recomandarea noastră: conturi de adolescent eligibile, cu supraveghere și limite clare",
    "quickActions": [
      {
        "title": "Identifică unde folosește AI",
        "description": "Roagă adolescentul să îți arate aplicația Meta sau site-ul folosit pentru AI. Nu presupune că o setare Instagram acoperă WhatsApp sau alt cont."
      },
      {
        "title": "Verifică supravegherea",
        "description": "Deschide Family Center pentru contul adolescentului și verificați împreună informațiile AI și setările de conținut disponibile."
      },
      {
        "title": "Explică limitele alertelor",
        "description": "O alertă către părinte este un semnal suplimentar, nu promisiunea că va fi detectată fiecare conversație îngrijorătoare."
      }
    ],
    "setupGuide": [
      {
        "title": "Verifică vârsta contului și aplicația",
        "steps": [
          "Folosește informații corecte despre vârstă și contul potrivit din aplicație. Separă asistentul Meta AI de personajele AI create de utilizatori; controalele unuia nu se aplică automat celuilalt."
        ]
      },
      {
        "title": "Verifică subiectele și supravegherea aplicației",
        "steps": [
          "Actualizarea Meta din 5 octombrie anunță supravegherea disponibilă global în aplicația Meta AI. Părinții conectați pot vedea subiectele din ultimele șapte zile, nu transcrierile. Verifică acel cont în Family Center."
        ]
      },
      {
        "title": "Verifică filtrarea mai strictă",
        "steps": [
          "În aplicația Meta AI, părintele care supraveghează contul poate alege Limited Content în locul setării implicite 13+. Verifică fiecare aplicație separat; opțiunea nu dezactivează toate funcțiile AI."
        ]
      },
      {
        "title": "Verifică lansarea alertelor din octombrie",
        "steps": [
          "Actualizarea Meta din 29 octombrie anunță alerte globale pentru părinții care supraveghează conturi, când conversațiile cu Meta AI pe Instagram, Facebook și Messenger sugerează risc de suicid sau autovătămare. Verifică acel cont; anunțul nu confirmă alerte echivalente pentru WhatsApp sau aplicația separată Meta AI."
        ]
      },
      {
        "title": "Stabiliți reguli despre date și distribuire",
        "steps": [
          "Evitați fotografii private, parole sau date personale ale altora în cereri. Înainte de a distribui un rezultat AI, verificați corectitudinea și acordul persoanelor reprezentate."
        ]
      },
      {
        "title": "Păstrează sprijinul uman",
        "steps": [
          "Întreabă cum s-a simțit în conversație, nu doar ce temă apare în panou. Dacă primești o alertă, discută calm și caută sprijinul potrivit; nu aștepta încă o alertă."
        ]
      }
    ],
    "watchFor": [
      {
        "title": "Prea multă încredere în asistent",
        "description": "Un răspuns prietenos poate fi incorect sau nepotrivit pentru o decizie personală.",
        "severity": "high"
      },
      {
        "title": "Dezvăluiri personale",
        "description": "Discutați ce nu ar vrea să împărtășească unui serviciu online înainte să trimită informațiile.",
        "severity": "high"
      },
      {
        "title": "Aplicații diferite, vizibilitate diferită",
        "description": "Rezumatul unui cont supravegheat nu descrie toate utilizările AI de pe dispozitiv.",
        "severity": "high"
      },
      {
        "title": "Conținut generat înșelător",
        "description": "Verificați imaginile și afirmațiile înainte de a le redistribui sau considera dovezi.",
        "severity": "high"
      }
    ],
    "appMetrics": [
      {
        "label": "Ce poate vedea părintele",
        "value": "Supravegherea poate arăta subiectele conversațiilor recente cu AI, fără a da acces la conversațiile complete."
      },
      {
        "label": "Limited Content",
        "value": "În Instagram și aplicația Meta AI, această setare restrânge conținutul sau conversațiile disponibile adolescentului."
      },
      {
        "label": "Alerte de siguranță pentru părinți",
        "value": "Meta a anunțat lansarea globală a alertelor pentru conturile supravegheate Instagram, Facebook și Messenger. Verifică acel cont."
      },
      {
        "label": "Ce aplicații acoperă setările?",
        "value": "Controalele depind de aplicație și cont. O setare Instagram nu acoperă automat WhatsApp sau o altă conectare."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Lipsa alertei nu înseamnă lipsa problemei",
        "description": "Nu te baza pe un sistem de alerte pentru a evalua starea adolescentului. Păstrează conversațiile obișnuite și legătura cu oamenii de încredere."
      },
      {
        "type": "tip",
        "title": "Începe de aici",
        "description": "Priviți funcția AI folosită efectiv și verificați împreună supravegherea acelui cont."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Supravegherea aplicației Meta AI este documentată global din 5 octombrie. Lansarea globală a alertelor din 29 octombrie vizează conturile supravegheate Instagram, Facebook și Messenger; acoperirea diferă între aplicații.",
      "sources": [
        {
          "title": "Meta: AI app supervision, updated 5 October 2026",
          "url": "https://about.fb.com/news/2026/04/helping-parents-understand-conversations-their-teens-are-having-with-ai/"
        },
        {
          "title": "Meta: alerts, updated 29 October 2026",
          "url": "https://about.fb.com/news/2026/07/keeping-parents-informed-teens-distress-conversations-meta-ai/"
        }
      ]
    },
    "name": "Meta AI",
    "riskLabelText": "Risc ridicat"
  },
  "telegram": {
    "summary": "Un serviciu de mesagerie cu grupuri, canale de difuzare și boți ai unor terți. Condițiile Telegram pentru UE cer 18+; ghidul ajută părinții să înțeleagă și să gestioneze utilizarea existentă.",
    "description": "Un serviciu de mesagerie cu grupuri, canale de difuzare și boți ai unor terți. Condițiile Telegram pentru UE cer 18+; ghidul ajută părinții să înțeleagă și să gestioneze utilizarea existentă.",
    "ageRating": "18+ pentru înregistrare în UE; verifică regulile locale în alte țări",
    "userCount": "Utilizatori de mesagerie, grupuri și canale",
    "platform": "Android, iOS, desktop, web",
    "ageRecommendation": "Recomandarea noastră: o alternativă potrivită vârstei pentru minorii din UE",
    "quickActions": [
      {
        "title": "Verifică vârsta permisă",
        "description": "În România și celelalte țări UE, condițiile Telegram cer 18+ pentru înregistrare. Dacă un copil îl folosește deja, discutați mutarea contactelor importante pe un serviciu potrivit vârstei."
      },
      {
        "title": "Verificați contactele existente",
        "description": "Întreabă despre conversațiile, grupurile, canalele și boții necunoscuți. Ajută copilul să poată vorbi despre presiune, amenințări sau materiale nedorite."
      },
      {
        "title": "Reduceți expunerea în timp ce interveniți",
        "description": "Verificați setările de confidențialitate și raportați mesajele îngrijorătoare înainte de a decide împreună pașii următori."
      }
    ],
    "setupGuide": [
      {
        "title": "Pornește de la situația existentă",
        "steps": [
          "Întreabă de ce folosește Telegram și cine l-a invitat. Aceste verificări ajută la un cont existent; nu sunt instrucțiuni pentru înregistrarea unui copil sub vârsta minimă."
        ]
      },
      {
        "title": "Verifică vizibilitatea numărului",
        "steps": [
          "Deschide Settings → Privacy and Security → Phone Number. Consultă opțiunile de vizibilitate și găsire; ascunderea numărului nu oprește contactul prin grupuri comune sau un nume public de utilizator."
        ]
      },
      {
        "title": "Verifică grupurile și canalele",
        "steps": [
          "Consultă permisiunile de invitare în grupuri din Privacy and Security. Verificați împreună apartenența la grupuri. Un canal difuzează postări; un grup de discuții asociat poate adăuga conversații cu alți utilizatori."
        ]
      },
      {
        "title": "Verifică boții înainte de a trimite date",
        "steps": [
          "Boții și miniaplicațiile pot fi administrate de terți. Un mesaj către un bot poate trimite date dezvoltatorului său. Evitați fișierele private și codurile de conectare."
        ]
      },
      {
        "title": "Înțelege confidențialitatea chatului",
        "steps": [
          "Conversațiile obișnuite din cloud și grupurile nu sunt criptate integral între participanți. Secret Chats folosesc criptare end-to-end și sunt legate de dispozitiv, dar nu garantează un destinatar de încredere și nu împiedică fotografierea ecranului."
        ]
      },
      {
        "title": "Raportează conținutul nedorit sau ilegal",
        "steps": [
          "Folosește Report din meniul mesajului: atinge pe Android, apasă lung pe iOS sau clic dreapta pe desktop. Blochează contactele nedorite și cere ajutor la amenințări; nu redistribui materiale abuzive."
        ]
      }
    ],
    "watchFor": [
      {
        "title": "Mutarea conversației în secret",
        "description": "O cerere de a părăsi un joc sau o aplicație socială pentru un chat privat merită o discuție despre cine o face și de ce.",
        "severity": "high"
      },
      {
        "title": "Conținut dăunător în grupuri și canale",
        "description": "Invitația unui prieten nu garantează că toți membrii sau toate postările sunt sigure.",
        "severity": "high"
      },
      {
        "title": "Boți care cer date private",
        "description": "Tratează un bot ca pe un serviciu separat, cu propriul operator și propriile reguli de confidențialitate.",
        "severity": "high"
      },
      {
        "title": "Cadouri, descărcări sau conectări false",
        "description": "Nu împărtășiți coduri de conectare și nu deschideți fișiere necunoscute pentru a primi o recompensă promisă.",
        "severity": "high"
      }
    ],
    "appMetrics": [
      {
        "label": "Vârsta minimă în UE",
        "value": "Termenii Telegram pentru UE cer cel puțin 18 ani la înscriere. Regula se aplică și în România."
      },
      {
        "label": "Conversații obișnuite",
        "value": "Conversațiile obișnuite și grupurile folosesc criptare în cloud. Nu au criptare end-to-end."
      },
      {
        "label": "Secret Chats",
        "value": "Folosesc criptare end-to-end și rămân pe dispozitivele implicate. Criptarea nu dovedește că cealaltă persoană este de încredere."
      },
      {
        "label": "Boți și miniaplicații",
        "value": "Pot fi administrate de terți. Informațiile trimise unui bot pot ajunge la operatorul acelui serviciu."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Criptarea nu este un calificativ de siguranță",
        "description": "Funcțiile de confidențialitate protejează anumite transferuri de date. Nu stabilesc cine este interlocutorul sau dacă un grup este potrivit pentru copil."
      },
      {
        "type": "tip",
        "title": "Începe de aici",
        "description": "Înțelege utilizarea existentă fără învinovățire, gestionați contactele nedorite și alegeți o cale de comunicare potrivită vârstei."
      },
      {
        "type": "tip",
        "title": "Termenii UE verificați în noiembrie 2026",
        "description": "Termenii actuali Telegram pentru UE cer în continuare cel puțin 18 ani la înscriere. Regula se aplică în România."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-09-03",
      "availability": "Vârsta minimă din UE se aplică României. Meniurile de confidențialitate și raportare diferă după aplicație. Ghidul ajută la verificarea utilizării existente și reducerea riscului, nu recomandă înregistrarea sub vârsta minimă.",
      "sources": [
        {
          "title": "Telegram: condiții UE și vârsta minimă",
          "url": "https://telegram.org/tos/eu"
        },
        {
          "title": "Telegram: confidențialitate, tipuri de chat și raportare",
          "url": "https://telegram.org/faq"
        },
        {
          "title": "Telegram: confidențialitate și boți ai terților",
          "url": "https://telegram.org/privacy"
        },
        {
          "title": "Telegram: canale și grupuri de discuții",
          "url": "https://telegram.org/faq_channels"
        },
        {
          "title": "Telegram: controlul invitațiilor în grupuri",
          "url": "https://translations.telegram.org/en/android/settings/PrivacyInvitesInfo"
        }
      ]
    },
    "name": "Telegram",
    "riskLabelText": "Risc ridicat"
  },
  "whatsapp": {
    "summary": "O aplicație de mesagerie și apeluri pentru familie și grupuri. Verifică dacă este un cont standard sau gestionat de părinte, apoi verifică persoanele de contact, invitațiile și raportarea.",
    "description": "O aplicație de mesagerie și apeluri pentru familie și grupuri. Verifică dacă este un cont standard sau gestionat de părinte, apoi verifică persoanele de contact, invitațiile și raportarea.",
    "ageRating": "Cont standard: 13+ sau mai mult local; conturile gestionate au alte reguli",
    "userCount": "Grupuri de familie, școală și comunitate",
    "ageRecommendation": "Folosește un cont permis vârstei; verificați grupurile împreună",
    "quickActions": [
      {
        "title": "Verifică tipul contului",
        "description": "Pentru un preadolescent, verifică dacă poți configura un cont gestionat de părinte în regiunea ta. Nu folosi o vârstă mai mare pentru un cont standard."
      },
      {
        "title": "Restricționează adăugarea în grupuri",
        "description": "Pe un cont standard, verifică Settings → Privacy → Groups și alege My Contacts sau My Contacts Except…. Verificați invitațiile împreună."
      },
      {
        "title": "Învață cum se raportează",
        "description": "Arată copilului opțiunile de raportare și blocare din chat. Poate cere ajutor chiar dacă discuția a început cu cineva cunoscut."
      }
    ],
    "setupGuide": [
      {
        "title": "Verifică vârsta permisă",
        "steps": [
          "Înregistrarea standard cere cel puțin 13 ani sau o vârstă locală mai mare. Conturile gestionate de părinte au o cale separată pentru copiii mai mici; disponibilitatea se extinde treptat."
        ]
      },
      {
        "title": "Configurează supravegherea unde este disponibilă",
        "steps": [
          "Urmează instrucțiunile oficiale pentru conturi gestionate, cu ambele telefoane prezente. Protejează PIN-ul părintelui și verifică cererile de contact și invitațiile în grupuri. Dacă opțiunea lipsește, alege altă cale potrivită vârstei pentru a păstra legătura."
        ]
      },
      {
        "title": "Verifică invitațiile în grupuri",
        "steps": [
          "La conturile standard, restricționează cine poate adăuga copilul din Privacy → Groups. Persoanele din afara listei permise pot trimite invitații private; discutați pe care să le accepte."
        ]
      },
      {
        "title": "Verifică vizibilitatea profilului",
        "steps": [
          "Consultă cine poate vedea detaliile profilului și Status. Stabiliți ce poate fi împărtășit cu colegii și cu grupurile mai largi."
        ]
      },
      {
        "title": "Raportează contactul abuziv",
        "steps": [
          "Raportarea unui chat individual poate trimite către WhatsApp până la cinci mesaje recente ale persoanei raportate. Citiți împreună explicația din ecranul de raportare; criptarea nu împiedică raportarea."
        ]
      },
      {
        "title": "Stabiliți timp de liniște",
        "steps": [
          "Folosește limitele de timp gestionate de părinte pe dispozitiv, dacă este nevoie. Explică faptul că poate părăsi un grup supărător și poate veni la tine pentru ajutor."
        ]
      }
    ],
    "watchFor": [
      {
        "title": "Invitații nedorite",
        "description": "Restricționarea adăugării în grupuri nu înseamnă că fiecare invitație sau contact cunoscut este sigur.",
        "severity": "high"
      },
      {
        "title": "Mesaje sau imagini umilitoare",
        "description": "Ajută copilul să nu redistribuie materiale dăunătoare și să ceară sprijin când grupul se întoarce împotriva cuiva.",
        "severity": "high"
      },
      {
        "title": "Identități false și cereri de coduri",
        "description": "Verificați cererile neobișnuite pe alt canal de încredere. Nu împărtășiți coduri de conectare.",
        "severity": "high"
      },
      {
        "title": "Presiunea de a fi mereu disponibil",
        "description": "Stabiliți că mesajele familiei și clasei nu necesită răspunsuri pe tot parcursul nopții.",
        "severity": "medium"
      }
    ],
    "appMetrics": [
      {
        "label": "Confidențialitatea conversațiilor personale",
        "value": "Conversațiile și apelurile personale folosesc criptare end-to-end. Aceasta nu face fiecare contact demn de încredere."
      },
      {
        "label": "Raportarea mesajelor nedorite",
        "value": "Poți raporta mesaje abuzive către WhatsApp. Raportarea poate trimite mesaje recente serviciului pentru verificare."
      },
      {
        "label": "Conturi gestionate de părinte",
        "value": "Disponibilitatea este în curs de extindere. Verifică dacă apare configurarea pe telefoanele voastre înainte de a te baza pe aceste controale."
      },
      {
        "label": "Cine poate adăuga copilul în grupuri?",
        "value": "Verifică setările de confidențialitate pentru grupuri. Conturile gestionate de părinte îi permit acestuia să decidă în ce grupuri poate intra copilul."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Ce nu pot face controalele",
        "description": "Conturile gestionate nu permit părintelui să citească discuțiile private dintr-un panou. Discutați în continuare cu cine vorbește copilul și cum se simte."
      },
      {
        "type": "tip",
        "title": "Începe de aici",
        "description": "Verifică tipul contului și permisiunile pentru grupuri înainte de a intra în primul grup al clasei."
      },
      {
        "type": "tip",
        "title": "Disponibilitate verificată în noiembrie 2026",
        "description": "Anunțul oficial descrie în continuare disponibilitate treptată. Dacă nu apare configurarea gestionată de părinte, nu folosi o dată de naștere de adult pentru copil."
      }
    ],
    "riskLabelText": "Risc mediu-ridicat",
    "homeBadgeLabel": "Setează controalele mai întâi",
    "editorialReview": {
      "checkedAt": "2026-09-03",
      "availability": "Anunțul conturilor gestionate de părinte descrie o lansare treptată, fără o dată confirmată de finalizare pentru România. Verifică configurarea pe ambele telefoane; aceste conturi limitează utilizarea la mesaje și apeluri.",
      "sources": [
        {
          "title": "WhatsApp: condiții de înregistrare",
          "url": "https://faq.whatsapp.com/240694875565320"
        },
        {
          "title": "WhatsApp: conturi gestionate de părinte",
          "url": "https://blog.whatsapp.com/introducing-parent-managed-accounts-on-whatsapp"
        },
        {
          "title": "WhatsApp: ajutor pentru conturi gestionate",
          "url": "https://faq.whatsapp.com/899820539143195/"
        },
        {
          "title": "WhatsApp: invitații în grupuri",
          "url": "https://faq.whatsapp.com/1139252413769848/"
        },
        {
          "title": "WhatsApp: raportare și blocare",
          "url": "https://faq.whatsapp.com/414631957536067/"
        }
      ]
    }
  },
  "character-ai": {
    "summary": "Un serviciu de personaje AI și divertisment. Conversațiile libere cu personaje au fost eliminate pentru cei sub 18 ani. După anunțul din octombrie despre procesul de vânzare, verificați împreună abonamentele, datele salvate și notificările serviciului.",
    "description": "Un serviciu de personaje AI și divertisment. Conversațiile libere cu personaje au fost eliminate pentru cei sub 18 ani. După anunțul din octombrie despre procesul de vânzare, verificați împreună abonamentele, datele salvate și notificările serviciului.",
    "ageRating": "Chat deschis cu personaje: 18+",
    "userCount": "Utilizatori de personaje AI și instrumente creative",
    "ageRecommendation": "Recomandarea noastră: fără chat de relație cu AI pentru minori",
    "quickActions": [
      {
        "title": "Verificați contul împreună",
        "description": "Întreabă cum accesează copilul Character.AI, inclusiv site-ul, și verifică dacă informațiile despre vârstă sunt corecte."
      },
      {
        "title": "Verifică experiența disponibilă",
        "description": "Dacă un minor poate accesa în continuare chatul deschis cu personaje, contactează suportul oficial despre protecțiile de vârstă."
      },
      {
        "title": "Întreabă ce îi oferă serviciul",
        "description": "Discutați utilizarea creativă, compania și orice îl face să se simtă inconfortabil. Stabiliți limite împreună."
      }
    ],
    "setupGuide": [
      {
        "title": "Începe cu o conversație",
        "steps": [
          "Roagă copilul să îți arate ce folosește și de ce. Nu transforma destăinuirea într-un motiv de pedeapsă."
        ]
      },
      {
        "title": "Verifică protecțiile de vârstă",
        "steps": [
          "Actualizarea companiei din septembrie 2026 reconfirmă eliminarea chatului deschis pentru cei sub 18 ani. Nu introduce o dată de naștere de adult pentru a obține acces."
        ]
      },
      {
        "title": "Verifică și alte căi de acces",
        "steps": [
          "Priviți împreună accesul din browser și alte conturi. Limita unei singure aplicații nu înlocuiește acordul familiei despre toate serviciile."
        ]
      },
      {
        "title": "Stabiliți limite de confidențialitate",
        "steps": [
          "Stabiliți să nu împărtășească unui chatbot parole, detalii care identifică școala sau imagini private."
        ]
      },
      {
        "title": "Stabiliți limite de timp",
        "steps": [
          "Folosește limitele gestionate de părinte pe dispozitiv și stabiliți timp fără AI, mai ales înainte de culcare."
        ]
      },
      {
        "title": "Păstrează sprijinul uman",
        "steps": [
          "Dacă copilul descrie suferință, ascultă-l și ajută-l să ajungă la o persoană de încredere sau la sprijin profesional potrivit. Nu te baza pe un chatbot pentru gestionarea unei crize."
        ]
      },
      {
        "title": "Verifică actualizarea serviciului din octombrie",
        "steps": [
          "La 12 octombrie 2026, Character.AI a anunțat un proces Chapter 11 pentru vânzarea companiei. Anunțul spune că serviciul funcționează și abonamentele continuă să fie facturate, dar avertizează că platforma se poate închide dacă nu apare o ofertă potrivită. Verificați notificările actuale și opțiunile de export, ștergere și abonament."
        ]
      }
    ],
    "watchFor": [
      {
        "title": "Înlocuirea relațiilor obișnuite",
        "description": "Observă dacă discuțiile cu AI înlocuiesc repetat prietenii, familia sau activitățile obișnuite.",
        "severity": "high"
      },
      {
        "title": "Presiune pentru secrete",
        "description": "Încurajează copilul să îți arate răspunsuri care cer secrete sau îl fac să se simtă dependent.",
        "severity": "high"
      },
      {
        "title": "Sfaturi tratate ca autoritate",
        "description": "Răspunsurile AI pot fi greșite. Deciziile personale importante merită ajutor uman și informații de încredere.",
        "severity": "high"
      },
      {
        "title": "Acces diferit de cel așteptat",
        "description": "Dacă sunt oferite funcții pentru adulți, opriți-vă și verificați vârsta declarată și opțiunile de suport.",
        "severity": "high"
      }
    ],
    "appMetrics": [
      {
        "label": "Conversații libere sub 18 ani",
        "value": "Character.AI spune că a eliminat conversațiile libere cu personaje pentru utilizatorii sub 18 ani."
      },
      {
        "label": "Verificarea vârstei contului",
        "value": "Verificați împreună data nașterii și funcțiile disponibile. Contactează asistența dacă are acces la funcții rezervate adulților."
      },
      {
        "label": "Accesul prin browser",
        "value": "Verifică site-ul, alături de aplicația instalată. Limita unei aplicații nu acoperă toate modurile de a folosi serviciul."
      },
      {
        "label": "Sprijin din partea oamenilor",
        "value": "Păstrează legătura cu persoane de încredere. Un chatbot nu poate înlocui sprijinul uman când copilului îi este greu."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Ce nu pot face controalele",
        "description": "Verificarea vârstei sau un răspuns de siguranță nu garantează că fiecare interacțiune este potrivită. Un chatbot nu poate înlocui sprijinul uman de încredere."
      },
      {
        "type": "tip",
        "title": "Începe de aici",
        "description": "Verificați împreună experiența reală a contului și stabiliți la ce este util AI în familia voastră."
      },
      {
        "type": "warning",
        "title": "Starea serviciului se poate schimba",
        "description": "Anunțul din octombrie descrie funcționarea în timpul unui proces de vânzare. Nu promite că platforma sau funcțiile plătite vor rămâne disponibile."
      }
    ],
    "riskLabelText": "Risc foarte ridicat",
    "homeBadgeLabel": "Necesită atenție sporită",
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Actualizarea de siguranță din septembrie confirmă eliminarea conversațiilor libere sub 18 ani. Anunțul din 12 octombrie spune că serviciile și facturarea continuă în timpul procesului de vânzare; funcționarea viitoare este incertă.",
      "sources": [
        {
          "title": "Character.AI: September safety update",
          "url": "https://blog.character.ai/continuing-to-build-upon-our-safety-priorities/"
        },
        {
          "title": "Character.AI: 12 October service and subscription update",
          "url": "https://blog.character.ai/an-update-on-character-ai/"
        }
      ]
    }
  },
  smartphone: {
    name: "Telefon",
    riskLabelText: "Risc critic",
    summary:
      "Un telefon reunește mesageria, internetul, camera, plățile și partajarea locației.",
    description:
      "Un telefon reunește mesageria, internetul, camera, plățile și partajarea locației. Configurează-l înainte să-l dai copilului, pentru a limita distragerile, contactele private și accesul la conținut pe care s-ar putea să nu-l vezi.",
    quickActions: [
      {
        title: "Activeaza Screen Time sau Family Link",
        description:
          "Fa asta inainte de a adauga aplicatii noi, astfel incat regulile sa existe dinainte, nu dupa ce apare o problema."
      },
      {
        title: "Cere aprobarea pentru fiecare descarcare",
        description:
          "Un copil nu ar trebui sa poata instala aplicatii de chat, video sau anonime fara acordul tau."
      },
      {
        title: "Dezactiveaza locatia pentru toate aplicatiile in mod implicit",
        description:
          "Activeaz-o din nou doar pentru aplicatii esentiale, precum harti sau instrumente de localizare in familie."
      }
    ],
    watchFor: [
      {
        title: "Design care creeaza dependenta",
        description:
          "Notificarile, streak-urile, autoplay-ul si fluxurile scurte sunt concepute sa faca un copil sa verifice telefonul iar si iar.",
        severity: "high"
      },
      {
        title: "Acces nerestrictionat la internet",
        description:
          "Un copil poate ajunge foarte repede la continut pentru adulti, cautari periculoase sau linkuri primite de la straini daca filtrele web nu sunt active.",
        severity: "critical"
      },
      {
        title: "Aplicatiile urmaresc locatia",
        description:
          "Jocurile, retelele sociale si aplicatiile de cumparaturi cer des acces la locatie chiar si atunci cand nu au nevoie de el.",
        severity: "high"
      },
      {
        title: "Contact cu straini prin aplicatii descarcate",
        description:
          "Un telefon devine instant un dispozitiv de chat privat in clipa in care sunt permise aplicatii cu mesaje directe, apeluri vocale sau invitatii in grupuri.",
        severity: "critical"
      },
      {
        title: "Cumparaturi in aplicatie",
        description:
          "Datele de plata salvate si achizitiile dintr-o singura atingere pot transforma impulsurile mici in costuri repetate.",
        severity: "medium"
      }
    ],
    setupGuideIntro:
      "Pe iPhone foloseste traseul Apple, iar pe Android traseul Google. Scopul este acelasi: limitele sa stea in spatele unui cod cunoscut doar de parinte.",
    setupGuide: [
      {
        title: "Porneste instrumentul nativ de familie",
        steps: [
          "iPhone: Settings → Screen Time → Turn On Screen Time. Android: instaleaza Google Family Link pe telefonul parintelui si conecteaza contul Google al copilului."
        ]
      },
      {
        title: "Blocheaza setarile cu un cod de parinte",
        steps: [
          "Seteaza un cod Screen Time sau metoda de aprobare din Family Link pe care copilul nu o cunoaste."
        ]
      },
      {
        title: "Cere aprobare pentru fiecare instalare",
        steps: [
          "iPhone: Settings → Screen Time → Content & Privacy Restrictions → iTunes & App Store Purchases. Android: Family Link → Controls → Content restrictions → Google Play."
        ]
      },
      {
        title: "Adauga limite de timp si blocare la ora de somn",
        steps: [
          "iPhone: Settings → Screen Time → App Limits si Downtime. Android: Family Link → Controls → Screen time → Daily limit si Bedtime."
        ]
      },
      {
        title: "Opreste accesul la locatie in mod implicit",
        steps: [
          "iPhone: Settings → Privacy & Security → Location Services. Android: Settings → Location → App permissions. Porneste locatia doar pentru aplicatiile care chiar au nevoie de ea."
        ]
      }
    ]
  },
  tablet: {
    name: "Tableta",
    riskLabelText: "Risc ridicat",
    summary:
      "O tabletă are browsere, aplicații video și magazine de aplicații ca un telefon, chiar dacă rămâne în casă.",
    description:
      "O tabletă are browsere, aplicații video și magazine de aplicații ca un telefon, chiar dacă rămâne în casă. Dacă o folosiți în comun, verifică dacă cel mic poate accesa contul, istoricul sau permisiunile unui adult.",
    quickActions: [
      {
        title: "Creeaza un profil pentru copil",
        description: "Nu oferi o tableta care este inca autentificata ca adult."
      },
      {
        title: "Dezactiveaza browserul sau foloseste mod restrictionat",
        description:
          "Daca tableta este folosita mai ales pentru video sau scoala, inchide navigarea deschisa inca de la inceput."
      },
      {
        title: "Activeaza limite de timp pe aplicatie",
        description:
          "Aplicatiile video si jocurile au nevoie de limite proprii, nu doar de o limita pentru tot dispozitivul."
      }
    ],
    watchFor: [
      {
        title: "Dispozitiv comun inseamna date comune",
        description:
          "Daca un profil de adult ramane conectat, un copil poate mosteni email deschis, parole salvate si acces complet la magazinul de aplicatii.",
        severity: "medium"
      },
      {
        title: "Restrictiile sunt usor de ocolit pe un dispozitiv neprotejat",
        description:
          "Daca tableta nu este protejata de un cod stiut doar de parinte, copilul poate opri limitele sau poate schimba contul.",
        severity: "high"
      },
      {
        title: "Autoplay-ul de pe YouTube ii tine pe copii lipiti de ecran",
        description:
          "Un videoclip aparent inofensiv poate deveni rapid un lant de continut mai zgomotos, mai rapid sau mai extrem.",
        severity: "high"
      },
      {
        title: "Magazinele de aplicatii raman deschise daca nu le blochezi",
        description:
          "Copiii pot instala aplicatii de chat, browsere sau jocuri care aduc straini si presiune de a cheltui bani.",
        severity: "high"
      }
    ],
    setupGuideIntro:
      "Pe tablete, blocarea dispozitivului conteaza la fel de mult ca regulile software. Daca un copil poate schimba contul sau folosi un dispozitiv de familie deblocat, restrictiile sunt usor de evitat.",
    setupGuide: [
      {
        title: "Configureaza tableta pentru copil, nu ca dispozitiv comun de adult",
        steps: [
          "iPad: Settings → Screen Time → Turn On Screen Time si alege This is My Child's iPad. Android tablet: adauga un cont Google supravegheat prin Family Link."
        ]
      },
      {
        title: "Foloseste un cod cunoscut doar de parinte",
        steps: [
          "Blocheaza Screen Time sau Family Link cu un cod pe care copilul nu il stie si dezactiveaza Guest access daca dispozitivul il ofera."
        ]
      },
      {
        title: "Restrange navigarea si setarile video",
        steps: [
          "Activeaza restrictiile de continut web si foloseste Restricted Mode pe YouTube inainte sa dai tableta copilului."
        ]
      },
      {
        title: "Limiteaza magazinul de aplicatii",
        steps: [
          "Cere aprobare pentru descarcarile din App Store sau Google Play si ascunde complet magazinul daca tableta este folosita mai ales pentru jocuri sau scoala."
        ]
      },
      {
        title: "Seteaza limite pentru aplicatiile cele mai folosite",
        steps: [
          "Foloseste Screen Time → App Limits sau Family Link → Screen time pentru a limita separat video, jocuri si browserul."
        ]
      }
    ]
  },
  laptop: {
    name: "Laptop",
    riskLabelText: "Risc critic",
    summary:
      "Un laptop pentru școală oferă și acces la browsere, descărcări, jocuri, VPN-uri și chat.",
    description:
      "Un laptop pentru școală oferă și acces la browsere, descărcări, jocuri, VPN-uri și chat. Utilizarea poate fi mai greu de urmărit în afara unei camere comune. Creează un cont standard pentru copil și păstrează tu accesul de administrator.",
    quickActions: [
      {
        title: "Creeaza un cont limitat pentru copil",
        description:
          "Un cont standard blocheaza imediat multe instalari si schimbari de setari."
      },
      {
        title: "Instaleaza filtrare DNS",
        description:
          "Cloudflare for Families 1.1.1.3 este un prim strat simplu pentru blocarea continutului pentru adulti."
      },
      {
        title: "Activeaza limitele de timp din sistem",
        description:
          "Foloseste programarea incorporata ca laptopul sa se blocheze la culcare chiar daca cel mic uita."
      }
    ],
    watchFor: [
      {
        title: "Acces liber in browser",
        description:
          "Un laptop poate ajunge aproape oriunde pe internet, inclusiv la site-uri pentru adulti, forumuri periculoase si streamuri nemoderate.",
        severity: "critical"
      },
      {
        title: "Descarcari de fisiere",
        description:
          "Copiii pot instala programe, moduri, jocuri piratate si extensii de browser care deschid rapid alte riscuri.",
        severity: "high"
      },
      {
        title: "Ocolirea filtrelor cu VPN",
        description:
          "Dupa ce un VPN este instalat, un copil poate evita filtrele de acasa si restrictiile de la scoala.",
        severity: "high"
      },
      {
        title: "Dependenta de jocuri",
        description:
          "Pentru ca laptopul este portabil, jocurile tarzii in noapte si utilizarea ascunsa pot creste mai repede decat pe un desktop de familie.",
        severity: "high"
      },
      {
        title: "Discord si aplicatii de chat private",
        description:
          "Multe laptopuri devin un centru pentru voice chat, servere private si contact de tip friend-of-a-friend pe care parintii nu il aud niciodata.",
        severity: "high"
      }
    ],
    setupGuideIntro:
      "La laptop, cea mai importanta alegere este ca acel cont al copilului sa fie standard, nu administrator. Doar aceasta decizie blocheaza multe ocoliri.",
    setupGuide: [
      {
        title: "Creeaza un cont limitat pentru copil",
        steps: [
          "Windows: Settings → Accounts → Family. macOS: System Settings → Users & Groups → Add User si seteaza-l ca standard account."
        ]
      },
      {
        title: "Conecteaza sistemul de control parental",
        steps: [
          "Windows: adauga copilul in Microsoft Family Safety prin family.microsoft.com. macOS: System Settings → Screen Time si activeaza-l pentru contul copilului."
        ]
      },
      {
        title: "Filtreaza traficul web la nivel de retea",
        steps: [
          "Seteaza DNS la Cloudflare for Families 1.1.1.3 pe laptop sau pe router, astfel incat site-urile pentru adulti sa fie blocate inainte sa se deschida browserul."
        ]
      },
      {
        title: "Pune instalarile in spatele parolei tale",
        steps: [
          "Pastreaza drepturile de administrator la parinte, astfel incat browsere noi, VPN-uri, clienti de chat si launchere de jocuri sa nu poata fi adaugate liber."
        ]
      },
      {
        title: "Seteaza timp separat pentru browsere, jocuri si chat",
        steps: [
          "Foloseste Family Safety sau Screen Time pentru a pune limite separate pe browser, aplicatiile de gaming si instrumentele de comunicare."
        ]
      }
    ]
  },
  desktop: {
    name: "Desktop PC",
    riskLabelText: "Risc critic",
    summary:
      "Un computer desktop rămâne într-un singur loc. Alege o cameră comună, unde poți vedea cum este folosit.",
    description:
      "Un computer desktop rămâne într-un singur loc. Alege o cameră comună, unde poți vedea cum este folosit. În dormitor, jocurile, navigarea, conversațiile private și utilizarea noaptea pot trece neobservate.",
    quickActions: [
      {
        title: "Mutati PC-ul intr-o zona comuna",
        description:
          "Vizibilitatea reduce utilizarea ascunsa mai mult decat aproape orice setare software."
      },
      {
        title: "Activeaza Windows Family Safety sau macOS Screen Time",
        description:
          "Porneste instrumentul nativ inainte de a adauga magazine de jocuri, browsere sau aplicatii de chat."
      },
      {
        title: "Pastreaza parola contului doar pentru tine",
        description:
          "Copilul nu ar trebui sa stie parola care aproba instalari sau scoate limite."
      }
    ],
    watchFor: [
      {
        title: "Utilizare nesupravegheata in camera",
        description:
          "Un desktop in dormitor face usoara ascunderea jocurilor tarzii in noapte, a continutului explicit si a chat-urilor private.",
        severity: "critical"
      },
      {
        title: "Obiceiurile de limitare de pe telefon nu se transfera automat",
        description:
          "Multe familii limiteaza telefoanele, dar uita complet desktopul si astfel apare un al doilea ecran nesupravegheat.",
        severity: "medium"
      },
      {
        title: "Platforme de joc precum Steam",
        description:
          "Magazinele de jocuri pentru desktop aduc jocuri mature, functii sociale, voice chat si presiune constanta de reduceri.",
        severity: "high"
      },
      {
        title: "Discord si chat de comunitate",
        description:
          "Utilizarea de pe desktop ii muta adesea pe copii spre servere si canale vocale unde adultii pot intra foarte usor.",
        severity: "high"
      }
    ],
    setupGuideIntro:
      "Siguranta pe desktop depinde mult de locatie. Controalele parentale native functioneaza mai bine cand dispozitivul este vizibil si folosit in comun, nu izolat.",
    setupGuide: [
      {
        title: "Creeaza un cont separat pentru copil",
        steps: [
          "Windows: Settings → Accounts → Family. macOS: System Settings → Users & Groups → Add User si lasa-l standard account."
        ]
      },
      {
        title: "Porneste tabloul de bord pentru familie",
        steps: [
          "Windows: conecteaza copilul la Microsoft Family Safety. macOS: System Settings → Screen Time si aplica limite contului copilului."
        ]
      },
      {
        title: "Pune instalarile software in spatele parolei tale",
        steps: [
          "Nu impartasi parola de administrator. Steam, Discord, VPN-urile si browserele secundare sunt mult mai greu de adaugat fara ea."
        ]
      },
      {
        title: "Adauga program pentru browser si jocuri",
        steps: [
          "Foloseste Family Safety sau Screen Time pentru ferestre clare de timp pentru browser, jocuri si aplicatii de chat."
        ]
      },
      {
        title: "Verifica activitatea o data pe saptamana",
        steps: [
          "Uita-te la rapoartele de timp, aplicatiile instalate si activitatea recenta din prieteni sau servere inainte sa devina o surpriza."
        ]
      }
    ]
  },
  ios: {
    riskLabelText: "Risc critic",
    summary:
      "Verifică Screen Time, AirDrop, mesageria și aprobarea aplicațiilor înainte să dai copilului un iPhone sau iPad.",
    description:
      "Verifică Screen Time, AirDrop, mesageria și aprobarea aplicațiilor înainte să dai copilului un iPhone sau iPad. Setările implicite nu acoperă nevoile fiecărei familii.",
    quickActions: [
      {
        title: "Seteaza un cod separat pentru Screen Time",
        description:
          "Asta face diferenta dintre Screen Time care doar pare activ si unul care chiar ramane activ."
      },
      {
        title: "Activeaza Communication Limits",
        description:
          "Reduce sansa ca numere necunoscute sa ajunga la copil prin Messages sau FaceTime."
      },
      {
        title: "Seteaza AirDrop pe Contacts Only sau Off",
        description:
          "Fa asta inainte de evenimente scolare, antrenamente sau orice context aglomerat."
      }
    ],
    watchFor: [
      {
        title: "Contact prin iMessage de la straini",
        description:
          "Daca setarile de comunicare sunt deschise, numere necunoscute pot ajunge direct la copil prin Messages.",
        severity: "high"
      },
      {
        title: "AirDrop de la straini",
        description:
          "Persoanele din apropiere pot trimite imagini sau fisiere nedorite daca AirDrop ramane deschis.",
        severity: "high"
      },
      {
        title: "Screen Time poate fi ocolit daca cel mic stie parola Apple ID",
        description:
          "Daca un copil poate reseta sau schimba controalele, restul configurarii isi pierde rapid valoarea.",
        severity: "critical"
      },
      {
        title: "Descarcarile de aplicatii si cheltuielile raman usoare in mod implicit",
        description:
          "Fara Ask to Buy si limite pentru cumparaturi, un copil poate instala aplicatii sociale sau cheltui bani mai repede decat se asteapta multi parinti.",
        severity: "medium"
      }
    ],
    setupGuideIntro:
      "Meniu: Settings → Screen Time. Foloseste un cod Screen Time diferit de codul de deblocare si de parola Apple ID a copilului.",
    setupGuide: [
      {
        title: "Porneste Screen Time",
        steps: [
          "Deschide Settings → Screen Time si alege This is My Child's iPhone sau iPad."
        ]
      },
      {
        title: "Seteaza un cod separat pentru Screen Time",
        steps: [
          "Foloseste un cod pe care copilul nu il cunoaste, astfel incat sa nu poata schimba restrictiile in acel moment."
        ]
      },
      {
        title: "Activeaza Communication Limits",
        steps: [
          "Settings → Screen Time → Communication Limits. Restrictioneaza cine ii poate contacta in timpul permis si in downtime."
        ]
      },
      {
        title: "Porneste Content & Privacy Restrictions",
        steps: [
          "Settings → Screen Time → Content & Privacy Restrictions. Blocheaza instalarile de aplicatii, cumparaturile si continutul nepotrivit pentru varsta."
        ]
      },
      {
        title: "Adauga Downtime si App Limits",
        steps: [
          "Settings → Screen Time → Downtime si App Limits. Foloseste-le impreuna ca sa functioneze si ora de culcare, si limitele pe categorii."
        ]
      },
      {
        title: "Inchide expunerea prin AirDrop",
        steps: [
          "Settings → General → AirDrop. Seteaza Contacts Only sau Receiving Off."
        ]
      }
    ]
  },
  android: {
    riskLabelText: "Risc critic",
    summary:
      "Folosește Family Link pentru supravegherea unui dispozitiv Android și verifică browserul și instalările din afara Play Store.",
    description:
      "Folosește Family Link de la început. Verifică browserul și instalările din afara Play Store, care pot ocoli restricțiile magazinului. Numele meniurilor diferă între producători.",
    quickActions: [
      {
        title: "Configureaza Google Family Link",
        description:
          "Nu astepta pana dupa ce copilul a adaugat deja aplicatii si contacte."
      },
      {
        title: "Dezactiveaza Install unknown apps",
        description: "Aceasta inchide una dintre cele mai mari rute de ocolire pe Android."
      },
      {
        title: "Cere aprobare pentru fiecare instalare",
        description:
          "Inclusiv pentru jocuri gratuite, aplicatii de chat si magazine alternative."
      }
    ],
    watchFor: [
      {
        title: "Instalarea de APK-uri ocoleste controalele Play Store",
        description:
          "Un copil poate instala aplicatii din linkuri, fisiere sau magazine terte chiar daca magazinul oficial este restrictionat.",
        severity: "critical"
      },
      {
        title: "Un cont Google deschide foarte mult acces",
        description:
          "Email, YouTube, Drive, Maps, Chrome si sincronizarea aplicatiilor devin active impreuna daca acel cont nu este supravegheat bine.",
        severity: "high"
      },
      {
        title: "Family Link acopera cel mai bine conturile sub 13 ani",
        description:
          "Pe masura ce copiii cresc, unele setari devin mai usor de contestat, amanat sau ocolit.",
        severity: "medium"
      },
      {
        title: "Expunerea prin browser ramane mare daca nu este filtrata",
        description:
          "Chiar daca instalarile de aplicatii sunt aprobate, Chrome poate deveni in continuare cea mai rapida cale catre continut explicit sau periculos.",
        severity: "high"
      }
    ],
    setupGuideIntro:
      "Family Link este cel mai puternic pentru conturi de copil supravegheate, mai ales sub 13 ani. Pentru adolescentii mai mari este posibil sa obtii doar o parte din controale prin Digital Wellbeing si reguli de familie.",
    setupGuide: [
      {
        title: "Activeaza Family Link mai intai",
        steps: [
          "Instaleaza Google Family Link pe telefonul parintelui si conecteaza contul Google al copilului inainte ca acesta sa personalizeze dispozitivul."
        ]
      },
      {
        title: "Aproba fiecare instalare de aplicatie",
        steps: [
          "Deschide Family Link → Controls → Content restrictions → Google Play si cere aprobare pentru instalari si cumparaturi."
        ]
      },
      {
        title: "Seteaza limite zilnice si blocare la culcare",
        steps: [
          "Mergi la Family Link → Controls → Screen time si seteaza atat Daily limit, cat si Bedtime."
        ]
      },
      {
        title: "Opreste instalarile din surse necunoscute",
        steps: [
          "Deschide Settings → Apps → Special app access → Install unknown apps si seteaza fiecare sursa pe Not allowed."
        ]
      },
      {
        title: "Verifica accesul in browser si pe YouTube",
        steps: [
          "Foloseste Family Link pentru filtre de varsta in Chrome si YouTube, apoi testeaza telefonul chiar tu din contul copilului."
        ]
      }
    ]
  },
  windows: {
    riskLabelText: "Risc critic",
    summary:
      "Configurează un cont de copil și Family Safety pe computerul Windows folosit pentru școală sau jocuri.",
    description:
      "Windows oferă acces la browsere, descărcări, jocuri și conversații private. Configurează un cont de copil și Family Safety și păstrează drepturile de administrator în contul tău.",
    quickActions: [
      {
        title: "Creeaza un cont Microsoft pentru copil",
        description:
          "Doar acest pas face raportarea si programarea din Family Safety mult mai puternice."
      },
      {
        title: "Porneste filtrele de continut web",
        description:
          "Fa asta inainte sa consideri desktopul sau laptopul potrivit pentru teme."
      },
      {
        title: "Seteaza un program fix de folosire",
        description:
          "Blocarea la ora de culcare este mai usor de aplicat decat amintirile verbale repetate."
      }
    ],
    watchFor: [
      {
        title: "Nu exista poarta implicita pentru toate instalarile",
        description:
          "Programele pot fi descarcate direct de pe site-uri, nu doar din Microsoft Store.",
        severity: "high"
      },
      {
        title: "Steam si clientii de jocuri se instaleaza usor",
        description:
          "Un copil poate adauga biblioteci mari de jocuri, voice chat si sesiuni tarzii daca instalarile nu sunt restrictionate.",
        severity: "high"
      },
      {
        title: "Accesul in browser este practic nelimitat fara filtre",
        description:
          "Windows se transforma rapid intr-o masina de navigare complet deschisa daca regulile pentru browser nu sunt aplicate.",
        severity: "critical"
      },
      {
        title: "Conturile si browserele multiple creeaza unghiuri moarte",
        description:
          "Parintii securizeaza adesea un browser, dar al doilea browser sau al doilea profil ramane complet deschis.",
        severity: "medium"
      }
    ],
    setupGuideIntro:
      "Foloseste family.microsoft.com ca centru de control. Functioneaza cel mai bine cand copilul se autentifica pe PC cu propriul cont Microsoft.",
    setupGuide: [
      {
        title: "Creeaza un cont Microsoft pentru copil",
        steps: [
          "Deschide Settings → Accounts → Family si adauga copilul ca membru al familiei."
        ]
      },
      {
        title: "Leaga dispozitivul in Family Safety",
        steps: [
          "Mergi la family.microsoft.com, confirma ca acel copil este conectat si asigura-te ca se autentifica pe PC cu acel cont."
        ]
      },
      {
        title: "Seteaza un program de timp",
        steps: [
          "Foloseste Family Safety → Screen time pentru a defini ore permise si timp total in timpul saptamanii si in weekend."
        ]
      },
      {
        title: "Activeaza filtrele de continut",
        steps: [
          "Foloseste Family Safety → Content filters pentru a bloca site-uri pentru adulti si a tine navigarea in cadrul browserului permis."
        ]
      },
      {
        title: "Revizuieste rapoartele saptamanal",
        steps: [
          "Porneste raportarea astfel incat utilizarea aplicatiilor, cautarile si activitatea din browser sa fie vizibile inainte sa devina obiceiuri ascunse."
        ]
      }
    ]
  },
  macos: {
    riskLabelText: "Risc ridicat",
    summary:
      "Folosește un cont standard pentru copil și protejează Screen Time cu un cod separat pe Mac.",
    description:
      "Folosește un cont standard pentru copil și protejează Screen Time cu un cod separat. Fără aceste limite, copilul poate naviga fără restricții și poate instala programe liber.",
    quickActions: [
      {
        title: "Porneste Screen Time cu un cod separat",
        description: "Codul conteaza aproape la fel de mult ca setarile in sine."
      },
      {
        title: "Activeaza Content & Privacy restrictions",
        description:
          "Este cea mai rapida metoda de a bloca continutul web si instalarile."
      },
      {
        title: "Foloseste un cont standard pentru copil",
        description:
          "Nu oferi contului copilului posibilitatea sa isi aprobe singur software-ul."
      }
    ],
    watchFor: [
      {
        title: "Controlul aplicatiilor este mai slab pe configuratii macOS mai vechi",
        description:
          "Daca Mac-ul este mai vechi sau copilul are permisiuni prea largi, software-ul poate fi adaugat mai usor decat cred parintii.",
        severity: "medium"
      },
      {
        title: "Browserul ramane complet deschis fara restrictii de continut",
        description:
          "Safari si alte browsere pot deveni ruta principala catre site-uri pentru adulti, forumuri de self-harm sau comunitati nemoderate.",
        severity: "high"
      },
      {
        title: "Contul standard este adesea sarit",
        description:
          "Daca acel copil se autentifica ca administrator, limitele din Screen Time isi pierd mare parte din forta.",
        severity: "high"
      },
      {
        title: "Serviciile Apple partajate amesteca usor utilizarea adultului cu cea a copilului",
        description:
          "Un Mac legat prea strans de configurarea Apple a parintelui poate expune date personale si face supravegherea mai dificila.",
        severity: "medium"
      }
    ],
    setupGuideIntro:
      "Meniu: System Settings → Screen Time. Pe Mac-uri mai vechi, verifica in plus daca instalarile de aplicatii sunt intr-adevar blocate asa cum te astepti.",
    setupGuide: [
      {
        title: "Porneste Screen Time",
        steps: [
          "Deschide System Settings → Screen Time si selecteaza contul copilului."
        ]
      },
      {
        title: "Seteaza un cod Screen Time separat",
        steps: [
          "Foloseste un cod diferit de parola de login si cunoscut doar de parinte."
        ]
      },
      {
        title: "Adauga App Limits",
        steps: [
          "System Settings → Screen Time → App Limits. Limiteaza separat browserele, jocurile si aplicatiile de chat."
        ]
      },
      {
        title: "Activeaza Communication Limits",
        steps: [
          "System Settings → Screen Time → Communication Safety sau Communication Limits, in functie de versiunea macOS."
        ]
      },
      {
        title: "Porneste Content & Privacy",
        steps: [
          "System Settings → Screen Time → Content & Privacy. Restrange instalarile de aplicatii, continutul web si modificarile de cont."
        ]
      },
      {
        title: "Programeaza Downtime",
        steps: [
          "System Settings → Screen Time → Downtime si seteaza o blocare constanta seara."
        ]
      }
    ]
  },
  "roblox": {
    "riskLabelText": "Risc ridicat",
    "summary": "O platformă cu jocuri create de utilizatori. Începe cu un cont de părinte conectat, apoi verifică jocurile, comunicarea și cheltuielile pentru vârsta copilului.",
    "description": "O platformă cu jocuri create de utilizatori. Începe cu un cont de părinte conectat, apoi verifică jocurile, comunicarea și cheltuielile pentru vârsta copilului.",
    "ageRating": "Clasificarea diferă după joc; Kids 5 până la 8 / Select 9 până la 15",
    "userCount": "Copii, adolescenți și adulți",
    "ageRecommendation": "Recomandarea noastră: 10+ cu supraveghere activă",
    "quickActions": [
      {
        "title": "Conectează contul tău de părinte",
        "description": "Din contul copilului, deschide Settings → Parental Controls → Add parent și urmează invitația."
      },
      {
        "title": "Verifică opțiunile de comunicare",
        "description": "Din contul tău conectat, selectează copilul și verifică Communication. Dezactivează opțiunile de chat pe care nu vrei să le folosească."
      },
      {
        "title": "Stabiliți jocurile și bugetul",
        "description": "Alegeți jocuri împreună. Verifică opțiunile disponibile pentru conținut, timp și cheltuieli înainte de a cumpăra Robux."
      }
    ],
    "setupGuide": [
      {
        "title": "Conectează conturile",
        "steps": [
          "Acceptă invitația folosind propriul cont Roblox și parcurge verificarea pentru părinte. Gestionează contul copilului din Settings → Parental Controls."
        ]
      },
      {
        "title": "Înțelege Kids și Select",
        "steps": [
          "Conturile Kids acoperă vârstele de la 5 la 8 ani, iar Select de la 9 la 15 ani. Încadrarea urmează informațiile despre vârstă, nu un nivel ales de părinte. Conturile fără verificarea vârstei au acces mai restrâns și nu pot folosi chatul."
        ]
      },
      {
        "title": "Verifică permisiunile de chat",
        "steps": [
          "Chatul necesită verificarea vârstei. Sub 9 ani este oprit implicit; părintele poate ajusta setările standard. Verifică opțiunile pentru vârsta și regiunea copilului."
        ]
      },
      {
        "title": "Verifică jocurile",
        "steps": [
          "În Content restrictions, consultă Content maturity și Blocked games. Analizați împreună cererile de acces la un joc."
        ]
      },
      {
        "title": "Verifică limitele de bani și timp",
        "steps": [
          "Consultă Spending și Screen time acolo unde sunt disponibile. Limitele lunare de cheltuieli nu acoperă valorificarea cardurilor cadou. Nu presupune că toate controalele se păstrează până la 15 ani; disponibilitatea diferă după control și regiune."
        ]
      },
      {
        "title": "Discutați regulat",
        "steps": [
          "Întreabă ce a jucat și pe cine a întâlnit. Stabiliți că solicitările de parole, cadouri sau conversații private în altă parte sunt motive să se oprească și să îți spună."
        ]
      }
    ],
    "watchFor": [
      {
        "title": "Contact în afara jocului",
        "description": "Un jucător poate cere secrete sau mutarea conversației într-o altă aplicație. Ajută copilul să îți poată spune fără teamă.",
        "severity": "critical"
      },
      {
        "title": "Conținut neașteptat",
        "description": "Verificați un joc împreună când tema sau comportamentul celorlalți îl surprinde pe copil.",
        "severity": "high"
      },
      {
        "title": "Presiune pentru Robux și fraude",
        "description": "O promisiune de monedă gratuită în schimbul parolei sau al unui cod de conectare este un motiv să se oprească.",
        "severity": "high"
      },
      {
        "title": "Sesiuni prea lungi",
        "description": "Stabiliți când se termină jocul și verificați dacă înlocuiește somnul sau alte activități.",
        "severity": "medium"
      }
    ],
    "appMetrics": [
      {
        "label": "Conturile Kids și Select",
        "value": "Jucătorii mai mici folosesc conturi Kids sau Select, cu setări în funcție de vârstă."
      },
      {
        "label": "Cine poate folosi chatul?",
        "value": "Jucătorii trebuie să treacă verificarea vârstei înainte de a folosi chatul. Verifică permisiunile disponibile pentru copil."
      },
      {
        "label": "Gestionarea setărilor copilului",
        "value": "Folosește contul tău de părinte conectat pentru a verifica și modifica opțiunile disponibile pentru copil."
      },
      {
        "label": "Robux și abonamente",
        "value": "Când stabiliți bugetul, verificați atât cumpărăturile de monedă virtuală, cât și abonamentele."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Ce nu pot face controalele",
        "description": "Verificarea vârstei și filtrele nu garantează identitatea sau comportamentul altui jucător. Păstrați raportarea și discuțiile în rutina familiei."
      },
      {
        "type": "tip",
        "title": "Începe de aici",
        "description": "Folosește propriul cont de părinte conectat pentru a verifica setările aplicabile copilului tău."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Kids și Select sunt disponibile global. Chatul necesită verificarea vârstei și este oprit implicit sub 9 ani. Alte controale depind de vârstă, cont și regiune.",
      "sources": [
        {
          "title": "Roblox: Kids, Select and chat settings",
          "url": "https://about.roblox.com/newsroom/2026/06/age-based-roblox-kids-and-select-accounts-now-globally-available"
        },
        {
          "title": "Roblox: safety FAQs",
          "url": "https://about.roblox.com/safety-faqs"
        }
      ]
    }
  },
  youtube: {
    "riskLabelText": "Risc ridicat",
    "summary": "O aplicație video cu recomandări, Shorts și comentarii. Alege un cont supravegheat potrivit copilului și verificați împreună ce urmărește.",
    "description": "O aplicație video cu recomandări, Shorts și comentarii. Alege un cont supravegheat potrivit copilului și verificați împreună ce urmărește.",
    "quickActions": [
      {
        "title": "Alege un cont supravegheat",
        "description": "Pentru copiii mai mici, folosește YouTube Kids sau verifică opțiunile de cont supravegheat. Filtrele pot rata videoclipuri nepotrivite."
      },
      {
        "title": "Limitează feedul Shorts",
        "description": "În aplicația YouTube, deschide Settings → Family Center → copilul tău → Time management. Alege o limită zilnică pentru Shorts; la 0 minute, feedul cu derulare se oprește."
      },
      {
        "title": "Oprește redarea automată",
        "description": "Verifică Autoplay în setările aplicației, pentru ca următorul videoclip să nu pornească automat."
      }
    ],
    "watchFor": [
      {
        "title": "Recomandări care devin tulburătoare",
        "description": "Câteva videoclipuri pot aduce mai multe recomandări pe același subiect. Încurajează copilul să-ți spună dacă feedul îl sperie sau îl deranjează.",
        "severity": "critical"
      },
      {
        "title": "Contact nedorit prin comentarii",
        "description": "Comentariile pot conține hărțuire, limbaj sexual, înșelătorii sau încercări de a începe o conversație privată.",
        "severity": "high"
      },
      {
        "title": "Videoclipuri nepotrivite în YouTube Kids",
        "description": "Aplicația pentru copii filtrează conținutul, dar un videoclip poate fi încadrat greșit.",
        "severity": "high"
      },
      {
        "title": "Vizionare peste timpul stabilit",
        "description": "Cu Shorts și Autoplay, copilul poate pierde ușor noțiunea timpului.",
        "severity": "high"
      },
      {
        "title": "Sfaturi înșelătoare",
        "description": "Verificați afirmațiile despre sănătate, bani sau alte decizii importante într-o sursă de încredere înainte de a le urma.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Alegeți contul împreună",
        "steps": [
          "Folosește data corectă de naștere. Verifică YouTube Kids sau un cont YouTube supravegheat, în loc să te bazezi doar pe Restricted Mode."
        ]
      },
      {
        "title": "Setează limita pentru Shorts",
        "steps": [
          "Din contul de părinte conectat în aplicația YouTube, deschide Settings → Family Center → copilul tău → Time management → daily Shorts feed limit. YouTube a confirmat opțiunea de 0 minute în Europa în aprilie 2026. Limita controlează feedul cu derulare, nu toate modurile de a viziona un clip scurt."
        ]
      },
      {
        "title": "Verifică setările de conținut",
        "steps": [
          "În Family Center, selectează copilul și verifică Content Settings. În YouTube Kids poți opri Search sau alege conținut aprobat pentru o selecție mai restrânsă."
        ]
      },
      {
        "title": "Verifică Autoplay și Restricted Mode",
        "steps": [
          "Oprește Autoplay. Dacă folosești Restricted Mode, verifică fiecare browser și dispozitiv separat; este un filtru suplimentar, nu un înlocuitor pentru contul supravegheat."
        ]
      },
      {
        "title": "Uitați-vă împreună la istoricul vizionărilor",
        "steps": [
          "Întreabă ce creatori îi plac copilului și verificați recomandările necunoscute. Blocați sau raportați conținutul nepotrivit."
        ]
      },
      {
        "title": "Verifică regulile pentru transmisiuni live",
        "steps": [
          "Vârsta minimă pentru a transmite live pe YouTube este 16 ani. Un adolescent mai mic care participă la o transmisiune trebuie să respecte regulile privind prezența unui adult; conectarea contului de părinte nu este suficientă."
        ]
      },
      {
        "title": "Setează separat limita întregii aplicații",
        "steps": [
          "Folosește controalele parentale ale dispozitivului pentru timpul total petrecut pe YouTube. Adolescentul poate opri supravegherea contului; discutați această limită împreună."
        ]
      }
    ],
    "ageRating": "Conturi standard: vârsta minimă Google din țară; opțiunile supravegheate diferă",
    "userCount": "Public de toate vârstele",
    "ageRecommendation": "Alege YouTube Kids sau YouTube supravegheat în funcție de vârsta copilului",
    "appMetrics": [
      {
        "label": "Limita zilnică pentru Shorts",
        "value": "Un părinte conectat poate limita timpul petrecut zilnic în feedul Shorts al contului supravegheat."
      },
      {
        "label": "Ce face limita de 0 minute?",
        "value": "Oprește feedul Shorts cu derulare. Alte moduri de a viziona videoclipuri pe YouTube rămân disponibile."
      },
      {
        "label": "Comentarii",
        "value": "Accesul copilului la comentarii depinde de cont și de videoclip."
      },
      {
        "label": "Filtre de conținut",
        "value": "Filtrele pot rata videoclipuri nepotrivite. Verificați recomandările și urmăriți împreună câteva clipuri."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Ce acoperă limita",
        "description": "Limita feedului Shorts nu blochează toate videoclipurile YouTube. Verifică separat conținutul și timpul total în aplicație."
      },
      {
        "type": "tip",
        "title": "Începe de aici",
        "description": "Alege un cont supravegheat, apoi setează limita pentru Shorts și urmăriți împreună câteva recomandări."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Limita de 0 minute pentru feedul Shorts este documentată pentru Europa. Meniurile diferă între mobil și desktop. Adolescentul poate opri supravegherea.",
      "sources": [
        {
          "title": "YouTube: teen supervision and Shorts settings",
          "url": "https://support.google.com/youtubekids/answer/15190245?co=GENIE.Platform%3DiOS&hl=en"
        },
        {
          "title": "YouTube: Shorts controls available in Europe",
          "url": "https://blog.youtube/news-and-events/new-youtube-shorts-parental-controls-europe/"
        }
      ]
    }
  },
  snapchat: {
    "riskLabelText": "Risc ridicat",
    "summary": "O aplicatie de poze si mesagerie construita in jurul mesajelor care dispar, partajarii rapide si functiilor de locatie live.",
    "description": "O aplicatie de poze si mesagerie construita in jurul mesajelor care dispar, partajarii rapide si functiilor de locatie live.",
    "quickActions": [
      {
        "title": "Verifică Ghost Mode",
        "description": "În Snap Map, deschide rotița de setări și verifică Ghost Mode. Partajarea locației este oprită implicit; verifică dacă a fost activată între timp."
      },
      {
        "title": "Limitează cine îl poate contacta",
        "description": "În Settings → Privacy Controls → Contact Me, alege Friends."
      },
      {
        "title": "Verificați lista de prieteni împreună",
        "description": "Deschide Profile → My Friends și întreabă despre persoanele pe care copilul nu le recunoaște. Eliminați sau blocați contactele nedorite."
      },
      {
        "title": "Conectează Family Center",
        "description": "Trimite adolescentului o invitație din contul tău de adult. Poți vedea contacte recente și timpul de utilizare, limita conținutul și opri My AI, fără să citești conversațiile private."
      }
    ],
    "watchFor": [
      {
        "title": "Partajarea locației",
        "description": "Dacă este activată, locația poate dezvălui unde locuiește copilul, unde învață sau unde se află.",
        "severity": "critical"
      },
      {
        "title": "Imagini intime păstrate de altcineva",
        "description": "Dispariția unui mesaj nu împiedică o captură de ecran sau fotografierea cu alt dispozitiv.",
        "severity": "critical"
      },
      {
        "title": "Oferte de substanțe sau alte produse ilegale",
        "description": "Spune-i copilului că îți poate arăta o ofertă suspectă fără să fie învinovățit.",
        "severity": "high"
      },
      {
        "title": "Amenințări cu distribuirea imaginilor",
        "description": "Cineva poate cere o imagine și apoi amenința că o distribuie pentru a obține bani sau alte imagini.",
        "severity": "high"
      },
      {
        "title": "Presiunea de a păstra streak-uri",
        "description": "Urmărește dacă seria de mesaje zilnice afectează somnul sau îl face să se teamă că pierde o prietenie.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Verifică partajarea locației",
        "steps": [
          "Partajarea locației este oprită implicit. În Snap Map → rotița de setări, verifică Ghost Mode și persoanele alese pentru partajare. Verifică separat orice partajare live și permisiunile de localizare ale telefonului."
        ]
      },
      {
        "title": "Limitează contactele",
        "steps": [
          "În Settings → Privacy Controls → Contact Me, alege Friends."
        ]
      },
      {
        "title": "Verificați lista de prieteni",
        "steps": [
          "Deschide Profile → My Friends și întreabă despre persoanele pe care copilul nu le recunoaște. Eliminați sau blocați contactele nedorite."
        ]
      },
      {
        "title": "Verifică vizibilitatea în Find Friends",
        "steps": [
          "În Settings, caută See Me in Find Friends și oprește opțiunea dacă vrei mai puține sugestii de prietenie. Find Friends este numele actual al funcției Quick Add."
        ]
      },
      {
        "title": "Explică felul în care pot fi salvate mesajele",
        "steps": [
          "Capturile de ecran sau o altă cameră pot păstra un mesaj chiar dacă dispare din conversație. Discutați ce se simte copilul confortabil să trimită."
        ]
      },
      {
        "title": "Conectează Family Center",
        "steps": [
          "Trimite invitația din contul tău de adult eligibil. Family Center arată contactele recente, media zilnică de utilizare din săptămâna trecută și timpul pe funcții. Indiciile despre prieteni oferă context, nu dovada că cineva este de încredere. Conversațiile private nu sunt afișate."
        ]
      },
      {
        "title": "Verifică Content Controls și My AI",
        "steps": [
          "În Family Center, verifică restricțiile pentru conținutul sensibil din Stories și Spotlight. Oprește My AI dacă nu vrei să fie folosit. Aceste opțiuni nu filtrează fiecare mesaj sau imagine primită de la prieteni."
        ]
      },
      {
        "title": "Verificați ce rămâne salvat",
        "steps": [
          "Discutați despre imaginile păstrate în Memories și despre cine le poate vedea înainte de a le distribui."
        ]
      }
    ],
    "userCount": "Folosit și de adolescenți",
    "ageRecommendation": "Recomandarea noastră: de la 15 ani, cu supraveghere activă",
    "appMetrics": [
      {
        "label": "Partajarea locației pe Snap Map",
        "value": "Locația nu este partajată implicit. Verifică dacă a activat-o copilul între timp și cine îl poate vedea."
      },
      {
        "label": "Ce arată Family Center",
        "value": "Poți vedea contactele recente și informații despre timpul petrecut în aplicație."
      },
      {
        "label": "Poți citi mesajele copilului?",
        "value": "Family Center nu arată conținutul conversațiilor private ale adolescentului."
      },
      {
        "label": "Imagini care dispar",
        "value": "Cineva poate păstra o imagine printr-o captură de ecran sau cu altă cameră, chiar dacă dispare din chat."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Verifică partajarea locației",
        "description": "Locația nu este partajată implicit. Dacă a fost activată, verifică destinatarii și partajarea live separată. Verifică și permisiunile telefonului."
      },
      {
        "type": "tip",
        "title": "Începe de aici",
        "description": "Verificați Ghost Mode și lista de prieteni împreună, apoi conectați Family Center."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Partajarea locației necesită activare. Family Center arată contacte și timpul de utilizare, nu conținutul mesajelor. Verifică setările Find Friends în versiunea actuală a aplicației.",
      "sources": [
        {
          "title": "Snapchat: Family Center insights",
          "url": "https://newsroom.snap.com/deeper-insights-with-family-center"
        },
        {
          "title": "Snapchat: location privacy",
          "url": "https://help.snapchat.com/hc/en-gb/articles/24547077410580-Snap-Map-Privacy-Safety-Reminder"
        },
        {
          "title": "Snapchat: Quick Add is now Find Friends",
          "url": "https://help.snapchat.com/hc/en-gb/articles/34691800487316-What-happened-to-Quick-Add"
        }
      ]
    }
  },
  instagram: {
    "riskLabelText": "Risc ridicat",
    "summary": "O aplicație socială cu fotografii, videoclipuri, recomandări și mesaje directe. Verifică protecțiile Teen Account, supravegherea și cine poate contacta adolescentul.",
    "description": "O aplicație socială cu fotografii, videoclipuri, recomandări și mesaje directe. Verifică protecțiile Teen Account, supravegherea și cine poate contacta adolescentul.",
    "quickActions": [
      {
        "title": "Verifică Teen Account",
        "description": "Folosește data corectă de naștere și verificați împreună setările de confidențialitate, mesaje și conținut."
      },
      {
        "title": "Conectează supravegherea parentală",
        "description": "Deschide Family Center și conectează contul tău cu acordul adolescentului."
      },
      {
        "title": "Verifică nivelul de conținut",
        "description": "Verifică setarea implicită 13+ sau alege Limited Content pentru filtrare mai strictă. Aceste opțiuni nu garantează că fiecare postare este potrivită."
      }
    ],
    "watchFor": [
      {
        "title": "Presiune asupra imaginii corporale",
        "description": "Întreabă cum îl fac să se simtă postările repetate despre aspect, alimentație sau fitness.",
        "severity": "high"
      },
      {
        "title": "Contact privat nedorit",
        "description": "Verificați urmăritorii necunoscuți și cererile de mesaje. Încurajează-l să îți spună despre presiuni sau cereri de secret.",
        "severity": "high"
      },
      {
        "title": "Hărțuire prin comentarii și etichetări",
        "description": "Comentariile, etichetările și răspunsurile la Stories pot face un conflict public. Exersați împreună blocarea și raportarea.",
        "severity": "high"
      },
      {
        "title": "Recomandări tulburătoare",
        "description": "Dacă feedul revine la un subiect care îl supără, verificați-l împreună și folosiți controalele de conținut.",
        "severity": "medium"
      },
      {
        "title": "Magazine și concursuri false",
        "description": "Opriți-vă înainte de a trimite date de plată sau informații personale unui cont necunoscut.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Verifică profilul și mesajele",
        "steps": [
          "Verificați împreună Account privacy și opțiunile pentru mesaje. Teen Accounts limitează contactele; uitați-vă și la urmăritorii existenți, nu doar la cererile noi."
        ]
      },
      {
        "title": "Conectează Family Center",
        "steps": [
          "Urmează invitația de supraveghere din Family Center. Verifică ce controale se aplică vârstei și contului adolescentului."
        ]
      },
      {
        "title": "Alege nivelul de conținut",
        "steps": [
          "Meta numește setarea implicită pentru adolescenți 13+, inspirată de clasificările filmelor. Cei sub 18 ani au nevoie de acordul părintelui pentru a renunța la ea. Limited Content filtrează mai mult conținut și restricționează comentariile; niciuna nu certifică fiecare postare drept potrivită."
        ]
      },
      {
        "title": "Verifică actualizarea alertelor din octombrie",
        "steps": [
          "La 29 octombrie 2026, Meta a anunțat lansarea globală a alertelor pentru părinții care supraveghează conturi: căutări repetate despre suicid sau autovătămare pe Instagram și Facebook, respectiv conversații îngrijorătoare cu Meta AI pe Instagram, Facebook și Messenger. Verifică opțiunile contului conectat; alertele pot rata probleme."
        ]
      },
      {
        "title": "Verifică timpul și etichetările",
        "steps": [
          "Folosește supravegherea sau controalele dispozitivului pentru o limită zilnică. Verifică permisiunile pentru etichetări și mențiuni și stabiliți ce postări necesită aprobare."
        ]
      },
      {
        "title": "Discutați despre recomandări",
        "steps": [
          "Uitați-vă împreună la feed. Folosiți Not interested, blocarea sau raportarea când este cazul și întreabă cum îl fac postările să se simtă."
        ]
      }
    ],
    "userCount": "Adolescenți și adulți",
    "ageRecommendation": "Recomandarea noastră: sub 16 ani, cu supraveghere",
    "appMetrics": [
      {
        "label": "Conținutul implicit pentru adolescenți",
        "value": "Teen Accounts folosesc implicit setarea de conținut 13+. Pot apărea totuși postări nepotrivite."
      },
      {
        "label": "Limited Content",
        "value": "Această opțiune mai strictă filtrează mai mult conținut și restricționează comentariile."
      },
      {
        "label": "Cine poate trimite mesaje?",
        "value": "Teen Accounts limitează contactele primite. Verificați împreună permisiunile pentru mesaje și urmăritorii existenți."
      },
      {
        "label": "Alerte de siguranță pentru părinți",
        "value": "Meta a anunțat lansarea globală a alertelor de risc. Verifică opțiunile din contul supravegheat al adolescentului."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Filtrele au limite",
        "description": "Un cont privat și filtrele reduc unele riscuri. Nu pot preveni fiecare postare dăunătoare sau interacțiune nedorită."
      },
      {
        "type": "tip",
        "title": "Începe de aici",
        "description": "Conectează supravegherea și verificați împreună confidențialitatea, mesajele și nivelul de conținut."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Setarea de conținut 13+ a fost extinsă internațional. Meta a anunțat lansarea globală a alertelor la 29 octombrie; confirmă opțiunile în contul supravegheat.",
      "sources": [
        {
          "title": "Meta: 13+ and Limited Content settings",
          "url": "https://about.fb.com/news/2026/04/instagram-expands-teen-accounts-inspired-by-13-content-ratings/"
        },
        {
          "title": "Meta: parent alerts, updated 29 October 2026",
          "url": "https://about.fb.com/news/2026/07/keeping-parents-informed-teens-distress-conversations-meta-ai/"
        }
      ]
    }
  },
  tiktok: {
    "riskLabelText": "Risc foarte ridicat",
    "summary": "O aplicație de clipuri scurte ale cărei recomandări personalizate pot ține copiii în fața ecranului mult timp.",
    "description": "O aplicație de clipuri scurte ale cărei recomandări personalizate pot ține copiii în fața ecranului mult timp.",
    "quickActions": [
      {
        "title": "Conectează Family Pairing",
        "description": "Deschide Settings and privacy → Family Pairing și conectează contul tău cu cel al adolescentului."
      },
      {
        "title": "Alegeți o limită zilnică",
        "description": "Folosește Family Pairing pentru limita zilnică și programul Time Away. Alege o limită potrivită rutinei copilului."
      },
      {
        "title": "Verifică mesajele în funcție de vârstă",
        "description": "Mesajele directe nu sunt disponibile sub 16 ani. Pentru adolescenții mai mari, verifică opțiunile Family Pairing și restricționează cererile nedorite."
      }
    ],
    "watchFor": [
      {
        "title": "Recomandări despre autovătămare sau tulburări alimentare",
        "description": "Întreabă dacă apar repetat videoclipuri care îl supără sau îi schimbă felul în care își privește corpul.",
        "severity": "critical"
      },
      {
        "title": "Timp pierdut prin derulare continuă",
        "description": "Feedul are puține momente naturale de oprire. Verifică dacă timpul petrecut acolo afectează somnul sau alte activități.",
        "severity": "critical"
      },
      {
        "title": "Contact de la necunoscuți",
        "description": "Postările publice și funcțiile sociale pot aduce interacțiuni nedorite, inclusiv în afara mesajelor directe.",
        "severity": "high"
      },
      {
        "title": "Informații înșelătoare",
        "description": "Verificați afirmațiile importante înainte de a le crede sau distribui.",
        "severity": "high"
      },
      {
        "title": "Cumpărături impulsive",
        "description": "Discutați costul real al produselor și cadourilor promovate în clipuri, unde sunt disponibile.",
        "severity": "medium"
      }
    ],
    "setupGuide": [
      {
        "title": "Conectează Family Pairing",
        "steps": [
          "Deschide Settings and privacy → Family Pairing și conectează contul tău cu cel al adolescentului."
        ]
      },
      {
        "title": "Stabilește limitele de timp",
        "steps": [
          "Folosește Family Pairing pentru limita zilnică și programul Time Away. Alege o limită potrivită rutinei copilului."
        ]
      },
      {
        "title": "Verifică mesajele directe",
        "steps": [
          "Mesajele directe nu sunt disponibile sub 16 ani. Pentru adolescenții mai mari, verifică opțiunile Family Pairing și restricționează cererile nedorite."
        ]
      },
      {
        "title": "Verifică filtrele și confidențialitatea",
        "steps": [
          "În Family Pairing, verifică Restricted Mode, contul privat și opțiunile disponibile pentru comentarii și reutilizarea videoclipurilor. Opțiunile depind de vârstă."
        ]
      },
      {
        "title": "Verificați urmăritorii și conturile blocate",
        "steps": [
          "Uitați-vă împreună la cine urmărește adolescentul și cine îl urmărește. Family Pairing include notificări pentru postări publice și blocarea anumitor conturi; funcția de blocare a fost introdusă mai întâi în Europa."
        ]
      },
      {
        "title": "Ajustați recomandările împreună",
        "steps": [
          "Verificați Manage Topics și filtrele de cuvinte unde sunt disponibile. Folosiți Not interested pentru clipurile nedorite; aceasta nu garantează că nu mai apare conținut asemănător."
        ]
      }
    ],
    "userCount": "Public internațional",
    "ageRecommendation": "Recomandarea noastră: sub 16 ani, cu limite și supraveghere",
    "appMetrics": [
      {
        "label": "Family Pairing",
        "value": "Conectează contul tău cu cel al adolescentului pentru a gestiona opțiunile de timp, confidențialitate și conținut."
      },
      {
        "label": "Cine poate folosi mesajele directe?",
        "value": "Mesajele directe nu sunt disponibile sub 16 ani. Pentru cei mai mari, verifică cine poate trimite mesaje sau cereri."
      },
      {
        "label": "Limite zilnice și Time Away",
        "value": "Setează o limită zilnică și intervale în care adolescentul nu poate folosi aplicația."
      },
      {
        "label": "Ajustarea recomandărilor",
        "value": "Preferințele pentru subiecte și filtrele de cuvinte ajută la ajustarea recomandărilor. Nu garantează că fiecare videoclip este potrivit."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Verifică vârsta contului",
        "description": "Mesajele, confidențialitatea și distribuirea clipurilor depind de vârstă. O dată de naștere de adult poate lăsa adolescentul fără protecțiile așteptate."
      },
      {
        "type": "tip",
        "title": "Începe de aici",
        "description": "Conectează Family Pairing și stabiliți limita zilnică și intervalele fără aplicație."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Controalele Family Pairing diferă în funcție de vârstă și regiune. Mesajele directe sunt pentru cei de cel puțin 16 ani. Verifică opțiunile contului conectat.",
      "sources": [
        {
          "title": "TikTok: Family Pairing controls",
          "url": "https://newsroom.tiktok.com/supportingfamilies-with-new-family-pairing-features?lang=en-GB"
        },
        {
          "title": "TikTok: teen privacy and messaging settings",
          "url": "https://support.tiktok.com/en/account-and-privacy/account-privacy-settings/privacy-and-safety-settings-for-users-under-age-18"
        },
        {
          "title": "TikTok: 2026 teen safety tools",
          "url": "https://newsroom.tiktok.com/tiktok-reinforces-commitment-to-teen-safety-with-over-50-preset-safety-and-privacy-features?lang=en-PH"
        }
      ]
    }
  },
  "discord": {
    "riskLabelText": "Risc foarte ridicat",
    "summary": "Un serviciu pentru comunități, mesaje directe și apeluri vocale. Conectează Family Center și verifică cine poate contacta adolescentul, alături de serverele folosite.",
    "description": "Un serviciu pentru comunități, mesaje directe și apeluri vocale. Conectează Family Center și verifică cine poate contacta adolescentul, alături de serverele folosite.",
    "ageRating": "13+ sau vârsta minimă mai mare din țara ta",
    "userCount": "Utilizatori de comunități și jocuri",
    "ageRecommendation": "Recomandarea noastră: supraveghere directă pentru adolescenții mai mici",
    "quickActions": [
      {
        "title": "Conectează Family Center",
        "description": "În Family Center, folosește linkul de invitație sau codul QR al adolescentului, care trebuie să accepte conectarea. Configurarea funcționează pe web, desktop sau mobil."
      },
      {
        "title": "Restricționează mesajele directe",
        "description": "În Content & Social, oprește Direct messages de la membrii serverelor și aplică schimbarea serverelor existente când apare solicitarea."
      },
      {
        "title": "Verificați serverele împreună",
        "description": "Întreabă care este scopul fiecărei comunități, cine o administrează și ce îi place acolo. Părăsiți comunitățile în care nu se simte în siguranță."
      }
    ],
    "setupGuide": [
      {
        "title": "Conectează supravegherea",
        "steps": [
          "Urmează instrucțiunile Family Center din sursele de mai jos. Explică faptul că arată activitatea recentă și anumite setări, nu conținutul conversațiilor private."
        ]
      },
      {
        "title": "Verifică setările de contact",
        "steps": [
          "Deschide Settings → Content & Social. Verifică Direct messages, permisiunile fiecărui server și Friend Requests; limitează cine poate trimite cereri."
        ]
      },
      {
        "title": "Verifică filtrele pentru imagini",
        "steps": [
          "Consultă filtrele pentru conținut sexual și violent. Folosește blocarea în mesaje directe unde este disponibilă și estomparea în servere. Filtrele pot rata conținut; estomparea nu înseamnă blocare."
        ]
      },
      {
        "title": "Verifică grupa de vârstă a contului",
        "steps": [
          "Deschide User Settings → Account Status. Actualizarea Discord din 22 septembrie introduce grupe de vârstă estimate din semnalele contului, cu restricții suplimentare pentru adolescenți. Majorității utilizatorilor nu li se cere un act sau un selfie. Dacă grupa este greșită, urmează procedura oficială de corectare."
        ]
      },
      {
        "title": "Verifică activitatea și limitele",
        "steps": [
          "Discutați activitatea recentă din Family Center. Unde apar, verifică Screen Downtime și plafonul lunar de cheltuieli; plafonul exclude abonamentele. Verifică-le separat."
        ]
      },
      {
        "title": "Exersați raportarea",
        "steps": [
          "Stabiliți că adolescentul îți poate arăta un mesaj îngrijorător fără să fie învinovățit. Verificați împreună opțiunile de raportare și blocare."
        ]
      }
    ],
    "watchFor": [
      {
        "title": "Abordări în privat",
        "description": "Apartenența la aceeași comunitate nu dovedește că cineva este de încredere. Observă cererile de secret sau mutare pe alt serviciu.",
        "severity": "critical"
      },
      {
        "title": "Comunități dăunătoare",
        "description": "Părăsiți și raportați comunitățile care încurajează hărțuirea, exploatarea sau violența.",
        "severity": "high"
      },
      {
        "title": "Linkuri și descărcări necunoscute",
        "description": "Opriți-vă înainte de a deschide un cadou promis sau un joc de descărcat. Nu împărtășiți coduri de conectare.",
        "severity": "high"
      },
      {
        "title": "Apeluri inconfortabile",
        "description": "Stabiliți că adolescentul poate părăsi imediat un apel dacă cineva îl presează sau îl sperie.",
        "severity": "high"
      }
    ],
    "appMetrics": [
      {
        "label": "Family Center",
        "value": "Conectează conturile pentru a vedea activitatea recentă și a gestiona setările de siguranță disponibile pentru adolescent."
      },
      {
        "label": "Poți citi mesajele copilului?",
        "value": "Family Center nu arată conținutul conversațiilor private."
      },
      {
        "label": "Filtre pentru imagini și conținut media",
        "value": "Verifică filtrele pentru conținut sensibil. Estomparea unei imagini diferă de blocarea ei, iar filtrele pot rata conținut."
      },
      {
        "label": "Verificarea grupei de vârstă",
        "value": "Deschide User Settings → Account Status pentru a vedea grupa de vârstă aplicată de Discord contului."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Ce nu pot face controalele",
        "description": "Panoul pentru familie nu este un istoric complet al conversațiilor. Discutați în continuare despre oamenii și comunitățile din spatele activității."
      },
      {
        "type": "tip",
        "title": "Începe de aici",
        "description": "Conectează Family Center și verificați permisiunile de contact înainte de a intra pe alte servere."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Actualizarea grupelor de vârstă din 22 septembrie înlocuiește anunțul de amânare din februarie. Account Status arată grupa aplicată contului; opțiunile de verificare și cerințele legale variază.",
      "sources": [
        {
          "title": "Discord: September age-assurance approach",
          "url": "https://discord.com/blog/safer-for-teens-same-discord-for-adults"
        },
        {
          "title": "Discord: Family Center for parents",
          "url": "https://support.discord.com/hc/en-us/articles/14155043715735-Family-Center-for-Parents-and-Guardians"
        }
      ]
    }
  },
  "fortnite": {
    "riskLabelText": "Risc mediu-ridicat",
    "summary": "Un joc multiplayer cu comunicare între jucători și cumpărături. Verifică atât contul Epic, cât și consola sau magazinul folosit la plată.",
    "description": "Un joc multiplayer cu comunicare între jucători și cumpărături. Verifică atât contul Epic, cât și consola sau magazinul folosit la plată.",
    "ageRating": "12+ / Teen; clasificarea diferă după experiență",
    "userCount": "Jucători pe PC, console și mobil",
    "ageRecommendation": "Recomandarea noastră: 12+ cu reguli de chat și cheltuieli",
    "quickActions": [
      {
        "title": "Setează PIN-ul de părinte Epic",
        "description": "Deschide Parental Controls în Epic Account Portal și păstrează PIN-ul privat."
      },
      {
        "title": "Restricționează comunicarea",
        "description": "Alege Nobody sau o opțiune limitată la prieteni pentru chatul vocal și text din controalele parentale Epic."
      },
      {
        "title": "Verifică fiecare metodă de plată",
        "description": "Verifică aprobarea plăților Epic și controalele de cumpărare ale consolei. Stabiliți un buget și pentru V-Bucks existenți."
      }
    ],
    "setupGuide": [
      {
        "title": "Verifică vârsta contului",
        "steps": [
          "Sub 13 ani sau vârsta locală de consimțământ digital, dacă aceasta este mai mare, Epic folosește un Cabined Account. Chatul vocal și textul liber rămân indisponibile până la acordul părintelui. Verifică permisiunile înainte să accepți."
        ]
      },
      {
        "title": "Stabilește limitele de contact",
        "steps": [
          "În controalele parentale Epic, verifică chatul vocal, textul și cerința de PIN pentru adăugarea prietenilor. Stabiliți cu cine poate juca și vorbi copilul."
        ]
      },
      {
        "title": "Protejează plățile cu bani reali",
        "steps": [
          "Activează cerința de PIN pentru plățile Epic. Nu controlează cumpărăturile din alte magazine sau cheltuirea V-Bucks existenți; verifică-le separat."
        ]
      },
      {
        "title": "Înțelege pragul de 100 USD",
        "steps": [
          "Pentru conturile sub 13 ani, Epic descrie un prag zilnic de 100 USD pentru plățile Epic, care poate fi depășit cu PIN-ul părintelui. Nu include plățile altor platforme sau moneda din joc. Nu reprezintă bugetul familiei."
        ]
      },
      {
        "title": "Verifică recompensele aleatorii",
        "steps": [
          "Unde apare opțiunea, dezactivează Allow Paid Random Items dacă nu vrei cheltuirea V-Bucks pe recompense aleatorii. Aceasta nu blochează toate cumpărăturile cu V-Bucks."
        ]
      },
      {
        "title": "Setează limite pentru joacă și creație",
        "steps": [
          "În controalele Epic, verifică Time Limit Controls pentru Fortnite și UEFN. Poți pune un program și limite separate pentru Play Time și Create Time. Limitele urmează același cont Epic pe toate dispozitivele; consola poate restricționa timpul suplimentar."
        ]
      }
    ],
    "watchFor": [
      {
        "title": "Presiune din partea jucătorilor",
        "description": "Copilul trebuie să poată opri sunetul sau părăsi o conversație amenințătoare ori inconfortabilă.",
        "severity": "high"
      },
      {
        "title": "Moneda virtuală pare mai puțin reală",
        "description": "Discutați costul real înainte de a cumpăra moneda și înainte de a o cheltui.",
        "severity": "high"
      },
      {
        "title": "Recompense false",
        "description": "Nu introduceți parole sau coduri de conectare pe pagini care promit V-Bucks gratuit.",
        "severity": "medium"
      },
      {
        "title": "Încă un meci",
        "description": "Verifică dacă meciurile împing repetat ora de somn dincolo de cea stabilită.",
        "severity": "medium"
      }
    ],
    "appMetrics": [
      {
        "label": "PIN-ul parental Epic",
        "value": "Păstrează PIN-ul privat. Acesta protejează controalele parentale și aprobările pe care le configurezi."
      },
      {
        "label": "Chat vocal și text",
        "value": "Verifică în setările Epic cu cine poate vorbi copilul. Permisiunile depind de vârstă."
      },
      {
        "label": "Ce plăți acoperă PIN-ul?",
        "value": "PIN-ul de plată Epic acoperă cumpărăturile cu bani reali prin Epic. Alte magazine și V-Bucks existenți necesită verificări separate."
      },
      {
        "label": "Cheltuirea V-Bucks existenți",
        "value": "Stabiliți un buget pentru moneda deja din cont. PIN-ul pentru plăți cu bani reali nu controlează aceste cumpărături."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Ce nu pot face controalele",
        "description": "PIN-ul unui magazin nu acoperă toate metodele de plată. Verifică magazinul consolei și moneda deja existentă în cont."
      },
      {
        "type": "tip",
        "title": "Începe de aici",
        "description": "Setează PIN-ul de părinte Epic, apoi stabiliți permisiunile de chat și un buget în bani reali."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Aprobarea plăților Epic nu acoperă alte magazine sau V-Bucks existenți. Controlul obiectelor aleatorii depinde de regiune. Limitele de joacă și creație urmează același cont Epic pe dispozitive.",
      "sources": [
        {
          "title": "Epic: parental controls, payments and time limits",
          "url": "https://safety.epicgames.com/en-US/parental-controls"
        }
      ]
    }
  },
  minecraft: {
    "riskLabelText": "Risc mediu",
    "summary": "Un joc de construcție și explorare. Jocul individual, Realms private și serverele publice oferă experiențe diferite; verifică ediția, contul și persoanele cu care se joacă.",
    "description": "Un joc de construcție și explorare. Jocul individual, Realms private și serverele publice oferă experiențe diferite; verifică ediția, contul și persoanele cu care se joacă.",
    "quickActions": [
      {
        "title": "Verifică ediția și contul Microsoft",
        "description": "Edițiile actuale Java și Bedrock au controale prin contul Microsoft. Verifică dacă este folosit contul propriu de copil."
      },
      {
        "title": "Verifică jocul online și comunicarea",
        "description": "Folosește grupul familial Microsoft și setările Xbox de confidențialitate și siguranță online pentru permisiunile copilului."
      },
      {
        "title": "Alegeți cine poate participa",
        "description": "Pentru jocul online, luați în calcul un Realm privat cu persoane cunoscute. Verificați împreună membrii și invitațiile."
      }
    ],
    "watchFor": [
      {
        "title": "Contact cu necunoscuți pe servere publice",
        "description": "Serverele administrate de terți pot primi persoane necunoscute și au reguli de moderare diferite.",
        "severity": "high"
      },
      {
        "title": "Mesaje nepotrivite în chat",
        "description": "Chatul poate include hărțuire, limbaj sexual sau înșelătorii. Clasificarea jocului nu descrie fiecare mesaj al jucătorilor.",
        "severity": "high"
      },
      {
        "title": "Fișiere periculoase în moduri",
        "description": "Un instalator fals sau un mod compromis poate fura datele contului ori instala programe nedorite.",
        "severity": "high"
      },
      {
        "title": "Oferte false de jocuri sau obiecte gratuite",
        "description": "Nu introduce parole sau coduri de conectare pentru a obține jocul, pelerine sau alte recompense.",
        "severity": "medium"
      },
      {
        "title": "Cumpărături în Marketplace",
        "description": "Verificați costul în bani reali înainte de a cumpăra Minecoins sau conținut.",
        "severity": "low"
      }
    ],
    "setupGuide": [
      {
        "title": "Verifică ediția și contul",
        "steps": [
          "Edițiile actuale Java și Bedrock au controale prin contul Microsoft. Verifică dacă este folosit contul propriu de copil."
        ]
      },
      {
        "title": "Verifică permisiunile Microsoft și Xbox",
        "steps": [
          "Din contul de părinte, verifică setările Xbox de confidențialitate și siguranță online ale copilului, inclusiv jocul multiplayer și comunicarea. Contează pentru ambele ediții actuale, chiar și pe un dispozitiv care nu este Xbox."
        ]
      },
      {
        "title": "Verifică separat cumpărăturile și timpul",
        "steps": [
          "Verifică magazinul și dispozitivul folosite pentru cumpărături și limite de timp. Setările Microsoft nu înlocuiesc controalele de plată PlayStation, Nintendo, Apple sau Google."
        ]
      },
      {
        "title": "Verificați membrii Realm-ului",
        "steps": [
          "Pentru jocul online, luați în calcul un Realm privat cu persoane cunoscute. Verificați împreună membrii și invitațiile."
        ]
      },
      {
        "title": "Verifică fișierele înainte de instalare",
        "steps": [
          "Folosește site-uri cunoscute pentru moduri, precum Modrinth sau CurseForge, apoi verifică autorul și fișierul. Un site cunoscut nu garantează că fiecare mod este sigur."
        ]
      },
      {
        "title": "Ține cont de versiunile vechi sau modificate",
        "steps": [
          "Minecraft precizează că funcțiile sale de control parental nu acoperă versiunile anterioare Java 1.16.4 sau versiunile modificate. Verifică jocul pornit efectiv, nu doar lansatorul."
        ]
      },
      {
        "title": "Exersați raportarea",
        "steps": [
          "Găsiți împreună opțiunile de raportare și blocare din joc. Moderarea și chatul diferă între Realms și serverele terților."
        ]
      }
    ],
    "userCount": "Copii, adolescenți și adulți",
    "ageRecommendation": "Joc individual pentru cei mici; multiplayer cu supraveghere",
    "appMetrics": [
      {
        "label": "Joc individual",
        "value": "Copilul se joacă fără contact cu alți jucători în interiorul jocului."
      },
      {
        "label": "Servere publice",
        "value": "Regulile și moderarea diferă între servere. Verifică cine poate participa și cum este gestionat chatul."
      },
      {
        "label": "Controale pentru Java și Bedrock",
        "value": "Versiunile acceptate ale ambelor ediții folosesc controale prin contul Microsoft. Verifică permisiunile pentru multiplayer și comunicare."
      },
      {
        "label": "Moduri și descărcări",
        "value": "Verifică sursa și fișierul înainte de a instala un mod. Un site cunoscut nu garantează că fiecare fișier este sigur."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Controalele contului au limite",
        "description": "Un Realm privat limitează membrii, dar siguranța depinde și de cine este invitat și cum se comportă. Verifică și modurile sau aplicațiile externe de chat."
      },
      {
        "type": "tip",
        "title": "Începe de aici",
        "description": "Folosește un cont Microsoft de copil, verifică permisiunile multiplayer și alegeți persoanele cu care se joacă."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Controalele Microsoft se aplică versiunilor Java și Bedrock acceptate. Minecraft exclude versiunile anterioare Java 1.16.4 și jocurile modificate din suportul pentru control parental. Controalele magazinului și dispozitivului sunt separate.",
      "sources": [
        {
          "title": "Minecraft: parental controls and supported versions",
          "url": "https://www.minecraft.net/en-us/article/parental-controls"
        },
        {
          "title": "Minecraft: child accounts and social features",
          "url": "https://help.minecraft.net/hc/en-us/articles/360058605852"
        }
      ]
    },
    "ageRating": "Clasificare de conținut PEGI 7; cerințele contului și magazinului diferă"
  },
  chatgpt: {
    "riskLabelText": "Risc mediu",
    "summary": "Un chatbot AI care poate ajuta la învățare. Copiii trebuie să verifice răspunsurile și să înțeleagă limitele sfaturilor sale.",
    "description": "Un chatbot AI care poate ajuta la învățare. Copiii trebuie să verifice răspunsurile și să înțeleagă limitele sfaturilor sale.",
    "quickActions": [
      {
        "title": "Conectează un cont de părinte",
        "description": "Deschide Settings → Parental controls → Add family member. Adolescentul trebuie să accepte invitația; apoi selectează-l pentru a verifica opțiunile."
      },
      {
        "title": "Verifică datele și memoria",
        "description": "Verifică opțiunile pentru antrenarea modelelor și memoria salvată în controalele parentale. Oprirea lor nu șterge conversațiile existente sau fiecare detaliu deja salvat."
      },
      {
        "title": "Setează Study hours și Quiet hours",
        "description": "Study hours pornește conversațiile noi eligibile în modul de studiu. Quiet hours limitează accesul în intervalele stabilite; cele două setări au roluri diferite."
      },
      {
        "title": "Stabiliți regulile pentru școală",
        "description": "Verifică politica școlii despre AI și stabiliți când este permis ajutorul, cum se citează și ce trebuie lucrat independent."
      }
    ],
    "watchFor": [
      {
        "title": "Încercări de ocolire a protecțiilor",
        "description": "Copiii pot găsi sau distribui instrucțiuni care încearcă să obțină răspunsuri nepotrivite.",
        "severity": "high"
      },
      {
        "title": "Teme făcute în locul copilului",
        "description": "Un răspuns complet poate ascunde faptul că adolescentul nu a înțeles materia. Cere-i să explice pașii.",
        "severity": "high"
      },
      {
        "title": "Înlocuirea sprijinului uman",
        "description": "Observă dacă discuțiile cu AI iau locul prietenilor, familiei sau ajutorului de care are nevoie.",
        "severity": "medium"
      },
      {
        "title": "Răspunsuri greșite spuse cu încredere",
        "description": "Un răspuns fluent poate fi fals. Verificați afirmațiile importante înainte de a le folosi.",
        "severity": "medium"
      },
      {
        "title": "Date personale în conversații",
        "description": "Discutați ce informații nu ar trebui trimise și verificați opțiunile de păstrare a datelor.",
        "severity": "low"
      }
    ],
    "setupGuide": [
      {
        "title": "Verifică experiența pentru adolescenți",
        "steps": [
          "ChatGPT for Teens se aplică automat conturilor eligibile identificate ca aparținând celor sub 18 ani. Unde apare opțiunea, verificați împreună Settings → Account → Age."
        ]
      },
      {
        "title": "Conectează controalele parentale",
        "steps": [
          "Deschide Settings → Parental controls → Add family member. Adolescentul trebuie să accepte invitația; apoi selectează-l pentru a verifica opțiunile."
        ]
      },
      {
        "title": "Verifică funcțiile disponibile",
        "steps": [
          "Verifică protecțiile pentru conținut sensibil, antrenarea modelelor, memoria salvată, Voice, imaginile și Health unde este disponibil. Pentru ChatGPT Work, verifică separat accesul codului la rețea și Cloud browser; niciuna nu controlează toate căutările sau pluginurile."
        ]
      },
      {
        "title": "Separă studiul de pauzele de acces",
        "steps": [
          "Study hours afectează conversațiile noi eligibile din experiența principală, nu conversațiile din GPT-uri sau Projects. Quiet hours restricționează accesul. Unele schimbări se aplică doar conversațiilor noi."
        ]
      },
      {
        "title": "Înțelege confidențialitatea și deconectarea",
        "steps": [
          "Controalele parentale nu îți permit să citești conversațiile adolescentului. Oricare dintre voi poate deconecta conturile; dacă adolescentul o face, ești notificat, iar controalele și alertele asociate se opresc."
        ]
      },
      {
        "title": "Înțelege alertele de siguranță",
        "steps": [
          "Alertele pot urma evaluării unor semne de autovătămare, unor posibile tulburări alimentare în Chat sau dezactivării contului pentru încălcări legate de violență. Pot rata probleme și nu sunt monitorizare în direct. Verifică datele de contact după conectare."
        ]
      },
      {
        "title": "Verificați răspunsurile împreună",
        "steps": [
          "Cere adolescentului să explice un răspuns și verificați afirmațiile importante într-o sursă de încredere. Stabiliți ce ajutor este permis pentru teme."
        ]
      }
    ],
    "userCount": "Elevi și adulți",
    "ageRecommendation": "Cu reguli clare pentru teme și verificarea răspunsurilor",
    "appMetrics": [
      {
        "label": "Protecții pentru adolescenți",
        "value": "ChatGPT le activează automat pentru conturile eligibile identificate ca aparținând celor sub 18 ani."
      },
      {
        "label": "Poți citi conversațiile copilului?",
        "value": "Nu. Conectarea conturilor nu îți dă acces la conversațiile adolescentului."
      },
      {
        "label": "Study hours",
        "value": "Conversațiile noi din experiența principală ChatGPT pornesc în modul de studiu la orele alese. GPT-urile și Projects sunt excluse. Accesul rămâne deschis."
      },
      {
        "label": "Quiet hours",
        "value": "Oprește accesul adolescentului la ChatGPT în intervalele stabilite de tine."
      }
    ],
    "callouts": [
      {
        "type": "warning",
        "title": "Alertele au limite",
        "description": "Conectarea conturilor nu oferă acces la conversații sau monitorizare continuă. Discutați în continuare și răspunde la probleme chiar dacă nu apare o alertă."
      },
      {
        "type": "tip",
        "title": "Actualizare din octombrie 2026",
        "description": "OpenAI a anunțat la 30 octombrie restricții suplimentare pentru informațiile despre arme oferite adolescenților. Protecțiile nu garantează că fiecare răspuns este corect sau potrivit."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-11-03",
      "availability": "Controalele se aplică conturilor personale eligibile conectate și se încheie la deconectare sau la trecerea în experiența de adult. Funcțiile diferă după cont și regiune. Study hours și controalele ChatGPT Work au acoperire separată.",
      "sources": [
        {
          "title": "OpenAI: current parental controls",
          "url": "https://help.openai.com/en/articles/12315553-managing-parental-controls-in-chatgpt"
        },
        {
          "title": "OpenAI: ChatGPT for Teens",
          "url": "https://help.openai.com/en/articles/20001421-chatgpt-for-teens"
        },
        {
          "title": "OpenAI: 30 October teen safety update",
          "url": "https://openai.com/index/community-safety-report-and-new-protections-for-teens/"
        }
      ]
    }
  }
};
