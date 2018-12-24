import HomeContainer from '../containers/HomeContainer'
import AboutPage from '../components/pages/AboutPage'
import NotFoundContainer from '../containers/DefaultRouteContainer'
import PanelLeftMenu from '../components/modals/PanelLeft'
import LoginScreen from '../components/modals/LoginScreen'
import Popup from '../components/modals/Popup'

export default [
  {
    path: '/',
    component: HomeContainer
  },
  {
    path: '/panel-left/',
    panel: {
      component: PanelLeftMenu
    }
  },
  {
    path: '/about/',
    component: AboutPage
  },
  {
    path: '/login/',
    loginScreen: {
      component: LoginScreen
    }
  },
  {
    path: '/popup/',
    popup: {
      component: Popup
    }
  },
  {
    path: '(.*)',
    component: NotFoundContainer
  }
]
