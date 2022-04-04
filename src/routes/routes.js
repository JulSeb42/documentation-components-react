// Pages
import Homepage from "../pages/Homepage"
import NotFound from "../pages/NotFound"

// Category pages
import Styles from "../pages/Styles"
import Layouts from "../pages/Layouts"
import Components from "../pages/Components"
import Helpers from "../pages/Helpers"

// Styles pages
import ColorsPage from "../pages/styles/ColorsPage"
import FontPage from "../pages/styles/FontPage"
import ShadowsPage from "../pages/styles/ShadowsPage"
import OverridesPage from "../pages/styles/OverridesPage"

// Layouts pages
import ContainerPage from "../pages/layouts/ContainerPage"
import GridPage from "../pages/layouts/GridPage"
import FlexboxPage from "../pages/layouts/FlexboxPage"
import SpacersPage from "../pages/layouts/SpacersPage"

// Components pages
import IconPage from "../pages/components/IconPage"
import HrPage from "../pages/components/HrPage"
import ImagePage from "../pages/components/ImagePage"
import VideoPage from "../pages/components/VideoPage"
import AvatarPage from "../pages/components/AvatarPage"
import ButtonPage from "../pages/components/ButtonPage"
import ButtonIconPage from "../pages/components/ButtonIconPage"
import TagPage from "../pages/components/TagPage"
import BadgePage from "../pages/components/BadgePage"
import TooltipPage from "../pages/components/TooltipPage"
import InputPage from "../pages/components/InputPage"
import AutocompletePage from "../pages/components/AutocompletePage"
import InputCheckPage from "../pages/components/InputCheckPage"
import InputImagePage from "../pages/components/InputImagePage"
import SelectPage from "../pages/components/SelectPage"
import ButtonsContainerPage from "../pages/components/ButtonsContainerPage"
import FormPage from "../pages/components/FormPage"
import LoaderPage from "../pages/components/LoaderPage"
import BreadcrumbsPage from "../pages/components/BreadcrumbsPage"
import AccordionPage from "../pages/components/AccordionPage"
import DropdownPage from "../pages/components/DropdownPage"
import ToastPage from "../pages/components/ToastPage"
import ModalPage from "../pages/components/ModalPage"
import PaginationPage from "../pages/components/PaginationPage"
import ProgressBarPage from "../pages/components/ProgressBarPage"
import TabsPage from "../pages/components/TabsPage"
import SlideshowPage from "../pages/components/SlideshowPage"
import AlertPage from "../pages/components/AlertPage"
import BurgerPage from "../pages/components/BurgerPage"
import TitleFlexPage from "../pages/components/TitleFlexPage"
import PageLoadingPage from "../pages/components/PageLoadingPage"
import MessagingPage from "../pages/components/MessagingPage"
import MarkdownContainerPage from "../pages/components/MarkdownContainerPage"
import CodeContainerPage from "../pages/components/CodeContainerPage"
import HelmetPage from "../pages/components/HelmetPage"

// Utils pages
import UtilsPage from "../pages/helpers/UtilsPage"
import VariablesPage from "../pages/helpers/VariablesPage"
import HelperClassesPage from "../pages/helpers/HelperClassesPage"

// Demo pages
import DemoAsideLeft from "../pages/demos/DemoAsideLeft"
import DemoAsideRight from "../pages/demos/DemoAsideRight"
import DemoBothSides from "../pages/demos/DemoBothSides"
import DemoContainerForm from "../pages/demos/DemoContainerForm"
import DemoMain from "../pages/demos/DemoMain"
import DemoPageLoading from "../pages/demos/DemoPageLoading"

// Routes
const routes = [
    // Pages
    {
        path: "/",
        element: Homepage,
    },
    {
        path: "*",
        element: NotFound,
    },

    // Category pages
    {
        path: "/styles",
        element: Styles,
    },
    {
        path: "/layouts",
        element: Layouts,
    },
    {
        path: "/components",
        element: Components,
    },
    {
        path: "/helpers",
        element: Helpers,
    },

    // Styles pages
    {
        path: "/styles/colors",
        element: ColorsPage,
        category: "styles",
    },
    {
        path: "/styles/font",
        element: FontPage,
        category: "styles",
    },
    {
        path: "/styles/shadows",
        element: ShadowsPage,
        category: "styles",
    },
    {
        path: "/styles/overrides",
        element: OverridesPage,
        category: "styles",
    },

    // Layouts pages
    {
        path: "/layouts/container",
        element: ContainerPage,
        category: "layouts",
    },
    {
        path: "/layouts/grid",
        element: GridPage,
        category: "layouts",
    },
    {
        path: "/layouts/flexbox",
        element: FlexboxPage,
        category: "layouts",
    },
    {
        path: "/layouts/spacers",
        element: SpacersPage,
        category: "layouts",
    },

    // Components pages
    { path: "/components/icon", element: IconPage, category: "components" },
    { path: "/components/hr", element: HrPage, category: "components" },
    { path: "/components/image", element: ImagePage, category: "components" },
    { path: "/components/video", element: VideoPage, category: "components" },
    { path: "/components/avatar", element: AvatarPage, category: "components" },
    { path: "/components/button", element: ButtonPage, category: "components" },
    {
        path: "/components/button-icon",
        element: ButtonIconPage,
        category: "components",
    },
    { path: "/components/tag", element: TagPage, category: "components" },
    { path: "/components/badge", element: BadgePage, category: "components" },
    { path: "/components/tooltip", element: TooltipPage, category: "components" },
    { path: "/components/input", element: InputPage, category: "components" },
    {
        path: "/components/autocomplete",
        element: AutocompletePage,
        category: "components",
    },
    {
        path: "/components/input-check",
        element: InputCheckPage,
        category: "components",
    },
    {
        path: "/components/input-image",
        element: InputImagePage,
        category: "components",
    },
    {
        path: "/components/select",
        element: SelectPage,
        category: "components",
    },
    {
        path: "/components/buttons-container",
        element: ButtonsContainerPage,
        category: "components",
    },
    { path: "/components/form", element: FormPage, category: "components" },
    { path: "/components/loader", element: LoaderPage, category: "components" },
    {
        path: "/components/breadcrumbs",
        element: BreadcrumbsPage,
        category: "components",
    },
    {
        path: "/components/accordion",
        element: AccordionPage,
        category: "components",
    },
    {
        path: "/components/dropdown",
        element: DropdownPage,
        category: "components",
    },
    { path: "/components/toast", element: ToastPage, category: "components" },
    { path: "/components/modal", element: ModalPage, category: "components" },
    {
        path: "/components/pagination",
        element: PaginationPage,
        category: "components",
    },
    {
        path: "/components/progress-bar",
        element: ProgressBarPage,
        category: "components",
    },
    { path: "/components/tabs", element: TabsPage, category: "components" },
    {
        path: "/components/slideshow",
        element: SlideshowPage,
        category: "components",
    },
    { path: "/components/alert", element: AlertPage, category: "components" },
    { path: "/components/burger", element: BurgerPage, category: "components" },
    {
        path: "/components/title-flex",
        element: TitleFlexPage,
        category: "components",
    },
    {
        path: "/components/page-loading",
        element: PageLoadingPage,
        category: "components",
    },
    {
        path: "/components/messaging",
        element: MessagingPage,
        category: "components",
    },
    {
        path: "/components/markdown-container",
        element: MarkdownContainerPage,
        category: "components",
    },
    {
        path: "/components/code-container",
        element: CodeContainerPage,
        category: "components",
    },
    { path: "/components/helmet", element: HelmetPage, category: "components" },

    // Utils pages
    { path: "/helpers/utils", element: UtilsPage, category: "helpers" },
    { path: "/helpers/variables", element: VariablesPage, category: "helpers" },
    {
        path: "/helpers/helper-classes",
        element: HelperClassesPage,
        category: "helpers",
    },

    // Demo pages
    {
        path: "/layouts/container/demo-main",
        element: DemoMain,
    },
    {
        path: "/layouts/container/demo-aside-left",
        element: DemoAsideLeft,
    },
    {
        path: "/layouts/container/demo-aside-right",
        element: DemoAsideRight,
    },
    {
        path: "/layouts/container/demo-both-sides",
        element: DemoBothSides,
    },
    {
        path: "/layouts/container/demo-container-form",
        element: DemoContainerForm,
    },
    {
        path: "/components/page-loading/demo-page-loading",
        element: DemoPageLoading,
    },
]

export default routes
