// Imports
import React from "react"
import { Variables, Grid, Image } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const ImagePage = () => {
    // Props
    //  fit   caption
    const props = [
        {
            name: "src",
            type: "String",
            example: "/cover.jpg",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "alt",
            type: "String",
            example: "Cover image",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "width",
            type: "String, Number or Variable",
            example: "400",
            possible: "-",
            default: "100%",
            required: "No",
        },
        {
            name: "height",
            type: "String, Number or Variable",
            example: "30vw",
            possible: "-",
            default: "auto",
            required: "No",
        },
        {
            name: "fit",
            type: "String",
            example: "cover",
            possible:
                '"fill" | "contain" | "cover" | "none" | "scale-down" | "inherit" | "initial" | "revert" | "revert-layer" | "unset"',
            default: "fill",
            required: "No",
        },
        {
            name: "caption",
            type: "String",
            example: "Cover image",
            possible: "-",
            default: "None",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Image" back="/components" component="Image">
            <DemoItem
                title="Auto height"
                code={
                    '<Image\n    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"\n    alt="alt"\n/>\n\n<Image\n    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"\n    alt="alt"\n    caption="Caption"\n/>'
                }
            >
                <Grid gap={Variables.Spacers.S}>
                    <Image
                        src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                        alt="alt"
                    />

                    <Image
                        src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                        alt="alt"
                        caption="Caption"
                    />
                </Grid>
            </DemoItem>

            <DemoItem
                title="Cover"
                code={
                    '<Image \n    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" \n    alt="alt" \n    height={300} \n    fit="cover" \n/> \n \n<Image \n    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" \n    alt="alt" \n    caption="Caption" \n    height={300} \n    fit="cover" \n/>'
                }
            >
                <Grid gap={Variables.Spacers.S}>
                    <Image
                        src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                        alt="alt"
                        height={300}
                        fit="cover"
                    />

                    <Image
                        src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                        alt="alt"
                        caption="Caption"
                        height={300}
                        fit="cover"
                    />
                </Grid>
            </DemoItem>

            <DemoItem
                title="Contain"
                code={
                    '<Image \n    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" \n    alt="alt" \n    height={300} \n    fit="contain" \n/> \n \n<Image \n    src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" \n    alt="alt" \n    caption="Caption" \n    height={300} \n    fit="contain" \n/>'
                }
            >
                <Grid gap={Variables.Spacers.S}>
                    <Image
                        src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                        alt="alt"
                        height={300}
                        fit="contain"
                    />

                    <Image
                        src="https://images.unsplash.com/photo-1643028468604-858ea2a9c111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
                        alt="alt"
                        caption="Caption"
                        height={300}
                        fit="contain"
                    />
                </Grid>
            </DemoItem>

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default ImagePage
