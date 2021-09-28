// props
type InputProps = React.ComponentProps<'input'>;

const CustomComponent = (props: InputProps) => {
  return <input {...props} />;
};

export default CustomComponent;
