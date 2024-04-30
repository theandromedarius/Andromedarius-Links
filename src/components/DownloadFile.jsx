import React, { useEffect } from "react";

const allowedBrowsers = ["Chrome", "Edg", "Firefox", "Vivaldi"];
const adsLink = [
  "https://www.highcpmgate.com/gg3ifc9g3?key=c0c33d1ec577cb6f17c2485c43283270",
  "https://www.highcpmgate.com/xswbx9b84?key=89c672edb35a0fa0e32095816368abbd",
];

const DownloadFile = ({ props }) => {
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isAllowedBrowser = allowedBrowsers.some((browser) =>
      userAgent.includes(browser)
    );

    if (!isAllowedBrowser) {
      window.alert(
        "If download error please use beowser: Chrome, Edge, FireFox, Vivaldi"
      );
    }

    const randomLinks = adsLink[Math.floor(Math.random() * adsLink.length)];
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
        return (window.location.href = randomLinks);
      } catch (error) {
        console.error("Error downloading file:", error);
      }
    };

    downloadFile();
  }, [props]);

  return <div>Downloading file...</div>;
};

export default DownloadFile;
