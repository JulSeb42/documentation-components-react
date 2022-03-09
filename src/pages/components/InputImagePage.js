// Packages
import React, { useState } from "react"
import { InputImage } from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import { TableProps, TableItem } from "../../components/TableProps"
import DemoItem from "../../components/DemoItem"

const InputImagePage = () => {
    // src, alt, iconEmpty, iconHover, id, onChange
    const props = [
        {
            name: "src",
            type: "String",
            example: "https://image.com",
            default: "None",
            required: "Yes",
        },
        {
            name: "alt",
            type: "String",
            example: "Picture",
            default: "None",
            required: "Yes",
        },
        {
            name: "onChange",
            type: "Function",
            example: "e => handleImage(e)",
            default: "None",
            required: "Yes",
        },
        {
            name: "id",
            type: "String",
            example: "input-image",
            default: "None",
            required: "Yes",
        },
        {
            name: "iconEmpty",
            type: "String",
            example: "avatar",
            default: "None",
            required:
                "Only if you want to change the icon when the input is empty",
        },
        {
            name: "iconHover",
            type: "String",
            example: "edit",
            default: "None",
            required:
                "Only if you want to change the icon when user hovers on the input",
        },
        {
            name: "Input props",
            type: "-",
            example: "All the props from the Input component",
            default: "-",
            required: "-",
        },
    ]

    // Handle image
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
        <PageDemo title="InputImage" category="components" import="InputImage">
            <DemoItem
                code={
                    '// Handle image\nconst [image, setImage] = useState("")\n\nconst handleImage = e => {\n    if (e.target.files[0]) {\n        setImage(e.target.files[0])\n        const reader = new FileReader()\n        reader.addEventListener("load", () => {\n            setImage(reader.result)\n        })\n        reader.readAsDataURL(e.target.files[0])\n    }\n}\n\n<InputImage\n    label="Image"\n    src={image}\n    alt="Alt"\n    onChange={e => handleImage(e)}\n    id="image"\n/>'
                }
            >
                <InputImage
                    label="Image"
                    src={image}
                    alt="Alt"
                    onChange={e => handleImage(e)}
                    id="image"
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

export default InputImagePage
