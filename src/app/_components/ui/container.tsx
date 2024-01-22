interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className="w-full max-w-7xl px-2 lg:mx-auto ">{children}</div>;
};

export default Container;
