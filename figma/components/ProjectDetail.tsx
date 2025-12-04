import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
const imgImage6 = "/figma/77e65ee8bee14c18399a8e359e571f19624b33cc.png";
const img202511241325471 = "/figma/49b9a026e52e18f51955454f7d4658b2b54c3385.png";
const imgImage11 = "/figma/16393cc7dc02cfbc023b4e62108786f91a7a6971.png";
import svgPaths from "../imports/svg-lzxi8za9vi";
import { LegalInfo, PrivacyPolicy, UserAgreement } from './LegalModals';

interface ProjectDetailProps {
  onClose: () => void;
}

function SocialIcons() {
  return (
    <a href="https://t.me/+ms6fdSYzjhxkYTky" target="_blank" rel="noopener noreferrer" className="absolute h-[25.599px] left-[595px] top-[189px] w-[34.076px] hover:opacity-70 transition-opacity" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 26">
        <g clipPath="url(#clip0_78_631_proj)">
          <path fillRule="evenodd" clipRule="evenodd" d="M34.0764 12.7996C34.0764 19.8686 26.4481 25.5991 17.0382 25.5991C7.62826 25.5991 0 19.8686 0 12.7996C0 5.73056 7.62826 0 17.0382 0C26.4481 0 34.0764 5.73056 34.0764 12.7996ZM17.6488 9.44919C15.9915 9.96701 12.6794 11.0388 7.71247 12.6644C6.90591 12.9054 6.4834 13.1411 6.44493 13.3716C6.37993 13.7611 7.02926 13.9145 7.91348 14.1234C8.03376 14.1518 8.15839 14.1812 8.28615 14.2124C9.15609 14.4249 10.3263 14.6734 10.9347 14.6833C11.4865 14.6922 12.1024 14.5213 12.7824 14.1705C17.4232 11.8172 19.8188 10.6277 19.9692 10.602C20.0753 10.584 20.2223 10.5612 20.322 10.6277C20.4216 10.6943 20.4118 10.8202 20.4012 10.854C20.3369 11.06 17.788 12.8402 16.469 13.7614C16.0578 14.0486 15.7661 14.2523 15.7065 14.2988C15.5729 14.4031 15.4368 14.5016 15.3059 14.5964C14.4977 15.1817 13.8917 15.6206 15.3395 16.3373C16.0353 16.6818 16.592 16.9666 17.1475 17.2508C17.754 17.5611 18.3591 17.8706 19.1419 18.2561C19.3413 18.3543 19.5318 18.4563 19.7173 18.5556C20.4232 18.9337 21.0574 19.2734 21.8409 19.2192C22.2962 19.1877 22.7665 18.8661 23.0053 17.907C23.5698 15.6401 24.6793 10.7286 24.9357 8.70473C24.9582 8.52741 24.9299 8.30048 24.9072 8.20086C24.8845 8.10124 24.8371 7.9593 24.6647 7.85423C24.4606 7.7298 24.1454 7.70356 24.0045 7.70542C23.3636 7.7139 22.3804 7.97073 17.6488 9.44919Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_78_631_proj">
            <rect width="34.0764" height="25.5991" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

function SocialIcons1() {
  return (
    <a href="https://instagram.com/burodsgn" target="_blank" rel="noopener noreferrer" className="absolute h-[25.599px] left-[648.95px] top-[189px] w-[34.076px] hover:opacity-70 transition-opacity" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 26">
        <g clipPath="url(#clip0_78_632_proj)">
          <path d="M17.0382 2.30492C21.5906 2.30492 22.1297 2.31992 23.92 2.37992C25.5839 2.43491 26.4824 2.64491 27.0814 2.8199C27.8734 3.04989 28.4458 3.32988 29.0381 3.77487C29.6371 4.22485 30.0032 4.64984 30.3093 5.24482C30.5423 5.6948 30.8218 6.37478 30.895 7.61973C30.9749 8.96969 30.9949 9.37467 30.9949 12.7896C30.9949 16.2094 30.9749 16.6144 30.895 17.9594C30.8218 19.2093 30.5423 19.8843 30.3093 20.3343C30.0032 20.9293 29.6305 21.3593 29.0381 21.8042C28.4391 22.2542 27.8734 22.5292 27.0814 22.7592C26.4824 22.9342 25.5772 23.1442 23.92 23.1992C22.123 23.2592 21.5839 23.2742 17.0382 23.2742C12.4858 23.2742 11.9467 23.2592 10.1564 23.1992C8.49247 23.1442 7.59397 22.9342 6.99497 22.7592C6.20296 22.5292 5.63059 22.2492 5.03824 21.8042C4.43925 21.3543 4.07319 20.9293 3.76704 20.3343C3.53409 19.8843 3.25456 19.2043 3.18135 17.9594C3.10148 16.6094 3.08152 16.2044 3.08152 12.7896C3.08152 9.36967 3.10148 8.96469 3.18135 7.61973C3.25456 6.36978 3.53409 5.6948 3.76704 5.24482C4.07319 4.64984 4.4459 4.21985 5.03824 3.77487C5.63724 3.32488 6.20296 3.04989 6.99497 2.8199C7.59397 2.64491 8.49913 2.43491 10.1564 2.37992C11.9467 2.31992 12.4858 2.30492 17.0382 2.30492ZM17.0382 0C12.4126 0 11.8336 0.0149995 10.0166 0.0749974C8.20628 0.134995 6.9617 0.354988 5.8835 0.669977C4.75871 0.999965 3.80697 1.43495 2.86188 2.14992C1.91014 2.8599 1.33111 3.57488 0.891842 4.41485C0.472543 5.22982 0.1797 6.15978 0.0998331 7.51974C0.0199666 8.88969 0 9.32467 0 12.7996C0 16.2744 0.0199666 16.7094 0.0998331 18.0744C0.1797 19.4343 0.472543 20.3693 0.891842 21.1793C1.33111 22.0242 1.91014 22.7392 2.86188 23.4492C3.80697 24.1592 4.75871 24.5991 5.87684 24.9241C6.9617 25.2391 8.19963 25.4591 10.0099 25.5191C11.8269 25.5791 12.4059 25.5941 17.0315 25.5941C21.6571 25.5941 22.2362 25.5791 24.0531 25.5191C25.8634 25.4591 27.108 25.2391 28.1862 24.9241C29.3043 24.5991 30.2561 24.1592 31.2012 23.4492C32.1463 22.7392 32.7319 22.0242 33.1646 21.1843C33.5839 20.3693 33.8767 19.4393 33.9566 18.0794C34.0364 16.7144 34.0564 16.2794 34.0564 12.8046C34.0564 9.32967 34.0364 8.89469 33.9566 7.52974C33.8767 6.16978 33.5839 5.23482 33.1646 4.42485C32.7453 3.57488 32.1662 2.8599 31.2145 2.14992C30.2694 1.43995 29.3177 0.999965 28.1995 0.674976C27.1147 0.359987 25.8767 0.139995 24.0664 0.0799972C22.2428 0.0149995 21.6638 0 17.0382 0Z" fill="white"/>
          <path d="M17.0382 6.22461C12.2062 6.22461 8.28613 9.16951 8.28613 12.7994C8.28613 16.4293 12.2062 19.3741 17.0382 19.3741C21.8701 19.3741 25.7902 16.4293 25.7902 12.7994C25.7902 9.16951 21.8701 6.22461 17.0382 6.22461ZM17.0382 17.0642C13.9034 17.0642 11.361 15.1543 11.361 12.7994C11.361 10.4445 13.9034 8.53453 17.0382 8.53453C20.1729 8.53453 22.7153 10.4445 22.7153 12.7994C22.7153 15.1543 20.1729 17.0642 17.0382 17.0642Z" fill="white"/>
          <path d="M28.1795 5.96464C28.1795 6.81461 27.2611 7.49958 26.1363 7.49958C25.0048 7.49958 24.093 6.80961 24.093 5.96464C24.093 5.11466 25.0115 4.42969 26.1363 4.42969C27.2611 4.42969 28.1795 5.11966 28.1795 5.96464Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_78_632_proj">
            <rect width="34.0764" height="25.5991" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

function SocialIcons2() {
  return (
    <a href="https://pinterest.com/burodsgn" target="_blank" rel="noopener noreferrer" className="absolute h-[25.599px] left-[702.91px] top-[189px] w-[34.076px] hover:opacity-70 transition-opacity" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 26">
        <g clipPath="url(#clip0_78_633_proj)">
          <path d="M17.0382 0C7.62725 0 0 5.7298 0 12.7996C0 18.2244 4.49249 22.8542 10.8286 24.7191C10.6821 23.7042 10.5424 22.1542 10.8885 21.0493C11.2013 20.0493 12.8851 14.6895 12.8851 14.6895C12.8851 14.6895 12.3727 13.9245 12.3727 12.7896C12.3727 11.0096 13.7437 9.67966 15.4542 9.67966C16.9051 9.67966 17.6106 10.4996 17.6106 11.4846C17.6106 12.5846 16.6788 14.2245 16.1996 15.7444C15.8003 17.0194 17.0515 18.0594 18.722 18.0594C21.7503 18.0594 24.0797 15.6595 24.0797 12.1996C24.0797 9.13468 21.1513 6.98976 16.965 6.98976C12.1197 6.98976 9.27117 9.71966 9.27117 12.5446C9.27117 13.6445 9.83689 14.8245 10.5424 15.4645C10.6821 15.5895 10.7021 15.7045 10.6622 15.8294C10.5357 16.2344 10.2429 17.1044 10.1896 17.2794C10.1164 17.5144 9.94338 17.5644 9.61726 17.4494C7.48748 16.7044 6.15638 14.3695 6.15638 12.4896C6.15638 8.44971 10.0632 4.74483 17.4109 4.74483C23.321 4.74483 27.9133 7.90972 27.9133 12.1396C27.9133 16.5494 24.2129 20.0993 19.0748 20.0993C17.351 20.0993 15.727 19.4243 15.168 18.6294C15.168 18.6294 14.3161 21.0743 14.1097 21.6742C13.7237 22.7842 12.6855 24.1792 11.9933 25.0291C13.5906 25.3991 15.2811 25.5991 17.0382 25.5991C26.4491 25.5991 34.0764 19.8693 34.0764 12.7996C34.0764 5.7298 26.4491 0 17.0382 0Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_78_633_proj">
            <rect width="34.0764" height="25.5991" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

function SocialIcons3() {
  return (
    <a href="https://wa.me/79282412720" target="_blank" rel="noopener noreferrer" className="absolute h-[25.599px] left-[756.86px] top-[189px] w-[34.076px] hover:opacity-70 transition-opacity" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 26">
        <path d="M0 25.5991L2.39528 19.0255C0.917222 17.1013 0.140565 14.92 0.141985 12.6833C0.146244 5.69047 7.72114 0 17.0282 0C21.5448 0.00106663 25.7845 1.32262 28.9734 3.7204C32.161 6.11819 33.9159 9.30528 33.9145 12.695C33.9102 19.6889 26.3354 25.3794 17.0282 25.3794C14.2027 25.3783 11.4184 24.8461 8.95215 23.8349L0 25.5991ZM9.36674 21.5384C11.7464 22.5997 14.0182 23.2355 17.0226 23.2365C24.7579 23.2365 31.0592 18.5071 31.0634 12.6929C31.0663 6.86696 24.7948 2.14392 17.0339 2.14179C9.29291 2.14179 2.99588 6.87123 2.99304 12.6844C2.99162 15.0576 3.91736 16.8346 5.4721 18.6937L4.05367 22.5848L9.36674 21.5384ZM25.5346 15.7104C25.4295 15.5781 25.1484 15.4992 24.7252 15.3403C24.3036 15.1813 22.2292 14.4144 21.8415 14.3088C21.4553 14.2032 21.1742 14.1499 20.8917 14.4678C20.6105 14.7846 19.8012 15.4992 19.5556 15.7104C19.3099 15.9216 19.0629 15.9482 18.6412 15.7893C18.2195 15.6304 16.8593 15.2965 15.2478 14.216C13.994 13.3755 13.1464 12.3377 12.9007 12.0198C12.6551 11.7031 12.8752 11.5313 13.0853 11.3735C13.2756 11.2316 13.507 11.0033 13.7186 10.8178C13.933 10.6343 14.0025 10.502 14.1445 10.2898C14.2851 10.0786 14.2155 9.89299 14.109 9.73406C14.0025 9.5762 13.1592 8.01572 12.8085 7.38108C12.4649 6.7635 12.117 6.84669 11.8586 6.83709L11.0493 6.82643C10.7681 6.82643 10.3109 6.90536 9.92474 7.22321C9.53854 7.54107 8.4481 8.30691 8.4481 9.86739C8.4481 11.4279 9.96024 12.935 10.1704 13.1462C10.3819 13.3574 13.145 16.5594 17.3775 17.9322C18.3842 18.2586 19.1708 18.4538 19.7828 18.5999C20.7937 18.8409 21.7137 18.8068 22.4407 18.7257C23.2514 18.6351 24.9368 17.9588 25.2889 17.2186C25.641 16.4773 25.641 15.8426 25.5346 15.7104Z" fill="white"/>
      </svg>
    </a>
  );
}

function SocialIcons4() {
  return (
    <a href="https://vk.com/burodsgn" target="_blank" rel="noopener noreferrer" className="absolute h-[25.599px] left-[810.82px] top-[189px] w-[34.076px] hover:opacity-70 transition-opacity" data-name="Social Icons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 26">
        <g clipPath="url(#clip0_78_635_proj)">
          <path fillRule="evenodd" clipRule="evenodd" d="M2.39538 1.79947C0 3.59895 0 6.49513 0 12.2876V13.3115C0 19.104 0 22.0001 2.39538 23.7996C4.79075 25.5991 8.64603 25.5991 16.3567 25.5991H17.7197C25.4303 25.5991 29.2856 25.5991 31.681 23.7996C34.0764 22.0001 34.0764 19.104 34.0764 13.3115V12.2876C34.0764 6.49513 34.0764 3.59895 31.681 1.79947C29.2856 0 25.4303 0 17.7197 0H16.3567C8.64603 0 4.79075 0 2.39538 1.79947ZM5.75047 7.78645C5.93505 14.4422 10.365 18.4421 18.1315 18.4421H18.5718V14.6342C21.4257 14.8475 23.5837 16.4155 24.4498 18.4421H28.4822C27.3748 15.4128 24.4639 13.7382 22.6465 13.0983C24.4639 12.309 27.0197 10.389 27.6302 7.78645H23.9669C23.1718 9.89837 20.8151 11.8183 18.5718 11.9996V7.78645H14.9084V15.1675C12.6367 14.7409 9.76863 12.6716 9.64084 7.78645H5.75047Z" fill="white"/>
        </g>
        <defs>
          <clipPath id="clip0_78_635_proj">
            <rect width="34.0764" height="25.5991" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    </a>
  );
}

function Social() {
  return (
    <div className="absolute contents left-[595px] top-[189px]" data-name="social">
      <SocialIcons />
      <SocialIcons1 />
      <SocialIcons2 />
      <SocialIcons3 />
      <SocialIcons4 />
    </div>
  );
}

export function ProjectDetail({ onClose }: ProjectDetailProps) {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [legalInfoOpen, setLegalInfoOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [userAgreementOpen, setUserAgreementOpen] = useState(false);
  const section1Ref = useRef<HTMLDivElement>(null);
  const section2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible1(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible2(true);
        }
      },
      { threshold: 0.3 }
    );

    if (section2Ref.current) {
      observer.observe(section2Ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
      <LegalInfo isOpen={legalInfoOpen} onClose={() => setLegalInfoOpen(false)} />
      <PrivacyPolicy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <UserAgreement isOpen={userAgreementOpen} onClose={() => setUserAgreementOpen(false)} />
      
      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-110"
      >
        <div className="relative h-6 w-6">
          <div className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
          <div className="absolute left-1/2 top-1/2 h-px w-6 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-white" />
        </div>
      </button>

      {/* Section 1 - Gallery */}
      <section ref={section1Ref} className="bg-white relative w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-[1440px]">
          {/* Title */}
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible1 ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['Unbounded:Regular',sans-serif] font-normal text-2xl sm:text-3xl lg:text-[40px] text-black text-center mb-8"
          >
            Surf Coffee X Fest
          </motion.p>

          {/* Line under title */}
          <div className="w-full h-px mb-12 lg:mb-16">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isVisible1 ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="h-full bg-black origin-center"
            />
          </div>
          
          {/* Gallery grid - responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible1 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="aspect-[3/2] rounded-[10px] overflow-hidden"
            >
              <img alt="" className="w-full h-full object-cover" src={imgImage6} />
            </motion.div>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible1 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="aspect-[3/2] rounded-[10px] overflow-hidden"
            >
              <img alt="" className="w-full h-full object-cover" src={imgImage6} />
            </motion.div>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={isVisible1 ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="aspect-[3/2] rounded-[10px] overflow-hidden sm:col-span-2 lg:col-span-1"
            >
              <img alt="" className="w-full h-full object-cover" src={imgImage6} />
            </motion.div>
          </div>

          {/* Logos - responsive */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible1 ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 lg:gap-8 mb-12 lg:mb-20"
          >
            <img alt="" className="h-[40px] sm:h-[50px] object-contain" src={img202511241325471} />
            <img alt="" className="h-[50px] sm:h-[60px] object-contain" src={imgImage11} />
            <img alt="" className="h-[40px] sm:h-[50px] object-contain" src={img202511241325471} />
          </motion.div>

          {/* Text sections - responsive grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-20 lg:gap-y-20 mb-12 lg:mb-20">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={isVisible1 ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <p className="font-['Unbounded:Regular',sans-serif] font-normal text-xl sm:text-2xl lg:text-[25px] text-black mb-4">
                Задача клиента
              </p>
              <p className="font-['Unbounded:Regular',sans-serif] font-normal text-sm text-gray-600 leading-relaxed">
                Создать современное и функциональное пространство для кофейни, которое отражает философию бренда и создает уникальную атмосферу для посетителей.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={isVisible1 ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <p className="font-['Unbounded:Regular',sans-serif] font-normal text-xl sm:text-2xl lg:text-[25px] text-black mb-4">
                Интересные моменты
              </p>
              <p className="font-['Unbounded:Regular',sans-serif] font-normal text-sm text-gray-600 leading-relaxed">
                Интеграция природных материалов с современными технологиями. Использование нестандартных цветовых решений и авторской мебели.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={isVisible1 ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
            >
              <p className="font-['Unbounded:Regular',sans-serif] font-normal text-xl sm:text-2xl lg:text-[25px] text-black mb-4">
                Решение
              </p>
              <p className="font-['Unbounded:Regular',sans-serif] font-normal text-sm text-gray-600 leading-relaxed">
                Разработали концепцию с открытой планировкой, создали зоны для работы и отдыха, использовали теплые тона дерева и акценты из металла.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={isVisible1 ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <p className="font-['Unbounded:Regular',sans-serif] font-normal text-xl sm:text-2xl lg:text-[25px] text-black mb-4">
                Результат
              </p>
              <p className="font-['Unbounded:Regular',sans-serif] font-normal text-sm text-gray-600 leading-relaxed">
                Пространство стало узнаваемым, посещаемость выросла на 40%, клиент получил положительные отзывы и планирует открытие новых локаций.
              </p>
            </motion.div>
          </div>

          {/* CTA Button - responsive */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible1 ? { x: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex justify-center"
          >
            <button className="h-[52px] w-full max-w-[365px] bg-[#141414] rounded-[10px] flex items-center justify-center hover:bg-[#282828] transition-colors px-6">
              <p className="font-['Unbounded:Regular',sans-serif] font-normal text-lg sm:text-[20px] text-[rgba(255,255,255,0.8)]">Оставьте заявку</p>
            </button>
          </motion.div>
        </div>
      </section>

      {/* Section 2 - Footer */}
      <section ref={section2Ref} className="bg-white relative w-full">
        <div className="absolute left-0 right-0 bg-[#141414] h-[293px] w-full">
          <div className="relative w-full max-w-[1440px] h-full mx-auto px-4 lg:px-0">
            <Social />
            <a href="https://www.burodigital.ru" target="_blank" rel="noopener noreferrer" className="absolute font-['Unbounded:Regular',sans-serif] font-normal h-[19px] leading-none left-[1266px] text-[0px] text-white top-[88px] w-[166px] hover:opacity-70 transition-opacity">
              <span className="text-[14px]">BURO</span>
              <span className="text-[12px]">{` digital`}</span>
            </a>
            <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal h-[19px] leading-none left-[1266px] text-[0px] text-white top-[130px] w-[150px]">
              <span className="text-[14px]">{`BURO `}</span>
              <span className="text-[12px]">dsgn</span>
            </p>
            <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal h-[20px] leading-none left-[1266px] text-[0px] text-white top-[170px] w-[159px]">
              <span className="text-[14px]">BURO</span>
              <span className="text-[12px]">{` crm`}</span>
            </p>
            
            {/* Footer links centered */}
            <div className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-none left-1/2 -translate-x-1/2 text-[12px] text-[rgba(255,255,255,0.7)] top-[236.94px] flex gap-8 items-center justify-center whitespace-nowrap">
              <button onClick={() => setLegalInfoOpen(true)} className="hover:opacity-70 transition-opacity">Юридическая информация</button>
              <button onClick={() => setUserAgreementOpen(true)} className="hover:opacity-70 transition-opacity">Пользовательское соглашение</button>
              <button onClick={() => setPrivacyOpen(true)} className="hover:opacity-70 transition-opacity">Политика конфиденциальности</button>
            </div>
            
            <div className="absolute h-0 left-[71px] top-[267px] w-[1330px]">
              <div className="absolute bottom-0 left-0 right-0 top-[-1px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1330 1">
                  <line id="Line 1" stroke="var(--stroke-0, white)" x2="1330" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
            
            <div className="absolute left-1/2 -translate-x-1/2 top-[32.62px]">
              <div className="font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] text-[12px] text-center text-white">
                <p className="mb-0">{`Режим работы:`}</p>
                <p>Пн-Пт с 9:00 до 18:00</p>
              </div>
            </div>
            
            <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] left-[224px] text-[20px] text-center text-white top-[79px] translate-x-[-50%] whitespace-nowrap">+7 (928) 241-27-20</p>
            <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] left-[231px] text-[20px] text-center text-white top-[123px] translate-x-[-50%] whitespace-nowrap">sales@burodsgn.ru</p>
            <p className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] left-1/2 -translate-x-1/2 text-[0px] text-center text-white top-[83px] whitespace-nowrap">
              <span className="text-[14px]">К</span>
              <span className="text-[12px]">раснодар, ул. Примерная, д. 10, офис 5</span>
            </p>
            
            <div className="absolute font-['Unbounded:Regular',sans-serif] font-normal leading-[normal] left-1/2 -translate-x-1/2 text-[8px] text-[rgba(255,255,255,0.7)] text-center top-[115px]">
              <p className="mb-1">{`ООО "БЮРО 23"`}</p>
              <p className="mb-1">Все права защищены</p>
              <p>@ Buro dsgn, 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}