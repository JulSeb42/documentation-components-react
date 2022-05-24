// Imports
import React, { useState } from "react"
import { InputImage } from "tsx-library-julseb"
import { v4 as uuid } from "uuid"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const InputImagePage = () => {
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

    const demo = [
        {
            title: "",
            code: 'const [image, setImage] = useState("")\n\nconst handleImage = e => {\n    if (e.target.files[0]) {\n        setImage(e.target.files[0])\n        const reader = new FileReader()\n        reader.addEventListener("load", () => {\n            setImage(reader.result)\n        })\n        reader.readAsDataURL(e.target.files[0])\n    }\n}\n\n<InputImage\n    label="Image"\n    src={image}\n    alt="Alt"\n    onChange={e => handleImage(e)}\n    id="image"\n/>',
            demo: (
                <InputImage
                    label="Image"
                    src={image}
                    alt="Alt"
                    onChange={e => handleImage(e)}
                    id="image"
                />
            ),
        },
    ]

    const props = [
        {
            name: "id",
            type: "String",
            example: "avatar",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "src",
            type: "String",
            example: "/images/avatar.jpg",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "alt",
            type: "String",
            example: "Avatar Julien Sebag",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "width",
            type: "String, Number or Variable",
            example: "120",
            possible: "-",
            default: "80",
            required: "No",
        },
        {
            name: "height",
            type: "String, Number or Variable",
            example: "120",
            possible: "-",
            default: "80",
            required: "No",
        },
        {
            name: "label",
            type: "String",
            example: "Upload your avatar",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "helper",
            type: "String",
            example: "Your picture can not exceed 5 mo",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "iconEmpty",
            type: "String",
            example: "empty",
            possible: "-",
            default: "user",
            required: "No",
        },
        {
            name: "iconHover",
            type: "String",
            example: "edit-alt",
            possible: "-",
            default: "edit",
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Input image"
            back="/components"
            component="InputImage"
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

export default InputImagePage
