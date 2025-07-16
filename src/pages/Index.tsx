import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

export default function Index() {
  const verificationLevels = [
    { label: "ПРОВЕРЕНО", color: "bg-verified", textColor: "text-verified-foreground" },
    { label: "ТРЕБУЕТ УТОЧНЕНИЙ", color: "bg-warning", textColor: "text-warning-foreground" },
    { label: "МНЕНИЕ", color: "bg-opinion", textColor: "text-opinion-foreground" },
    { label: "ЛОЖНАЯ ИНФОРМАЦИЯ", color: "bg-destructive", textColor: "text-destructive-foreground" }
  ];

  const recentNews = [
    {
      id: 1,
      title: "Анализ заявлений о новых экономических мерах",
      status: "ПРОВЕРЕНО",
      reliability: 85,
      date: "16 июля 2025",
      category: "Экономика",
      sources: 5
    },
    {
      id: 2,
      title: "Проверка данных о климатических изменениях",
      status: "ТРЕБУЕТ УТОЧНЕНИЙ",
      reliability: 65,
      date: "15 июля 2025",
      category: "Экология",
      sources: 3
    },
    {
      id: 3,
      title: "Факт-чек медицинских исследований",
      status: "ПРОВЕРЕНО",
      reliability: 92,
      date: "14 июля 2025",
      category: "Здравоохранение",
      sources: 8
    }
  ];

  const getStatusBadge = (status: string) => {
    const level = verificationLevels.find(v => v.label === status);
    return level ? (
      <Badge className={`${level.color} ${level.textColor} font-inter text-xs`}>
        {status}
      </Badge>
    ) : null;
  };

  const getReliabilityColor = (reliability: number) => {
    if (reliability >= 80) return "text-verified";
    if (reliability >= 60) return "text-warning";
    return "text-destructive";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://cdn.poehali.dev/files/3154970c-7a59-444e-bc3d-25bb744b691c.png" 
                alt="СРЗНО Logo" 
                className="h-12 w-12"
              />
              <div>
                <h1 className="text-2xl font-bold font-aktiv">СРЗНО</h1>
                <p className="text-sm text-muted-foreground font-inter">
                  Система Расследований и Защиты Новостной Объективности
                </p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-primary font-suisse">Главная</Link>
              <Link to="/news" className="text-foreground hover:text-primary font-suisse">Новости</Link>
              <Link to="/methodology" className="text-foreground hover:text-primary font-suisse">Методика</Link>
              <Link to="/guides" className="text-foreground hover:text-primary font-suisse">Гайды</Link>
              <Link to="/about" className="text-foreground hover:text-primary font-suisse">О нас</Link>
              <Link to="/contact" className="text-foreground hover:text-primary font-suisse">Контакты</Link>
            </nav>
            <Button className="md:hidden">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background to-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold font-aktiv mb-6">
            Доверяйте фактам, <br />
            <span className="text-primary">не слухам</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter mb-8 max-w-2xl mx-auto">
            Мы проверяем новости, анализируем источники и предоставляем объективную оценку 
            достоверности информации в режиме реального времени
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="font-suisse">
              <Link to="/contact">
                <Icon name="Search" size={20} className="mr-2" />
                Проверить новость
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-suisse">
              <Link to="/methodology">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Как мы работаем
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Verification System */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-aktiv text-center mb-12">
            Система пометок достоверности
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verificationLevels.map((level, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-full ${level.color} flex items-center justify-center mx-auto mb-4`}>
                    <Icon 
                      name={index === 0 ? "Shield" : index === 1 ? "AlertTriangle" : index === 2 ? "MessageCircle" : "X"} 
                      size={24} 
                      className="text-white"
                    />
                  </div>
                  <CardTitle className="font-montserrat text-lg">{level.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-open-sans">
                    {index === 0 && "Информация подтверждена независимыми источниками"}
                    {index === 1 && "Частично подтверждена, требует дополнительной проверки"}
                    {index === 2 && "Субъективная оценка или мнение автора"}
                    {index === 3 && "Информация не соответствует фактам"}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Verification Process */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-montserrat text-center mb-12">
            Путь проверки новости
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: "FileText", title: "Поступление", desc: "Новость поступает в систему" },
                { icon: "Search", title: "Анализ", desc: "Проверка источников и фактов" },
                { icon: "Users", title: "Экспертиза", desc: "Оценка команды экспертов" },
                { icon: "BadgeCheck", title: "Публикация", desc: "Результат с рейтингом" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={step.icon} size={24} className="text-primary-foreground" />
                  </div>
                  <h4 className="font-montserrat font-semibold mb-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground font-open-sans">{step.desc}</p>
                  {index < 3 && (
                    <div className="hidden md:block">
                      <Icon name="ArrowRight" size={20} className="text-muted-foreground mx-auto mt-4" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Recent Verified News */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h3 className="text-3xl font-bold font-montserrat">
              Последние проверенные новости
            </h3>
            <Button variant="outline" className="font-open-sans">
              <Icon name="ArrowRight" size={20} className="mr-2" />
              Все новости
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentNews.map((news) => (
              <Card key={news.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    {getStatusBadge(news.status)}
                    <span className={`text-lg font-bold font-montserrat ${getReliabilityColor(news.reliability)}`}>
                      {news.reliability}%
                    </span>
                  </div>
                  <CardTitle className="font-montserrat text-lg line-clamp-2">
                    {news.title}
                  </CardTitle>
                  <CardDescription className="font-open-sans">
                    {news.category} • {news.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Icon name="Globe" size={16} className="mr-1" />
                      {news.sources} источников
                    </div>
                    <Button variant="ghost" size="sm" className="font-open-sans">
                      Читать подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold font-montserrat text-center mb-12">
            Статистика проверок
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { value: "15,432", label: "Проверено новостей", icon: "FileCheck" },
              { value: "92%", label: "Точность проверок", icon: "Target" },
              { value: "24/7", label: "Работаем непрерывно", icon: "Clock" },
              { value: "156", label: "Экспертов в команде", icon: "Users" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={stat.icon} size={24} className="text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold font-montserrat text-primary mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground font-open-sans">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/3154970c-7a59-444e-bc3d-25bb744b691c.png" 
                  alt="СРЗНО Logo" 
                  className="h-8 w-8"
                />
                <span className="font-bold font-montserrat">СРЗНО</span>
              </div>
              <p className="text-sm text-muted-foreground font-open-sans">
                Система Расследований и Защиты Новостной Объективности
              </p>
            </div>
            <div>
              <h4 className="font-semibold font-montserrat mb-4">Проверки</h4>
              <ul className="space-y-2 text-sm font-open-sans">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Новые проверки</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Архив</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Статистика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-montserrat mb-4">Методика</h4>
              <ul className="space-y-2 text-sm font-open-sans">
                <li><a href="#" className="text-muted-foreground hover:text-primary">Как мы работаем</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Критерии оценки</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Гайды</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold font-montserrat mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm font-open-sans">
                <li><a href="#" className="text-muted-foreground hover:text-primary">О нас</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Команда</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary">Связаться</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p className="font-open-sans">© 2025 СРЗНО. Все права защищены.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">Политика конфиденциальности</a>
              <a href="#" className="hover:text-primary">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}