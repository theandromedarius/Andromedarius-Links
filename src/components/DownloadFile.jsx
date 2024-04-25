import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DownloadFile = ({ props }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const downloadUrl = process.env.PUBLIC_URL + props.filePath;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.setAttribute("download", `${props.fileName}.${props.formatFile}`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    navigate("/");
  }, [navigate, props]);

  return <div>Downloading file...</div>;
};

export default DownloadFile;
