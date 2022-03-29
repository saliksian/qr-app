import React from "react";

export default function Home() {
  return (
    <div>
      <div className="Text">
        <h3 className="text-center mb-4">
          What is a QR Code and how does it work?
        </h3>
        <p className="lh-base fs-5 tp">
          The quick response, or QR, Code is a two-dimensional version of the
          Barcode able to convey a wide variety of information almost instantly
          with the scan of a mobile device.
          <br></br>
          <br></br>
          Able to store up to 7089 digits or 4296 characters, including
          punctuation marks and special characters, the Code can equally encode
          words and phrases such as internet addresses. One thing to always keep
          in mind, especially when it comes to designing the Static QR Codes
          aesthetic is that the more data is added, the more the size increases
          and its structure becomes more complex.
          <br></br>
          <br></br>
          Even when damaged, the QR Code's structure data keys include
          duplications. It is thanks to these redundancies that allow up to 30%
          of the Code structure to take damage without affecting its readability
          on scanners.
        </p>
      </div>
    </div>
  );
}
