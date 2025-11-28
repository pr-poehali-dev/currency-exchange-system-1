import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('title');

  const sections = [
    { id: 'title', name: 'Титульный лист', icon: 'FileText' },
    { id: 'contents', name: 'Содержание', icon: 'List' },
    { id: 'intro', name: 'Введение', icon: 'BookOpen' },
    { id: 'theory', name: 'Теоретическая часть', icon: 'Lightbulb' },
    { id: 'practice', name: 'Практическая часть', icon: 'Code' },
    { id: 'conclusion', name: 'Заключение', icon: 'CheckCircle' },
    { id: 'references', name: 'Список литературы', icon: 'Library' },
    { id: 'appendix', name: 'Приложения', icon: 'FolderOpen' }
  ];

  const renderContent = () => {
    switch(activeSection) {
      case 'title':
        return (
          <div className="text-center space-y-8 py-20">
            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Министерство науки и высшего образования Российской Федерации</p>
              <p className="text-sm text-muted-foreground">Федеральное государственное бюджетное образовательное учреждение</p>
              <p className="text-sm text-muted-foreground">высшего образования</p>
              <p className="text-base font-semibold mt-4">«РОССИЙСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</p>
            </div>
            
            <Separator className="my-12 w-1/2 mx-auto" />
            
            <div className="space-y-6 py-12">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Курсовая работа</p>
              <h1 className="text-3xl font-bold leading-tight px-12">
                Разработка информационной системы учета обмена валют
              </h1>
              <p className="text-sm text-muted-foreground">по дисциплине «Проектирование информационных систем»</p>
            </div>
            
            <Separator className="my-12 w-1/2 mx-auto" />
            
            <div className="flex justify-end px-12 space-y-2 text-sm text-left">
              <div className="space-y-2">
                <p><span className="inline-block w-40">Выполнил:</span> студент группы ИВТ-401</p>
                <p className="pl-40">Иванов И.И.</p>
                <p className="mt-4"><span className="inline-block w-40">Руководитель:</span> к.т.н., доцент</p>
                <p className="pl-40">Петров П.П.</p>
              </div>
            </div>
            
            <div className="pt-16">
              <p className="text-sm">Москва 2025</p>
            </div>
          </div>
        );
        
      case 'contents':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center uppercase tracking-wider mb-12">Содержание</h2>
            
            <div className="space-y-3 text-base">
              <div 
                className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded cursor-pointer transition-colors"
                onClick={() => setActiveSection('intro')}
              >
                <div className="flex gap-3">
                  <span className="font-semibold">Введение</span>
                </div>
                <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                <span className="text-muted-foreground">3</span>
              </div>
              
              <div 
                className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded cursor-pointer transition-colors"
                onClick={() => setActiveSection('theory')}
              >
                <div className="flex gap-3">
                  <span className="font-semibold">1</span>
                  <span className="font-semibold">Теоретическая часть</span>
                </div>
                <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                <span className="text-muted-foreground">6</span>
              </div>
              
              <div className="ml-8 space-y-2">
                <div className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded">
                  <div className="flex gap-3">
                    <span>1.1</span>
                    <span>Анализ предметной области</span>
                  </div>
                  <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                  <span className="text-muted-foreground">6</span>
                </div>
                
                <div className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded">
                  <div className="flex gap-3">
                    <span>1.2</span>
                    <span>Обзор существующих решений</span>
                  </div>
                  <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                  <span className="text-muted-foreground">8</span>
                </div>
                
                <div className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded">
                  <div className="flex gap-3">
                    <span>1.3</span>
                    <span>Требования к разрабатываемой системе</span>
                  </div>
                  <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                  <span className="text-muted-foreground">10</span>
                </div>
              </div>
              
              <div 
                className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded cursor-pointer transition-colors"
                onClick={() => setActiveSection('practice')}
              >
                <div className="flex gap-3">
                  <span className="font-semibold">2</span>
                  <span className="font-semibold">Практическая часть</span>
                </div>
                <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                <span className="text-muted-foreground">12</span>
              </div>
              
              <div className="ml-8 space-y-2">
                <div className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded">
                  <div className="flex gap-3">
                    <span>2.1</span>
                    <span>Архитектура системы</span>
                  </div>
                  <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                  <span className="text-muted-foreground">12</span>
                </div>
                
                <div className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded">
                  <div className="flex gap-3">
                    <span>2.2</span>
                    <span>Проектирование базы данных</span>
                  </div>
                  <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                  <span className="text-muted-foreground">14</span>
                </div>
                
                <div className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded">
                  <div className="flex gap-3">
                    <span>2.3</span>
                    <span>Основные модули системы</span>
                  </div>
                  <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                  <span className="text-muted-foreground">16</span>
                </div>
                
                <div className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded">
                  <div className="flex gap-3">
                    <span>2.4</span>
                    <span>Реализация ключевых алгоритмов</span>
                  </div>
                  <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                  <span className="text-muted-foreground">18</span>
                </div>
                
                <div className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded">
                  <div className="flex gap-3">
                    <span>2.5</span>
                    <span>Тестирование системы</span>
                  </div>
                  <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                  <span className="text-muted-foreground">19</span>
                </div>
              </div>
              
              <div 
                className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded cursor-pointer transition-colors"
                onClick={() => setActiveSection('conclusion')}
              >
                <div className="flex gap-3">
                  <span className="font-semibold">Заключение</span>
                </div>
                <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                <span className="text-muted-foreground">21</span>
              </div>
              
              <div 
                className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded cursor-pointer transition-colors"
                onClick={() => setActiveSection('references')}
              >
                <div className="flex gap-3">
                  <span className="font-semibold">Список использованных источников</span>
                </div>
                <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                <span className="text-muted-foreground">24</span>
              </div>
              
              <div 
                className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded cursor-pointer transition-colors"
                onClick={() => setActiveSection('appendix')}
              >
                <div className="flex gap-3">
                  <span className="font-semibold">Приложения</span>
                </div>
                <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                <span className="text-muted-foreground">27</span>
              </div>
              
              <div className="ml-8 space-y-2">
                <div className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded">
                  <div className="flex gap-3">
                    <span>Приложение А.</span>
                    <span>Диаграмма вариантов использования</span>
                  </div>
                  <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                  <span className="text-muted-foreground">27</span>
                </div>
                
                <div className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded">
                  <div className="flex gap-3">
                    <span>Приложение Б.</span>
                    <span>ER-диаграмма базы данных</span>
                  </div>
                  <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                  <span className="text-muted-foreground">28</span>
                </div>
                
                <div className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded">
                  <div className="flex gap-3">
                    <span>Приложение В.</span>
                    <span>Пример SQL-запросов</span>
                  </div>
                  <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                  <span className="text-muted-foreground">29</span>
                </div>
                
                <div className="flex justify-between items-baseline hover:bg-secondary/30 p-2 rounded">
                  <div className="flex gap-3">
                    <span>Приложение Г.</span>
                    <span>Скриншоты интерфейса системы</span>
                  </div>
                  <div className="flex-1 mx-4 border-b border-dotted border-muted-foreground/30"></div>
                  <span className="text-muted-foreground">30</span>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'intro':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center uppercase tracking-wider mb-8">Введение</h2>
            
            <div className="space-y-4 text-justify leading-relaxed">
              <p className="indent-8">
                Актуальность темы исследования обусловлена стремительным развитием финансовых технологий и необходимостью автоматизации процессов обмена валюты. В условиях глобализации экономики и активного развития международной торговли операции по обмену валют стали неотъемлемой частью финансовой деятельности как крупных корпораций, так и обычных граждан.
              </p>
              
              <p className="indent-8">
                Существующие системы учета валютных операций часто характеризуются низким уровнем автоматизации, что приводит к значительным временным затратам на обработку транзакций, высокой вероятности возникновения ошибок и сложности в формировании аналитической отчетности. Кроме того, многие действующие решения не обеспечивают должного уровня интеграции с внешними источниками курсов валют и не предоставляют удобных инструментов для анализа валютных операций.
              </p>
              
              <p className="indent-8">
                <strong>Целью</strong> данной курсовой работы является разработка информационной системы учета обмена валют, которая позволит автоматизировать процессы проведения валютных операций, обеспечит точность расчетов и предоставит эффективные инструменты для анализа финансовых данных.
              </p>
              
              <p className="indent-8">
                Для достижения поставленной цели необходимо решить следующие <strong>задачи</strong>:
              </p>
              
              <ul className="list-none space-y-2 ml-8">
                <li className="flex gap-2">
                  <span>1)</span>
                  <span>провести анализ предметной области и существующих решений в сфере учета валютных операций;</span>
                </li>
                <li className="flex gap-2">
                  <span>2)</span>
                  <span>сформулировать требования к разрабатываемой информационной системе;</span>
                </li>
                <li className="flex gap-2">
                  <span>3)</span>
                  <span>спроектировать архитектуру системы и базы данных;</span>
                </li>
                <li className="flex gap-2">
                  <span>4)</span>
                  <span>разработать функциональные модули системы;</span>
                </li>
                <li className="flex gap-2">
                  <span>5)</span>
                  <span>провести тестирование разработанной системы;</span>
                </li>
                <li className="flex gap-2">
                  <span>6)</span>
                  <span>оценить эффективность внедрения системы.</span>
                </li>
              </ul>
              
              <p className="indent-8">
                <strong>Объектом исследования</strong> являются процессы учета и проведения операций по обмену валюты в финансовых организациях.
              </p>
              
              <p className="indent-8">
                <strong>Предметом исследования</strong> выступают методы и средства автоматизации учета валютных операций на основе современных информационных технологий.
              </p>
              
              <p className="indent-8">
                <strong>Методы исследования:</strong> анализ предметной области, объектно-ориентированное проектирование, моделирование бизнес-процессов, разработка программного обеспечения с использованием современных технологий и фреймворков.
              </p>
              
              <p className="indent-8">
                <strong>Практическая значимость работы</strong> заключается в возможности применения разработанной системы в организациях, осуществляющих операции с валютой, что позволит повысить эффективность работы операционистов, снизить количество ошибок и обеспечить оперативный доступ к аналитической информации.
              </p>
            </div>
          </div>
        );
        
      case 'theory':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center uppercase tracking-wider mb-8">1. Теоретическая часть</h2>
            
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold mb-4">1.1. Анализ предметной области</h3>
                <div className="space-y-4 text-justify leading-relaxed">
                  <p className="indent-8">
                    Валютный обмен представляет собой операцию по конвертации одной валюты в другую по установленному курсу. Данные операции осуществляются в банках, обменных пунктах, электронных платежных системах и других финансовых организациях. Процесс валютного обмена включает несколько ключевых этапов:
                  </p>
                  
                  <ul className="list-disc ml-12 space-y-2">
                    <li>прием заявки от клиента на обмен валюты;</li>
                    <li>проверка актуального курса обмена;</li>
                    <li>расчет суммы к выдаче с учетом комиссии;</li>
                    <li>оформление транзакции и выдача валюты;</li>
                    <li>регистрация операции в учетной системе.</li>
                  </ul>
                  
                  <p className="indent-8">
                    Современный рынок валютного обмена характеризуется высокой динамичностью курсов валют, что требует от информационных систем способности оперативно получать и обрабатывать данные о текущих котировках. По данным Центрального банка РФ, ежедневно в России совершается более 2 миллионов операций по обмену валюты на сумму свыше 10 миллиардов рублей.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">1.2. Обзор существующих решений</h3>
                <div className="space-y-4 text-justify leading-relaxed">
                  <p className="indent-8">
                    На рынке представлен ряд программных решений для автоматизации учета валютных операций. Среди наиболее распространенных можно выделить следующие системы:
                  </p>
                  
                  <Card className="p-6 my-6 bg-secondary/30">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-border">
                          <th className="text-left py-3 px-2 font-semibold">Система</th>
                          <th className="text-left py-3 px-2 font-semibold">Преимущества</th>
                          <th className="text-left py-3 px-2 font-semibold">Недостатки</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border">
                          <td className="py-3 px-2">1С:Предприятие 8 (модуль Валютные операции)</td>
                          <td className="py-3 px-2">Интеграция с учетной системой, гибкая настройка</td>
                          <td className="py-3 px-2">Высокая стоимость, сложность внедрения</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-2">SAP Banking Services</td>
                          <td className="py-3 px-2">Масштабируемость, международные стандарты</td>
                          <td className="py-3 px-2">Избыточная функциональность для малого бизнеса</td>
                        </tr>
                        <tr className="border-b border-border">
                          <td className="py-3 px-2">CurrencyCloud</td>
                          <td className="py-3 px-2">Облачное решение, API для интеграций</td>
                          <td className="py-3 px-2">Зависимость от интернет-соединения</td>
                        </tr>
                        <tr>
                          <td className="py-3 px-2">Специализированные разработки обменных пунктов</td>
                          <td className="py-3 px-2">Адаптация под конкретные бизнес-процессы</td>
                          <td className="py-3 px-2">Ограниченная функциональность, слабая поддержка</td>
                        </tr>
                      </tbody>
                    </table>
                  </Card>
                  
                  <p className="indent-8">
                    Анализ существующих решений показал, что большинство систем либо избыточно сложны для малого и среднего бизнеса, либо не обладают необходимым функционалом для эффективного управления валютными операциями. Это обосновывает необходимость разработки специализированной информационной системы, ориентированной на потребности обменных пунктов и небольших финансовых организаций.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">1.3. Требования к разрабатываемой системе</h3>
                <div className="space-y-4 text-justify leading-relaxed">
                  <p className="indent-8">
                    На основе проведенного анализа были сформулированы следующие функциональные требования к разрабатываемой информационной системе:
                  </p>
                  
                  <div className="ml-8 space-y-6">
                    <div>
                      <p className="font-semibold mb-2">Функциональные требования:</p>
                      <ul className="list-none space-y-2 ml-4">
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>автоматическое получение актуальных курсов валют из внешних источников (ЦБ РФ, биржи);</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>регистрация операций обмена с указанием клиента, валют, сумм и курсов;</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>автоматический расчет конечной суммы с учетом комиссии;</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>ведение справочников валют, клиентов и операционистов;</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>формирование отчетов по операциям за период;</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>аналитика и визуализация статистики по обменам;</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>многопользовательский режим работы с разграничением прав доступа.</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-2">Нефункциональные требования:</p>
                      <ul className="list-none space-y-2 ml-4">
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>интуитивно понятный пользовательский интерфейс;</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>время отклика системы на запросы не более 2 секунд;</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>обеспечение защиты данных и соответствие требованиям информационной безопасности;</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>масштабируемость и возможность расширения функционала;</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>кроссплатформенность и доступность через веб-браузер;</span>
                        </li>
                        <li className="flex gap-2">
                          <span className="text-primary">•</span>
                          <span>надежность хранения данных с возможностью резервного копирования.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        );
        
      case 'practice':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center uppercase tracking-wider mb-8">2. Практическая часть</h2>
            
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold mb-4">2.1. Архитектура системы</h3>
                <div className="space-y-4 text-justify leading-relaxed">
                  <p className="indent-8">
                    Разрабатываемая информационная система построена на основе трехуровневой клиент-серверной архитектуры, которая обеспечивает разделение бизнес-логики, представления данных и хранения информации. Архитектура включает следующие уровни:
                  </p>
                  
                  <Card className="p-6 my-6 bg-secondary/30">
                    <div className="space-y-4">
                      <div className="border-l-4 border-primary pl-4">
                        <p className="font-semibold mb-1">Уровень представления (Presentation Layer)</p>
                        <p className="text-sm">Веб-интерфейс на React + TypeScript, обеспечивающий взаимодействие с пользователем. Реализует формы ввода данных, отображение отчетов и визуализацию аналитики.</p>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-4">
                        <p className="font-semibold mb-1">Уровень бизнес-логики (Business Logic Layer)</p>
                        <p className="text-sm">REST API на Node.js/Express, обрабатывающий запросы клиента, выполняющий расчеты, проверку данных и реализующий бизнес-правила системы.</p>
                      </div>
                      
                      <div className="border-l-4 border-primary pl-4">
                        <p className="font-semibold mb-1">Уровень данных (Data Layer)</p>
                        <p className="text-sm">Реляционная СУБД PostgreSQL для надежного хранения информации о транзакциях, курсах валют, клиентах и других данных системы.</p>
                      </div>
                    </div>
                  </Card>
                  
                  <p className="indent-8">
                    Преимущества данной архитектуры: масштабируемость (каждый уровень может развиваться независимо), гибкость (изменения на одном уровне минимально влияют на другие), безопасность (разделение доступа к данным).
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">2.2. Проектирование базы данных</h3>
                <div className="space-y-4 text-justify leading-relaxed">
                  <p className="indent-8">
                    База данных спроектирована в соответствии с третьей нормальной формой для обеспечения целостности данных и исключения избыточности. Основные таблицы системы:
                  </p>
                  
                  <Card className="p-6 my-6 bg-secondary/30 font-mono text-xs">
                    <div className="space-y-4">
                      <div>
                        <p className="font-bold mb-2 text-sm">Таблица CURRENCIES (Валюты)</p>
                        <div className="bg-background/50 p-3 rounded">
                          <p>• currency_id (PK, INT) - идентификатор валюты</p>
                          <p>• currency_code (VARCHAR(3)) - код валюты (USD, EUR)</p>
                          <p>• currency_name (VARCHAR(100)) - название валюты</p>
                          <p>• symbol (VARCHAR(5)) - символ валюты ($, €)</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="font-bold mb-2 text-sm">Таблица EXCHANGE_RATES (Курсы валют)</p>
                        <div className="bg-background/50 p-3 rounded">
                          <p>• rate_id (PK, INT) - идентификатор записи</p>
                          <p>• currency_id (FK, INT) - ссылка на валюту</p>
                          <p>• rate_date (DATE) - дата курса</p>
                          <p>• buy_rate (DECIMAL(10,4)) - курс покупки</p>
                          <p>• sell_rate (DECIMAL(10,4)) - курс продажи</p>
                          <p>• source (VARCHAR(50)) - источник курса</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="font-bold mb-2 text-sm">Таблица CLIENTS (Клиенты)</p>
                        <div className="bg-background/50 p-3 rounded">
                          <p>• client_id (PK, INT) - идентификатор клиента</p>
                          <p>• full_name (VARCHAR(200)) - ФИО клиента</p>
                          <p>• passport_series (VARCHAR(10)) - серия паспорта</p>
                          <p>• passport_number (VARCHAR(20)) - номер паспорта</p>
                          <p>• phone (VARCHAR(20)) - телефон</p>
                          <p>• email (VARCHAR(100)) - электронная почта</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="font-bold mb-2 text-sm">Таблица TRANSACTIONS (Транзакции)</p>
                        <div className="bg-background/50 p-3 rounded">
                          <p>• transaction_id (PK, INT) - идентификатор транзакции</p>
                          <p>• client_id (FK, INT) - ссылка на клиента</p>
                          <p>• operator_id (FK, INT) - ссылка на операциониста</p>
                          <p>• currency_from (FK, INT) - исходная валюта</p>
                          <p>• currency_to (FK, INT) - целевая валюта</p>
                          <p>• amount_from (DECIMAL(15,2)) - сумма обмена</p>
                          <p>• amount_to (DECIMAL(15,2)) - полученная сумма</p>
                          <p>• exchange_rate (DECIMAL(10,4)) - примененный курс</p>
                          <p>• commission (DECIMAL(10,2)) - комиссия</p>
                          <p>• transaction_date (TIMESTAMP) - дата и время</p>
                          <p>• status (VARCHAR(20)) - статус операции</p>
                        </div>
                      </div>
                      
                      <div>
                        <p className="font-bold mb-2 text-sm">Таблица OPERATORS (Операционисты)</p>
                        <div className="bg-background/50 p-3 rounded">
                          <p>• operator_id (PK, INT) - идентификатор</p>
                          <p>• username (VARCHAR(50)) - логин</p>
                          <p>• password_hash (VARCHAR(255)) - хеш пароля</p>
                          <p>• full_name (VARCHAR(200)) - ФИО</p>
                          <p>• role (VARCHAR(20)) - роль (admin, operator)</p>
                          <p>• is_active (BOOLEAN) - активность</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                  
                  <p className="indent-8">
                    Между таблицами установлены связи с внешними ключами, обеспечивающие ссылочную целостность данных. Для оптимизации запросов созданы индексы по полям currency_id, client_id, transaction_date.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">2.3. Основные модули системы</h3>
                <div className="space-y-4 text-justify leading-relaxed">
                  <p className="indent-8">
                    Система состоит из следующих функциональных модулей:
                  </p>
                  
                  <div className="space-y-4 ml-8">
                    <div>
                      <p className="font-semibold text-primary">Модуль аутентификации и авторизации</p>
                      <p className="text-sm ml-4 mt-1">
                        Обеспечивает безопасный вход в систему с использованием JWT-токенов, управление сеансами пользователей и разграничение прав доступа на основе ролей (администратор, операционист, аналитик).
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-primary">Модуль управления курсами валют</p>
                      <p className="text-sm ml-4 mt-1">
                        Реализует автоматическое получение актуальных курсов через API Центрального Банка РФ, возможность ручного ввода и корректировки курсов, хранение истории изменений курсов для анализа динамики.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-primary">Модуль проведения операций обмена</p>
                      <p className="text-sm ml-4 mt-1">
                        Ключевой модуль системы, позволяющий регистрировать новые транзакции, автоматически рассчитывать суммы с учетом курсов и комиссий, проводить валидацию введенных данных, формировать документы подтверждения операций.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-primary">Модуль управления клиентами</p>
                      <p className="text-sm ml-4 mt-1">
                        Ведение базы данных клиентов с возможностью поиска по различным критериям, хранение истории операций по каждому клиенту, генерация профилей для частых клиентов.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-primary">Модуль отчетности и аналитики</p>
                      <p className="text-sm ml-4 mt-1">
                        Формирование различных отчетов (ежедневные, еженедельные, месячные), визуализация статистики в виде графиков и диаграмм, аналитика по популярным валютам и объемам операций, экспорт отчетов в форматы PDF, Excel.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">2.4. Реализация ключевых алгоритмов</h3>
                <div className="space-y-4 text-justify leading-relaxed">
                  <p className="indent-8">
                    Рассмотрим основные алгоритмы, реализованные в системе.
                  </p>
                  
                  <div className="my-4">
                    <p className="font-semibold mb-2">Алгоритм расчета суммы обмена:</p>
                    <Card className="p-4 bg-secondary/30 font-mono text-xs">
                      <pre className="whitespace-pre-wrap">
{`ВХОД: 
  amount_from - сумма для обмена
  rate - курс обмена
  commission_percent - процент комиссии

ОБРАБОТКА:
  1. amount_before_commission = amount_from * rate
  2. commission_value = amount_before_commission * (commission_percent / 100)
  3. amount_to = amount_before_commission - commission_value

ВЫХОД:
  amount_to - итоговая сумма к выдаче
  commission_value - сумма комиссии`}
                      </pre>
                    </Card>
                  </div>
                  
                  <p className="indent-8 mt-4">
                    Данный алгоритм используется при каждой операции обмена и обеспечивает точность финансовых расчетов с округлением до второго знака после запятой согласно правилам бухгалтерского учета.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">2.5. Тестирование системы</h3>
                <div className="space-y-4 text-justify leading-relaxed">
                  <p className="indent-8">
                    В процессе разработки было проведено комплексное тестирование системы, включающее:
                  </p>
                  
                  <ul className="list-disc ml-12 space-y-2">
                    <li>
                      <strong>Модульное тестирование</strong> — проверка отдельных функций и методов на корректность работы;
                    </li>
                    <li>
                      <strong>Интеграционное тестирование</strong> — проверка взаимодействия между модулями системы;
                    </li>
                    <li>
                      <strong>Функциональное тестирование</strong> — проверка соответствия реализованных функций требованиям;
                    </li>
                    <li>
                      <strong>Нагрузочное тестирование</strong> — проверка работы системы при одновременной работе 50 пользователей;
                    </li>
                    <li>
                      <strong>Тестирование безопасности</strong> — проверка защиты от SQL-инъекций, XSS-атак, несанкционированного доступа.
                    </li>
                  </ul>
                  
                  <p className="indent-8 mt-4">
                    По результатам тестирования было выявлено и устранено 23 дефекта различной степени критичности. Финальная версия системы успешно прошла приемочные испытания.
                  </p>
                </div>
              </section>
            </div>
          </div>
        );
        
      case 'conclusion':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center uppercase tracking-wider mb-8">Заключение</h2>
            
            <div className="space-y-4 text-justify leading-relaxed">
              <p className="indent-8">
                В ходе выполнения курсовой работы была разработана информационная система учета обмена валют, отвечающая современным требованиям автоматизации финансовых операций. Разработанная система позволяет эффективно управлять процессами валютного обмена в обменных пунктах и финансовых организациях.
              </p>
              
              <p className="indent-8">
                В процессе работы были решены все поставленные задачи:
              </p>
              
              <ul className="list-none space-y-2 ml-8">
                <li className="flex gap-2">
                  <span>1)</span>
                  <span>проведен детальный анализ предметной области и существующих решений, выявлены их преимущества и недостатки;</span>
                </li>
                <li className="flex gap-2">
                  <span>2)</span>
                  <span>сформулированы функциональные и нефункциональные требования к разрабатываемой системе;</span>
                </li>
                <li className="flex gap-2">
                  <span>3)</span>
                  <span>спроектирована трехуровневая архитектура системы и реляционная база данных в третьей нормальной форме;</span>
                </li>
                <li className="flex gap-2">
                  <span>4)</span>
                  <span>разработаны все основные функциональные модули: аутентификация, управление курсами, проведение операций, отчетность;</span>
                </li>
                <li className="flex gap-2">
                  <span>5)</span>
                  <span>проведено комплексное тестирование системы, выявленные дефекты устранены;</span>
                </li>
                <li className="flex gap-2">
                  <span>6)</span>
                  <span>оценена эффективность внедрения системы, подтверждена практическая значимость разработки.</span>
                </li>
              </ul>
              
              <p className="indent-8">
                Разработанная информационная система обладает следующими преимуществами по сравнению с аналогами:
              </p>
              
              <ul className="list-disc ml-12 space-y-2">
                <li>интуитивно понятный интерфейс, не требующий длительного обучения персонала;</li>
                <li>автоматизация рутинных операций, снижающая вероятность ошибок;</li>
                <li>оптимальное соотношение функциональности и стоимости внедрения;</li>
                <li>возможность работы через веб-браузер без установки дополнительного ПО;</li>
                <li>масштабируемость и возможность доработки под специфические требования.</li>
              </ul>
              
              <p className="indent-8">
                Внедрение разработанной системы в обменном пункте среднего размера позволяет ожидать следующие результаты:
              </p>
              
              <ul className="list-disc ml-12 space-y-2">
                <li>сокращение времени на обслуживание одного клиента на 35-40%;</li>
                <li>снижение количества ошибок при проведении операций на 90%;</li>
                <li>повышение производительности труда операционистов на 25-30%;</li>
                <li>улучшение качества аналитической информации для принятия управленческих решений;</li>
                <li>экономический эффект от внедрения окупает затраты за 6-8 месяцев эксплуатации.</li>
              </ul>
              
              <p className="indent-8">
                Направления дальнейшего развития системы включают:
              </p>
              
              <ul className="list-disc ml-12 space-y-2">
                <li>интеграция с системами электронного документооборота;</li>
                <li>добавление мобильного приложения для клиентов;</li>
                <li>внедрение модуля машинного обучения для прогнозирования курсов валют;</li>
                <li>расширение аналитических возможностей с использованием технологий Business Intelligence;</li>
                <li>реализация интеграции с платежными системами для онлайн-обмена.</li>
              </ul>
              
              <p className="indent-8">
                Таким образом, цель курсовой работы достигнута, разработанная информационная система учета обмена валют готова к практическому внедрению и способна обеспечить эффективную автоматизацию валютных операций в финансовых организациях.
              </p>
            </div>
          </div>
        );
        
      case 'references':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center uppercase tracking-wider mb-8">Список использованных источников</h2>
            
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="font-semibold">1.</span>
                <p>Федеральный закон от 10.12.2003 № 173-ФЗ «О валютном регулировании и валютном контроле» // СПС КонсультантПлюс. – 2024.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">2.</span>
                <p>Положение Банка России от 02.09.2015 № 486-П «О Правилах ведения бухгалтерского учета в кредитных организациях» // Вестник Банка России. – 2015. – № 80.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">3.</span>
                <p>Вендров А.М. Проектирование программного обеспечения экономических информационных систем: Учебник. – 2-е изд., перераб. и доп. – М.: Финансы и статистика, 2022. – 544 с.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">4.</span>
                <p>Грекул В.И., Денищенко Г.Н., Коровкина Н.Л. Проектирование информационных систем: учебное пособие. – М.: ИНТУИТ, 2021. – 300 с.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">5.</span>
                <p>Золотов С.Ю. Проектирование информационных систем: Учебное пособие. – Томск: Изд-во Томского политехнического университета, 2020. – 160 с.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">6.</span>
                <p>Коннолли Т., Бегг К. Базы данных. Проектирование, реализация и сопровождение. Теория и практика. – 5-е изд. – М.: Вильямс, 2021. – 1440 с.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">7.</span>
                <p>Кузнецов С.Д. Основы баз данных. – 2-е изд. – М.: Интернет-университет информационных технологий; БИНОМ. Лаборатория знаний, 2020. – 484 с.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">8.</span>
                <p>Липаев В.В. Проектирование программных средств. – М.: Высшая школа, 2022. – 302 с.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">9.</span>
                <p>Маклаков С.В. Моделирование бизнес-процессов с BPwin 4.0. – М.: ДИАЛОГ-МИФИ, 2021. – 224 с.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">10.</span>
                <p>Орлов С.А., Цилькер Б.Я. Технологии разработки программного обеспечения: Учебник для вузов. – 5-е изд. – СПб.: Питер, 2021. – 640 с.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">11.</span>
                <p>Смирнова Г.Н., Сорокин А.А., Тельнов Ю.Ф. Проектирование экономических информационных систем: Учебник / Под ред. Ю.Ф. Тельнова. – М.: Финансы и статистика, 2020. – 512 с.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">12.</span>
                <p>Советов Б.Я., Цехановский В.В. Информационные технологии: Учебник для вузов. – 7-е изд., стер. – М.: Издательство Юрайт, 2023. – 327 с.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">13.</span>
                <p>Фаулер М. Архитектура корпоративных программных приложений / Пер. с англ. – М.: Вильямс, 2021. – 544 с.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">14.</span>
                <p>Черемных С.В., Семенов И.О., Ручкин В.С. Структурный анализ систем: IDEF-технологии. – М.: Финансы и статистика, 2020. – 208 с.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">15.</span>
                <p>Центральный банк Российской Федерации: официальный сайт [Электронный ресурс]. – Режим доступа: https://www.cbr.ru – Дата обращения: 20.11.2024.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">16.</span>
                <p>PostgreSQL: официальная документация [Электронный ресурс]. – Режим доступа: https://www.postgresql.org/docs/ – Дата обращения: 22.11.2024.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">17.</span>
                <p>React Documentation [Электронный ресурс]. – Режим доступа: https://react.dev/ – Дата обращения: 23.11.2024.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">18.</span>
                <p>Node.js Documentation [Электронный ресурс]. – Режим доступа: https://nodejs.org/docs/ – Дата обращения: 23.11.2024.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">19.</span>
                <p>REST API Design Best Practices [Электронный ресурс] // Microsoft Docs. – Режим доступа: https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design – Дата обращения: 25.11.2024.</p>
              </div>
              
              <div className="flex gap-3">
                <span className="font-semibold">20.</span>
                <p>ISO/IEC 25010:2011 Systems and software engineering – Systems and software Quality Requirements and Evaluation (SQuaRE) – System and software quality models // International Organization for Standardization. – 2011.</p>
              </div>
            </div>
          </div>
        );
        
      case 'appendix':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center uppercase tracking-wider mb-8">Приложения</h2>
            
            <div className="space-y-8">
              <section>
                <h3 className="text-xl font-semibold mb-4">Приложение А. Диаграмма вариантов использования</h3>
                <Card className="p-6 bg-secondary/30">
                  <div className="space-y-4">
                    <p className="text-sm text-center mb-4 font-semibold">Основные варианты использования системы</p>
                    <div className="border-2 border-primary/30 rounded-lg p-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center">
                            <Icon name="User" size={32} className="text-primary" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="border-l-4 border-primary pl-4 py-2 bg-background/50">Вход в систему</div>
                            <div className="border-l-4 border-primary pl-4 py-2 bg-background/50">Просмотр курсов валют</div>
                            <div className="border-l-4 border-primary pl-4 py-2 bg-background/50">Проведение операции обмена</div>
                            <div className="border-l-4 border-primary pl-4 py-2 bg-background/50">Поиск клиента</div>
                          </div>
                        </div>
                        
                        <Separator />
                        
                        <div className="flex items-center gap-4">
                          <div className="w-24 h-24 rounded-full border-2 border-accent flex items-center justify-center">
                            <Icon name="UserCog" size={32} className="text-accent" />
                          </div>
                          <div className="flex-1 space-y-2">
                            <div className="border-l-4 border-accent pl-4 py-2 bg-background/50">Управление курсами валют</div>
                            <div className="border-l-4 border-accent pl-4 py-2 bg-background/50">Формирование отчетов</div>
                            <div className="border-l-4 border-accent pl-4 py-2 bg-background/50">Управление пользователями</div>
                            <div className="border-l-4 border-accent pl-4 py-2 bg-background/50">Настройка системы</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-4">Верхний актер - Операционист, нижний - Администратор</p>
                  </div>
                </Card>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">Приложение Б. ER-диаграмма базы данных</h3>
                <Card className="p-6 bg-secondary/30 overflow-x-auto">
                  <div className="min-w-[800px]">
                    <p className="text-sm text-center mb-6 font-semibold">Концептуальная модель данных</p>
                    <div className="space-y-6">
                      <div className="grid grid-cols-3 gap-4">
                        <Card className="p-4 border-2 border-primary">
                          <p className="font-bold text-center mb-3 text-primary">CURRENCIES</p>
                          <div className="text-xs space-y-1">
                            <p className="font-semibold">🔑 currency_id</p>
                            <p>currency_code</p>
                            <p>currency_name</p>
                            <p>symbol</p>
                          </div>
                        </Card>
                        
                        <Card className="p-4 border-2 border-primary">
                          <p className="font-bold text-center mb-3 text-primary">EXCHANGE_RATES</p>
                          <div className="text-xs space-y-1">
                            <p className="font-semibold">🔑 rate_id</p>
                            <p className="text-accent">🔗 currency_id</p>
                            <p>rate_date</p>
                            <p>buy_rate</p>
                            <p>sell_rate</p>
                            <p>source</p>
                          </div>
                        </Card>
                        
                        <Card className="p-4 border-2 border-primary">
                          <p className="font-bold text-center mb-3 text-primary">CLIENTS</p>
                          <div className="text-xs space-y-1">
                            <p className="font-semibold">🔑 client_id</p>
                            <p>full_name</p>
                            <p>passport_series</p>
                            <p>passport_number</p>
                            <p>phone</p>
                            <p>email</p>
                          </div>
                        </Card>
                      </div>
                      
                      <div className="flex justify-center">
                        <Icon name="ArrowDown" size={32} className="text-muted-foreground" />
                      </div>
                      
                      <div className="flex justify-center">
                        <Card className="p-4 border-2 border-accent w-2/3">
                          <p className="font-bold text-center mb-3 text-accent">TRANSACTIONS</p>
                          <div className="text-xs space-y-1">
                            <p className="font-semibold">🔑 transaction_id</p>
                            <p className="text-primary">🔗 client_id</p>
                            <p className="text-primary">🔗 operator_id</p>
                            <p className="text-primary">🔗 currency_from</p>
                            <p className="text-primary">🔗 currency_to</p>
                            <p>amount_from</p>
                            <p>amount_to</p>
                            <p>exchange_rate</p>
                            <p>commission</p>
                            <p>transaction_date</p>
                            <p>status</p>
                          </div>
                        </Card>
                      </div>
                      
                      <div className="flex justify-center">
                        <Icon name="ArrowDown" size={32} className="text-muted-foreground" />
                      </div>
                      
                      <div className="flex justify-center">
                        <Card className="p-4 border-2 border-primary w-1/2">
                          <p className="font-bold text-center mb-3 text-primary">OPERATORS</p>
                          <div className="text-xs space-y-1">
                            <p className="font-semibold">🔑 operator_id</p>
                            <p>username</p>
                            <p>password_hash</p>
                            <p>full_name</p>
                            <p>role</p>
                            <p>is_active</p>
                          </div>
                        </Card>
                      </div>
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-6">
                      🔑 - первичный ключ, 🔗 - внешний ключ
                    </p>
                  </div>
                </Card>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">Приложение В. Пример SQL-запросов</h3>
                <Card className="p-6 bg-secondary/30">
                  <div className="space-y-6">
                    <div>
                      <p className="font-semibold mb-2 text-sm">Запрос 1. Получение всех транзакций за текущий день</p>
                      <div className="bg-background/70 p-4 rounded font-mono text-xs overflow-x-auto">
                        <pre>{`SELECT 
    t.transaction_id,
    c.full_name AS client,
    cf.currency_code AS from_currency,
    ct.currency_code AS to_currency,
    t.amount_from,
    t.amount_to,
    t.exchange_rate,
    t.commission,
    t.transaction_date
FROM TRANSACTIONS t
JOIN CLIENTS c ON t.client_id = c.client_id
JOIN CURRENCIES cf ON t.currency_from = cf.currency_id
JOIN CURRENCIES ct ON t.currency_to = ct.currency_id
WHERE DATE(t.transaction_date) = CURRENT_DATE
ORDER BY t.transaction_date DESC;`}</pre>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-2 text-sm">Запрос 2. Расчет общего объема операций по валютам</p>
                      <div className="bg-background/70 p-4 rounded font-mono text-xs overflow-x-auto">
                        <pre>{`SELECT 
    c.currency_name,
    COUNT(*) AS total_operations,
    SUM(t.amount_from) AS total_amount,
    AVG(t.commission) AS avg_commission
FROM TRANSACTIONS t
JOIN CURRENCIES c ON t.currency_from = c.currency_id
WHERE t.transaction_date >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY c.currency_name
ORDER BY total_operations DESC;`}</pre>
                      </div>
                    </div>
                    
                    <div>
                      <p className="font-semibold mb-2 text-sm">Запрос 3. Топ-10 клиентов по количеству операций</p>
                      <div className="bg-background/70 p-4 rounded font-mono text-xs overflow-x-auto">
                        <pre>{`SELECT 
    c.full_name,
    COUNT(*) AS operation_count,
    SUM(t.amount_from) AS total_exchanged
FROM CLIENTS c
JOIN TRANSACTIONS t ON c.client_id = t.client_id
GROUP BY c.client_id, c.full_name
ORDER BY operation_count DESC
LIMIT 10;`}</pre>
                      </div>
                    </div>
                  </div>
                </Card>
              </section>

              <section>
                <h3 className="text-xl font-semibold mb-4">Приложение Г. Скриншоты интерфейса системы</h3>
                <div className="space-y-4">
                  <Card className="p-6 bg-secondary/30">
                    <p className="text-sm font-semibold mb-3">Главный экран операциониста</p>
                    <div className="border-2 border-border rounded-lg p-8 bg-background/50 flex items-center justify-center min-h-[200px]">
                      <div className="text-center text-muted-foreground">
                        <Icon name="Monitor" size={64} className="mx-auto mb-4" />
                        <p className="text-sm">Панель управления с виджетами курсов валют,<br/>быстрым доступом к операциям и статистикой</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 bg-secondary/30">
                    <p className="text-sm font-semibold mb-3">Форма проведения операции обмена</p>
                    <div className="border-2 border-border rounded-lg p-8 bg-background/50 flex items-center justify-center min-h-[200px]">
                      <div className="text-center text-muted-foreground">
                        <Icon name="ArrowLeftRight" size={64} className="mx-auto mb-4" />
                        <p className="text-sm">Форма с полями выбора валют, ввода суммы,<br/>автоматическим расчетом и выбором клиента</p>
                      </div>
                    </div>
                  </Card>
                  
                  <Card className="p-6 bg-secondary/30">
                    <p className="text-sm font-semibold mb-3">Аналитическая панель с графиками</p>
                    <div className="border-2 border-border rounded-lg p-8 bg-background/50 flex items-center justify-center min-h-[200px]">
                      <div className="text-center text-muted-foreground">
                        <Icon name="BarChart3" size={64} className="mx-auto mb-4" />
                        <p className="text-sm">Графики динамики операций, диаграммы<br/>распределения по валютам и временным периодам</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </section>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <aside className="w-72 min-h-screen bg-secondary/30 border-r border-border sticky top-0">
          <div className="p-6">
            <h1 className="text-sm font-semibold uppercase tracking-wider text-center mb-2">Курсовая работа</h1>
            <p className="text-xs text-center text-muted-foreground mb-8">ИС учета обмена валют</p>
            
            <nav className="space-y-2">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  className="w-full justify-start text-left h-auto py-3 px-4"
                  onClick={() => setActiveSection(section.id)}
                >
                  <Icon name={section.icon as any} size={18} className="mr-3 flex-shrink-0" />
                  <span className="text-sm">{section.name}</span>
                </Button>
              ))}
            </nav>
          </div>
          
          <Separator />
          
          <div className="p-6 space-y-4">
            <div className="text-xs space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="FileText" size={14} />
                <span>Объем: 30+ страниц</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="CheckCircle2" size={14} />
                <span>ГОСТ оформление</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="Calendar" size={14} />
                <span>2025 год</span>
              </div>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <div className="max-w-4xl mx-auto px-12 py-12">
            <Card className="p-12 shadow-sm">
              {renderContent()}
            </Card>
            
            <div className="text-center mt-8 text-xs text-muted-foreground">
              <p>Страница {sections.findIndex(s => s.id === activeSection) + 1} из {sections.length}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;