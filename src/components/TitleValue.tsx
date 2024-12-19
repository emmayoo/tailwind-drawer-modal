import { ReactNode } from "react";

const TitleValue = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <div className="flex items-center gap-6">
      <span className="text-placeholder w-20 break-words">{title}</span>
      <span className="tracking-custom text-gray-label flex w-[333px] break-words font-medium">
        {children}
      </span>
    </div>
  );
};

export default TitleValue;
