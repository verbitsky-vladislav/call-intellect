"use client";

import React, { useState } from 'react';
import { FaChevronDown, FaQuestion } from 'react-icons/fa';

export default function FAQV2() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Как работает AI-аудит отдела продаж?",
      answer: "AI анализирует ваши звонки, выявляет критические моменты, оценивает эффективность менеджеров и дает конкретные рекомендации по улучшению продаж."
    },
    {
      question: "Сколько времени занимает анализ?",
      answer: "Полный анализ занимает 2-3 дня. Мы обрабатываем все ваши звонки и предоставляем детальный отчет с рекомендациями."
    },
    {
      question: "Нужно ли устанавливать дополнительное ПО?",
      answer: "Нет, мы работаем с существующими записями звонков. Просто предоставьте нам аудиофайлы, и мы проведем анализ."
    },
    {
      question: "Какие форматы файлов поддерживаются?",
      answer: "Поддерживаем все популярные аудиоформаты: MP3, WAV, M4A, FLAC. Также можем работать с записями из CRM-систем."
    },
    {
      question: "Гарантируете ли вы результат?",
      answer: "Да, если после внедрения наших рекомендаций не будет улучшений в продажах, мы вернем деньги за анализ."
    }
  ];

  return (
    <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Хаотичные декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Неправильные круги и овалы */}
        <div className="absolute top-7 left-7 w-30 h-26 bg-[#3895FF] rounded-full opacity-5 animate-pulse transform rotate-50"></div>
        <div className="absolute bottom-7 right-7 w-26 h-30 bg-[#C8F131] rounded-full opacity-8 animate-bounce transform -rotate-40"></div>
        <div className="absolute top-1/3 right-7 w-22 h-18 bg-[#3895FF] rounded-full opacity-6 animate-ping transform rotate-80"></div>
        
        {/* Овалы разной формы */}
        <div className="absolute top-1/4 left-1/3 w-11 h-17 bg-[#C8F131] rounded-full opacity-8 animate-bounce transform rotate-65" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-17 h-11 bg-[#3895FF] rounded-full opacity-6 animate-pulse transform -rotate-55" style={{animationDelay: '1.3s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-13 h-19 bg-[#C8F131] rounded-full opacity-10 animate-ping transform rotate-90" style={{animationDelay: '0.4s'}}></div>
        
        {/* Неправильные линии */}
        <div className="absolute top-1/2 left-1/4 w-21 h-0.5 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-8 animate-pulse transform rotate-40"></div>
        <div className="absolute bottom-1/3 right-1/4 w-17 h-1 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-6 animate-pulse transform -rotate-65" style={{animationDelay: '0.9s'}}></div>
        
        {/* Кривые линии */}
        <div className="absolute top-1/4 right-1/4 w-19 h-0.5 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-5 transform rotate-55 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-23 h-0.5 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-10 transform -rotate-75 animate-pulse" style={{animationDelay: '1.1s'}}></div>
        
        {/* Маленькие хаотичные точки */}
        <div className="absolute top-30 right-1/3 w-5 h-7 bg-[#3895FF] rounded-full opacity-22 animate-ping transform rotate-35" style={{animationDelay: '0.6s'}}></div>
        <div className="absolute bottom-30 left-1/3 w-6 h-5 bg-[#C8F131] rounded-full opacity-28 animate-bounce transform -rotate-50" style={{animationDelay: '1.0s'}}></div>
        <div className="absolute top-1/2 right-1/5 w-4 h-6 bg-[#3895FF] rounded-full opacity-32 animate-ping transform rotate-60" style={{animationDelay: '1.4s'}}></div>
        
        {/* Неправильные квадраты */}
        <div className="absolute top-1/3 left-1/5 w-8 h-10 bg-[#C8F131] rounded-lg opacity-8 transform rotate-70 animate-pulse" style={{animationDelay: '1.6s'}}></div>
        <div className="absolute bottom-1/3 right-1/5 w-10 h-7 bg-[#3895FF] rounded-lg opacity-6 transform -rotate-60 animate-bounce" style={{animationDelay: '0.8s'}}></div>
        
        {/* Волнистые элементы */}
        <div className="absolute top-1/2 left-1/5 w-15 h-0.5 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-7 transform rotate-45 animate-pulse" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute bottom-1/2 right-1/5 w-13 h-0.5 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-9 transform -rotate-50 animate-pulse" style={{animationDelay: '0.7s'}}></div>
        
        {/* Дополнительные хаотичные формы */}
        <div className="absolute top-1/4 right-1/6 w-6 h-8 bg-[#C8F131] rounded-full opacity-16 animate-bounce transform rotate-80" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 left-1/6 w-8 h-6 bg-[#3895FF] rounded-full opacity-12 animate-pulse transform -rotate-70" style={{animationDelay: '0.9s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-7 h-9 bg-[#C8F131] rounded-full opacity-20 animate-ping transform rotate-45" style={{animationDelay: '1.7s'}}></div>
        
        {/* Дополнительные элементы */}
        <div className="absolute top-1/6 left-1/6 w-5 h-7 bg-[#3895FF] rounded-full opacity-18 animate-bounce transform rotate-75" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/6 right-1/6 w-7 h-5 bg-[#C8F131] rounded-full opacity-14 animate-pulse transform -rotate-65" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute top-3/4 left-1/4 w-6 h-8 bg-[#3895FF] rounded-full opacity-24 animate-ping transform rotate-60" style={{animationDelay: '0.9s'}}></div>
      </div>
      
      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 max-w-[1440px] w-full">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <h2 
            className="font-bold text-black mb-4 xs:mb-5 sm:mb-6"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'
            }}
          >
            Часто задаваемые <span className="text-[#3895FF]">вопросы</span>
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)'
            }}
          >
            Ответы на самые популярные вопросы о AI-аудите отдела продаж
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-3 xs:space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 relative group hover:shadow-xl transition-all duration-300 transform"
              style={{
                transform: `rotate(${(index % 2 === 0 ? 1 : -1) * (index * 0.5)}deg)`
              }}
            >
              <div className="absolute -top-2 -left-2 w-5 h-5 bg-[#3895FF] rounded-full shadow-lg transform rotate-15"></div>
              <button
                className="w-full p-4 xs:p-5 sm:p-6 md:p-8 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 xs:space-x-4">
                    <div 
                      className="bg-[#3895FF] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 transform -rotate-1"
                      style={{
                        width: 'clamp(2.5rem, 4vw, 3rem)',
                        height: 'clamp(2.5rem, 4vw, 3rem)'
                      }}
                    >
                      <FaQuestion 
                        className="text-white" 
                        style={{
                          width: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                          height: 'clamp(1.25rem, 2.5vw, 1.5rem)'
                        }}
                      />
                    </div>
                    <h3 
                      className="font-semibold text-gray-900"
                      style={{
                        fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)'
                      }}
                    >
                      {faq.question}
                    </h3>
                  </div>
                  <FaChevronDown 
                    className={`w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 text-[#3895FF] transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                
                {openIndex === index && (
                  <div className="mt-4 xs:mt-5 sm:mt-6 pl-12 xs:pl-14 sm:pl-16">
                    <p 
                      className="text-gray-700"
                      style={{
                        fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
        
        {/* CTA кнопка */}
        <div className="text-center mt-8 xs:mt-10 sm:mt-12 md:mt-16">
          <button 
            className="group bg-[#3895FF] hover:bg-[#3895FF] text-white font-bold py-3 xs:py-4 sm:py-5 px-6 xs:px-8 sm:px-10 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl relative overflow-hidden border-2 border-white/20 min-w-[160px] max-w-full transform -rotate-1"
            style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)'
            }}
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Задать вопрос</span>
              <FaQuestion className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 animate-pulse" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
} 