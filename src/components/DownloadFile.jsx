import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DownloadFile = ({ props }) => {
  const navigate = useNavigate();

  useEffect(
    () => {
      const downloadLink = document.createElement("a");
      const blob = new Blob([props.filePath]);
      const url = window.URL.createObjectURL(blob);
      downloadLink.href = url;
      downloadLink.download = `${props.fileName}.${props.formatFile}`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      navigate("/");
    },
    [navigate, props],
    []
  );

  return <div>Downloading file...</div>;
};

export default DownloadFile;
