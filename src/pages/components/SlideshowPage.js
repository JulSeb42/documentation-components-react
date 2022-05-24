// Imports
import React from "react"
import { Variables, Slideshow, Image } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"
import possible from "../../data/possible"

const SlideshowPage = () => {
    const imagesLandscape = [
        "https://images.unsplash.com/photo-1647774973248-0e25559f3b6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1647821172233-d1b0d2926b1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1647831597506-3f9071cbbd6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1647476699575-a25db189e3b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1617906121854-0f6dc6429f52?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1647427627208-0fb0b1699f28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE1fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    ]

    const imagesPortrait = [
        "https://images.unsplash.com/photo-1647725280666-bb7f94a15d69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1647831591495-2f9ce7dd3d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDN8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1647831570034-51d43eac0694?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1647464884405-42bbd541bc17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1647458792028-f9b3599d4208?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1647599708318-1b267bf44fd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1646330685088-d8a402b0dcc2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    ]

    const demo = [
        {
            title: "Single",
            code: '<Slideshow controls pagination hideButtonsMobile speed={400}>\n    <Image src="url" alt="Img" fit="cover" height="100%" />\n</Slideshow>',
            demo: (
                <Slideshow controls pagination hideButtonsMobile speed={400}>
                    {imagesLandscape.map((image, i) => (
                        <Image
                            src={image}
                            key={i}
                            alt="Img"
                            fit="cover"
                            height="100%"
                        />
                    ))}
                </Slideshow>
            ),
        },
        {
            title: "Multi",
            // eslint-disable-next-line
            code: '<Slideshow controls show={3} height="70vh" speed={200}>\n    <Image\n        src="url"\n        fit="cover"\n        height="100%"\n        style={{ padding: `0 ${Variables.Spacers.XS}` }}\n        alt="Img"\n    />\n</Slideshow>',
            demo: (
                <Slideshow controls show={3} height="70vh" speed={200}>
                    {imagesPortrait.map((image, i) => (
                        <Image
                            src={image}
                            key={i}
                            fit="cover"
                            height="100%"
                            style={{ padding: `0 ${Variables.Spacers.XS}` }}
                            alt="Img"
                        />
                    ))}
                </Slideshow>
            ),
        },
    ]

    const props = [
        {
            name: "children",
            type: "React component",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "show (Multi)",
            type: "Number",
            example: "2",
            possible: "-",
            default: "1",
            required: "No",
        },
        {
            name: "speed (in ms)",
            type: "Number",
            example: 300,
            possible: "-",
            default: 250,
            required: "No",
        },
        {
            name: "auto (in ms)",
            type: "Number",
            example: "3000",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "controls",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "controlsLarge",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "height",
            type: "String or Number",
            example: 800,
            possible: "-",
            default: "60vh",
            required: "No",
        },
        {
            name: "hideButtonsMobile",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "pagination",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
        {
            name: "dotSize",
            type: "Number",
            example: 16,
            possible: "-",
            default: 8,
            required: "No",
        },
        {
            name: "gapDots",
            type: "String or Number",
            example: "Variables.Spacers.XXS",
            possible: possible.spacers,
            default: "xs",
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Slideshow"
            back="/components"
            component="Slideshow"
        >
            {demo.map(demo => (
                <DemoItem
                    title={demo.title}
                    code={demo.code}
                    subtitle={demo.subtitle}
                    helper={demo.helper}
                    key={uuid()}
                >
                    {demo.demo}
                </DemoItem>
            ))}

            <TableProps>
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default SlideshowPage
