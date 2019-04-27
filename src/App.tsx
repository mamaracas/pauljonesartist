import React, { SFC } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Home from './Home'
import About from './About'
import { Flex } from 'rebass'
import Footer from './components/Footer'
import styled from 'styled-components'
import 'styled-components/macro'

const FullHeightFlex = styled(Flex)`
  height: 100%;
`
const App: SFC = () => {
  return (
    <Router>
      <FullHeightFlex flexDirection="column" px={['0', '10%', '15%', '20%']}>
        <Flex flex={'0 0 auto'}>
          <Header />
        </Flex>
        <Flex flex={'2 0 auto'}>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </main>
        </Flex>
        <Flex flex={'0 0 auto'}>
          <Footer />
        </Flex>
      </FullHeightFlex>
    </Router>
  )
}

export default App
