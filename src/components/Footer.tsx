"use client";

import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4">
          {/* Описание продукта */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              Call Intellect
            </h3>
            <p className="text-gray-600 text-sm">
              AI-продукт для продаж, маркетинга и обучения
            </p>
          </div>
          
          {/* Информация о безопасности */}
          <div className="text-gray-500 text-xs">
            Информация защищена. Данные не хранятся.
          </div>
          
          {/* Контакты */}
          <div className="text-gray-600 text-sm">
            По всем вопросам: 
            <a href="mailto:info@callintellect.com" className="text-[#3895FF] hover:underline ml-1">
              info@callintellect.com
            </a>
            <span className="mx-2">•</span>
            <a href="https://t.me/callintellect" className="text-[#3895FF] hover:underline">
              Telegram
            </a>
            <span className="mx-2">•</span>
            <a href="tel:+74951234567" className="text-[#3895FF] hover:underline">
              +7 (495) 123-45-67
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 