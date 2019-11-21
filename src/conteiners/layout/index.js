import React from "react"
import {Switch, Route} from "react-router"

import Header from "../../components/header"
import KharkivToday from "../../conteiners/kharkivToday"
import KharkivFiveDays from "../kharkivFiveDays"

const Routes = (
    <Switch>
        <Route path="/kharkiv_today" component={KharkivToday} />
        <Route path="/kharkiv_five_days" component={KharkivFiveDays} />
    </Switch>
)

const Layout = () => (
    <div className="layout-block">
        <div className="block-head">
            <Header />
        </div>
        <div className="block-main">
            {Routes}
        </div>
    </div>
)

export default Layout;

