import React, { useState } from 'react'


import { 
  AuthType,
  SismoConnectButton, 
  SismoConnectClientConfig, 
  SismoConnectResponse
} from "@sismo-core/sismo-connect-react";

const sismoConnectConfig: SismoConnectClientConfig = {
  appId: "0x0a17ffad4c6b2c1ede73f7c215cf8fa1" // appId you registered
};

<SismoConnectButton
  config={sismoConnectConfig} // the config created above
  // you ask for a proof of Data Vault ownership
  auths={[{authType:AuthType.VAULT}]} 
  onResponse={(response: SismoConnectResponse) => {
    //Send the response to your server to verify it
  }}
/>