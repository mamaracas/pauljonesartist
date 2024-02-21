import React from "react";
import { Box } from "rebass";
import NavigationItem from "./NavigationItem";

const Navigation = () => {
  return (
    <nav>
      <Box pt={[3]}>
        <ul style={{ padding: "0", textAlign: "center" }}>
          <NavigationItem to="/">Home</NavigationItem>
          <NavigationItem to="/land-work">Land Work</NavigationItem>
          <NavigationItem to="/statement">Statement</NavigationItem>
          <NavigationItem to="/paintings">Paintings</NavigationItem>
          <NavigationItem to="/books">Books</NavigationItem>
          <NavigationItem to="/exhibitions">Exhibitions</NavigationItem>
          <NavigationItem to="/contacts">Contacts</NavigationItem>
        </ul>
      </Box>
    </nav>
  );
};

export default Navigation;
