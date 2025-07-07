import React from 'react';
import { FaTelegramPlane, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-10 bg-white border-t border-gray-100 text-gray-400 text-xs">
      <div className="container mx-auto px-4 py-5 flex flex-col items-center gap-2 max-w-6xl">
        <div className="mb-1">Call Intellect — AI для продаж, маркетинга и обучения</div>
        <div className="mb-1">Информация защищена. Данные не хранятся.</div>
        <div className="flex items-center space-x-4 mt-1">
          <a href="mailto:info@call-intellect.ru" className="hover:text-[#3895FF] transition-colors cursor-pointer" aria-label="Почта">
            <FaEnvelope className="w-5 h-5" />
          </a>
          <a href="https://t.me/callintellect" target="_blank" rel="noopener noreferrer" className="hover:text-[#3895FF] transition-colors cursor-pointer" aria-label="Telegram">
            <FaTelegramPlane className="w-5 h-5" />
          </a>
          <a href="tel:+79998887766" className="hover:text-[#3895FF] transition-colors cursor-pointer" aria-label="Телефон">
            <FaPhoneAlt className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
} 