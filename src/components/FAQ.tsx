"use client";

import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Мне обязательно загружать звонок сейчас?",
      answer: "Нет. Вы можете просто оставить контакт — мы перезвоним, расскажем, как всё работает, и при необходимости поможем с подготовкой звонка или выбором примера."
    },
    {
      question: "Как выглядит результат?",
      answer: "Вы получаете наглядный отчёт в формате PDF, в котором: — визуально разбит весь диалог по этапам, — выделены ошибки, сильные и слабые моменты, — сформирован портрет клиента, — составлено персональное коммерческое предложение, — приложены рекомендации по улучшению скрипта и действий."
    },
    {
      question: "Со мной свяжется человек или всё автоматом?",
      answer: "С вами свяжется специалист, чтобы: — убедиться, что мы правильно поняли задачу, — уточнить нюансы звонка (если нужно), — и лично передать результат аудита. Это живое, персональное сопровождение — без роботов."
    },
    {
      question: "Нужно ли что-то объяснять или AI сам всё поймёт?",
      answer: "AI работает автономно, но мы всегда уточним детали, чтобы учесть специфику вашего бизнеса, рынка или продукта. Никаких сложных настроек — вы просто загружаете звонок или оставляете контакт, остальное — на нас."
    },
    {
      question: "А если у меня нет записи звонка?",
      answer: "Вы можете: — предоставить Zoom или видеозапись встречи, — либо даже провести короткий демо-звонок с нами — и мы проанализируем его как пример."
    },
    {
      question: "Сколько стоит продукт после теста?",
      answer: "Вы сначала увидите ценность — никаких навязываний. Стоимость зависит от объёма: можно платить за звонки, за модули (оффер, обучение, аналитика) или по подписке. Начать можно с минимального пакета или пилота."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-blue-50/20 to-[#C8F131]/5 relative overflow-hidden">
      {/* Декоративные фоновые элементы */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Основные круги */}
        <div className="absolute top-20 right-10 w-24 h-24 bg-[#3895FF] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-[#C8F131] rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-[#3895FF] rounded-full opacity-8 animate-ping"></div>
        
        {/* Дополнительные хаотичные элементы */}
        <div className="absolute top-40 right-1/3 w-8 h-8 bg-[#C8F131] rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-12 h-12 bg-[#3895FF] rounded-full opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-20 w-6 h-6 bg-[#C8F131] rounded-full opacity-25 animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 right-1/2 w-10 h-10 bg-[#3895FF] rounded-full opacity-12 animate-bounce" style={{animationDelay: '1.5s'}}></div>
        
        {/* Линии и фигуры */}
        <div className="absolute top-1/3 right-1/4 w-20 h-1 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-1 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Диагональные линии */}
        <div className="absolute top-1/4 left-1/3 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-10 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-0.5 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-12 transform -rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Маленькие точки */}
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-[#3895FF] rounded-full opacity-30 animate-ping" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute bottom-60 right-1/4 w-4 h-4 bg-[#C8F131] rounded-full opacity-25 animate-bounce" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#3895FF] rounded-full opacity-40 animate-ping" style={{animationDelay: '1.2s'}}></div>
        
        {/* Квадраты и прямоугольники */}
        <div className="absolute top-1/3 right-1/5 w-8 h-8 bg-[#C8F131] rounded-lg opacity-10 transform rotate-45 animate-pulse" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute bottom-1/4 left-1/5 w-6 h-6 bg-[#3895FF] rounded-lg opacity-15 transform -rotate-45 animate-bounce" style={{animationDelay: '0.9s'}}></div>
        
        {/* Волнистые элементы */}
        <div className="absolute top-1/2 left-1/6 w-12 h-1 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-8 transform rotate-12 animate-pulse" style={{animationDelay: '1.3s'}}></div>
        <div className="absolute bottom-1/2 right-1/6 w-10 h-1 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-10 transform -rotate-12 animate-pulse" style={{animationDelay: '0.6s'}}></div>
      </div>

      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 max-w-[1440px]">
        {/* Заголовок секции */}
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <h2 
            className="font-bold text-black leading-tight mb-3 xs:mb-4"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              lineHeight: '1.2'
            }}
          >
            Часто задаваемые <span className="text-[#3895FF]">вопросы</span>
          </h2>
          <p className="text-gray-600 text-sm xs:text-base sm:text-lg max-w-2xl mx-auto">
            Ответы на самые популярные вопросы о нашем AI-аудите
          </p>
        </div>

        {/* FAQ аккордеон */}
        <div className="max-w-4xl mx-auto space-y-3 xs:space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl border border-gray-100/50 overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              {/* Вопрос */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-4 xs:p-5 sm:p-6 text-left flex items-center justify-between space-x-3 xs:space-x-4 hover:bg-gray-50/50 transition-colors duration-200 cursor-pointer"
              >
                <div className="flex items-center justify-between flex-1 min-w-0">
                  {/* Текст вопроса */}
                  <h3 className="font-semibold text-sm xs:text-base sm:text-lg text-gray-900 leading-tight flex-1 min-w-0 pr-4">
                    {item.question}
                  </h3>
                </div>
                
                {/* Стрелка */}
                <div className={`w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-[#3895FF] text-white' : 'group-hover:bg-gray-200'}`}>
                  <FaChevronDown className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5" />
                </div>
              </button>
              
              {/* Ответ */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 xs:px-5 sm:px-6 pb-4 xs:pb-5 sm:pb-6">
                  <div className="border-l-4 border-[#3895FF] pl-4 xs:pl-5 sm:pl-6">
                    <p className="text-gray-700 text-sm xs:text-base leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Дополнительная информация */}
        <div className="text-center mt-8 xs:mt-10 sm:mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-6 sm:p-8 shadow-xl border border-gray-100/50 max-w-2xl mx-auto">
            <h3 className="font-semibold text-lg xs:text-xl sm:text-2xl text-gray-900 mb-3 xs:mb-4">
              Остались вопросы?
            </h3>
            <p className="text-gray-600 text-sm xs:text-base mb-4 xs:mb-6">
              Свяжитесь с нами — мы с радостью ответим на любые вопросы и поможем подобрать оптимальное решение для вашего бизнеса
            </p>
            <button
              className="group bg-[#3895FF] hover:bg-[#3895FF] text-white font-bold py-3 xs:py-4 px-6 xs:px-8 rounded-full text-base xs:text-lg transition-all duration-300 transform hover:scale-110 shadow-2xl relative overflow-hidden border-2 border-white/20 cursor-pointer"
              onClick={() => {
                const el = document.getElementById('contact-form');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>Задать вопрос</span>
                <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 