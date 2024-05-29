export default {
    logo: <div>
        <span style={{ fontWeight: "900", fontSize: "1.3rem" }}>React Highlight Syntax</span>
    </div>,
    project: {
        link: 'https://github.com/MKAbuMattar/react-highlight-syntax'
    },
    primaryHue: 360,
    useNextSeoProps() {
        return {
            title: "React Hightlight Syntax"
        }
    },
    footer: {
        text: (
            <div>
                <span>
                    MIT {new Date().getFullYear()} ©{' '}
                    <a href="https://github.com/MKAbuMattar/react-highlight-syntax" target="_blank">
                        React Highlight Syntax
                    </a>
                    .
                </span>
            </div>
        )
    },
    feedback: {
        content: (
            <span>Any questions? Give us feedback</span>
        ),
        labels: "feedback"
    },
    editLink: {
        text: "Edit this page on Github"
    },
    docsRepositoryBase: "https://github.com/MKAbuMattar/react-highlight-syntax"
}