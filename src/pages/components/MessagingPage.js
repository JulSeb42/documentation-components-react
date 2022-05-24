// Imports
import React from "react"
import {
    MessagesContainer,
    EmptyContainer,
    ListMessages,
    Message,
    MessageInput,
} from "tsx-library-julseb"
import { v4 as uuid } from "uuid"
import { getToday } from "js-utils-julseb"

import PageComponent from "../../components/PageComponent"
import DemoItem from "../../components/DemoItem"
import { TableProps, TableItem } from "../../components/TableProps"

const MessagingPage = () => {
    const messages = [
        {
            type: "received",
            text: "Message received https://julien-sebag.design/",
            date: "2022-05-23",
            time: "11:15",
        },
        {
            type: "sent",
            text: "Message sent https://julien-sebag.design/",
            date: "2022-05-23",
            time: "11:17",
        },
        {
            type: "received",
            text: "Message received https://julien-sebag.design/",
            date: "2022-05-23",
            time: "11:21",
        },
        {
            type: "sent",
            text: "Message sent https://julien-sebag.design/",
            date: "2022-05-23",
            time: "11:42",
        },
        {
            type: "received",
            text: "Message received https://julien-sebag.design/",
            date: "2022-05-23",
            time: "11:47",
        },
        {
            type: "sent",
            text: "Message sent https://julien-sebag.design/",
            date: "2022-05-23",
            time: "12:00",
        },
    ]

    const demo = [
        {
            title: "With messages",
            code: 'const messages = [\n    {\n        type: "received",\n        text: "Message received https://julien-sebag.design/",\n        date: "2022-05-23",\n        time: "11:15",\n    },\n    {\n        type: "sent",\n        text: "Message sent https://julien-sebag.design/",\n        date: "2022-05-23",\n        time: "11:17",\n    },\n]\n\n<MessagesContainer>\n    <ListMessages>\n        {messages.map(message => (\n            <Message\n                type={message.type}\n                date={new Date(message.date) === new Date() ? "Today" : message.date}\n                time={message.time}\n                key={uuid()}\n            >\n                {message.text}\n            </Message>\n        ))}\n    </ListMessages>\n\n    <MessageInput placeholder="Type your message" />\n</MessagesContainer>',
            demo: (
                <MessagesContainer>
                    <ListMessages>
                        {messages.map(message => (
                            <Message
                                type={message.type}
                                date={
                                    message.date === getToday()
                                        ? "Today"
                                        : message.date
                                }
                                time={message.time}
                                key={uuid()}
                            >
                                {message.text}
                            </Message>
                        ))}
                    </ListMessages>

                    <MessageInput placeholder="Type your message" />
                </MessagesContainer>
            ),
        },
        {
            title: "Empty",
            code: '<MessagesContainer>\n    <EmptyContainer>No message yet</EmptyContainer>\n\n    <MessageInput\n        placeholder="Type your message"\n        textButton="Send"\n    />\n</MessagesContainer>',
            demo: (
                <MessagesContainer>
                    <EmptyContainer>No message yet</EmptyContainer>

                    <MessageInput
                        placeholder="Type your message"
                        textButton="Send"
                    />
                </MessagesContainer>
            ),
        },
    ]

    const props = [
        {
            name: "type (Message)",
            type: "String",
            example: "received",
            possible: '"sent" | "received"',
            default: "sent",
            required: "Yes",
        },
        {
            name: "date (Message)",
            type: "String",
            example: "2022-05-01",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "time (Message)",
            type: "String",
            example: "11:42",
            possible: "-",
            default: "None",
            required: "No",
        },
        {
            name: "onSubmit (MessageInput)",
            type: "Function",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "onChange (MessageInput)",
            type: "Function",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "value (MessageInput)",
            type: "Any",
            example: "-",
            possible: "-",
            default: "None",
            required: "Yes",
        },
        {
            name: "textButton",
            type: "String or Boolean",
            example: "Respond",
            possible: "-",
            default: 'If true: "Send"',
            required: "No",
        },
        {
            name: "icon (MessageInput)",
            type: "String",
            example: "paperplane",
            possible: "-",
            default: "send",
            required: "No",
        },
    ]

    return (
        <PageComponent
            title="Messaging"
            back="/components"
            component="MessagesContainer, EmptyContainer, ListMessages, Message, MessageInput"
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

export default MessagingPage
