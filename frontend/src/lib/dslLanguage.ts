// for syntax highlighting
export function registerDSLLanguage(monaco: typeof import("monaco-editor")) {
  monaco.languages.register({ id: "dsl" });

  monaco.languages.setMonarchTokensProvider("dsl", {
    keywords: [
      "circle",
      "dot",
      "rectangle",
      "square",
      "triangle",
      "line",
      "text",
      "move",
      "fadeIn",
      "fadeOut",
      "scale",
      "rotate",
      "parallel",
      "group",
      "sleep",
      "over",
      "size",
      "radius",
      "width",
      "height",
      "at",
      "to",
      "by",
      "around",
      "color",
    ],
    colors: [
      "red",
      "green",
      "blue",
      "yellow",
      "brown",
      "black",
      "white",
      "orange",
      "purple",
    ],

    tokenizer: {
      root: [
        [/TTS:.*/, "tts"],
        [
          /\b(?:circle|dot|rectangle|square|triangle|line|text|move|fadeIn|fadeOut|scale|rotate|parallel|group|sleep|over|size|radius|width|height|at|to|by|around|color)\b/,
          "keyword",
        ],
        [
          /\b(?:red|green|blue|yellow|brown|black|white|orange|purple)\b/,
          "constant",
        ],
        [/[a-zA-Z_][a-zA-Z0-9_]*/, "identifier"],
        [/-?\d+(\.\d+)?/, "number"],
        [/"([^"\\]|\\.)*"/, "string"],
        [/\/\/.*/, "comment"],
        [/\/\*/, { token: "comment", next: "@comment" }],
      ],
      comment: [
        [/[^/*]+/, "comment"],
        [/\*\//, "comment", "@pop"],
        [/[/*]/, "comment"],
      ],
    },
  });

  monaco.editor.defineTheme("dslTheme", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "keyword", foreground: "569CD6" },
      { token: "constant", foreground: "D7BA7D" },
      { token: "identifier", foreground: "9CDCFE" },
      { token: "number", foreground: "B5CEA8" },
      { token: "string", foreground: "D69D85" },
      { token: "comment", foreground: "6A9955" },
      { token: "tts", foreground: "C586C0", fontStyle: "italic" },
    ],
    colors: {},
  });
}
