import { OGData } from "../types/OGData";

const OGImage: React.FC<
  OGData & { ogImageRef: React.RefObject<HTMLDivElement> }
> = ({ title, content, image, ogImageRef }) => {
  return (
    <div
      ref={ogImageRef}
      className="w-[1200px] h-[630px] bg-secondary p-4 flex flex-col rounded-lg shadow-lg"
    >
      <h1 className="text-4xl font-bold mb-4 text-primary">{title}</h1>
      <p className="text-xl mb-6 text-primary">
        {content.length > 200 ? content.substring(0, 500) + "..." : content}
      </p>
      {image && (
        <img
          src={image as string}
          alt="OG Image"
          className="w-full h-[25rem] object-cover rounded-lg"
        />
      )}
    </div>
  );
};

export default OGImage;
