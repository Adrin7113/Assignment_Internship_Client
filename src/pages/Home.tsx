import { useEffect, useRef, useState } from "react";
import { toPng } from "html-to-image";

import OGForm from "../components/OGForm";
import OGImageMeta from "../components/OGImageMeta";
import OGImage from "../components/OGImage";

const Home = () => {
  type OGData = {
    title: string;
    content: string;
    image: string | ArrayBuffer | null;
  };

  const [ogData, setOGData] = useState<OGData>({
    title: "",
    content: "",
    image: null,
  });

  const ogImageRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);

  const [publicUrl, setPublicUrl] = useState<string | null>(null);

  const handleFormData = (data: OGData) => {
    setLoading(true);
    setOGData(data);
    scrollToBottom();
  };

  function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  const saveImage = async () => {
    if (ogImageRef.current) {
      try {
        const dataUrl: string = await toPng(ogImageRef.current);
        const tempConversion = await fetch(dataUrl);
        const blob = await tempConversion.blob();

        const formData = new FormData();
        formData.append("image", blob, "image.png");

        const result = await fetch(
          "https://assignment-internship-server-j2gyqmdcya-el.a.run.app/ogImage/saveImage",
          {
            method: "POST",
            body: formData,
          }
        );
        const response = await result.json();

        if (response.status === "success") {
          setLoading(false);
          setPublicUrl(response.url);
        } else {
          throw new Error("Error saving image");
        }
      } catch (error) {
        console.error("Error generating image:", error);
      }
    }
  };

  useEffect(() => {
    if (ogData.title !== "") {
      saveImage();
    }
  }, [ogData]);

  return (
    <div className="w-screen min-h-screen bg-primary flex flex-col justify-center items-center">
      <OGForm handleFormData={handleFormData} />
      {loading && <p className="text-white">Loading...</p>}
      {publicUrl && (
        <div className="flex gap-4">
          <button className="bg-secondary text-primary px-4 py-2 rounded-lg cursor-pointer text-center transition-all hover:bg-secondary/90 hover:text-primary">
            <a href={publicUrl as string}>Click here for a direct link!</a>
          </button>
        </div>
      )}
      <section className="w-full flex items-center justify-center p-4">
        {ogData.title !== "" && (
          <>
            <OGImageMeta
              title={ogData.title}
              content={ogData.content}
              image={ogData.image}
            />
            <OGImage
              ogImageRef={ogImageRef}
              title={ogData.title}
              content={ogData.content}
              image={ogData.image}
            />
          </>
        )}
      </section>
    </div>
  );
};

export default Home;
