import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Route } from "react-router-dom";
import { Text } from "rebass";

const StyledLi = styled.li`
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid #2e363a;
  color: #d7d7d7;
  padding: 5px 10px 0;
  padding-bottom: 0;
  a,
  a:visited {
    color: #d7d7d7;
    text-decoration: none;
    position: relative;
    top: -3px;
  }
`;
const StyledSelectedLi = styled.li`
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
  border-bottom: 1px solid #2e363a;
  color: #d7d7d7;
  padding: 5px 10px 0;
  padding-bottom: 0;
  a,
  a:visited {
    color: #d7d7d7;
    text-decoration: none;
    position: relative;
    top: -3px;
  }
  border-bottom: 1px solid #d7d7d7;
  a,
  a:visited {
    color: #d7d7d7;
    text-decoration: none;
  }
`;
const StyledText = styled(Text)`
  display: inline-block;
`;
const Navigation = ({ to, children }) => {
  return (
    <Route
      path={to}
      children={({ match, location }) => {
        return (
          <>
            {match &&
              (match.isExact ||
                (to.length > 1 && location.pathname.indexOf(to) > -1)) && (
                <StyledSelectedLi>
                  <StyledText fontSize={[1, 2]}>
                    <Link to={to}>{children}</Link>
                  </StyledText>
                </StyledSelectedLi>
              )}
            {((match && !match.isExact && to.length === 1) || !match) && (
              <StyledLi>
                <StyledText fontSize={[1, 2]}>
                  <Link to={to}>{children}</Link>
                </StyledText>
              </StyledLi>
            )}
          </>
        );
      }}
    />
  );
};

export default Navigation;
