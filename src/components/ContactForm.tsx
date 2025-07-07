"use client";

import React, { useState } from 'react';
import { FaCheck, FaShieldAlt, FaClock, FaGift } from 'react-icons/fa';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log('Form submitted:', formData);
  };

  const benefits = [
    {
      icon: FaShieldAlt,
      text: "Работаем по NDA",
      color: "from-[#3895FF] to-[#1a7ae6]"
    },
    {
      icon: FaClock,
      text: "Ответим в течение 1 дня",
      color: "bg-[#C8F131]"
    },
    {
      icon: FaGift,
      text: "Аудит — бесплатно",
      color: "from-[#3895FF] to-[#1a7ae6]"
    }
  ];

  return (
    <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-gradient-to-br from-white via-blue-50/30 to-[#C8F131]/5 relative overflow-hidden">
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

      <div className="container mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 relative z-10 max-w-[1440px]">
        <div className="max-w-2xl mx-auto">
          {/* Заголовок секции */}
          <div className="text-center mb-6 xs:mb-8 sm:mb-10">
            <h2 
              className="font-bold text-black leading-tight mb-3 xs:mb-4"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                lineHeight: '1.2'
              }}
            >
              Получите <span className="text-[#3895FF]">аудит по звонку</span>
            </h2>
            <p className="text-gray-600 text-sm xs:text-base sm:text-lg">
              Оставьте заявку и получите персональный анализ ваших продаж
            </p>
          </div>

          {/* Форма */}
          <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 xs:p-6 sm:p-8 shadow-2xl border border-gray-100/50">
            <form onSubmit={handleSubmit} className="space-y-4 xs:space-y-5 sm:space-y-6">
              {/* Поле Имя */}
              <div>
                <label htmlFor="name" className="block text-sm xs:text-base font-medium text-gray-700 mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 xs:px-5 py-3 xs:py-4 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#3895FF] focus:border-transparent transition-all duration-200 text-sm xs:text-base placeholder-gray-400"
                  placeholder="Ваше имя"
                />
              </div>

              {/* Поле Телефон */}
              <div>
                <label htmlFor="phone" className="block text-sm xs:text-base font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 xs:px-5 py-3 xs:py-4 border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-[#3895FF] focus:border-transparent transition-all duration-200 text-sm xs:text-base placeholder-gray-400"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              {/* Кнопка отправки */}
              <button
                type="submit"
                className="group w-full bg-[#3895FF] hover:bg-[#3895FF] text-white font-bold py-3 xs:py-4 sm:py-5 px-6 xs:px-8 sm:px-10 rounded-lg sm:rounded-xl text-base xs:text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl relative overflow-hidden border-2 border-white/20"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Получить аудит</span>
                  <svg className="w-5 h-5 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </form>

            {/* Преимущества */}
            <div className="mt-6 xs:mt-8 sm:mt-10 space-y-3 xs:space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 xs:space-x-4">
                  {/* Иконка */}
                  <div className={`w-6 xs:w-8 sm:w-10 h-6 xs:h-8 sm:h-10 ${benefit.color.includes('bg-') ? benefit.color : `bg-gradient-to-r ${benefit.color}`} rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <benefit.icon className="w-3 xs:w-4 sm:w-5 h-3 xs:h-4 sm:h-5 text-white" />
                  </div>
                  
                  {/* Текст */}
                  <span className="text-sm xs:text-base sm:text-lg text-gray-700 font-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 