import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DownloadFile = ({ props }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const downloadLink = document.createElement("a");
    downloadLink.href = props.filePath;
    const uniqueId = Date.now(); // generate unique ID based on current timestamp
    downloadLink.download = `${props.fileName}.${uniqueId}.${props.format}`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
    navigate("/");
  }, [navigate, props]);

  return <div>Downloading file...</div>;
};

export default DownloadFile;
