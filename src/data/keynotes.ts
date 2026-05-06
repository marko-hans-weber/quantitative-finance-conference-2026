export type Keynote = {
  name: string
  affiliation: string
  siteUrl: string
  initials: string
  bio: string
  imageSrc?: string
}

export const keynotes: Keynote[] = [
  {
    name: "Beatrice Acciaio",
    affiliation: "ETH Zürich, Switzerland",
    siteUrl: "https://people.math.ethz.ch/~beacciaio/",
    initials: "BA",
    bio: "Full Professor at ETH Zürich, Executive Secretary of the Bachelier Finance Society and recipient of the Louis Bachelier Prize (2022). Her research spans optimal transport theory and stochastic analysis, and their applications in finance, insurance and economics. She is Associate Editor e.g. in SIFIN, Mathematical Finance, Finance and Stochastics, Annals of Applied Probability, and IJTAF.",
    imageSrc: "/Bea.png",
  },
  {
    name: "Damir Filipović",
    affiliation: "Ecole Polytechnique Fédérale de Lausanne (EPFL)",
    siteUrl: "https://www.epfl.ch/labs/csf/",
    initials: "DF",
    bio:"Swissquote Chair in Quantitative Finance at Ecole Polytechnique Fédérale de Lausanne (EPFL); former faculty member of the University of Vienna, the University of Munich and Princeton University. He is recipient of the Louis Bachelier Prize (2016). His research focus is on quantitative finance and risk management. He serves on several editorial boards and has published extensively in leading journals including Journal of Finance, Journal of Financial Economics, Mathematical Finance, Finance and Stochastics, and the Annals of Applied Probability. ",
    imageSrc: "/Damir.jpg",
  },
  {
    name: "Steven G. Kou",
    affiliation: "Boston University, USA",
    siteUrl: "https://sites.google.com/site/stevenkousg/",
    initials: "SK",
    bio:
      "Allen and Kelli Questrom Professor of Finance at Boston University; former Director of the Risk Management Institute at NUS. His research spans FinTech, quantitative finance, applied probability, and statistics, with extensive publications and recognition including IMS Fellow and major awards.",
    imageSrc: "/KouSteven.webp",
  },
  {
    name: "Huyên Pham",
    affiliation: "École Polytechnique, France",
    siteUrl: "https://sites.google.com/site/phamxuanhuyen/",
    initials: "HP",
    bio:
      "Full Professor at École Polytechnique (CMAP) and Vice-President of the Bachelier Finance Society (2024); recipient of the Louis Bachelier Prize (2007). His research spans stochastic control, mathematical finance, machine learning, numerical probability, and large deviations, and he serves as Editor-in-Chief of SIAM Journal on Control and Optimization (since 2024).",
    imageSrc: "/pham.jpg",
  },
  {
    name: "Nizar Touzi",
    affiliation: "New York University",
    siteUrl: "https://engineering.nyu.edu/faculty/nizar-touzi",
    initials: "NT",
    bio:
      "Professor at New York University, Chair of the Department of Finance and Risk Engineering at the Tandon School of Engineering. He was previously Professor at Department of Applied Mathematics of Ecole Polytechnique in France from 2006 to 2023. He was an invited session speaker at the International Congress of Mathematicians (Hyderabad 2010). He received the Louis Bachelier Natixis prize of the French Academy of Sciences in 2012, the Paris Europlace prize of Best Young Researcher in Finance in 2007, and he was awarded an Advanced ERC grant 2012-2017. He has several editorial responsibilities in various international journals in the fields of financial mathematics, applied probability, and control theory.",
    imageSrc: "/Touzi.jpg",
  }
]

