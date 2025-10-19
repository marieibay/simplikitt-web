import React, { useState, useEffect, useRef } from 'react';
import { QrCode } from 'lucide-react';
import QRCode from 'qrcode';

const QrCodeGeneratorPage: React.FC = () => {
  const [text, setText] = useState<string>('https://simplikitt.com');
  const [copied, setCopied] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, text || ' ', { width: 256, margin: 2, errorCorrectionLevel: 'H' }, (error?: Error | null) => {
        if (error) console.error(error);
      });
    }
  }, [text]);

  const handleDownload = () => {
    if (canvasRef.current) {
      const link = document.createElement('a');
      link.download = 'qrcode.png';
      link.href = canvasRef.current.toDataURL('image/png');
      link.click();
    }
  };
  
  const handleCopy = () => {
    if (canvasRef.current) {
      canvasRef.current.toBlob(async (blob) => {
        if (blob) {
          try {
            await navigator.clipboard.write([
              new ClipboardItem({ 'image/png': blob })
            ]);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          } catch (err) {
            console.error('Failed to copy image:', err);
            alert('Failed to copy image. Your browser may not support this feature.');
          }
        }
      }, 'image/png');
    }
  };

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="flex items-center gap-4 mb-8">
        <QrCode className="w-10 h-10 text-indigo-500" />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">QR Code Generator</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col">
          <label htmlFor="qr-text" className="block text-lg font-medium text-gray-700 mb-2">
            Enter URL or Text
          </label>
          <textarea
            id="qr-text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="e.g., https://www.example.com"
            className="w-full flex-grow p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition"
            rows={6}
          />
          <div className="mt-4 flex flex-wrap gap-3 items-center">
            <button onClick={handleDownload} disabled={!text} className="px-5 py-2.5 bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
              Download PNG
            </button>
            <button onClick={handleCopy} disabled={!text} className="px-5 py-2.5 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed">
              {copied ? 'Copied!' : 'Copy Image'}
            </button>
            <div className="flex-grow"></div>
            <button onClick={() => setText('')} className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition shadow">
              Clear
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 min-h-[256px]">
          {text ? (
            <canvas ref={canvasRef} className="max-w-full h-auto rounded-md shadow-lg" />
          ) : (
            <div className="text-center text-gray-500">
              <QrCode className="w-24 h-24 mx-auto text-gray-300" />
              <p className="mt-4 text-lg">Your QR code will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QrCodeGeneratorPage;
