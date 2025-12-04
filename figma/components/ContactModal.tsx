import { X, Send, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const handleTelegram = () => {
    window.open('https://t.me/burodsgn', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/79282412720', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:sales@burodsgn.ru?subject=Заявка с сайта';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[500px] bg-white rounded-[20px] p-8 z-50 shadow-2xl"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-gray-400 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            {/* Title */}
            <h2 className="font-['Unbounded:Regular',sans-serif] text-2xl sm:text-3xl text-black mb-2">
              Оставьте заявку
            </h2>
            <p className="font-['Unbounded:Regular',sans-serif] text-sm text-gray-600 mb-8">
              Выберите удобный способ связи
            </p>

            {/* Contact options */}
            <div className="space-y-4">
              {/* Telegram */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleTelegram}
                className="w-full bg-[#0088cc] hover:bg-[#0077b3] text-white rounded-[15px] p-5 flex items-center gap-4 transition-all shadow-lg hover:shadow-xl group"
              >
                <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-all">
                  <Send size={24} />
                </div>
                <div className="text-left flex-1">
                  <p className="font-['Unbounded:Regular',sans-serif] text-lg">Telegram</p>
                  <p className="text-sm opacity-90">Быстрый ответ в мессенджере</p>
                </div>
              </motion.button>

              {/* WhatsApp */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleWhatsApp}
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-[15px] p-5 flex items-center gap-4 transition-all shadow-lg hover:shadow-xl group"
              >
                <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-all">
                  <Phone size={24} />
                </div>
                <div className="text-left flex-1">
                  <p className="font-['Unbounded:Regular',sans-serif] text-lg">WhatsApp</p>
                  <p className="text-sm opacity-90">+7 (928) 241-27-20</p>
                </div>
              </motion.button>

              {/* Email */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleEmail}
                className="w-full bg-[#141414] hover:bg-[#2a2a2a] text-white rounded-[15px] p-5 flex items-center gap-4 transition-all shadow-lg hover:shadow-xl group"
              >
                <div className="bg-white/20 p-3 rounded-full group-hover:bg-white/30 transition-all">
                  <Mail size={24} />
                </div>
                <div className="text-left flex-1">
                  <p className="font-['Unbounded:Regular',sans-serif] text-lg">Email</p>
                  <p className="text-sm opacity-90">sales@burodsgn.ru</p>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
