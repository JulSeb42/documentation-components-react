// Packages
import React, { useState } from "react"
import { InputImage } from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

function InputImageDemo() {
    const [image, setImage] = useState("")

    const handleImage = e => {
        if (e.target.files[0]) {
            setImage(e.target.files[0])
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                setImage(reader.result)
            })
            reader.readAsDataURL(e.target.files[0])
        }
    }

    return (
        <>
            <DemoContainer>
                <DemoContent>
                    <InputImage
                        label="Image"
                        src={image}
                        onChange={e => handleImage(e)}
                        id="image"
                    />
                </DemoContent>

                <DemoCode>
                    {
                        'const [image, setImage] = useState("")\n\nconst handleImage = e => {\n    if (e.target.files[0]) {\n        setImage(e.target.files[0])\n        const reader = new FileReader()\n        reader.addEventListener("load", () => {\n            setImage(reader.result)\n        })\n        reader.readAsDataURL(e.target.files[0])\n    }\n}\n\nreturn (\n    <InputImage\n        label="Image"\n        src={image}\n        onChange={e => handleImage(e)}\n        id="image"\n    />\n)'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>src</td>
                    <td>Function</td>
                    <td>See example</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>onChange</td>
                    <td>Function</td>
                    <td>See example</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>id</td>
                    <td>String</td>
                    <td>See example</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>String</td>
                    <td>Profile picture</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>helper</td>
                    <td>String</td>
                    <td>Upload your profile picture</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
            </TableProps>
        </>
    )
}

export default InputImageDemo
