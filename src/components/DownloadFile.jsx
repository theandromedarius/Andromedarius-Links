import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DownloadFile = ({ props }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const generateSerialNumber = () => {
      const today = new Date();
      const year = today.getFullYear().toString().slice(-2);
      let month = (today.getMonth() + 1).toString().padStart(2, "0"); // Pad the month with leading zero if needed
      const day = today.getDate().toString().padStart(2, "0"); // Pad the day with leading zero if needed
      const serialNumber = `${day}${month}${year}`;
      return serialNumber;
    };

    const serialNumber = generateSerialNumber();

    const downloadFile = async () => {
      try {
        const response = await fetch(props.filePath); // Fetch the file
        const blob = await response.blob(); // Convert the file to Blob

        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create a download link element
        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = `${props.fileName}-${serialNumber}.${props.formatFile}`;

        // Append the download link to the DOM
        document.body.appendChild(downloadLink);

        // Trigger the download
        downloadLink.click();

        // Cleanup
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);

        // Navigate back to the main page
        navigate("/");
      } catch (error) {
        console.error("Error downloading file:", error);
      }
    };

    downloadFile();

    // Cleanup effect if needed
    return () => {
      // Cleanup code if needed
    };
  }, [navigate, props]);

  return <div>Downloading file...</div>;
};

export default DownloadFile;
