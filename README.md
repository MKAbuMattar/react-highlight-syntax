![React Highlight Syntax](./assets/devicons-react-original.svg)

# React Highlight Syntax

[https://react-highlight-syntax.vercel.app/](https://react-highlight-syntax.vercel.app/)

***React Highlight Syntax*** is a React component that highlights syntax in a code block.

## Installation

```bash
# npm
npm install --save react-highlight-syntax

# yarn
yarn add react-highlight-syntax

# pnpm
pnpm add react-highlight-syntax
```

## Basic Usage

```jsx
import React from 'react';
import ReactHighlightSyntax from 'react-highlight-syntax';

const code = `const foo = 'bar';`;

const App = () => (
  return (
  <ReactHighlightSyntax 
    language={'JavaScript'}
    theme={'Base16Darcula'}
    copy={true}
    copyBtnTheme={'Dark'}
  >
    {code}
  </ReactHighlightSyntax>
  );
);

export default App;
```

## Isolate on to own component

```tsx
import React, { FC } from 'react';

import ReactHighlightSyntax, {
  Language,
  Theme,
  CopyBtnTheme,
} from 'react-highlight-syntax';

type Props = {
  language: Language;
  theme?: Theme;
  copy?: boolean;
  copyBtnTheme?: CopyBtnTheme;
  children: string;
};

const SyntaxHighlighter: FC<Props> = (props) => {
  const {
    language,
    theme = 'Base16Darcula',
    copy = true,
    copyBtnTheme = 'Dark',
    children,
  } = props;
  return (
    <ReactHighlightSyntax
      language={language}
      theme={theme}
      copy={copy}
      copyBtnTheme={copyBtnTheme}
    >
      {children}
    </ReactHighlightSyntax>
  );
};

export default React.memo(SyntaxHighlighter);
```

## Props

- `tag`: The tag name of the code block, default: `div`.
- `language`: the language to highlight code in. Available options are [here](#supported-languages).
- `theme`: the theme to use for highlighting. Available options are [here](#supported-themes).
- `copy`: whether to show the copy button, default: `false`.
- `copyBtnTheme`: the theme to use for the copy button. Available options are `Light` and `Dark`, default: `Light`.

### Supported Languages

<details>

- .properties
- 1C:Enterprise
- ARM Assembly
- AVR Assembly
- ActionScript
- Ada
- AngelScript
- Apache Access Log
- Apache config
- AppleScript
- ArcGIS Arcade
- Arduino
- Arduino
- AsciiDoc
- AspectJ
- Augmented Backus-Naur Form
- AutoHotkey
- AutoIt
- Awk
- BASIC
- Backus-Naur Form
- Bash
- Batch file (DOS)
- Brainfuck
- C
- C#
- C++
- C/AL
- CMake
- CSP
- CSS
- Cache Object Script
- Cap\'n Proto
- Ceylon
- Clean
- Clojure
- Clojure REPL
- CoffeeScript
- Coq
- Crystal
- D
- DNS Zone
- Dart
- Delphi
- Device Tree
- Diff
- Django
- Dockerfile
- Dust
- ERB (Embedded Ruby)
- Elixir
- Elm
- Erlang
- Erlang REPL
- Excel formulae
- Extended Backus-Naur Form
- F#
- FIX
- Flix
- Fortran
- G-code (ISO 6983)
- GAMS
- GAUSS
- GLSL
- GML
- Gherkin
- Go
- Golo
- Gradle
- GraphQL
- Groovy
- HAML
- HSP
- HTML
- HTTP
- Handlebars
- Haskell
- Haxe
- Hy
- INI
- IRPF90
- ISBL
- Inform 7
- Intel x86 Assembly
- JBoss CLI
- JSON
- Java
- JavaScript
- Julia
- Julia REPL
- Kotlin
- LDIF
- LLVM IR
- LSL (Linden Scripting Language)
- LaTeX
- Lasso
- Leaf
- Less
- Lisp
- LiveCode
- LiveScript
- Lua
- MEL
- MIPS Assembly
- Makefile
- Markdown
- Matlab
- Maxima
- Mercury
- Microtik RouterOS script
- Mizar
- Mojolicious
- Monkey
- MoonScript
- N1QL
- NSIS
- NestedText
- Nginx config
- Nim
- Nix
- Node REPL
- OCaml
- Objective-C
- OpenSCAD
- Oracle Rules Language
- Oxygene
- PHP
- PHP Template
- PL/pgSQL
- Packet Filter config
- Parser3
- Perl
- Plain text
- Pony
- PostgreSQL
- PowerShell
- Processing
- Prolog
- Protocol Buffers
- Puppet
- PureBASIC
- Python
- Python REPL
- Python profiler
- Q
- QML
- R
- ReasonML
- RenderMan RIB
- RenderMan RSL
- Roboconf
- Ruby
- Rust
- SAS
- SCSS
- SML (Standard ML)
- SQF
- SQL
- STEP Part 21
- Scala
- Scheme
- Scilab
- Shell Session
- Smali
- Smalltalk
- Stan
- Stata
- Stylus
- SubUnit
- Swift
- TOML
- TP
- Tagger Script
- Tcl
- Test Anything Protocol
- Thrift
- Twig
- TypeScript
- VBScript
- VBScript in HTML
- VHDL
- Vala
- Verilog
- Vim Script
- Visual Basic .NET
- WebAssembly
- Wolfram Language
- Wren
- X++
- XL
- XML
- XQuery
- YAML
- Zephir
- crmsh
- dsconfig
</details>

### Supported Themes

<details>

- A11yDark
- A11yLight
- Agate
- AnOldHope
- Androidstudio
- ArduinoLight
- Arta
- Ascetic
- AtomOneDarkReasonable
- AtomOneDark
- AtomOneLight
- Base163024
- Base16Apathy
- Base16Apprentice
- Base16Ashes
- Base16AtelierCaveLight
- Base16AtelierCave
- Base16AtelierDuneLight
- Base16AtelierDune
- Base16AtelierEstuaryLight
- Base16AtelierEstuary
- Base16AtelierForestLight
- Base16AtelierForest
- Base16AtelierHeathLight
- Base16AtelierHeath
- Base16AtelierLakesideLight
- Base16AtelierLakeside
- Base16AtelierPlateauLight
- Base16AtelierPlateau
- Base16AtelierSavannaLight
- Base16AtelierSavanna
- Base16AtelierSeasideLight
- Base16AtelierSeaside
- Base16AtelierSulphurpoolLight
- Base16AtelierSulphurpool
- Base16Atlas
- Base16Bespin
- Base16BlackMetalBathory
- Base16BlackMetalBurzum
- Base16BlackMetalDarkFuneral
- Base16BlackMetalGorgoroth
- Base16BlackMetalImmortal
- Base16BlackMetalKhold
- Base16BlackMetalMarduk
- Base16BlackMetalMayhem
- Base16BlackMetalNile
- Base16BlackMetalVenom
- Base16BlackMetal
- Base16Brewer
- Base16Bright
- Base16Brogrammer
- Base16BrushTreesDark
- Base16BrushTrees
- Base16Chalk
- Base16Circus
- Base16ClassicDark
- Base16ClassicLight
- Base16Codeschool
- Base16Colors
- Base16Cupcake
- Base16Cupertino
- Base16Danqing
- Base16Darcula
- Base16DarkViolet
- Base16Darkmoss
- Base16Darktooth
- Base16Decaf
- Base16DefaultDark
- Base16DefaultLight
- Base16Dirtysea
- Base16Dracula
- Base16EdgeDark
- Base16EdgeLight
- Base16Eighties
- Base16Embers
- Base16EquilibriumDark
- Base16EquilibriumGrayDark
- Base16EquilibriumGrayLight
- Base16EquilibriumLight
- Base16Espresso
- Base16EvaDim
- Base16Eva
- Base16Flat
- Base16Framer
- Base16FruitSoda
- Base16Gigavolt
- Base16Github
- Base16GoogleDark
- Base16GoogleLight
- Base16GrayscaleDark
- Base16GrayscaleLight
- Base16GreenScreen
- Base16GruvboxDarkHard
- Base16GruvboxDarkMedium
- Base16GruvboxDarkPale
- Base16GruvboxDarkSoft
- Base16GruvboxLightHard
- Base16GruvboxLightMedium
- Base16GruvboxLightSoft
- Base16Hardcore
- Base16Harmonic16Dark
- Base16Harmonic16Light
- Base16HeetchDark
- Base16HeetchLight
- Base16Helios
- Base16Hopscotch
- Base16HorizonDark
- Base16HorizonLight
- Base16HumanoidDark
- Base16HumanoidLight
- Base16IaDark
- Base16IaLight
- Base16IcyDark
- Base16IrBlack
- Base16Isotope
- Base16Kimber
- Base16LondonTube
- Base16Macintosh
- Base16Marrakesh
- Base16Materia
- Base16MaterialDarker
- Base16MaterialLighter
- Base16MaterialPalenight
- Base16MaterialVivid
- Base16Material
- Base16MellowPurple
- Base16MexicoLight
- Base16Mocha
- Base16Monokai
- Base16Nebula
- Base16Nord
- Base16Nova
- Base16Ocean
- Base16Oceanicnext
- Base16OneLight
- Base16Onedark
- Base16OutrunDark
- Base16PapercolorDark
- Base16PapercolorLight
- Base16Paraiso
- Base16Pasque
- Base16Phd
- Base16Pico
- Base16Pop
- Base16Porple
- Base16Qualia
- Base16Railscasts
- Base16Rebecca
- Base16RosPineDawn
- Base16RosPineMoon
- Base16RosPine
- Base16Sagelight
- Base16Sandcastle
- Base16SetiUi
- Base16Shapeshifter
- Base16SilkDark
- Base16SilkLight
- Base16Snazzy
- Base16SolarFlareLight
- Base16SolarFlare
- Base16SolarizedDark
- Base16SolarizedLight
- Base16Spacemacs
- Base16Summercamp
- Base16SummerfruitDark
- Base16SummerfruitLight
- Base16SynthMidnightTerminalDark
- Base16SynthMidnightTerminalLight
- Base16Tango
- Base16Tender
- Base16TomorrowNight
- Base16Tomorrow
- Base16Twilight
- Base16UnikittyDark
- Base16UnikittyLight
- Base16Vulcan
- Base16Windows10Light
- Base16Windows10
- Base16Windows95Light
- Base16Windows95
- Base16WindowsHighContrastLight
- Base16WindowsHighContrast
- Base16WindowsNtLight
- Base16WindowsNt
- Base16Woodland
- Base16XcodeDusk
- Base16Zenburn
- CodepenEmbed
- ColorBrewer
- Dark
- Default
- Devibeans
- Docco
- Far
- Felipec
- Foundation
- GithubDarkDimmed
- GithubDark
- Github
- Gml
- Googlecode
- GradientDark
- GradientLight
- Grayscale
- Hybrid
- Idea
- IntellijLight
- IrBlack
- IsblEditorDark
- IsblEditorLight
- KimbieDark
- KimbieLight
- Lightfair
- Lioshi
- Magula
- MonoBlue
- MonokaiSublime
- Monokai
- NightOwl
- NnfxDark
- NnfxLight
- Nord
- Obsidian
- PandaSyntaxDark
- PandaSyntaxLight
- ParaisoDark
- ParaisoLight
- Purebasic
- QtcreatorDark
- QtcreatorLight
- Rainbow
- Routeros
- SchoolBook
- ShadesOfPurple
- Srcery
- StackoverflowDark
- StackoverflowLight
- Sunburst
- TokyoNightDark
- TokyoNightLight
- TomorrowNightBlue
- TomorrowNightBright
- Vs
- Vs2015
- Xcode
- Xt256
</details>

## License

react-highlight-syntax is licensed under the [MIT License](./LICENSE).

Created with ??? by [@MKAbuMattar](https://github.com/MKAbuMattar).
