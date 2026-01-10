const htmlQuestions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    answer: 0
  },
  {
    question: "Which HTML tag is used for the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    answer: 2
  },
  {
    question: "Which attribute specifies an image source?",
    options: ["alt", "href", "src", "link"],
    answer: 2
  },
  {
  question: "Which HTML tag is used to group related form elements?",
  options: ["<group>", "<fieldset>", "<form-group>", "<section>"],
  answer: 1
},
{
  question: "What is the purpose of the <label> tag in forms?",
  options: [
    "To style form text",
    "To add validation",
    "To associate text with an input",
    "To group inputs"
  ],
  answer: 2
},
{
  question: "Which attribute improves accessibility for images?",
  options: ["title", "src", "alt", "id"],
  answer: 2
},
{
  question: "Which HTML element is semantic?",
  options: ["<div>", "<span>", "<section>", "<b>"],
  answer: 2
},
{
  question: "What does the required attribute do?",
  options: [
    "Styles the input",
    "Prevents empty submission",
    "Adds placeholder text",
    "Limits input length"
  ],
  answer: 1
},
{
  question: "Which tag is used to embed a video?",
  options: ["<media>", "<video>", "<movie>", "<embed>"],
  answer: 1
},
{
  question: "Which input type hides typed characters?",
  options: ["text", "hidden", "password", "secure"],
  answer: 2
},
{
  question: "What is the purpose of the <meta viewport> tag?",
  options: [
    "SEO optimization",
    "Responsive scaling on mobile",
    "Page description",
    "Character encoding"
  ],
  answer: 1
},
{
  question: "Which tag represents navigation links?",
  options: ["<menu>", "<navigate>", "<nav>", "<links>"],
  answer: 2
},
{
  question: "Which HTML element is used for self-contained content?",
  options: ["<section>", "<article>", "<div>", "<aside>"],
  answer: 1
},
{
  question: "Which attribute specifies where a link opens?",
  options: ["href", "rel", "target", "open"],
  answer: 2
},
{
  question: "What does the <aside> element represent?",
  options: [
    "Main content",
    "Footer content",
    "Sidebar or tangential content",
    "Navigation"
  ],
  answer: 2
},
{
  question: "Which tag is used to define table headers?",
  options: ["<thead>", "<th>", "<header>", "<tr>"],
  answer: 1
},
{
  question: "Which attribute uniquely identifies an element?",
  options: ["class", "name", "id", "key"],
  answer: 2
},
{
  question: "Which tag is used to mark emphasized text?",
  options: ["<b>", "<i>", "<em>", "<strong>"],
  answer: 2
},
{
  question: "Which tag defines the document footer?",
  options: ["<bottom>", "<footer>", "<section>", "<aside>"],
  answer: 1
},
{
  question: "Which HTML element is used to group navigation links?",
  options: ["<nav>", "<menu>", "<ul>", "<header>"],
  answer: 0
},
{
  question: "Which tag is used for short inline quotations?",
  options: ["<quote>", "<q>", "<blockquote>", "<cite>"],
  answer: 1
},
{
  question: "What does the <strong> tag indicate?",
  options: [
    "Italic text",
    "Bold styling only",
    "Important text",
    "Highlighted text"
  ],
  answer: 2
},
{
  question: "Which element is used to embed external content like maps?",
  options: ["<embed>", "<iframe>", "<object>", "<external>"],
  answer: 1
},
{
  question: "Which input type allows selecting a date?",
  options: ["calendar", "time", "date", "datetime"],
  answer: 2
},
{
  question: "Which tag represents a thematic break?",
  options: ["<break>", "<hr>", "<line>", "<divider>"],
  answer: 1
},
{
  question: "What does the <main> element represent?",
  options: [
    "Navigation links",
    "Main page content",
    "Sidebar content",
    "Footer content"
  ],
  answer: 1
},
{
  question: "Which attribute provides extra information on hover?",
  options: ["hover", "alt", "title", "info"],
  answer: 2
},
{
  question: "Which tag is used for ordered lists?",
  options: ["<ul>", "<ol>", "<li>", "<list>"],
  answer: 1
},
{
  question: "Which HTML element is used to define captions for tables?",
  options: ["<caption>", "<summary>", "<thead>", "<title>"],
  answer: 0
},
{
  question: "Which element defines contact information?",
  options: ["<address>", "<contact>", "<footer>", "<info>"],
  answer: 0
}

];



const cssQuestions = [
  {
    question: "What does CSS stand for?",
    options: [
      "Colorful Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Syntax"
    ],
    answer: 1
  },
  {
    question: "Which property changes text color?",
    options: ["font-style", "color", "text-color", "background"],
    answer: 1
  },
  {
    question: "Which unit is relative to the viewport width?",
    options: ["em", "px", "vw", "%"],
    answer: 2
  },
  {
  question: "Which property controls the space inside an element?",
  options: ["margin", "padding", "gap", "spacing"],
  answer: 1
},
{
  question: "Which property controls the space outside an element?",
  options: ["padding", "border", "margin", "outline"],
  answer: 2
},
{
  question: "What does display: none do?",
  options: [
    "Hides element but keeps space",
    "Removes element from layout",
    "Makes element transparent",
    "Disables interaction"
  ],
  answer: 1
},
{
  question: "Which display value places elements in a row by default?",
  options: ["block", "inline", "flex", "grid"],
  answer: 2
},
{
  question: "Which property rounds element corners?",
  options: ["corner-radius", "border-radius", "radius", "round"],
  answer: 1
},
{
  question: "Which property changes text size?",
  options: ["font-style", "font-size", "text-size", "size"],
  answer: 1
},
{
  question: "What does position: fixed do?",
  options: [
    "Positions relative to parent",
    "Stays in normal flow",
    "Fixes element to viewport",
    "Moves with scroll"
  ],
  answer: 2
},
{
  question: "Which unit is relative to the root font size?",
  options: ["em", "px", "rem", "%"],
  answer: 2
},
{
  question: "Which property controls element transparency?",
  options: ["visibility", "opacity", "display", "filter"],
  answer: 1
},
{
  question: "Which property aligns text horizontally?",
  options: ["align-text", "text-align", "justify", "font-align"],
  answer: 1
},
{
  question: "What does overflow: hidden do?",
  options: [
    "Adds scrollbars",
    "Hides overflowing content",
    "Expands container",
    "Wraps text"
  ],
  answer: 1
},
{
  question: "Which property changes background color?",
  options: ["color", "bg-color", "background-color", "fill"],
  answer: 2
},
{
  question: "Which pseudo-class targets hovered elements?",
  options: [":active", ":hover", ":focus", ":visited"],
  answer: 1
},
{
  question: "Which property sets font type?",
  options: ["font-style", "font-family", "font-weight", "text-font"],
  answer: 1
},
{
  question: "Which value centers flex items horizontally?",
  options: [
    "align-items: center",
    "justify-content: center",
    "text-align: center",
    "place-items: center"
  ],
  answer: 1
},
{
  question: "What does z-index control?",
  options: [
    "Element size",
    "Stacking order",
    "Opacity level",
    "Position type"
  ],
  answer: 1
},
{
  question: "Which property adds a shadow to elements?",
  options: ["text-shadow", "box-shadow", "shadow", "filter-shadow"],
  answer: 1
},
{
  question: "Which selector targets all elements?",
  options: ["*", "all", "body", "html"],
  answer: 0
},
{
  question: "Which property controls line spacing?",
  options: ["letter-spacing", "line-height", "word-spacing", "spacing"],
  answer: 1
},
{
  question: "Which value makes an element invisible but keeps its space?",
  options: ["display: none", "opacity: 0", "visibility: hidden", "hidden"],
  answer: 2
},
{
  question: "Which property controls cursor appearance?",
  options: ["pointer", "cursor", "mouse", "hover"],
  answer: 1
},
{
  question: "Which property controls flex direction?",
  options: ["flex-wrap", "flex-flow", "flex-direction", "direction"],
  answer: 2
},
{
  question: "Which media feature targets screen width?",
  options: ["device-width", "screen-width", "width", "viewport"],
  answer: 2
},
{
  question: "Which property changes list bullet style?",
  options: ["list-type", "list-style", "bullet-style", "marker"],
  answer: 1
},
{
  question: "Which value prevents flex items from wrapping?",
  options: ["nowrap", "no-wrap", "wrap", "block"],
  answer: 0
},
{
  question: "Which property animates changes smoothly?",
  options: ["transform", "transition", "animation", "motion"],
  answer: 1
},
{
  question: "Which selector targets elements with a class?",
  options: ["#", ".", "*", "&"],
  answer: 1
}

];
