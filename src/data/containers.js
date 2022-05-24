const containers = [
    {
        title: "Container",
        url: "demo-main",
        code: "<Wrapper>\n    <Main>\n        \n    </Main>\n</Wrapper>",
    },
    {
        title: "Container with aside on the left",
        url: "demo-aside-left",
        code: '<Wrapper template="2cols">\n    <Aside>\n        \n    </Aside>\n\n    <Main col={2}>\n        \n    </Main>\n</Wrapper>',
    },
    {
        title: "Container with aside on the right",
        url: "demo-aside-right",
        code: '<Wrapper template="2cols">\n    <Main>\n        \n    </Main>\n\n    <Aside col={2}>\n        \n    </Aside>\n</Wrapper>',
    },
    {
        title: "Container with aside on both sides",
        url: "demo-both-sides",
        code: '<Wrapper template="3cols">\n    <Aside col={1}>\n        \n    </Aside>\n\n    <Main col={2}>\n        \n    </Main>\n\n    <Aside col={3}>\n        \n    </Aside>\n</Wrapper>',
    },
    {
        title: "Container for form pages",
        url: "demo-container-form",
        code: "<Wrapper>\n    <Main width={400}>\n        \n    </Main>\n</Wrapper>",
    },
]

export default containers
