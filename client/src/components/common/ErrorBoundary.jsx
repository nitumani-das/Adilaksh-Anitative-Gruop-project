import { Component } from 'react';

/**
 * Class component is required here — React error boundaries must use
 * getDerivedStateFromError/componentDidCatch, which hooks don't support.
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('Uncaught application error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
          <h1 className="font-display text-3xl text-forest-900 mb-3">Something went wrong</h1>
          <p className="text-charcoal-700 mb-6 max-w-md">
            We hit an unexpected error loading this page. Try refreshing, or head back home.
          </p>
          <button
            onClick={() => window.location.assign('/')}
            className="rounded-full bg-forest-900 text-cream-100 px-6 py-3 text-sm font-semibold hover:bg-forest-800 transition-colors"
          >
            Return Home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
