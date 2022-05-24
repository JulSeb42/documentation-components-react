// Imports
import React from "react"
import { Font, CodeContainer, Grid } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"

const MixinsPage = () => {
    const allMixins = [
        {
            title: "Color",
            // eslint-disable-next-line
            code: '${Mixins.Color({\n    color: "primary" | "secondary" | "success" | "danger" | "warning" | "black" | "white" | "gray" | "current" | any string,\n})}',
        },
        {
            title: "Background",
            // eslint-disable-next-line
            code: '${Mixins.Background({\n    background: "primary" | "secondary" | "success" | "danger" | "warning" | "black" | "white" | "gray" | "current" | any string,\n})}',
        },
        {
            title: "TextColor",
            // eslint-disable-next-line
            code: '${Mixins.TextColor({\n    textColor: "primary" | "secondary" | "success" | "danger" | "warning" | "black" | "white" | "gray" | "current" | any string,\n})}',
        },
        {
            title: "Shadow",
            // eslint-disable-next-line
            code: '${Mixins.Shadow({\n    shadow: "xs" | "s" | "m" | "l" | "xl" | "xxl" | any string,\n})}',
        },
        {
            title: "Radius",
            // eslint-disable-next-line
            code: '${Mixins.Radius({\n    radius: "xs" | "s" | "m" | "l" | "xl" | "xxl" | "round" | "circle" | any string | any number,\n})}',
        },
        {
            title: "Icon",
            // eslint-disable-next-line
            code: '${Mixins.Icon({\n    icon: string,\n    size: number,\n    color: "primary" | "secondary" | "success" | "danger" | "warning" | "black" | "white" | "gray" | "current" | any string,\n})}',
        },
        {
            title: "Flexbox",
            // eslint-disable-next-line
            code: '${Mixins.Flexbox({\n    inline: boolean,\n    direction: string,\n    wrap: string,\n    justifyContent: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "end" | "left" | "right",\n    alignItems: "stretch" | "flex-start" | "flex-end" | "center" | "baseline" | "first baseline" | "last baseline" | "start" | "end" | "self-start" | "self end",\n    alignContent: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch" | "start" | "end" | "baseline" | "first baseline" | "unsafe",\n    gap: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | any string | any number,\n})}',
        },
        {
            title: "Grid",
            // eslint-disable-next-line
            code: '${Mixins.Grid({\n    inline: boolean,\n    col: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | any number | any string,\n    gap: "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | any string | any number,\n    rows: string,\n    areas: string,\n    justifyItems: "start" | "end" | "center" | "stretch",\n    alignItems: "start" | "end" | "center" | "stretch",\n    justifyContent: "start" | "end" | "center" | "stretch" | "space-around" | "space-between" | "space-evenly",\n    alignContent: "start" | "end" | "center" | "stretch" | "space-around" | "space-between" | "space-evenly",\n    padding: number | string,\n})}',
        },
    ]
    
    return (
        <PageComponent title="Mixins" back="/helpers">
            <Font.P>Mixins for styled components.</Font.P>

            <Grid gap="s">
                <Font.H4 as="h2">Import</Font.H4>

                <CodeContainer language="javascript">
                    {`import { Mixins } from "tsx-library-julseb"`}
                </CodeContainer>
            </Grid>

            {allMixins.map(mixin => (
                <Grid gap="s" key={uuid()}>
                    <Font.H4 as="h2">{mixin.title}</Font.H4>

                    <CodeContainer language="javascript">
                        {mixin.code}
                    </CodeContainer>
                </Grid>
            ))}
        </PageComponent>
    )
}

export default MixinsPage
