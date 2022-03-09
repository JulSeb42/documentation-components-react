// Packages
import React from "react"
import { Video } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
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
            <DemoItem
                title="Autoplay"
                code={
                    '<Video\n    src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"\n    autoPlay\n/>'
                }
            >
                <Video
                    src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"
                    autoPlay
                />
            </DemoItem>

            <DemoItem
                title="Controls"
                code={
                    '<Video\n    src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"\n    controls\n/>'
                }
            >
                <Video
                    src="https://assets.mixkit.co/videos/preview/mixkit-animation-of-futuristic-devices-99786-large.mp4"
                    controls
                />
            </DemoItem>

            <DemoItem
                title="YouTube"
                code={
                    '<Video\n    youtube="https://www.youtube.com/watch?v=RZsRgBGfXz0"\n    aspectRatio="16/9"\n/>'
                }
            >
                <Video
                    youtube="https://www.youtube.com/watch?v=RZsRgBGfXz0"
                    aspectRatio="16/9"
                />
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default VideoPage
