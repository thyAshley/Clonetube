import React from 'react';
import axios from 'axios';
import { GoogleLogin } from 'react-google-login';

import './style.scss';

const SigninPage = () => {
  const responseGoogle = async (response: any) => {
    const { googleId, email, name } = response.profileObj;
    console.log(response);
    try {
      const response = await axios.post(
        'http://localhost:5000/api/v1/users/signin',
        {
          name: name,
          email: email,
          googleID: googleId,
        },
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signinpage">
      <div className="container">
        <div className="top">
          <h1>Sign in with Google </h1>
        </div>
        <div className="body">
          <GoogleLogin
            clientId="145118799853-0vttp06fqdoca0vh2a235h0ntr0tmeuk.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
