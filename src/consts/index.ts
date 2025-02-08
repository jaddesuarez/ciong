import type { JSX } from "astro/jsx-runtime"

interface NavLink {
  href: string
  text: string
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

interface IFriendshipImage {
  image: string
  text: string
  rotation?: number
  element?: JSX.Element
  width?: string
  height?: string
}

export const FRIENDSHIP_IMAGES: IFriendshipImage[] = [
  {
    image: "/images/section2/img1.png",
    element: `<p class="text-l-bold-small text-center">
        <span class="text-purple">Un tesoro.</span>
        <span class="text-black"> Se encuentra no se compra.</span>
      </p>`,
    text: "Un tesoro. Se encuentra no se compra.",
    rotation: -6.22,
    width: "w-[306px]",
    height: "h-[294px]",
  },
  {
    image: "/images/section2/img2.png",
    element: `<p class="text-m-bold-small text-center">
        <span class="text-purple">Un premio de Lotería.</span>
        <span class="text-black">A veces se gana y a veces se pierde, pero sólo hay premio para el que juega.</span>
      </p>`,
    text: "Un premio de Lotería. A veces se gana y a veces se pierde, pero sólo hay premio para el que juega.",
    width: "w-[306px]",
    height: "h-[330px]",
  },
  {
    image: "/images/section2/img3.png",
    element: `<p class="text-l-bold-small text-center">
        <span class="text-purple">Nos hace ser nosotros mismos.</span>
        <span class="text-black"> Y nos enseña quiénes somos realmente.</span>
      </p>`,
    text: "Nos hace ser nosotros mismos. Y nos enseña quiénes somos realmente.",
    rotation: 12.78,
    width: "w-[280px]",
    height: "h-[294px]",
  },
  {
    image: "/images/section2/img4.png",
    element: `<p class="text-m-bold-small text-center">
        <span class="text-purple">Servicio.</span>
        <span class="text-black">
          Darse sin buscar nada a cambio, hacer favores, dedicar tiempo.
        </span>
      </p>`,
    text: "Servicio. Darse sin buscar nada a cambio, hacer favores, dedicar tiempo.",
    width: "w-[266px]",
    height: "h-[253px]",
  },
  {
    image: "/images/section2/img5.png",
    element: `<p class="text-l-bold-small text-center">
        <span class="text-purple">Algo que nos hace mejores.</span>
        <span class="text-black"> Que no se rebaja a ser colega.</span>
      </p>`,
    text: "Algo que nos hace mejores. Que no se rebaja a ser colega.",
    rotation: 12.78,
    width: "w-[280px]",
    height: "h-[294px]",
  },
  {
    image: "/images/section2/img6.png",
    element: `<p class="text-m-bold-small text-center">
        <span class="text-purple">Una amistad es abierta.</span>
        <span class="text-black">
          No se cierra, no es posesiva, no se diluye al compartirla.
        </span>
      </p>`,
    text: "Una amistad es abierta. No se cierra, no es posesiva, no se diluye al compartirla.",
    rotation: -6.22,
    width: "w-[306px]",
    height: "h-[302px]",
  },
  {
    image: "/images/section2/img7.png",
    element: `<p class="text-l-bold-small text-center">
        <span class="text-purple">Una amistad es gratis.</span>
        <span class="text-black">Comienza dónde termina el interés.</span>
      </p>`,
    text: "Una amistad es gratis. Comienza dónde termina el interés.",
    width: "w-[266px]",
    height: "h-[266px]",
  },
  {
    image: "/images/section2/img8.png",
    element: `<p class="text-l-bold-small text-center">
        <span class="text-purple">No se consigue a golpe de clicks.</span>
        <span class="text-black">Hace falta salir y lleva tiempo.</span>
      </p>`,
    text: "No se consigue a golpe de clicks. Hace falta salir y lleva tiempo.",
    rotation: -6.16,
    width: "w-[260px]",
    height: "h-[343px]",
  },
]

export const DESCRIPTIONS = [
  "¿Puede durar mucho tiempo?",
  "¿Qué cualidades harían falta para construirla?",
  "¿Puede superar las diferencias o conflictos?",
  "¿Serías capaz de morir por ella?",
  "¿Cuál es su esencial?",
]
