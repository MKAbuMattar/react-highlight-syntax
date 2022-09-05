import type { NextPage } from 'next';

import ReactHighlightSyntax, {Language} from 'react-highlight-syntax';

const code = `const foo: string = 'bar';
const baz: number = 42;
const qux: boolean = true;
const quux: null = null;
const corge: undefined = undefined;
const grault: symbol = Symbol('grault');
const garply: bigint = 123n;
const waldo: object = { waldo: true };
const fred: any = 'fred';
const plugh: unknown = 'plugh';
const xyzzy: never = undefined;
const thud: void = undefined;
`;

const Home: NextPage = () => {
  return (
    <>
      <ReactHighlightSyntax
        language={'TypeScript'}
        theme={'NnfxDark'}
        copy={true}
        copyBtnTheme={'Dark'}
      >
        {code}
      </ReactHighlightSyntax>
    </>
  );
};

export default Home;
