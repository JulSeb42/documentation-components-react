// Packages
import React from "react"
import { Slideshow, Image, Variables } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const SlideshowPage = () => {
    const props = [
        {
            name: "children",
            type: "Any",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "show",
            type: "Number",
            example: "3",
            default: "None",
            required: "No",
        },
        {
            name: "auto",
            type: "Number (ms)",
            example: "3000",
            default: "None",
            required: "No",
        },
        {
            name: "speed",
            type: "Number (ms)",
            example: "100",
            default: "250",
            required: "No",
        },
        {
            name: "height",
            type: "String value or Variable",
            example: "30vw",
            default: "60vh",
            required: "No",
        },
        {
            name: "controls",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "controlsLarge",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "hideButtonsMobile",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
        {
            name: "pagination",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "No",
        },
    ]

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

    return (
        <PageDemo title="Slideshow" category="components" import="Slideshow">
            <DemoItem
                title="Full size slideshow"
                code={
                    '<Slideshow controls pagination hideButtonsMobile speed={400}>\n    {imagesLandscape.map((image, i) => (\n        <Image src={image} key={i} fit="cover" height="100%" />\n    ))}\n</Slideshow>'
                }
            >
                <Slideshow controls pagination hideButtonsMobile speed={400}>
                    {imagesLandscape.map((image, i) => (
                        <Image src={image} key={i} fit="cover" height="100%" />
                    ))}
                </Slideshow>
            </DemoItem>

            <DemoItem
                title="Multi"
                code={
                    // eslint-disable-next-line
                    '<Slideshow controls show={3} height="70vh" speed={200}>\n    {imagesPortrait.map((image, i) => (\n        <Image\n            src={image}\n            key={i}\n            fit="cover"\n            height="100%"\n            style={{ padding: `0 ${Variables.Spacers.XS}` }}\n        />\n    ))}\n</Slideshow>'
                }
            >
                <Slideshow controls show={3} height="70vh" speed={200}>
                    {imagesPortrait.map((image, i) => (
                        <Image
                            src={image}
                            key={i}
                            fit="cover"
                            height="100%"
                            style={{ padding: `0 ${Variables.Spacers.XS}` }}
                        />
                    ))}
                </Slideshow>
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default SlideshowPage
