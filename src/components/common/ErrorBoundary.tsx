import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Tesa Gancia Uncaught Error:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  private handleGoHome = () => {
    window.location.href = '/';
  };

  public render() {
    if (this.state.hasError) {
      const BRAND_LOGO_URL = 'https://i.ibb.co/9HC7vD2h/IMG-20261026-WA0097.jpg';

      return (
        <div className="min-h-screen bg-[#FAF5FE] text-[#220A3D] flex items-center justify-center p-6 relative overflow-hidden">
          {/* Subtle violet ambient glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#7B2CBF]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-lg w-full text-center relative z-10 border border-[#EADBFA] bg-white p-8 md:p-12 shadow-xl rounded-sm">
            {/* Brand Logo ONLY */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-[#EADBFA] p-0.5 overflow-hidden flex items-center justify-center shadow-sm">
              <img
                src={BRAND_LOGO_URL}
                alt="Logo Tesa Gancia"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <p className="text-xs uppercase tracking-[0.25em] text-[#7B2CBF] mb-3 font-semibold">
              Maison Tesa Gancia
            </p>

            <h1 className="font-serif text-2xl sm:text-3xl text-[#260C45] mb-4">
              Une Parenthèse Imprévue
            </h1>

            <p className="text-sm text-[#6C5B82] mb-8 leading-relaxed font-sans">
              L’expérience de navigation a rencontré une irrégularité momentanée. Veuillez recharger la page pour retrouver la plénitude de la Maison.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReload}
                className="px-6 py-3 min-h-[44px] bg-gradient-to-r from-[#7B2CBF] via-[#9D4EDD] to-[#7B2CBF] text-white text-xs uppercase tracking-[0.15em] font-semibold transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md rounded-sm"
              >
                Recharger la Page
              </button>
              <button
                onClick={this.handleGoHome}
                className="px-6 py-3 min-h-[44px] border border-[#EADBFA] text-[#260C45] hover:border-[#7B2CBF] hover:text-[#7B2CBF] text-xs uppercase tracking-[0.15em] transition-colors duration-300 cursor-pointer rounded-sm bg-white"
              >
                Retour à l'Accueil
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
