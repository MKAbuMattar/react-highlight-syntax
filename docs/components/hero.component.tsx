import { Link } from 'nextra-theme-docs';
import { ImNpm } from 'react-icons/im';
import { IoDocumentTextOutline } from 'react-icons/io5';

export default function Hero() {
  return (
    <section className="w-full h-[90dvh] sm:h-[80dvh] flex flex-col gap-12 items-center justify-center">
      <section className="w-full flex flex-col gap-6 items-center">
        <section className="w-full flex flex-col gap-4 items-center">
          <h1 className="text-center font-extrabold text-3xl sm:text-6xl">
            React Highlight Syntax
          </h1>
          <p className="text-center text-base sm:text-lg max-w-[95%] sm:max-w-[70%]">
            Bring your code snippets to life with stunning syntax highlighting.
            Elevate your website’s look and feel, and make your code more
            readable and attractive.
          </p>
        </section>
      </section>
      <section className="flex items-center gap-4">
        <Link
          className="py-2 px-3 flex items-center gap-2 border-[1px] border-red-600 cursor-pointer"
          style={{ textDecoration: 'none' }}
          href="/docs/introduction"
        >
          <IoDocumentTextOutline className="text-base sm:text-lg mb-1" />
          <span className="text-sm sm:text-base">Documentation</span>
        </Link>
        <a
          href="https://www.npmjs.com/package/react-highlight-syntax"
          target="_blank"
          rel="norefferer"
          className="py-2 px-3 flex items-center rounded gap-2 cursor-pointer"
        >
          <ImNpm className="text-base sm:text-lg mb-1" />
          <span className="text-sm sm:text-base">Use with npm</span>
        </a>
      </section>
    </section>
  );
}
