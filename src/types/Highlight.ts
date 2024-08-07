import { ElementType } from 'react';

import { CopyBtnTheme } from './Copy';

type Language =
  | 'Properties'
  | '1CEnterprise'
  | 'ARMAssembly'
  | 'AVRAssembly'
  | 'ActionScript'
  | 'Ada'
  | 'AngelScript'
  | 'ApacheAccessLog'
  | 'ApacheConfig'
  | 'AppleScript'
  | 'ArcGISArcade'
  | 'Arduino'
  | 'AsciiDoc'
  | 'AspectJ'
  | 'AugmentedBackusNaurForm'
  | 'AutoHotkey'
  | 'AutoIt'
  | 'Awk'
  | 'BASIC'
  | 'BackusNaurForm'
  | 'Bash'
  | 'BatchFile(DOS)'
  | 'Brainfuck'
  | 'C'
  | 'C#'
  | 'C++'
  | 'CAL'
  | 'CMake'
  | 'CSP'
  | 'CSS'
  | 'CacheObjectScript'
  | 'CapnProto'
  | 'Ceylon'
  | 'Clean'
  | 'Clojure'
  | 'ClojureREPL'
  | 'CoffeeScript'
  | 'Coq'
  | 'Crystal'
  | 'D'
  | 'DNSZone'
  | 'Dart'
  | 'Delphi'
  | 'DeviceTree'
  | 'Diff'
  | 'Django'
  | 'Dockerfile'
  | 'Dust'
  | 'ERB(EmbeddedRuby)'
  | 'Elixir'
  | 'Elm'
  | 'Erlang'
  | 'ErlangREPL'
  | 'ExcelFormulae'
  | 'ExtendedBackusNaurForm'
  | 'F#'
  | 'FIX'
  | 'Flix'
  | 'Fortran'
  | 'Gcode(ISO6983)'
  | 'GAMS'
  | 'GAUSS'
  | 'GLSL'
  | 'GML'
  | 'Gherkin'
  | 'Go'
  | 'Golo'
  | 'Gradle'
  | 'GraphQL'
  | 'Groovy'
  | 'HAML'
  | 'HSP'
  | 'HTML'
  | 'HTTP'
  | 'Handlebars'
  | 'Haskell'
  | 'Haxe'
  | 'Hy'
  | 'INI'
  | 'IRPF90'
  | 'ISBL'
  | 'Inform7'
  | 'IntelX86Assembly'
  | 'JBossCLI'
  | 'JSON'
  | 'Java'
  | 'JavaScript'
  | 'Julia'
  | 'JuliaREPL'
  | 'Kotlin'
  | 'LDIF'
  | 'LLVMIR'
  | 'LSL(LindenScriptingLanguage)'
  | 'LaTeX'
  | 'Lasso'
  | 'Leaf'
  | 'Less'
  | 'Lisp'
  | 'LiveCode'
  | 'LiveScript'
  | 'Lua'
  | 'MEL'
  | 'MIPSAssembly'
  | 'Makefile'
  | 'Markdown'
  | 'Matlab'
  | 'Maxima'
  | 'Mercury'
  | 'MicrotikRouterOSScript'
  | 'Mizar'
  | 'Mojolicious'
  | 'Monkey'
  | 'MoonScript'
  | 'N1QL'
  | 'NSIS'
  | 'NestedText'
  | 'NginxConfig'
  | 'Nim'
  | 'Nix'
  | 'NodeREPL'
  | 'OCaml'
  | 'ObjectiveC'
  | 'OpenSCAD'
  | 'OracleRulesLanguage'
  | 'Oxygene'
  | 'PHP'
  | 'PHPTemplate'
  | 'PLpgSQL'
  | 'PacketFilterConfig'
  | 'Parser3'
  | 'Perl'
  | 'PlainText'
  | 'Pony'
  | 'PostgreSQL'
  | 'PowerShell'
  | 'Processing'
  | 'Prolog'
  | 'ProtocolBuffers'
  | 'Puppet'
  | 'PureBASIC'
  | 'Python'
  | 'PythonREPL'
  | 'PythonProfiler'
  | 'Q'
  | 'QML'
  | 'R'
  | 'ReasonML'
  | 'RenderManRIB'
  | 'RenderManRSL'
  | 'Roboconf'
  | 'Ruby'
  | 'Rust'
  | 'SAS'
  | 'SCSS'
  | 'SML(StandardML)'
  | 'SQF'
  | 'SQL'
  | 'STEPPart21'
  | 'Scala'
  | 'Scheme'
  | 'Scilab'
  | 'ShellSession'
  | 'Smali'
  | 'Smalltalk'
  | 'Stan'
  | 'Stata'
  | 'Stylus'
  | 'SubUnit'
  | 'Swift'
  | 'TOML'
  | 'TP'
  | 'TaggerScript'
  | 'Tcl'
  | 'TestAnythingProtocol'
  | 'Thrift'
  | 'Twig'
  | 'TypeScript'
  | 'VBScript'
  | 'VBScriptInHTML'
  | 'VHDL'
  | 'Vala'
  | 'Verilog'
  | 'VimScript'
  | 'VisualBasicNET'
  | 'WebAssembly'
  | 'WolframLanguage'
  | 'Wren'
  | 'X++'
  | 'XL'
  | 'XML'
  | 'XQuery'
  | 'YAML'
  | 'Zephir'
  | 'Crmsh'
  | 'Dsconfig';

type Theme =
  | '1cLight'
  | 'A11yDark'
  | 'A11yLight'
  | 'Agate'
  | 'AnOldHope'
  | 'Androidstudio'
  | 'ArduinoLight'
  | 'Arta'
  | 'Ascetic'
  | 'AtomOneDarkReasonable'
  | 'AtomOneDark'
  | 'AtomOneLight'
  | 'Base163024'
  | 'Base16Apathy'
  | 'Base16Apprentice'
  | 'Base16Ashes'
  | 'Base16AtelierCaveLight'
  | 'Base16AtelierCave'
  | 'Base16AtelierDuneLight'
  | 'Base16AtelierDune'
  | 'Base16AtelierEstuaryLight'
  | 'Base16AtelierEstuary'
  | 'Base16AtelierForestLight'
  | 'Base16AtelierForest'
  | 'Base16AtelierHeathLight'
  | 'Base16AtelierHeath'
  | 'Base16AtelierLakesideLight'
  | 'Base16AtelierLakeside'
  | 'Base16AtelierPlateauLight'
  | 'Base16AtelierPlateau'
  | 'Base16AtelierSavannaLight'
  | 'Base16AtelierSavanna'
  | 'Base16AtelierSeasideLight'
  | 'Base16AtelierSeaside'
  | 'Base16AtelierSulphurpoolLight'
  | 'Base16AtelierSulphurpool'
  | 'Base16Atlas'
  | 'Base16Bespin'
  | 'Base16BlackMetalBathory'
  | 'Base16BlackMetalBurzum'
  | 'Base16BlackMetalDarkFuneral'
  | 'Base16BlackMetalGorgoroth'
  | 'Base16BlackMetalImmortal'
  | 'Base16BlackMetalKhold'
  | 'Base16BlackMetalMarduk'
  | 'Base16BlackMetalMayhem'
  | 'Base16BlackMetalNile'
  | 'Base16BlackMetalVenom'
  | 'Base16BlackMetal'
  | 'Base16Brewer'
  | 'Base16Bright'
  | 'Base16Brogrammer'
  | 'Base16BrushTreesDark'
  | 'Base16BrushTrees'
  | 'Base16Chalk'
  | 'Base16Circus'
  | 'Base16ClassicDark'
  | 'Base16ClassicLight'
  | 'Base16Codeschool'
  | 'Base16Colors'
  | 'Base16Cupcake'
  | 'Base16Cupertino'
  | 'Base16Danqing'
  | 'Base16Darcula'
  | 'Base16DarkViolet'
  | 'Base16Darkmoss'
  | 'Base16Darktooth'
  | 'Base16Decaf'
  | 'Base16DefaultDark'
  | 'Base16DefaultLight'
  | 'Base16Dirtysea'
  | 'Base16Dracula'
  | 'Base16EdgeDark'
  | 'Base16EdgeLight'
  | 'Base16Eighties'
  | 'Base16Embers'
  | 'Base16EquilibriumDark'
  | 'Base16EquilibriumGrayDark'
  | 'Base16EquilibriumGrayLight'
  | 'Base16EquilibriumLight'
  | 'Base16Espresso'
  | 'Base16EvaDim'
  | 'Base16Eva'
  | 'Base16Flat'
  | 'Base16Framer'
  | 'Base16FruitSoda'
  | 'Base16Gigavolt'
  | 'Base16Github'
  | 'Base16GoogleDark'
  | 'Base16GoogleLight'
  | 'Base16GrayscaleDark'
  | 'Base16GrayscaleLight'
  | 'Base16GreenScreen'
  | 'Base16GruvboxDarkHard'
  | 'Base16GruvboxDarkMedium'
  | 'Base16GruvboxDarkPale'
  | 'Base16GruvboxDarkSoft'
  | 'Base16GruvboxLightHard'
  | 'Base16GruvboxLightMedium'
  | 'Base16GruvboxLightSoft'
  | 'Base16Hardcore'
  | 'Base16Harmonic16Dark'
  | 'Base16Harmonic16Light'
  | 'Base16HeetchDark'
  | 'Base16HeetchLight'
  | 'Base16Helios'
  | 'Base16Hopscotch'
  | 'Base16HorizonDark'
  | 'Base16HorizonLight'
  | 'Base16HumanoidDark'
  | 'Base16HumanoidLight'
  | 'Base16IaDark'
  | 'Base16IaLight'
  | 'Base16IcyDark'
  | 'Base16IrBlack'
  | 'Base16Isotope'
  | 'Base16Kimber'
  | 'Base16LondonTube'
  | 'Base16Macintosh'
  | 'Base16Marrakesh'
  | 'Base16Materia'
  | 'Base16MaterialDarker'
  | 'Base16MaterialLighter'
  | 'Base16MaterialPalenight'
  | 'Base16MaterialVivid'
  | 'Base16Material'
  | 'Base16MellowPurple'
  | 'Base16MexicoLight'
  | 'Base16Mocha'
  | 'Base16Monokai'
  | 'Base16Nebula'
  | 'Base16Nord'
  | 'Base16Nova'
  | 'Base16Ocean'
  | 'Base16Oceanicnext'
  | 'Base16OneLight'
  | 'Base16Onedark'
  | 'Base16OutrunDark'
  | 'Base16PapercolorDark'
  | 'Base16PapercolorLight'
  | 'Base16Paraiso'
  | 'Base16Pasque'
  | 'Base16Phd'
  | 'Base16Pico'
  | 'Base16Pop'
  | 'Base16Porple'
  | 'Base16Qualia'
  | 'Base16Railscasts'
  | 'Base16Rebecca'
  | 'Base16RosPineDawn'
  | 'Base16RosPineMoon'
  | 'Base16RosPine'
  | 'Base16Sagelight'
  | 'Base16Sandcastle'
  | 'Base16SetiUi'
  | 'Base16Shapeshifter'
  | 'Base16SilkDark'
  | 'Base16SilkLight'
  | 'Base16Snazzy'
  | 'Base16SolarFlareLight'
  | 'Base16SolarFlare'
  | 'Base16SolarizedDark'
  | 'Base16SolarizedLight'
  | 'Base16Spacemacs'
  | 'Base16Summercamp'
  | 'Base16SummerfruitDark'
  | 'Base16SummerfruitLight'
  | 'Base16SynthMidnightTerminalDark'
  | 'Base16SynthMidnightTerminalLight'
  | 'Base16Tango'
  | 'Base16Tender'
  | 'Base16TomorrowNight'
  | 'Base16Tomorrow'
  | 'Base16Twilight'
  | 'Base16UnikittyDark'
  | 'Base16UnikittyLight'
  | 'Base16Vulcan'
  | 'Base16Windows10Light'
  | 'Base16Windows10'
  | 'Base16Windows95Light'
  | 'Base16Windows95'
  | 'Base16WindowsHighContrastLight'
  | 'Base16WindowsHighContrast'
  | 'Base16WindowsNtLight'
  | 'Base16WindowsNt'
  | 'Base16Woodland'
  | 'Base16XcodeDusk'
  | 'Base16Zenburn'
  | 'CodepenEmbed'
  | 'ColorBrewer'
  | 'Dark'
  | 'Default'
  | 'Devibeans'
  | 'Docco'
  | 'Far'
  | 'Felipec'
  | 'Foundation'
  | 'GithubDarkDimmed'
  | 'GithubDark'
  | 'Github'
  | 'Gml'
  | 'Googlecode'
  | 'GradientDark'
  | 'GradientLight'
  | 'Grayscale'
  | 'Hybrid'
  | 'Idea'
  | 'IntellijLight'
  | 'IrBlack'
  | 'IsblEditorDark'
  | 'IsblEditorLight'
  | 'KimbieDark'
  | 'KimbieLight'
  | 'Lightfair'
  | 'Lioshi'
  | 'Magula'
  | 'MonoBlue'
  | 'MonokaiSublime'
  | 'Monokai'
  | 'NightOwl'
  | 'NnfxDark'
  | 'NnfxLight'
  | 'Nord'
  | 'Obsidian'
  | 'PandaSyntaxDark'
  | 'PandaSyntaxLight'
  | 'ParaisoDark'
  | 'ParaisoLight'
  | 'Purebasic'
  | 'QtcreatorDark'
  | 'QtcreatorLight'
  | 'Rainbow'
  | 'Routeros'
  | 'SchoolBook'
  | 'ShadesOfPurple'
  | 'Srcery'
  | 'StackoverflowDark'
  | 'StackoverflowLight'
  | 'Sunburst'
  | 'TokyoNightDark'
  | 'TokyoNightLight'
  | 'TomorrowNightBlue'
  | 'TomorrowNightBright'
  | 'Vs'
  | 'Vs2015'
  | 'Xcode'
  | 'Xt256';

type HighlightProps = {
  tag?: ElementType;
  language?: Language;
  theme?: Theme;
  copy?: boolean;
  copyBtnTheme?: CopyBtnTheme;
  children: string;
  [x: string]: any;
};

export { Language, Theme };

export default HighlightProps;
