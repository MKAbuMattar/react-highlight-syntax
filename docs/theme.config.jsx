export default {
  logo: (
    <div>
      <span style={{ fontWeight: '900', fontSize: '1.3rem' }}>
        React Highlight Syntax
      </span>
    </div>
  ),
  project: {
    link: 'https://github.com/MKAbuMattar/react-highlight-syntax',
  },
  primaryHue: 360,
  useNextSeoProps() {
    return {
      title: 'React Hightlight Syntax',
    };
  },
  footer: {
    text: (
      <div
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        <span>
          MIT {new Date().getFullYear()} ©{' '}
          <a
            href="https://github.com/MKAbuMattar/react-highlight-syntax"
            target="_blank"
          >
            React Highlight Syntax
          </a>
          .
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.3rem' }}>
          <span>Designed by</span>
          <a href="https://www.contawo.com/" target="_blank" rel="norefferer">
            @contawo
          </a>
        </div>
      </div>
    ),
  },
  feedback: {
    content: <span>Any questions? Give us feedback</span>,
    labels: 'feedback',
  },
  editLink: {
    text: 'Edit this page on Github',
  },
  docsRepositoryBase: 'https://github.com/MKAbuMattar/react-highlight-syntax',
};
