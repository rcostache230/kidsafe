import type { Entry } from "@/data/entries";

type LocalizedEntry = Omit<Entry, "slug" | "category" | "riskLevel" | "riskBarPosition" | "related">;

export const roEntryTranslations: Partial<Record<Entry["slug"], Partial<LocalizedEntry>>> = {
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
        "label": "Conversații personale",
        "value": "Criptate integral"
      },
      {
        "label": "Raportare",
        "value": "Se pot trimite mesaje"
      },
      {
        "label": "Conturi gestionate",
        "value": "Lansare regională"
      },
      {
        "label": "Adăugare în grupuri",
        "value": "Controale de confidențialitate"
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
        "title": "Most impactful action",
        "description": "Verifică tipul contului și permisiunile pentru grupuri înainte de a intra în primul grup al clasei."
      }
    ],
    "riskLabelText": "Risc mediu-ridicat",
    "homeBadgeLabel": "Setează controalele mai întâi",
    "editorialReview": {
      "checkedAt": "2026-09-03",
      "availability": "Conturile gestionate de părinte se lansează treptat. Anunțul global nu confirmă disponibilitatea în România.",
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
    "summary": "Un serviciu de divertisment cu personaje AI. Character.AI spune că a eliminat chatul deschis cu personaje pentru cei sub 18 ani; verifică vârsta contului și experiența disponibilă copilului.",
    "description": "Un serviciu de divertisment cu personaje AI. Character.AI spune că a eliminat chatul deschis cu personaje pentru cei sub 18 ani; verifică vârsta contului și experiența disponibilă copilului.",
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
        "label": "Chat deschis sub 18 ani",
        "value": "Eliminat de platformă"
      },
      {
        "label": "Informații despre vârstă",
        "value": "Verificați împreună"
      },
      {
        "label": "Alte căi de acces",
        "value": "Verifică și browserul"
      },
      {
        "label": "Sprijin",
        "value": "Păstrează legătura cu oamenii"
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
        "title": "Most impactful action",
        "description": "Verificați împreună experiența reală a contului și stabiliți la ce este util AI în familia voastră."
      }
    ],
    "riskLabelText": "Risc foarte ridicat",
    "homeBadgeLabel": "Necesită atenție sporită",
    "editorialReview": {
      "checkedAt": "2026-09-03",
      "availability": "Platforma confirmă eliminarea chatului deschis cu personaje sub 18 ani. Verifică vârsta și accesul contului cu suportul oficial, dacă este nevoie.",
      "sources": [
        {
          "title": "Character.AI: anunțul despre chat sub 18 ani",
          "url": "https://blog.character.ai/u18-chat-announcement/"
        },
        {
          "title": "Character.AI: siguranță, septembrie 2026",
          "url": "https://blog.character.ai/continuing-to-build-upon-our-safety-priorities/"
        },
        {
          "title": "eSafety: ghid despre companioni AI",
          "url": "https://www.esafety.gov.au/educators/training-for-professionals/professional-learning-program-teachers/ai-companions-information-sheet"
        }
      ]
    }
  },
  smartphone: {
    name: "Telefon",
    riskLabelText: "Risc critic",
    summary:
      "Un telefon pune mesagerie, internet, camera, plati si partajarea locatiei intr-un singur dispozitiv de buzunar.",
    description:
      "Un telefon pune mesagerie, internet, camera, plati si partajarea locatiei intr-un singur dispozitiv de buzunar. Asta il transforma in cea mai rapida cale spre distragere constanta, contact privat si continut pe care un parinte nu il vede niciodata daca setarea initiala nu este facuta corect.",
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
      "O tableta pare adesea mai sigura decat un telefon pentru ca sta in casa, dar poate fi la fel de deschisa imediat ce browserul, aplicatiile video si magazinul de aplicatii sunt active.",
    description:
      "O tableta pare adesea mai sigura decat un telefon pentru ca sta in casa, dar poate fi la fel de deschisa imediat ce browserul, aplicatiile video si magazinul de aplicatii sunt active. Utilizarea in comun creeaza si o alta problema: copiii mostenesc conturi de adult, istoric de navigare de adult si permisiuni de adult.",
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
      "Un laptop pare un instrument de scoala, dar in practica functioneaza ca un terminal complet de internet.",
    description:
      "Un laptop pare un instrument de scoala, dar in practica functioneaza ca un terminal complet de internet. Browserele, descarcarile, clientii de jocuri, VPN-urile si aplicatiile de chat pot exista toate in paralel, ceea ce face supravegherea mult mai grea odata ce laptopul paraseste camera comuna.",
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
      "Un desktop pare mai usor de supravegheat pentru ca sta intr-un singur loc, dar avantajul dispare daca se afla in dormitor.",
    description:
      "Un desktop pare mai usor de supravegheat pentru ca sta intr-un singur loc, dar avantajul dispare daca se afla in dormitor. Daca ecranul nu este vizibil, platformele de jocuri, browserele, instrumentele de chat si sesiunile de noapte devin mult mai greu de observat decat pe telefon.",
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
      "iOS pare rafinat si sigur, ceea ce face multe familii sa creada ca setarile implicite sunt suficiente.",
    description:
      "iOS pare rafinat si sigur, ceea ce face multe familii sa creada ca setarile implicite sunt suficiente. In realitate, AirDrop, iMessage, instalarile de aplicatii si setarile Screen Time au nevoie de configurare activa daca telefonul sau iPad-ul apartine unui copil.",
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
      "Android ofera familiilor instrumente utile de control, dar le ofera copiilor si mai multe cai de ocolire daca setarea este relaxata.",
    description:
      "Android ofera familiilor instrumente utile de control, dar le ofera copiilor si mai multe cai de ocolire daca setarea este relaxata. Sideloading-ul, meniurile diferite intre producatori si accesul larg in browser inseamna ca cel mai sigur dispozitiv Android este unul conectat de la inceput la conturi Google supravegheate.",
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
      "Windows este puternic, flexibil si foarte prezent in dormitoare si contexte scolare, exact de aceea are nevoie de reguli clare de familie.",
    description:
      "Windows este puternic, flexibil si foarte prezent in dormitoare si contexte scolare, exact de aceea are nevoie de reguli clare de familie. Ofera acces la browsere complete, descarcari de fisiere, launchere de jocuri si instrumente de chat private daca un parinte nu creeaza un cont real de copil si nu pastreaza drepturile de administrator pentru sine.",
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
      "macOS este curat si de incredere, dar poate deveni usor un computer cu browser si aplicatii fara limite daca acel cont al copilului nu este restrans.",
    description:
      "macOS este curat si de incredere, dar poate deveni usor un computer cu browser si aplicatii fara limite daca acel cont al copilului nu este restrans. Screen Time ajuta, dar doar atunci cand codul este separat si autentificarea copilului nu poate instala software liber.",
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
    "ageRating": "Clasificarea diferă după joc; Kids 5–8 / Select 9–15",
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
          "Roblox a anunțat disponibilitatea globală pe 16 iunie 2026. Încadrarea folosește informațiile despre vârstă; nu este doar un nivel ales de părinte. Copiii cu vârsta verificată de 5–8 ani folosesc Kids, iar cei de 9–15 ani, Select. Conturile cu vârstă doar declarată au restricții suplimentare, inclusiv lipsa chatului."
        ]
      },
      {
        "title": "Verifică permisiunile de chat",
        "steps": [
          "Chatul necesită verificarea vârstei. Consultă opțiunile afișate pentru copil, fără să presupui că toate conversațiile sunt limitate la prieteni. Controalele disponibile depind de vârstă și regiune."
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
        "label": "Conturi pentru copii",
        "value": "Kids / Select"
      },
      {
        "label": "Acces la chat",
        "value": "Vârstă verificată"
      },
      {
        "label": "Acces pentru părinte",
        "value": "Cont conectat"
      },
      {
        "label": "Cumpărături",
        "value": "Robux și abonamente"
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
        "title": "Most impactful action",
        "description": "Folosește propriul cont de părinte conectat pentru a verifica setările aplicabile copilului tău."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-09-03",
      "availability": "Kids și Select sunt disponibile global. Controalele individuale diferă după vârstă, cont și regiune.",
      "sources": [
        {
          "title": "Roblox: controale parentale",
          "url": "https://about.roblox.com/parental-controls"
        },
        {
          "title": "Roblox: disponibilitatea Kids și Select",
          "url": "https://about.roblox.com/newsroom/2026/06/age-based-roblox-kids-and-select-accounts-now-globally-available"
        },
        {
          "title": "Roblox: limite lunare de cheltuieli",
          "url": "https://en.help.roblox.com/hc/en-us/articles/4409558125460-Monthly-Spending-Limits-and-Notifications-FAQ"
        }
      ]
    }
  },
  youtube: {
    riskLabelText: "Risc ridicat",
    summary:
      "O platforma video condusa de un motor puternic de recomandari, autoplay si comentarii in mare parte nefiltrate.",
    description:
      "O platforma video condusa de un motor puternic de recomandari, autoplay si comentarii in mare parte nefiltrate.",
    quickActions: [
      {
        title: "Activeaza Restricted Mode peste tot",
        description:
          "Account icon → Restricted Mode → ON. Repeta asta pe fiecare browser si pe fiecare dispozitiv, fiindca nu este o setare valabila la nivel de cont."
      },
      {
        title: "Foloseste YouTube Kids pentru copiii sub 13 ani",
        description:
          "Muta copiii mai mici in aplicatia YouTube Kids si verifica setarile la kids.youtube.com/settings."
      },
      {
        title: "Opreste Autoplay",
        description:
          "Account icon → Settings → Autoplay → OFF, astfel incat videoclipurile sa se opreasca in loc sa curga spre urmatoarea recomandare."
      },
      {
        title: "Limiteaza sau opreste feedul Shorts",
        description:
          "Pentru conturile de adolescent supravegheate, deschide Family Center → copilul tau → Time management si seteaza o limita zilnica pentru Shorts. Setarea pe 0 minute elimina complet feedul Shorts (introdus in ianuarie 2026)."
      }
    ],
    watchFor: [
      {
        title: "Rabbit holes create de algoritm",
        description:
          "Un copil poate trece rapid de la clipuri inofensive la continut extremist, violent sau despre self-harm, pentru ca sistemul recompenseaza vizionarea continua.",
        severity: "critical"
      },
      {
        title: "Comentariile expun copiii la adulti si continut explicit",
        description:
          "Comentariile includ des limbaj sexual, hartuire, escrocherii si tentative directe de contact, cu moderare foarte slaba.",
        severity: "high"
      },
      {
        title: "YouTube Kids nu este complet sigur",
        description:
          "Versiunea pentru copii reduce riscul, dar lasa in continuare sa treaca videoclipuri nepotrivite, canale inselatoare si greseli ale algoritmului.",
        severity: "high"
      },
      {
        title: "Autoplay elimina punctele naturale de oprire",
        description:
          "Fara un semnal clar de stop, o sesiune scurta planificata se poate transforma usor intr-o ora sau mai mult de vizionare pasiva.",
        severity: "high"
      },
      {
        title: "Sfaturi inselatoare despre sanatate si bani",
        description:
          "Creatorii increzatori pot suna convingator in timp ce ofera sfaturi daunatoare despre sanatate sau promisiuni de imbogatire rapida.",
        severity: "medium"
      }
    ],
    setupGuide: [
      {
        title: "Activeaza Restricted Mode peste tot",
        steps: [
          "Account icon → Restricted Mode → ON. Repeta asta pe fiecare browser si pe fiecare dispozitiv, fiindca nu este o setare valabila la nivel de cont."
        ]
      },
      {
        title: "Foloseste YouTube Kids pentru copiii sub 13 ani",
        steps: [
          "Muta copiii mai mici in aplicatia YouTube Kids si verifica setarile la kids.youtube.com/settings."
        ]
      },
      {
        title: "Opreste Autoplay",
        steps: [
          "Account icon → Settings → Autoplay → OFF, astfel incat videoclipurile sa se opreasca in loc sa curga spre urmatoarea recomandare."
        ]
      },
      {
        title: "Dezactiveaza Search pentru copiii mici",
        steps: [
          "YouTube Kids app → profile icon → Settings → dezactiveaza Search pentru copiii sub 8 ani, astfel incat aplicatia sa afiseze un set mai restrans de clipuri."
        ]
      },
      {
        title: "Verifica istoricul de vizionare saptamanal",
        steps: [
          "Account → History si uita-te la ce a inceput algoritmul sa ii serveasca copilului."
        ]
      },
      {
        title: "Limiteaza sau opreste feedul Shorts",
        steps: [
          "Pe un cont de adolescent supravegheat, deschide Family Center → selecteaza copilul → Time management si seteaza o limita zilnica pentru feedul Shorts. Setarea pe 0 minute scoate feedul nesfarsit de Shorts din aplicatia lor (lansat in ianuarie 2026)."
        ]
      },
      {
        title: "Cunoaste noua regula de varsta pentru live streaming",
        steps: [
          "Din iulie 2025 YouTube permite live streaming doar utilizatorilor de 16+. Copiii de 13-15 ani pot transmite live doar daca sunt supravegheati vizibil de un adult pe acelasi canal, deci verifica inainte de a permite orice transmisiune live."
        ]
      },
      {
        title: "Seteaza o limita de timp specifica aplicatiei",
        steps: [
          "Foloseste iPhone Screen Time sau Android Digital Wellbeing si tinteste aplicatia YouTube, nu doar limita generala a dispozitivului."
        ]
      }
    ],
    ageRating: "13+ pentru conturi",
    userCount: "Audienta globala uriasa",
    ageRecommendation: "Foloseste YouTube Kids sub 13 ani, dar supravegheaza atent",
    appMetrics: [
      { label: "Utilizare zilnica la adolescenti", value: "80 min/zi" },
      { label: "Puterea algoritmului", value: "Extrema" },
      { label: "Comentarii", value: "Nemoderate" },
      { label: "YouTube Kids", value: "Nu e complet sigur" }
    ],
    callouts: [
      {
        type: "warning",
        title: "Highest concern",
        description:
          "Algoritmul de recomandare al YouTube este antrenat sa maximizeze timpul de vizionare, nu starea de bine. Un copil care vede un clip usor edgy poate primi continut tot mai extrem in mai putin de 30 de minute, inclusiv pe YouTube Kids."
      },
      {
        type: "tip",
        title: "Most impactful action",
        description:
          "Restricted Mode trebuie activat separat pe fiecare browser si pe fiecare dispozitiv. Nu se sincronizeaza automat."
      },
      {
        type: "tip",
        title: "Nou in 2026",
        description:
          "Parintii conturilor de adolescent supravegheate pot acum limita feedul Shorts la minut - seteaza-l pe 0 in Family Center → Time management pentru a elimina complet feedul nesfarsit de clipuri scurte."
      }
    ]
  },
  snapchat: {
    riskLabelText: "Risc ridicat",
    summary:
      "O aplicatie de poze si mesagerie construita in jurul mesajelor care dispar, partajarii rapide si functiilor de locatie live.",
    description:
      "O aplicatie de poze si mesagerie construita in jurul mesajelor care dispar, partajarii rapide si functiilor de locatie live.",
    quickActions: [
      {
        title: "Porneste Ghost Mode",
        description:
          "Snap Map → gear icon → Ghost Mode ON. Fa asta inainte ca cel mic sa isi construiasca lista de prieteni."
      },
      {
        title: "Limiteaza cine il poate contacta",
        description:
          "Settings → Privacy Controls → Contact Me si seteaza Friends only."
      },
      {
        title: "Curata lista de prieteni",
        description:
          "Profile → My Friends si elimina pe oricine copilul nu poate identifica clar offline."
      },
      {
        title: "Configureaza Family Center",
        description:
          "Din contul tau (18+) leaga contul adolescentului in Family Center pentru a vedea contactele recente, a filtra Story-urile sensibile si a opri chatbotul My AI."
      }
    ],
    watchFor: [
      {
        title: "Partajarea locatiei prin Snap Map",
        description:
          "Locatia in timp real poate arata unde locuieste copilul, unde merge la scoala sau unde se afla chiar acum.",
        severity: "critical"
      },
      {
        title: "Sexting-ul pare mai sigur decat este",
        description:
          "Formatul cu mesaje care dispar scade garda copilului, desi capturile de ecran si al doilea dispozitiv fac salvarea foarte usoara.",
        severity: "critical"
      },
      {
        title: "Solicitari legate de droguri",
        description:
          "Snapchat este folosit frecvent pentru contacte locale si poate expune adolescentii la oferte sau postari codate pentru care nu sunt pregatiti.",
        severity: "high"
      },
      {
        title: "Escrocherii de sextortion",
        description:
          "Un copil poate fi presat sa trimita o imagine si apoi santajat cu amenintarea ca aceasta va fi distribuita mai departe.",
        severity: "high"
      },
      {
        title: "Anxietate de streak si FOMO",
        description:
          "Streak-urile zilnice imping la verificare constanta si fac prieteniile obisnuite sa para o performanta permanenta.",
        severity: "medium"
      }
    ],
    setupGuide: [
      {
        title: "Porneste Ghost Mode",
        steps: [
          "Snap Map → gear icon → Ghost Mode ON. Fa asta inainte ca cel mic sa isi construiasca lista de prieteni."
        ]
      },
      {
        title: "Limiteaza cine il poate contacta",
        steps: [
          "Settings → Privacy Controls → Contact Me si seteaza Friends only."
        ]
      },
      {
        title: "Curata lista de prieteni",
        steps: [
          "Profile → My Friends si elimina pe oricine copilul nu poate identifica clar offline."
        ]
      },
      {
        title: "Dezactiveaza Quick Add",
        steps: [
          "Settings → Privacy Controls → See Me in Quick Add → OFF pentru ca acel cont sa fie mai putin vizibil strainilor."
        ]
      },
      {
        title: "Explica faptul ca screenshot-urile sunt permanente",
        steps: [
          "Deschide orice chat impreuna si explica faptul ca disparitia este o functie de design, nu o garantie."
        ]
      },
      {
        title: "Leaga Family Center si foloseste noile informatii",
        steps: [
          "Din contul tau (18+) deschide Family Center si invita adolescentul (13-17) sa se conecteze. Din ianuarie 2026 poti vedea media saptamanala a timpului petrecut, defalcata pe functii, si primesti semnale de incredere care arata cum ar putea cunoaste fiecare prieten nou pe care il adauga."
        ]
      },
      {
        title: "Activeaza Content Controls si dezactiveaza My AI",
        steps: [
          "In Family Center, activeaza Content Controls pentru a filtra Story-urile de la creatori marcati ca sensibili sau sugestivi, si opreste chatbotul My AI daca nu vrei ca cel mic sa converseze cu el."
        ]
      },
      {
        title: "Verifica Memories in mod regulat",
        steps: [
          "Memories tab → verificati impreuna snap-urile salvate pentru ca materialul privat sa nu se stranga pe nesimtite."
        ]
      }
    ],
    userCount: "Foarte populara printre adolescenti",
    ageRecommendation: "Recomandata 15+ cu supraveghere activa",
    appMetrics: [
      { label: "Grupa principala de varsta", value: "13-17" },
      { label: "Snap Map", value: "Pornit implicit" },
      { label: "Mesaje care dispar", value: "Siguranta falsa" },
      { label: "Presiune sociala", value: "Foarte mare" }
    ],
    callouts: [
      {
        type: "warning",
        title: "Highest concern",
        description:
          "Snap Map poate transmite implicit locatia precisa tuturor prietenilor. Activarea Ghost Mode ar trebui facuta inainte de orice altceva."
      },
      {
        type: "tip",
        title: "Most impactful action",
        description:
          "Ghost Mode este setarea cu cel mai mare impact pe Snapchat. Porneste-o inainte de prima cerere de prietenie."
      }
    ]
  },
  instagram: {
    riskLabelText: "Risc ridicat",
    summary:
      "O platforma sociala condusa de identitate vizuala, recomandari algoritmice, feedback public si mesaje directe.",
    description:
      "O platforma sociala condusa de identitate vizuala, recomandari algoritmice, feedback public si mesaje directe.",
    quickActions: [
      {
        title: "Treci pe cont privat",
        description:
          "Settings → Account Privacy → Private Account. Asta trebuie sa fie punctul de plecare, nu un gand ulterior."
      },
      {
        title: "Restrictioneaza mesajele primite",
        description:
          "Settings → Messages → Message Controls → Don't receive requests from Others."
      },
      {
        title: "Porneste Family Centre supervision",
        description:
          "Settings → Family Centre si conecteaza contul parintelui pentru instrumentele de supraveghere sub 18 ani."
      },
      {
        title: "Confirma ca este pe un Teen Account",
        description:
          "Toti utilizatorii sub 18 ani trec acum implicit pe un Teen Account protejat (privat, DM-uri restrictionate, continut PG-13). Verifica daca data nasterii este corecta pentru ca protectiile sa se aplice efectiv."
      }
    ],
    watchFor: [
      {
        title: "Presiune legata de imaginea corporala si tulburari alimentare",
        description:
          "Continuitatea continutului focalizat pe aparente poate schimba modul in care un copil vede corpurile normale, mancarea si propria valoare.",
        severity: "high"
      },
      {
        title: "DM-uri de la straini si grooming",
        description:
          "Conturile publice si setarile deschise pentru mesaje fac usor pentru adulti sa inceapa conversatii private.",
        severity: "high"
      },
      {
        title: "Cyberbullying prin metrici publice",
        description:
          "Like-urile, comentariile, tag-urile si raspunsurile la story pot transforma conflictele sociale obisnuite intr-un scor public.",
        severity: "high"
      },
      {
        title: "Spirale de continut in Explore",
        description:
          "Cateva clickuri pe postari provocatoare sau tulburatoare pot schimba rapid intregul feed de recomandari.",
        severity: "medium"
      },
      {
        title: "Escrocherii financiare de la influenceri falsi",
        description:
          "Giveaway-urile, magazinele false si mesajele in stil influencer pot impinge adolescentii sa ofere date de plata sau date personale.",
        severity: "medium"
      }
    ],
    setupGuide: [
      {
        title: "Treci pe cont privat",
        steps: [
          "Settings → Account Privacy → Private Account. Asta trebuie sa fie punctul de plecare, nu un gand ulterior."
        ]
      },
      {
        title: "Restrictioneaza mesajele primite",
        steps: [
          "Settings → Messages → Message Controls → Don't receive requests from Others."
        ]
      },
      {
        title: "Porneste Family Centre supervision",
        steps: [
          "Settings → Family Centre si conecteaza contul parintelui pentru instrumentele de supraveghere sub 18 ani."
        ]
      },
      {
        title: "Verifica protectiile Teen Account",
        steps: [
          "Din 2024 fiecare cont sub 18 ani trece implicit pe un Teen Account: privat in mod implicit, setari stricte de mesaje si (din octombrie 2025) continut PG-13 implicit. Cei sub 16 ani nu pot relaxa aceste setari fara aprobarea unui parinte conectat in Family Centre, deci asigura-te ca supravegherea este activa. Instagram foloseste acum si detectia varstei pentru a muta inapoi in protectiile pentru adolescenti conturile care au declarat o data de nastere de adult."
        ]
      },
      {
        title: "Activeaza setarea de continut cea mai stricta",
        steps: [
          "In Family Centre poti pastra setarea implicita PG-13 sau poti activa setarea mai stricta Limited Content, care filtreaza mai mult material si elimina posibilitatea de a vedea sau lasa comentarii. Parintii sunt avertizati si daca un adolescent cauta repetat termeni legati de suicid sau autovatamare (adaugat in februarie 2026)."
        ]
      },
      {
        title: "Sterge istoricul cautarilor lunar",
        steps: [
          "Settings → Your Activity → Recent Searches sau Clear Search History si verifica ce a invatat algoritmul."
        ]
      },
      {
        title: "Seteaza o limita zilnica",
        steps: [
          "Settings → Your Activity → Time Spent → Daily Limit si alege o limita pe care o vei aplica constant."
        ]
      },
      {
        title: "Aproba manual tag-urile",
        steps: [
          "Settings → Privacy → Tags → Manually Approve Tags, astfel incat copilul sa nu fie atasat la postari fara avertisment."
        ]
      }
    ],
    userCount: "Audienta uriasa de adolescenti si tineri adulti",
    ageRecommendation: "Nerecomandat sub 16 ani fara supraveghere",
    appMetrics: [
      { label: "Risc imagine corporala", value: "Foarte ridicat" },
      { label: "Continut implicit (adolescenti)", value: "PG-13" },
      { label: "DM-uri de la straini (adolescenti)", value: "Restrictionate implicit" },
      { label: "Teen Accounts", value: "Implicit sub 18 ani" }
    ],
    callouts: [
      {
        type: "warning",
        title: "Highest concern",
        description:
          "Algoritmul este principalul risc pe Instagram, nu doar oamenii de pe platforma. Odata ce feedul invata nesiguranta sau obsesia, continua sa serveasca tot mai mult din acelasi continut."
      },
      {
        type: "tip",
        title: "Most impactful action",
        description:
          "Un cont privat plus DM-uri restrictionate inchid imediat majoritatea rutelor de contact cu straini."
      },
      {
        type: "tip",
        title: "Nou din 2024",
        description:
          "Teen Accounts sunt acum setarea implicita pentru toti sub 18 ani si aplica automat modul privat, DM-uri stricte si continut PG-13. Conecteaza un cont de parinte in Family Centre pentru ca cei sub 16 ani sa nu poata opri protectiile."
      }
    ]
  },
  tiktok: {
    riskLabelText: "Risc foarte ridicat",
    summary:
      "O platforma de clipuri scurte alimentata de unul dintre cele mai puternice motoare de recomandare folosite frecvent de copii.",
    description:
      "O platforma de clipuri scurte alimentata de unul dintre cele mai puternice motoare de recomandare folosite frecvent de copii.",
    quickActions: [
      {
        title: "Activeaza Family Pairing",
        description:
          "Settings → Family Pairing si leaga contul parintelui de contul copilului."
      },
      {
        title: "Seteaza o limita zilnica ferma",
        description:
          "Family Pairing → Screen Time si limiteaza utilizarea la 60 de minute sau mai putin pentru adolescentii mai mici, protejata cu un cod de parinte."
      },
      {
        title: "Restrictioneaza DM-urile",
        description:
          "Family Pairing → Direct Messages si limiteaza contactul la Friends sau dezactiveaza complet daca acel cont nu are nevoie de mesagerie."
      }
    ],
    watchFor: [
      {
        title: "Spirale de continut despre self-harm si tulburari alimentare",
        description:
          "Algoritmul poate invata vulnerabilitatea foarte repede si apoi poate servi material tot mai extrem fara mare efort din partea utilizatorului.",
        severity: "critical"
      },
      {
        title: "Scroll infinit si pierdere extrema de timp",
        description:
          "Fluxul are aproape zero indicii de oprire, asa ca sesiuni scurte se transforma usor in mult mai mult decat a vrut copilul.",
        severity: "critical"
      },
      {
        title: "Contact pradalnic prin DMs si Duets",
        description:
          "Postarea publica si instrumentele sociale pot crea contact cu straini chiar daca un copil nu il cauta in mod activ.",
        severity: "high"
      },
      {
        title: "Dezinformare si radicalizare",
        description:
          "Continutul emotional si rapid este recompensat, ceea ce face ca ideile inselatoare sau extreme sa circule deosebit de bine.",
        severity: "high"
      },
      {
        title: "Cumparaturi impulsive in TikTok Shop",
        description:
          "Clipurile scurte pot trece direct in comportament de cumparare inainte ca un copil sa se gandeasca serios la cost sau calitate.",
        severity: "medium"
      }
    ],
    setupGuide: [
      {
        title: "Activeaza Family Pairing",
        steps: [
          "Settings → Family Pairing si leaga contul parintelui de contul copilului."
        ]
      },
      {
        title: "Seteaza o limita zilnica ferma",
        steps: [
          "Family Pairing → Screen Time si limiteaza utilizarea la 60 de minute sau mai putin pentru adolescentii mai mici, protejata cu un cod de parinte."
        ]
      },
      {
        title: "Restrictioneaza DM-urile",
        steps: [
          "Family Pairing → Direct Messages si limiteaza contactul la Friends sau dezactiveaza complet daca acel cont nu are nevoie de mesagerie."
        ]
      },
      {
        title: "Porneste Restricted Mode",
        steps: [
          "Settings → Digital Wellbeing → Restricted Mode si blocheaza-l cu codul parintelui."
        ]
      },
      {
        title: "Fa contul privat si blocheaza Duets cu straini",
        steps: [
          "Settings → Privacy → Private Account, apoi Privacy → Duet si alege optiunea friends-only."
        ]
      },
      {
        title: "Foloseste noile controale Family Pairing",
        steps: [
          "Family Pairing permite acum (din iulie 2025) sa programezi intervale Time Away care blocheaza aplicatia in timpul orelor de scoala sau noaptea, sa primesti notificari cand adolescentul posteaza un clip public, sa blochezi conturi anume si sa vezi pe cine urmareste, cine il urmareste si ce subiecte ii modeleaza feedul. Revizuieste-le impreuna in setarile Family Pairing."
        ]
      },
      {
        title: "Modeleaza feedul activ",
        steps: [
          "Tine apasat pe clipurile nedorite → Not Interested, astfel incat motorul de recomandare sa primeasca feedback corectiv."
        ]
      }
    ],
    userCount: "Audienta globala uriasa",
    ageRecommendation: "Nerecomandat sub 16 ani fara controale stricte",
    appMetrics: [
      { label: "Utilizare zilnica la adolescenti", value: "95 min" },
      { label: "Puterea algoritmului", value: "Extrema" },
      { label: "Legatura cu sanatatea mentala", value: "Cea mai puternica" },
      { label: "Colectare de date", value: "Extinsa" }
    ],
    callouts: [
      {
        type: "warning",
        title: "Highest concern",
        description:
          "Motorul de recomandare TikTok este riscul principal al produsului. Aplicatia este construita sa maximizeze timpul petrecut, iar limitele de timp sunt cel mai eficient control al parintelui."
      },
      {
        type: "tip",
        title: "Most impactful action",
        description:
          "Family Pairing le ofera parintilor control real fara a cere parola copilului. Seteaza-l inainte de orice altceva."
      },
      {
        type: "tip",
        title: "Nou din 2025",
        description:
          "Family Pairing a adaugat programarea Time Away, alerte cand adolescentul posteaza public, posibilitatea de a bloca conturi anume si vizibilitate asupra celor pe care ii urmareste si a ceea ce ii modeleaza feedul. Conturile sub 16 ani sunt si ele private implicit, cu o limita zilnica de 60 de minute."
      }
    ]
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
        "description": "Deschide Family Center din setările contului. Finalizați conectarea împreună în aplicația mobilă; adolescentul trebuie să accepte."
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
        "title": "Separă protecțiile de lansarea globală",
        "steps": [
          "Actualizarea Discord din februarie a amânat verificarea globală a vârstei pentru a doua jumătate a lui 2026. Anunțul nu confirmă finalizarea. Verifică setările contului și cerințele țării; nu tuturor li se cere un act sau o scanare facială."
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
        "label": "Instrumente pentru părinte",
        "value": "Family Center"
      },
      {
        "label": "Conținutul mesajelor",
        "value": "Privat"
      },
      {
        "label": "Filtre media",
        "value": "Verifică setările"
      },
      {
        "label": "Verificare globală a vârstei",
        "value": "Lansare variabilă"
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
        "title": "Most impactful action",
        "description": "Conectează Family Center și verificați permisiunile de contact înainte de a intra pe alte servere."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-09-03",
      "availability": "Verificarea globală a vârstei a fost amânată pentru a doua jumătate a lui 2026; anunțul citat nu confirmă finalizarea. Verifică disponibilitatea locală.",
      "sources": [
        {
          "title": "Discord: actualizarea verificării vârstei",
          "url": "https://discord.com/safety/how-discord-is-building-safer-experiences-for-teens"
        },
        {
          "title": "Discord: Family Center pentru părinți",
          "url": "https://support.discord.com/hc/en-us/articles/14155043715735-Family-Center-for-Parents-and-Guardians"
        },
        {
          "title": "Discord: confidențialitate și contact",
          "url": "https://support.discord.com/hc/en-us/articles/217916488-Blocking-Privacy-Settings"
        },
        {
          "title": "Discord: filtre pentru conținut sensibil",
          "url": "https://support.discord.com/hc/en-us/articles/18210995019671-Discord-Sensitive-Content-Filters"
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
        "title": "Stabiliți când se încheie jocul",
        "steps": [
          "Alegeți ore de încheiere și verificați cheltuielile împreună. La o plată neașteptată, verifică magazinul prin care a fost făcută."
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
        "label": "Acces pentru părinte",
        "value": "PIN Epic"
      },
      {
        "label": "Chat",
        "value": "Verifică permisiunile"
      },
      {
        "label": "PIN pentru plăți Epic",
        "value": "Nu acoperă toate plățile"
      },
      {
        "label": "V-Bucks",
        "value": "Reguli separate"
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
        "title": "Most impactful action",
        "description": "Setează PIN-ul de părinte Epic, apoi stabiliți permisiunile de chat și un buget în bani reali."
      }
    ],
    "editorialReview": {
      "checkedAt": "2026-09-03",
      "availability": "Controalele Epic sunt separate de cele ale altor magazine. Unele opțiuni depind de vârstă și regiune.",
      "sources": [
        {
          "title": "Epic: plăți, chat și controale parentale",
          "url": "https://safety.epicgames.com/en-US/parental-controls"
        },
        {
          "title": "Epic: conturi Cabined",
          "url": "https://www.epicgames.com/site/cabinedaccounts?lang=en"
        }
      ]
    }
  },
  minecraft: {
    riskLabelText: "Risc mediu",
    summary:
      "Un joc sandbox creativ care are risc scazut in single-player, dar devine foarte diferit imediat ce apar serverele publice si descarcarile.",
    description:
      "Un joc sandbox creativ care are risc scazut in single-player, dar devine foarte diferit imediat ce apar serverele publice si descarcarile.",
    quickActions: [
      {
        title: "Verifica daca foloseste Java sau Bedrock",
        description:
          "Java Edition pe PC nu are controale parentale relevante. Bedrock pe console, mobil si Windows poate fi controlat prin Xbox Family Safety."
      },
      {
        title: "Foloseste Microsoft Family Safety pentru Bedrock",
        description:
          "Mergi la family.microsoft.com (controalele s-au mutat aici) si restrictioneaza multiplayer-ul, cumparaturile si timpul pentru orice cont Bedrock."
      },
      {
        title: "Tine jucatorii Java doar pe Realms",
        description:
          "Foloseste minecraft.net/realms si configureaza un Realm privat, doar pe baza de invitatie, cu prieteni cunoscuti, in loc de servere publice."
      }
    ],
    watchFor: [
      {
        title: "Serverele publice expun copiii la adulti",
        description:
          "Serverele multiplayer terte permit accesul strainilor, cu verificare slaba a varstei si moderare foarte amestecata.",
        severity: "high"
      },
      {
        title: "Chatul public este adesea nefiltrat",
        description:
          "Chatul de pe server poate include limbaj sexual, hartuire, escrocherii si alt material mult dincolo de PEGI 7.",
        severity: "high"
      },
      {
        title: "Modurile si texture pack-urile pot aduce malware",
        description:
          "Descarcarile terte sunt o ruta comuna pentru fisiere maliotioase, instalatoare false si instrumente de furt de cont.",
        severity: "high"
      },
      {
        title: "Escrocherii cu Minecraft gratuit",
        description:
          "Paginile de phishing si generatoarele false de conturi ii vizeaza des pe copiii care vor jocul sau continut premium gratuit.",
        severity: "medium"
      },
      {
        title: "Cheltuieli in marketplace",
        description:
          "Editia Bedrock adauga achizitii prin Minecoins si continut din marketplace, desi in general presiunea este mai mica decat in shooter-ele live-service.",
        severity: "low"
      }
    ],
    setupGuide: [
      {
        title: "Verifica daca foloseste Java sau Bedrock",
        steps: [
          "Java Edition pe PC nu are controale parentale relevante. Bedrock pe console, mobil si Windows poate fi controlat prin Xbox Family Safety."
        ]
      },
      {
        title: "Foloseste Microsoft Family Safety pentru Bedrock",
        steps: [
          "Controalele Minecraft sunt acum in Microsoft Family Safety (family.microsoft.com) si in setarile contului Xbox, nu in joc. In tabul Online Safety permite sau blocheaza multiplayer-ul si cluburile (asta controleaza si accesul la Realms); in tabul Privacy stabileste cine poate comunica prin voce, text sau invitatii; si activeaza Needs approval to buy things pentru cumparaturi. Setarile se aplica pe Windows, mobil si console."
        ]
      },
      {
        title: "Tine jucatorii Java doar pe Realms",
        steps: [
          "Foloseste minecraft.net/realms si configureaza un Realm privat, doar pe baza de invitatie, cu prieteni cunoscuti, in loc de servere publice."
        ]
      },
      {
        title: "Limiteaza descarcarile la site-uri de incredere",
        steps: [
          "Permite doar modrinth.com sau curseforge.com pentru moduri sau texture packs. Trateaza orice alta sursa ca risc ridicat."
        ]
      },
      {
        title: "Adauga o ora limita pentru launcher",
        steps: [
          "Foloseste Windows Family Safety sau macOS Screen Time pentru a bloca launcherul Minecraft dupa o anumita ora."
        ]
      }
    ],
    userCount: "Baza globala uriasa de jucatori",
    ageRecommendation: "Single-player este potrivit pentru copii mai mici; multiplayer-ul cere supraveghere",
    appMetrics: [
      { label: "Risc single-player", value: "Scazut" },
      { label: "Risc pe servere publice", value: "Ridicat" },
      { label: "Descarcari de moduri", value: "Vector malware" },
      { label: "Creative mode", value: "Educational" }
    ],
    callouts: [
      {
        type: "warning",
        title: "Highest concern",
        description:
          "Minecraft Realms este mult mai sigur decat serverele publice terte. Pentru multe familii, diferenta dintre risc scazut si risc ridicat nu este jocul in sine, ci locul in care copilul il joaca."
      },
      {
        type: "tip",
        title: "Most impactful action",
        description:
          "Restrangerea multiplayer-ului doar la Realms private este cea mai eficienta schimbare pentru ca elimina contactul cu straini fara sa strice jocul."
      }
    ]
  },
  chatgpt: {
    riskLabelText: "Risc mediu",
    summary:
      "Un chatbot AI care poate ajuta la invatare, dar care estompeaza si linia dintre sprijin, scurtatura si autoritate.",
    description:
      "Un chatbot AI care poate ajuta la invatare, dar care estompeaza si linia dintre sprijin, scurtatura si autoritate.",
    quickActions: [
      {
        title: "Opreste folosirea conversatiilor pentru antrenare",
        description:
          "Settings → Data Controls → Improve the model → OFF, astfel incat conversatiile sa nu fie folosite pentru imbunatatirea modelului."
      },
      {
        title: "Dezactiveaza Memory",
        description:
          "Settings → Personalization → Memory → OFF daca vrei sa fie salvate mai putine detalii intre conversatii."
      },
      {
        title: "Leaga un cont de parinte",
        description:
          "Settings → Parental controls → Add family member pentru a lega contul tau de cel al adolescentului (13-18). Asta deblocheaza ore linistite, protectii de continut si alerte de risc (lansate in septembrie 2025)."
      },
      {
        title: "Stabileste mai intai reguli pentru scoala",
        description:
          "Verifica politica scolii despre AI si scrie reguli simple in familie pentru teme, citare si cand este permis ajutorul AI."
      }
    ],
    watchFor: [
      {
        title: "Prompturi de jailbreak pentru a ocoli protectiile",
        description:
          "Copiii pot gasi sau distribui trucuri de prompt care incearca sa scoata raspunsuri nesigure, partinitoare sau nepotrivite pentru varsta.",
        severity: "high"
      },
      {
        title: "Tri-sarea la scoala",
        description:
          "Instrumentul poate scrie eseuri, rezolva teme si produce raspunsuri finisate mai repede decat observa un parinte sau profesor.",
        severity: "high"
      },
      {
        title: "Dependenta emotionala",
        description:
          "Unii copii pot incepe sa foloseasca chatbotul ca inlocuitor pentru sprijin real, feedback sau contact social.",
        severity: "medium"
      },
      {
        title: "Dezinformare spusa cu incredere",
        description:
          "ChatGPT poate suna foarte sigur pe el si totusi sa greseasca, ceea ce este riscant cand un copil il trateaza ca pe un mix de motor de cautare si tutore.",
        severity: "medium"
      },
      {
        title: "Retentia datelor din conversatii",
        description:
          "Daca setarile raman implicite, copiii pot impartasi detalii personale fara sa inteleaga cum sunt stocate conversatiile.",
        severity: "low"
      }
    ],
    setupGuide: [
      {
        title: "Opreste folosirea conversatiilor pentru antrenare",
        steps: [
          "Settings → Data Controls → Improve the model → OFF, astfel incat conversatiile sa nu fie folosite pentru imbunatatirea modelului."
        ]
      },
      {
        title: "Dezactiveaza Memory",
        steps: [
          "Settings → Personalization → Memory → OFF daca vrei sa fie salvate mai putine detalii intre conversatii."
        ]
      },
      {
        title: "Stabileste mai intai reguli pentru scoala",
        steps: [
          "Verifica politica scolii despre AI si scrie reguli simple in familie pentru teme, citare si cand este permis ajutorul AI."
        ]
      },
      {
        title: "Explica faptul ca modelul poate inventa raspunsuri",
        steps: [
          "Folositi impreuna cateva intrebari-test si verificati raspunsurile, astfel incat copilul sa vada ca fluent nu inseamna mereu corect."
        ]
      },
      {
        title: "Configureaza noile controale parentale",
        steps: [
          "OpenAI a lansat controale parentale native in septembrie 2025. In ChatGPT mergi la Settings → Parental controls → Add family member si trimite adolescentului (13-18) o invitatie pe care o accepta. Odata legat, protectiile de continut (mai putin continut grafic, fara joc de rol sexual sau violent) se activeaza automat si adolescentul nu le poate opri. Poti seta si Quiet hours, opri modul Voice, Memory si generarea de imagini, si renunta la antrenarea modelului."
        ]
      },
      {
        title: "Intelege sistemul de alerte de risc",
        steps: [
          "Cu un cont legat, daca sistemele OpenAI detecteaza posibile semne de suferinta acuta sau autovatamare, evaluatori instruiti te pot anunta prin email, SMS sau notificare. Poti renunta, dar pentru multe familii merita lasat activ. Exista un ghid pentru parinti la chatgpt.com/parent-resources."
        ]
      },
      {
        title: "Dezactiveaza instrumentele optionale de navigare daca sunt active",
        steps: [
          "Settings → Beta Features si opreste extensiile suplimentare pe care nu vrei sa le foloseasca independent."
        ]
      },
      {
        title: "Foloseste-l impreuna in prima saptamana",
        steps: [
          "Stai langa copil in sesiunile initiale pentru a invata cum sa ceara ajutor, cum sa verifice raspunsurile si cand sa se opreasca daca instrumentul devine o scurtatura."
        ]
      }
    ],
    userCount: "Baza uriasa de utilizatori elevi si adulti",
    ageRecommendation: "Este cel mai util cu reguli clare despre teme si verificarea faptelor",
    appMetrics: [
      { label: "Expunere sociala", value: "Niciuna" },
      { label: "Risc academic", value: "Ridicat" },
      { label: "Risc de continut", value: "Moderat" },
      { label: "Dependenta emotionala", value: "Emergenta" }
    ],
    callouts: [
      {
        type: "warning",
        title: "Highest concern",
        description:
          "Cu ChatGPT, scopul este de obicei folosirea onesta, nu blocarea totala. Copiii au nevoie de reguli clare despre ce poate face instrumentul pentru ei si ce ramane munca lor proprie."
      },
      {
        type: "tip",
        title: "Most impactful action",
        description:
          "O regula clara in familie despre teme si fact-checking este de obicei mai eficienta decat o interdictie completa."
      },
      {
        type: "tip",
        title: "Nou din 2025",
        description:
          "ChatGPT are acum controale parentale reale: leaga un cont de adolescent in Settings → Parental controls pentru a aplica protectii de continut pe care nu le pot dezactiva, a seta ore linistite si a primi alerte daca sunt detectate semne de suferinta."
      }
    ]
  }
};
