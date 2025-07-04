import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Switch, Route, withRouter, Redirect } from "react-router";

import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import Footer from "../Footer/Footer";
import Breadcrumbs from "../Breadbrumbs/Breadcrumbs";

import Dashboard from "../../pages/dashboard/Dashboard";
import Profile from "../../pages/profile/Profile";
import UserListPage from "../Users/list/UsersListPage";
import UserViewPage from "../Users/view/UsersViewPage";
import ChangePasswordFormPage from "../Users/changePassword/ChangePasswordFormPage";
import UserFormPage from "../Users/form/UserFormPage";
import Typography from "../../pages/core/typography/Typography";
import Colors from "../../pages/core/colors/Colors";
import Grid from "../../pages/core/grid/Grid";
import Notifications from "../../pages/uielements/notifications/Notifications";
import Tables from "../../pages/tables/Tables";
import Alerts from "../../pages/uielements/alerts/Alerts";
import Badges from "../../pages/uielements/badges/Badges";
import Buttons from "../../pages/uielements/buttons/Buttons";
import Cards from "../../pages/uielements/cards/Cards";
import Carousel from "../../pages/uielements/carousel/Carousel";
import Charts from "../../pages/extra/charts/Charts";
import Jumbotron from "../../pages/uielements/jumbotron/Jumbotron";
import Icons from "../../pages/uielements/icons/IconsPage";
import Lists from "../../pages/uielements/lists/Lists";
import Navbars from "../../pages/uielements/navbar/Navbars"
import Navs from "../../pages/uielements/navs/Navs";
import Modal from "../../pages/uielements/modal/Modal";
import Progress from "../../pages/uielements/progress/Progress";
import Popover from "../../pages/uielements/popovers/Popovers";
import Elements from "../../pages/forms/elements/Elements";
import Validation from "../../pages/forms/validation/Validation";
import Wizard from "../../pages/forms/wizard/Wizard";
import BarCharts from "../../pages/charts/bar/BarCharts";
import LineCharts from "../../pages/charts/line/LineCharts";
import PieCharts from "../../pages/charts/pie/PieCharts";
import OtherCharts from "../../pages/charts/other/OtherCharts";
import Maps from "../../pages/maps/google/GoogleMapPage";
import VectorMap from "../../pages/maps/vector/Vector";
import Calendar from "../../pages/calendar/Calendar";
import Login from "../../pages/auth/login/Login";
import Register from "../../pages/auth/register/Register";

import s from "./Layout.module.scss";

const Layout = (props) => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <Header />
        <Sidebar />
        <main className={s.content}>
          <Breadcrumbs url={props.location.pathname} />
          <Switch>
            <Route path="/template" exact render={() => <Redirect to="template/dashboard"/>} />
            <Route path="/template/dashboard" exact component={Dashboard}/>
            <Route path="/template/user" exact render={() => <Redirect to={"/template/user/profile"} />}/>
            <Route path="/template/user/profile" exact component={Profile} />
            <Route path="/admin" exact render={() => <Redirect to="/admin/users" />} />
            <Route path="/admin/users" exact component={UserListPage} />
            <Route path="/admin/users/new" exact component={UserFormPage} />
            <Route path="/admin/users/:id/edit" exact component={UserFormPage} />
            <Route path="/admin/users/:id" exact component={UserViewPage} />
            <Route path="/template/password" exact component={ChangePasswordFormPage} />
            <Route path="/template/edit_profile" exact component={UserFormPage} />
            <Route path="/template/core" exact render={() => <Redirect to={"/template/core/typography"} />} />
            <Route path="/template/core/typography" exact component={Typography} />
            <Route path="/template/core/colors" exact component={Colors} />
            <Route path="/template/core/grid" exact component={Grid} />
            <Route path="/template/calendar" exact component={Calendar} />
            <Route path="/template/tables" exact component={Tables} />
            <Route path="/template/ui-elements" exact render={() => <Redirect to={"/template/ui-elements/alerts"} />} />
            <Route path="/template/ui-elements/alerts" exact component={Alerts} />
            <Route path="/template/ui-elements/badges" exact component={Badges} />
            <Route path="/template/ui-elements/buttons" exact component={Buttons} />
            <Route path="/template/ui-elements/cards" exact component={Cards} />
            <Route path="/template/ui-elements/carousel" exact component={Carousel} />
            <Route path="/template/ui-elements/jumbotron" exact component={Jumbotron} />
            <Route path="/template/ui-elements/icons" exact component={Icons} />
            <Route path="/template/ui-elements/lists" exact component={Lists} />
            <Route path="/template/ui-elements/modal" exact component={Modal} />
            <Route path="/template/ui-elements/navbars" exact component={Navbars} />
            <Route path="/template/ui-elements/navs" exact component={Navs} />
            <Route path="/template/ui-elements/notifications" exact component={Notifications} />
            <Route path="/template/ui-elements/progress" exact component={Progress} />
            <Route path="/template/ui-elements/popovers" exact component={Popover} />
            <Route path="/template/forms" exact render={() => <Redirect to={"/template/forms/elements"}/>} />
            <Route path="/template/forms/elements" exact component={Elements} />
            <Route path="/template/forms/validation" exact component={Validation} />
            <Route path="/template/forms/wizard" exact component={Wizard} />
            <Route path="/template/charts" exact render={() => <Redirect to={"/template/charts/other"}/>} />
            <Route path="/template/charts/line" exact component={LineCharts} />
            <Route path="/template/charts/pie" exact component={PieCharts} />
            <Route path="/template/charts/bar" exact component={BarCharts} />
            <Route path="/template/charts/other" exact component={OtherCharts} />
            <Route path="/template/maps" exact render={() => <Redirect to={"/template/maps/google"}/>} />
            <Route path="/template/maps/google" exact component={Maps} />
            <Route path="/template/maps/vector" exact component={VectorMap} />
            <Route path="/template/extra" exact render={() => <Redirect to={"/template/extra/charts"}/>} />
            <Route path="/template/extra/charts" exact component={Charts} />
            <Route path="/template/extra/login" exact component={Login} />
            <Route path="/template/extra/register" exact component={Register} />
            <Route path="/register" exact component={Register} />
            <Route path='*' exact render={() => <Redirect to="/error" />} />
          </Switch>
        </main>
        <Footer />
      </div>
    </div>
  );
}

Layout.propTypes = {
  sidebarOpened: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
}

function mapStateToProps(store) {
  return {
    sidebarOpened: store.navigation.sidebarOpened,
    currentUser: store.auth.currentUser,
  };
}

export default withRouter(connect(mapStateToProps)(Layout));
