"use client";

import React from 'react';
import { FaHeadset, FaChartLine, FaRobot } from 'react-icons/fa';

export default function HeroBlock3() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-[#C1F700]/5 flex items-center relative overflow-hidden">
      {/* Декоративные фоновые элементы */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#298AFF] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#C1F700] rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#298AFF] rounded-full opacity-8 animate-ping"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Левая колонка - контент */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Аудит отдела продаж на основе ваших звонков — <br className="hidden md:block" />
                <span className="inline-block relative align-middle">
                  <span className="relative font-bold text-black">
                    <svg viewBox="0 0 420 56" width="100%" height="2.6em" className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-full pointer-events-none select-none" style={{zIndex: 0}} aria-hidden="true">
                      <path d="M10 40 Q 60 55 120 40 T 230 40 T 340 40 Q 370 55 410 35 L 410 56 L 10 56 Z" fill="#C1F700" fillOpacity="0.45"/>
                    </svg>
                    <span className="relative px-2" style={{zIndex: 1}}>
                      AI, который слышит клиентов
                    </span>
                  </span>
                </span>
              </h1>
            </div>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
              Узнайте, где теряются сделки, что реально волнует ваших клиентов и как улучшить продажи без прослушки и CRM-анализов
            </p>
            
            <div className="space-y-3 md:space-y-4">
              <button className="group w-full sm:w-auto bg-[#298AFF] hover:bg-[#1a7ae6] text-white font-bold py-4 sm:py-5 px-8 sm:px-10 rounded-full text-lg sm:text-xl transition-all duration-300 transform hover:scale-110 shadow-2xl relative overflow-hidden border-2 border-white/20">
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Оставить заявку</span>
                  <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              
              <p className="text-sm text-gray-500 text-center sm:text-left flex items-center justify-center sm:justify-start">
                <span className="w-2 h-2 bg-[#C1F700] rounded-full mr-2 animate-pulse"></span>
                — ответим в течение пары часов
              </p>
            </div>
            
            {/* Статистика с акцентными элементами */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-4 md:pt-6">
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#298AFF] to-[#1a7ae6] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">95%</div>
                <div className="text-xs sm:text-sm text-gray-600">Точность анализа</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#C1F700] to-[#a8d900] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">2ч</div>
                <div className="text-xs sm:text-sm text-gray-600">Время ответа</div>
              </div>
              <div className="text-center group">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#298AFF] to-[#1a7ae6] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">0</div>
                <div className="text-xs sm:text-sm text-gray-600">Установок CRM</div>
              </div>
            </div>
          </div>
          
          {/* Правая колонка - карточки */}
          <div className="space-y-4 sm:space-y-6 mt-8 lg:mt-0">
            {/* Карточка 1 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100/50 relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-r from-[#298AFF] to-[#1a7ae6] rounded-full shadow-lg"></div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-r from-[#298AFF] to-[#1a7ae6] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaHeadset className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900">AI анализ звонков</h3>
                  <p className="text-gray-700 text-xs sm:text-sm font-medium">Автоматическое выявление проблем в продажах</p>
                </div>
              </div>
            </div>
            
            {/* Карточка 2 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100/50 relative ml-4 sm:ml-8 group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-r from-[#C1F700] to-[#a8d900] rounded-full shadow-lg"></div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-r from-[#C1F700] to-[#a8d900] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaChartLine className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900">Быстрый результат</h3>
                  <p className="text-gray-700 text-xs sm:text-sm font-medium">Получите отчет за несколько часов</p>
                </div>
              </div>
            </div>
            
            {/* Карточка 3 */}
            <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-gray-100/50 relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 w-4 sm:w-6 h-4 sm:h-6 bg-gradient-to-r from-[#298AFF] to-[#1a7ae6] rounded-full shadow-lg"></div>
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-r from-[#298AFF] to-[#1a7ae6] rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaRobot className="w-4 sm:w-6 h-4 sm:h-6 text-white" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-900">Без интеграций</h3>
                  <p className="text-gray-700 text-xs sm:text-sm font-medium">Работает с любыми системами записи</p>
                </div>
              </div>
            </div>
            
            {/* Центральная иконка вместо 3D персонажа */}
            <div className="flex justify-center pt-4 sm:pt-6">
              <div className="relative">
                <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-[#298AFF] to-[#1a7ae6] rounded-2xl flex items-center justify-center shadow-xl group hover:scale-110 transition-transform duration-300">
                  <FaHeadset className="w-10 sm:w-12 h-10 sm:h-12 text-white animate-pulse" />
                </div>
                {/* Декоративные элементы вокруг иконки */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#C1F700] rounded-full opacity-60 animate-ping"></div>
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#298AFF] rounded-full opacity-60 animate-bounce"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 