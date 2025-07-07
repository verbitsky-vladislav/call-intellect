"use client";

import React from 'react';
import { FaChartLine, FaUsers, FaDollarSign, FaRocket } from 'react-icons/fa';

export default function CaseStudiesV2() {
  return (
    <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Хаотичные декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Неправильные круги и овалы */}
        <div className="absolute top-8 left-8 w-28 h-24 bg-[#3895FF] rounded-full opacity-6 animate-pulse transform rotate-40"></div>
        <div className="absolute bottom-8 right-8 w-24 h-28 bg-[#C8F131] rounded-full opacity-10 animate-bounce transform -rotate-30"></div>
        <div className="absolute top-1/3 right-8 w-20 h-16 bg-[#3895FF] rounded-full opacity-8 animate-ping transform rotate-65"></div>
        
        {/* Овалы разной формы */}
        <div className="absolute top-1/4 left-1/3 w-10 h-16 bg-[#C8F131] rounded-full opacity-12 animate-bounce transform rotate-50" style={{animationDelay: '0.9s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-16 h-10 bg-[#3895FF] rounded-full opacity-7 animate-pulse transform -rotate-45" style={{animationDelay: '1.4s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-12 h-18 bg-[#C8F131] rounded-full opacity-15 animate-ping transform rotate-75" style={{animationDelay: '0.5s'}}></div>
        
        {/* Неправильные линии */}
        <div className="absolute top-1/2 left-1/4 w-20 h-0.5 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-10 animate-pulse transform rotate-25"></div>
        <div className="absolute bottom-1/3 right-1/4 w-16 h-1 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-8 animate-pulse transform -rotate-55" style={{animationDelay: '1.1s'}}></div>
        
        {/* Кривые линии */}
        <div className="absolute top-1/4 right-1/3 w-18 h-0.5 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-6 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-22 h-0.5 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-12 transform -rotate-65 animate-pulse" style={{animationDelay: '1.3s'}}></div>
        
        {/* Маленькие хаотичные точки */}
        <div className="absolute top-25 right-1/3 w-5 h-7 bg-[#3895FF] rounded-full opacity-25 animate-ping transform rotate-20" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute bottom-25 left-1/3 w-6 h-5 bg-[#C8F131] rounded-full opacity-30 animate-bounce transform -rotate-40" style={{animationDelay: '1.0s'}}></div>
        <div className="absolute top-1/2 right-1/5 w-4 h-6 bg-[#3895FF] rounded-full opacity-35 animate-ping transform rotate-50" style={{animationDelay: '1.5s'}}></div>
        
        {/* Неправильные квадраты */}
        <div className="absolute top-1/3 left-1/5 w-8 h-10 bg-[#C8F131] rounded-lg opacity-10 transform rotate-60 animate-pulse" style={{animationDelay: '1.7s'}}></div>
        <div className="absolute bottom-1/3 right-1/5 w-10 h-7 bg-[#3895FF] rounded-lg opacity-8 transform -rotate-50 animate-bounce" style={{animationDelay: '0.8s'}}></div>
        
        {/* Волнистые элементы */}
        <div className="absolute top-1/2 left-1/5 w-14 h-0.5 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-7 transform rotate-30 animate-pulse" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute bottom-1/2 right-1/5 w-12 h-0.5 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-10 transform -rotate-40 animate-pulse" style={{animationDelay: '0.6s'}}></div>
        
        {/* Дополнительные хаотичные формы */}
        <div className="absolute top-1/4 right-1/5 w-6 h-8 bg-[#C8F131] rounded-full opacity-18 animate-bounce transform rotate-70" style={{animationDelay: '1.6s'}}></div>
        <div className="absolute bottom-1/4 left-1/5 w-8 h-6 bg-[#3895FF] rounded-full opacity-14 animate-pulse transform -rotate-60" style={{animationDelay: '0.9s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-7 h-9 bg-[#C8F131] rounded-full opacity-22 animate-ping transform rotate-35" style={{animationDelay: '1.8s'}}></div>
      </div>
      
      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 max-w-[1440px] w-full">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <h2 
            className="font-bold text-black mb-4 xs:mb-5 sm:mb-6"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'
            }}
          >
            Кто уже применяет <span className="text-[#3895FF]">Call Intellect</span>
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)'
            }}
          >
            Реальные кейсы компаний, которые улучшили продажи с помощью AI-аудита
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
          {/* Кейс 1 */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform rotate-2">
            <div className="absolute -top-3 -left-3 w-7 h-7 bg-[#3895FF] rounded-full shadow-lg transform rotate-25"></div>
            <div className="text-center">
              <div 
                className="bg-gradient-to-r from-[#3895FF] to-[#3895FF] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 xs:mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 transform -rotate-3"
                style={{
                  width: 'clamp(3.5rem, 7vw, 4.5rem)',
                  height: 'clamp(3.5rem, 7vw, 4.5rem)'
                }}
              >
                <FaChartLine 
                  className="text-white" 
                  style={{
                    width: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                    height: 'clamp(1.75rem, 3.5vw, 2.25rem)'
                  }}
                />
              </div>
              <h3 
                className="font-semibold text-gray-900 mb-2 xs:mb-3"
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'
                }}
              >
                +45% продаж
              </h3>
              <p 
                className="text-gray-600 mb-3 xs:mb-4"
                style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                }}
              >
                Строительная компания
              </p>
              <p 
                className="text-gray-700"
                style={{
                  fontSize: 'clamp(0.625rem, 1.8vw, 0.75rem)'
                }}
              >
                Выявили критические моменты в презентации и увеличили конверсию
              </p>
            </div>
          </div>
          
          {/* Кейс 2 */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform -rotate-1">
            <div className="absolute -top-3 -left-3 w-7 h-7 bg-[#C8F131] rounded-full shadow-lg transform -rotate-15"></div>
            <div className="text-center">
              <div 
                className="bg-[#C8F131] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 xs:mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 transform rotate-2"
                style={{
                  width: 'clamp(3.5rem, 7vw, 4.5rem)',
                  height: 'clamp(3.5rem, 7vw, 4.5rem)'
                }}
              >
                <FaUsers 
                  className="text-white" 
                  style={{
                    width: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                    height: 'clamp(1.75rem, 3.5vw, 2.25rem)'
                  }}
                />
              </div>
              <h3 
                className="font-semibold text-gray-900 mb-2 xs:mb-3"
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'
                }}
              >
                +67% клиентов
              </h3>
              <p 
                className="text-gray-600 mb-3 xs:mb-4"
                style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                }}
              >
                IT-агентство
              </p>
              <p 
                className="text-gray-700"
                style={{
                  fontSize: 'clamp(0.625rem, 1.8vw, 0.75rem)'
                }}
              >
                Поняли реальные потребности клиентов и изменили подход
              </p>
            </div>
          </div>
          
          {/* Кейс 3 */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform rotate-1">
            <div className="absolute -top-3 -left-3 w-7 h-7 bg-[#3895FF] rounded-full shadow-lg transform rotate-30"></div>
            <div className="text-center">
              <div 
                className="bg-gradient-to-r from-[#3895FF] to-[#3895FF] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 xs:mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 transform -rotate-2"
                style={{
                  width: 'clamp(3.5rem, 7vw, 4.5rem)',
                  height: 'clamp(3.5rem, 7vw, 4.5rem)'
                }}
              >
                <FaDollarSign 
                  className="text-white" 
                  style={{
                    width: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                    height: 'clamp(1.75rem, 3.5vw, 2.25rem)'
                  }}
                />
              </div>
              <h3 
                className="font-semibold text-gray-900 mb-2 xs:mb-3"
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'
                }}
              >
                +89% прибыли
              </h3>
              <p 
                className="text-gray-600 mb-3 xs:mb-4"
                style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                }}
              >
                Автосалон
              </p>
              <p 
                className="text-gray-700"
                style={{
                  fontSize: 'clamp(0.625rem, 1.8vw, 0.75rem)'
                }}
              >
                Оптимизировали скрипты продаж и повысили средний чек
              </p>
            </div>
          </div>
          
          {/* Кейс 4 */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform -rotate-2">
            <div className="absolute -top-3 -left-3 w-7 h-7 bg-[#C8F131] rounded-full shadow-lg transform -rotate-25"></div>
            <div className="text-center">
              <div 
                className="bg-[#C8F131] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 xs:mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 transform rotate-3"
                style={{
                  width: 'clamp(3.5rem, 7vw, 4.5rem)',
                  height: 'clamp(3.5rem, 7vw, 4.5rem)'
                }}
              >
                <FaRocket 
                  className="text-white" 
                  style={{
                    width: 'clamp(1.75rem, 3.5vw, 2.25rem)',
                    height: 'clamp(1.75rem, 3.5vw, 2.25rem)'
                  }}
                />
              </div>
              <h3 
                className="font-semibold text-gray-900 mb-2 xs:mb-3"
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'
                }}
              >
                +156% роста
              </h3>
              <p 
                className="text-gray-600 mb-3 xs:mb-4"
                style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                }}
              >
                Стартап
              </p>
              <p 
                className="text-gray-700"
                style={{
                  fontSize: 'clamp(0.625rem, 1.8vw, 0.75rem)'
                }}
              >
                Перестроили всю стратегию продаж на основе AI-анализа
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 