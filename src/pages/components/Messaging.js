// Packages
import React from "react"
import styled from "styled-components"
import {
    MessagesContainer,
    EmptyContainer,
    ListMessages,
    Message,
    MessageInput,
    Font,
    Hr,
    Variables,
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

function MessagingDemo() {
    return (
        <>
            <P>
                The <code>Message</code> components use{" "}
                <a
                    href="https://www.npmjs.com/package/react-linkify"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    react-linkify
                </a>{" "}
                to convert links inside the message. Also, to scroll
                automatically to the bottom of the conversation, the{" "}
                <code>ListMessages</code> component uses{" "}
                <a
                    href="https://www.npmjs.com/package/react-scroll-to-bottom"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    react-scroll-to-bottom
                </a>{" "}
                package.
            </P>

            <Font.H2>With messages</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <MessagesContainer>
                        <ListMessages>
                            <Message type="received">
                                Message received https://julien-sebag.design/
                            </Message>

                            <Message type="sent">Message sent</Message>

                            <Message type="received">
                                Message received https://julien-sebag.design/
                            </Message>

                            <Message type="sent">
                                Message sent https://julien-sebag.design/
                            </Message>

                            <Message type="received">
                                Message received https://julien-sebag.design/
                            </Message>

                            <Message type="sent">Message sent</Message>

                            <Message type="received">
                                Message received https://julien-sebag.design/
                            </Message>

                            <Message type="sent">
                                Message sent https://julien-sebag.design/
                            </Message>

                            <Message type="received">
                                Message received https://julien-sebag.design/
                            </Message>

                            <Message type="sent">Message sent</Message>

                            <Message type="received">
                                Message received https://julien-sebag.design/
                            </Message>

                            <Message type="sent">
                                Message sent https://julien-sebag.design/
                            </Message>
                        </ListMessages>

                        <Hr />

                        <MessageInput placeholder="Type your message" />
                    </MessagesContainer>
                </DemoContent>

                <DemoCode>
                    {
                        '<MessagesContainer>\n    <ListMessages>\n        <Message type="received">\n            Message received https://julien-sebag.design/\n        </Message>\n\n        <Message type="sent">Message sent</Message>\n    </ListMessages>\n\n    <Hr />\n\n    <MessageInput placeholder="Type your message" />\n</MessagesContainer>'
                    }
                </DemoCode>
            </DemoContainer>

            <Font.H2>Empty state</Font.H2>

            <DemoContainer>
                <DemoContent>
                    <MessagesContainer>
                        <EmptyContainer>No message yet</EmptyContainer>

                        <Hr />

                        <MessageInput
                            placeholder="Type your message"
                            textbutton="Send"
                        />
                    </MessagesContainer>
                </DemoContent>

                <DemoCode>
                    {
                        '<MessagesContainer>\n    <EmptyContainer>No message yet</EmptyContainer>\n\n    <Hr />\n\n    <MessageInput placeholder="Type your message" textbutton="Send" />\n</MessagesContainer>'
                    }
                </DemoCode>
            </DemoContainer>

            <TableProps>
                <tr>
                    <td>type (Message)</td>
                    <td>String</td>
                    <td>received, sent</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>children (Message)</td>
                    <td>String</td>
                    <td>-</td>
                    <td>None</td>
                    <td>Yes</td>
                </tr>
                <tr>
                    <td>onSubmit (MessageInput)</td>
                    <td>Function</td>
                    <td>-</td>
                    <td>None</td>
                    <td>Yes, to send the message</td>
                </tr>
                <tr>
                    <td>textbutton (MessageInput)</td>
                    <td>String</td>
                    <td>Send</td>
                    <td>None</td>
                    <td>No, only if you want text instead of the icon</td>
                </tr>
                <tr>
                    <td>children (EmptyContainer)</td>
                    <td>Any</td>
                    <td>-</td>
                    <td>None</td>
                    <td>No</td>
                </tr>
            </TableProps>
        </>
    )
}

export default MessagingDemo
