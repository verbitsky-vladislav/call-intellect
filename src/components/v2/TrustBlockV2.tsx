"use client";

import React from 'react';
import { FaShieldAlt, FaAward, FaHandshake, FaStar } from 'react-icons/fa';

export default function TrustBlockV2() {
  return (
    <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-[#C8F131] relative overflow-hidden">
      {/* Хаотичные декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Неправильные круги и овалы */}
        <div className="absolute top-6 left-6 w-26 h-22 bg-white rounded-full opacity-8 animate-pulse transform rotate-45"></div>
        <div className="absolute bottom-6 right-6 w-22 h-26 bg-white rounded-full opacity-12 animate-bounce transform -rotate-35"></div>
        <div className="absolute top-1/3 right-6 w-18 h-14 bg-white rounded-full opacity-6 animate-ping transform rotate-75"></div>
        
        {/* Овалы разной формы */}
        <div className="absolute top-1/4 left-1/3 w-9 h-15 bg-white rounded-full opacity-10 animate-bounce transform rotate-60" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-15 h-9 bg-white rounded-full opacity-8 animate-pulse transform -rotate-50" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-11 h-17 bg-white rounded-full opacity-14 animate-ping transform rotate-85" style={{animationDelay: '0.4s'}}></div>
        
        {/* Неправильные линии */}
        <div className="absolute top-1/2 left-1/5 w-19 h-0.5 bg-white opacity-12 animate-pulse transform rotate-35"></div>
        <div className="absolute bottom-1/3 right-1/5 w-15 h-1 bg-white opacity-10 animate-pulse transform -rotate-60" style={{animationDelay: '0.9s'}}></div>
        
        {/* Кривые линии */}
        <div className="absolute top-1/4 right-1/4 w-17 h-0.5 bg-white opacity-8 transform rotate-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-21 h-0.5 bg-white opacity-15 transform -rotate-70 animate-pulse" style={{animationDelay: '1.1s'}}></div>
        
        {/* Маленькие хаотичные точки */}
        <div className="absolute top-20 right-1/3 w-4 h-6 bg-white rounded-full opacity-28 animate-ping transform rotate-30" style={{animationDelay: '0.6s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-5 h-4 bg-white rounded-full opacity-32 animate-bounce transform -rotate-45" style={{animationDelay: '1.0s'}}></div>
        <div className="absolute top-1/2 right-1/5 w-3 h-5 bg-white rounded-full opacity-38 animate-ping transform rotate-55" style={{animationDelay: '1.4s'}}></div>
        
        {/* Неправильные квадраты */}
        <div className="absolute top-1/3 left-1/5 w-7 h-9 bg-white rounded-lg opacity-12 transform rotate-65 animate-pulse" style={{animationDelay: '1.6s'}}></div>
        <div className="absolute bottom-1/3 right-1/5 w-9 h-6 bg-white rounded-lg opacity-10 transform -rotate-55 animate-bounce" style={{animationDelay: '0.7s'}}></div>
        
        {/* Волнистые элементы */}
        <div className="absolute top-1/2 left-1/5 w-13 h-0.5 bg-white opacity-9 transform rotate-40 animate-pulse" style={{animationDelay: '1.3s'}}></div>
        <div className="absolute bottom-1/2 right-1/5 w-11 h-0.5 bg-white opacity-13 transform -rotate-45 animate-pulse" style={{animationDelay: '0.8s'}}></div>
        
        {/* Дополнительные хаотичные формы */}
        <div className="absolute top-1/4 right-1/6 w-5 h-7 bg-white rounded-full opacity-20 animate-bounce transform rotate-75" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 left-1/6 w-7 h-5 bg-white rounded-full opacity-16 animate-pulse transform -rotate-65" style={{animationDelay: '0.9s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-6 h-8 bg-white rounded-full opacity-24 animate-ping transform rotate-40" style={{animationDelay: '1.7s'}}></div>
        
        {/* Дополнительные элементы */}
        <div className="absolute top-1/6 left-1/6 w-4 h-6 bg-white rounded-full opacity-25 animate-bounce transform rotate-70" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/6 right-1/6 w-6 h-4 bg-white rounded-full opacity-19 animate-pulse transform -rotate-60" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute top-3/4 left-1/4 w-5 h-7 bg-white rounded-full opacity-30 animate-ping transform rotate-55" style={{animationDelay: '0.9s'}}></div>
      </div>
      
      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 max-w-[1440px] w-full">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <h2 
            className="font-bold text-black mb-4 xs:mb-5 sm:mb-6"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'
            }}
          >
            Продукт, который выбирают <span className="text-[#3895FF]">практики</span>
          </h2>
          <p 
            className="text-gray-700 max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)'
            }}
          >
            Почему можно доверять Call Intellect
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
          {/* Карточка 1 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg border border-white/50 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform rotate-1">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#3895FF] rounded-full shadow-lg transform rotate-20"></div>
            <div className="text-center">
              <div 
                className="bg-[#3895FF] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 xs:mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 transform -rotate-2"
                style={{
                  width: 'clamp(3rem, 6vw, 4rem)',
                  height: 'clamp(3rem, 6vw, 4rem)'
                }}
              >
                <FaShieldAlt 
                  className="text-white" 
                  style={{
                    width: 'clamp(1.5rem, 3vw, 2rem)',
                    height: 'clamp(1.5rem, 3vw, 2rem)'
                  }}
                />
              </div>
              <h3 
                className="font-semibold text-gray-900 mb-2 xs:mb-3"
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'
                }}
              >
                Безопасность данных
              </h3>
              <p 
                className="text-gray-700"
                style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                }}
              >
                Полная конфиденциальность и защита ваших звонков
              </p>
            </div>
          </div>
          
          {/* Карточка 2 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg border border-white/50 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform -rotate-1">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#3895FF] rounded-full shadow-lg transform -rotate-15"></div>
            <div className="text-center">
              <div 
                className="bg-[#3895FF] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 xs:mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 transform rotate-1"
                style={{
                  width: 'clamp(3rem, 6vw, 4rem)',
                  height: 'clamp(3rem, 6vw, 4rem)'
                }}
              >
                <FaAward 
                  className="text-white" 
                  style={{
                    width: 'clamp(1.5rem, 3vw, 2rem)',
                    height: 'clamp(1.5rem, 3vw, 2rem)'
                  }}
                />
              </div>
              <h3 
                className="font-semibold text-gray-900 mb-2 xs:mb-3"
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'
                }}
              >
                Проверенная технология
              </h3>
              <p 
                className="text-gray-700"
                style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                }}
              >
                AI-алгоритмы, протестированные на тысячах звонков
              </p>
            </div>
          </div>
          
          {/* Карточка 3 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg border border-white/50 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform rotate-0.5">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#3895FF] rounded-full shadow-lg transform rotate-25"></div>
            <div className="text-center">
              <div 
                className="bg-[#3895FF] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 xs:mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 transform -rotate-1"
                style={{
                  width: 'clamp(3rem, 6vw, 4rem)',
                  height: 'clamp(3rem, 6vw, 4rem)'
                }}
              >
                <FaHandshake 
                  className="text-white" 
                  style={{
                    width: 'clamp(1.5rem, 3vw, 2rem)',
                    height: 'clamp(1.5rem, 3vw, 2rem)'
                  }}
                />
              </div>
              <h3 
                className="font-semibold text-gray-900 mb-2 xs:mb-3"
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'
                }}
              >
                Поддержка 24/7
              </h3>
              <p 
                className="text-gray-700"
                style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                }}
              >
                Помогаем на каждом этапе внедрения и использования
              </p>
            </div>
          </div>
          
          {/* Карточка 4 */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg border border-white/50 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform -rotate-0.5">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#3895FF] rounded-full shadow-lg transform -rotate-20"></div>
            <div className="text-center">
              <div 
                className="bg-[#3895FF] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 xs:mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 transform rotate-2"
                style={{
                  width: 'clamp(3rem, 6vw, 4rem)',
                  height: 'clamp(3rem, 6vw, 4rem)'
                }}
              >
                <FaStar 
                  className="text-white" 
                  style={{
                    width: 'clamp(1.5rem, 3vw, 2rem)',
                    height: 'clamp(1.5rem, 3vw, 2rem)'
                  }}
                />
              </div>
              <h3 
                className="font-semibold text-gray-900 mb-2 xs:mb-3"
                style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.25rem)'
                }}
              >
                Гарантия результата
              </h3>
              <p 
                className="text-gray-700"
                style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                }}
              >
                Если не будет результата — вернем деньги
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 