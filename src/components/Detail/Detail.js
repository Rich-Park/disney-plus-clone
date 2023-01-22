import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// firebase imports
import db from "../../firebase";
import { doc, getDoc } from "firebase/firestore";

// Style Imports
import "./Detail.scss";

const Detail = () => {
  const { id } = useParams();
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    const getDetailData = async () => {
      const docRef = doc(db, "movies", id);

      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDetailData(docSnap.data());
        } else {
          console.log("No such document in firebase");
        }
      } catch (err) {
        console.log("Error getting document: ", err);
      }
    };
    getDetailData();
  }, [id]);

  return (
    <div className="detail__container">
      <div className="detail__background">
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </div>
      <div className="detail__imageTitle">
        <img src={detailData.titleImg} alt={detailData.title} />
      </div>
      <div className="contentMeta">
        <div className="controls">
          <button className="player">
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </button>
          <button className="trailer">
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </button>
          <div className="addList">
            <span />
            <span />
          </div>
          <div className="groupwatch">
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </div>
        </div>
        <div className="subtitle">{detailData.subTitle}</div>
        <div className="description">{detailData.description}</div>
      </div>
    </div>
  );
};

export default Detail;
