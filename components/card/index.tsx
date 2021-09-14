import Image from "next/image";
import cn from "classnames";

interface CardProps {
  id: string;
  title: string;
  imageUrl?: string;
  children?: React.ReactNode;
  expandable?: boolean;
  customStyle?: string;
}

export default function Card({
  id,
  title,
  imageUrl,
  children,
  customStyle,
}: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col justify-center content-start border-2 rounded-md py-4 px-6 shadow-sm",
        customStyle ? customStyle : ""
      )}
      data-cy-id={`card-${id}`}
    >
      {imageUrl ? <Image src={imageUrl}></Image> : <></>}
      <div>
        <h3 className="text-black text-lg font-semibold mb-4">{title}</h3>
      </div>
      <div className="text-gray-800 mt-2">{children}</div>
    </div>
  );
}
