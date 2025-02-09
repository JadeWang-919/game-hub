import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar></NavBar>
      <Box paddingX={6} paddingBottom={6}>
        <Outlet></Outlet>
      </Box>
    </>
  );
};

export default Layout;
