type AppLayoutProps = {
  Header: () => JSX.Element | null
  Main: () => JSX.Element | null
  Footer: () => JSX.Element | null
}

export default function AppLayout({ Header, Main, Footer }: AppLayoutProps) {
  return (
    <div className="entries-layout">
      <header>
        <div className="bg-picture"></div>
        <nav className="flex">
          <Header />
        </nav>
      </header>
      <main>
        <Main />
        <div className="bg-picture"></div>
      </main>
      <footer>
        <div className="bg-picture"></div>
        <nav className="flex">
          <Footer />
        </nav>
      </footer>
    </div>
  )
}
