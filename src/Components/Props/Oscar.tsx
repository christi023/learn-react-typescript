// passing react component as children props - react node type helps to do this 
type OscarProps = {
children: React.ReactNode
} 

const Oscar = (props: OscarProps) => {
  return (
    <div>
     {props.children}
    </div>
  );
};

export default Oscar;