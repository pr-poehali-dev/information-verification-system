import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function About() {
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
              <Link to="/about" className="text-primary font-suisse">О нас</Link>
              <Link to="/contact" className="text-foreground hover:text-primary font-suisse">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold font-aktiv mb-8 text-center">
            О проекте <span className="text-primary">СРЗНО</span>
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-aktiv">
                  Наша <span className="text-primary">миссия</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed">
                  В мире, где информация стала оружием, мы создали систему защиты от манипуляций. 
                  СРЗНО помогает людям отличать факты от фейков, используя научный подход и 
                  современные технологии.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-aktiv">
                  Наша <span className="text-primary">методология</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed">
                  Мы используем пятиэтапную систему проверки, которая включает анализ независимых 
                  источников, разделение фактов от мнений, оценку социальных последствий и 
                  проверку скрытых интересов.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-aktiv">
                  Наша <span className="text-primary">команда</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed">
                  Команда экспертов в области журналистики, социологии, психологии и IT-технологий. 
                  Мы объединились, чтобы создать эффективный инструмент борьбы с дезинформацией.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-aktiv">
                  Наши <span className="text-primary">принципы</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-lg font-inter">
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Независимость и объективность
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Прозрачность методологии
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Научный подход к анализу
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" className="text-primary mr-2" size={16} />
                    Доступность для всех
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="font-suisse">
              <Link to="/methodology">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Узнать больше о методологии
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}