"use client";

import React from 'react';
import { FaBrain, FaChartLine, FaUsers, FaLightbulb } from 'react-icons/fa';

export default function OfferDetailsV2() {
  return (
    <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Хаотичные декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Неправильные круги и овалы */}
        <div className="absolute top-10 left-5 w-20 h-16 bg-[#3895FF] rounded-full opacity-8 animate-pulse transform rotate-25"></div>
        <div className="absolute bottom-10 right-5 w-16 h-20 bg-[#C8F131] rounded-full opacity-12 animate-bounce transform -rotate-15"></div>
        <div className="absolute top-1/3 right-10 w-12 h-8 bg-[#3895FF] rounded-full opacity-10 animate-ping transform rotate-60"></div>
        
        {/* Овалы разной формы */}
        <div className="absolute top-1/4 left-1/4 w-6 h-10 bg-[#C8F131] rounded-full opacity-15 animate-bounce transform rotate-45" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-10 h-6 bg-[#3895FF] rounded-full opacity-8 animate-pulse transform -rotate-30" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-8 h-12 bg-[#C8F131] rounded-full opacity-20 animate-ping transform rotate-75" style={{animationDelay: '0.3s'}}></div>
        
        {/* Неправильные линии */}
        <div className="absolute top-1/2 left-1/5 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-12 animate-pulse transform rotate-20"></div>
        <div className="absolute bottom-1/3 right-1/5 w-12 h-1 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-10 animate-pulse transform -rotate-45" style={{animationDelay: '1s'}}></div>
        
        {/* Кривые линии */}
        <div className="absolute top-1/4 right-1/3 w-14 h-0.5 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-8 transform rotate-35 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-18 h-0.5 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-15 transform -rotate-55 animate-pulse" style={{animationDelay: '1.2s'}}></div>
        
        {/* Маленькие хаотичные точки */}
        <div className="absolute top-20 right-1/4 w-3 h-5 bg-[#3895FF] rounded-full opacity-25 animate-ping transform rotate-15" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-20 left-1/4 w-4 h-3 bg-[#C8F131] rounded-full opacity-30 animate-bounce transform -rotate-25" style={{animationDelay: '0.9s'}}></div>
        <div className="absolute top-1/2 right-1/6 w-2 h-4 bg-[#3895FF] rounded-full opacity-35 animate-ping transform rotate-40" style={{animationDelay: '1.3s'}}></div>
        
        {/* Неправильные квадраты */}
        <div className="absolute top-1/3 left-1/6 w-6 h-8 bg-[#C8F131] rounded-lg opacity-12 transform rotate-50 animate-pulse" style={{animationDelay: '1.7s'}}></div>
        <div className="absolute bottom-1/3 right-1/6 w-8 h-5 bg-[#3895FF] rounded-lg opacity-10 transform -rotate-40 animate-bounce" style={{animationDelay: '0.7s'}}></div>
        
        {/* Волнистые элементы */}
        <div className="absolute top-1/2 left-1/6 w-10 h-0.5 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-8 transform rotate-25 animate-pulse" style={{animationDelay: '1.1s'}}></div>
        <div className="absolute bottom-1/2 right-1/6 w-8 h-0.5 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-12 transform -rotate-35 animate-pulse" style={{animationDelay: '0.6s'}}></div>
        
        {/* Дополнительные хаотичные формы */}
        <div className="absolute top-1/4 right-1/5 w-4 h-6 bg-[#C8F131] rounded-full opacity-18 animate-bounce transform rotate-65" style={{animationDelay: '1.4s'}}></div>
        <div className="absolute bottom-1/4 left-1/5 w-6 h-4 bg-[#3895FF] rounded-full opacity-14 animate-pulse transform -rotate-55" style={{animationDelay: '0.8s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-5 h-7 bg-[#C8F131] rounded-full opacity-22 animate-ping transform rotate-30" style={{animationDelay: '1.6s'}}></div>
      </div>
      
      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 max-w-[1440px] w-full">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <h2 
            className="font-bold text-black mb-4 xs:mb-5 sm:mb-6"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'
            }}
          >
            Что включает <span className="text-[#3895FF]">AI-аудит</span> отдела продаж
          </h2>
          <p 
            className="text-gray-600 max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)'
            }}
          >
            Полный анализ ваших звонков с помощью искусственного интеллекта
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8">
          {/* Карточка 1 */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform rotate-1">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#3895FF] rounded-full shadow-lg transform rotate-12"></div>
            <div className="text-center">
              <div 
                className="bg-gradient-to-r from-[#3895FF] to-[#3895FF] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 xs:mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 transform -rotate-2"
                style={{
                  width: 'clamp(3rem, 6vw, 4rem)',
                  height: 'clamp(3rem, 6vw, 4rem)'
                }}
              >
                <FaBrain 
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
                Анализ речи
              </h3>
              <p 
                className="text-gray-600"
                style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                }}
              >
                AI изучает интонацию, темп речи и эмоциональную окраску
              </p>
            </div>
          </div>
          
          {/* Карточка 2 */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform -rotate-1">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#C8F131] rounded-full shadow-lg transform -rotate-8"></div>
            <div className="text-center">
              <div 
                className="bg-[#C8F131] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 xs:mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 transform rotate-1"
                style={{
                  width: 'clamp(3rem, 6vw, 4rem)',
                  height: 'clamp(3rem, 6vw, 4rem)'
                }}
              >
                <FaChartLine 
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
                Статистика
              </h3>
              <p 
                className="text-gray-600"
                style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                }}
              >
                Детальная статистика по каждому менеджеру и звонку
              </p>
            </div>
          </div>
          
          {/* Карточка 3 */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform rotate-0.5">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#3895FF] rounded-full shadow-lg transform rotate-20"></div>
            <div className="text-center">
              <div 
                className="bg-gradient-to-r from-[#3895FF] to-[#3895FF] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 xs:mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 transform -rotate-1"
                style={{
                  width: 'clamp(3rem, 6vw, 4rem)',
                  height: 'clamp(3rem, 6vw, 4rem)'
                }}
              >
                <FaUsers 
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
                Оценка менеджеров
              </h3>
              <p 
                className="text-gray-600"
                style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                }}
              >
                Рейтинг эффективности каждого сотрудника
              </p>
            </div>
          </div>
          
          {/* Карточка 4 */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 md:p-8 shadow-lg border border-gray-100 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform -rotate-0.5">
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-[#C8F131] rounded-full shadow-lg transform -rotate-15"></div>
            <div className="text-center">
              <div 
                className="bg-[#C8F131] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-4 xs:mb-5 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 transform rotate-2"
                style={{
                  width: 'clamp(3rem, 6vw, 4rem)',
                  height: 'clamp(3rem, 6vw, 4rem)'
                }}
              >
                <FaLightbulb 
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
                Рекомендации
              </h3>
              <p 
                className="text-gray-600"
                style={{
                  fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                }}
              >
                Персональные советы по улучшению продаж
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 