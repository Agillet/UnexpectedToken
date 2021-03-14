import { PageTransition } from '@steveeeie/react-page-transition';
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Route, Switch, useHistory, } from 'react-router';
import Home from './components/Home';
import NavArrows from './components/icons/NavArrows';
import Skills from './components/Skills';

function Router() {
  const history = useHistory();
  const [pageIndex, setPageIndex] = useState(0);
  const [navAnimation, setNavAnimation] = useState("moveToLeftFromRight");

  const pages = useMemo(() => [
    '/',
    '/skills',
  ], []);


  useEffect(() => {
    history.push(pages[pageIndex]);
  }, [pageIndex, history, pages]);

  const onPrevious = () => {
    setNavAnimation("moveToRightFromLeft");
    if (pageIndex === 0) {
      setPageIndex(pages.length - 1);
    } else {
      setPageIndex(prev => prev - 1);
    }
  }

  const onNext = () => {
    setNavAnimation("moveToLeftFromRight");
    if (pageIndex === pages.length - 1) {
      setPageIndex(0);
    } else {
      setPageIndex(prev => prev + 1);
    }
  }

  return (
    <div className="App">
      <NavArrows
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset={navAnimation}
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/skills" component={Skills} />
              </Switch>
            </PageTransition>
          );
        }}
      />
    </div >
  )
}

export default Router
