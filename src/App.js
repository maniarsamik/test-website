import React, { Component } from 'react';
import Routes from "./routes/routes";
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faClock, faMobileAlt, faGlobe} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faGooglePlus } from '@fortawesome/free-brands-svg-icons'
library.add(faStroopwafel, faFacebook, faGooglePlus, faTwitter, faClock, faMobileAlt, faGlobe)
class App extends Component {
  render() {
    return (
      <Routes />
    );
  }
}

export default App;