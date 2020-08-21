import React, { useState, useEffect } from "react";
import { EyeFilled, HeartFilled } from "@ant-design/icons";
import { Card, Spin, Drawer, BackTop } from "antd";
import "./style.scss";

const { Meta } = Card;

function ImgView(props) {
  const { list, spinning } = props;
  // console.log(list, "pppppp");
  const [show, setShow] = useState(0);
  const [showImg, setShowImg] = useState(false);
  const [id, setId] = useState();
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const style = {
    height: 40,
    width: 40,
    lineHeight: "40px",
    borderRadius: 4,
    backgroundColor: "rgba(0,0,0,.45)",
    color: "#fff",
    textAlign: "center",
    fontSize: 14,
  };

  return (
    <div className='imgCard'>
      {list.length > 0
        ? list.map((item, key) => {
            return (
              <div
                onMouseEnter={() => setShow(1)}
                onMouseLeave={() => {
                  setShow(0);
                }}
              >
                <Spin spinning={spinning}>
                  <Card
                    key={item.id}
                    hoverable
                    onMouseOver={() => setId(item.id)}
                    style={{ width: 360, margin: 5 }}
                    cover={<img alt='example' src={item.url} />}
                  >
                    {show === 1 && id === item.id ? (
                      <div className='bulletFrame'>
                        <EyeFilled
                          onClick={() => setShowImg(true)}
                          style={{ fontSize: 20, marginLeft: 10 }}
                        />
                        <HeartFilled
                          onClick={() => setVisible(true)}
                          style={{ fontSize: 20, marginLeft: 10 }}
                        />
                      </div>
                    ) : null}
                    <Meta title={item.utag} description={item.resolution} />
                  </Card>
                </Spin>
                <div>
                  {showImg === true && id === item.id ? (
                    <div className='bigImg' onClick={() => setShowImg(false)}>
                      <div className='occupy'>
                        <img src={item.url} alt='' />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })
        : null}
      <BackTop>
        <div style={style}> ^ </div>
      </BackTop>
      <Drawer
        title=''
        placement='top'
        closable={false}
        onClose={onClose}
        visible={visible}
        style={{ position: "absolute" }}
      >
        <div>
          {list.map((item) => {
            let data = [];
            if (id === item.id) {
              data = item;
              return (
                <img
                  style={{ width: 200, height: 100 }}
                  src={data.url_mid}
                ></img>
              );
            }
          })}
          <div>emmmmmmmmm..........</div>
        </div>
      </Drawer>
    </div>
  );
}

export default React.memo(ImgView);
