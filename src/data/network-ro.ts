import type { NetworkApproach, NetworkApproachId, NetworkGuide } from "@/data/network";

type LocalizedNetworkApproach = Pick<
  NetworkApproach,
  "name" | "description" | "homepageDescription"
>;
type LocalizedNetworkGuide = Omit<NetworkGuide, "slug" | "approach">;

export const roNetworkApproachTranslations: Record<
  NetworkApproachId,
  LocalizedNetworkApproach
> = {
  "built-in-router-controls": {
    name: "Controale integrate in router",
    description:
      "Foloseste controalele parentale deja incluse in routerul tau TP-Link, ASUS sau Netgear. Sunt gratuite si surprinzator de eficiente.",
    homepageDescription:
      "Foloseste controalele parentale deja incluse in routerul tau TP-Link, ASUS sau Netgear. Sunt gratuite si surprinzator de eficiente."
  },
  "dns-filtering": {
    name: "Filtrare DNS",
    description:
      "Schimba doua adrese DNS in setarile routerului ca sa blochezi continutul pentru adulti pe toate dispozitivele din casa. Este gratuit si dureaza 5 minute.",
    homepageDescription:
      "Schimba doua adrese DNS in setarile routerului ca sa blochezi continutul pentru adulti pe toate dispozitivele din casa. Este gratuit si dureaza 5 minute."
  },
  "isp-controls": {
    name: "Controale oferite de furnizorul de internet",
    description:
      "Furnizorul tau de internet are, cel mai probabil, controale parentale gratuite pe care nu le-ai activat niciodata. Incepe aici daca vrei cea mai simpla varianta.",
    homepageDescription:
      "Furnizorul tau de internet are, cel mai probabil, controale parentale gratuite pe care nu le-ai activat niciodata. Incepe aici daca vrei cea mai simpla varianta."
  }
};

export const roNetworkGuideTranslations: Partial<Record<string, LocalizedNetworkGuide>> = {
  "router-tplink": {
    name: "TP-Link (HomeCare / Controale parentale)",
    description:
      "Majoritatea routerelor TP-Link includ HomeCare, un sistem de controale parentale integrat, administrat de pe telefon prin aplicatia Tether.",
    difficulty: "Usor",
    cost: "Gratuit (integrat in router)",
    coverageMetrics: [
      { label: "All WiFi devices", value: "Da" },
      {
        label: "Mobile data",
        value: "Nu — nu se aplica atunci cand copilul foloseste 4G/5G"
      },
      { label: "Bypass resistance", value: "Scazuta-medie" },
      { label: "Setup time", value: "15–20 de minute" }
    ],
    whatItBlocks: [
      "Continut pentru adulti prin filtrul de categorii integrat.",
      "Site-urile pe care le adaugi manual in lista de blocare.",
      "Acces la internet in intervale programate, precum orele de scoala sau culcare.",
      "Pauza de internet pentru fiecare dispozitiv, atunci cand vrei sa opresti accesul imediat."
    ],
    whatItCannotBlock: [
      "Aplicatii VPN instalate pe dispozitivul copilului.",
      "Folosirea datelor mobile in afara WiFi-ului de acasa.",
      "Continutul din interiorul domeniilor HTTPS permise.",
      "Aplicatii care folosesc servere DNS hardcodate."
    ],
    setupSteps: [
      {
        title: "Descarca aplicatia TP-Link Tether",
        action:
          "Instaleaza Tether pe telefonul tau (iOS sau Android) si conecteaza-te la WiFi-ul de acasa. Deschide aplicatia si selecteaza routerul din lista de dispozitive."
      },
      {
        title: "Mergi la Parental Controls",
        action:
          "In Tether, apasa pe router → Parental Controls. Daca nu vezi optiunea, modelul tau ar putea folosi interfata mai veche de la tplinkwifi.net in browser."
      },
      {
        title: "Creeaza un profil pentru copil",
        action:
          "Apasa pe + ca sa creezi un profil nou. Pune-i numele copilului. Atribuie-i dispozitivele selectandu-le din lista celor conectate. Identifica-le dupa nume, de exemplu iPhone-ul lui Luca."
      },
      {
        title: "Activeaza filtrarea de continut",
        action:
          "In profil, activeaza Content Filtering si selecteaza macar Adult Content. Daca filtrul standard scapa ceva, poti adauga manual site-uri in lista de blocare."
      },
      {
        title: "Seteaza programul de acces",
        action:
          "Configureaza separat orele de scoala, de exemplu 8:00–15:00 blocate in timpul saptamanii, si ora de culcare, de exemplu 22:00–7:00. Dispozitivele copilului pierd accesul la internet in aceste intervale."
      },
      {
        title: "Pune butonul Pause Internet la indemana",
        action:
          "Butonul Pause opreste instant internetul pentru un profil. Adauga-l ca widget sau shortcut. In loc de discutii lungi despre ecran, ai o singura atingere la cina, la teme sau la culcare."
      }
    ],
    tip:
      "Pause Internet este functia pe care o vei folosi cel mai des dupa configurare. Iti ofera control imediat, fara negocieri: internetul se opreste cand spui tu, indiferent ce face copilul pe dispozitiv.",
    warning:
      "TP-Link HomeCare este ocolit daca un copil trece pe date mobile sau instaleaza un VPN. Combina-l cu o regula la nivel de dispozitiv: aplicatiile VPN au nevoie de aprobarea ta."
  },
  "router-asus": {
    name: "ASUS (AiProtection / Family Zone)",
    description:
      "Routerele ASUS cu AiProtection (oferit de Trend Micro) au unul dintre cele mai bune sisteme de filtrare integrate pentru uz casnic.",
    difficulty: "Mediu",
    cost:
      "Gratuit pe routerele care includ AiProtection — verifica modelul tau la asus.com/aiprotection",
    coverageMetrics: [
      { label: "All WiFi devices", value: "Da" },
      { label: "Mobile data", value: "Nu" },
      { label: "Bypass resistance", value: "Medie-ridicata" },
      { label: "Setup time", value: "20–30 de minute" }
    ],
    whatItBlocks: [
      "Site-uri maliioase si malware pe toate dispozitivele.",
      "Continut pentru adulti, violenta, jocuri de noroc, phishing si categorii personalizate.",
      "Acces bazat pe timp pentru fiecare dispozitiv, cu program separat pe zile."
    ],
    whatItCannotBlock: [
      "Ocolirea prin VPN.",
      "Datele mobile in afara retelei de acasa.",
      "DNS-over-HTTPS, daca este activat manual pe dispozitiv."
    ],
    setupSteps: [
      {
        title: "Conecteaza-te la panoul de administrare ASUS",
        action:
          "Deschide un browser si mergi la router.asus.com sau 192.168.1.1. Intra cu credentialele de administrator. Daca nu le-ai schimbat niciodata, fa asta inainte de orice alt pas."
      },
      {
        title: "Activeaza mai intai functiile de securitate AiProtection",
        action:
          "Mergi la AiProtection si activeaza Malicious Sites Blocking si Two-Way IPS. Acestea protejeaza toate dispozitivele de malware indiferent de setarile parentale, asa ca merita pornite chiar daca sari peste restul."
      },
      {
        title: "Mergi la Parental Controls → Family Zone",
        action:
          "Creeaza un profil nou, pune numele copilului si atribuie-i dispozitivele potrivite."
      },
      {
        title: "Seteaza programul orar",
        action:
          "Configureaza intervalele blocate pentru orele de scoala si noaptea. ASUS iti permite programe diferite pentru fiecare zi, asa ca poti seta alta ora de culcare in weekend."
      },
      {
        title: "Activeaza Web Filtering",
        action:
          "Selecteaza categoriile de continut pe care vrei sa le blochezi. Minim: Adult, Gambling si Violence. ASUS foloseste baza de date Trend Micro, asa ca nu trebuie sa intretii manual o lista lunga de site-uri."
      },
      {
        title: "Activeaza Instant Guard daca exista",
        action:
          "Unele routere ASUS includ Instant Guard, care extinde protectia pe dispozitivul copilului si atunci cand foloseste date mobile printr-un tunel VPN. Este limitat, dar adauga un strat in plus fata de reteaua de acasa."
      }
    ],
    tip:
      "Blocarea malware din AiProtection se aplica tuturor dispozitivelor din casa, indiferent de varsta sau profil parental. Activeaz-o pentru toata familia — iti protejeaza si tie dispozitivele.",
    warning:
      "ASUS AiProtection functioneaza doar pe modelele de router care il suporta. Verifica asus.com/aiprotection inainte sa investesti timp in configurare."
  },
  "router-netgear": {
    name: "NETGEAR (Smart Parental Controls / integrare Circle)",
    description:
      "Routerele Netgear Nighthawk si Orbi se integreaza cu Circle, oferindu-ti limite pe aplicatii, categorii de continut si ore de culcare administrate dintr-o aplicatie bine gandita.",
    difficulty: "Mediu",
    cost:
      "Nivelul de baza este gratuit prin integrarea Circle; Circle Premium costa 9,99 USD/luna pentru limite per aplicatie si acoperire pe date mobile",
    coverageMetrics: [
      { label: "All WiFi devices", value: "Da" },
      {
        label: "Mobile data",
        value: "Da, cu Circle Go (necesita abonament premium)"
      },
      { label: "Bypass resistance", value: "Medie-ridicata" },
      { label: "Setup time", value: "20–30 de minute" }
    ],
    whatItBlocks: [
      "Peste 50 de categorii de continut.",
      "Aplicatii individuale precum TikTok, YouTube sau Instagram.",
      "Limite de timp per aplicatie, ora de culcare pe profil si rezumate de utilizare."
    ],
    whatItCannotBlock: [
      "Un copil hotarat sa ocoleasca filtrarea prin VPN.",
      "Date mobile daca Circle Go nu este instalat."
    ],
    setupSteps: [
      {
        title: "Descarca aplicatia Circle",
        action:
          "Instaleaza Circle pe telefonul tau. Daca routerul Netgear este compatibil, aplicatia il detecteaza automat. Daca nu, activeaza integrarea din panoul routerului la Parental Controls → Circle."
      },
      {
        title: "Creeaza profiluri pentru fiecare membru al familiei",
        action:
          "Adauga un profil pentru fiecare copil. Atribuie-le dispozitivele selectandu-le din lista detectata in retea. Daca exista optiunea, foloseste asocierea dupa adresa MAC pentru mai multa precizie."
      },
      {
        title: "Alege un nivel de filtrare de baza",
        action:
          "Alege presetul Little Kid, Kid sau Teen pentru profil. Este punctul de pornire, peste care poti ajusta apoi setarile mai fin."
      },
      {
        title: "Seteaza limite de timp pe fiecare aplicatie",
        action:
          "Pune YouTube la 45 de minute pe zi, TikTok la 30 de minute, gamingul la 90 de minute si asa mai departe. Circle le urmareste si le impune separat de timpul total petrecut pe ecran."
      },
      {
        title: "Seteaza ora de culcare pentru profil",
        action:
          "Accesul la internet este taiat automat pentru toate dispozitivele din acel profil la ora stabilita. Fara negocieri si fara exceptii."
      },
      {
        title: "Activeaza Circle Go pentru acoperire pe date mobile",
        action:
          "Daca ai planul premium, instaleaza aplicatia Circle Go pe dispozitivul copilului. Ea extinde filtrarea si limitele de timp si pe date mobile, dar necesita cooperarea lui la instalarea initiala."
      }
    ],
    tip:
      "Limitele per aplicatie sunt mai precise si mai putin conflictuale decat un timp total de ecran. TikTok s-a terminat pe azi este o discutie mai simpla decat ai stat prea mult pe telefon."
  },
  "dns-cloudflare": {
    name: "Cloudflare for Families (1.1.1.3)",
    description:
      "Schimba doua adrese DNS in setarile routerului ca sa blochezi continutul pentru adulti si malware pe toate dispozitivele din casa. Este gratuit, dureaza 5 minute si nu cere mentenanta.",
    difficulty: "Usor",
    cost: "Gratuit",
    coverageMetrics: [
      {
        label: "All WiFi devices",
        value: "Da — inclusiv televizoare smart, console si tablete"
      },
      { label: "Mobile data", value: "Nu" },
      { label: "Bypass resistance", value: "Medie" },
      { label: "Setup time", value: "5 minute" }
    ],
    whatItBlocks: [
      "Continut pentru adulti folosind baza de date mentinuta de Cloudflare.",
      "Domenii de malware si phishing.",
      "Site-uri care distribuie materiale de abuz sexual asupra copiilor (CSAM)."
    ],
    whatItCannotBlock: [
      "Continut din interiorul domeniilor permise, cum ar fi videoclipuri individuale de pe YouTube sau postari de pe Instagram.",
      "Ocolirea prin VPN.",
      "DNS-over-HTTPS, daca este activat manual pe un dispozitiv.",
      "Datele mobile."
    ],
    setupSteps: [
      {
        title: "Conecteaza-te la panoul routerului",
        action:
          "Deschide un browser si mergi la 192.168.1.1 sau 192.168.0.1. Numele de utilizator si parola sunt, de obicei, pe eticheta lipita pe router, pe spate sau dedesubt."
      },
      {
        title: "Gaseste setarile DNS",
        action:
          "Cauta un meniu numit Internet, WAN, Advanced, Network sau DNS. Locatia exacta depinde de marca routerului. Cauta campurile Primary DNS si Secondary DNS."
      },
      {
        title: "Introdu adresele Cloudflare for Families",
        action:
          "Seteaza Primary DNS pe 1.1.1.3 si Secondary DNS pe 1.0.0.3. Nu sunt aceleasi cu DNS-ul standard Cloudflare. Adresele care se termina in .3 includ filtrarea pentru familie."
      },
      {
        title: "Salveaza si reporneste routerul",
        action:
          "Apasa Save sau Apply, apoi reporneste routerul scoatandu-l din priza timp de 10 secunde. Schimbarea se aplica automat tuturor dispozitivelor de pe WiFi."
      },
      {
        title: "Testeaza ca functioneaza",
        action:
          "Pe un dispozitiv conectat la WiFi, incearca sa deschizi un site cunoscut pentru adulti. Ar trebui sa fie blocat cu o pagina Cloudflare. Asta confirma ca filtrul este activ."
      },
      {
        title: "Spune-i copilului despre limitare",
        action:
          "Explica-i copilului ca WiFi-ul de acasa filtreaza acum continutul pentru adulti. Prezinta asta ca pe o regula a casei, nu ca pe o pedeapsa. Cel mai probabil va observa singur, asa ca e mai bine sa auda asta de la tine."
      }
    ],
    tip:
      "Este una dintre cele mai eficiente actiuni de pe toata pagina raportat la efort: cinci minute, gratuit, si protejeaza toate dispozitivele simultan, inclusiv PlayStation-ul si televizorul smart unde controalele pe aplicatie nu ajung.",
    warning:
      "Cloudflare for Families nu functioneaza cand copilul trece pe date mobile. Nici nu poate inspecta continutul din interiorul unui site — blocheaza sau permite domenii intregi. Un copil aflat pe WiFi filtrat poate vedea in continuare videoclipuri nepotrivite pe YouTube pentru ca domeniul YouTube este permis."
  },
  "dns-opendns": {
    name: "OpenDNS FamilyShield (208.67.222.123)",
    description:
      "Un filtru DNS gratuit de la Cisco care blocheaza continutul pentru adulti, phishingul si, foarte important, site-urile proxy si anonimizoarele folosite de copii ca sa ocoleasca alte filtre.",
    difficulty: "Usor",
    cost:
      "Gratuit (FamilyShield). Un cont gratuit la opendns.com deblocheaza un panou de configurare.",
    coverageMetrics: [
      { label: "All WiFi devices", value: "Da" },
      { label: "Mobile data", value: "Nu" },
      {
        label: "Bypass resistance",
        value: "Medie (mai buna decat Cloudflare for Families datorita blocarii proxy-urilor)"
      },
      { label: "Setup time", value: "5 minute" }
    ],
    whatItBlocks: [
      "Continut pentru adulti.",
      "Site-uri de phishing si malware.",
      "Site-uri proxy si anonimizatoare folosite pentru a ocoli filtrele.",
      "Unele domenii ale furnizorilor de VPN."
    ],
    whatItCannotBlock: [
      "Aplicatii VPN care folosesc adrese IP hardcodate.",
      "Datele mobile.",
      "Ocolirea prin DNS-over-HTTPS.",
      "Continutul din interiorul domeniilor HTTPS permise."
    ],
    setupSteps: [
      {
        title: "Conecteaza-te la panoul routerului",
        action:
          "Deschide 192.168.1.1 intr-un browser. Credentialele sunt de obicei pe eticheta routerului. Gaseste setarile DNS sub Internet, WAN sau Advanced."
      },
      {
        title: "Introdu adresele OpenDNS FamilyShield",
        action:
          "Seteaza Primary DNS pe 208.67.222.123 si Secondary DNS pe 208.67.220.123, apoi salveaza si reporneste routerul."
      },
      {
        title: "Testeaza cu un site dintr-o categorie blocata",
        action:
          "Incearca un site cunoscut pentru adulti. Ar trebui sa te redirectioneze catre pagina de blocare OpenDNS, semn ca filtrul este activ."
      },
      {
        title: "Creeaza un cont gratuit OpenDNS pentru panoul de control",
        action:
          "Mergi la opendns.com/home-internet-security si creeaza un cont gratuit. Leaga-l de IP-ul casei urmand pasii de pe ecran. Asta iti ofera un jurnal in timp real al cererilor blocate si control pe categorii."
      },
      {
        title: "Foloseste panoul de control pentru blocari personalizate",
        action:
          "In panoul OpenDNS, adauga site-uri specifice pe care vrei sa le blochezi si care nu sunt deja acoperite de categoriile standard."
      },
      {
        title: "Pune pe lista de exceptii site-urile de scoala blocate din greseala",
        action:
          "Unele site-uri educationale legitime sunt uneori blocate prea agresiv. Panoul de control iti permite sa pui domenii specifice pe lista de permisiuni fara sa slabesti restul filtrarii."
      }
    ],
    tip:
      "OpenDNS blocheaza implicit site-urile proxy si anonimizatoarele — exact instrumentele pe care copiii le folosesc cel mai des pentru a ocoli filtrele simple. Asta il face mai greu de ocolit decat Cloudflare for Families singur."
  },
  "dns-nextdns": {
    name: "NextDNS",
    description:
      "Cea mai personalizabila optiune de filtrare DNS de pe pagina. Poti bloca aplicatii precum TikTok sau Instagram direct din retea si poti vedea ce domenii contacteaza dispozitivele din casa.",
    difficulty: "Mediu",
    cost:
      "Gratuit pana la 300.000 de interogari pe luna (suficient pentru majoritatea familiilor). 19,90 USD pe an pentru nelimitat.",
    coverageMetrics: [
      { label: "All WiFi devices", value: "Da" },
      { label: "Mobile data", value: "Da, prin aplicatia NextDNS instalata pe dispozitiv" },
      { label: "Bypass resistance", value: "Ridicata" },
      { label: "Setup time", value: "20–30 de minute" }
    ],
    whatItBlocks: [
      "Continut pentru adulti, malware, urmarire online si publicitate, prin blocare la nivel de retea.",
      "Aplicatii individuale precum TikTok, Instagram, Snapchat si Discord, fiecare blocata separat.",
      "Phishing, jocuri de noroc, site-uri de dating si scripturi de crypto-mining.",
      "Liste personalizate de domenii alese de tine."
    ],
    whatItCannotBlock: [
      "Continutul din interiorul domeniilor HTTPS permise.",
      "Schimbarea manuala a DNS-ului pe un dispozitiv daca routerul nu forteaza DNS-ul."
    ],
    setupSteps: [
      {
        title: "Creeaza un cont gratuit NextDNS",
        action:
          "Mergi la nextdns.io si creeaza un cont. Vei primi un ID unic de configurare, de exemplu abc123. Pastreaza panoul NextDNS deschis pentru restul configurarii."
      },
      {
        title: "Introdu adresele NextDNS in router",
        action:
          "Mergi la 192.168.1.1 → DNS settings. Adresele exacte NextDNS apar in panou la Setup → Router. Introdu-le ca Primary si Secondary DNS, apoi salveaza si reporneste routerul."
      },
      {
        title: "Configureaza setarile de securitate din panou",
        action:
          "In fila Security, activeaza Threat Intelligence Feeds, Google Safe Browsing, Cryptojacking Protection si DNS Rebinding Protection. Se activeaza automat si nu necesita mentenanta continua."
      },
      {
        title: "Adauga liste de blocare in fila Privacy",
        action:
          "Deschide Privacy → Blocklists → Add, apoi adauga OISD Full si Steven Black Unified. Acestea blocheaza automat milioane de domenii cunoscute pentru reclame, urmarire online si continut daunator."
      },
      {
        title: "Configureaza Parental Control",
        action:
          "Deschide fila Parental Control si foloseste controalele pentru fiecare aplicatie. Poti bloca TikTok, Snapchat, Instagram sau Discord la nivel DNS cu o singura apasare."
      },
      {
        title: "Activeaza jurnalizarea si verifica saptamanal",
        action:
          "Porneste Logs in fila Analytics. Vei vedea fiecare domeniu pe care l-a contactat fiecare dispozitiv din casa, organizat dupa dispozitiv si moment. Foloseste aceste date ca punct de pornire pentru discutii, nu ca supraveghere ascunsa."
      }
    ],
    tip:
      "Blocarea pe fiecare aplicatie din fila Parental Control este motivul pentru care NextDNS merita timpul de configurare. Regula fara TikTok pe WiFi-ul de acasa devine o singura apasare, nu o discutie despre sters aplicatia.",
    warning:
      "NextDNS inregistreaza fiecare interogare DNS facuta de fiecare dispozitiv din retea. Fii transparent cu copilul tau ca reteaua de acasa este monitorizata. Foloseste informatia ca instrument de conversatie, nu ca supraveghere ascunsa."
  },
  "isp-controls": {
    name: "Controale parentale ISP",
    description:
      "Furnizorul tau de internet ofera aproape sigur controale parentale gratuite pe care nu le-ai activat niciodata. Este cea mai slaba optiune din aceasta pagina, dar si cea mai simpla si mai buna decat nimic.",
    difficulty: "Usor",
    cost: "Gratuit — inclus in abonamentul tau de internet fix",
    coverageMetrics: [
      { label: "All WiFi devices", value: "Da" },
      { label: "Mobile data", value: "Nu" },
      { label: "Bypass resistance", value: "Scazuta" },
      { label: "Setup time", value: "10–15 minute" }
    ],
    whatItBlocks: [
      "Categorii de baza de continut pentru adulti, pe baza listei furnizorului.",
      "Unele site-uri adaugate manual, daca routerul sau panoul ISP-ului permite asta.",
      "Programare simpla pe intervale orare, daca furnizorul ofera aceasta optiune."
    ],
    whatItCannotBlock: [
      "Aplicatii VPN.",
      "Datele mobile.",
      "Inspectia continutului HTTPS.",
      "Site-uri care nu sunt deja pe lista furnizorului.",
      "Ocolirea prin DNS."
    ],
    setupSteps: [
      {
        title: "Acceseaza panoul routerului",
        action:
          "Deschide un browser si tasteaza 192.168.1.1 sau 192.168.0.1. Numele de utilizator si parola sunt de obicei pe eticheta de pe spatele sau de sub router. Datele de autentificare frecvente sunt admin/admin sau admin plus parola WiFi."
      },
      {
        title: "Gaseste Parental Controls in meniu",
        action:
          "Cauta Parental Controls, Access Control, Content Filtering sau Child Protection in meniul de navigare. Locatia exacta variaza in functie de ISP si modelul de router."
      },
      {
        title: "Activeaza filtrul si alege presetul cel mai strict",
        action:
          "Alege cea mai stricta varianta disponibila, de obicei Family, Child Safe sau Strict. Salveaza setarea pentru ca lista de blocare de baza a ISP-ului sa se aplice tuturor dispozitivelor din reteaua ta."
      },
      {
        title: "Adauga manual site-uri specifice in lista de blocare",
        action:
          "Daca panoul de administrare suporta blocari personalizate, adauga site-urile sau platformele la care copilul nu ar trebui sa aiba acces. Asta completeaza lista proprie a ISP-ului."
      },
      {
        title: "Seteaza un program de acces daca optiunea exista",
        action:
          "Daca routerul ofera blocare pe intervale orare, seteaza o regula care taie internetul intre 22:00 si 7:00 pentru dispozitivele copilului. Nu toate routerele ISP au aceasta functie, deci sari peste pas daca lipseste."
      },
      {
        title: "Adauga imediat si Cloudflare for Families DNS",
        action:
          "In acelasi ecran de setari DNS, schimba Primary DNS in 1.1.1.3 si Secondary DNS in 1.0.0.3. Iti ia 30 de secunde si intareste filtrarea fara niciun cost in plus."
      }
    ],
    tip:
      "Controalele ISP sunt usor de ocolit daca sunt folosite singure. Dar combinate cu Cloudflare for Families DNS, in aceeasi sesiune de configurare, acopera cele mai comune metode prin care copiii trec peste filtrele simple.",
    warning:
      "Controalele parentale oferite de ISP sunt cea mai slaba optiune de pe aceasta pagina. Foloseste-le ca prim nivel de protectie, alaturi de filtrare DNS, nu ca solutie de sine statatoare.",
    highlightedSection: {
      title: "Indicatii pentru Romania",
      items: [
        "DIGI Romania / RCS&RDS: Intra in administrarea routerului la 192.168.1.1 → Advanced Settings → Parental Control. Asigneaza dispozitivele unui profil filtrat. Astfel activezi un filtru de baza pentru continut adult si un program orar.",
        "Orange Romania: Foloseste aplicatia My Orange → Router Settings → Parental Control ca sa activezi filtrul de baza si limitele de timp pe dispozitiv.",
        "Telekom Romania: Foloseste administrarea routerului la 192.168.1.1 → Parental Controls. Asteapta-te la blocare de site-uri si programare orara de baza, cu interfata variind in functie de modelul routerului.",
        "UPC / Vodafone Romania: Deschide pagina de administrare la 192.168.0.1 → Advanced → Access Control sau Parental Controls."
      ]
    }
  }
};
