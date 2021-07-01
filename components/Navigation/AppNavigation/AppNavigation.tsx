import { ReactNode, Component } from 'react';
import { withRouter, Router } from 'next/router';

import { screenSizes } from '../../../constants/screensizes';
import Navigation from '../Navigation';

import styles from './AppNavigation.module.scss';

interface AppNavigationProps {
  children: ReactNode;
  router: Router;
}

interface AppNavigationState {
  width: number;
  height: number;
}

class AppNavigation extends Component<AppNavigationProps, AppNavigationState> {
  constructor(props: AppNavigationProps) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    const handleResize = () => {
      // Set window width/height to state
      this.setState((prev) => ({
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    };
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
  }

  render() {
    if (this.state.width < screenSizes.MD) {
      return (
        <>
          <Navigation.NavContent className={styles.navContent}>
            <div className="container">{this.props.children}</div>
          </Navigation.NavContent>
          <Navigation.NavBar className={styles.navBar}>
            <Navigation.NavItem
              className={styles.navItem}
              onClick={(e) => this.props.router.push('/stats')}
            >
              stats
            </Navigation.NavItem>
            <Navigation.NavItem
              className={styles.navItem}
              onClick={(e) => this.props.router.push('/workouts')}
            >
              workout
            </Navigation.NavItem>
            <Navigation.NavItem
              className={styles.navItem}
              onClick={(e) => this.props.router.push('/profile')}
            >
              profile
            </Navigation.NavItem>
          </Navigation.NavBar>
        </>
      );
    }
    return (
      <>
        <Navigation.NavContent>{this.props.children}</Navigation.NavContent>
        <Navigation.NavSideBar>nvabar</Navigation.NavSideBar>
      </>
    );
  }
}

export default withRouter(AppNavigation);
