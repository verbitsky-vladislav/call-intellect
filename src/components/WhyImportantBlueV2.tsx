"use client";

import React from 'react';
import { FaExclamationTriangle, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function WhyImportantBlueV2() {
  return (
    <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-[#C8F131] relative overflow-hidden">
      {/* Хаотичные декоративные элементы */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Неправильные круги и овалы */}
        <div className="absolute top-5 left-5 w-24 h-20 bg-white rounded-full opacity-10 animate-pulse transform rotate-35"></div>
        <div className="absolute bottom-5 right-5 w-20 h-24 bg-white rounded-full opacity-15 animate-bounce transform -rotate-25"></div>
        <div className="absolute top-1/3 right-5 w-16 h-12 bg-white rounded-full opacity-8 animate-ping transform rotate-70"></div>
        
        {/* Овалы разной формы */}
        <div className="absolute top-1/4 left-1/4 w-8 h-14 bg-white rounded-full opacity-12 animate-bounce transform rotate-55" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-8 bg-white rounded-full opacity-10 animate-pulse transform -rotate-40" style={{animationDelay: '1.3s'}}></div>
        <div className="absolute top-2/3 left-1/3 w-10 h-16 bg-white rounded-full opacity-18 animate-ping transform rotate-80" style={{animationDelay: '0.4s'}}></div>
        
        {/* Неправильные линии */}
        <div className="absolute top-1/2 left-1/6 w-18 h-0.5 bg-white opacity-15 animate-pulse transform rotate-30"></div>
        <div className="absolute bottom-1/3 right-1/6 w-14 h-1 bg-white opacity-12 animate-pulse transform -rotate-50" style={{animationDelay: '0.9s'}}></div>
        
        {/* Кривые линии */}
        <div className="absolute top-1/4 right-1/4 w-16 h-0.5 bg-white opacity-10 transform rotate-40 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-20 h-0.5 bg-white opacity-18 transform -rotate-60 animate-pulse" style={{animationDelay: '1.1s'}}></div>
        
        {/* Маленькие хаотичные точки */}
        <div className="absolute top-15 right-1/3 w-4 h-6 bg-white rounded-full opacity-30 animate-ping transform rotate-25" style={{animationDelay: '0.6s'}}></div>
        <div className="absolute bottom-15 left-1/3 w-5 h-4 bg-white rounded-full opacity-35 animate-bounce transform -rotate-35" style={{animationDelay: '1.0s'}}></div>
        <div className="absolute top-1/2 right-1/5 w-3 h-5 bg-white rounded-full opacity-40 animate-ping transform rotate-45" style={{animationDelay: '1.4s'}}></div>
        
        {/* Неправильные квадраты */}
        <div className="absolute top-1/3 left-1/5 w-7 h-9 bg-white rounded-lg opacity-15 transform rotate-55 animate-pulse" style={{animationDelay: '1.6s'}}></div>
        <div className="absolute bottom-1/3 right-1/5 w-9 h-6 bg-white rounded-lg opacity-12 transform -rotate-45 animate-bounce" style={{animationDelay: '0.8s'}}></div>
        
        {/* Волнистые элементы */}
        <div className="absolute top-1/2 left-1/5 w-12 h-0.5 bg-white opacity-10 transform rotate-35 animate-pulse" style={{animationDelay: '1.2s'}}></div>
        <div className="absolute bottom-1/2 right-1/5 w-10 h-0.5 bg-white opacity-15 transform -rotate-40 animate-pulse" style={{animationDelay: '0.7s'}}></div>
        
        {/* Дополнительные хаотичные формы */}
        <div className="absolute top-1/4 right-1/6 w-5 h-7 bg-white rounded-full opacity-20 animate-bounce transform rotate-70" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-1/4 left-1/6 w-7 h-5 bg-white rounded-full opacity-16 animate-pulse transform -rotate-60" style={{animationDelay: '0.9s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-6 h-8 bg-white rounded-full opacity-25 animate-ping transform rotate-35" style={{animationDelay: '1.7s'}}></div>
        
        {/* Дополнительные элементы */}
        <div className="absolute top-1/6 left-1/6 w-4 h-6 bg-white rounded-full opacity-22 animate-bounce transform rotate-65" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/6 right-1/6 w-6 h-4 bg-white rounded-full opacity-18 animate-pulse transform -rotate-55" style={{animationDelay: '1.3s'}}></div>
        <div className="absolute top-3/4 left-1/4 w-5 h-7 bg-white rounded-full opacity-28 animate-ping transform rotate-50" style={{animationDelay: '0.8s'}}></div>
      </div>
      
      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 max-w-[1440px] w-full">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-16">
          <h2 
            className="font-bold text-black mb-4 xs:mb-5 sm:mb-6"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)'
            }}
          >
            Почему это <span className="text-[#3895FF]">важно</span>
          </h2>
          <p 
            className="text-gray-700 max-w-2xl mx-auto"
            style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)'
            }}
          >
            Проблемы, которые решает AI-аудит отдела продаж
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Левая колонка - проблемы */}
          <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
            <h3 
              className="font-bold text-black mb-4 xs:mb-5 sm:mb-6"
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)'
              }}
            >
              Проблемы
            </h3>
            
            <div className="space-y-3 xs:space-y-4 sm:space-y-5">
              {/* Проблема 1 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-lg border border-white/50 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform -rotate-1">
                <div className="absolute -top-2 -left-2 w-5 h-5 bg-red-500 rounded-full shadow-lg transform rotate-15"></div>
                <div className="flex items-start space-x-3 xs:space-x-4">
                  <div 
                    className="bg-red-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 transform rotate-2"
                    style={{
                      width: 'clamp(2.5rem, 4vw, 3rem)',
                      height: 'clamp(2.5rem, 4vw, 3rem)'
                    }}
                  >
                    <FaExclamationTriangle 
                      className="text-white" 
                      style={{
                        width: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                        height: 'clamp(1.25rem, 2.5vw, 1.5rem)'
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 
                      className="font-semibold text-gray-900 mb-1 xs:mb-2"
                      style={{
                        fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)'
                      }}
                    >
                      Не знаете, где теряются клиенты
                    </h4>
                    <p 
                      className="text-gray-700"
                      style={{
                        fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                      }}
                    >
                      Менеджеры не понимают, на каком этапе сделки "срываются"
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Проблема 2 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-lg border border-white/50 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform rotate-1">
                <div className="absolute -top-2 -left-2 w-5 h-5 bg-red-500 rounded-full shadow-lg transform -rotate-10"></div>
                <div className="flex items-start space-x-3 xs:space-x-4">
                  <div 
                    className="bg-red-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 transform -rotate-1"
                    style={{
                      width: 'clamp(2.5rem, 4vw, 3rem)',
                      height: 'clamp(2.5rem, 4vw, 3rem)'
                    }}
                  >
                    <FaExclamationTriangle 
                      className="text-white" 
                      style={{
                        width: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                        height: 'clamp(1.25rem, 2.5vw, 1.5rem)'
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 
                      className="font-semibold text-gray-900 mb-1 xs:mb-2"
                      style={{
                        fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)'
                      }}
                    >
                      Нет понимания потребностей клиентов
                    </h4>
                    <p 
                      className="text-gray-700"
                      style={{
                        fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                      }}
                    >
                      Сложно выявить реальные боли и потребности клиентов
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Проблема 3 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-lg border border-white/50 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform -rotate-0.5">
                <div className="absolute -top-2 -left-2 w-5 h-5 bg-red-500 rounded-full shadow-lg transform rotate-20"></div>
                <div className="flex items-start space-x-3 xs:space-x-4">
                  <div 
                    className="bg-red-500 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 transform rotate-1"
                    style={{
                      width: 'clamp(2.5rem, 4vw, 3rem)',
                      height: 'clamp(2.5rem, 4vw, 3rem)'
                    }}
                  >
                    <FaExclamationTriangle 
                      className="text-white" 
                      style={{
                        width: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                        height: 'clamp(1.25rem, 2.5vw, 1.5rem)'
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 
                      className="font-semibold text-gray-900 mb-1 xs:mb-2"
                      style={{
                        fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)'
                      }}
                    >
                      Сложно оценить эффективность менеджеров
                    </h4>
                    <p 
                      className="text-gray-700"
                      style={{
                        fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                      }}
                    >
                      Нет объективных критериев для оценки работы отдела продаж
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Правая колонка - решения */}
          <div className="space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8">
            <h3 
              className="font-bold text-black mb-4 xs:mb-5 sm:mb-6"
              style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)'
              }}
            >
              Решения
            </h3>
            
            <div className="space-y-3 xs:space-y-4 sm:space-y-5">
              {/* Решение 1 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-lg border border-white/50 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform rotate-1">
                <div className="absolute -top-2 -left-2 w-5 h-5 bg-[#3895FF] rounded-full shadow-lg transform -rotate-12"></div>
                <div className="flex items-start space-x-3 xs:space-x-4">
                  <div 
                    className="bg-[#3895FF] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 transform -rotate-2"
                    style={{
                      width: 'clamp(2.5rem, 4vw, 3rem)',
                      height: 'clamp(2.5rem, 4vw, 3rem)'
                    }}
                  >
                    <FaCheckCircle 
                      className="text-white" 
                      style={{
                        width: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                        height: 'clamp(1.25rem, 2.5vw, 1.5rem)'
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 
                      className="font-semibold text-gray-900 mb-1 xs:mb-2"
                      style={{
                        fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)'
                      }}
                    >
                      AI выявляет критические моменты
                    </h4>
                    <p 
                      className="text-gray-700"
                      style={{
                        fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                      }}
                    >
                      Точно определяет, где и почему теряются клиенты
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Решение 2 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-lg border border-white/50 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform -rotate-1">
                <div className="absolute -top-2 -left-2 w-5 h-5 bg-[#3895FF] rounded-full shadow-lg transform rotate-15"></div>
                <div className="flex items-start space-x-3 xs:space-x-4">
                  <div 
                    className="bg-[#3895FF] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 transform rotate-1"
                    style={{
                      width: 'clamp(2.5rem, 4vw, 3rem)',
                      height: 'clamp(2.5rem, 4vw, 3rem)'
                    }}
                  >
                    <FaCheckCircle 
                      className="text-white" 
                      style={{
                        width: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                        height: 'clamp(1.25rem, 2.5vw, 1.5rem)'
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 
                      className="font-semibold text-gray-900 mb-1 xs:mb-2"
                      style={{
                        fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)'
                      }}
                    >
                      Глубокий анализ потребностей
                    </h4>
                    <p 
                      className="text-gray-700"
                      style={{
                        fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                      }}
                    >
                      Выявляет реальные боли и потребности клиентов
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Решение 3 */}
              <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-5 sm:p-6 shadow-lg border border-white/50 relative group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform rotate-0.5">
                <div className="absolute -top-2 -left-2 w-5 h-5 bg-[#3895FF] rounded-full shadow-lg transform -rotate-20"></div>
                <div className="flex items-start space-x-3 xs:space-x-4">
                  <div 
                    className="bg-[#3895FF] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 transform -rotate-1"
                    style={{
                      width: 'clamp(2.5rem, 4vw, 3rem)',
                      height: 'clamp(2.5rem, 4vw, 3rem)'
                    }}
                  >
                    <FaCheckCircle 
                      className="text-white" 
                      style={{
                        width: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                        height: 'clamp(1.25rem, 2.5vw, 1.5rem)'
                      }}
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 
                      className="font-semibold text-gray-900 mb-1 xs:mb-2"
                      style={{
                        fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)'
                      }}
                    >
                      Объективная оценка эффективности
                    </h4>
                    <p 
                      className="text-gray-700"
                      style={{
                        fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                      }}
                    >
                      Четкие критерии для оценки работы каждого менеджера
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA кнопка */}
        <div className="text-center mt-8 xs:mt-10 sm:mt-12 md:mt-16">
          <button 
            className="group bg-[#3895FF] hover:bg-[#3895FF] text-white font-bold py-3 xs:py-4 sm:py-5 px-6 xs:px-8 sm:px-10 rounded-full transition-all duration-300 transform hover:scale-110 shadow-2xl relative overflow-hidden border-2 border-white/20 min-w-[160px] max-w-full transform rotate-1"
            style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1.25rem)'
            }}
          >
            <span className="relative z-10 flex items-center justify-center space-x-2">
              <span>Получить AI-аудит</span>
              <FaArrowRight className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 animate-pulse" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
} 