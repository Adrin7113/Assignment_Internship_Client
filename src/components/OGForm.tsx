import { ChangeEvent, FormEvent, useState } from "react";

type Props = {
  handleFormData: (data: OGData) => void;
};

type OGData = {
  title: string;
  content: string;
  image: string | ArrayBuffer | null;
};

const OGForm: React.FC<Props> = ({ handleFormData }) => {
  const [formData, setFormData] = useState<OGData>({
    title: "",
    content: "",
    image: null,
  });

  const [fileName, setFileName] = useState("Add an image");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevState) => ({ ...prevState, image: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const titleInput = form.elements.namedItem("title") as HTMLInputElement;
    const contentInput = form.elements.namedItem(
      "content"
    ) as HTMLTextAreaElement;

    const tempData = {
      title: titleInput.value,
      content: contentInput.value,
      image: formData.image,
    };

    handleFormData(tempData);
  };

  return (
    <section className="w-full h-[60vh] bg-primary flex flex-col items-center justify-center gap-5">
      <h1 className="text-secondary text-3xl text-center font-bold">
        Make your OG Image!
      </h1>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="bg-secondary px-4 py-2 rounded-lg focus:outline-none placeholder-primary"
        />
        <textarea
          name="content"
          cols={50}
          rows={10}
          placeholder="Content"
          className="bg-secondary px-4 py-2 rounded-lg focus:outline-none placeholder-primary"
        ></textarea>
        <label
          htmlFor="image"
          className="bg-secondary text-primary px-4 py-2 rounded-lg cursor-pointer text-center transition-all hover:bg-secondary/90 hover:text-primary"
        >
          {fileName}
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        <button
          type="submit"
          className="bg-tertiary text-primary px-4 py-2 rounded-lg cursor-pointer text-center transition-all hover:bg-tertiary/70 hover:text-secondary"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default OGForm;
