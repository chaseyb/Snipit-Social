//// GITHUB LOGIN ////
// for now, this is just GitHub, but we can integrate Gogle here too
import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../App";
import GitHubLogo from './gh.png';
import './style.css';

import { connect } from "react-redux"


// creating our login component, using AuthContext global state
const GitHubLogin = () => {
    const { state, dispatch } = useContext(AuthContext);
    const [data, setData] = useState({ errorMessage: "", isLoading: false });

    const { client_id, redirect_uri } = state;

    useEffect(() => {
        //  Github redirects back with a code parameter
        const url = window.location.href;
        const hasCode = url.includes("?code=");

        // If Github API returns the code parameter
        if (hasCode) {
            const newUrl = url.split("?code=");
            window.history.pushState({}, null, newUrl[0]);
            setData({ ...data, isLoading: true });

            const requestData = {
                client_id: state.client_id,
                redirect_uri: state.redirect_uri,
                client_secret: state.client_secret,
                code: newUrl[1]
            };

            const proxy_url = state.proxy_url;

            // Use code parameter and other parameters to make POST request to proxy_server
            fetch(proxy_url, {
                method: "POST",
                body: JSON.stringify(requestData)
            })
                .then(response => response.json())
                .then(data => {
                    dispatch({
                        type: "LOGIN",
                        payload: { user: data, isLoggedIn: true }
                    });
                })
                .catch(error => {
                    console.log(error)
                    setData({
                        isLoading: false,
                        errorMessage: "Sorry! Login failed"
                    });
                });
        }
    }, [state, dispatch, data]);

    // THIS will redirect to user's profile w/ GitHub id,
    // different than mongodb _id but still unique and won't
    // disrupt other functioning, right?
    if (state.isLoggedIn) {
        let ghID = state.user.id;
        return <Redirect to={`/profile/:${ghID}`} />;
        // previous version:
        // return <Redirect to="/profile/:id" />;
    }

    // Based on login state, this displays a loading spinner and / or error msg
    return (
        <div className="gitContainer">
            <div className="login-card">
                <h1 className="welcome">Welcome</h1>
                <h5 className="coding">Coding Society</h5>
                <img src={GitHubLogo} alt="GitHub OctoCat" className="octocat" />
                <span className="errMsg">{data.errorMessage}</span>
                <div className="login-bar">
                    {data.isLoading ? (
                        <div className="loader-container">
                            <div className="loader"></div>
                        </div>
                    ) : (
                            <>
                                {
                                    // Link to request GitHub access
                                }

                                <a className="login-link"
                                    href={`https://github.com/login/oauth/authorize?scope=user&client_id=${client_id}&redirect_uri=${redirect_uri}`}
                                    onClick={() => {
                                        setData({ ...data, errorMessage: "" });
                                    }}>Authorize</a>
                            </>
                        )}
                </div>
                <p className="text-secondary text-center">This leads to GitHub's Authorization</p>
            </div >
        </div >

    );
}

export default GitHubLogin;