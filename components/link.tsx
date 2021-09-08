import cn from "classnames";

interface LinkProps {
  src: string;
  label: string;
  customStyle?: string;
}
export default function Link({ src, label, customStyle }: LinkProps) {
  return (
    <a
      href={src}
      className={cn(
        "underline text-blue-600 text-underline hover:text-blue-100 focus:text-blue-300",
        customStyle ?? customStyle
      )}
    >
      {label}
    </a>
  );
}
