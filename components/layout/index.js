import Head from './head'
import Header from './header'
import Footer from './footer'

export default ({ children, title = 'Casting.ai - Grandpa :)' }) => (
  <div>
    <Head />
    <Header />
    { children }
    <Footer />
  </div>
)
