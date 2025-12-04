import { motion, AnimatePresence } from 'motion/react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl max-h-[80vh] overflow-y-auto bg-white rounded-lg shadow-xl"
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-2xl font-['Unbounded:Regular',sans-serif]">{title}</h2>
              <button
                onClick={onClose}
                className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <div className="relative h-4 w-4">
                  <div className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-black" />
                  <div className="absolute left-1/2 top-1/2 h-px w-4 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-black" />
                </div>
              </button>
            </div>
            <div className="px-6 py-6 font-['Unbounded:Regular',sans-serif] text-sm leading-relaxed">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function LegalInfo({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Юридическая информация">
      <div className="space-y-4">
        <p><strong>Полное наименование:</strong> Общество с ограниченной ответственностью "БЮРО 23"</p>
        <p><strong>Сокращенное наименование:</strong> ООО "БЮРО 23"</p>
        <p><strong>ИНН:</strong> 2308000000</p>
        <p><strong>ОГРН:</strong> 1232300000000</p>
        <p><strong>КПП:</strong> 230801001</p>
        
        <div className="pt-4">
          <p><strong>Юридический адрес:</strong></p>
          <p>350000, Краснодарский край, г. Краснодар, ул. Дальний проезд, д. 11, корп. 1, эт. 2</p>
        </div>
        
        <div className="pt-4">
          <p><strong>Фактический адрес:</strong></p>
          <p>350000, Краснодарский край, г. Краснодар, ул. Дальний проезд, д. 11, корп. 1, эт. 2</p>
        </div>
        
        <div className="pt-4">
          <p><strong>Контактная информация:</strong></p>
          <p>Телефон: +7 (928) 241-27-20</p>
          <p>Email: sales@burodsgn.ru</p>
        </div>
        
        <div className="pt-4">
          <p><strong>Режим работы:</strong></p>
          <p>Понедельник - Воскресенье: с 10:00 до 18:00</p>
        </div>
      </div>
    </Modal>
  );
}

export function PrivacyPolicy({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Политика конфиденциальности">
      <div className="space-y-4">
        <p>Настоящая Политика конфиденциальности персональных данных (далее – Политика конфиденциальности) действует в отношении всей информации, которую ООО "БЮРО 23" может получить о Пользователе во время использования сайта burodsgn.ru.</p>
        
        <div className="pt-4">
          <h3 className="font-medium text-base mb-2">1. Определения</h3>
          <p><strong>1.1.</strong> Персональные данные – любая информация, относящаяся к прямо или косвенно определенному или определяемому физическому лицу (субъекту персональных данных).</p>
          <p><strong>1.2.</strong> Оператор – ООО "БЮРО 23", которое самостоятельно или совместно с другими лицами организует и/или осуществляет обработку персональных данных.</p>
        </div>
        
        <div className="pt-4">
          <h3 className="font-medium text-base mb-2">2. Собираемая информация</h3>
          <p><strong>2.1.</strong> В рамках настоящей Политики под «персональной информацией Пользователя» понимаются:</p>
          <p>• Персональная информация, которую Пользователь предоставляет о себе самостоятельно при оформлении заявки, включая имя, контактный телефон и адрес электронной почты.</p>
          <p>• Данные, которые автоматически передаются в процессе их использования с помощью установленного на устройстве Пользователя программного обеспечения, в том числе IP-адрес, информация из cookie, информация о браузере пользователя.</p>
        </div>
        
        <div className="pt-4">
          <h3 className="font-medium text-base mb-2">3. Цели обработки персональной информации</h3>
          <p><strong>3.1.</strong> Оператор обрабатывает персональную информацию Пользователя в целях:</p>
          <p>• Идентификации Пользователя;</p>
          <p>• Связи с Пользователем, включая направление уведомлений, запросов и информации, касающихся использования Сервисов, оказания услуг;</p>
          <p>• Улучшения качества Сервисов, удобства их использования, разработка новых Сервисов;</p>
          <p>• Проведения статистических и иных исследований.</p>
        </div>
        
        <div className="pt-4">
          <h3 className="font-medium text-base mb-2">4. Защита персональной информации</h3>
          <p><strong>4.1.</strong> Оператор принимает необходимые организационные и технические меры для защиты персональной информации Пользователя от неправомерного или случайного доступа, уничтожения, изменения, блокирования, копирования, распространения, а также от иных неправомерных действий третьих лиц.</p>
        </div>
        
        <div className="pt-4">
          <h3 className="font-medium text-base mb-2">5. Изменение Политики к��нфиденциальности</h3>
          <p><strong>5.1.</strong> Оператор имеет право вносить изменения в настоящую Политику конфиденциальности. При внесении изменений в заголовке Политики указывается дата последнего обновления.</p>
        </div>
        
        <div className="pt-4">
          <p className="text-xs text-gray-500">Дата последнего обновления: 25.11.2025</p>
        </div>
      </div>
    </Modal>
  );
}

export function UserAgreement({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Пользовательское соглашение">
      <div className="space-y-4">
        <p>Настоящее Пользовательское соглашение (далее – Соглашение) регулирует отношения между ООО "БЮРО 23" (далее – Компания) и пользователем сайта burodsgn.ru (далее – Пользователь).</p>
        
        <div className="pt-4">
          <h3 className="font-medium text-base mb-2">1. Общие положения</h3>
          <p><strong>1.1.</strong> Использование материалов и сервисов Сайта регулируется нормами действующего законодательства Российской Федерации.</p>
          <p><strong>1.2.</strong> Настоящее Соглашение является публичной офертой. Получая доступ к Сайту, Пользователь считается присоединившимся к настоящему Соглашению.</p>
          <p><strong>1.3.</strong> Администрация Сайта вправе в любое время в одностороннем порядке изменять условия настоящего Соглашения без какого-либо специального уведомления.</p>
        </div>
        
        <div className="pt-4">
          <h3 className="font-medium text-base mb-2">2. Права и обязанности сторон</h3>
          <p><strong>2.1.</strong> Пользователь имеет право:</p>
          <p>• Получать информацию на Сайте;</p>
          <p>• Использовать информацию Сайта в личных некоммерческих целях;</p>
          <p>• Оставлять заявки на оказание услуг.</p>
          
          <p className="pt-2"><strong>2.2.</strong> Пользователь обязуется:</p>
          <p>• Предоставлять по запросу Компании достоверную информацию;</p>
          <p>• Не распространять информацию, которая направлена на пропаганду войны, разжигание национальной, расовой или религиозной ненависти;</p>
          <p>• Соблюдать иные требования настоящего Соглашения.</p>
        </div>
        
        <div className="pt-4">
          <h3 className="font-medium text-base mb-2">3. Услуги Компании</h3>
          <p><strong>3.1.</strong> Компания предоставляет услуги по проектированию и изготовлению мебели для HoReCa, офиса и дома.</p>
          <p><strong>3.2.</strong> Условия оказания услуг, стоимость и сроки согласовываются индивидуально с каждым клиентом.</p>
          <p><strong>3.3.</strong> Для получения услуг Пользователь может оставить заявку на Сайте или связаться с Компанией по указанным контактам.</p>
        </div>
        
        <div className="pt-4">
          <h3 className="font-medium text-base mb-2">4. Ответственность</h3>
          <p><strong>4.1.</strong> Компания не несет ответственности за посещение и использование Пользователем внешних ресурсов, ссылки на которые могут содержаться на Сайте.</p>
          <p><strong>4.2.</strong> Компания не несет ответственности за убытки, понесенные Пользователем в результате ошибочного понимания или непонимания информации, представленной на Сайте.</p>
        </div>
        
        <div className="pt-4">
          <h3 className="font-medium text-base mb-2">5. Разрешение споров</h3>
          <p><strong>5.1.</strong> В случае возникновения споров между Пользователем и Компанией, они должны быть разрешены путем переговоров.</p>
          <p><strong>5.2.</strong> При невозможности разрешения спора путем переговоров, спор подлежит разрешению в судебном порядке в соответствии с действующим законодательством РФ.</p>
        </div>
        
        <div className="pt-4">
          <p className="text-xs text-gray-500">Дата последнего обновления: 25.11.2025</p>
        </div>
      </div>
    </Modal>
  );
}
