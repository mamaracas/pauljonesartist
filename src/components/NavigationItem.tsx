import React, { SFC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Route } from 'react-router-dom'

const StyledLi = styled.li`
  display: inline;
  margin-right: 5px;

  background-color: #2e363a;
  color: #d7d7d7;
  padding: 5px 10px 0;
  padding-bottom: 0;
  a,
  a:visited {
    color: #d7d7d7;
    text-decoration: none;
  }
`
const StyledSelectedLi = styled(StyledLi)`
  color: #2e363a;
  background-color: #d7d7d7;
  a,
  a:visited {
    color: #2e363a;
    text-decoration: none;
  }
`
const Navigation: SFC<{ to: string }> = ({ to, children }) => {
  return (
    <Route
      path={to}
      children={({ match }) => {
        console.log(match, to)
        return (
          <>
            {match && match.isExact && (
              <StyledSelectedLi>
                <Link to={to}>{children}</Link>
              </StyledSelectedLi>
            )}
            {!(match && match.isExact) && (
              <StyledLi>
                <Link to={to}>{children}</Link>
              </StyledLi>
            )}
          </>
        )
      }}
    />
  )
}

export default Navigation
