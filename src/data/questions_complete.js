const data = [
  {
    category: "HTML",
    questions: [
      {
        question: "Qual tag cria uma lista ordenada?",
        options: ["<ol>", "<ul>", "<li>", "<p>"],
        answer: "<ol>",
        tip: "Ordenada, ou seja, com números ou letras.",
      },
      {
        question: "Qual atributo é usado para definir o estilo embutido em uma tag HTML?",
        options: ["class", "style", "id", "format"],
        answer: "style",
        tip: "Define o estilo diretamente na tag.",
      },
      {
        question: "Qual tag HTML é usada para criar um link de navegação?",
        options: ["<link>", "<nav>", "<a>", "<href>"],
        answer: "<a>",
      },      
      {
        question: "Qual atributo torna o input somente leitura?",
        options: ["placeholder", "value", "readonly", "maxlength"],
        answer: "readonly",
      },
      {
        question: "A tag semântica indicada para cabeçalhos é a:",
        options: ["div", "main", "section", "header"],
        answer: "header",
      },
    ],
  },
  {
    category: "CSS",
    questions: [
      {
        question: "Qual propriedade define a cor de fundo de um elemento?",
        options: ["background-color", "color", "font-size", "transition"],
        answer: "background-color",
        tip: "Define a cor do fundo do elemento.",
      },
      {
        question: "Para alterar a cor do texto de um elemento, usamos:",
        options: ["color", "text-transform", "font-size", "hover"],
        answer: "color",
      },
      {
        question: "A posição que deixa um elemento relativo ao seu container é a:",
        options: ["static", "absolute", "fixed", "relative"],
        answer: "relative",
      },
    ],
  },
  {
    category: "JavaScript",
    questions: [
      {
        question: "O que é ECMAScript?",
        options: [
          "O nome oficial do JavaScript",
          "Uma biblioteca JavaScript",
          "Um framework JavaScript",
          "Uma linguagem de script",
        ],
        answer: "O nome oficial do JavaScript",
      },
      {
        question: "Como declaramos uma variável em JavaScript?",
        options: ["const", "let", "var", "define"],
        answer: "const",
      },
      {
        question: "Qual dos tipos de dado a seguir não existe em JavaScript?",
        options: ["string", "number", "boolean", "float"],
        answer: "float",
      },
      {
        question: "Qual método é usado para converter uma string em número?",
        options: ["parseInt", "toString", "parseFloat", "toFixed"],
        answer: "parseInt",
      },
      {
        question: "Qual propriedade JavaScript retorna o número de caracteres em uma string?",
        options: ["qty", "length", "items", "index"],
        answer: "length",
      },
    ],
  },
];

export default data;
