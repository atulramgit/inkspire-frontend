import BlogContainer from './ui_components/BlogContainer';
import Footer from './ui_components/Footer';
import Header from './ui_components/Header';
import Navbar from './ui_components/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <BlogContainer/>
      <Footer/>
    </div>
  )
}

export default App