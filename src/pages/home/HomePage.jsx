import { Col, Container, Row } from "react-bootstrap";
import "./HomePage.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllReciters,
  getAllSurahs,
  getMoshafReciter,
} from "../../Redux/Actions/allActions";

function HomePage() {
  const recitersData = useSelector((state) => state.GET_ALL_RECITERS.reciters);
  const moshafReciter = useSelector((state) => state.GET_ALL_MOSHAF.moshaf);
  const surahsData = useSelector((state) => state.GET_SURAHS.surah);
  const dispatch = useDispatch();

  const [reciterDetails, setReciterDetails] = useState([]);

  useEffect(() => {
    dispatch(getAllReciters());
    dispatch(getAllSurahs());
  }, []);

  useEffect(() => {
    if (reciterDetails.reciterId) {
      dispatch(getMoshafReciter(reciterDetails.reciterId));
    }

    if (reciterDetails.moshafId) {
      const q = reciterDetails?.server[0].moshaf;

      if (q) {
        q.map((item) => {
          const s = q.filter((item) => item.id == reciterDetails.moshafId);

          if (s.length > 0) {
            let audio = document.querySelector(".quranPlayer");

            if (
              audio &&
              audio.src !==
                `${s[0].server}${reciterDetails.surahId
                  .toString()
                  .padStart(3, "0")}.mp3`
            ) {
              audio.src = `${s[0].server}${reciterDetails.surahId
                .toString()
                .padStart(3, "0")}.mp3`;

              audio.play();
            }
          }
        });
      }
    }
  }, [reciterDetails]);

  return (
    <div className="homePage">
      <div className="bgQuran-container">
        <div className="bgQuran">
          <h2 className="aref-ruqaa-regular">القرآن الكريم</h2>
          <p className="aref-ruqaa-regular">
            تلاوات رائعة من افضل قراء القرآن الكريم
          </p>

          <div className="quran-container">
            <Container className="container">
              {recitersData?.length > 0 && (
                <Row>
                  <Col className="col-sm-12 col-md-6 col-lg-4 col">
                    <span>اسم القارئ</span>

                    <select
                      value={reciterDetails.reciterId}
                      onChange={(e) => {
                        const reciterId = e.target.value;
                        const server = recitersData.filter(
                          (item) => item.id == reciterId
                        );
                        setReciterDetails({
                          ...reciterDetails,
                          reciterId,
                          server,
                        });
                      }}
                    >
                      <option value="">اختر قارئ</option>
                      {recitersData?.map((reciter) => {
                        return (
                          <option
                            value={reciter.id}
                            key={reciter.id}
                            data-server={reciter.server}
                          >
                            {reciter.name}
                          </option>
                        );
                      })}
                    </select>
                  </Col>

                  {moshafReciter?.length > 0 && reciterDetails.reciterId && (
                    <Col className="col-sm-12 col-md-6 col-lg-4 col">
                      <span>نوع المصحف</span>

                      <select
                        value={reciterDetails.moshafId}
                        onChange={(e) => {
                          setReciterDetails({
                            ...reciterDetails,
                            moshafId: e.target.value,
                          });
                        }}
                      >
                        <option value="">حدد نوع المصحف</option>

                        {moshafReciter[0]?.moshaf?.map((moshaf) => {
                          return (
                            <option key={moshaf.id} value={moshaf.id}>
                              {moshaf.name}
                            </option>
                          );
                        })}
                      </select>
                    </Col>
                  )}

                  {surahsData?.length > 0 && reciterDetails.reciterId && (
                    <Col className="col-sm-12 col-md-6 col-lg-4 col">
                      <span>اسم السورة</span>

                      <select
                        onChange={(e) => {
                          setReciterDetails({
                            ...reciterDetails,
                            surahId: e.target.value,
                          });
                        }}
                        value={reciterDetails.surahId}
                      >
                        <option value="">حدد اسم السورة</option>
                        {surahsData?.map((surah) => {
                          return (
                            <option key={surah.id} value={surah.id}>
                              سورة {surah.name}
                            </option>
                          );
                        })}
                      </select>
                    </Col>
                  )}
                </Row>
              )}
              {reciterDetails.surahId && reciterDetails?.server && (
                <audio src="" className="quranPlayer" controls />
              )}
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
