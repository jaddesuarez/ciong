import type { JSX } from "astro/jsx-runtime";

interface NavLink {
  href: string;
  text: string;
}

export const NAVLINKS: NavLink[] = [
  {
    href: "#essence-of-friendship",
    text: "La esencia",
  },
  {
    href: "#what-is-friendship",
    text: "¿Qué es?",
  },
  {
    href: "#types-of-friendship",
    text: "Tipos",
  },
  {
    href: "#qualities",
    text: "Requisitos para ser amado",
  },
  {
    href: "#resources",
    text: "Recursos",
  },
];

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
      "“La verdadera amistad, como la fosforescencia, resplandece mejor cuando todo se ha oscurecido” (Rabindranath Tagore) “En la prosperidad, nuestros amigos nos conocen; en la adversidad, nosotros conocemos a nuestros amigos” (John Churton Collins)",
  },
  {
    title: "Compromiso",
    content:
      "“Todo el mundo quiere tener un amigo, pero nadie se toma la molestia de convertirse en uno” (Ralph Waldo Emerson)",
  },
  {
    title: "Flexibilidad",
    content:
      "“La amistad se fortalece cuando dejamos de centrarnos en nuestras preferencias y aprendemos a abrazar los gustos del otro” (William Hazlitt)",
  },
  {
    title: "Conexión",
    content:
      "“La verdadera amistad llega cuando el silencio entre dos parece ameno.” (David Tyson Gentry)",
  },
  {
    title: "Sencillez",
    content:
      "“Un amigo es alguien con quien se puede no hacer nada y disfrutar de ello.” (Popular)",
  },
  {
    title: "Moldeable",
    content:
      "“La vida es en parte lo que nosotros hacemos de ella y en parte lo que hacen de ella los amigos que escogemos” (Tennessee Williams)",
  },
];

interface IFriendshipImage {
  image: string;
  text: string;
  rotation?: number;
  element?: JSX.Element;
  frameWidth?: string;
  frameHeight?: string;
  imgWidth?: string;
  imgHeight?: string;
  bg?: string;
  className?: string;
}

export const FRIENDSHIP_IMAGES: IFriendshipImage[] = [
  {
    image: "/images/section2/img01.png",
    element: `<p class="text-m-bold-small lg:text-l-bold-small text-center">
        <span class="text-purple">Un tesoro.</span>
        <span class="text-black"> Se encuentra no se compra.</span>
      </p>`,
    text: "Un tesoro. Se encuentra no se compra.",
    rotation: -6.22,
    frameWidth: "w-[160.88px] md:w-[306.97px]",
    frameHeight: "h-[210.19px] md:h-[270.94px] lg:h-[294.94px]",
    imgWidth: "w-[149.2px] md:w-[274.97px]",
    imgHeight: "h-[116.21px] md:h-[206.94px]",
    bg: "bg-yellow lg:bg-white lg:hover:bg-yellow",
    className:
      "col-span-1 lg:hover:scale-105 transition-transform duration-300",
  },
  {
    image: "/images/section2/img02.png",
    element: `<p class="text-m-bold-small lg:text-l-bold-small text-center">
        <span class="text-purple">Un premio de Lotería.</span>
        <span class="text-black">A veces se gana y a veces se pierde, pero sólo hay premio para el que juega.</span>
      </p>`,
    text: "Un premio de Lotería. A veces se gana y a veces se pierde, pero sólo hay premio para el que juega.",
    frameWidth: "w-[180.61px] md:w-[306.97px]",
    frameHeight: "h-[280.17px] md:h-[330.66px] lg:h-[370.66px]",
    imgWidth: "w-[151.93px] md:w-[274.97px]",
    imgHeight: "h-[129.65px] md:h-[234.66px]",
    bg: "bg-white lg:hover:bg-yellow",
    className:
      "col-span-1 lg:hover:scale-105 transition-transform duration-300",
  },
  {
    image: "/images/section2/img03.png",
    element: `<p class="text-m-bold-small lg:text-l-bold-small text-center">
        <span class="text-purple">Nos hace ser nosotros mismos.</span>
        <span class="text-black"> Y nos enseña quiénes somos realmente.</span>
      </p>`,
    text: "Nos hace ser nosotros mismos. Y nos enseña quiénes somos realmente.",
    rotation: 12.78,
    frameWidth: "w-[279.21px]",
    frameHeight: "h-[280.54px] lg:h-[300px]",
    imgWidth: "w-[247.21px]",
    imgHeight: "h-[185.54px]",
    bg: "bg-white lg:hover:bg-yellow",
    className:
      "col-span-2 md:col-span-2 lg:col-span-1 lg:hover:scale-105 transition-transform duration-300",
  },
  {
    image: "/images/section2/img04.png",
    element: `<p class="text-m-bold-small lg:text-l-bold-small text-center">
        <span class="text-purple">Servicio.</span>
        <span class="text-black">
          Darse sin buscar nada a cambio, hacer favores, dedicar tiempo.
        </span>
      </p>`,
    text: "Servicio. Darse sin buscar nada a cambio, hacer favores, dedicar tiempo.",
    frameWidth: "w-[154.35px] md:w-[266.03px]",
    frameHeight: "h-[220px] md:h-[253.87px] lg:h-[270px]",
    imgWidth: "w-[135.78px] md:w-[234.03px]",
    imgHeight: "h-[91.6px] md:h-[157.87px]",
    bg: "bg-white lg:hover:bg-yellow",
    className:
      "col-span-1 lg:hover:scale-105 transition-transform duration-300",
  },
  {
    image: "/images/section2/img05.png",
    element: `<p class="text-m-bold-small lg:text-l-bold-small text-center">
        <span class="text-white lg:text-purple">Algo que nos hace mejores.</span>
        <span class="text-white lg:text-black"> Que no se rebaja a ser colega.</span>
      </p>`,
    text: "Algo que nos hace mejores. Que no se rebaja a ser colega.",
    rotation: 12.78,
    frameWidth: "w-[162px] md:w-[279.21px]",
    frameHeight: "h-[220px] md:h-[270px] lg:h-[300px]",
    imgWidth: "w-[143.43px] md:w-[247.21px]",
    imgHeight: "h-[107.65px] md:h-[185.54px]",
    bg: "bg-purple lg:bg-white lg:hover:bg-yellow",
    className:
      "col-span-1 lg:hover:scale-105 transition-transform duration-300",
  },
  {
    image: "/images/section2/img06.png",
    element: `<p class="text-m-bold-small lg:text-l-bold-small text-center">
        <span class="text-purple">Una amistad es abierta.</span>
        <span class="text-black">
          No se cierra, no es posesiva, no se diluye al compartirla.
        </span>
      </p>`,
    text: "Una amistad es abierta. No se cierra, no es posesiva, no se diluye al compartirla.",
    rotation: -6.22,
    frameWidth: "w-[306.97px]",
    frameHeight: "h-[302.94px] lg:h-[330.94px]",
    imgWidth: "w-[274.97px]",
    imgHeight: "h-[206.94px]",
    bg: "bg-white lg:hover:bg-yellow",
    className:
      "col-span-2 md:col-span-2 lg:col-span-1 lg:hover:scale-105 transition-transform duration-300",
  },
  {
    image: "/images/section2/img07.png",
    element: `<p class="text-m-bold-small lg:text-l-bold-small text-center">
        <span class="text-purple">Una amistad es gratis.</span>
        <span class="text-black">Comienza dónde termina el interés.</span>
      </p>`,
    text: "Una amistad es gratis. Comienza dónde termina el interés.",
    frameWidth: "w-[166.22px] md:w-[266.03px]",
    frameHeight: "h-[220px] md:h-[240px] lg:h-[270px]",
    imgWidth: "w-[145.85px] md:w-[234.03px]",
    imgHeight: "h-[102.35px] md:h-[157.87px]",
    bg: "bg-yellow lg:bg-white lg:hover:bg-yellow",
    className:
      "col-span-1 lg:hover:scale-105 transition-transform duration-300",
  },
  {
    image: "/images/section2/img08.png",
    element: `<p class="text-m-bold-small lg:text-l-bold-small text-center">
        <span class="text-purple">No se consigue a golpe de clicks.</span>
        <span class="text-black">Hace falta salir y lleva tiempo.</span>
      </p>`,
    text: "No se consigue a golpe de clicks. Hace falta salir y lleva tiempo.",
    rotation: -6.16,
    frameWidth: "w-[163.51px] md:w-[261px]",
    frameHeight: "h-[270px] md:h-[310px] lg:h-[343px]",
    imgWidth: "w-[143.15px] md:w-[229px]",
    imgHeight: "h-[152.29px] md:h-[235px]",
    bg: "bg-white lg:hover:bg-yellow",
    className:
      "col-span-1 lg:hover:scale-105 transition-transform duration-300",
  },
];

export const DESCRIPTIONS = [
  "¿Puede durar mucho tiempo?",
  "¿Qué cualidades harían falta para construirla?",
  "¿Puede superar las diferencias o conflictos?",
  "¿Serías capaz de morir por ella?",
  "¿Cuál es su esencial?",
];

export interface TestQuestion {
  id: number;
  question: string;
  options: {
    value: "A" | "B" | "C" | "D";
    text: string;
  }[];
}

export interface TestResult {
  type: "A" | "B" | "C" | "D";
  title: string;
  description: string;
}

export const FRIENDSHIP_TEST: TestQuestion[] = [
  {
    id: 1,
    question:
      "Me doy cuenta rápido cuando un amigo está triste o preocupado en vez de que me lo tenga que decir....",
    options: [
      { value: "A", text: "Siempre" },
      { value: "B", text: "Casi siempre" },
      { value: "C", text: "A veces" },
      { value: "D", text: "Rara vez" },
    ],
  },
  {
    id: 2,
    question:
      "Mis conversaciones son superficiales (fútbol, planes de fin de semana, etc.) o soy capaz de hablar de las cosas que más me afectan.",
    options: [
      {
        value: "A",
        text: "Con frecuencia hablamos de aquello que más nos importa",
      },
      { value: "B", text: "A veces hablamos de otras cosas" },
      { value: "C", text: "Casi siempre son superficiales" },
      { value: "D", text: "Rara vez hablamos de temas profundos" },
    ],
  },
  {
    id: 3,
    question:
      "Si un amigo me cuenta un problema, intento escuchar sin dar consejos inmediatamente.",
    options: [
      { value: "A", text: "Siempre" },
      { value: "B", text: "Casi siempre" },
      { value: "C", text: "A veces" },
      { value: "D", text: "Rara vez" },
    ],
  },
  {
    id: 4,
    question:
      "Cuando tengo un problema con un amigo, trato de hablarlo en lugar de ignorarlo.",
    options: [
      { value: "A", text: "Siempre" },
      { value: "B", text: "Casi siempre" },
      { value: "C", text: "A veces" },
      { value: "D", text: "Rara vez" },
    ],
  },
  {
    id: 5,
    question:
      "Comparto mis pensamientos y sentimientos con mis amigos cercanos de forma honesta.",
    options: [
      { value: "A", text: "Siempre" },
      { value: "B", text: "Casi siempre" },
      { value: "C", text: "A veces" },
      { value: "D", text: "Rara vez" },
    ],
  },
  {
    id: 6,
    question: "Mis amigos saben que pueden contar conmigo cuando lo necesiten.",
    options: [
      { value: "A", text: "Siempre" },
      { value: "B", text: "Casi siempre" },
      { value: "C", text: "A veces" },
      { value: "D", text: "Rara vez" },
    ],
  },
  {
    id: 7,
    question:
      "Me siento cómodo confiando en mis amigos con cosas importantes de mi vida.",
    options: [
      { value: "A", text: "Siempre" },
      { value: "B", text: "Casi siempre" },
      { value: "C", text: "A veces" },
      { value: "D", text: "Rara vez" },
    ],
  },
  {
    id: 8,
    question:
      "Con mis amigos, me siento libre de ser yo mismo(a), sin miedo a ser juzgado(a).",
    options: [
      { value: "A", text: "Siempre" },
      { value: "B", text: "Casi siempre" },
      { value: "C", text: "A veces" },
      { value: "D", text: "Rara vez" },
    ],
  },
  {
    id: 9,
    question:
      "Me siento bien compartiendo cosas sobre mi vida, incluso las partes que no son perfectas.",
    options: [
      { value: "A", text: "Siempre" },
      { value: "B", text: "Casi siempre" },
      { value: "C", text: "A veces" },
      { value: "D", text: "Rara vez" },
    ],
  },
  {
    id: 10,
    question:
      "Si un amigo tiene opiniones diferentes a las mías, trato de entender su punto de vista sin pelear.",
    options: [
      { value: "A", text: "Siempre" },
      { value: "B", text: "Casi siempre" },
      { value: "C", text: "A veces" },
      { value: "D", text: "Rara vez" },
    ],
  },
  {
    id: 11,
    question:
      "Aprecio las diferencias entre mis amigos (como gustos, estilos de vida o personalidades).",
    options: [
      { value: "A", text: "Siempre" },
      { value: "B", text: "Casi siempre" },
      { value: "C", text: "A veces" },
      { value: "D", text: "Rara vez" },
    ],
  },
  {
    id: 12,
    question:
      "Si un amigo me decepciona, trato de hablar con él/ella en lugar de cortar la relación.",
    options: [
      { value: "A", text: "Siempre" },
      { value: "B", text: "Casi siempre" },
      { value: "C", text: "A veces" },
      { value: "D", text: "Rara vez" },
    ],
  },
  {
    id: 13,
    question:
      "Aunque tengamos discusiones, trato de arreglar las cosas porque valoro la amistad.",
    options: [
      { value: "A", text: "Siempre" },
      { value: "B", text: "Casi siempre" },
      { value: "C", text: "A veces" },
      { value: "D", text: "Rara vez" },
    ],
  },
  {
    id: 14,
    question:
      "Comparto mis preocupaciones con mi amigo/a a la cara en vez de mediante mensajes de texto siempre que puedo.",
    options: [
      { value: "A", text: "Siempre" },
      { value: "B", text: "Casi siempre" },
      { value: "C", text: "A veces" },
      { value: "D", text: "Rara vez" },
    ],
  },
  {
    id: 15,
    question:
      "Tengo iniciativa para hacer favores a mis amigos y tengo en mente tener tiempo para lo que ellos puedan necesitar cada día o cada semana.",
    options: [
      { value: "A", text: "Siempre" },
      { value: "B", text: "Casi siempre" },
      { value: "C", text: "A veces" },
      { value: "D", text: "Rara vez" },
    ],
  },
  {
    id: 16,
    question:
      "Tengo la confianza suficiente como para llevar a mis amigos a mi lugar de intimidad (mi casa, mi familia...).",
    options: [
      { value: "A", text: "Siempre" },
      { value: "B", text: "Casi siempre" },
      { value: "C", text: "A veces" },
      { value: "D", text: "Rara vez" },
    ],
  },
];

export const HERO_IMAGES = [
  {
    image: "/images/hero/img01.png",
    alt: "imagen de la página",
    frameWidth: "w-[284.93px]",
    frameHeight: "h-[263.57px]",
    imgWidth: "w-[259.07px]",
    imgHeight: "h-[194.75px]",
    rotation: -7.62,
    bg: "bg-white",
  },
  {
    image: "/images/hero/img02.png",
    alt: "imagen de la página",
    frameWidth: "w-[223.34px]",
    frameHeight: "h-[293.85px]",
    imgWidth: "w-[197.5px]",
    imgHeight: "h-[247.28px]",
    rotation: 12.47,
    bg: "bg-white",
  },
  {
    image: "/images/hero/img03.png",
    alt: "imagen de la página",
    frameWidth: "w-[235.95px]",
    frameHeight: "h-[296.66px]",
    imgWidth: "w-[211.95px]",
    imgHeight: "h-[234.66px]",
    rotation: -4.44,
    bg: "bg-white",
  },
  {
    image: "/images/hero/img04.png",
    alt: "imagen de la página",
    frameWidth: "w-[279px]",
    frameHeight: "h-[301px]",
    imgWidth: "w-[247px]",
    imgHeight: "h-[235px]",
    rotation: 7.55,
    bg: "bg-yellow",
  },
];
