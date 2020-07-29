import React, { memo } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Provider as ReduxProvider } from "react-redux";

const ContextType = {
  // Universal HTTP client
  fetch: PropTypes.func.isRequired,
  pathname: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  query: PropTypes.object,
  // eslint-disable-next-line react/forbid-prop-types
  store: PropTypes.any,
  // eslint-disable-next-line react/forbid-prop-types
  storeSubscription: PropTypes.any,
  token: PropTypes.string,
  ...ReduxProvider.childContextTypes,
};

/**
 * The top-level React component setting context (global) variables
 * that can be accessed from all the child components.
 *
 * https://facebook.github.io/react/docs/context.html
 *
 * Usage example:
 *
 *   const context = {
 *     history: createBrowserHistory(),
 *     store: createStore(),
 *   };
 *
 *   ReactDOM.render(
 *     <App context={context}>
 *       <Layout>
 *         <LandingPage />
 *       </Layout>
 *     </App>,
 *     container,
 *   );
 */
class App extends React.PureComponent {
  static propTypes = {
    children: PropTypes.element.isRequired,
    context: PropTypes.shape(ContextType).isRequired,
  };

  state = {
    isShow: false,
    isClient: false,
  };

  static whyDidYouRender = true;

  static childContextTypes = ContextType;

  getChildContext() {
    const { context } = this.props;
    return context;
  }

  componentDidMount() {
    const {
      props: { dispatch },
    } = this;

    if (typeof window !== "undefined") {
      const isHaveLang = localStorage.getItem("chatLang");
      if (isHaveLang) {
        dispatch({
          type: "SET_CURRENT_LANG",
          lang: isHaveLang,
        });
        this.setState({ isShow: true, isClient: true });
      } else {
        const userLang = navigator.language || navigator.userLanguage;
        switch (userLang) {
          case "uk":
            dispatch({
              type: "SET_CURRENT_LANG",
              lang: "uk",
            });
            localStorage.setItem("chatLang", "uk");
            break;
          case "en":
            dispatch({
              type: "SET_CURRENT_LANG",
              lang: "en",
            });
            localStorage.setItem("chatLang", "en");
            break;
          case "ru":
            dispatch({
              type: "SET_CURRENT_LANG",
              lang: "ru",
            });
            localStorage.setItem("chatLang", "ru");
            break;
          default:
            dispatch({
              type: "SET_CURRENT_LANG",
              lang: "en",
            });
            localStorage.setItem("chatLang", "en");
        }
        this.setState({ isShow: true, isClient: true });
      }
    } else {
      this.setState({ isClient: false });
    }
  }

  render() {
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    const {
      props: { children },
      state: { isShow },
    } = this;

    return isShow && React.Children.only(children);
  }
}
// export default memo(App);
export default connect(null)(memo(App));
