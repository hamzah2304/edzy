import { HuddleIframe } from '@huddle01/react-huddle-iframe'

const iframeConfig = {
  roomUrl: 'https://iframe.huddle01.com/123',
  height: '600px',
  width: '80%',
  noBorder: false, // false by default
}

export default function Frame() {
  return (
    <div>
      <HuddleIframe config={iframeConfig} />
    </div>
  )
}
