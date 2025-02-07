interface NavLink {
  href: string;
  text: string;
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
];

export interface IBook {
  title: string;
  author: string;
  image: string;
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
];

export interface IMovie {
  title: string;
  year: string;
  image: string;
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
];

export interface AccordionItem {
  title: string;
  content: string;
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
];
