import React, { useState } from "react";

const Common = ({ onClose, src }) => {
  const [fullScreen, setFullScreen] = useState(false);

  const onFullScreen = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <div
      className={`${
        fullScreen ? "h-screen w-screen" : "h-[900px] w-[90vw]"
      } z-50 absolute flex-col flex justify-center items-center`}
    >
      <div className="w-full h-[50px] flex justify-end bg-gradient-to-b from-[#00505788] to-[#373d0088]">
        <div
          onClick={onFullScreen}
          className="h-[40px] aspect-square bg-blue-500 m-[5px] flex justify-center items-center text-[20px] cursor-pointer"
        >
          <i className="fa-solid fa-clone"></i>
        </div>
        <div
          className="h-[40px] aspect-square bg-red-500 m-[5px] flex justify-center items-center text-[40px] cursor-pointer"
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark"></i>
        </div>
      </div>
      <object
        type="text/html"
        className="h-full w-full bg-white text-black flex flex-col gap-9 justify-center items-center"
        data={src}
        title={src}
      >
        <p className="text-wrap text-center text-red-500 w-[50%]">
          Unfortunately, embedding <strong>{src}</strong> in an{" "}
          <code>&lt;iframe&gt;</code> is not possible because they have security
          measures in place, including the
          <strong>X-Frame-Options: SAMEORIGIN</strong> and
          <strong>Content-Security-Policy: frame-ancestors 'none'</strong>{" "}
          headers. These restrictions prevent external sites from loading
          <strong>{src}</strong> in an
          <code>&lt;iframe&gt;</code>, and they cannot be bypassed unless I have
          control over the <strong>{src}</strong> server—which I do not.
        </p>

        <div>
          <h1 className="text-[30px] font-bold">✅ Solutions & Alternatives</h1>
          <p className="mb-3">Open in a New Tab Instead</p>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[20px] bg-[#0f0] px-3 py-1 rounded-2xl mt-3 border-2 border-[#000]"
          >
            Click to Open in a new tab
          </a>
        </div>
      </object>
    </div>
  );
};

export default Common;
