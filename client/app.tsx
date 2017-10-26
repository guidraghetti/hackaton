import * as React from "react";
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import MyAppBar from './bar';
import { Provider, connect } from 'react-redux'
import Link from 'redux-first-router-link'
import * as CSS from "./hey.css"

const App = ({ location, userId, onClick }) => {
    switch (location.type) {
        case "HOME":
            return (<div>
                <MyAppBar />
                <div>
                    <div className={CSS.ramiro}>
                        <h1>HOME</h1>
                        <Link to={{ type: 'USER', payload: { id: 123 } }}>User 123</Link>
                        <Link to={{ type: 'USER', payload: { id: 456 } }}>User 456</Link>
                        <span onClick={onClick}>User 5</span>
                    </div>
                    <div className={CSS.test}>
                        <h1>HOME</h1>
                        <Link to={{ type: 'USER', payload: { id: 123 } }}>User 123</Link>
                        <Link to={{ type: 'USER', payload: { id: 456 } }}>User 456</Link>
                        <span onClick={onClick}>User 5</span>
                    </div>
                </div>
            </div>)
        case "USER":
            return <h1>USER: {userId}</h1>
        default:
            return <h1>not found</h1>
    }
}

const mapStateToProps = ({ userId, location }) => ({ userId, location })
const mapDispatchToProps = (dispatch) => ({
    onClick: () => dispatch({ type: 'USER', payload: { id: 5 } })
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
