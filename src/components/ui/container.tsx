import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return (
    <div className="bg-gray-100">
      <div className="w-full min-h-screen mx-auto max-w-7xl">{children}</div>
    </div>
  );
};

export default Container;
