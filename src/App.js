import './App.css';
import { Component } from 'react';
import {Row , Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar/NavBar'
import ServiceProvider from './ServiceProvider/ServiceProvider'
import axios from 'axios'

class App extends Component {

  state = {
    languages: [],
    service_providers: null,
    defaultLocale: localStorage['locale'] ? localStorage['locale'] : 'en',
    language:localStorage['language'] ? localStorage['language'] : {},
  }

  componentWillMount() {
    axios.get('/localization/languages')
    .then(response => {
      this.setState({
          languages:response.data
      })
      
      const languageIndex = this.state.languages.findIndex(language => {
        return language.code === this.state.defaultLocale;
      })

      const currentLanguage = { ...this.state.languages[languageIndex] }

      localStorage.setItem('language', currentLanguage)

      this.setState({
        language:currentLanguage
      })

    });
  }

  componentDidMount() {
    const locale = this.state.defaultLocale;

    axios.get('/service-providers?lang=' + locale)
    .then(response => {
      this.setState({
         service_providers:response.data
      })
    });
  }

  chooseLanguageHandler = (languageCode, language) => {
    
    localStorage.setItem('locale', languageCode)
    localStorage.setItem('language', language)

    this.setState({
      language:language
    })
    
    axios.get('/service-providers?lang=' + languageCode)
      .then(response => {
        this.setState({
           service_providers:response.data
        })
      });
  }

  render() {
    return (
      <div>
        <NavBar languages={this.state.languages} chosen={this.chooseLanguageHandler} language={this.state.language}/>
        <Container>
        <br />
        <br/>
              {
              this.state.service_providers ? 
                <Row>
                {
                    this.state.service_providers.map((provider,index) => {
                      return <Col md={3} key={index}>
                        <ServiceProvider name={provider.name}
                          key={provider.email}
                          email={provider.email}
                          website={provider.website}
                          rating_score={provider.rating_score}
                          rating_count={provider.rating_count}
                          logo={provider.image}
                        />
                      </Col>              
                  })
                }
                </Row>
                :null
              }
        </Container>
      </div>
    );
  }

}

export default App;
