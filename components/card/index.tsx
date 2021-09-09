import Image from "next/image";
import cn from "classnames";

interface CardProps {
  id: string;
  title: string;
  url: string | null;
  children?: React.ReactNode;
  expandable?: boolean;
  customStyle?: string;
}

export default function Card({
  id,
  title,
  url,
  children,
  customStyle,
}: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center content-start border-2 rounded-md p-6 shadow-sm hover:shadow-md",
        customStyle ? customStyle : ""
      )}
      data-cy-id={`card-${id}`}
    >
      {url ?? <Image src={url}></Image>}
      <div>
        <h3 className="text-black text-lg font-semibold mb-2">{title}</h3>
      </div>
      <div className="text-gray-800 mt-2">{children}</div>
    </div>
  );
}
