import React from "react";
import { Tag, Divider } from "antd";
import "./style.scss";

function TypeNav(props) {
  const { list } = props;
  console.log(list, "lllllll");
  return (
    <>
      <div className='tag'>
        {list.map((item,key) => {
          return <Tag key={item.key} onClick={() => props.onMenuClick(item)}>{item.title}</Tag>;
        })}
      </div>
      <Divider></Divider>
    </>
  );
}

export default TypeNav;
