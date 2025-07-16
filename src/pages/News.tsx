import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function News() {
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
              <Link to="/news" className="text-primary font-suisse">Новости</Link>
              <Link to="/methodology" className="text-foreground hover:text-primary font-suisse">Методика</Link>
              <Link to="/guides" className="text-foreground hover:text-primary font-suisse">Гайды</Link>
              <Link to="/about" className="text-foreground hover:text-primary font-suisse">О нас</Link>
              <Link to="/contact" className="text-foreground hover:text-primary font-suisse">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-aktiv mb-8 text-center">
            Новости <span className="text-primary">СРЗНО</span>
          </h1>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-aktiv">
                    Запуск новой версии платформы <span className="text-primary">СРЗНО</span>
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">15 июля 2025</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed mb-4">
                  Мы рады представить обновленную версию платформы СРЗНО с улучшенным алгоритмом 
                  проверки фактов и новым интерфейсом. Теперь процесс верификации стал еще быстрее 
                  и точнее.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-suisse">
                    Обновление
                  </span>
                  <Button variant="outline" size="sm" className="font-suisse">
                    <Icon name="ArrowRight" size={16} className="mr-1" />
                    Читать далее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-aktiv">
                    Новая методология проверки <span className="text-primary">социальных сетей</span>
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">10 июля 2025</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed mb-4">
                  Разработан специальный алгоритм для анализа информации в социальных сетях, 
                  который учитывает специфику распространения контента в мессенджерах и соцсетях.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-suisse">
                    Методология
                  </span>
                  <Button variant="outline" size="sm" className="font-suisse">
                    <Icon name="ArrowRight" size={16} className="mr-1" />
                    Читать далее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-aktiv">
                    Партнерство с <span className="text-primary">ведущими медиа</span>
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">5 июля 2025</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed mb-4">
                  СРЗНО заключило партнерские соглашения с крупными медиа-холдингами для 
                  интеграции системы проверки фактов в их редакционные процессы.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-suisse">
                    Партнерство
                  </span>
                  <Button variant="outline" size="sm" className="font-suisse">
                    <Icon name="ArrowRight" size={16} className="mr-1" />
                    Читать далее
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-aktiv">
                    Образовательная программа <span className="text-primary">"Медиаграмотность"</span>
                  </CardTitle>
                  <span className="text-sm text-muted-foreground">1 июля 2025</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed mb-4">
                  Запущена бесплатная образовательная программа для школьников и студентов, 
                  направленная на развитие навыков критического мышления и медиаграмотности.
                </p>
                <div className="flex items-center space-x-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-suisse">
                    Образование
                  </span>
                  <Button variant="outline" size="sm" className="font-suisse">
                    <Icon name="ArrowRight" size={16} className="mr-1" />
                    Читать далее
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="font-suisse">
              <Link to="/">
                <Icon name="Home" size={20} className="mr-2" />
                Вернуться на главную
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}