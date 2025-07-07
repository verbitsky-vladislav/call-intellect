"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa';
import IMask from 'imask';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [agreement, setAgreement] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const phoneInputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const maskRef = useRef<any>(null);

  useEffect(() => {
    if (phoneInputRef.current) {
      // Создаем маску для российского номера телефона
      maskRef.current = IMask(phoneInputRef.current, {
        mask: '+{7} (000) 000-00-00',
        lazy: false,
        placeholderChar: '_'
      });

      // Обработчик изменения значения
      maskRef.current.on('accept', () => {
        setFormData(prev => ({
          ...prev,
          phone: maskRef.current?.value || ''
        }));
      });

      // Обработчик завершения ввода
      maskRef.current.on('complete', () => {
        console.log('Номер телефона полностью введен');
      });
    }

    // Очистка при размонтировании
    return () => {
      if (maskRef.current) {
        maskRef.current.destroy();
      }
    };
  }, []);

  // Отключение прокрутки при открытом модальном окне
  useEffect(() => {
    if (showPolicy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showPolicy]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name !== 'phone') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleAgreementChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAgreement(e.target.checked);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!agreement) {
      setToast({ type: 'error', message: 'Необходимо согласие на обработку персональных данных' });
      return;
    }
    
    try {
      const url = 'https://call-intellect.bitrix24.ru/rest/11/hvibf14mn9mik133/crm.lead.add.json';
      const params = new URLSearchParams();
      params.append('FIELDS[TITLE]', 'Новый лид');
      params.append('FIELDS[NAME]', formData.name);
      params.append('FIELDS[LAST_NAME]', 'Тестовый');
      params.append('FIELDS[EMAIL][0][VALUE]', 'test@example.com');
      params.append('FIELDS[EMAIL][0][VALUE_TYPE]', 'WORK');
      params.append('FIELDS[PHONE][0][VALUE]', formData.phone);
      params.append('FIELDS[PHONE][0][VALUE_TYPE]', 'WORK');
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      const data = await response.json();
      if (data.result) {
        setToast({ type: 'success', message: 'Спасибо! Ваша заявка успешно отправлена.' });
        setFormData({ name: '', phone: '' });
        setAgreement(false);
      } else {
        setToast({ type: 'error', message: 'Ошибка при отправке. Попробуйте позже.' });
      }
    } catch {
      setToast({ type: 'error', message: 'Ошибка при отправке. Попробуйте позже.' });
    }
  };

  // Автоматическое скрытие toast
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const benefits = [
    {
      text: "Работаем по NDA"
    },
    {
      text: "Результат в течение 1-2 дней"
    },
    {
      text: "Аудит — бесплатно"
    }
  ];

  return (
    <section id="contact-form" className="py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50/50 relative">
      {/* Верхний разделитель */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#3895FF] to-transparent opacity-30 z-0"></div>
      
      {/* Боковые декоративные элементы */}
      <div className="absolute top-1/2 left-0 w-16 h-32 bg-gradient-to-r from-[#3895FF] to-transparent opacity-5 transform -translate-y-1/2 z-0"></div>
      <div className="absolute top-1/2 right-0 w-16 h-32 bg-gradient-to-l from-[#C8F131] to-transparent opacity-5 transform -translate-y-1/2 z-0"></div>
      
      {/* Нижний разделитель */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C8F131] to-transparent opacity-30 z-0"></div>
      
      <div className="container mx-auto px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Левая колонка - контент */}
          <div className="space-y-6 xs:space-y-8">
            <div className="space-y-4 xs:space-y-6">
              <h2 
                className="font-bold text-black leading-tight"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  lineHeight: '1.1'
                }}
              >
                Получите <span className="text-[#3895FF]">аудит по звонку</span>
              </h2>
              <p className="text-gray-600 text-lg xs:text-xl sm:text-2xl leading-relaxed">
                Оставьте заявку и получите персональный анализ ваших продаж с конкретными рекомендациями
              </p>
            </div>
            
            {/* Преимущества */}
            <div className="space-y-4 xs:space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-6 xs:w-7 h-6 xs:h-7 bg-[#3895FF] rounded-full flex items-center justify-center flex-shrink-0">
                    <FaCheck className="w-3 xs:w-4 h-3 xs:h-4 text-white" />
                  </div>
                  <span className="text-base xs:text-lg text-gray-700 font-medium">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка - форма */}
          <div className="bg-white rounded-2xl p-6 xs:p-8 sm:p-10 shadow-xl border border-gray-200 relative overflow-hidden">
            {/* Декоративный элемент внутри формы */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#3895FF]/10 to-transparent rounded-bl-full"></div>
            
                        <form onSubmit={handleSubmit} className="space-y-5 xs:space-y-6 relative z-10">
              {/* Поле Имя */}
              <div>
                <label htmlFor="name" className="block text-base xs:text-lg font-medium text-gray-700 mb-2">
                  Имя
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 xs:px-5 py-3 xs:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3895FF] focus:border-transparent transition-all duration-200 text-base xs:text-lg placeholder-gray-400"
                  placeholder="Ваше имя"
                />
              </div>

              {/* Поле Телефон */}
              <div>
                <label htmlFor="phone" className="block text-base xs:text-lg font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                <input
                  ref={phoneInputRef}
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 xs:px-5 py-3 xs:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3895FF] focus:border-transparent transition-all duration-200 text-base xs:text-lg placeholder-gray-400"
                  placeholder="+7 (___) ___-__-__"
                />
              </div>

              {/* Согласие на обработку персональных данных */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  checked={agreement}
                  onChange={handleAgreementChange}
                  required
                  className="mt-1 w-4 h-4 text-[#3895FF] bg-gray-100 border-gray-300 rounded focus:ring-[#3895FF] focus:ring-2 cursor-pointer"
                />
                <label htmlFor="agreement" className="text-xs xs:text-sm text-gray-600 leading-relaxed select-none cursor-pointer">
                  Я принимаю{' '}
                  <button
                    type="button"
                    onClick={() => setShowPolicy(true)}
                    className="text-[#3895FF] hover:underline focus:outline-none cursor-pointer"
                    tabIndex={0}
                  >
                    условия обработки персональных данных
                  </button>
                </label>
              </div>

              {/* Модальное окно политики */}
              {showPolicy && (
                <div
                  className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
                  onClick={() => setShowPolicy(false)}
                >
                  <div
                    className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 xs:p-8 relative animate-fade-in"
                    onClick={e => e.stopPropagation()}
                  >
                    <button
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none cursor-pointer"
                      onClick={() => setShowPolicy(false)}
                      aria-label="Закрыть"
                    >
                      ×
                    </button>
                    <h2 className="text-xl xs:text-2xl font-bold mb-4 text-gray-900">Политика обработки персональных данных</h2>
                    <div className="text-gray-700 text-sm xs:text-base space-y-4">
                      <p>Настоящим я даю согласие на обработку моих персональных данных, указанных в форме на сайте, в соответствии с Федеральным законом РФ от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
                      <p>Обработка персональных данных осуществляется в целях рассмотрения заявки, обратной связи и предоставления информации о продуктах и услугах компании.</p>
                      <p>Согласие действует с момента отправки формы и может быть отозвано мной в любой момент по письменному обращению.</p>
                      <p>Подробнее с политикой обработки персональных данных можно ознакомиться по запросу.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Кнопка отправки */}
              <button
                type="submit"
                disabled={!agreement}
                className={`w-full font-bold py-4 xs:py-5 px-8 xs:px-10 rounded-xl text-lg xs:text-xl transition-all duration-200 shadow-lg cursor-pointer ${
                  agreement 
                    ? 'bg-[#3895FF] hover:bg-[#3895FF]/90 text-white hover:shadow-xl' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Получить аудит
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Toast уведомление */}
      {toast && (
        <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-6 py-4 rounded-xl shadow-xl text-white text-base font-semibold transition-all duration-300
          ${toast.type === 'success' ? 'bg-[#3895FF]' : 'bg-red-500'}`}
          style={{ minWidth: 260, maxWidth: 400 }}
        >
          {toast.message}
        </div>
      )}
    </section>
  );
} 