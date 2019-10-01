import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import InstagramLogin from 'react-instagram-login';

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
      // setData({
      //   isLoggedIn: true,
      //   userID: response.userID,
      //   name: response.name,
      //   email: response.email,
      //   picture: response.picture.data.url,

      // });
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

    const responseInstagram = (response) => {
      console.log(response);
    }

    const componentClicked = () => console.log(process.env.REACT_APP_SOCIAL_FACEBOOK);

    let fbContent;

    return (
        <div>
            <GoogleLogin
                clientId={process.env.REACT_APP_SOCIAL_GOOGLE}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
            <InstagramLogin
              clientId={process.env.REACT_APP_SOCIAL_INSTAGRAM}
              buttonText="Enter with Insta"
              onSuccess={responseInstagram}
              onFailure={responseInstagram}
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
                    appId={process.env.REACT_APP_SOCIAL_FACEBOOK}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={responseFacebook}
                />
            }
        </div>
    );
}