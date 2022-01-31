// Packages
import React, { useState } from "react"
import styled from "styled-components"
import {
    SlideshowContainer,
    Slideshow,
    SlideshowItem,
    SlideshowButton,
    SlideshowPaginationContainer,
    SlideshowPaginationButton,
    Image,
    Font,
    Variables
} from "components-react-julseb"

// Components
import {
    DemoContainer,
    DemoContent,
    DemoCode,
} from "../../components/DemoContainer"
import TableProps from "../../components/TableProps"

const P = styled(Font.P)`
    code {
        color: ${Variables.Colors.Primary500};
        padding: ${Variables.Margins.XXS};
        background-color: ${Variables.Colors.Gray50};
        line-height: 1.8;
        border-radius: ${Variables.Radiuses.XS};
    }
`

function SlideshowDemo() {
    const [active, setActive] = useState(1)

    const handleNext = () => setActive(active === 3 ? 1 : active + 1)
    const handlePrev = () => setActive(active !== 1 ? active - 1 : 3)

    return (
        <>
            <P>The <code>SlideshowContainer</code> component is not mandatory, put it only if you want pagination.</P>
            <DemoContainer>
                <DemoContent>
                    <SlideshowContainer>
                        <Slideshow>
                            <SlideshowButton type="prev" onClick={handlePrev} />

                            <SlideshowItem
                                className={
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
                                className={
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
                                className={
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
                                className={active === 1 && "active"}
                                onClick={() => setActive(1)}
                            />

                            <SlideshowPaginationButton
                                className={active === 2 && "active"}
                                onClick={() => setActive(2)}
                            />

                            <SlideshowPaginationButton
                                className={active === 3 && "active"}
                                onClick={() => setActive(3)}
                            />
                        </SlideshowPaginationContainer>
                    </SlideshowContainer>
                </DemoContent>

                <DemoCode>
                    {
                        'const [active, setActive] = useState(1);\nconst handleNext = () => setActive(active === 3 ? 1 : active + 1);\nconst handlePrev = () => setActive(active !== 1 ? active - 1 : 3);\n\n<SlideshowContainer>\n    <Slideshow>\n        <SlideshowButton type="prev" onClick={handlePrev} />\n\n        <SlideshowItem\n            className={\n                active === 1 ? "active" : active > 1 ? "previous" : "next"\n            }\n        >\n            <Image src="link-to-img" alt="Image 1" />\n        </SlideshowItem>\n\n        <SlideshowItem\n            className={\n                active === 2 ? "active" : active > 2 ? "previous" : "next"\n            }\n        >\n            <Image src="link-to-img" alt="Image 2" />\n        </SlideshowItem>\n\n        <SlideshowItem\n            className={\n                active === 3 ? "active" : active > 3 ? "previous" : "next"\n            }\n        >\n            <Image src="link-to-img" alt="Image 3" />\n        </SlideshowItem>\n\n        <SlideshowButton type="next" onClick={handleNext} />\n    </Slideshow>\n\n    <SlideshowPaginationContainer>\n        <SlideshowPaginationButton\n            className={active === 1 && "active"}\n            onClick={() => setActive(1)}\n        />\n\n        <SlideshowPaginationButton\n            className={active === 2 && "active"}\n            onClick={() => setActive(2)}\n        />\n\n        <SlideshowPaginationButton\n            className={active === 3 && "active"}\n            onClick={() => setActive(3)}\n        />\n    </SlideshowPaginationContainer>\n</SlideshowContainer>'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>width (Slideshow)</td>
                    <td>String or variable</td>
                    <td>100px</td>
                    <td>100%</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>height (Slideshow)</td>
                    <td>String or variable</td>
                    <td>30vw</td>
                    <td>70vh</td>
                    <td>No</td>
                </tr>
                <tr>
                    <td>onClick (SlideshowButton)</td>
                    <td>Function</td>
                    <td>See example</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>className (SlideshowItem)</td>
                    <td>String</td>
                    <td>active</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>className (SlideshowPaginationButton)</td>
                    <td>String</td>
                    <td>active</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>onClick (SlideshowPaginationButton)</td>
                    <td>Function</td>
                    <td>See example</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
            </TableProps>
        </>
    )
}

export default SlideshowDemo
