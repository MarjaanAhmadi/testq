
import MainPage from "../pages/mainPage/mainPage";
import Members from "../pages/mainPage/members/members";
import Queues from "../pages/mainPage/queues/queues";
import Performance from "../pages/mainPage/performance/performance";
import CreateQueue from "../pages/mainPage/queues/createQueue/createQueue";
import QueueDetails from "../pages/mainPage/queues/queueDetails/queueDetails";
const routes = [

    {
        name: 'queues',
        path: "/",
        child: false,
        component: Queues,
        exact: true,
        metaData: {
            icon: 'fa-tasks'
        }
    },
    {
        name: 'members',
        path: "/members",
        child: false,
        component: Members,
        exact: true,
        metaData: {
            icon: 'fa-user'
        }
    },

    {
        name: 'queue details',
        path: "/queues/details/:id",
        child: true,
        component: QueueDetails,
        exact: true
    },
    {
        name: 'create queue',
        path: "/queues/create",
        child: true,
        component: CreateQueue,
        exact: true,
    },
    {
        name: 'performance',
        path: "/performance",
        child: false,
        component: Performance,
        exact: true,
        metaData: {
            icon: 'fa-line-chart'
        }
    }

];
export default routes;
