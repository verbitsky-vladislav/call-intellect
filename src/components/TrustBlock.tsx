"use client";

import React from 'react';
import { FaShieldAlt, FaLock, FaRocket, FaCheckCircle } from 'react-icons/fa';

export default function TrustBlock() {
  const trustPoints = [
    {
      icon: FaShieldAlt,
      title: "Используется в продажах, консалтинге, маркетинге, обучении",
      color: "from-[#3895FF] to-[#1a7ae6]"
    },
    {
      icon: FaLock,
      title: "Надёжность и конфиденциальность (NDA, шифрование)",
      color: "from-[#3895FF] to-[#1a7ae6]"
    },
    {
      icon: FaCheckCircle,
      title: "Не требует интеграций или CRM",
      color: "from-[#3895FF] to-[#1a7ae6]"
    },
    {
      icon: FaRocket,
      title: "Быстрый запуск — результат за 1–2 дня",
      color: "from-[#3895FF] to-[#1a7ae6]"
    }
  ];

  return (
    <section className="py-4 xs:py-6 sm:py-8 md:py-10 lg:py-12 bg-white">
      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 max-w-[1440px] w-full">
        {/* Зеленый блок с контентом */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-4xl" style={{background: "var(--color-accent)"}}>
          {/* Декоративные фоновые элементы */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Основные круги */}
            <div className="absolute top-10 left-20 w-20 h-20 bg-white rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-16 h-16 bg-[#3895FF] rounded-full opacity-15 animate-bounce"></div>
            
            {/* Дополнительные элементы */}
            <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-white rounded-full opacity-8 animate-ping"></div>
            <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-[#3895FF] rounded-full opacity-12 animate-bounce" style={{animationDelay: '1s'}}></div>
            
            {/* Линии */}
            <div className="absolute top-1/3 right-1/4 w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-16 h-1 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="relative z-10 p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Заголовок секции */}
            <div className="text-center mb-4 xs:mb-6 sm:mb-8 md:mb-10">
              <h2 
                className="font-bold text-black leading-tight mb-2 xs:mb-3 sm:mb-4"
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  lineHeight: '1.2'
                }}
              >
                Продукт, который выбирают <span style={{color: "var(--color-primary)"}}>практики</span>
              </h2>
            </div>

            {/* Карточки доверия */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
              {trustPoints.map((point, index) => (
                <div 
                  key={index}
                  className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-xl border border-white/20 relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-w-0"
                >
                  {/* Иконка */}
                  <div 
                    className={`${point.color.includes('bg-') ? point.color : `bg-gradient-to-r ${point.color}`} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 mb-3 xs:mb-4`}
                    style={{
                      width: 'clamp(2rem, 4vw, 2.5rem)',
                      height: 'clamp(2rem, 4vw, 2.5rem)'
                    }}
                  >
                    <point.icon 
                      className="text-white" 
                      style={{
                        width: 'clamp(1rem, 2.5vw, 1.25rem)',
                        height: 'clamp(1rem, 2.5vw, 1.25rem)'
                      }}
                    />
                  </div>
                  
                  {/* Контент */}
                  <div className="space-y-1 xs:space-y-2">
                    <p 
                      className="text-black leading-relaxed font-medium"
                      style={{
                        fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                      }}
                    >
                      {point.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 