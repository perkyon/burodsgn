import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика конфиденциальности Buro DSGN.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24">
      <div className="mx-auto w-full max-w-[900px]">
        <h1 className="font-unbounded t-h2-sm text-black mb-6">
          Политика конфиденциальности
        </h1>
        <p className="font-unbounded t-body-sm text-black/60 mb-8">
          Дата обновления: 19.01.2026
        </p>

        <div className="flex flex-col gap-6 font-unbounded t-body-sm text-black/70">
          <p>
            Настоящая Политика конфиденциальности определяет порядок обработки и защиты
            персональных данных пользователей сайта Buro DSGN (далее — «Сайт»).
          </p>

          <section className="flex flex-col gap-3">
            <h2 className="t-subtitle-sm text-black">1. Оператор персональных данных</h2>
            <p>
              Оператор: Buro DSGN. Контакты: sales@burodsgn.ru, +7 (918) 123-45-67,
              г. Краснодар, ул. Дальняя 8к1.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="t-subtitle-sm text-black">2. Какие данные мы собираем</h2>
            <p>2.1. Данные, которые вы предоставляете добровольно:</p>
            <ul className="list-disc pl-5">
              <li>контактные данные (имя, телефон, email, мессенджер);</li>
              <li>содержание обращения и дополнительные сведения о проекте.</li>
            </ul>
            <p>
              2.2. Технические данные: IP-адрес, сведения о браузере, cookies и данные
              об использовании Сайта (в рамках стандартной аналитики).
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="t-subtitle-sm text-black">3. Цели обработки</h2>
            <ul className="list-disc pl-5">
              <li>обработка заявок и обратная связь;</li>
              <li>подготовка коммерческих предложений и расчетов;</li>
              <li>улучшение качества сервиса и работы Сайта;</li>
              <li>соблюдение требований законодательства.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="t-subtitle-sm text-black">4. Правовые основания</h2>
            <p>
              Обработка осуществляется на основании согласия пользователя и необходимости
              исполнения запроса пользователя.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="t-subtitle-sm text-black">5. Передача третьим лицам</h2>
            <p>
              Мы не передаем персональные данные третьим лицам, за исключением случаев,
              предусмотренных законом, либо если это необходимо для исполнения запроса
              пользователя (например, сервисы связи).
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="t-subtitle-sm text-black">6. Сроки хранения</h2>
            <p>
              Персональные данные хранятся не дольше, чем это необходимо для целей
              обработки, либо до отзыва согласия.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="t-subtitle-sm text-black">7. Cookies и аналитика</h2>
            <p>
              Сайт может использовать cookies для корректной работы и аналитики.
              Вы можете отключить cookies в настройках браузера.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="t-subtitle-sm text-black">8. Права пользователя</h2>
            <ul className="list-disc pl-5">
              <li>получать информацию об обработке своих данных;</li>
              <li>требовать уточнения, блокирования или удаления данных;</li>
              <li>отозвать согласие на обработку данных.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="t-subtitle-sm text-black">9. Контакты</h2>
            <p>
              По вопросам обработки персональных данных обращайтесь:
              sales@burodsgn.ru, +7 (918) 123-45-67.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
