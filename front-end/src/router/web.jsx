import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/login/Login.jsx";
import Layout from "../layout/Layout.jsx";
import Dashboard from "../pages/dashboard/Dashboard.jsx";
import Employees from "../pages/employees/Employees.jsx";
import Departments from "../pages/departments/Departments.jsx";
import GanttService from "../pages/departments/gantt/GanttService.jsx";
import RespoGlobalLayout from "../layout/respo global/RespoGlobalLayout.jsx";
import RespoGlobalDashboard from "../pages/respo global/global_dashboard/RespoGlobalDashboard.jsx";
import RespoDepartementLayout from "../layout/respo departement/RespoDepartementLayout.jsx";
import RespoDepDashboard from "../pages/respo departement/departement_dashboard/RespoDepDashboard.jsx";
import Global_Employees from "../pages/respo global/global_employees/Global_Employees.jsx";
import GlobalGanttService from "../pages/respo global/global_departments/global_gantt/GlobalGanttService.jsx";
import Global_Departments from "../pages/respo global/global_departments/Global_Departments.jsx";
import Departement_Departments from "../pages/respo departement/departement_departement/Departement_Departments.jsx";
import DepartementGanttService from "../pages/respo departement/departement_departement/departement_gantt/DepartementGanttService.jsx";
import Departement_Employees from "../pages/respo departement/departement_employees/Departement_Employees.jsx"
import RespoServiceLayout from "../layout/respo service/RespoServiceLayout.jsx";
import RespoServiceDashboard from "../pages/respo service/service_dashboard/RespoServiceDashboard.jsx";
import Service_Employees from "../pages/respo service/service_employees/Service_Employees.jsx";
import Service_Departments from "../pages/respo service/service_departments/Service_Departments.jsx";
import ServiceGanttService from "../pages/respo service/service_departments/service_gantt/ServiceGanttService.jsx";
import UnauthorizedAccess from "../pages/error_pages/unauthorizedAccess.jsx";
import NotFound from "../pages/error_pages/NotFound.jsx";
import RespoTacheLayout from "../layout/respo tache/RespoTacheLayout.jsx";
import RespoTacheDashboard from "../pages/respo tache/RespoTacheDashboard.jsx";

/*
* --> Routes :
*/

// Common routes

    export const UNAUTHORIZED_ACCESS = '/unauthorized'
    export const LOGIN_PAGE = '/login'



// Resposable Global :
export const RESPONSABLE_GLOBAL_DASHBOARD = '/responsable global/Dashboard'
export const RESPONSABLE_GLOBAL_EMPLOYEES = '/responsable global/Employees'
export const RESPONSABLE_GLOBAL_DEPARTMENT = '/responsable global/Departments'

// Resposable Departments :
export const RESPONSABLE_DEPARTEMENT_DASHBOARD = '/responsable departement/Dashboard'
export const RESPONSABLE_DEPARTEMENT_EMPLOYEES = '/responsable departement/Employees'
export const RESPONSABLE_DEPARTEMENT_DEPARTMENT = '/responsable departement/Departments'

// Resposable Service :
export const RESPONSABLE_SERVICE_DASHBOARD = '/responsable service/Dashboard'
export const RESPONSABLE_SERVICE_EMPLOYEES = '/responsable service/Employees'
export const RESPONSABLE_SERVICE_DEPARTMENT = '/responsable service/Departments'

// Resposable Service :
export const RESPONSABLE_TACHE_DASHBOARD = '/responsable tache/Dashboard'
export const RESPONSABLE_TACHE_MESTACHES = '/responsable tache/Mes taches'



export const router = createBrowserRouter([

    {
        path:LOGIN_PAGE,
        element: <Login/>
    },
    {
        path:"/",
        element: <Login/>
    },
    {
        path:UNAUTHORIZED_ACCESS,
        element: <UnauthorizedAccess/>
    },
    {
        path:"/register",
        element:"register"
    },
    {
        path:"*",
        element:<NotFound/>
    },
    {
        element: <Layout/>,
        children:[
            {
                path:'/Dashboard',
                element: <Dashboard/>
            },
            {
                path:'/Dashboard',
                element:<Dashboard/>
            },
            {
                path:'/Departments',
                element: <Departments/>
            },
            {
                path:'/Global_Employees',
                element: <Employees/>
            },
            {
                path:'/Services/:id',
                element: <GanttService/>
            },
        ]
    },
    {
        element: <RespoGlobalLayout/>,
        children:[
            {
                path:RESPONSABLE_GLOBAL_DASHBOARD,
                element: <RespoGlobalDashboard/>
            },
            {
                path:RESPONSABLE_GLOBAL_EMPLOYEES,
                element: <Global_Employees/>
            },
            {
                path:RESPONSABLE_GLOBAL_DEPARTMENT,
                element: <Global_Departments/>
            },
            {
                path:'/responsable global/Services/:id',
                element: <GlobalGanttService/>
            },
        ]
    },
    {
        element: <RespoDepartementLayout/>,
        children:[
            {
                path:RESPONSABLE_DEPARTEMENT_DASHBOARD,
                element: <RespoDepDashboard/>
            },
            {
                path:RESPONSABLE_DEPARTEMENT_EMPLOYEES,
                element: <Departement_Employees />
            },
            {
                path:RESPONSABLE_DEPARTEMENT_DEPARTMENT,
                element: <Departement_Departments/>
            },
            {
                path:'/responsable departement/Services/:id',
                element: <DepartementGanttService/>
            },
        ]
    },
    {
        element: <RespoServiceLayout/>,
        children:[
            {
                path:RESPONSABLE_SERVICE_DASHBOARD,
                element: <RespoServiceDashboard/>
            },
            {
                path:RESPONSABLE_SERVICE_EMPLOYEES,
                element: <Service_Employees/>
            },
            {
                path:RESPONSABLE_SERVICE_DEPARTMENT,
                element: <Service_Departments/>
            },
            {
                path:'/responsable service/Services/:id',
                element: <ServiceGanttService/>
            },
        ]
    },
    {
        element: <RespoTacheLayout/>,
        children:[
            {
                path: RESPONSABLE_TACHE_DASHBOARD,
                element: <RespoTacheDashboard/>
            },
            {
                path:RESPONSABLE_TACHE_MESTACHES,
                element: "mes taches à réaliser"
            }
        ]
    }
])
