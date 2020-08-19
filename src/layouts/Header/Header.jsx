import React from "react";
import { Layout, Menu, Dropdown } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
function HeaderLayout(props) {
  console.log(props, "HeaderLayout");
  const { menus } = props;

  const getMenu = (menus) => {
    return menus.map((item) => {
      if (item && item.children) {
        return (
          <SubMenu
            key={item.key}
            title={
              <span>
                <span>{item.title}</span>
              </span>
            }
          >
            {getMenu(item.children)}
          </SubMenu>
        );
      } else {
        return (
          <MenuItem
            key={item.key}
            title={
              <span>
                <span>{item.title}</span>
              </span>
            }
          >
            <Link to={item.href}>
              <span>{item.title}</span>
            </Link>
          </MenuItem>
        );
      }
    });
  };
  return (
    <div>
      <Header>
        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={["1"]}>
          {getMenu(menus)}
        </Menu>
      </Header>
    </div>
  );
}

export default HeaderLayout;
