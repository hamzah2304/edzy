import { useHuddle01 } from '@huddle01/react';
 
const App = () => {
  const { initialize, isInitialized } = useHuddle01();
 
  useEffect(() => {
    // its preferable to use env vars to store projectId
    initialize('KL1r3E1yHfcrRbXsT4mcE-3mK60Yc3YR');
  }, []);
 
  return <div>{isInitialized ? 'Hello World!' : 'Please initialize'}</div>;
};