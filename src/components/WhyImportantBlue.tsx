"use client";

import React from 'react';
import { FaExclamationTriangle, FaBullseye, FaAd, FaUserGraduate, FaHeadset, FaChartLine, FaUsers } from 'react-icons/fa';

export default function WhyImportantBlue() {
  const problems = [
    {
      icon: FaExclamationTriangle,
      title: "РОП не может прослушать всё",
      description: "Руководитель отдела продаж физически не может контролировать все звонки менеджеров",
      color: "bg-[#C8F131]"
    },
    {
      icon: FaBullseye,
      title: "КП не попадает в цель",
      description: "Коммерческие предложения создаются без понимания реальных потребностей клиентов",
      color: "from-[#3895FF] to-[#1a7ae6]"
    },
    {
      icon: FaAd,
      title: "Маркетинг работает вслепую",
      description: "Маркетинговые кампании не учитывают реальные боли и возражения клиентов",
      color: "bg-[#C8F131]"
    },
    {
      icon: FaUserGraduate,
      title: "Новички делают те же ошибки",
      description: "Новые менеджеры повторяют ошибки коллег без понимания причин",
      color: "from-[#3895FF] to-[#1a7ae6]"
    }
  ];

  const solutions = [
    {
      icon: FaHeadset,
      title: "для менеджера",
      description: "Конкретные рекомендации по улучшению техники продаж и работе с возражениями",
      color: "bg-[#C8F131]"
    },
    {
      icon: FaChartLine,
      title: "для маркетинга",
      description: "Анализ болей клиентов для создания эффективных маркетинговых материалов",
      color: "from-[#3895FF] to-[#1a7ae6]"
    },
    {
      icon: FaUsers,
      title: "для руководства",
      description: "Стратегические выводы для принятия управленческих решений",
      color: "bg-[#C8F131]"
    }
  ];

  return (
    <section className="py-4 xs:py-6 sm:py-8 md:py-10 lg:py-12 bg-white">
      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 max-w-[1440px] w-full">
        {/* Синий блок с контентом */}
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-4xl" style={{background: "var(--color-primary)"}}>
          {/* Декоративные фоновые элементы */}
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Основные круги */}
            <div className="absolute top-10 left-20 w-20 h-20 bg-white rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-16 h-16 bg-[#C8F131] rounded-full opacity-15 animate-bounce"></div>
            
            {/* Дополнительные элементы */}
            <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-white rounded-full opacity-8 animate-ping"></div>
            <div className="absolute bottom-1/3 right-1/3 w-10 h-10 bg-[#C8F131] rounded-full opacity-12 animate-bounce" style={{animationDelay: '1s'}}></div>
            
            {/* Линии */}
            <div className="absolute top-1/3 right-1/4 w-20 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 animate-pulse"></div>
            <div className="absolute bottom-1/4 left-1/4 w-16 h-1 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-15 animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>

          <div className="relative z-10 p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12">
            {/* Заголовок секции */}
            <div className="text-center mb-4 xs:mb-6 sm:mb-8 md:mb-10">
              <h2 
                className="font-bold text-white leading-tight mb-2 xs:mb-3 sm:mb-4"
                style={{
                  fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                  lineHeight: '1.2'
                }}
              >
                Вы теряете деньги не из-за слабых менеджеров,<br className="hidden md:block" />
                а потому что <span style={{color: "var(--color-accent)"}}>никто не слышит</span>, что говорит клиент
              </h2>
            </div>

            {/* Проблемы */}
            <div className="mb-6 xs:mb-8 sm:mb-10">
              <h3 
                className="text-center font-semibold text-white mb-4 xs:mb-6"
                style={{
                  fontSize: 'clamp(1.125rem, 3vw, 1.5rem)'
                }}
              >
                Проблемы, которые решает AI-аудит:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
                {problems.map((problem, index) => (
                  <div 
                    key={index}
                    className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-xl border border-white/20 relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-w-0"
                  >
                    {/* Иконка */}
                    <div 
                      className={`${problem.color.includes('bg-') ? problem.color : `bg-gradient-to-r ${problem.color}`} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 mb-3 xs:mb-4`}
                      style={{
                        width: 'clamp(2.5rem, 5vw, 3.5rem)',
                        height: 'clamp(2.5rem, 5vw, 3.5rem)'
                      }}
                    >
                      <problem.icon 
                        className="text-white" 
                        style={{
                          width: 'clamp(1.25rem, 3vw, 1.75rem)',
                          height: 'clamp(1.25rem, 3vw, 1.75rem)'
                        }}
                      />
                    </div>
                    
                    {/* Контент */}
                    <div className="space-y-1 xs:space-y-2">
                      <h4 
                        className="font-semibold text-black leading-tight"
                        style={{
                          fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)'
                        }}
                      >
                        {problem.title}
                      </h4>
                      <p 
                        className="text-gray-800 leading-relaxed"
                        style={{
                          fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                        }}
                      >
                        {problem.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Решения */}
            <div>
              <h3 
                className="text-center font-semibold text-white mb-4 xs:mb-6"
                style={{
                  fontSize: 'clamp(1.125rem, 3vw, 1.5rem)'
                }}
              >
                Call Intellect анализирует разговор и выдаёт конкретные действия:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
                {solutions.map((solution, index) => (
                  <div 
                    key={index}
                    className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 xs:p-4 sm:p-5 md:p-6 shadow-xl border border-white/20 relative group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-w-0"
                  >
                    {/* Иконка */}
                    <div 
                      className={`${solution.color.includes('bg-') ? solution.color : `bg-gradient-to-r ${solution.color}`} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300 mb-3 xs:mb-4`}
                      style={{
                        width: 'clamp(2.5rem, 5vw, 3.5rem)',
                        height: 'clamp(2.5rem, 5vw, 3.5rem)'
                      }}
                    >
                      <solution.icon 
                        className="text-white" 
                        style={{
                          width: 'clamp(1.25rem, 3vw, 1.75rem)',
                          height: 'clamp(1.25rem, 3vw, 1.75rem)'
                        }}
                      />
                    </div>
                    
                    {/* Контент */}
                    <div className="space-y-1 xs:space-y-2">
                      <h4 
                        className="font-semibold text-black leading-tight"
                        style={{
                          fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)'
                        }}
                      >
                        {solution.title}
                      </h4>
                      <p 
                        className="text-gray-800 leading-relaxed"
                        style={{
                          fontSize: 'clamp(0.75rem, 2vw, 0.875rem)'
                        }}
                      >
                        {solution.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 