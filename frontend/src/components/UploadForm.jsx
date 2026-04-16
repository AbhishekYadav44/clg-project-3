import { useState } from "react";
import axios from "axios";

const UploadForm = ({ fetchPosts }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !image) {
      alert("Please enter name and select image");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", image);

    try {
      await axios.post("http://localhost:3000/api/post", formData);

      setName("");
      setImage(null);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-6 mb-10 flex flex-col md:flex-row gap-4 items-center"
    >
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded-xl px-4 py-3 w-full md:w-1/3 outline-none focus:ring-2 focus:ring-black"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        className="border border-gray-300 rounded-xl px-4 py-3 w-full md:w-1/3"
      />

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
      >
        Upload
      </button>
    </form>
  );
};

export default UploadForm;