// Packages
import React from "react"
import { Font, Video } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import { TableProps, TableItem } from "../../components/TableProps"

const VideoPage = () => {
    const props = [
        {
            name: "src",
            type: "String",
            example: "http://video.com",
            default: "None",
            required: "Yes, if you want to use HTML video",
        },
        {
            name: "youtube",
            type: "String",
            example: "https://www.youtube.com/watch?v=RZsRgBGfXz0",
            default: "None",
            required: "Yes, if you want to use YouTube video",
        },
        {
            name: "width",
            type: "String value, Number or Variable",
            example: "300px",
            default: "100%",
            required: "No",
        },
        {
            name: "height",
            type: "String value, Number or Variable",
            example: "200px",
            default: "auto",
            required: "No",
        },
        {
            name: "autoPlay",
            type: "Boolean",
            example: "-",
            default: "false",
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
            name: "aspectRatio",
            type: "String value, Variable",
            example: "16/9",
            default: "None",
            required: "No",
        },
    ]

    return (
        <PageDemo title="Video" category="components" import="Video">
            <Font.H2>Autoplay</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Video
                        src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"
                        autoPlay
                    />
                </DemoContent>

                <DemoCode>
                    {
                        '<Video\n    src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"\n    autoPlay\n/>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Controls</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Video
                        src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"
                        controls
                    />
                </DemoContent>

                <DemoCode>
                    {
                        '<Video\n    src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"\n    controls\n/>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>YouTube</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <Video
                        youtube="https://www.youtube.com/watch?v=RZsRgBGfXz0"
                        aspectRatio="16/9"
                    />
                </DemoContent>

                <DemoCode>
                    {
                        '<Video\n    youtube="https://www.youtube.com/watch?v=RZsRgBGfXz0"\n    aspectRatio="16/9"\n/>'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default VideoPage
