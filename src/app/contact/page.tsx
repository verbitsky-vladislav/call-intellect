import ContactForm from '../../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-[#C8F131]/5 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="text-center mb-8 xs:mb-10 sm:mb-12">
          <h1 
            className="font-bold text-black mb-4 xs:mb-5 sm:mb-6"
            style={{
              fontSize: 'clamp(1.8rem, 5.5vw, 3rem)'
            }}
          >
            Оставить <span className="text-[#3895FF]">заявку</span>
          </h1>
          <p 
            className="text-gray-600 max-w-xl mx-auto"
            style={{
              fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)'
            }}
          >
            Заполните форму ниже, и мы свяжемся с вами в ближайшее время для проведения AI-аудита отдела продаж
          </p>
        </div>
        
        <ContactForm />
      </div>
    </div>
  );
} 