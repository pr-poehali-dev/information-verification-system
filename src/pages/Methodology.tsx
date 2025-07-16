import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Methodology() {
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
              <Link to="/methodology" className="text-primary font-suisse">Методика</Link>
              <Link to="/guides" className="text-foreground hover:text-primary font-suisse">Гайды</Link>
              <Link to="/about" className="text-foreground hover:text-primary font-suisse">О нас</Link>
              <Link to="/contact" className="text-foreground hover:text-primary font-suisse">Контакты</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold font-aktiv mb-8 text-center">
            Методология <span className="text-primary">СРЗНО</span>
          </h1>

          <div className="mb-12 text-center">
            <img 
              src="https://cdn.poehali.dev/files/6ef904a4-5203-461d-bcd8-4fa84530a1f8.jpg" 
              alt="Методология СРЗНО 2025"
              className="mx-auto rounded-lg border border-border max-w-full h-auto"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-aktiv flex items-center">
                  <span className="text-primary font-bold mr-2">С</span>
                  <span>Разделение</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed">
                  Анализ 3+ независимых источников. Первый этап проверки включает поиск 
                  и сравнение различных источников информации для формирования объективной картины.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-aktiv flex items-center">
                  <span className="text-primary font-bold mr-2">Р</span>
                  <span>Разделение</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed">
                  Четкое разделение фактов, мнений и гипотез. Мы отделяем проверяемые факты 
                  от субъективных оценок и предположений.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-aktiv flex items-center">
                  <span className="text-primary font-bold mr-2">З</span>
                  <span>Значение</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed">
                  Оценка социальных последствий распространения информации. Анализируем 
                  потенциальное влияние на общество и отдельные группы.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-aktiv flex items-center">
                  <span className="text-primary font-bold mr-2">Н</span>
                  <span>Непредвзятость</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed">
                  Проверка на скрытые интересы и предвзятость. Выявляем возможные мотивы 
                  и заинтересованные стороны за распространением информации.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-aktiv flex items-center">
                  <span className="text-primary font-bold mr-2">О</span>
                  <span>Открытость</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-inter leading-relaxed">
                  Публикация источников и возможность дополнений. Обеспечиваем прозрачность 
                  процесса проверки и возможность для обратной связи.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card p-8 rounded-lg border border-border">
            <h2 className="text-2xl font-bold font-aktiv mb-6 text-center">
              Принцип работы <span className="text-primary">СРЗНО</span>
            </h2>
            <p className="text-lg font-inter text-center leading-relaxed mb-6">
              "В мире, где информация — оружие, мы создали систему защиты от манипуляций."
            </p>
            <div className="text-center">
              <Button asChild size="lg" className="font-suisse">
                <Link to="/guides">
                  <Icon name="ArrowRight" size={20} className="mr-2" />
                  Перейти к гайдам
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}