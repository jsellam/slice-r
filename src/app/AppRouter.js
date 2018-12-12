import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import UploadPage from './pages/UploadPage/UploadPage'
import DesignPage from './pages/DesignPage/DesignPage'
import PreviewPage from './pages/PreviewPage/PreviewPage'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UploadPage} />
        <Route path="/design" component={DesignPage} />
        <Route path="/preview" component={PreviewPage} />
      </Switch>
    </Router>
  )
}

export default AppRouter