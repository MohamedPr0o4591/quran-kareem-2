import { Box, Stack } from "@mui/material";
import "./NavBar.css";
import { navData } from "./data";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <Stack direction={"row"} alignItems={"center"} width={100 + "%"}>
        <ul>
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

        <Box flex={1} />
        <p className="aref-ruqaa-regular user-select-none">القرآن الكريم</p>
      </Stack>
    </nav>
  );
}
export default NavBar;
