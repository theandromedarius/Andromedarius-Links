import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DownloadFile = ({ props }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const serialNumber = () => {
      const today = new Date();
      const year = today.getFullYear().toString().slice(-2);
      const month = (today.getMonth() + 1).toString().padStart(2, "0");
      const day = today.getDate().toString().padStart(2, "0");
      const serialNumber = `${day}${month}${year}`;
      return serialNumber;
    };

    const downloadFile = async () => {
      try {
        const response = await fetch(props.filePath);
        const blob = await response.blob();
        const url = URL.createObjectURL(blob);

        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.type = "application/octet-stream";
        downloadLink.download = `${props.fileName}-${serialNumber()}.${
          props.formatFile
        }`;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
        navigate("/redirect/353e7946-e9f8-4e84-a9a9-4d4885b2ebf1");
      } catch (error) {
        console.error("Error downloading file:", error);
      }
    };

    downloadFile();
  }, [navigate, props]);

  return (
    <div>
      <center>
        <div>
          Downloading file..., <br />
          If download error please use browser: Chrome, Edge,FireFox, Vivaldi
        </div>
      </center>
    </div>
  );
};

export default DownloadFile;
