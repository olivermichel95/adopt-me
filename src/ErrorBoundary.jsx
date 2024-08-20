import { Component } from "react";
export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
    // Update state so the next render will show the fallback UI.
  }

  componentDidCatch(error, errorInfo) {
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong.</h2>;
      // You can render any custom fallback UI
    }

    return this.props.children;
  }
}
