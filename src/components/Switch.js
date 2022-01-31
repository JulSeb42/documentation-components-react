// Packages
import React from "react"
import { Routes, Route } from "react-router-dom"
import { scrollToTop, capitalize, slugify } from "components-react-julseb"

// Pages
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import Styles from "../pages/Styles"
import Layouts from "../pages/Layouts"
import Components from "../pages/Components"
import ComponentPage from "./ComponentPage"

// Component pages
import Colors from "../pages/styles/Colors"
import Fonts from "../pages/styles/Fonts"
import Shadows from "../pages/styles/Shadows"
import Container from "../pages/layouts/Container"
import GridDemo from "../pages/layouts/GridDemo"
import Spacers from "../pages/layouts/Spacers"
import IconDemo from "../pages/components/Icon"
import HrDemo from "../pages/components/Hr"
import ImageDemo from "../pages/components/Image"
import VideoDemo from "../pages/components/Video"
import AvatarDemo from "../pages/components/Avatar"
import ButtonDemo from "../pages/components/Button"
import ButtonIconDemo from "../pages/components/ButtonIcon"
import TagDemo from "../pages/components/Tag"
import BadgeDemo from "../pages/components/Badge"

// Demo pages
import DemoMain from "../pages/demo/DemoMain"
import DemoAsideLeft from "../pages/demo/DemoAsideLeft"
import DemoAsideRight from "../pages/demo/DemoAsideRight"
import DemoContainerForm from "../pages/demo/DemoContainerForm"

// Map pages
const pagesStyles = [
    {
        title: "colors",
        import: "Variables",
        component: Colors,
    },
    {
        title: "fonts",
        import: "Font",
        component: Fonts,
    },
    {
        title: "shadows",
        import: "Variables",
        component: Shadows,
    },
]

const pagesLayouts = [
    {
        title: "container",
        import: "Wrapper, Main, Aside",
        component: Container,
    },
    {
        title: "grid",
        import: "Grid",
        component: GridDemo,
    },
    {
        title: "spacers",
        import: "Variables",
        component: Spacers,
    },
]

const pagesComponents = [
    {
        title: "icon",
        import: "Icon",
        component: IconDemo,
    },
    { title: "hr", import: "Hr", component: HrDemo },

    { title: "image", import: "Image", component: ImageDemo },

    { title: "video", import: "Video", component: VideoDemo },

    { title: "avatar", import: "Avatar", component: AvatarDemo },

    { title: "button", import: "Button", component: ButtonDemo },

    { title: "button icon", import: "ButtonIcon", component: ButtonIconDemo },

    { title: "tag", import: "Tag", component: TagDemo },

    { title: "badge", import: "Badge", component: BadgeDemo },

    { title: "input", import: "Input" },

    { title: "buttons container", import: "ButtonsContainer" },

    { title: "form", import: "Form" },

    { title: "loader", import: "Loader" },

    { title: "breadcrumbs", import: "Breadcrumbs" },

    { title: "accordion", import: "Accordion, AccordionItem" },

    { title: "dropdown", import: "DropdownContainer, Dropdown" },

    { title: "toast", import: "Toast" },

    { title: "card", import: "BasicCard, ImageCard" },

    { title: "modal", import: "Modal" },

    { title: "pagination", import: "Pagination, PaginationButton" },

    { title: "progress bar", import: "ProgressBar" },

    {
        title: "tabs",
        import: "TabsContainer, TabsButtonsContainer, TabsButton, TabsContent",
    },

    {
        title: "slideshow",
        import: "SlideshowContainer, Slideshow, SlideshowItem, SlideshowButton, SlideshowPaginationContainer, SlideshowPaginationButton",
    },

    { title: "alert", import: "Alert" },

    { title: "burger", import: "Burger" },

    { title: "title flex", import: "TitleFlex" },

    { title: "page loading", import: "PageLoading" },

    {
        title: "messaging",
        import: "MessagesContainer, EmptyContainer, ListMessages, Message, MessageInput",
    },

    { title: "markdown container", import: "MarkdownContainer" },

    { title: "helmet", import: "Helmet" },

    { title: "utils", import: "Utils" },
]

function Switch(props) {
    return (
        <Routes>
            <Route path="/" element={<Home />} preload={scrollToTop()} />

            <Route path="*" element={<NotFound />} preload={scrollToTop()} />

            {/* List pages */}
            <Route
                path="/styles"
                element={<Styles />}
                preload={scrollToTop()}
            />

            <Route
                path="/layouts"
                element={<Layouts />}
                preload={scrollToTop()}
            />

            <Route
                path="/components"
                element={<Components />}
                preload={scrollToTop()}
            />

            {/* Map styles */}
            {pagesStyles.map((page, i) => (
                <Route
                    path={`/styles/${page.title}`}
                    element={
                        <ComponentPage
                            title={capitalize(page.title)}
                            import={page.import}
                            category="styles"
                        >
                            <page.component />
                        </ComponentPage>
                    }
                    preload={scrollToTop()}
                    key={i}
                />
            ))}

            {/* Map layouts */}
            {pagesLayouts.map((page, i) => (
                <Route
                    path={`/layouts/${page.title}`}
                    element={
                        <ComponentPage
                            title={capitalize(page.title)}
                            import={page.import}
                            category="layouts"
                        >
                            <page.component />
                        </ComponentPage>
                    }
                    preload={scrollToTop()}
                    key={i}
                />
            ))}

            {/* Map components */}
            {pagesComponents.map((page, i) => (
                <Route
                    path={`/components/${slugify(page.title)}`}
                    element={
                        <ComponentPage
                            title={capitalize(page.title)}
                            import={page.import}
                            category="components"
                        >
                            <page.component />
                        </ComponentPage>
                    }
                    preload={scrollToTop()}
                    key={i}
                />
            ))}

            {/* Demo pages */}

            <Route
                path={"/layouts/container/demo-main"}
                element={<DemoMain />}
                preload={scrollToTop()}
            />

            <Route
                path={"/layouts/container/demo-aside-left"}
                element={<DemoAsideLeft />}
                preload={scrollToTop()}
            />

            <Route
                path={"/layouts/container/demo-aside-right"}
                element={<DemoAsideRight />}
                preload={scrollToTop()}
            />

            <Route
                path={"/layouts/container/demo-container-form"}
                element={<DemoContainerForm />}
                preload={scrollToTop()}
            />
        </Routes>
    )
}

export default Switch
