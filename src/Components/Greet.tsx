// string and booleans props
type GreetProps = {
  name: string
  messageCount?: number // here ? is optional props
  isLoggedIn: boolean
}

export default function Greet(props: GreetProps) {
  const { messageCount = 0} = props
  return (
    <div>
      <h2>{props.isLoggedIn ? `Welcome ${props.name}! You have ${messageCount} messages` : 'Welcome Guest'}</h2>
    </div>
  )
}
