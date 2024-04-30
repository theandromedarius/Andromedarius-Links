import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DownloadFile = ({ props }) => {
  const navigate = useNavigate();

  useEffect(
    () => {
      const generateSerialNumber = () => {
        const today = new Date();
        const year = today.getFullYear().toString().slice(-2);
        let month = (today.getMonth() + 1).toString();
        month = month.length === 1 ? "0" + month : month;
        const day = today.getDate().toString();
        const serialNumber = day + month + year;
        return serialNumber;
      };

      const serialNumber = generateSerialNumber();

      const downloadLink = document.createElement("a");
      downloadLink.href = props.filePath;
      downloadLink.type = "application/octet-stream";
      downloadLink.download = `${props.fileName}-${serialNumber}.${props.formatFile}`;
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
