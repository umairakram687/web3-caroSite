import './App.css';
import Header from './components/layout/header/Header';
import Router from './router';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import Footer from './components/layout/footer/Footer';
import Loader from './components/loader/Loader';
import { useStateContext } from './context/StateContext';

function App() {

  const { loading } = useStateContext()

  return (
    <>
      {loading === true ?
        (
          <Loader />
        ) :
        <div className='w-full max-w-[2140px] mx-auto'>
          <Header />
          <style jsx="true">{`
    ::-webkit-scrollbar {
          width: 5px !important;
          background-color: transparent;
        }
        
        ::-webkit-scrollbar-thumb {
          background-color: #fd8d14;
        }
      `}</style>
          <Router />
          <ScrollToTop />
          <Footer />
        </div>
      }
    </>
  );
}

export default App;
