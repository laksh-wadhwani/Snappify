import React, { useState } from "react";
import SectionTitle from "../components/SectionTitle";
import UploadZone from "../components/UploadZone";
import { Loader2Icon, RectangleHorizontalIcon, RectangleVerticalIcon, Wand2Icon } from "lucide-react";

const Generator = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const [name, setName] = useState("");
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [aspectRatio, setAspectRatio] = useState("9:16");
  const [userPrompt, setUserPrompt] = useState("");
  const [productImage, setProductImage] = useState<File | null>(null);
  const [modelImage, setModelImage] = useState<File | null>(null);

  const handleImageFile = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: "product" | "model",
  ) => {
    if (e.target.files && e.target.files[0]) {
      if (type === "product") setProductImage(e.target.files[0]);
      else setModelImage(e.target.files[0]);
    }
  };

  return (
    <div className="min-h-screen text-white p-6">
      <form className="max-w-4xl mx-auto">
        <SectionTitle
          text1="Create"
          text2="Turn your idea into a scroll-stopping ad"
          text3="Describe your product, pick your platform and tone — Snappify's AI will write punchy, high-converting ad copy in seconds."
        />

        <div className="w-full flex justify-between gap-12 mt-8">
          <div className="w-1/3 flex flex-col gap-8">
            <UploadZone
              label="Product Image"
              file={productImage}
              onClear={() => setProductImage(null)}
              onChange={(e) => handleImageFile(e, "product")}
            />
            <UploadZone
              label="Model Image"
              file={modelImage}
              onClear={() => setModelImage(null)}
              onChange={(e) => handleImageFile(e, "model")}
            />
          </div>

          <div className="w-2/3 flex flex-col gap-8">
            <div className="mb-4 text-gray-300">
              <label htmlFor="name" className="block text-sm mb-2">
                Project Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name your project"
                required
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-pink-200/10 focus:border-pink-500/50 outline-none transition-all"
              />
            </div>

            <div className="mb-4 text-gray-300">
              <label htmlFor="productName" className="block text-sm mb-2">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Enter the name of the product"
                required
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-pink-200/10 focus:border-pink-500/50 outline-none transition-all"
              />
            </div>

            <div className="mb-4 text-gray-300">
              <label
                htmlFor="productDescription"
                className="block text-sm mb-2"
              >
                Product Description
                <span className="text-xs text-pink-400"> (Optional)</span>
              </label>
              <textarea
                id="productDescription"
                rows={4}
                value={productDescription}
                onChange={(e) => setProductDescription(e.target.value)}
                placeholder="Enter the description of product"
                required
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-pink-200/10 focus:border-pink-500/50 outline-none resize-none transition-all"
              />
            </div>

            <div className="mb-4 text-gray-300">
              <label className="block text-sm mb-2">Aspect Ratio</label>
              <div className="flex gap-3">
                <RectangleVerticalIcon
                  onClick={() => setAspectRatio("9:16")}
                  className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-1 cursor-pointer ${aspectRatio === "9:16" ? "ring-pink-500/50 bg-white/10" : ""}`}
                />
                <RectangleHorizontalIcon
                  onClick={() => setAspectRatio("16:9")}
                  className={`p-2.5 size-13 bg-white/6 rounded transition-all ring-1 cursor-pointer ${aspectRatio === "16:9" ? "ring-pink-500/50 bg-white/10" : ""}`}
                />
              </div>
            </div>

            <div className="mb-4 text-gray-300">
              <label htmlFor="userPrompt" className="block text-sm mb-2">
                User Prompt
                <span className="text-xs text-pink-400"> (Optional)</span>
              </label>
              <textarea
                id="userPrompt"
                rows={4}
                value={userPrompt}
                onChange={(e) => setUserPrompt(e.target.value)}
                placeholder="Describe how you want the narration to be"
                required
                className="w-full bg-white/3 rounded-lg border-2 p-4 text-sm border-pink-200/10 focus:border-pink-500/50 outline-none resize-none transition-all"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <button disabled={isGenerating} className="flex gap-2 px-4 py-3 bg-pink-600 hover:bg-pink-700 active:scale-95 transition-all rounded-md disabled:opacity-70 disabled:cursor-not-allowed">
            {isGenerating? 
            <>
              <Loader2Icon className="size-5 animate-spin"/> Generating....
            </>
            :
            <>
              <Wand2Icon className="size-5"/> Generate Image
            </>
            }
          </button>
        </div>
      </form>
    </div>
  );
};

export default Generator;
