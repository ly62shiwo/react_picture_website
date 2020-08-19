import React, { useState, useEffect, createRef, useCallback } from "react";
import { getCategories, getPictureList } from "@/api/getData";
import ImgView from "@/component/imgList/imgView";

function WallPaper(props) {
  const [query, setQueryInfo] = useState({
    type: props.match.params.id || 10,
    start: 0,
    count: 30,
  }); // 获取照片query
  const [imgList, setImgList] = useState([]); // 照片

  useEffect(() => {
    getImgList();
  }, [query]);

  const getImgList = async () => {
    const res = await getPictureList({ ...query });
    console.log(res, "resres");
    if (res.data) {
      return setImgList(imgList.concat(res.data.data));
    }
  };

  return (
    <div>
      <ImgView list={imgList} />
    </div>
  );
}

export default WallPaper;
