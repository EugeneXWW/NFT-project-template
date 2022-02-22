import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

library.add(fab, faUser)

function App() {
  return (
    <div className="App">
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
