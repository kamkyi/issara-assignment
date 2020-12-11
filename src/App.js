import './App.css';
import { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar/NavBar'
import ServiceProvider from './ServiceProvider/ServiceProvider'
import axios from 'axios'

class App extends Component {
  state = {
    languages: [],
    service_providers:null
  }
  componentWillMount() {
    axios.get('https://server-dot-ilm-client-dev.appspot.com/api/v1/localization/languages')
    .then(response => {
      this.setState({
          languages:response.data
      })
    });
  }

  chooseLanguageHandler = (languageCode) => {
    // window.alert(languageCode);
    axios.get('https://server-dot-ilm-client-dev.appspot.com/api/v1/service-providers?lang=' + languageCode)
      .then(response => {
        this.setState({
           service_providers:response.data
        })
      });
  }

  render() {
    return (
      <div>
        <NavBar languages={this.state.languages} chosen={this.chooseLanguageHandler}/>
        <Container>
          <Row>
    
              {
                this.state.service_providers ? 
                  this.state.service_providers.map(provider => {
                    return <Col md={4}><ServiceProvider name={provider.name}
                      email={provider.email}
                      website={provider.website}
                      rating_score={provider.rating_score}
                      rating_count={provider.rating_count}
                    /></Col>              
                  })
                :null
              }
          </Row>
        </Container>
      </div>
    );
  }

}

export default App;
