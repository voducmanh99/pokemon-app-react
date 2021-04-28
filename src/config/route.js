import APP from "../pages/index"

export default [
    {
        key: "PokeDex",
        name: "PokeDex",
        exact: true,
        path: "/",
        component: APP.Home,
        private: false,
    },
    {
        key: "PokeDex",
        name: "PokeDex",
        exact: true,
        path: "/pokemon/:type",
        component: APP.Home,
        private: false,
    },
    {
        key: "Detail",
        name: "Chi tiết Pokemon",
        exact: true,
        path: "/detail-pokemon/:name",
        component: APP.Detail,
        private: false,
    },
    
    
    { key: "ErrorPage", component: APP.Error },
];