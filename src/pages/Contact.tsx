import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold font-aktiv">
                <span className="text-primary">СРЗНО</span>
              </div>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-foreground hover:text-primary font-suisse">Главная</Link>
              <Link to="/news" className="text-foreground hover:text-primary font-suisse">Новости</Link>
              <Link to="/methodology" className="text-foreground hover:text-primary font-suisse">Методика</Link>
              <Link to="/guides" className="text-foreground hover:text-primary font-suisse">Гайды</Link>
              <Link to="/about" className="text-foreground hover:text-primary font-suisse">О нас</Link>
              <Link to="/contact" className="text-primary font-suisse">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-aktiv mb-8 text-center">
            Связаться с <span className="text-primary">СРЗНО</span>
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-aktiv">
                  Проверка <span className="text-primary">информации</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed mb-6">
                  Отправьте нам ссылку на новость или текст, который вы хотите проверить. 
                  Мы проанализируем информацию по методологии СРЗНО и предоставим детальный отчет.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Mail" className="text-primary mr-3" size={20} />
                    <span className="font-inter">check@srzno.ru</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Clock" className="text-primary mr-3" size={20} />
                    <span className="font-inter">Ответ в течение 24 часов</span>
                  </div>
                </div>
                <Button className="font-suisse w-full mt-6">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить на проверку
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-aktiv">
                  Медиа и <span className="text-primary">партнерство</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed mb-6">
                  Интересуетесь сотрудничеством? Хотите интегрировать СРЗНО в свой медиа-проект? 
                  Обращайтесь к нам для обсуждения возможностей партнерства.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Mail" className="text-primary mr-3" size={20} />
                    <span className="font-inter">partners@srzno.ru</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Phone" className="text-primary mr-3" size={20} />
                    <span className="font-inter">+7 (495) 123-45-67</span>
                  </div>
                </div>
                <Button className="font-suisse w-full mt-6">
                  <Icon name="Users" size={16} className="mr-2" />
                  Обсудить партнерство
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-aktiv">
                  Техническая <span className="text-primary">поддержка</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed mb-6">
                  Возникли проблемы с использованием платформы? Нужна помощь с интеграцией API? 
                  Наша техническая команда готова помочь.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Mail" className="text-primary mr-3" size={20} />
                    <span className="font-inter">support@srzno.ru</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MessageSquare" className="text-primary mr-3" size={20} />
                    <span className="font-inter">Чат поддержки 24/7</span>
                  </div>
                </div>
                <Button className="font-suisse w-full mt-6">
                  <Icon name="HelpCircle" size={16} className="mr-2" />
                  Получить помощь
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-aktiv">
                  Общие <span className="text-primary">вопросы</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed mb-6">
                  Хотите узнать больше о проекте, предложить идею или просто поделиться мнением? 
                  Мы всегда открыты для диалога с нашим сообществом.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon name="Mail" className="text-primary mr-3" size={20} />
                    <span className="font-inter">info@srzno.ru</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="MapPin" className="text-primary mr-3" size={20} />
                    <span className="font-inter">Москва, Россия</span>
                  </div>
                </div>
                <Button className="font-suisse w-full mt-6">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Написать нам
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold font-aktiv mb-4 text-center">
              Следите за новостями <span className="text-primary">СРЗНО</span>
            </h2>
            <p className="text-lg font-inter text-center leading-relaxed mb-6">
              Подписывайтесь на наши каналы, чтобы быть в курсе последних обновлений 
              и новостей в сфере проверки фактов.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="outline" className="font-suisse">
                <Icon name="Twitter" size={16} className="mr-2" />
                Twitter
              </Button>
              <Button variant="outline" className="font-suisse">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                Telegram
              </Button>
              <Button variant="outline" className="font-suisse">
                <Icon name="Mail" size={16} className="mr-2" />
                Newsletter
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}