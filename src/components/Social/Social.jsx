import * as SL from './SocialList'

const Social = (type) => {
  return (
    <div className="flex gap-4">
      <SL.Linkedin />
      <SL.Instagram />
      <SL.Youtube />
      <SL.Github />
      <SL.One />
      <SL.Twitch />
      <SL.Twitter />
      <SL.Dribble />
    </div>
  )
}

export default Social
