import Image from "next/image";
export default function ImageWithCaption({
  pixelLength,
  pixelWidth,
  imageSrc,
  altText,
  children,
}: {
  pixelLength: number;
  pixelWidth: number;
  imageSrc: string;
  altText: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={`relative flex flex-col items-center w-full mx-auto `} style={{ aspectRatio: `${pixelWidth} / ${pixelLength}` }}>
        <Image className="object-contain shadow-md rounded-lg shadow-green-300" src={imageSrc} alt={altText} fill />
      </div>
      {children}
    </>
  );
}
