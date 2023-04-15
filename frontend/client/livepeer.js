import { createReactClient } from '@livepeer/react';
import { studioProvider } from 'livepeer/providers/studio';
 
const LivepeerClient = createReactClient({
  provider: studioProvider({ apiKey: 'ee524999-0da1-4ee0-bc41-98533ffc34b4' }),
});
 
export default LivepeerClient;