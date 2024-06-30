import { Box, IconButton, Stack } from "@mui/material";
import "./NavBar.css";
import { navData } from "./data";
import { Link, useLocation } from "react-router-dom";
import { MenuOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";

function NavBar() {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    setShowMenu(false);
  }, [location.pathname]);

  return (
    <nav className="navbar">
      <Stack direction={"row"} alignItems={"center"} width={100 + "%"}>
        <ul className="long-menu">
          {navData?.map((item) => {
            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>

        <Box
          className="nav-smallScreen"
          sx={{
            height: showMenu ? "auto" : 0,
            padding: showMenu ? "30px 0" : 0,
          }}
        >
          <ul className="flex-column">
            {navData?.map((item) => {
              return (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={location.pathname === item.path ? "active" : ""}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </Box>

        <IconButton onClick={(_) => setShowMenu(!showMenu)} className="menu">
          <MenuOutlined sx={{ fontSize: "2rem" }} />
        </IconButton>

        <Box flex={1} />
        <p className="aref-ruqaa-regular user-select-none">القرآن الكريم</p>
      </Stack>
    </nav>
  );
}
export default NavBar;
