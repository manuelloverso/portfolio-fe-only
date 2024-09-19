const projects = [
  {
    id: 1,
    title: "Whatsapp Clone",
    isInEvidence: false,
    cardImage: "whatsapp-card.png",
    showImage: "whatsapp-show.png",
    description:
      "Replica del layout di whatsapp resa responsive tramite bootstrap. Nella webapp è possibile ricercare i contatti per nome, inviare messaggi e ricevere una risposta automatica, le funzionalità sono state implementate con VueJS.",
    LiveLink: null,
    githubLink: "https://github.com/manuelloverso/vue-boolzapp",
    frontendLink: null,
    backendLink: null,
    youtubeLink: null,
    date: "2024-03-23",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "VueJS",
      "Bootstrap",
      "Responsive",
    ],
  },

  {
    id: 2,
    title: "Netflix Clone",
    isInEvidence: true,
    cardImage: "netflix-card.png",
    showImage: "netflix-show.png",
    description:
      "Replica del layout di netflix. Con Vue e con l'utilizzo di un'API pubblica è possibile ricercare film e serie tv per nome, filtrare la ricerca per genere e visualizzare le informazioni relative al singolo titolo.",
    LiveLink: null,
    githubLink: "https://github.com/manuelloverso/vite-boolflix",
    frontendLink: null,
    backendLink: null,
    youtubeLink: null,
    date: "2024-04-05",
    technologies: ["HTML", "CSS", "JavaScript", "VueJS", "APIs"],
  },

  {
    id: 3,
    title: "Portfolio Back-Office",
    isInEvidence: true,
    cardImage: "portfolio-backoffice-card.png",
    showImage: "portfolio-backoffice-show.png",
    description:
      "In Laravel ho sviluppato un gestionale per questo sito, tramite il quale l'admin (in questo caso io), dopo essersi registrato, inserisce e rimuove progetti , tipologie e tecnologie utilizzate. Frontend e backend comunicano tramite delle chiamate axios.",
    LiveLink: null,
    githubLink: "https://github.com/manuelloverso/backend-portfolio",
    frontendLink: null,
    backendLink: null,
    youtubeLink: null,
    date: "2024-05-29",
    technologies: [
      "HTML",
      "CSS",
      "Laravel",
      "Bootstrap",
      "Database",
      "PHP",
      "SQL",
    ],
  },

  {
    id: 4,
    title: "Deliveroo Clone",
    isInEvidence: true,
    cardImage: "deliveroo-card.png",
    showImage: "deliveroo-show.png",
    description:
      "In team abbiamo replicato le funzionalità di Deliveroo. Il sito comprendeuna sezione back-office riservata all'utente registrato (ristoratore),sviluppata in Laravel, dove abbiamo implementato funzionalità come lagestione dei menù, la visualizzazione degli ordini ricevuti e l'analisi dellevendite tramite grafici mensili. La parte front pubblica, sviluppata in Vue,permette agli utenti non registrati di cercare ristoranti filtrandoli percategoria, visualizzare il menù del ristorante, aggiornare il carrello e inviarel'ordine dopo aver effettuato il pagamento. La ricerca dei ristoranti, l'inviodegli ordini e l'accettazione dei pagamenti avvengono tramite chiamate axios,che permettono la comunicazione tra back-end e front-end.",
    LiveLink: null,
    githubLink: "https://github.com/manuelloverso/backend-portfolio",
    frontendLink: "https://github.com/manuelloverso/deliveboo-vue",
    backendLink: "https://github.com/manuelloverso/DeliveBoo-laravel",
    youtubeLink: null,
    date: "2024-06-19",
    technologies: [
      "HTML",
      "CSS",
      "Laravel",
      "Bootstrap",
      "Database",
      "PHP",
      "SQL",
      "JavaScript",
      "VueJS",
      "Sass",
      "Responsive",
    ],
  },
];

projects.reverse();

export default projects;
