"use client";

import React from 'react';
import { FaSearch, FaHeart, FaRocket } from 'react-icons/fa';

export default function HeroBlock() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-[#C8F131]/5 flex items-center relative overflow-hidden">
      {/* Декоративные фоновые элементы */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Основные круги */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#3895FF] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#C8F131] rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#3895FF] rounded-full opacity-8 animate-ping"></div>
        
        {/* Дополнительные хаотичные элементы */}
        <div className="absolute top-40 right-1/3 w-8 h-8 bg-[#C8F131] rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-12 h-12 bg-[#3895FF] rounded-full opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 right-20 w-6 h-6 bg-[#C8F131] rounded-full opacity-25 animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-10 h-10 bg-[#3895FF] rounded-full opacity-12 animate-bounce" style={{animationDelay: '1.5s'}}></div>
        
        {/* Линии и фигуры */}
        <div className="absolute top-1/3 right-1/4 w-20 h-1 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-1 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Диагональные линии */}
        <div className="absolute top-1/4 left-1/3 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-10 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-0.5 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-12 transform -rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Маленькие точки */}
        <div className="absolute top-60 right-1/4 w-3 h-3 bg-[#3895FF] rounded-full opacity-30 animate-ping" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute bottom-60 left-1/4 w-4 h-4 bg-[#C8F131] rounded-full opacity-25 animate-bounce" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#3895FF] rounded-full opacity-40 animate-ping" style={{animationDelay: '1.2s'}}></div>
        
        {/* Квадраты и прямоугольники */}
        <div className="absolute top-1/3 left-1/5 w-8 h-8 bg-[#C8F131] rounded-lg opacity-10 transform rotate-45 animate-pulse" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute bottom-1/4 right-1/5 w-6 h-6 bg-[#3895FF] rounded-lg opacity-15 transform -rotate-45 animate-bounce" style={{animationDelay: '0.9s'}}></div>
        
        {/* Волнистые элементы */}
        <div className="absolute top-1/2 left-1/6 w-12 h-1 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-8 transform rotate-12 animate-pulse" style={{animationDelay: '1.3s'}}></div>
        <div className="absolute bottom-1/2 right-1/6 w-10 h-1 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-10 transform -rotate-12 animate-pulse" style={{animationDelay: '0.6s'}}></div>
      </div>
      
      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 max-w-[1440px] w-full">
        <div className="grid lg:grid-cols-2 gap-4 xs:gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Левая колонка - контент */}
          <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
            <div className="space-y-2 xs:space-y-3 sm:space-y-4">
              <h1
                className="font-bold text-black leading-tight break-words"
                style={{
                  fontSize: 'clamp(1.8rem, 5.5vw, 3.5rem)',
                  lineHeight: '1.1',
                  wordBreak: 'break-word',
                  maxWidth: '100%',
                }}
              >
                Аудит отдела продаж на основе ваших звонков — <br className="hidden md:block" />
                <span
                  className="font-bold text-[#3895FF] inline-block"
                  style={{
                    fontSize: 'clamp(1.8rem, 5.5vw, 3.5rem)',
                    lineHeight: '1.1',
                    wordBreak: 'break-word',
                  }}
                >
                  AI, который слышит клиентов
                </span>
              </h1>
            </div>
            
            <div className="space-y-3 xs:space-y-4 sm:space-y-5">
              <button 
                className="group w-full xs:w-auto bg-[#3895FF] hover:bg-[#3895FF] text-white font-bold py-3 xs:py-4 sm:py-5 px-6 xs:px-8 sm:px-10 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl relative overflow-hidden border-2 border-white/20 min-w-[160px] max-w-full"
                style={{
                  fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Оставить заявку</span>
                  <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <p 
                className="text-gray-500 text-center sm:text-left flex items-center justify-center sm:justify-start"
                style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                }}
              >
                <span className="w-2 h-2 bg-[#C8F131] rounded-full mr-2 animate-pulse"></span>
                — ответим в течение пары часов
              </p>
            </div>
          </div>
          
          {/* Правая колонка - карточки */}
          <div className="space-y-3 xs:space-y-4 sm:space-y-5 md:space-y-6 mt-6 lg:mt-0">
            {/* Карточка 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-xl border border-gray-100/50 relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-w-0">
              <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-gradient-to-r from-[#3895FF] to-[#3895FF] rounded-full shadow-lg"></div>
              <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
                <div 
                  className="bg-gradient-to-r from-[#3895FF] to-[#3895FF] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{
                    width: 'clamp(2rem, 4vw, 3rem)',
                    height: 'clamp(2rem, 4vw, 3rem)'
                  }}
                >
                  <FaSearch 
                    className="text-white" 
                    style={{
                      width: 'clamp(1rem, 2.5vw, 1.5rem)',
                      height: 'clamp(1rem, 2.5vw, 1.5rem)'
                    }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 
                    className="font-semibold text-gray-900"
                    style={{
                      fontSize: 'clamp(0.75rem, 2.5vw, 1.125rem)'
                    }}
                  >
                    Узнайте, где теряются сделки
                  </h3>
                  <p 
                    className="text-gray-700 font-medium"
                    style={{
                      fontSize: 'clamp(0.625rem, 2vw, 0.875rem)'
                    }}
                  >
                    AI анализирует каждый звонок и выявляет критические моменты
                  </p>
                </div>
              </div>
            </div>
            
            {/* Карточка 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-xl border border-gray-100/50 relative ml-2 xs:ml-4 sm:ml-6 md:ml-8 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-w-0">
              <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-[#C8F131] rounded-full shadow-lg"></div>
              <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
                <div 
                  className="bg-[#C8F131] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{
                    width: 'clamp(2rem, 4vw, 3rem)',
                    height: 'clamp(2rem, 4vw, 3rem)'
                  }}
                >
                  <FaHeart 
                    className="text-white" 
                    style={{
                      width: 'clamp(1rem, 2.5vw, 1.5rem)',
                      height: 'clamp(1rem, 2.5vw, 1.5rem)'
                    }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 
                    className="font-semibold text-gray-900"
                    style={{
                      fontSize: 'clamp(0.75rem, 2.5vw, 1.125rem)'
                    }}
                  >
                    Что реально волнует ваших клиентов
                  </h3>
                  <p 
                    className="text-gray-700 font-medium"
                    style={{
                      fontSize: 'clamp(0.625rem, 2vw, 0.875rem)'
                    }}
                  >
                    Глубокий анализ потребностей и болей клиентов
                  </p>
                </div>
              </div>
            </div>
            
            {/* Карточка 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-xl border border-gray-100/50 relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-w-0">
              <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 bg-gradient-to-r from-[#3895FF] to-[#3895FF] rounded-full shadow-lg"></div>
              <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4">
                <div 
                  className="bg-gradient-to-r from-[#3895FF] to-[#3895FF] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  style={{
                    width: 'clamp(2rem, 4vw, 3rem)',
                    height: 'clamp(2rem, 4vw, 3rem)'
                  }}
                >
                  <FaRocket 
                    className="text-white" 
                    style={{
                      width: 'clamp(1rem, 2.5vw, 1.5rem)',
                      height: 'clamp(1rem, 2.5vw, 1.5rem)'
                    }}
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 
                    className="font-semibold text-gray-900"
                    style={{
                      fontSize: 'clamp(0.75rem, 2.5vw, 1.125rem)'
                    }}
                  >
                    Как улучшить продажи без прослушки и CRM-анализов
                  </h3>
                  <p 
                    className="text-gray-700 font-medium"
                    style={{
                      fontSize: 'clamp(0.625rem, 2vw, 0.875rem)'
                    }}
                  >
                    Практические рекомендации для роста продаж
                  </p>
                </div>
              </div>
            </div>
            
            {/* Центральная иконка вместо 3D персонажа */}
            <div className="hidden md:flex justify-center pt-4 sm:pt-6">
              <div className="relative">
                <div 
                  className="bg-gradient-to-br from-[#3895FF] to-[#3895FF] rounded-2xl flex items-center justify-center shadow-xl group hover:scale-110 transition-transform duration-300"
                  style={{
                    width: 'clamp(4rem, 8vw, 6rem)',
                    height: 'clamp(4rem, 8vw, 6rem)'
                  }}
                >
                  <FaSearch 
                    className="text-white animate-pulse" 
                    style={{
                      width: 'clamp(2rem, 4vw, 3rem)',
                      height: 'clamp(2rem, 4vw, 3rem)'
                    }}
                  />
                </div>
                {/* Декоративные элементы вокруг иконки */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#C8F131] rounded-full opacity-60 animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#3895FF] rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 