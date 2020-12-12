import './App.css';
import { Component } from 'react';
import {Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar/NavBar'
import ServiceProvider from './ServiceProvider/ServiceProvider'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component';

class App extends Component {

  state = {
    languages: [],
    service_providers: null,
    defaultLocale: localStorage['locale'] ? localStorage['locale'] : 'en',
    flag:''
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

      const defaultLanguageBundle = { ...this.state.languages[languageIndex] }

      localStorage.setItem('flag', defaultLanguageBundle.flag)

      this.setState({
        flag:defaultLanguageBundle.flag
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

  chooseLanguageHandler = (languageCode, flag) => {
    
    localStorage.setItem('locale', languageCode)
    localStorage.setItem('flag', flag)

    this.setState({
      flag:flag
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
        <NavBar languages={this.state.languages} chosen={this.chooseLanguageHandler} flag={this.state.flag}/>
        <Container>
        <br />
        <br/>
              {
              this.state.service_providers ? 
                <InfiniteScroll dataLength={this.state.service_providers.length}
                  hasMore={true}
                  className="row"
                >
                {
                    this.state.service_providers.map(provider => {
                      return <Col md={4}>
                       <ServiceProvider name={provider.name}
                          email={provider.email}
                          website={provider.website}
                          rating_score={provider.rating_score}
                          rating_count={provider.rating_count}
                          logo={provider.image}
                        />
                      </Col>              
                  })
                }
                </InfiniteScroll>
                :null
              }
        </Container>
      </div>
    );
  }

}

export default App;
