/* Données du site. Ajouter un objet dans un tableau suffit à l'afficher. */
const I=(id,titre,description,categorie,x={})=>({id,titre,description,categorie,image:"",alt:titre,credit:"",...x});
const DATA={
stats:[{id:1,titre:"de la population mondiale vivra en ville en 2050",valeur:68,suffixe:" %"},{id:2,titre:"des émissions de CO₂ liées aux villes",valeur:70,suffixe:" %"},{id:3,titre:"cibles dans l'ODD 11 « Villes durables »",valeur:10,suffixe:""}],
enjeux:[
I("e1","Changement climatique","Les villes concentrent la majorité des émissions et subissent canicules et inondations.","Climat",{detail:"Atténuer (bâtiments sobres, énergies renouvelables, mobilités bas carbone) et s'adapter (désimperméabilisation, végétalisation, plans de résilience) sont les deux volets d'une stratégie urbaine cohérente."}),
I("e2","Étalement urbain","L'urbanisation diffuse consomme des sols agricoles et naturels et accroît la dépendance à l'automobile.","Sol",{detail:"La lutte contre l'artificialisation (objectif de zéro artificialisation nette en France) passe par le renouvellement urbain, la densification qualitative et la reconquête des friches."}),
I("e3","Mobilité","Réduire la place de la voiture individuelle au profit de la marche, du vélo et des transports collectifs.","Mobilité",{detail:"Le triptyque « éviter, reporter, améliorer » associe proximité des services, report modal et motorisations propres."}),
I("e4","Eau et déchets","Gérer les eaux pluviales, préserver la ressource et développer l'économie circulaire.","Ressources",{detail:"Gestion intégrée des eaux pluviales (noues, bassins), réemploi, tri à la source et valorisation des biodéchets réduisent les pressions sur les milieux."}),
I("e5","Îlots de chaleur","Le minéral et le manque d'ombre font grimper la température urbaine de plusieurs degrés.","Climat",{detail:"Arbres, toitures et façades végétalisées, matériaux clairs et points d'eau abaissent la température et protègent les populations vulnérables."}),
I("e6","Biodiversité","Maintenir des continuités écologiques jusqu'au cœur des villes.","Nature",{detail:"La trame verte et bleue, les corridors, les parcs et la gestion différenciée des espaces verts favorisent la faune et la flore."}),
I("e7","Logement","Produire des logements abordables, de qualité et sobres en énergie.","Social",{detail:"Rénovation thermique, mixité sociale, habitat participatif et lutte contre la précarité énergétique sont des leviers majeurs."}),
I("e8","Justice spatiale","Garantir à chacun un accès équitable aux services, aux espaces verts et à un environnement sain.","Social",{detail:"Les inégalités environnementales touchent d'abord les quartiers défavorisés; l'ODD 11 vise des villes inclusives, sûres, résilientes et durables."})],
projets:[
I("p1","Copenhague (Danemark)","Réseau cyclable dense et ambition de neutralité carbone.","mobilité"),
I("p2","Curitiba (Brésil)","Pionnière du bus à haut niveau de service (BRT) depuis les années 1970.","mobilité"),
I("p3","Fribourg-Vauban (Allemagne)","Quartier écologique à faible circulation, né d'un projet citoyen.","habitat"),
I("p4","Singapour","La « ville dans un jardin » : végétalisation massive et gestion de l'eau.","nature en ville"),
I("p5","Medellín (Colombie)","Métrocâble et urbanisme social pour relier les quartiers périphériques.","gouvernance"),
I("p6","Paris, ville du quart d'heure","Accès aux services essentiels en 15 minutes à pied ou à vélo.","gouvernance"),
I("p7","Hammarby Sjöstad (Stockholm)","Ancienne friche portuaire devenue modèle de cycle énergétique et d'eau intégré.","énergie")],
outils:[
I("o1","PLU / PLUi","Plan local d'urbanisme (intercommunal): document réglementaire fixant les règles d'usage des sols.","Planification"),
I("o2","SCoT","Schéma de cohérence territoriale: planifie à l'échelle d'un bassin de vie habitat, mobilité et environnement.","Planification"),
I("o3","Écoquartiers","Quartiers conçus selon des critères de sobriété, de mixité et de qualité de vie, labellisés en France.","Projet"),
I("o4","Certifications HQE, BREEAM, LEED","Référentiels qui évaluent la performance environnementale des bâtiments et des quartiers.","Évaluation"),
I("o5","Trame verte et bleue","Réseau de continuités écologiques terrestres et aquatiques.","Nature"),
I("o6","Ville compacte et mixité fonctionnelle","Limiter les distances en combinant logements, emplois et services.","Forme urbaine"),
I("o7","Urbanisme tactique","Aménagements légers et temporaires testés avant d'être pérennisés.","Projet"),
I("o8","Démarches participatives","Concertation, ateliers et budgets participatifs pour associer les habitants.","Gouvernance")],
timeline:[
I("t1","Rapport Brundtland","Définit le développement durable comme celui qui répond aux besoins du présent sans compromettre ceux des générations futures.","1987",{annee:"1987"}),
I("t2","Sommet de la Terre de Rio","Adoption de l'Agenda 21, décliné par les collectivités locales.","1992",{annee:"1992"}),
I("t3","Charte d'Aalborg","Les villes européennes s'engagent pour la durabilité locale.","1994",{annee:"1994"}),
I("t4","Objectifs de développement durable","17 ODD adoptés par l'ONU; l'ODD 11 concerne les villes et établissements humains.","2015",{annee:"2015"}),
I("t5","Habitat III et Nouveau Programme pour les villes","Quito: cadre mondial de l'urbanisation durable pour 20 ans.","2016",{annee:"2016"})],
glossaire:[
I("g1","Artificialisation","Transformation d'un sol naturel, agricole ou forestier en sol bâti ou revêtu.","Terme"),
I("g2","Densité","Rapport entre une quantité (logements, habitants) et une surface.","Terme"),
I("g3","Désimperméabilisation","Remplacement de surfaces étanches par des sols perméables.","Terme"),
I("g4","Écoquartier","Quartier respectant des critères de durabilité, sociaux et environnementaux.","Terme"),
I("g5","Mixité fonctionnelle","Coexistence d'activités différentes (habitat, commerces, emplois) dans un même secteur.","Terme"),
I("g6","Résilience urbaine","Capacité d'une ville à absorber un choc et à se réorganiser.","Terme"),
I("g7","Trame verte et bleue","Réseau de continuités écologiques terrestres (verte) et aquatiques (bleue).","Terme"),
I("g8","Zéro artificialisation nette","Objectif d'équilibrer les surfaces artificialisées et désartificialisées.","Terme")],
ressources:[
I("r1","ONU-Habitat","Programme des Nations unies pour les établissements humains.","Lien institutionnel",{url:"https://unhabitat.org"}),
I("r2","ADEME","Agence de la transition écologique: guides et données sur les villes durables.","Lien institutionnel",{url:"https://www.ademe.fr"}),
I("r3","ODD 11 – Nations unies","Page officielle de l'objectif « villes et communautés durables ».","Lien institutionnel",{url:"https://sdgs.un.org/goals/goal11"}),
I("r4","Cerema","Expertise publique en aménagement et transition écologique.","Lien institutionnel",{url:"https://www.cerema.fr"}),
I("r5","Notre avenir à tous (1987)","Rapport de la Commission mondiale sur l'environnement et le développement (Brundtland).","Bibliographie"),
I("r6","Jane Jacobs, Déclin et survie des grandes villes américaines (1961)","Ouvrage fondateur sur la diversité et la vitalité urbaines.","Bibliographie"),
I("r7","Carlos Moreno, Droit de cité (2020)","Présente le concept de ville du quart d'heure.","Bibliographie")],
faq:[
I("f1","Qu'est-ce que l'urbanisme durable ?","Une approche qui conçoit la ville en conciliant environnement, équité sociale et viabilité économique.","FAQ"),
I("f2","Puis-je réutiliser le contenu ?","Ce site est un projet universitaire: citez-le et vérifiez les sources indiquées dans les ressources.","FAQ"),
I("f3","Comment contacter l'équipe ?","Utilisez le formulaire ci-dessus; il s'agit d'une démonstration sans envoi réel.","FAQ")]
};
