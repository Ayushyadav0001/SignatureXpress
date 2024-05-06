import React, { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";

const SignaturePad = () => {
  const signatureRef = useRef();

  const clearSignature = () => {
    signatureRef.current.clear();
  };

  const downloadSignature = () => {
    const url = signatureRef.current.getTrimmedCanvas().toDataURL("");
    const a = document.createElement("a");
    a.href = url;
    a.download = "signature.png";
    a.click();
  };

  return (
    <div className="grid justify-center">
      <div className="m-5  max-w-3xl rounded-lg border-2 bg-white shadow-2xl shadow-black hover:border-red-900">
        <SignatureCanvas
          ref={signatureRef}
          penColor="black"
          canvasProps={{
            style: { width: "95%", height: "400px" },
            className: "signature-canvas m-5 ",
          }}
        />
      </div>
      <br />

      <div className="flex justify-center gap-5">
        <button
          className="w-28 rounded border-2 shadow-lg shadow-red-700 hover:bg-red-500 "
          onClick={clearSignature}
        >
          Clear
        </button>

        <button
          className="w-28 rounded border-2 shadow-lg shadow-green-600 hover:bg-green-500"
          onClick={downloadSignature}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default SignaturePad;
