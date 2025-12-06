import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import svgPaths from "../imports/svg-lzxi8za9vi";
import { LegalInfo, PrivacyPolicy, UserAgreement } from './LegalModals';

export function ResponsiveFooter() {
  const [isVisible, setIsVisible] = useState(false);
  const [legalInfoOpen, setLegalInfoOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [userAgreementOpen, setUserAgreementOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white relative w-full">
      <LegalInfo isOpen={legalInfoOpen} onClose={() => setLegalInfoOpen(false)} />
      <PrivacyPolicy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <UserAgreement isOpen={userAgreementOpen} onClose={() => setUserAgreementOpen(false)} />
      
      <div ref={sectionRef} className="relative w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="max-w-[1440px] mx-auto">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="font-['Unbounded:Regular',sans-serif] font-normal leading-tight text-2xl sm:text-3xl lg:text-[40px] text-black mb-8"
          >
            <p className="mb-0">{`Свяжитесь с нами`}</p>
            <p>{`если у Вас есть вопросы`}</p>
          </motion.div>
          
          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-[#141414] text-[rgba(255,255,255,0.8)] px-8 py-4 rounded-[10px] font-['Unbounded:Regular',sans-serif] text-lg sm:text-xl hover:bg-[#282828] transition-colors"
          >
            Оставьте заявку
          </motion.button>
        </div>
      </div>
      
      {/* Footer Section */}
      <div className="bg-[#141414] w-full py-8 sm:py-12">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <a href="https://t.me/+ms6fdSYzjhxkYTky" target="_blank" rel="noopener noreferrer" className="w-8 h-8 hover:opacity-70 transition-opacity">
              <svg className="w-full h-full" viewBox="0 0 35 26" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M34.0764 12.7996C34.0764 19.8686 26.4481 25.5991 17.0382 25.5991C7.62826 25.5991 0 19.8686 0 12.7996C0 5.73056 7.62826 0 17.0382 0C26.4481 0 34.0764 5.73056 34.0764 12.7996ZM17.6488 9.44919C15.9915 9.96701 12.6794 11.0388 7.71247 12.6644C6.90591 12.9054 6.4834 13.1411 6.44493 13.3716C6.37993 13.7611 7.02926 13.9145 7.91348 14.1234C8.03376 14.1518 8.15839 14.1812 8.28615 14.2124C9.15609 14.4249 10.3263 14.6734 10.9347 14.6833C11.4865 14.6922 12.1024 14.5213 12.7824 14.1705C17.4232 11.8172 19.8188 10.6277 19.9692 10.602C20.0753 10.584 20.2223 10.5612 20.322 10.6277C20.4216 10.6943 20.4118 10.8202 20.4012 10.854C20.3369 11.06 17.788 12.8402 16.469 13.7614C16.0578 14.0486 15.7661 14.2523 15.7065 14.2988C15.5729 14.4031 15.4368 14.5016 15.3059 14.5964C14.4977 15.1817 13.8917 15.6206 15.3395 16.3373C16.0353 16.6818 16.592 16.9666 17.1475 17.2508C17.754 17.5611 18.3591 17.8706 19.1419 18.2561C19.3413 18.3543 19.5318 18.4563 19.7173 18.5556C20.4232 18.9337 21.0574 19.2734 21.8409 19.2192C22.2962 19.1877 22.7665 18.8661 23.0053 17.907C23.5698 15.6401 24.6793 10.7286 24.9357 8.70473C24.9582 8.52741 24.9299 8.30048 24.9072 8.20086C24.8845 8.10124 24.8371 7.9593 24.6647 7.85423C24.4606 7.7298 24.1454 7.70356 24.0045 7.70542C23.3636 7.7139 22.3804 7.97073 17.6488 9.44919Z" fill="white"/>
              </svg>
            </a>
            <a href="https://instagram.com/burodsgn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 hover:opacity-70 transition-opacity">
              <svg className="w-full h-full" viewBox="0 0 35 26" fill="none">
                <path d="M17.0382 2.30492C21.5906 2.30492 22.1297 2.31992 23.92 2.37992C25.5839 2.43491 26.4824 2.64491 27.0814 2.8199C27.8734 3.04989 28.4458 3.32988 29.0381 3.77487C29.6371 4.22485 30.0032 4.64984 30.3093 5.24482C30.5423 5.6948 30.8218 6.37478 30.895 7.61973C30.9749 8.96969 30.9949 9.37467 30.9949 12.7896C30.9949 16.2094 30.9749 16.6144 30.895 17.9594C30.8218 19.2093 30.5423 19.8843 30.3093 20.3343C30.0032 20.9293 29.6305 21.3593 29.0381 21.8042C28.4391 22.2542 27.8734 22.5292 27.0814 22.7592C26.4824 22.9342 25.5772 23.1442 23.92 23.1992C22.123 23.2592 21.5839 23.2742 17.0382 23.2742C12.4858 23.2742 11.9467 23.2592 10.1564 23.1992C8.49247 23.1442 7.59397 22.9342 6.99497 22.7592C6.20296 22.5292 5.63059 22.2492 5.03824 21.8042C4.43925 21.3543 4.07319 20.9293 3.76704 20.3343C3.53409 19.8843 3.25456 19.2043 3.18135 17.9594C3.10148 16.6094 3.08152 16.2044 3.08152 12.7896C3.08152 9.36967 3.10148 8.96469 3.18135 7.61973C3.25456 6.36978 3.53409 5.6948 3.76704 5.24482C4.07319 4.64984 4.4459 4.21985 5.03824 3.77487C5.63724 3.32488 6.20296 3.04989 6.99497 2.8199C7.59397 2.64491 8.49913 2.43491 10.1564 2.37992C11.9467 2.31992 12.4858 2.30492 17.0382 2.30492ZM17.0382 0C12.4126 0 11.8336 0.0149995 10.0166 0.0749974C8.20628 0.134995 6.9617 0.354988 5.8835 0.669977C4.75871 0.999965 3.80697 1.43495 2.86188 2.14992C1.91014 2.8599 1.33111 3.57488 0.891842 4.41485C0.472543 5.22982 0.1797 6.15978 0.0998331 7.51974C0.0199666 8.88969 0 9.32467 0 12.7996C0 16.2744 0.0199666 16.7094 0.0998331 18.0744C0.1797 19.4343 0.472543 20.3693 0.891842 21.1793C1.33111 22.0242 1.91014 22.7392 2.86188 23.4492C3.80697 24.1592 4.75871 24.5991 5.87684 24.9241C6.9617 25.2391 8.19963 25.4591 10.0099 25.5191C11.8269 25.5791 12.4059 25.5941 17.0315 25.5941C21.6571 25.5941 22.2362 25.5791 24.0531 25.5191C25.8634 25.4591 27.108 25.2391 28.1862 24.9241C29.3043 24.5991 30.2561 24.1592 31.2012 23.4492C32.1463 22.7392 32.7319 22.0242 33.1646 21.1843C33.5839 20.3693 33.8767 19.4393 33.9566 18.0794C34.0364 16.7144 34.0564 16.2794 34.0564 12.8046C34.0564 9.32967 34.0364 8.89469 33.9566 7.52974C33.8767 6.16978 33.5839 5.23482 33.1646 4.42485C32.7453 3.57488 32.1662 2.8599 31.2145 2.14992C30.2694 1.43995 29.3177 0.999965 28.1995 0.674976C27.1147 0.359987 25.8767 0.139995 24.0664 0.0799972C22.2428 0.0149995 21.6638 0 17.0382 0Z" fill="white"/>
              </svg>
            </a>
            <a href="https://pinterest.com/burodsgn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 hover:opacity-70 transition-opacity">
              <svg className="w-full h-full" viewBox="0 0 35 26" fill="none">
                <path d="M17.0382 0C7.62725 0 0 5.7298 0 12.7996C0 18.2244 4.49249 22.8542 10.8286 24.7191C10.6821 23.7042 10.5424 22.1542 10.8885 21.0493C11.2013 20.0493 12.8851 14.6895 12.8851 14.6895C12.8851 14.6895 12.3727 13.9245 12.3727 12.7896C12.3727 11.0096 13.7437 9.67966 15.4542 9.67966C16.9051 9.67966 17.6106 10.4996 17.6106 11.4846C17.6106 12.5846 16.6788 14.2245 16.1996 15.7444C15.8003 17.0194 17.0515 18.0594 18.722 18.0594C21.7503 18.0594 24.0797 15.6595 24.0797 12.1996C24.0797 9.13468 21.1513 6.98976 16.965 6.98976C12.1197 6.98976 9.27117 9.71966 9.27117 12.5446C9.27117 13.6445 9.83689 14.8245 10.5424 15.4645C10.6821 15.5895 10.7021 15.7045 10.6622 15.8294C10.5357 16.2344 10.2429 17.1044 10.1896 17.2794C10.1164 17.5144 9.94338 17.5644 9.61726 17.4494C7.48748 16.7044 6.15638 14.3695 6.15638 12.4896C6.15638 8.44971 10.0632 4.74483 17.4109 4.74483C23.321 4.74483 27.9133 7.90972 27.9133 12.1396C27.9133 16.5494 24.2129 20.0993 19.0748 20.0993C17.351 20.0993 15.727 19.4243 15.168 18.6294C15.168 18.6294 14.3161 21.0743 14.1097 21.6742C13.7237 22.7842 12.6855 24.1792 11.9933 25.0291C13.5906 25.3991 15.2811 25.5991 17.0382 25.5991C26.4491 25.5991 34.0764 19.8693 34.0764 12.7996C34.0764 5.7298 26.4491 0 17.0382 0Z" fill="white"/>
              </svg>
            </a>
            <a href="https://wa.me/79282412720" target="_blank" rel="noopener noreferrer" className="w-8 h-8 hover:opacity-70 transition-opacity">
              <svg className="w-full h-full" viewBox="0 0 35 26" fill="none">
                <path d="M0 25.5991L2.39528 19.0255C0.917222 17.1013 0.140565 14.92 0.141985 12.6833C0.146244 5.69047 7.72114 0 17.0282 0C21.5448 0.00106663 25.7845 1.32262 28.9734 3.7204C32.161 6.11819 33.9159 9.30528 33.9145 12.695C33.9102 19.6889 26.3354 25.3794 17.0282 25.3794C14.2027 25.3783 11.4184 24.8461 8.95215 23.8349L0 25.5991Z" fill="white"/>
              </svg>
            </a>
            <a href="https://vk.com/burodsgn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 hover:opacity-70 transition-opacity">
              <svg className="w-full h-full" viewBox="0 0 35 26" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M2.39538 1.79947C0 3.59895 0 6.49513 0 12.2876V13.3115C0 19.104 0 22.0001 2.39538 23.7996C4.79075 25.5991 8.64603 25.5991 16.3567 25.5991H17.7197C25.4303 25.5991 29.2856 25.5991 31.681 23.7996C34.0764 22.0001 34.0764 19.104 34.0764 13.3115V12.2876C34.0764 6.49513 34.0764 3.59895 31.681 1.79947C29.2856 0 25.4303 0 17.7197 0H16.3567C8.64603 0 4.79075 0 2.39538 1.79947ZM5.75047 7.78645C5.93505 14.4422 10.365 18.4421 18.1315 18.4421H18.5718V14.6342C21.4257 14.8475 23.5837 16.4155 24.4498 18.4421H28.4822C27.3748 15.4128 24.4639 13.7382 22.6465 13.0983C24.4639 12.309 27.0197 10.389 27.6302 7.78645H23.9669C23.1718 9.89837 20.8151 11.8183 18.5718 11.9996V7.78645H14.9084V15.1675C12.6367 14.7409 9.76863 12.6716 9.64084 7.78645H5.75047Z" fill="white"/>
              </svg>
            </a>
          </div>

          {/* Company Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8 text-center">
            <a href="https://www.burodigital.ru" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-70 transition-opacity">
              <span className="text-sm">BURO</span><span className="text-xs"> digital</span>
            </a>
            <p className="text-white">
              <span className="text-sm">BURO </span><span className="text-xs">dsgn</span>
            </p>
            <p className="text-white">
              <span className="text-sm">BURO</span><span className="text-xs"> crm</span>
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-8 text-center font-['Unbounded:Regular',sans-serif] text-xs text-[rgba(255,255,255,0.7)]">
            <button onClick={() => setLegalInfoOpen(true)} className="hover:opacity-70 transition-opacity">Юридическая информация</button>
            <button onClick={() => setUserAgreementOpen(true)} className="hover:opacity-70 transition-opacity">Пользовательское соглашение</button>
            <button onClick={() => setPrivacyOpen(true)} className="hover:opacity-70 transition-opacity">Политика конфиденциальности</button>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white mb-8"></div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 text-center font-['Unbounded:Regular',sans-serif]">
            <div className="text-white">
              <p className="text-xs mb-2">Режим работы:</p>
              <p className="text-xs">Пн-Пт с 9:00 до 18:00</p>
            </div>
            <div className="text-white">
              <p className="text-lg mb-2">+7 (928) 241-27-20</p>
              <p className="text-lg">sales@burodsgn.ru</p>
            </div>
            <div className="text-white">
              <p className="text-sm">Краснодар,</p>
              <p className="text-xs">Дальний проезд 11к1 2 этаж</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center font-['Unbounded:Regular',sans-serif] text-[8px] text-[rgba(255,255,255,0.7)]">
            <p className="mb-1">ООО "БЮРО 23"</p>
            <p className="mb-1">Все права защищены</p>
            <p>@ Buro dsgn, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
