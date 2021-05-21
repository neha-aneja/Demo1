import React from "react";
import { Route, Switch, Redirect, withRouter } from "react-router-dom";
import AdminRoutes from "./nav/AdminRoutes";
import AdminLayout from "../../layouts/AdminLayout";


// Common Pages
const Admin = React.lazy(() => import("../../pages/admin"));

const MainRouter = (props) => {

    const adminRedirectPath = ["/admin/", "/super_admin/", "/super_admin/dashboard"];

    return (
        <Switch>
            
            <Route exact path="/">
                <Redirect to="/admin/dashboard" />
            </Route>
            

            {
                adminRedirectPath.map(a => (
                    <Route exact path={a} key={a}>
                        <Redirect to="/admin/dashboard" />
                    </Route>
                ))
            }

            <AdminLayout>
            {
                AdminRoutes.map(a => (
                    <Route path={a.url} component={a.component}/>
                    
                ))

            }
            </AdminLayout>
            
            
            
            {/* Not Found Routes */}
            {/* <Route exact path="/404" component={NotFound} /> */}
            <Route exact path="*">
                <Redirect to="/404" />
            </Route>
            {/* Not Found Routes */}
        </Switch>
    );
};

export default withRouter(MainRouter);
















































































// import React from "react";
// import { Route, Switch, Redirect, withRouter } from "react-router-dom";
// import HomeComponent from "../../pages/HomeComponent";
// import LoginComponent from "../../pages/LoginComponent";
// import AdminLayout from "../../layouts/AdminLayout"

// const MainRouter = () => {
//     return (
//         <Switch>
//             <AdminLayout>
//                 <Route path="/home" component={HomeComponent} />
//                 <Route path="/login" component={LoginComponent} />
//             </AdminLayout>

//             <Route exact path="/" >
//                 <Redirect to="/home" />
//             </Route>

//         </Switch>
//     )
// }

// export default MainRouter
