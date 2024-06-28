import {createRoot} from "react-dom/client"
import React from "react";
import { Admin, CustomRoutes, Resource } from "react-admin";
import { Route } from "react-router-dom";

import "./styles/main.scss"
import Portfolio from "./Portfolio";
import { CustomLayout } from "./Layout";
import {authProvider} from "./authProvider";
import {dataProvider} from "./dataProvider"
import { FeedbackList } from "./Feedback/FeedbackList";

const root = createRoot(document.getElementById('root'))
root.render (
  <React.StrictMode>
    <Admin layout={CustomLayout} authProvider={authProvider} dataProvider={dataProvider} requireAuth>
      <Resource name="feedback" list={FeedbackList}/>
      <CustomRoutes>
        <Route path="/portfolio" element={<Portfolio/>}/>
      </CustomRoutes>
    </Admin>
  </React.StrictMode>,
)