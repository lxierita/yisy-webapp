import Image from "next/image";
import cn from "classnames";

interface CardProps {
  title: string;
  desc: string;
  url: string | null;
  children?: React.ReactNode;
  expandable?: boolean;
  customStyle?: string;
}

export default function Card({
  title,
  desc,
  url,
  children,
  customStyle,
}: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center content-start border-2 rounded-md ring-2",
        customStyle ? customStyle : ""
      )}
    >
      {url ?? <Image src={url}></Image>}
      <div>
        <h3 className="text-black-500">{title}</h3>
        <p>{desc}</p>
      </div>
      {children}
    </div>
  );
}
