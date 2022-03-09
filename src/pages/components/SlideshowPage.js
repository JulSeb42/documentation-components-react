// Packages
import React, { useState } from "react"
import {
    SlideshowContainer,
    Slideshow,
    SlideshowButton,
    SlideshowItem,
    SlideshowPaginationContainer,
    SlideshowPaginationButton,
    Image
} from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const SlideshowPage = () => {
    // width, height, position, type (button), size (pagination button), active (pagination button), onClick (button and pagination button), children (item),
    const props = [
        {
            name: "width (SlideshowContainer)",
            type: "String value",
            example: "300px",
            default: "100%",
            required: "No",
        },
        {
            name: "children (SlideshowItem)",
            type: "Any",
            example: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "active (SlideshowItem)",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "Yes",
        },
        {
            name: "width (SlideshowItem)",
            type: "String value",
            example: "200px",
            default: "100%",
            required: "No",
        },
        {
            name: "height (SlideshowItem)",
            type: "String value",
            example: "100px",
            default: "70vh",
            required: "No",
        },
        {
            name: "position (SlideshowItem)",
            type: "String",
            example: "previous, active, next",
            default: "None",
            required: "Yes",
        },
        {
            name: "type (SlideshowButton)",
            type: "string",
            example: "prev, next",
            default: "None",
            required: "Yes",
        },
        {
            name: "onClick (SlideshowButton)",
            type: "Function",
            example: "handlePrev",
            default: "None",
            required: "Yes",
        },
        {
            name: "onClick (SlideshowPaginationButton)",
            type: "Function",
            example: "() => setActive(3)",
            default: "None",
            required: "Yes",
        },
        {
            name: "size (SlideshowPaginationButton)",
            type: "Number",
            example: "16",
            default: "8",
            required: "No",
        },
        {
            name: "active (SlideshowPaginationButton)",
            type: "Boolean",
            example: "-",
            default: "false",
            required: "Yes",
        },
    ]

    const [active, setActive] = useState(1)

    const handleNext = () => setActive(active === 3 ? 1 : active + 1)
    const handlePrev = () => setActive(active !== 1 ? active - 1 : 3)
    
    return (
        <PageDemo
            title="Slideshow"
            category="components"
            import="SlideshowContainer, Slideshow, SlideshowButton, SlideshowItem, SlideshowPaginationContainer, SlideshowPaginationButton"
        >
            <DemoItem
                code={
                    'const [active, setActive] = useState(1)\n\nconst handleNext = () => setActive(active === 3 ? 1 : active + 1)\nconst handlePrev = () => setActive(active !== 1 ? active - 1 : 3)\n\n<SlideshowContainer>\n    <Slideshow>\n        <SlideshowButton type="prev" onClick={handlePrev} />\n\n        <SlideshowItem\n            position={\n                active === 1\n                    ? "active"\n                    : active > 1\n                    ? "previous"\n                    : "next"\n            }\n        >\n            <Image\n                src="https://images.unsplash.com/photo-1643186042811-63a2b94c7f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"\n                alt="Image 1"\n            />\n        </SlideshowItem>\n\n        <SlideshowItem\n            position={\n                active === 2\n                    ? "active"\n                    : active > 2\n                    ? "previous"\n                    : "next"\n            }\n        >\n            <Image\n                src="https://images.unsplash.com/photo-1643302067557-c88dc1549591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"\n                alt="Image 2"\n            />\n        </SlideshowItem>\n\n        <SlideshowItem\n            position={\n                active === 3\n                    ? "active"\n                    : active > 3\n                    ? "previous"\n                    : "next"\n            }\n        >\n            <Image\n                src="https://images.unsplash.com/photo-1643285191290-23690402b6a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"\n                alt="Image 3"\n            />\n        </SlideshowItem>\n\n        <SlideshowButton type="next" onClick={handleNext} />\n    </Slideshow>\n\n    <SlideshowPaginationContainer>\n        <SlideshowPaginationButton\n            active={active === 1 && true}\n            onClick={() => setActive(1)}\n        />\n\n        <SlideshowPaginationButton\n            active={active === 2 && true}\n            onClick={() => setActive(2)}\n        />\n\n        <SlideshowPaginationButton\n            active={active === 3 && true}\n            onClick={() => setActive(3)}\n        />\n    </SlideshowPaginationContainer>\n</SlideshowContainer>'
                }
            >
                <SlideshowContainer>
                    <Slideshow>
                        <SlideshowButton type="prev" onClick={handlePrev} />

                        <SlideshowItem
                            position={
                                active === 1
                                    ? "active"
                                    : active > 1
                                    ? "previous"
                                    : "next"
                            }
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1643186042811-63a2b94c7f98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                                alt="Image 1"
                            />
                        </SlideshowItem>

                        <SlideshowItem
                            position={
                                active === 2
                                    ? "active"
                                    : active > 2
                                    ? "previous"
                                    : "next"
                            }
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1643302067557-c88dc1549591?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDV8Q0R3dXdYSkFiRXd8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60"
                                alt="Image 2"
                            />
                        </SlideshowItem>

                        <SlideshowItem
                            position={
                                active === 3
                                    ? "active"
                                    : active > 3
                                    ? "previous"
                                    : "next"
                            }
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1643285191290-23690402b6a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                                alt="Image 3"
                            />
                        </SlideshowItem>

                        <SlideshowButton type="next" onClick={handleNext} />
                    </Slideshow>

                    <SlideshowPaginationContainer>
                        <SlideshowPaginationButton
                            active={active === 1 && true}
                            onClick={() => setActive(1)}
                        />

                        <SlideshowPaginationButton
                            active={active === 2 && true}
                            onClick={() => setActive(2)}
                        />

                        <SlideshowPaginationButton
                            active={active === 3 && true}
                            onClick={() => setActive(3)}
                        />
                    </SlideshowPaginationContainer>
                </SlideshowContainer>
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

