type MainProps = {} & React.HTMLProps<HTMLDivElement>;

const Main = ({ children, ...props }: MainProps) => {
  return <main {...props}>{children}</main>;
};

export default Main;
