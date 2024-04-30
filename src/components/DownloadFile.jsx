import React from "react";
import { useNavigate } from "react-router-dom";

const DownloadFile = ({ props }) => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = props.filePath;
    downloadLink.download = `${props.fileName}.${props.formatFile}`;

    document.body.appendChild(downloadLink);
    downloadLink.click();

    // navigate("/");
  };

  return (
    <div>
      <button onClick={handleDownload}>Download File</button>
    </div>
  );
};

export default DownloadFile;
