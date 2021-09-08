import Image from "next/image";
import cn from "classnames";

interface CardProps {
  title: string;
  url: string | null;
  children?: React.ReactNode;
  expandable?: boolean;
  customStyle?: string;
}

export default function Card({ title, url, children, customStyle }: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center content-start border-2 rounded-md p-6 shadow-sm hover:shadow-md",
        customStyle ? customStyle : ""
      )}
    >
      {url ?? <Image src={url}></Image>}
      <div>
        <h3 className="text-black text-lg font-semibold">{title}</h3>
      </div>
      <div className="text-gray-800">{children}</div>
    </div>
  );
}
