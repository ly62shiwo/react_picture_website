import React, { useState, useEffect, createRef, useCallback } from "react";
import InfiniteScroll from 'react-infinite-scroller'
import { getCategories, getPictureList } from "@/api/getData";
import ImgView from "@/component/imgList/imgView";
import TypeNav from "@/component/TypeNav/TypeNav";

function WallPaper(props) {
  const [query, setQueryInfo] = useState({
    type: props.match.params.id || 10,
    start: 0,
    count: 30,
  }); // 获取照片query
  const [imgList, setImgList] = useState([]); // 照片
  const [typeList, setTypeList] = useState([]); // 类别
  const [spin, setSpin] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // is loading img

  useEffect(() => {
    getImgList();
  }, [query]);

  useEffect(() => {
    getType();
  }, []);

  const getImgList = async () => {
    const res = await getPictureList({ ...query });
    console.log(res, "resres");
    if (res.status === 200 && res.data) {
      if (res.data.data.length < 10) {
        setHasMore(false);
      }
      setImgList(imgList.concat(res.data.data));
    }
    setSpin(false);
    setIsLoading(false);
  };

  const getType = async () => {
    const res = await getCategories();
    if (res.status === 200 && res.data) {
      setTypeList(typeList.concat(res.data.data));
    }
  };

  const changeImgType = (item) => {
    if (item.key !== query.type) {
      props.history.push("/wallpaper/" + item.key);
    }
    setImgList([]);
    setIsLoading(true);
    setQueryInfo({ ...query, type: item.key });
  };
  const loadMoreImgs = () => {
    setIsLoading(true)
    // setImgList([]);
    console.log(111111);
    setQueryInfo({...query, start: query.start + query.count})
  }

  return (
    <div>
      <TypeNav list={typeList} onMenuClick={changeImgType} />
      
      <InfiniteScroll
        initialLoad
        pageStart={0}
        loadMore={loadMoreImgs}
        hasMore={ hasMore && !isLoading }
        threshold={100}
      >
        <ImgView list={imgList} spinning={spin} />
      </InfiniteScroll>
    </div>
  );
}

export default React.memo(WallPaper);
