import React,{useContext} from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import AdminTopNav from "../admin/AdminTopNav";
import AdminSidebar from "../admin/AdminSidebar";
import { userContext } from "../../context/context";

const PrivateLayout = ({ children }) => {
     const context = useContext(userContext)
    const { User } = context
     
    return (
        <div id="wrapper">
            <Helmet>
                <title>تاپلرن | داشبورد</title>
            </Helmet>
            <nav
                className="navbar navbar-inverse navbar-fixed-top"
                role="navigation"
            >
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/dashboard">
                        داشبورد تاپلرن
                    </Link>
                </div>

                <AdminTopNav user={User} />

                <AdminSidebar />
            </nav>
            <div id="page-wrapper">{children}</div>
        </div>
    );
};

export default PrivateLayout;
