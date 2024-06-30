import React, { useEffect, useState } from "react";
import "./TvLive.css";
import { Col, Container, Row } from "react-bootstrap";
import { Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllTvLiveData } from "../../Redux/Actions/allActions";
import Hls from "hls.js";

function TvLive() {
  const [active, setActive] = useState("");
  const data = useSelector((state) => state.GET_TV_LIVE.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllTvLiveData());
  }, []);

  useEffect(() => {
    if (active !== "") {
      const newData = data.filter((i) => i.id == active);
      if (Hls.isSupported()) {
        var video = document.querySelector(".quranVideoPlayer");
        var hls = new Hls();
        hls.loadSource(newData[0].url);
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function () {
          video.play();
        });
      }
    }
  }, [active]);

  return (
    <div className="tvLive">
      <div className="component">
        <div className="bgQuran-container">
          <div className="bgQuran">
            <h2 className="aref-ruqaa-regular">إذاعة تليفزيون مباشر</h2>

            <div className="quran-container">
              <Container className="container">
                <Stack direction={"row"} alignItems={"center"} gap={2}>
                  {data?.length > 0 &&
                    data.map((item) => {
                      return (
                        <Button
                          key={item.id}
                          variant={`${
                            active === item.id ? "contained" : "outlined"
                          }`}
                          color="warning"
                          sx={{
                            flex: 1,
                            p: 1.5,
                            fontSize: 20,
                            fontWeight: 600,
                          }}
                          onClick={(_) => setActive(item.id)}
                        >
                          {item.name}
                        </Button>
                      );
                    })}
                </Stack>
              </Container>
            </div>
          </div>
        </div>
      </div>

      <Container className="mt-5">
        <video src="" controls className="quranVideoPlayer" />
      </Container>
    </div>
  );
}

export default TvLive;
