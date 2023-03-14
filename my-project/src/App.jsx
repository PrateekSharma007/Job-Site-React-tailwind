
import './App.css'
import './index.css';
import Navbar from "./Components/Navbar/Navbar"
import Search from "./Components/SearchDiv/Search"
import Jobs from "./Components/JobDiv/Jobs"
import Footer from "./Components/Footer/Footer";
import Value from "./Components/Value/Value"

function App() {

  return (
    <div className = "">
      <Navbar />
      <Search />
      <Jobs />
      <Value/>
      <Footer />
    </div>
  )
}

export default App;
