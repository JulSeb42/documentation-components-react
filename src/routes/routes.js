// Pages
import Homepage from "../pages/Homepage"
import NotFound from "../pages/NotFound"

// List pages
import ListPage from "../pages/ListPage"

// Styles
import ColorsPage from "../pages/styles/ColorsPage"
import FontPage from "../pages/styles/FontPage"
import ShadowsPage from "../pages/styles/ShadowsPage"
import OverridesPage from "../pages/styles/OverridesPage"

// Layouts
import ContainerPage from "../pages/layouts/ContainerPage"
import GridPage from "../pages/layouts/GridPage"
import FlexboxPage from "../pages/layouts/FlexboxPage"
import SpacersPage from "../pages/layouts/SpacersPage"

// Components
import IconPage from "../pages/components/IconPage"
import HrPage from "../pages/components/HrPage"
import ImagePage from "../pages/components/ImagePage"
import VideoPage from "../pages/components/VideoPage"
import AvatarPage from "../pages/components/AvatarPage"
import LoaderPage from "../pages/components/LoaderPage"
import ButtonPage from "../pages/components/ButtonPage"
import ButtonIconPage from "../pages/components/ButtonIconPage"
import TagPage from "../pages/components/TagPage"
import BadgePage from "../pages/components/BadgePage"
import TooltipPage from "../pages/components/TooltipPage"
import InputPage from "../pages/components/InputPage"
import InputImagePage from "../pages/components/InputImagePage"
import InputCheckPage from "../pages/components/InputCheckPage"
import AutocompletePage from "../pages/components/AutocompletePage"
import SelectPage from "../pages/components/SelectPage"
import FormPage from "../pages/components/FormPage"
import BreadcrumbsPage from "../pages/components/BreadcrumbsPage"
import AccordionPage from "../pages/components/AccordionPage"
import DropdownPage from "../pages/components/DropdownPage"
import ToastPage from "../pages/components/ToastPage"
import ModalPage from "../pages/components/ModalPage"
import PaginationPage from "../pages/components/PaginationPage"
import PaginatorPage from "../pages/components/PaginatorPage"
import StepperPage from "../pages/components/StepperPage"
import ProgressBarPage from "../pages/components/ProgressBarPage"
import TabsPage from "../pages/components/TabsPage"
import SlideshowPage from "../pages/components/SlideshowPage"
import AlertPage from "../pages/components/AlertPage"
import BurgerPage from "../pages/components/BurgerPage"
import PageLoadingPage from "../pages/components/PageLoadingPage"
import MessagingPage from "../pages/components/MessagingPage"
import MarkdownContainerPage from "../pages/components/MarkdownContainerPage"
import CodeContainerPage from "../pages/components/CodeContainerPage"

// Helpers
import UtilsPage from "../pages/helpers/UtilsPage"
import VariablesPage from "../pages/helpers/VariablesPage"
import MixinsPage from "../pages/helpers/MixinsPage"
import MarkdownOptionsPage from "../pages/helpers/MarkdownOptionsPage"
import HelpersPage from "../pages/helpers/HelpersPage"
import SrOnlyPage from "../pages/helpers/SrOnlyPage"

// Demo pages
import DemoMain from "../pages/demos/DemoMain"
import DemoAsideLeft from "../pages/demos/DemoAsideLeft"
import DemoAsideRight from "../pages/demos/DemoAsideRight"
import DemoBothSides from "../pages/demos/DemoBothSides"
import DemoContainerForm from "../pages/demos/DemoContainerForm"
import DemoPageLoading from "../pages/demos/DemoPageLoading"

// Routes
const routes = [
    {
        path: "/",
        element: Homepage,
    },
    {
        path: "*",
        element: NotFound,
    },

    // List pages
    {
        path: "/styles",
        element: ListPage,
    },
    {
        path: "/layouts",
        element: ListPage,
    },
    {
        path: "/components",
        element: ListPage,
    },
    {
        path: "/helpers",
        element: ListPage,
    },

    // Styles
    {
        path: "/styles/colors",
        element: ColorsPage,
    },
    {
        path: "/styles/font",
        element: FontPage,
    },
    {
        path: "/styles/shadows",
        element: ShadowsPage,
    },
    {
        path: "/styles/overrides",
        element: OverridesPage,
    },

    // Layouts
    {
        path: "/layouts/container",
        element: ContainerPage,
    },
    {
        path: "/layouts/grid",
        element: GridPage,
    },
    {
        path: "/layouts/flexbox",
        element: FlexboxPage,
    },
    {
        path: "/layouts/spacers",
        element: SpacersPage,
    },

    // Components pages
    {
        path: "/components/icon",
        element: IconPage,
    },
    {
        path: "/components/hr",
        element: HrPage,
    },
    {
        path: "/components/image",
        element: ImagePage,
    },
    {
        path: "/components/video",
        element: VideoPage,
    },
    {
        path: "/components/avatar",
        element: AvatarPage,
    },
    {
        path: "/components/loader",
        element: LoaderPage,
    },
    {
        path: "/components/button",
        element: ButtonPage,
    },
    {
        path: "/components/button-icon",
        element: ButtonIconPage,
    },
    {
        path: "/components/tag",
        element: TagPage,
    },
    {
        path: "/components/badge",
        element: BadgePage,
    },
    {
        path: "/components/tooltip",
        element: TooltipPage,
    },
    {
        path: "/components/input",
        element: InputPage,
    },
    {
        path: "/components/input-image",
        element: InputImagePage,
    },
    {
        path: "/components/input-check",
        element: InputCheckPage,
    },
    {
        path: "/components/autocomplete",
        element: AutocompletePage,
    },
    {
        path: "/components/select",
        element: SelectPage,
    },
    {
        path: "/components/form",
        element: FormPage,
    },
    {
        path: "/components/breadcrumbs",
        element: BreadcrumbsPage,
    },
    {
        path: "/components/accordion",
        element: AccordionPage,
    },
    {
        path: "/components/dropdown",
        element: DropdownPage,
    },
    {
        path: "/components/toast",
        element: ToastPage,
    },
    {
        path: "/components/modal",
        element: ModalPage,
    },
    {
        path: "/components/pagination",
        element: PaginationPage,
    },
    {
        path: "/components/paginator",
        element: PaginatorPage,
    },
    {
        path: "/components/stepper",
        element: StepperPage,
    },
    {
        path: "/components/progress-bar",
        element: ProgressBarPage,
    },
    {
        path: "/components/tabs",
        element: TabsPage,
    },
    {
        path: "/components/slideshow",
        element: SlideshowPage,
    },
    {
        path: "/components/alert",
        element: AlertPage,
    },
    {
        path: "/components/burger",
        element: BurgerPage,
    },
    {
        path: "/components/page-loading",
        element: PageLoadingPage,
    },
    {
        path: "/components/messaging",
        element: MessagingPage,
    },
    {
        path: "/components/markdown-container",
        element: MarkdownContainerPage,
    },
    {
        path: "/components/code-container",
        element: CodeContainerPage,
    },

    // Helpers
    {
        path: "/helpers/utils",
        element: UtilsPage,
    },
    {
        path: "/helpers/variables",
        element: VariablesPage,
    },
    {
        path: "/helpers/mixins",
        element: MixinsPage,
    },
    {
        path: "/helpers/options-markdown",
        element: MarkdownOptionsPage,
    },
    {
        path: "/helpers/helpers",
        element: HelpersPage,
    },
    {
        path: "/helpers/sr-only",
        element: SrOnlyPage,
    },

    // Demo pages
    {
        path: "/layouts/container/demo-main",
        element: DemoMain,
        category: "demo",
    },
    {
        path: "/layouts/container/demo-aside-left",
        element: DemoAsideLeft,
        category: "demo",
    },
    {
        path: "/layouts/container/demo-aside-right",
        element: DemoAsideRight,
        category: "demo",
    },
    {
        path: "/layouts/container/demo-both-sides",
        element: DemoBothSides,
        category: "demo",
    },
    {
        path: "/layouts/container/demo-container-form",
        element: DemoContainerForm,
        category: "demo",
    },
    {
        path: "/components/page-loading/demo",
        element: DemoPageLoading,
        category: "demo",
    },
]

export default routes
