interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="w-[100%] h-[100%] flex flex-col gap-5">{children}</div>
  );
};

export default Container;
