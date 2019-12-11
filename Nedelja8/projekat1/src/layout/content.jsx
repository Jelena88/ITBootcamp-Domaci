import React from 'react'
import UpcomingLList from '../components/upcoming-l-list'
import PastLList from '../components/past-l-list'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import { Footer } from '../components/footer'
import { Header } from '../components/header'


const Content = () => {



    return (

        <Router>
            <Header />
            <div className="links">
                <p ><Link to={'/'}>Past Launches</Link></p>
                <p><Link to={'/future'}>Upcoming Launches</Link> </p>
            </div>
            <Switch>
                <Route exact path='/' component={PastLList} />
                <Route exact path='/future' component={UpcomingLList} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default Content