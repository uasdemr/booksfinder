import { LogIn } from "../LogIn/LogIn"
import { User } from "../User/User"

type ProfilePropsType = {
  apiKey?: string
}

const Profile = ({ apiKey }: ProfilePropsType) => {
  return (
    <>
      {!apiKey && <LogIn />}
      {apiKey && <User apiKey={apiKey}/>}
    </>
  )
}

export { Profile }
