const containers = [
    {
        title: "Container",
        url: "demo-main",
        code: "<Wrapper>\n    <Main>\n        Container\n    </Main>\n</Wrapper>",
    },
    {
        title: "Container with aside on the left",
        url: "demo-aside-left",
        code: '<Wrapper template="aside-left">\n    <Aside template="aside-left">\n\n    </Aside>\n\n    <Main template="aside-left">\n        \n    </Main>\n</Wrapper>',
    },
    {
        title: "Container with aside on the right",
        url: "demo-aside-right",
        code: '<Wrapper template="aside-right">\n    <Main template="aside-right">\n        \n    </Main>\n\n    <Aside template="aside-right">\n    \n    </Aside>\n</Wrapper>',
    },
    {
        title: "Container with aside on both sides",
        url: "demo-both-sides",
        code: '<Wrapper template="both-sides">\n    <Aside template="both-sides">\n        \n    </Aside>\n\n    <Main template="both-sides">\n        \n    </Main>\n\n    <Aside template="both-sides" last>\n        \n    </Aside>\n</Wrapper>',
    },
    {
        title: "Container for form pages",
        url: "demo-container-form",
        code: '<Wrapper template="form">\n    <Main template="form">\n        \n    </Main>\n</Wrapper>',
    },
]

export default containers
