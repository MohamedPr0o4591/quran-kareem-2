import { Col, Container, Row } from "react-bootstrap";
import "./RadioPage.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRadios } from "../../Redux/Actions/allActions";
function RadioPage() {
  const [radioType, setRadioType] = useState("");
  const radiosData = useSelector((state) => state.GET_RADIOS.radio);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRadios());
  }, []);

  useEffect(() => {
    const audio = document.querySelector(".quranPlayer");

    if (radioType) {
      const newData = radiosData.filter((data) => data.id == radioType);

      if (newData && audio.src !== newData[0].url) {
        audio.src = newData[0].url;
        audio.play();
      }
    }
  }, [radioType]);

  return (
    <div className="radioPage">
      <div className="bgQuran-container">
        <div className="bgQuran">
          <h2 className="aref-ruqaa-regular">راديو إذاعة القرآن الكريم</h2>

          <div className="quran-container">
            <Container className="container">
              <Row>
                <Col className="col-sm-12 col-md-6 col-lg-4 col">
                  <span>نوع الإذاعة</span>

                  <select
                    value={radioType}
                    onChange={(e) => setRadioType(e.target.value)}
                  >
                    <option value="">اختر نوع الإذاعة</option>
                    {radiosData?.length > 0 &&
                      radiosData.map((radio) => {
                        return (
                          <option key={radio.id} value={radio.id}>
                            {radio.name}
                          </option>
                        );
                      })}
                  </select>
                </Col>
              </Row>
              {radioType && <audio src="" className="quranPlayer" controls />}
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RadioPage;
