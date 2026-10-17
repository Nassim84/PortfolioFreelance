// Textes des sections de la page d'accueil.

export const services = [
  {
    number: '01',
    title: 'Site vitrine',
    description: 'Une présence en ligne claire, rapide et pensée pour transformer vos visiteurs en clients.',
    tags: ['Next.js', 'SEO local', 'Responsive'],
  },
  {
    number: '02',
    title: 'Application métier',
    description: 'Des outils web sur mesure pour simplifier vos opérations et faire gagner du temps à vos équipes.',
    tags: ['React', 'API REST', 'Base de données'],
  },
  {
    number: '03',
    title: 'Refonte & maintenance',
    description: 'Je reprends votre existant, corrige ce qui bloque et le fais évoluer sans repartir de zéro.',
    tags: ['Audit', 'Symfony', 'ASP.NET'],
  },
]

export type Project = {
  title: string
  problem: string
  solution: string
  tags: string[]
  link?: string
  image?: string
  soon?: boolean
}

export const projects: Project[] = [
  {
    title: 'Ned Driver — VTC en Provence',
    problem: 'Un chauffeur VTC indépendant à Avignon avait besoin d’être trouvé en ligne et de recevoir ses demandes de course directement, sans passer par une plateforme.',
    solution: 'Un site vitrine rapide et optimisé pour le référencement local, avec formulaire de demande de devis, destinations phares et avis clients.',
    tags: ['Next.js', 'SEO local', 'Responsive'],
    link: 'https://ndrive.fr/',
    image: '/projects/ndrive.png',
  },
  {
    title: 'Acteurs QPV du Grand Avignon',
    problem: 'Les professionnels qui interviennent dans les quartiers prioritaires du Grand Avignon avaient du mal à identifier les structures déjà actives auprès des habitants.',
    solution: 'Un annuaire en ligne avec cartographie des acteurs, recherche et filtres par thématique, quartier et acteur, dans le cadre du programme Quartiers 2030.',
    tags: ['Next.js', 'Cartographie', 'Filtres'],
    link: 'https://acteurs-qpv-grandavignon.fr/',
    image: '/projects/acteurs-qpv.png',
  },
  {
    title: 'Studio web en duo',
    problem: 'Beaucoup de commerçants, artisans et associations n’ont toujours pas de site, souvent par manque de temps ou par peur du coût.',
    solution: 'Avec un associé, nous préparons une offre de sites simples, abordables et livrés rapidement, pensée pour ceux qui partent de zéro.',
    tags: ['Next.js', 'Offre clé en main'],
    soon: true,
  },
]

export const steps = [
  {
    title: 'Échange et cadrage',
    description: 'Un premier appel pour comprendre votre activité, vos objectifs et vos contraintes. On définit ensemble ce dont vous avez vraiment besoin.',
  },
  {
    title: 'Devis clair',
    description: 'Une proposition détaillée avec le périmètre, le prix et le planning. Pas de frais cachés : vous savez exactement ce que vous payez.',
  },
  {
    title: 'Développement avec points réguliers',
    description: 'Je développe par étapes et vous montre l’avancement régulièrement, pour ajuster au fil de l’eau plutôt qu’à la fin.',
  },
  {
    title: 'Livraison et suivi',
    description: 'Mise en ligne, prise en main expliquée, puis période de corrections incluse. Une maintenance peut prendre le relais si besoin.',
  },
]

export const skills = ['React', 'Next.js', 'TypeScript', 'Symfony', 'ASP.NET / C#', 'Node.js', 'Docker', 'CI/CD']

export const faqs = [
  {
    question: 'Quels types de projets acceptez-vous ?',
    answer: 'Sites vitrines, applications métier, refontes et maintenance, pour des indépendants, des TPE, des associations et des collectivités.',
  },
  {
    question: 'Combien coûte un site vitrine ?',
    answer: 'Comptez à partir de 1 200 € pour un site vitrine de quelques pages, adapté au mobile et optimisé pour Google. La plupart des projets se situent entre 1 200 € et 3 000 € selon le nombre de pages et les fonctionnalités (formulaire de devis, blog, multilingue…). Le devis est gratuit et sans engagement.',
  },
  {
    question: 'Et pour une application métier ou un outil sur mesure ?',
    answer: 'Le prix dépend du périmètre : comptez généralement à partir de 4 000 €. Après un premier échange, je vous propose un devis au forfait détaillé, ou une facturation au temps passé (350 € par jour) pour les missions longues.',
  },
  {
    question: 'Combien de temps faut-il pour créer un site ?',
    answer: 'En moyenne 2 à 4 semaines pour un site vitrine, et 1 à 3 mois pour une application métier. Le planning exact est fixé dans le devis, avec des points réguliers pour suivre l’avancement.',
  },
  {
    question: 'Travaillez-vous uniquement à Avignon ?',
    answer: 'Non. Je suis basé entre Avignon et Aix-en-Provence et je travaille avec des clients partout en France, à distance. Je me déplace aussi volontiers dans le Vaucluse, les Bouches-du-Rhône et le Gard (Avignon, Aix-en-Provence, Marseille, Nîmes…).',
  },
  {
    question: 'Mon site sera-t-il bien référencé sur Google ?',
    answer: 'Chaque site est livré avec les bases d’un bon référencement : pages rapides, adaptées au mobile, balises optimisées, sitemap et données structurées. Pour un commerce local, je vous accompagne aussi sur votre fiche Google Business Profile.',
  },
  {
    question: 'Comment se passe le paiement ?',
    answer: 'Un acompte de 30 % au démarrage, puis le solde à la livraison. Pour les projets plus longs, le paiement peut être échelonné par étapes. Il est aussi possible de passer par Malt.',
  },
  {
    question: 'Que se passe-t-il après la livraison ?',
    answer: 'Une période de corrections est incluse. Ensuite, je peux assurer la maintenance de votre site (mises à jour, sauvegardes, petites évolutions) à partir de 50 € par mois, sans engagement.',
  },
  {
    question: 'Pouvez-vous reprendre un projet existant ?',
    answer: 'Oui. Je commence par un audit rapide pour comprendre l’existant et prioriser les améliorations, que le site soit en React, Next.js, Symfony ou ASP.NET.',
  },
]

export const projectTypes = ['Site vitrine', 'Application métier', 'Refonte ou maintenance', 'Autre besoin']

export const budgets = ['Moins de 1 000 €', '1 000 € – 3 000 €', '3 000 € – 6 000 €', 'Plus de 6 000 €', 'Je ne sais pas encore']
