import React from "react";
import { Card } from "antd";
import "./style.scss";

const { Meta } = Card;
function imgView(props) {
  const { list } = props;
  console.log(list, "pppppp");
  return (
    <div className='imgCard'>
      {list.length > 0
        ? list.map((item, key) => {
            return (
              <Card
                key={key}
                hoverable
                style={{ width: 360, margin: 5 }}
                cover={<img alt='example' src={item.url} />}
              >
                <Meta title={item.utag} description={item.resolution} />
              </Card>
            );
          })
        : null}
    </div>
  );
}

export default imgView;
