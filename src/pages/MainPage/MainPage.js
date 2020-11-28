import React from 'react';
import { AmplifySignOut } from '@aws-amplify/ui-react';
import { Interactions } from 'aws-amplify';
import { AmplifyChatbot } from "@aws-amplify/ui-react";
import { ReactComponent as Logo} from '../../logo.svg';
import  { useState, useEffect } from 'react';
import { listIdentityMaps } from '../../graphql/queries';
import { createIdentityMap } from '../../graphql/mutations';
import { API, Auth } from 'aws-amplify';
import {UNavBar} from '../../components/UNavBar'

const MainPage = props => {
  const [identityId, setIdentityId] = useState(null);
  const [identity, setIdentity] = useState(false);

  useEffect(() => {
    getIdentity();
    checkIdentityMap();
    console.log(identityId)
    if (!identity && identityId)
      addIdentityMap(identityId);
  }, [identityId]);

  async function getIdentity() {
    try {
      const info = await Auth.currentCredentials()
      setIdentityId(info.identityId)
    } catch(e) {
      console.log(e);
    }
  }

  async function addIdentityMap(id) {
    try {
      await API.graphql({ query: createIdentityMap, variables: { input: {'pool_id' : id} } })
    } catch (e) {
      console.log(e);
    }
  }

  async function checkIdentityMap() {
    try {
      const {data: {listIdentityMaps: {items}} } = await API.graphql({ query: listIdentityMaps });
      if (items.length == 0)
        setIdentity(true);
    }
    catch(e) {
      console.log(e);
      return null;
    }
  }

    return (
      <div className="App">
      <UNavBar />
        <header className="App-header">
          <AmplifyChatbot
            botName="calculatecarbonemissionbot_dev"
            botTitle="Calculate carbon emission bot"
            welcomeMessage="Hello, how can I help you?"
            textEnabled="true" />
        </header>
      </div>
    );
};

export default MainPage;
