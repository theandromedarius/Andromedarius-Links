import React, { useEffect } from "react";

const allowedBrowsers = ["Chrome", "Edg", "Firefox", "Vivaldi"];
const adsLink = [
  "https://shulugoo.net/4/7418877",
  "https://shooltuca.net/4/7418878",
];
const adScripts = [
  "//pl23204289.highcpmgate.com/eb50a8951714a0c2e3bf89fb95a7facc/invoke.js",
  "//www.topcreativeformat.com/799650c8d60c3fe250dbdc38dcae35aa/invoke.js",
];
const DownloadFile = ({ props }) => {
  useEffect(() => {
    adScripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    });
    const adOption = document.createElement("script");
    adOption.type = "text/javascript";
    adOption.innerHTML = `
      var atOptions = {
        'key': '799650c8d60c3fe250dbdc38dcae35aa',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
      };
    `;
    document.body.appendChild(adOption);

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
        <div>
          Downloading file..., <br />
          If download error please use browser: Chrome, Edge,FireFox, Vivaldi
        </div>
        <div style={{ marginTop: "100px" }}>ADS</div>
        <div id="container-eb50a8951714a0c2e3bf89fb95a7facc"></div>
      </center>
    </div>
  );
};

export default DownloadFile;
