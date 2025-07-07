"use client";

import React from 'react';
import { FaChartLine, FaGraduationCap, FaCloud, FaHospital } from 'react-icons/fa';

export default function CaseStudies() {
  const cases = [
    {
      icon: FaChartLine,
      title: "Digital-агентство",
      metrics: "+22% к закрытию, отклик ↓ с 2 дней до 2 часов",
      color: "from-[#3895FF] to-[#1a7ae6]"
    },
    {
      icon: FaGraduationCap,
      title: "EdTech",
      metrics: "−30% текучка, +18% удержание",
      color: "bg-[#C8F131]"
    },
    {
      icon: FaCloud,
      title: "SaaS-компания",
      metrics: "+15% к оплате после корректировки посадочных",
      color: "from-[#3895FF] to-[#1a7ae6]"
    },
    {
      icon: FaHospital,
      title: "Медцентр",
      metrics: "+10% к записи, ↓ нагрузка на админов",
      color: "bg-[#C8F131]"
    }
  ];

  return (
    <section className="py-4 xs:py-6 sm:py-8 md:py-10 lg:py-12 bg-white relative overflow-hidden">
      {/* Декоративные фоновые элементы */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Основные круги */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-[#3895FF] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-[#C8F131] rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-[#3895FF] rounded-full opacity-8 animate-ping"></div>
        
        {/* Дополнительные элементы */}
        <div className="absolute top-40 left-1/3 w-8 h-8 bg-[#C8F131] rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-10 h-10 bg-[#3895FF] rounded-full opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Линии */}
        <div className="absolute top-1/3 left-1/4 w-20 h-1 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-1 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 max-w-[1440px] w-full">
        {/* Заголовок секции */}
        <div className="text-center mb-3 xs:mb-4 sm:mb-6 md:mb-8">
          <h2 
            className="font-bold text-black leading-tight mb-2 xs:mb-3"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              lineHeight: '1.2'
            }}
          >
            Кто уже применяет <span className="text-[#3895FF]">Call Intellect</span>
          </h2>
        </div>

        {/* Компактные карточки кейсов */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className="group bg-white/80 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 xs:p-4 sm:p-5 shadow-md border border-gray-100/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
                              <div className="flex items-center justify-center space-x-3 xs:space-x-4">
                  {/* Иконка */}
                  <div 
                    className={`${caseItem.color.includes('bg-') ? caseItem.color : `bg-gradient-to-r ${caseItem.color}`} rounded-lg p-2 xs:p-3 flex-shrink-0 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:scale-105 flex items-center justify-center`}
                    style={{
                      width: 'clamp(2.5rem, 4vw, 3rem)',
                      height: 'clamp(2.5rem, 4vw, 3rem)'
                    }}
                  >
                    <caseItem.icon 
                      className="text-white" 
                      style={{
                        width: 'clamp(1.25rem, 2vw, 1.5rem)',
                        height: 'clamp(1.25rem, 2vw, 1.5rem)'
                      }}
                    />
                  </div>
                
                {/* Контент */}
                <div className="flex-1 min-w-0">
                  <h3 
                    className="font-semibold text-gray-900 leading-tight mb-1"
                    style={{
                      fontSize: 'clamp(0.875rem, 2.5vw, 1rem)'
                    }}
                  >
                    {caseItem.title}
                  </h3>
                  <p 
                    className="text-gray-600 leading-tight"
                    style={{
                      fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                    }}
                  >
                    {caseItem.metrics}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 