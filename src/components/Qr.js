import React from 'react'
import QRCode from "qrcode.react";

export default function Qr(props) {
    return (
        <div>
            <div className="mt-4">
              {props.QrText.length > 0 && (
                <QRCode value={props.QrText} renderAs={"svg"} size={128} />
              )}
            </div>
        </div>
    )
}
