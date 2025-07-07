"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import IMask from 'imask';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [agreement, setAgreement] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [toast, setToast] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  
  const phoneInputRef = useRef<HTMLInputElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const maskRef = useRef<any>(null);

  useEffect(() => {
    if (phoneInputRef.current && isOpen) {
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
  }, [isOpen]);

  // Отключение прокрутки при открытом модальном окне и сброс формы
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Сбрасываем форму при закрытии модального окна
      setFormData({ name: '', phone: '' });
      setAgreement(false);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name !== 'phone') {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
    // Для телефона значение обновляется через маску
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
      params.append('FIELDS[TITLE]', 'Новый лид с сайта');
      params.append('FIELDS[NAME]', formData.name);
      params.append('FIELDS[LAST_NAME]', 'нет поля');
      params.append('FIELDS[EMAIL][0][VALUE]', 'mail@example.com');
      params.append('FIELDS[EMAIL][0][VALUE_TYPE]', 'WORK');
      params.append('FIELDS[PHONE][0][VALUE]', formData.phone);
      params.append('FIELDS[PHONE][0][VALUE_TYPE]', 'MOBILE');
      params.append('FIELDS[COMPANY_TITLE]', 'нет поля');
      params.append('FIELDS[COMMENTS]', 'Лид создан через форму на сайте');
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Заголовок и кнопка закрытия */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900">Получите аудит по звонку</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none cursor-pointer"
            aria-label="Закрыть"
          >
            <FaTimes />
          </button>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Левая колонка - контент */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-bold text-black text-xl">
                  Оставьте заявку и получите персональный анализ ваших продаж с конкретными рекомендациями
                </h3>
              </div>
              
              {/* Преимущества */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-6 h-6 bg-[#3895FF] rounded-full flex items-center justify-center flex-shrink-0">
                      <FaCheck className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-base text-gray-700 font-medium">
                      {benefit.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Правая колонка - форма */}
            <div className="bg-gray-50 rounded-xl p-6">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Поле Имя */}
                <div>
                                  <label htmlFor="modal-name" className="block text-base xs:text-lg font-medium text-gray-700 mb-2">
                  Имя
                </label>
                  <input
                    type="text"
                    id="modal-name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 xs:px-5 py-3 xs:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3895FF] focus:border-transparent transition-all duration-200 text-base xs:text-lg placeholder-gray-400 text-black"
                    placeholder="Ваше имя"
                  />
                </div>

                {/* Поле Телефон */}
                <div>
                                  <label htmlFor="modal-phone" className="block text-base xs:text-lg font-medium text-gray-700 mb-2">
                  Телефон
                </label>
                  <input
                    ref={phoneInputRef}
                    type="tel"
                    id="modal-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 xs:px-5 py-3 xs:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#3895FF] focus:border-transparent transition-all duration-200 text-base xs:text-lg placeholder-gray-400 text-black"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>

                {/* Согласие на обработку персональных данных */}
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="modal-agreement"
                    name="agreement"
                    checked={agreement}
                    onChange={handleAgreementChange}
                    required
                    className="mt-1 w-4 h-4 text-[#3895FF] bg-gray-100 border-gray-300 rounded focus:ring-[#3895FF] focus:ring-2 cursor-pointer"
                  />
                  <label htmlFor="modal-agreement" className="text-xs xs:text-sm text-gray-600 leading-relaxed select-none cursor-pointer">
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

                {/* Кнопка отправки */}
                <button
                  type="submit"
                  disabled={!agreement}
                  className={`w-full font-bold py-4 px-8 rounded-xl text-lg transition-all duration-200 shadow-lg cursor-pointer ${
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

        {/* Модальное окно политики */}
        {showPolicy && (
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/40"
            onClick={() => setShowPolicy(false)}
          >
            <div
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative animate-fade-in"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold focus:outline-none cursor-pointer"
                onClick={() => setShowPolicy(false)}
                aria-label="Закрыть"
              >
                ×
              </button>
              <h2 className="text-xl font-bold mb-4 text-gray-900">Политика обработки персональных данных</h2>
              <div className="text-gray-700 text-sm space-y-4">
                <p>Настоящим я даю согласие на обработку моих персональных данных, указанных в форме на сайте, в соответствии с Федеральным законом РФ от 27.07.2006 № 152-ФЗ «О персональных данных».</p>
                <p>Обработка персональных данных осуществляется в целях рассмотрения заявки, обратной связи и предоставления информации о продуктах и услугах компании.</p>
                <p>Согласие действует с момента отправки формы и может быть отозвано мной в любой момент по письменному обращению.</p>
                <p>Подробнее с политикой обработки персональных данных можно ознакомиться по запросу.</p>
              </div>
            </div>
          </div>
        )}

        {/* Toast уведомление */}
        {toast && (
          <div className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[70] px-6 py-4 rounded-xl shadow-xl text-white text-base font-semibold transition-all duration-300
            ${toast.type === 'success' ? 'bg-[#3895FF]' : 'bg-red-500'}`}
            style={{ minWidth: 260, maxWidth: 400 }}
          >
            {toast.message}
          </div>
        )}
      </div>
    </div>
  );
} 