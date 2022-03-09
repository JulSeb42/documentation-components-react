// Packages
import React from "react"
import { Font, Icon } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import { TableProps, TableItem } from "../../components/TableProps"

const IconPage = () => {
    const props = [
        {
            name: "name",
            type: "String",
            example: "chevron-left",
            default: "None",
            required: "Yes",
        },
        {
            name: "size",
            type: "Number",
            example: "32",
            default: "None",
            required: "Yes",
        },
        {
            name: "color",
            type: "String or Variable",
            example: "blue",
            default: "currentColor",
            required: "No",
        },
    ]

    return (
        <PageDemo title="Icon" category="components" import="Icon">
            <Font.H2>How to use</Font.H2>
            <Font.P>
                Download SVG icons, and put them in the folder{" "}
                <code>/public/icons</code>. Then you can use this component
                normally.
            </Font.P>

            <Font.H2>Icon component</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Icon name="package" size={48} color="red" />
                </DemoContent>

                <DemoCode>
                    {'<Icon name="package" size={48} color="red" />'}
                </DemoCode>
            </DemoContainer>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>

            <Font.H2>Icon mixin</Font.H2>

            <Font.P>You can also use a mixin with styled-components:</Font.P>

            <DemoContainer>
                <DemoCode>
                    {'import { IconMixin } from "components-react-julseb"'}
                </DemoCode>
            </DemoContainer>

            <DemoContainer>
                <DemoCode>
                    {
                        // eslint-disable-next-line
                        'div:before {\n    ${IconMixin({\n        icon: "name-of-icon",\n        size: "12px",\n        color: "black",\n    })}\n}'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Cool icons libraries</Font.H2>

            <Font.List>
                <li>
                    <a
                        href="https://boxicons.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Boxicon
                    </a>
                </li>
                <li>
                    <a
                        href="https://iconsvg.xyz/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Icons SVG
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/astrit/css.gg"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        CSS GG
                    </a>
                </li>
            </Font.List>
        </PageDemo>
    )
}

export default IconPage
