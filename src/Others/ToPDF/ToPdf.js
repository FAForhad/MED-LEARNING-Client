import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const ToPdf = ({ rootElementsId, downloadFileName }) => {
    const downloadFileDocument = () => {
        const input = document.getElementById(rootElementsId)
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/jpeg')
            const pdf = new jsPDF("p", "pt", "a1")
            pdf.addImage(imgData, "jpeg", 100, 100)
            pdf.save(`${downloadFileName}`)
        })
    }

    return (
        <div>
            <button className='bg-cyan-400 rounded p-4 shadow-xl w-full text-lg font-semibold text-white shadow-cyan-400/50' onClick={downloadFileDocument}>DOWNLOAD PDF</button>
        </div>
    );
};

export default ToPdf;