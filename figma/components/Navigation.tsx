import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import { X } from 'lucide-react';
import { smoothScrollToElement, SCROLL_DURATION } from '../utils/smoothScroll';

interface NavigationProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export function Navigation({ isOpen, setIsOpen }: NavigationProps) {
  const menuItems = [
    { title: 'Главная', href: '#home' },
    { title: 'О мастерской', href: '#about' },
    { title: 'Проекты HoReCa', href: '#projects' },
    { title: 'Дом и офис', href: '#homeoffice' },
    { title: 'Мероприятия', href: '#events' },
    { title: 'Видео', href: '#video' },
    { title: 'Контакты', href: '#contacts' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleMenuClick = (href: string) => {
    setIsOpen(false);
    setTimeout(() => {
      smoothScrollToElement(href, SCROLL_DURATION);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          {/* Animated sky gradient background */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              background: 'linear-gradient(180deg, #E0F6FF 0%, #FFFFFF 30%, #F0F8FF 70%, #E0F6FF 100%)',
            }}
          >
            {/* Animated clouds effect */}
            <motion.div
              className="absolute inset-0"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'linear',
              }}
              style={{
                backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(135, 206, 235, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(135, 206, 235, 0.1) 0%, transparent 50%), radial-gradient(circle at 40% 20%, rgba(135, 206, 235, 0.2) 0%, transparent 50%)',
                backgroundSize: '200% 200%',
              }}
            />
            
            {/* Subtle color shift animation */}
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(180deg, rgba(224, 246, 255, 0.5) 0%, rgba(255, 255, 255, 0.8) 30%, rgba(240, 248, 255, 0.6) 70%, rgba(224, 246, 255, 0.5) 100%)',
                  'linear-gradient(180deg, rgba(224, 246, 255, 0.4) 0%, rgba(255, 255, 255, 0.9) 30%, rgba(240, 248, 255, 0.7) 70%, rgba(224, 246, 255, 0.4) 100%)',
                  'linear-gradient(180deg, rgba(224, 246, 255, 0.5) 0%, rgba(255, 255, 255, 0.8) 30%, rgba(240, 248, 255, 0.6) 70%, rgba(224, 246, 255, 0.5) 100%)',
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut',
              }}
            />
          </motion.div>

          {/* Menu content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="relative z-10 flex flex-col items-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col items-center gap-6">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  onClick={() => handleMenuClick(item.href)}
                  className="text-[40px] tracking-[0.8px] text-[#282828] transition-all hover:scale-110 hover:text-[#000]"
                >
                  {item.title}
                </motion.button>
              ))}
            </nav>

            {/* Close button */}
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.8 }}
              onClick={() => setIsOpen(false)}
              className="mt-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#282828] transition-transform hover:scale-110"
            >
              <X className="h-6 w-6 text-white" />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}