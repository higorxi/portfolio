import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 
import { AiOutlineClose, AiOutlineDownload } from 'react-icons/ai'; 

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, pdfUrl }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[9999] overflow-hidden"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-4 rounded-lg max-w-3xl w-full h-[80%] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-900">Currículo Higor Giovane</h2>
          <button
            className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
            onClick={onClose}
          >
            <AiOutlineClose size={24} />
          </button>
        </div>
        
        <iframe
          src={pdfUrl}
          width="100%"
          height="100%"
          title="Currículo"
          className="border-none mb-4"
        />

        <div className="flex justify-center gap-4 mt-4">
          <a
            href={pdfUrl}
            download
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
          >
            <AiOutlineDownload className="mr-2" size={18} />
            <span>Baixar Currículo</span>
          </a>

          <a
            href="https://github.com/higorxi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600"
          >
            <FaGithub className="mr-2" size={18} />
            Visualizar GitHub Pessoal
          </a>
          
          
          <a
            href="https://www.linkedin.com/in/higor-giovane-mt/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          >
            <FaLinkedin className="mr-2" size={18} />
            Visualizar LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
