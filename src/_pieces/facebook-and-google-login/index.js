import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

export default function Main() {
    const stateData = useState({
            isLoggedIn: false,
            userID: "",
            name: "",
            email: "",
            picture: ""
        });
    const [data, setData] = stateData;
    const responseGoogle = (response) => {
      console.log(response);
    }

    const responseFacebook = (response) => {
      // console.log(response);
      setData({
        isLoggedIn: true,
        userID: response.userID,
        name: response.name,
        email: response.email,
        picture: response.picture.data.url,

      });
    }

    const componentClicked = () => console.log("clicked");

    let fbContent;

    return (
        <div>
            <GoogleLogin
                clientId="277141363321-111hj0b4ofd587ccdhngbk5suamqf2de.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />

            {data.isLoggedIn ?
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexFlow: 'column',
                    width: '400px',
                    margin: 'auto',
                    backgroundColor: '#f4f4f4',
                    padding: '20px'
                }}>
                    <img style={{width: "3rem", height: "3rem"}} src={data.picture} alt={data.name}/>
                    <h1>Welcome {data.name}!</h1>
                    Email: {data.email}
                </div> :
                <FacebookLogin
                    appId="518718278957270"
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={responseFacebook}
                />
            }
        </div>
    );
}