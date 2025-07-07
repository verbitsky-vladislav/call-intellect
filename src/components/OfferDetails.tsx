"use client";

import React from 'react';
import { FaMap, FaExclamationTriangle, FaUserTie, FaHeart, FaFileAlt, FaMicrophone } from 'react-icons/fa';

export default function OfferDetails() {
  const benefits = [
    {
      icon: FaMap,
      title: "Карта этапов разговора",
      description: "Детальный анализ структуры диалога с выделением ключевых моментов",
      color: "from-[#3895FF] to-[#1a7ae6]"
    },
    {
      icon: FaExclamationTriangle,
      title: "Ошибки менеджера и упущенные сигналы",
      description: "Выявление критических промахов и неиспользованных возможностей",
      color: "bg-[#C8F131]"
    },
    {
      icon: FaUserTie,
      title: "Персональный оффер для клиента",
      description: "Рекомендации по индивидуальному подходу к каждому клиенту",
      color: "from-[#3895FF] to-[#1a7ae6]"
    },
    {
      icon: FaHeart,
      title: "Боли, приоритеты, возражения",
      description: "Глубокий анализ потребностей и барьеров клиента",
      color: "bg-[#C8F131]"
    },
    {
      icon: FaFileAlt,
      title: "Резюме встречи для CRM",
      description: "Автоматическое создание структурированных отчетов",
      color: "from-[#3895FF] to-[#1a7ae6]"
    },
    {
      icon: FaMicrophone,
      title: "Портрет ЦА по голосу клиента",
      description: "Определение характеристик целевой аудитории",
      color: "bg-[#C8F131]"
    }
  ];

  return (
    <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-white relative overflow-hidden">
      {/* Декоративные фоновые элементы */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Основные круги */}
        <div className="absolute top-10 right-20 w-20 h-20 bg-[#3895FF] rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-16 h-16 bg-[#C8F131] rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-[#3895FF] rounded-full opacity-8 animate-ping"></div>
        
        {/* Дополнительные хаотичные элементы */}
        <div className="absolute top-40 left-1/3 w-8 h-8 bg-[#C8F131] rounded-full opacity-20 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-[#3895FF] rounded-full opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/4 left-20 w-6 h-6 bg-[#C8F131] rounded-full opacity-25 animate-ping" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/3 right-1/2 w-10 h-10 bg-[#3895FF] rounded-full opacity-12 animate-bounce" style={{animationDelay: '1.5s'}}></div>
        
        {/* Линии и фигуры */}
        <div className="absolute top-1/3 left-1/4 w-20 h-1 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-20 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-16 h-1 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Диагональные линии */}
        <div className="absolute top-1/4 right-1/3 w-24 h-0.5 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-10 transform rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-20 h-0.5 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-12 transform -rotate-45 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Маленькие точки */}
        <div className="absolute top-60 left-1/4 w-3 h-3 bg-[#3895FF] rounded-full opacity-30 animate-ping" style={{animationDelay: '0.3s'}}></div>
        <div className="absolute bottom-60 right-1/4 w-4 h-4 bg-[#C8F131] rounded-full opacity-25 animate-bounce" style={{animationDelay: '0.7s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-[#3895FF] rounded-full opacity-40 animate-ping" style={{animationDelay: '1.2s'}}></div>
        
        {/* Квадраты и прямоугольники */}
        <div className="absolute top-1/3 right-1/5 w-8 h-8 bg-[#C8F131] rounded-lg opacity-10 transform rotate-45 animate-pulse" style={{animationDelay: '1.8s'}}></div>
        <div className="absolute bottom-1/4 left-1/5 w-6 h-6 bg-[#3895FF] rounded-lg opacity-15 transform -rotate-45 animate-bounce" style={{animationDelay: '0.9s'}}></div>
        
        {/* Волнистые элементы */}
        <div className="absolute top-1/2 right-1/6 w-12 h-1 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-8 transform rotate-12 animate-pulse" style={{animationDelay: '1.3s'}}></div>
        <div className="absolute bottom-1/2 left-1/6 w-10 h-1 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-10 transform -rotate-12 animate-pulse" style={{animationDelay: '0.6s'}}></div>
      </div>

      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 max-w-[1440px]">
        {/* Заголовок секции */}
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12">
          <h2 
            className="font-bold text-black leading-tight mb-3 xs:mb-4"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
              lineHeight: '1.2'
            }}
          >
            Что даст вам наш <span className="text-[#3895FF]">AI-аудит?</span>
          </h2>
        </div>

        {/* Карточки преимуществ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-6 shadow-xl border border-gray-100/50 relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-w-0"
            >
              {/* Декоративная точка */}
              <div className={`absolute -top-1 sm:-top-2 -left-1 sm:-left-2 w-3 sm:w-4 h-3 sm:h-4 ${benefit.color.includes('bg-') ? benefit.color : `bg-gradient-to-r ${benefit.color}`} rounded-full shadow-lg`}></div>
              
              {/* Иконка */}
              <div className={`w-10 xs:w-12 sm:w-14 h-10 xs:h-12 sm:h-14 ${benefit.color.includes('bg-') ? benefit.color : `bg-gradient-to-r ${benefit.color}`} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 mb-3 xs:mb-4`}>
                <benefit.icon className="w-5 xs:w-6 sm:w-7 h-5 xs:h-6 sm:h-7 text-white" />
              </div>
              
              {/* Контент */}
              <div className="space-y-1 xs:space-y-2">
                <h3 className="font-semibold text-sm xs:text-base sm:text-lg text-gray-900 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-gray-700 text-xs xs:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 