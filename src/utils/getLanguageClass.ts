import { Language } from '../types/Highlight';
const getClass = (language: Language) => {
  switch (language) {
    case '.properties':
      return 'properties';
    case '1C:Enterprise':
      return '1c';
    case 'ARM Assembly':
      return 'armasm';
    case 'AVR Assembly':
      return 'avrasm';
    case 'ActionScript':
      return 'actionscript';
    case 'Ada':
      return 'ada';
    case 'AngelScript':
      return 'angelscript';
    case 'Apache Access Log':
      return 'accesslog';
    case 'Apache config':
      return 'apache';
    case 'AppleScript':
      return 'applescript';
    case 'ArcGIS Arcade':
      return 'arcade';
    case 'Arduino':
      return 'arduino';
    case 'Arduino':
      return 'arduino';
    case 'AsciiDoc':
      return 'asciidoc';
    case 'AspectJ':
      return 'aspectj';
    case 'Augmented Backus-Naur Form':
      return 'abnf';
    case 'AutoHotkey':
      return 'autohotkey';
    case 'AutoIt':
      return 'autoit';
    case 'Awk':
      return 'awk';
    case 'BASIC':
      return 'basic';
    case 'Backus-Naur Form':
      return 'bnf';
    case 'Bash':
      return 'bash';
    case 'Batch file (DOS)':
      return 'dos';
    case 'Brainfuck':
      return 'brainfuck';
    case 'C':
      return 'c';
    case 'C#':
      return 'csharp';
    case 'C++':
      return 'cpp';
    case 'C/AL':
      return 'cal';
    case 'CMake':
      return 'cmake';
    case 'CSP':
      return 'csp';
    case 'CSS':
      return 'css';
    case 'Cache Object Script':
      return 'cos';
    case "Cap'n Proto":
      return 'capnproto';
    case 'Ceylon':
      return 'ceylon';
    case 'Clean':
      return 'clean';
    case 'Clojure':
      return 'clojure';
    case 'Clojure REPL':
      return 'clojure-repl';
    case 'CoffeeScript':
      return 'coffeescript';
    case 'Coq':
      return 'coq';
    case 'Crystal':
      return 'crystal';
    case 'D':
      return 'd';
    case 'DNS Zone':
      return 'dns';
    case 'Dart':
      return 'dart';
    case 'Delphi':
      return 'delphi';
    case 'Device Tree':
      return 'dts';
    case 'Diff':
      return 'diff';
    case 'Django':
      return 'django';
    case 'Dockerfile':
      return 'dockerfile';
    case 'Dust':
      return 'dust';
    case 'ERB (Embedded Ruby)':
      return 'erb';
    case 'Elixir':
      return 'elixir';
    case 'Elm':
      return 'elm';
    case 'Erlang':
      return 'erlang';
    case 'Erlang REPL':
      return 'erlang-repl';
    case 'Excel formulae':
      return 'excel';
    case 'Extended Backus-Naur Form':
      return 'ebnf';
    case 'F#':
      return 'fsharp';
    case 'FIX':
      return 'fix';
    case 'Flix':
      return 'flix';
    case 'Fortran':
      return 'fortran';
    case 'G-code (ISO 6983)':
      return 'gcode';
    case 'GAMS':
      return 'gams';
    case 'GAUSS':
      return 'gauss';
    case 'GLSL':
      return 'glsl';
    case 'GML':
      return 'gml';
    case 'Gherkin':
      return 'gherkin';
    case 'Go':
      return 'go';
    case 'Golo':
      return 'golo';
    case 'Gradle':
      return 'gradle';
    case 'GraphQL':
      return 'graphql';
    case 'Groovy':
      return 'groovy';
    case 'HAML':
      return 'haml';
    case 'HSP':
      return 'hsp';
    case 'HTML':
      return 'xml';
    case 'HTTP':
      return 'http';
    case 'Handlebars':
      return 'handlebars';
    case 'Haskell':
      return 'haskell';
    case 'Haxe':
      return 'haxe';
    case 'Hy':
      return 'hy';
    case 'INI':
      return 'ini';
    case 'IRPF90':
      return 'irpf90';
    case 'ISBL':
      return 'isbl';
    case 'Inform 7':
      return 'inform7';
    case 'Intel x86 Assembly':
      return 'x86asm';
    case 'JBoss CLI':
      return 'jboss-cli';
    case 'JSON':
      return 'json';
    case 'Java':
      return 'java';
    case 'JavaScript':
      return 'javascript';
    case 'Julia':
      return 'julia';
    case 'Julia REPL':
      return 'julia-repl';
    case 'Kotlin':
      return 'kotlin';
    case 'LDIF':
      return 'ldif';
    case 'LLVM IR':
      return 'llvm';
    case 'LSL (Linden Scripting Language)':
      return 'lsl';
    case 'LaTeX':
      return 'latex';
    case 'Lasso':
      return 'lasso';
    case 'Leaf':
      return 'leaf';
    case 'Less':
      return 'less';
    case 'Lisp':
      return 'lisp';
    case 'LiveCode':
      return 'livecodeserver';
    case 'LiveScript':
      return 'livescript';
    case 'Lua':
      return 'lua';
    case 'MEL':
      return 'mel';
    case 'MIPS Assembly':
      return 'mipsasm';
    case 'Makefile':
      return 'makefile';
    case 'Markdown':
      return 'markdown';
    case 'Matlab':
      return 'matlab';
    case 'Maxima':
      return 'maxima';
    case 'Mercury':
      return 'mercury';
    case 'Microtik RouterOS script':
      return 'routeros';
    case 'Mizar':
      return 'mizar';
    case 'Mojolicious':
      return 'mojolicious';
    case 'Monkey':
      return 'monkey';
    case 'MoonScript':
      return 'moonscript';
    case 'N1QL':
      return 'n1ql';
    case 'NSIS':
      return 'nsis';
    case 'NestedText':
      return 'nestedtext';
    case 'Nginx config':
      return 'nginx';
    case 'Nim':
      return 'nim';
    case 'Nix':
      return 'nix';
    case 'Node REPL':
      return 'node-repl';
    case 'OCaml':
      return 'ocaml';
    case 'Objective-C':
      return 'objectivec';
    case 'OpenSCAD':
      return 'openscad';
    case 'Oracle Rules Language':
      return 'ruleslanguage';
    case 'Oxygene':
      return 'oxygene';
    case 'PHP':
      return 'php';
    case 'PHP Template':
      return 'php-template';
    case 'PL/pgSQL':
      return 'pgsql';
    case 'Packet Filter config':
      return 'pf';
    case 'Parser3':
      return 'parser3';
    case 'Perl':
      return 'perl';
    case 'Plain text':
      return 'plaintext';
    case 'Pony':
      return 'pony';
    case 'PostgreSQL':
      return 'pgsql';
    case 'PowerShell':
      return 'powershell';
    case 'Processing':
      return 'processing';
    case 'Prolog':
      return 'prolog';
    case 'Protocol Buffers':
      return 'protobuf';
    case 'Puppet':
      return 'puppet';
    case 'PureBASIC':
      return 'purebasic';
    case 'Python':
      return 'python';
    case 'Python REPL':
      return 'python-repl';
    case 'Python profiler':
      return 'profile';
    case 'Q':
      return 'q';
    case 'QML':
      return 'qml';
    case 'R':
      return 'r';
    case 'ReasonML':
      return 'reasonml';
    case 'RenderMan RIB':
      return 'rib';
    case 'RenderMan RSL':
      return 'rsl';
    case 'Roboconf':
      return 'roboconf';
    case 'Ruby':
      return 'ruby';
    case 'Rust':
      return 'rust';
    case 'SAS':
      return 'sas';
    case 'SCSS':
      return 'scss';
    case 'SML (Standard ML)':
      return 'sml';
    case 'SQF':
      return 'sqf';
    case 'SQL':
      return 'sql';
    case 'STEP Part 21':
      return 'step21';
    case 'Scala':
      return 'scala';
    case 'Scheme':
      return 'scheme';
    case 'Scilab':
      return 'scilab';
    case 'Shell Session':
      return 'shell';
    case 'Smali':
      return 'smali';
    case 'Smalltalk':
      return 'smalltalk';
    case 'Stan':
      return 'stan';
    case 'Stata':
      return 'stata';
    case 'Stylus':
      return 'stylus';
    case 'SubUnit':
      return 'subunit';
    case 'Swift':
      return 'swift';
    case 'TOML':
      return 'ini';
    case 'TP':
      return 'tp';
    case 'Tagger Script':
      return 'taggerscript';
    case 'Tcl':
      return 'tcl';
    case 'Test Anything Protocol':
      return 'tap';
    case 'Thrift':
      return 'thrift';
    case 'Twig':
      return 'twig';
    case 'TypeScript':
      return 'typescript';
    case 'VBScript':
      return 'vbscript';
    case 'VBScript in HTML':
      return 'vbscript-html';
    case 'VHDL':
      return 'vhdl';
    case 'Vala':
      return 'vala';
    case 'Verilog':
      return 'verilog';
    case 'Vim Script':
      return 'vim';
    case 'Visual Basic .NET':
      return 'vbnet';
    case 'WebAssembly':
      return 'wasm';
    case 'Wolfram Language':
      return 'mathematica';
    case 'Wren':
      return 'wren';
    case 'X++':
      return 'axapta';
    case 'XL':
      return 'xl';
    case 'XML':
      return 'xml';
    case 'XQuery':
      return 'xquery';
    case 'YAML':
      return 'yaml';
    case 'Zephir':
      return 'zephir';
    case 'crmsh':
      return 'crmsh';
    case 'dsconfig':
      return 'dsconfig';
    default:
      return 'plaintext';
  }
};

const getLanguageClass = (language: Language) => {
  return `hljs language-${getClass(language)}`;
};

export default getLanguageClass;
