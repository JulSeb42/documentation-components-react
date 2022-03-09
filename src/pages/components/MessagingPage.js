// Packages
import React from "react"
import {
    Font,
    MessagesContainer,
    EmptyContainer,
    ListMessages,
    Message,
    MessageInput,
} from "components-react-julseb"

// Components
import PageDemo from "../../components/PageDemo"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const MessagingPage = () => {
    const props = [
        {
            name: "type (Message)",
            type: "String",
            example: "sent or received",
            default: "None",
            required: "Yes",
        },
        {
            name: "date (Message)",
            type: "String",
            example: "2022-01-18",
            default: "None",
            required: "No",
        },
        {
            name: "time (Message)",
            type: "String",
            example: "11:17",
            default: "None",
            required: "No",
        },
        {
            name: "onSubmit (MessageInput)",
            type: "Function",
            example: "handleSubmit",
            default: "None",
            required: "Yes",
        },
        {
            name: "textButton (MessageInput)",
            type: "String",
            example: "Send",
            default: "None",
            required:
                "No, use it when you want to have text instead of an icon",
        },
        {
            name: "icon (MessageInput)",
            type: "String",
            example: "send",
            default: "None",
            required:
                "No, use it when you want a different icon that the one by default",
        },
    ]

    return (
        <PageDemo
            title="Messaging"
            category="components"
            import="MessagesContainer, EmptyContainer, ListMessages, Message, MessageInput"
        >
            <Font.P>
                Here we're using{" "}
                <a
                    href="https://www.npmjs.com/package/react-linkify"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    react-linkify
                </a>{" "}
                and{" "}
                <a
                    href="https://www.npmjs.com/package/react-scroll-to-bottom"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    react-scroll-to-bottom
                </a>{" "}
                packages.
            </Font.P>

            <DemoItem
                title="With messages"
                code={
                    '<MessagesContainer>\n    <ListMessages>\n        <Message type="sent" date="2022-03-09" time="17:25">\n            Message sent\n        </Message>\n\n        <Message type="received" date="2022-03-09" time="17:40">\n            Message received https://julien-sebag.design/\n        </Message>\n    </ListMessages>\n\n    <Hr />\n\n    <MessageInput placeholder="Type your message" />\n</MessagesContainer>'
                }
            >
                <MessagesContainer>
                    <ListMessages>
                        <Message type="sent" date="2022-03-09" time="17:25">
                            Message sent
                        </Message>

                        <Message type="received" date="2022-03-09" time="17:40">
                            Message received https://julien-sebag.design/
                        </Message>

                        <Message type="sent" date="2022-03-09" time="17:41">
                            Message sent https://julien-sebag.design/
                        </Message>

                        <Message type="received" date="2022-03-09" time="17:42">
                            Message received https://julien-sebag.design/
                        </Message>

                        <Message type="sent" date="2022-03-09" time="18:10">
                            Message sent
                        </Message>

                        <Message type="received" date="2022-03-09" time="18:20">
                            Message received https://julien-sebag.design/
                        </Message>

                        <Message type="sent" date="2022-03-09" time="18:22">
                            Message sent https://julien-sebag.design/
                        </Message>
                    </ListMessages>

                    <MessageInput placeholder="Type your message" />
                </MessagesContainer>
            </DemoItem>

            <DemoItem
                title="Empty"
                code={
                    '<MessagesContainer>\n    <EmptyContainer>No message yet</EmptyContainer>\n\n    <Hr />\n\n    <MessageInput placeholder="Type your message" textbutton="Send" />\n</MessagesContainer>'
                }
            >
                <MessagesContainer>
                    <EmptyContainer>No message yet</EmptyContainer>

                    <MessageInput
                        placeholder="Type your message"
                        textbutton="Send"
                    />
                </MessagesContainer>
            </DemoItem>

            <TableProps>
                {props.map((item, i) => (
                    <TableItem item={item} key={i} />
                ))}
            </TableProps>
        </PageDemo>
    )
}

export default MessagingPage
