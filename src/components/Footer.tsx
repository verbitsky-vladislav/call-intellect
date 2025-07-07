import React from 'react';
import { FaTelegramPlane, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-10 bg-white border-t border-gray-100 text-gray-400 text-xs">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full justify-center">
          <span>Call Intellect — AI для продаж, маркетинга и обучения</span>
          <span className="hidden md:inline-block text-gray-300">|</span>
          <span>Информация защищена. Данные не хранятся.</span>
          <span className="hidden md:inline-block text-gray-300">|</span>
          <span>По всем вопросам:</span>
          <span className="hidden md:inline-block text-gray-300">|</span>
          <div className="flex items-center gap-3 mt-1 md:mt-0">
            <a href="mailto:info@call-intellect.ru" className="flex items-center gap-1 hover:text-[#3895FF] transition-colors cursor-pointer" aria-label="Почта">
              <FaEnvelope className="w-4 h-4" />
              <span className="hidden sm:inline">info@call-intellect.ru</span>
            </a>
            <a href="https://t.me/callintellect" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-[#3895FF] transition-colors cursor-pointer" aria-label="Telegram">
              <FaTelegramPlane className="w-4 h-4" />
              <span className="hidden sm:inline">Telegram</span>
            </a>
            <a href="tel:+79998887766" className="flex items-center gap-1 hover:text-[#3895FF] transition-colors cursor-pointer" aria-label="Телефон">
              <FaPhoneAlt className="w-4 h-4" />
              <span className="hidden sm:inline">+7 999 888-77-66</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 