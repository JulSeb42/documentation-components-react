// Packages
import React from "react"
import { Video, Font } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function VideoDemo(props) {
    return (
        <>
            <Font.H2>HTML videos</Font.H2>

            <Font.H4>Autoplay</Font.H4>

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

            <Font.H4>With controls</Font.H4>

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

            <Font.H2>YouTube video</Font.H2>

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
                <tr>
                    <td>src</td>
                    <td>String</td>
                    <td>http://video.com</td>
                    <td>None</td>
                    <td>Yes, if you want to use HTML video</td>
                </tr>
                <tr>
                    <td>youtube</td>
                    <td>String</td>
                    <td>https://www.youtube.com/watch?v=RZsRgBGfXz0</td>
                    <td>None</td>
                    <td>Yes, if you want to use YouTube video</td>
                </tr>
                <tr>
                    <td>width</td>
                    <td>String value or variable</td>
                    <td>300px</td>
                    <td>100%</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>height</td>
                    <td>String value or variable</td>
                    <td>200px</td>
                    <td>auto</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>autoPlay</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>controls</td>
                    <td>Boolean</td>
                    <td>-</td>
                    <td>false</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>aspectRatio</td>
                    <td>String value or variable</td>
                    <td>16/9</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
            </TableProps>
        </>
    )
}

export default VideoDemo