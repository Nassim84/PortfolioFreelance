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
  { question: 'Quels types de projets acceptes-tu ?', answer: 'Sites vitrines, applications métier, refontes et missions de maintenance pour indépendants et petites entreprises.' },
  { question: 'Quels sont tes délais habituels ?', answer: 'Ils dépendent du périmètre. Après un premier échange, je vous propose un planning réaliste et détaillé.' },
  { question: 'Comment fonctionne la tarification ?', answer: 'Devis au forfait ou TJM selon le projet. Le devis est gratuit et sans engagement.' },
  { question: 'Comment se passe le paiement ?', answer: 'Un acompte puis le solde à la livraison, ou via la plateforme Malt/Codeur selon le projet.' },
  { question: 'Que se passe-t-il après la livraison ?', answer: 'Une période de correction est prévue. Une maintenance peut aussi être mise en place si besoin.' },
  { question: 'Peux-tu reprendre un projet existant ?', answer: 'Oui. Je commence par un audit rapide pour comprendre la base et prioriser les améliorations.' },
  { question: 'Travailles-tu à distance ?', answer: 'Oui, je travaille à distance avec des points réguliers et des échanges simples.' },
]

export const projectTypes = ['Site vitrine', 'Application métier', 'Refonte ou maintenance', 'Autre besoin']

export const budgets = ['Moins de 1 000 €', '1 000 € – 3 000 €', '3 000 € – 6 000 €', 'Plus de 6 000 €', 'Je ne sais pas encore']
