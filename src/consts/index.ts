interface NavLink {
  href: string
  text: string
}

export const NAVLINKS: NavLink[] = [
  {
    href: "/",
    text: "La esencia",
  },
  {
    href: "/",
    text: "¿Qué es?",
  },
  {
    href: "/",
    text: "Tipos",
  },
  {
    href: "/",
    text: "Requisitos para ser amado",
  },
  {
    href: "/",
    text: "Recursos",
  },
]

export const INDEX_GROUPS = [
  ["los de toda la vida", "los puntuales"],
  [
    "los que me resultan útiles",
    "con los que me divierto",
    "los que más quiero",
  ],
  [
    "los de verano",
    "los de clase",
    "con los que hago deporte",
    "los de mi familia",
  ],
]

export interface IBook {
  title: string
  author: string
  image: string
}

export const BOOKS: IBook[] = [
  {
    title: "Sobre la amistad",
    author: "Cicerón",
    image: "/images/books/book1.png",
  },
  {
    title: "El arte de ser un buen amigo",
    author: "de Hugh Black",
    image: "/images/books/book2.png",
  },
  {
    title: "Reencuentro",
    author: "de Fred Uhlman",
    image: "/images/books/book3.png",
  },
  {
    title: "El Principito",
    author: "de Antoine de Saint-Exupéry",
    image: "/images/books/book4.png",
  },
  {
    title: "Wonder",
    author: "de R.J. Palacio",
    image: "/images/books/book5.png",
  },
  {
    title: "Cometas en el cielo",
    author: "de Khaled Hosseini",
    image: "/images/books/book6.png",
  },
  {
    title: "Cómo ganar amigos",
    author: "de Dale Carnegie",
    image: "/images/books/book7.png",
  },
]

export interface IMovie {
  title: string
  year: string
  image: string
}

export const MOVIES: IMovie[] = [
  {
    title: "Intocable",
    year: "2011",
    image: "/images/movies/movie1.png",
  },
  {
    title: "Cadena Perpetuas",
    year: "1994",
    image: "/images/movies/movie2.png",
  },
  {
    title: "Ahora o nunca",
    year: "2015",
    image: "/images/movies/movie3.png",
  },
  {
    title: "Criadas y señoras",
    year: "2011",
    image: "/images/movies/movie4.png",
  },
  {
    title: "El indomable Will Hunting",
    year: "1997",
    image: "/images/movies/movie5.png",
  },
  {
    title: "Cinema Paradiso",
    year: "1989",
    image: "/images/movies/movie6.png",
  },
]

export interface AccordionItem {
  title: string
  content: string
}

export const ACCORDION_ITEMS: AccordionItem[] = [
  {
    title: "Sinceridad",
    content:
      "“Pues consistiendo la amistad en hacer, por decirlo así, de varias alma una sola, ¿cómo podrá ser esto, si ni siquiera el alma de cada cual es una y siempre la misma, sino varia, mudable y con muchos pliegues” (Cicerón).",
  },
  {
    title: "Lealtad",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    title: "Compromiso",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    title: "Flexibilidad",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    title: "Conexión",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    title: "Sencillez",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
  {
    title: "Moldeable",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
  },
]

export interface IFriendshipImage {
  image: string
  text: string
  colorText: string
  rotation: string
}

export const FRIENDSHIP_IMAGES: IFriendshipImage[] = [
  {
    image: "/images/section2/img1.png",
    text: "Se encuentra no se compra.",
    colorText: "Un tesoro.",
    rotation: "-6.22deg",
  },
  {
    image: "/images/section2/img2.png",
    text: "A veces se gana y a veces se pierde, pero sólo hay premio para el que juega.",
    colorText: "Un premio de Lotería.",
    rotation: "0deg",
  },
  {
    image: "/images/section2/img3.png",
    text: "Y nos enseña quiénes somos realmente.",
    colorText: "Nos hace ser nosotros mismos.",
    rotation: "12.78deg",
  },
  {
    image: "/images/section2/img4.png",
    text: "Darse sin buscar nada a cambio, hacer favores, dedicar tiempo.",
    colorText: "Servicio.",
    rotation: "0deg",
  },
  {
    image: "/images/section2/img5.png",
    text: "Que no se rebaja a ser colega.",
    colorText: "Algo que nos hace mejores.",
    rotation: "12.78deg",
  },
  {
    image: "/images/section2/img6.png",
    text: "No se cierra, no es posesiva, no se diluye al compartirla.",
    colorText: "Una amistad es abierta.",
    rotation: "-6.22deg",
  },
  {
    image: "/images/section2/img7.png",
    text: "Comienza dónde termina el interés.",
    colorText: "Una amistad es gratis.",
    rotation: "0deg",
  },
  {
    image: "/images/section2/img8.png",
    text: "Hace falta salir y lleva tiempo.",
    colorText: "No se consigue a golpe de clicks.",
    rotation: "-6.16deg",
  },
]
