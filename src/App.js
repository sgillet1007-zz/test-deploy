import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'

import ScrollToTop from './components/scroll_to_top'
import PageFooter from './components/page_footer'
import PageHeader from './components/page_header'
import Home from './components/home_page'
import Music from './components/music_page'
import Media from './components/media_page'
import Contact from './components/contact_page'

import expand_menu from './images/icons/expand_menu.png'
import expand_less from './images/icons/expand_less.png'
class App extends Component {
    constructor(props) {
        super(props)

        this.state ={
            show_nav: false
        }
    }

    onToggle = () => {
        this.setState({ show_nav: !this.state.show_nav})
    }

    renderNavToggle = () => {
        if(this.state.show_nav){
            return (
                <img src={expand_less} alt="hide" height="25px" width="25px" />
            )
        } else {
            return (
                <img src={expand_menu} alt="show" height="25px" width="25px" />
            )
        }
    }

    render() {
        return (
        <div className="App">
            <Router>
                <ScrollToTop>
                    <div id="layout-container">
                        <PageHeader />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/media" component={Media} />
                            <Route exact path="/contact" component={Contact} />
                            <Route exact path="/music" component={Music} />
                        <PageFooter />
                    </div>
                </ScrollToTop>
            </Router>
        </div>
        );
    }
}

export default App;
