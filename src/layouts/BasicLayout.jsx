import React from "react";
import { renderRoutes } from "react-router-config";
import { Redirect, Switch } from "react-router-dom";
import { Layout } from "antd";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MenusList from '@/config/menu.js'

const { Content} = Layout;
function BasicLayout(props) {
  const { route } = props;
  console.log(props, "pro");

  return (
    <Layout>
      <Header menus={MenusList}/>

      <Content style={{ padding: '0 35px', minHeight: '85vh', background: '#ffff' }}>
        <Switch>
          {renderRoutes(route.routes)}
          <Redirect to='/error/404' />
        </Switch>
      </Content>

      <Footer/>
    </Layout>
  );
}

export default React.memo(BasicLayout);
