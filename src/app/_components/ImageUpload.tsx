"use client";

import {
  CldUploadWidget,
  type CldUploadWidgetInfo,
  type CldUploadWidgetResults,
} from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";
import { TbPhotoPlus } from "react-icons/tb";

const uploadPreset = "kbkegw6k";

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const isWidget = (
    result: string | CldUploadWidgetInfo | undefined,
  ): result is CldUploadWidgetInfo => {
    if (typeof result === "string") return false;
    if (result === undefined) return false;
    return result?.secure_url !== undefined;
  };

  const handleUpload = useCallback(
    (result: CldUploadWidgetResults) => {
      if (isWidget(result?.info)) {
        onChange(result?.info?.secure_url);
      }
    },
    [onChange],
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset={uploadPreset}
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="
              relative
              flex
              cursor-pointer
              flex-col
              items-center 
              justify-center 
              gap-4 
              border-2
              border-dashed
              border-neutral-300
              p-20
              text-neutral-600
              transition
              hover:opacity-70
            "
          >
            <TbPhotoPlus size={50} />
            <div className="text-lg font-semibold">Click to upload</div>
            {value && (
              <div
                className="
              absolute inset-0 h-full w-full"
              >
                <Image
                  fill
                  style={{ objectFit: "cover" }}
                  src={value}
                  alt="House"
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
