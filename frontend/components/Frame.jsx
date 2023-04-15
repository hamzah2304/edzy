import { HuddleIframe } from '@huddle01/huddle01-iframe'

export default function Frame({ roomUrl }) {
  return (
    <div>
      <HuddleIframe
        config={{
          roomUrl: roomUrl,
          height: '600px',
          width: '100%',
          noBorder: false, // false by default
        }}
      />
    </div>
  )
}
