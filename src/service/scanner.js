import { Html5QrcodeScanner } from "html5-qrcode";
import { useEffect } from "react";
import axios from "axios";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000")

const BarcodeScanner = () => {
    useEffect(() => {
        const scanner = new Html5QrcodeScanner("reader", {
            fps: 10,
            qrbox: 250,
        });
        
        scanner.render((decodedText) => {
            // kriim ke backend
        axios.post("http://localhost:3000/api/antrian", {
            userId: decodedText,
        }).then((res) => {
            console.log("Antrian Berhasil:", res.data)
        }).catch((err) => {
            console.error("Gagal daftar antrian:", err)
        })
        
            scanner.clear();
        })
        
        
    }, [])
    useEffect(() => {
        socket.on("updateAntrian", (data) => {
            console.log("Update Realtime:", data)
            // update ui sesuai antian
        })
    }, []);
    
    return (
        <div>
            <h2>Scan Barcode Disini</h2>
            <div id="reader"className="w-[300px]"></div>
        </div>

        
    )
}

export default BarcodeScanner