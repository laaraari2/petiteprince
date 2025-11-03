export const translations = {
  fr: {
    header: {
      title: "Le Petit Prince",
      starIconSvgContent: `<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />`,
      navLinks: [
        { href: '#about', label: "La Pièce" },
        { href: '#scenography', label: "Scénographie" },
        { href: '#cast', label: "Distribution" },
        { href: '#schedule', label: "Horaires" },
        { href: '#gallery', label: "Galerie" },
      ],
      login: "Connexion",
      language: "العربية",
    },
    hero: {
      title: "Le Petit Prince",
      quote: "On ne voit bien qu'avec le cœur. L'essentiel est invisible pour les yeux.",
      login: "Panneau d'Administration",
      backgroundImage: "https://i.imgur.com/8i260pa.jpeg",
    },
    about: {
      title: "À Propos de la Pièce",
      p1: "Redécouvrez le chef-d'œuvre intemporel d'Antoine de Saint-Exupéry dans une adaptation théâtrale poétique et émouvante. Suivez le voyage d'un jeune prince venu d'un autre astéroïde, et ses rencontres qui explorent les thèmes de l'amitié, de l'amour, de la perte et du sens de la vie.",
      p2: "Ce spectacle est une invitation à retrouver son âme d'enfant et à regarder le monde avec le cœur. Une expérience magique pour toute la famille, mêlant théâtre, musique et visuels enchanteurs pour donner vie à cette histoire universelle.",
      roseAlt: "La rose du Petit Prince",
      roseImage: "https://images.unsplash.com/photo-1560261352-78618026f3b8?q=80&w=800&auto=format&fit=crop",
    },
    scenography: {
      title: "Scénographie : Vision du metteur en scène",
      scenes: [
        {
          title: "🎬 Scène 1 : La Chute dans le Désert – Le Début",
          space: "Espace : Obscurité totale. On entend le bruit d'un moteur d'avion qui s'arrête brusquement, puis le son d'un impact sur le sable.",
          lighting: "Éclairage : Un léger flash, puis un spot de lumière chaude sur le bureau et la lampe, tandis que l'arrière-plan reste sombre.",
          event: {
            title: "Événement :",
            lines: [
              "Le pilote est assis, épuisé, à son bureau, parlant d'une voix fatiguée : 'Je suis tombé dans le désert... Personne ici, rien que le silence et le sable.'",
              "De l'obscurité, on entend la voix calme d'un enfant : 'S'il vous plaît, dessine-moi un mouton.'",
              "Le pilote lève la tête, surpris, cherchant dans l'ombre. Un des triangles en arrière-plan s'illumine faiblement, comme une étoile ou une planète lointaine."
            ],
          },
          symbolism: "Signification symbolique : Le moment de la rencontre entre l'adulte (la raison) et l'enfant (l'imagination et l'innocence).",
          music: "Musique : Une mélodie de rêve, faible.",
        },
        {
          title: "🎬 Scène 2 : La Planète du Prince et la Rose",
          space: "Espace : L'éclairage devient plus chaud, les triangles sont illuminés de légères couleurs dorées.",
          event: {
            title: "Événement :",
            lines: [
              "Le prince est assis par terre près du bureau, racontant au pilote sa petite planète et sa rose.",
              "Le Prince : 'Elle était belle... mais parfois arrogante. Je l'arrosais chaque matin et la couvrais chaque soir.'",
              "Le Pilote : 'Et l'aimais-tu ?'",
              "Le Prince (hésitant) : 'Peut-être ne l'ai-je compris que lorsque je me suis éloigné.'",
              "Le pilote le regarde avec admiration et contemplation, puis écrit quelque chose dans son carnet."
            ],
          },
          symbolism: "Symbole : L'amour comme un état de conscience, et la nostalgie comme un chemin vers la compréhension.",
          lighting: "Éclairage : Doré, suggérant la chaleur et la nostalgie.",
        },
        {
            title: "🎬 Scène 3 : La Planète de l'Homme d'Affaires",
            space: "Espace : L'éclairage est froid et bleuté.",
            scenography_detail: "Scénographie : Un seul triangle est fortement éclairé, comme un bureau dans un monde matérialiste.",
            event: { 
              title: "Événement :", 
              lines: [
                  "Le prince raconte au pilote l'histoire d'un homme sur une planète lointaine, qui comptait les étoiles pour les posséder.", 
                  "Le Prince : 'Il m'a dit qu'il les possédait toutes... les étoiles dans le ciel !'", 
                  "Le Pilote : 'Et pourquoi ?'", 
                  "Le Prince : 'Parce qu'il ne sait pas quoi en faire.'", 
                  "Le pilote rit doucement, puis éteint la lampe pour un moment de réflexion."
                ] 
            },
            symbolism: "Symbole : Critique du matérialisme et de l'égoïsme, face à la simplicité du regard de l'enfant sur le monde.",
            lighting: "Éclairage : Se déplace lentement entre le blanc et le gris, puis revient à la lumière chaude à la fin de la scène."
        },
        {
            title: "🎬 Scène 4 : La Rencontre avec le Renard – L'Apprivoisement",
            space: "Espace : L'éclairage devient orange doré (heure du coucher du soleil).",
            event: { 
              title: "Événement :", 
              lines: [
                  "La voix du renard se fait entendre (depuis les coulisses ou via un effet sonore) : 'Si tu m'apprivoises, nous aurons besoin l'un de l'autre.'", 
                  "Le Prince : 'Que signifie apprivoiser ?'", 
                  "Le Renard : 'C'est créer des liens, c'est rendre quelqu'un nécessaire à l'autre.'", 
                  "Le prince s'assied par terre au milieu des triangles qui sont éclairés par de petits cercles de lumière.", 
                  "Le pilote observe en silence, touché par les paroles du renard."
                ] 
            },
            symbolism: "Symbole : L'essence des relations humaines, l'amour, l'attachement, la responsabilité.",
            lighting: "Éclairage : Tamisé, chaud, se déplaçant avec légèreté."
        },
        {
            title: "🎬 Scène 5 : Le Départ – L'Adieu",
            space: "Espace : La dernière lumière vient de la lampe sur le bureau.",
            event: { 
              title: "Événement :", 
              lines: [
                  "Le Petit Prince se tient au loin, s'apprêtant à partir vers les triangles qui s'illuminent par derrière comme des étoiles.", 
                  "Le Prince : 'Je vais retourner à ma rose... Elle m'a attendu longtemps.'", 
                  "Le Pilote (d'une voix rauque) : 'Reviendras-tu vraiment ?'", 
                  "Le Prince : 'Chaque fois que tu regarderas le ciel, tu entendras mon rire parmi les étoiles.'", 
                  "L'éclairage s'estompe progressivement jusqu'à ce que seule la lumière de la lampe reste, puis elle s'éteint lentement.", 
                  "Un long silence, puis on entend le son du vent."
                ] 
            },
            symbolism: "Symbole : La perte, le souvenir, l'immortalité à travers la mémoire.",
            music: "Musique : Une mélodie très triste et calme."
        }
      ],
      directorsNote: {
        title: "✨ Note du metteur en scène",
        text: "La même scénographie est utilisée tout au long de la pièce sans changement physique, uniquement par l'éclairage, le son et le positionnement des acteurs. Les triangles représentent symboliquement : les montagnes, les étoiles, les planètes, ou les espaces de la mémoire. Le bureau et la lampe représentent 'la raison' ou 'le narrateur', tandis que l'espace ouvert représente 'l'imagination' et les 'mondes intérieurs'.",
        durationTitle: "🕰️ Durée totale suggérée :",
        duration: "Environ 35 à 40 minutes",
      }
    },
    cast: {
      title: "Distribution et Équipe Créative",
      data: [
        { nameKey: 'cast.data.0.name', roleKey: 'cast.data.0.role', imageUrl: 'https://picsum.photos/400/400?random=10' },
        { nameKey: 'cast.data.1.name', roleKey: 'cast.data.1.role', imageUrl: 'https://picsum.photos/400/400?random=11' },
        { nameKey: 'cast.data.2.name', roleKey: 'cast.data.2.role', imageUrl: 'https://picsum.photos/400/400?random=12' },
        { nameKey: 'cast.data.3.name', roleKey: 'cast.data.3.role', imageUrl: 'https://picsum.photos/400/400?random=13' },
        { nameKey: 'cast.data.4.name', roleKey: 'cast.data.4.role', imageUrl: 'https://picsum.photos/400/400?random=14' },
        { nameKey: 'cast.data.5.name', roleKey: 'cast.data.5.role', imageUrl: 'https://picsum.photos/400/400?random=15' },
      ],
      '0': { name: 'Jean Dupont', role: 'Le Petit Prince' },
      '1': { name: 'Marie Leroy', role: "L'Aviateur" },
      '2': { name: 'Luc Martin', role: 'Le Renard / Le Serpent' },
      '3': { name: 'Sophie Bernard', role: 'La Rose / La Fleur' },
      '4': { name: 'Pierre Dubois', role: 'Le Roi / Le Vaniteux' },
      '5': { name: 'Antoine Lumière', role: 'Mise en scène' },
    },
    schedule: {
      title: "Horaires des Représentations",
      locationTitle: "Lieu et Réservation",
      theater: "Théâtre de la Lune",
      address: "123 Rue des Étoiles, 75001 Paris, France",
      mapLink: "Voir sur Google Maps →",
      bookingInfo: "Pour toute question, veuillez nous contacter via nos réseaux sociaux.",
      login: "Connexion Admin",
      status: {
        available: "Disponible",
        soldout: "Complet",
        cancelled: "Annulé",
      },
      data: [
        { dateKey: 'schedule.data.0.date', time: '20:00', statusKey: 'available' },
        { dateKey: 'schedule.data.1.date', time: '16:00', statusKey: 'available' },
        { dateKey: 'schedule.data.2.date', time: '20:00', statusKey: 'soldout' },
        { dateKey: 'schedule.data.3.date', time: '15:00', statusKey: 'available' },
        { dateKey: 'schedule.data.4.date', time: '20:00', statusKey: 'available' },
        { dateKey: 'schedule.data.5.date', time: '20:00', statusKey: 'cancelled' },
      ],
      '0': { date: 'Vendredi, 24 Octobre' },
      '1': { date: 'Samedi, 25 Octobre' },
      '2': { date: 'Samedi, 25 Octobre' },
      '3': { date: 'Dimanche, 26 Octobre' },
      '4': { date: 'Vendredi, 31 Octobre' },
      '5': { date: 'Samedi, 1 Novembre' },
    },
    gallery: {
      title: "Galerie du Spectacle",
      data: [
        { src: "https://i.imgur.com/8i260pa.jpeg", alt: "Scène avec rideau et étoiles" },
        { src: "https://i.imgur.com/JPl5t2E.jpeg", alt: "Scène avec avion dans le désert" },
        { src: "https://i.imgur.com/9yI3x2x.jpeg", alt: "Le Petit Prince regardant une rose sous cloche" },
        { src: "https://i.imgur.com/O4n2a4a.jpeg", alt: "L'aviateur et le Petit Prince dans le désert" },
        { src: "https://i.imgur.com/gKmY9d3.jpeg", alt: "Le renard parlant au Petit Prince" },
        { src: "https://i.imgur.com/bX6t6xT.jpeg", alt: "Gros plan sur la rose du Petit Prince" }
      ]
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} Production Théâtrale "Le Petit Prince". Tous droits réservés.`,
      credit: "Site conçu avec poésie.",
      socials: [
        { href: "#", svg: `<path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />` },
        { href: "#", svg: `<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />` },
        { href: "#", svg: `<path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.06-1.004.048-1.625.211-2.126.41-1.152.443-1.833 1.123-2.276 2.276-.2.501-.362 1.122-.41 2.126-.048 1.023-.06 1.351-.06 3.807 0 2.456.011 2.784.06 3.807.048 1.004.211 1.625.41 2.126.443 1.152 1.123 1.833 2.276 2.276.501.2 1.122.362 2.126.41 1.023.048 1.351.06 3.807.06 2.456 0 2.784-.011 3.807-.06 1.004-.048 1.625-.211 2.126-.41 1.152-.443-1.833-1.123-2.276-2.276.2-.501.362-1.122.41-2.126.048-1.023.06-1.351.06-3.807s-.011-2.784-.06-3.807c-.048-1.004-.211-1.625-.41-2.126-.443-1.152-1.123-1.833-2.276-2.276-.501-.2-1.122-.362-2.126-.41-1.023-.049-1.351-.06-3.807-.06l-.468.002z" clip-rule="evenodd" /><path d="M12 6.848c-2.849 0-5.152 2.303-5.152 5.152s2.303 5.152 5.152 5.152 5.152-2.303 5.152-5.152S14.849 6.848 12 6.848zm0 8.482c-1.843 0-3.33-1.487-3.33-3.33s1.487-3.33 3.33-3.33 3.33 1.487 3.33 3.33-1.487 3.33-3.33 3.33z" /><path d="M16.965 6.574a1.285 1.285 0 11-2.57 0 1.285 1.285 0 012.57 0z" />` }
      ]
    },
    admin: {
      title: "Panneau d'Administration",
      logout: "Déconnexion",
      headerSection: "Section En-tête",
      starIconSvg: "Contenu SVG de l'icône étoile",
      navSection: "Section Navigation",
      navLink: "Lien de navigation",
      navLabel: "Libellé",
      navHref: "Lien (href)",
      heroSection: "Section Principale",
      heroTitle: "Titre principal",
      heroQuote: "Citation",
      heroBgUrl: "URL de l'image de fond",
      aboutSection: "Section 'À Propos'",
      aboutTitle: "Titre de la section",
      aboutP1: "Premier paragraphe",
      aboutP2: "Deuxième paragraphe",
      aboutImageUrl: "URL de l'image 'À Propos'",
      save: "Sauvegarder les changements",
      scenographySection: "Section Scénographie",
      scenographyTitle: "Titre de la section Scénographie",
      directorsNoteSection: "Note du metteur en scène",
      noteTitle: "Titre de la note",
      noteText: "Texte de la note",
      noteDurationTitle: "Titre de la durée",
      noteDuration: "Texte de la durée",
      castSection: "Section Distribution",
      castMember: "Membre",
      castName: "Nom",
      castRole: "Rôle",
      castImageUrl: "URL de l'image",
      scheduleSection: "Section Horaires",
      show: "Représentation",
      showDate: "Date",
      showTime: "Heure",
      showStatus: "Statut",
      gallerySection: "Section Galerie",
      galleryImage: "Image de la galerie",
      imageUrl: "URL de l'image",
      imageAlt: "Texte alternatif",
      footerSection: "Section Pied de page",
      socialIcon: "Icône sociale",
      socialLink: "Lien (URL)",
      socialSvg: "Contenu SVG de l'icône",
      add: "Ajouter",
      remove: "Supprimer",
      available: "Disponible",
      soldout: "Complet",
      cancelled: "Annulé",
    },
    login: {
      title: "Accès Administration",
      username: "Nom d'utilisateur",
      password: "Mot de passe",
      error: "Nom d'utilisateur ou mot de passe incorrect.",
      backToSite: "Retourner au site"
    },
  },
  ar: {
    header: {
      title: "الأمير الصغير",
      starIconSvgContent: `<path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />`,
      navLinks: [
        { href: '#about', label: "المسرحية" },
        { href: '#scenography', label: "السينوغرافيا" },
        { href: '#cast', label: "التوزيع" },
        { href: '#schedule', label: "المواعيد" },
        { href: '#gallery', label: "المعرض" },
      ],
      login: "تسجيل الدخول",
      language: "Français",
    },
    hero: {
      title: "الأمير الصغير",
      quote: "لا يرى المرء جيداً إلا بقلبه، فالأشياء المهمة لا تُرى بالعين.",
      login: "لوحة التحكم",
      backgroundImage: "https://i.imgur.com/8i260pa.jpeg",
    },
    about: {
      title: "عن المسرحية",
      p1: "أعيدوا اكتشاف تحفة أنطوان دو سانت إكزوبيري الخالدة في اقتباس مسرحي شاعري ومؤثر. تابعوا رحلة أمير صغير قادم من كوكب آخر، ولقاءاته التي تستكشف مواضيع الصداقة، والحب، والفقدان، ومعنى الحياة.",
      p2: "هذا العرض دعوة لاستعادة روح الطفولة والنظر إلى العالم بالقلب. تجربة سحرية لجميع أفراد العائلة، تمزج بين المسرح والموسيقى والمؤثرات البصرية الساحرة لإحياء هذه القصة العالمية.",
      roseAlt: "وردة الأمير الصغير",
      roseImage: "https://images.unsplash.com/photo-1560261352-78618026f3b8?q=80&w=800&auto=format&fit=crop",
    },
    scenography: {
      title: "السينوغرافيا: رؤية إخراجية",
      scenes: [
        {
          title: "🎬 المشهد الأول: السقوط في الصحراء – البداية",
          space: "الفضاء: ظلام تام. يُسمع صوت محرك طائرة يتوقف فجأة، ثم صوت ارتطام بالرمال.",
          lighting: "الإضاءة: ومضة خفيفة، ثم بقعة ضوء دافئة على المكتب والمصباح، بينما الخلفية تبقى مظلمة.",
          event: {
            title: "الحدث:",
            lines: [
              "الطيار يجلس مرهقًا أمام المكتب، يتحدث بصوت متعب: 'سقطتُ في الصحراء… لا أحد هنا، لا شيء سوى الصمت والرمل.'",
              "من الظلام، يسمع صوت طفل هادئ: 'من فضلك، ارسم لي خروفًا.'",
              "الطيار يرفع رأسه متفاجئًا، يبحث في الظلال. تضاء إحدى المثلثات في الخلفية بخفوت، كأنها نجمة أو كوكب بعيد."
            ],
          },
          symbolism: "المعنى الرمزي: لحظة اللقاء بين الإنسان البالغ (العقل) والطفل (الخيال والبراءة).",
          music: "الموسيقى: نغمة حالمة خافتة.",
        },
        {
          title: "🎬 المشهد الثاني: كوكب الأمير والوردة",
          space: "الفضاء: الإضاءة تصبح أكثر دفئًا، تُضاء المثلثات بألوان ذهبية خفيفة.",
          event: {
            title: "الحدث:",
            lines: [
              "الأمير يجلس على الأرض قرب المكتب، يحكي للطيار عن كوكبه الصغير وعن وردته.",
              "الأمير: 'كانت جميلة… لكنها متكبرة أحيانًا. كنت أسقيها كل صباح، وأغطيها كل مساء.'",
              "الطيار: 'وهل أحببتها؟'",
              "الأمير (متردد): 'ربما لم أفهم ذلك إلا حين ابتعدت.'",
              "الطيار ينظر إليه بإعجاب وتأمل، ثم يكتب شيئًا في دفتره."
            ],
          },
          symbolism: "الرمز: الحب كحالة وعي، والحنين كطريق إلى الفهم.",
          lighting: "الإضاءة: ذهبية، توحي بالدفء والحنين.",
        },
        {
            title: "🎬 المشهد الثالث: كوكب رجل الأعمال",
            space: "الفضاء: الإضاءة باردة مزرقة.",
            scenography_detail: "السينوغرافيا: يُضاء مثلث واحد قويّ، كأنه مكتب في عالم مادي.",
            event: { 
              title: "الحدث:", 
              lines: [
                  "الأمير يحكي للطيار عن رجلٍ في كوكب بعيد، كان يعدّ النجوم ليملكها.", 
                  "الأمير: 'قال لي إنه يملكها جميعًا… النجوم التي في السماء!'", 
                  "الطيار: 'ولماذا؟'", 
                  "الأمير: 'لأنه لا يعرف ماذا يفعل بها.'", 
                  "الطيار يضحك بهدوء، ثم يطفئ المصباح للحظة تأمل."
                ] 
            },
            symbolism: "الرمز: نقد المادية والأنانية، مقابل بساطة نظرة الطفل للعالم.",
            lighting: "الإضاءة: تتحرك ببطء بين الأبيض والرمادي، ثم تعود إلى الضوء الدافئ عند نهاية المشهد."
        },
        {
            title: "🎬 المشهد الرابع: لقاء الثعلب – الترويض",
            space: "الفضاء: الإضاءة تتحول إلى برتقالي ذهبي (وقت الغروب).",
            event: { 
              title: "الحدث:", 
              lines: [
                  "يُسمع صوت الثعلب (من خلف الستار أو عبر مؤثر صوتي): 'إذا روّضتني، فسنحتاج بعضنا البعض.'", 
                  "الأمير: 'وما معنى الترويض؟'", 
                  "الثعلب: 'أن تنشئ روابط، أن تجعل أحدنا ضروريًا للآخر.'", 
                  "الأمير يجلس على الأرض وسط المثلثات التي تُضاء بدوائر صغيرة من الضوء.", 
                  "الطيار يراقب بصمت، متأثرًا بكلام الثعلب."
                ] 
            },
            symbolism: "الرمز: جوهر العلاقة الإنسانية، المحبة، الارتباط، المسؤولية.",
            lighting: "الإضاءة: خافتة، دافئة، متحركة بخفة."
        },
        {
            title: "🎬 المشهد الخامس: الرحيل – الوداع",
            space: "الفضاء: الضوء الأخير يأتي من المصباح على المكتب.",
            event: { 
              title: "الحدث:", 
              lines: [
                  "الأمير الصغير يقف بعيدًا، يهمّ بالرحيل نحو المثلثات التي تُضاء من الخلف كنجوم.",
                  "الأمير: 'سأعود إلى وردتي… لقد انتظرتني طويلاً.'", 
                  "الطيار (بصوت مبحوح): 'هل ستعود فعلًا؟'", 
                  "الأمير: 'كلما نظرتَ إلى السماء، ستسمع ضحكتي بين النجوم.'", 
                  "الإضاءة تخفت تدريجيًا حتى يبقى فقط ضوء المصباح، ثم ينطفئ ببطء.", 
                  "صمت طويل، ثم يُسمع صوت الريح."
                ] 
            },
            symbolism: "الرمز: الفقد، الذاكرة، الخلود من خلال الذكرى.",
            music: "الموسيقى: نغمة حزينة وهادئة جدًا."
        }
      ],
      directorsNote: {
        title: "✨ ملحوظة إخراجية",
        text: "نفس السينوغرافيا تُستعمل طيلة المسرحية بدون تغيير مادي، فقط عبر الإضاءة والصوت وتموضع الممثلين. المثلثات تمثل رمزيًا: الجبال، النجوم، الكواكب، أو فضاءات الذاكرة. المكتب والمصباح يمثلان 'العقل' أو 'الراوي'، بينما الفضاء المفتوح يمثل 'الخيال' و'العوالم الداخلية'.",
        durationTitle: "🕰️ المدة الإجمالية المقترحة:",
        duration: "حوالي 35 إلى 40 دقيقة",
      }
    },
    cast: {
      title: "التوزيع والفريق الإبداعي",
      data: [
        { nameKey: 'cast.data.0.name', roleKey: 'cast.data.0.role', imageUrl: 'https://picsum.photos/400/400?random=10' },
        { nameKey: 'cast.data.1.name', roleKey: 'cast.data.1.role', imageUrl: 'https://picsum.photos/400/400?random=11' },
        { nameKey: 'cast.data.2.name', roleKey: 'cast.data.2.role', imageUrl: 'https://picsum.photos/400/400?random=12' },
        { nameKey: 'cast.data.3.name', roleKey: 'cast.data.3.role', imageUrl: 'https://picsum.photos/400/400?random=13' },
        { nameKey: 'cast.data.4.name', roleKey: 'cast.data.4.role', imageUrl: 'https://picsum.photos/400/400?random=14' },
        { nameKey: 'cast.data.5.name', roleKey: 'cast.data.5.role', imageUrl: 'https://picsum.photos/400/400?random=15' },
      ],
      '0': { name: 'جان دوبون', role: 'الأمير الصغير' },
      '1': { name: 'ماري لوروا', role: 'الطيار' },
      '2': { name: 'لوك مارتان', role: 'الثعلب / الثعبان' },
      '3': { name: 'صوفي برنارد', role: 'الوردة / الزهرة' },
      '4': { name: 'بيير دوبوا', role: 'الملك / المغرور' },
      '5': { name: 'أنطوان لوميير', role: 'المخرج' },
    },
    schedule: {
      title: "مواعيد العروض",
      locationTitle: "المكان والحجز",
      theater: "مسرح القمر",
      address: "123 شارع النجوم، 75001 باريس، فرنسا",
      mapLink: "عرض على خرائط جوجل ←",
      bookingInfo: "لأية أسئلة، يرجى التواصل معنا عبر شبكاتنا الاجتماعية.",
      login: "دخول الإدارة",
      status: {
        available: "متوفر",
        soldout: "مباع بالكامل",
        cancelled: "ملغاة",
      },
      data: [
        { dateKey: 'schedule.data.0.date', time: '20:00', statusKey: 'available' },
        { dateKey: 'schedule.data.1.date', time: '16:00', statusKey: 'available' },
        { dateKey: 'schedule.data.2.date', time: '20:00', statusKey: 'soldout' },
        { dateKey: 'schedule.data.3.date', time: '15:00', statusKey: 'available' },
        { dateKey: 'schedule.data.4.date', time: '20:00', statusKey: 'available' },
        { dateKey: 'schedule.data.5.date', time: '20:00', statusKey: 'cancelled' },
      ],
      '0': { date: 'الجمعة، 24 أكتوبر' },
      '1': { date: 'السبت، 25 أكتوبر' },
      '2': { date: 'السبت، 25 أكتوبر' },
      '3': { date: 'الأحد، 26 أكتوبر' },
      '4': { date: 'الجمعة، 31 أكتوبر' },
      '5': { date: 'السبت، 1 نوفمبر' },
    },
    gallery: {
      title: "معرض الصور",
      data: [
        { src: "https://i.imgur.com/8i260pa.jpeg", alt: "مشهد مع ستارة ونجوم" },
        { src: "https://i.imgur.com/JPl5t2E.jpeg", alt: "مشهد مع طائرة في الصحراء" },
        { src: "https://i.imgur.com/9yI3x2x.jpeg", alt: "الأمير الصغير ينظر إلى وردة تحت زجاج" },
        { src: "https://i.imgur.com/O4n2a4a.jpeg", alt: "الطيار والأمير الصغير في الصحراء" },
        { src: "https://i.imgur.com/gKmY9d3.jpeg", alt: "الثعلب يتحدث إلى الأمير الصغير" },
        { src: "https://i.imgur.com/bX6t6xT.jpeg", alt: "صورة مقربة لوردة الأمير الصغير" }
      ]
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} إنتاج مسرحية "الأمير الصغير". جميع الحقوق محفوظة.`,
      credit: "صُمم الموقع بشاعرية.",
      socials: [
        { href: "#", svg: `<path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />` },
        { href: "#", svg: `<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />` },
        { href: "#", svg: `<path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.06-1.004.048-1.625.211-2.126.41-1.152.443-1.833 1.123-2.276 2.276-.2.501-.362 1.122-.41 2.126-.048 1.023-.06 1.351-.06 3.807 0 2.456.011 2.784.06 3.807.048 1.004.211 1.625.41 2.126.443 1.152 1.123 1.833 2.276 2.276.501.2 1.122.362 2.126.41 1.023.048 1.351.06 3.807.06 2.456 0 2.784-.011 3.807-.06 1.004-.048 1.625-.211 2.126-.41 1.152-.443-1.833-1.123-2.276-2.276.2-.501.362-1.122.41-2.126.048-1.023.06-1.351.06-3.807s-.011-2.784-.06-3.807c-.048-1.004-.211-1.625-.41-2.126-.443-1.152-1.123-1.833-2.276-2.276-.501-.2-1.122-.362-2.126-.41-1.023-.049-1.351-.06-3.807-.06l-.468.002z" clip-rule="evenodd" /><path d="M12 6.848c-2.849 0-5.152 2.303-5.152 5.152s2.303 5.152 5.152 5.152 5.152-2.303 5.152-5.152S14.849 6.848 12 6.848zm0 8.482c-1.843 0-3.33-1.487-3.33-3.33s1.487-3.33 3.33-3.33 3.33 1.487 3.33 3.33-1.487 3.33-3.33 3.33z" /><path d="M16.965 6.574a1.285 1.285 0 11-2.57 0 1.285 1.285 0 012.57 0z" />` }
      ]
    },
    admin: {
      title: "لوحة التحكم",
      logout: "تسجيل الخروج",
      headerSection: "قسم الترويسة",
      starIconSvg: "محتوى SVG لأيقونة النجمة",
      navSection: "قسم القائمة",
      navLink: "رابط القائمة",
      navLabel: "العنوان",
      navHref: "الرابط (href)",
      heroSection: "القسم الرئيسي",
      heroTitle: "العنوان الرئيسي",
      heroQuote: "الاقتباس",
      heroBgUrl: "رابط صورة الخلفية",
      aboutSection: "قسم 'عن المسرحية'",
      aboutTitle: "عنوان القسم",
      aboutP1: "الفقرة الأولى",
      aboutP2: "الفقرة الثانية",
      aboutImageUrl: "رابط صورة 'عن المسرحية'",
      save: "حفظ التغييرات",
      scenographySection: "قسم السينوغرافيا",
      scenographyTitle: "عنوان قسم السينوغرافيا",
      directorsNoteSection: "ملحوظة المخرج",
      noteTitle: "عنوان الملحوظة",
      noteText: "نص الملحوظة",
      noteDurationTitle: "عنوان المدة",
      noteDuration: "نص المدة",
      castSection: "قسم التوزيع",
      castMember: "عضو",
      castName: "الاسم",
      castRole: "الدور",
      castImageUrl: "رابط الصورة",
      scheduleSection: "قسم المواعيد",
      show: "عرض",
      showDate: "التاريخ",
      showTime: "الوقت",
      showStatus: "الحالة",
      gallerySection: "قسم المعرض",
      galleryImage: "صورة المعرض",
      imageUrl: "رابط الصورة",
      imageAlt: "النص البديل",
      footerSection: "قسم التذييل",
      socialIcon: "أيقونة اجتماعية",
      socialLink: "الرابط (URL)",
      socialSvg: "محتوى SVG للأيقونة",
      add: "إضافة",
      remove: "حذف",
      available: "متوفر",
      soldout: "مباع بالكامل",
      cancelled: "ملغى",
    },
    login: {
      title: "دخول لوحة التحكم",
      username: "اسم المستخدم",
      password: "كلمة المرور",
      error: "اسم المستخدم أو كلمة المرور غير صحيحة.",
      backToSite: "العودة إلى الموقع"
    }
  },
};