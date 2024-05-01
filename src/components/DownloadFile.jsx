import React, { useEffect } from "react";

const allowedBrowsers = ["Chrome", "Edg", "Firefox", "Vivaldi"];
const adsLink = [
  "https://shulugoo.net/4/7418877",
  "https://shooltuca.net/4/7418878",
];

const DownloadFile = ({ props }) => {
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isAllowedBrowser = allowedBrowsers.some((browser) =>
      userAgent.includes(browser)
    );

    if (!isAllowedBrowser) {
      window.alert(
        "If download error please use browser: Chrome, Edge, FireFox, Vivaldi"
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

  return (
    <div>
      <center>
        Downloading file..., <br />
        If download error please use browser: Chrome, Edge,FireFox, Vivaldi
      </center>
    </div>
  );
};

export default DownloadFile;
