import Login from './Login';
// import to use the name pass as props
import { ProfileProps } from './Profile';

// type
type PrivateProps = {
  isLoggedIn: boolean
  component : React.ComponentType<ProfileProps>
}
const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name='Lucas'/>
  } else {
    return <Login />
  }

}
export default Private;