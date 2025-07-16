import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Guides() {
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
              <Link to="/guides" className="text-primary font-suisse">Гайды</Link>
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
            Гайды по <span className="text-primary">проверке фактов</span>
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-aktiv flex items-center">
                  <Icon name="Search" className="text-primary mr-3" size={24} />
                  Как проверить новость
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed mb-4">
                  Пошаговое руководство по проверке информации с использованием методологии СРЗНО.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <Icon name="CheckCircle" className="text-primary mr-2" size={16} />
                    <span className="font-inter">Поиск первоисточников</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="CheckCircle" className="text-primary mr-2" size={16} />
                    <span className="font-inter">Проверка автора и источника</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="CheckCircle" className="text-primary mr-2" size={16} />
                    <span className="font-inter">Анализ фактов и мнений</span>
                  </div>
                </div>
                <Button className="font-suisse w-full">
                  <Icon name="BookOpen" size={16} className="mr-2" />
                  Читать гайд
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-aktiv flex items-center">
                  <Icon name="Users" className="text-primary mr-3" size={24} />
                  Фейки в соцсетях
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed mb-4">
                  Специальные техники для проверки информации в социальных сетях и мессенджерах.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <Icon name="CheckCircle" className="text-primary mr-2" size={16} />
                    <span className="font-inter">Анализ вирусного контента</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="CheckCircle" className="text-primary mr-2" size={16} />
                    <span className="font-inter">Проверка изображений и видео</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="CheckCircle" className="text-primary mr-2" size={16} />
                    <span className="font-inter">Выявление ботов и троллей</span>
                  </div>
                </div>
                <Button className="font-suisse w-full">
                  <Icon name="BookOpen" size={16} className="mr-2" />
                  Читать гайд
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-aktiv flex items-center">
                  <Icon name="AlertTriangle" className="text-primary mr-3" size={24} />
                  Распознавание манипуляций
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed mb-4">
                  Как выявить манипулятивные техники и эмоциональное воздействие в информации.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <Icon name="CheckCircle" className="text-primary mr-2" size={16} />
                    <span className="font-inter">Эмоциональные призывы</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="CheckCircle" className="text-primary mr-2" size={16} />
                    <span className="font-inter">Селективная подача фактов</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="CheckCircle" className="text-primary mr-2" size={16} />
                    <span className="font-inter">Скрытые интересы</span>
                  </div>
                </div>
                <Button className="font-suisse w-full">
                  <Icon name="BookOpen" size={16} className="mr-2" />
                  Читать гайд
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-aktiv flex items-center">
                  <Icon name="Shield" className="text-primary mr-3" size={24} />
                  Защита от дезинформации
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed mb-4">
                  Практические советы по защите себя и близких от влияния дезинформации.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <Icon name="CheckCircle" className="text-primary mr-2" size={16} />
                    <span className="font-inter">Критическое мышление</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="CheckCircle" className="text-primary mr-2" size={16} />
                    <span className="font-inter">Проверка перед репостом</span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="CheckCircle" className="text-primary mr-2" size={16} />
                    <span className="font-inter">Образование и просвещение</span>
                  </div>
                </div>
                <Button className="font-suisse w-full">
                  <Icon name="BookOpen" size={16} className="mr-2" />
                  Читать гайд
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold font-aktiv mb-4 text-center">
              Нужна помощь с проверкой <span className="text-primary">конкретной информации</span>?
            </h2>
            <p className="text-lg font-inter text-center leading-relaxed mb-6">
              Отправьте нам ссылку или текст, который вы хотите проверить, и мы поможем вам разобраться.
            </p>
            <div className="text-center">
              <Button asChild size="lg" className="font-suisse">
                <Link to="/contact">
                  <Icon name="Send" size={20} className="mr-2" />
                  Связаться с нами
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}