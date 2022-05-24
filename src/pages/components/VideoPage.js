// Imports
import React from "react"
import { Video } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const VideoPage = () => {
    // Props
    // controls autoPlay
    const props = [
        {
            name: "src",
            type: "String",
            example: "/video.mp4",
            possible: "-",
            default: "None",
            required: "Yes, if the video is not hosted on YouTube",
        },
        {
            name: "youtube",
            type: "String",
            example: "https://www.youtube.com/watch?v=ZtONGk-ViRk",
            possible: "-",
            default: "None",
            required: "Yes, if the video is hosted on YouTube",
        },
        {
            name: "width",
            type: "String or Number",
            example: "300",
            possible: "-",
            default: "100%",
            required: "No",
        },
        {
            name: "height",
            type: "String or Number",
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
            name: "aspectRatio",
            type: "String",
            example: "16/9",
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
            name: "autoPlay",
            type: "Boolean",
            example: "-",
            possible: "-",
            default: "false",
            required: "No",
        },
    ]

    return (
        <PageComponent title="Video" back="/components" component="Video">
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
                title="Youtube"
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
                {props.map(item => (
                    <TableItem item={item} key={uuid()} />
                ))}
            </TableProps>
        </PageComponent>
    )
}

export default VideoPage
