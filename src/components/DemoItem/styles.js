// Imports
import styled from "styled-components"
import { Variables, CodeContainer } from "tsx-library-julseb"

const DemoContainer = styled.div`
    border: 1px solid ${Variables.Colors.Gray200};
    width: 100%;
    max-width: 800px;
`

const DemoContent = styled.div`
    padding: ${Variables.Spacers.M};
`

const DemoCode = styled(CodeContainer)`
    width: 100%;
    overflow-x: scroll !important;
`

export { DemoContainer, DemoContent, DemoCode }
