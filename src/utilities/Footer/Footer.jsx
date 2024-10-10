import { Avatar, Box } from "@mui/material";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";
import developer from "../../assets/img/developer.jpg";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, LinkedIn, Telegram, WhatsApp } from "@mui/icons-material";

function Footer() {
  const location = useLocation();

  return (
    <div className="footer">
      <Row>
        <Col sm={12} md={6} lg={4} className="box">
          <h2 className="aref-ruqaa-bold">القرآن الكريم</h2>
          <Box flex={1} />

          <div className="developer-context">
            {
              Array.from({ length: 6 }, (_, index) => {
                return (
                  <j className={`hover bt-${index + 1}`} key={index} />
                )
              })
            }

            <a
              href="https://www.linkedin.com/in/mohamed-mokhtar-245927277"
              target="_blank"
              className="developer-info"
            />
          </div>
        </Col>

        <Col sm={12} md={6} lg={4} className="box">
          <span className="fs-5 text-decoration-underline">الصفحات</span>

          <ul>
            <li>
              <Link
                to="/"
                className={`${location.pathname === "/" ? "active" : ""}`}
              >
                القرآن الكريم
              </Link>
            </li>

            <li>
              <Link
                to="/radio"
                className={`${location.pathname === "/radio" ? "active" : ""}`}
              >
                راديو إذاعة القرآن الكريم
              </Link>
            </li>

            <li>
              <Link
                to="/tv-live"
                className={`${location.pathname === "/tv-live" ? "active" : ""
                  }`}
              >
                تليفزيون إذاعة القرآن الكريم
              </Link>
            </li>
          </ul>
        </Col>

        <Col sm={12} md={6} lg={4} className="box">
          <span className="fs-5 text-decoration-underline">السوشيال ميديا</span>

          <ul className="social-icons">
            <li>
              <a href="https://facebook.com/lmohamedmokhtarl/" target="_blank">
                <span>Facebook</span>
                <span>
                  <Facebook />
                </span>
              </a>
            </li>

            <li>
              <a href="https://wa.me/+201022585956/" target="_blank">
                <span>Whatsapp</span>
                <span>
                  <WhatsApp />
                </span>
              </a>
            </li>

            <li>
              <a href="https://t.me/mohamedpr0o459" target="_blank">
                <span>Telegram</span>
                <span>
                  <Telegram />
                </span>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/mohamed-mokhtar-245927277"
                target="_blank"
              >
                <span>LinkedIn</span>
                <span>
                  <LinkedIn />
                </span>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
