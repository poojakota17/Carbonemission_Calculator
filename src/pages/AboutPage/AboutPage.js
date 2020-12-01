import React, {useState, useEffect } from 'react';
import {
  Link
} from 'react-router-dom';
import { ReactComponent as Logo} from '../../logo.svg';
import { API, Auth } from 'aws-amplify';
import {WNavBar} from '../../components/WNavBar';
import {UNavBar} from '../../components/UNavBar';

const AboutPage = props => {
  const [user, setUser] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    try {
      await Auth.currentAuthenticatedUser()
      setUser(true)
    }  catch(e)
    {   setUser(false)   }
  }

  return (
    <div>
    {user ? <UNavBar /> : <WNavBar />}
    

    <div className="container">
      
    <h1>About us</h1>
            <p>
            Climate Change is real global issue. Our lifestyle has changed drastically over the past two decades. As we progressed, we ignore to take care of mother nature. We ignored the future impacts as we scaled the food production and industrialization. 
            </p>
            <p>
            While real solution to this issue requires action on global scale, there are some choice that individual can make in our day-to day lives to lessen our personal impact on environment. These little steps can help us to Save Earth.
            </p>
            <p>
            Our motivation for developing this application is to help people to make better choices in order to reduce Carbon Footprint. According to stats, average Carbon footprint for an individual in the US is 16 Tons, which is the higher than rest of the world. To help individual to reduce the carbon footprint we have developed the application where they can set the target per month and see their Carbon emission expenditure in Kg CO<sub>2</sub> equivalent per month, and can share the steps they are taking in order to reduce Carbon Footprint.
            </p>
            <br />
            <p>
            We are the team of three girls, highly motivated to contribute to our society, we have built this app using AWS services and React Framework. Though this is our academic project we are willing to develop it further.
            </p>
            <h3>
            Crafted by:
            </h3>
            <ul>
                <li>
                Anastasia Zimina
                </li>
                <li>
                Pooja Prasannan
                </li>
                <li>
                Manjiri Kadam
                </li>
            </ul>
            <h4>
            Come, join, and take steps to save our Earth!
            </h4>
    </div>
        </div>
  );
};

export default AboutPage;
