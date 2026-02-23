import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

const projects = [
  {
    title: "Туристический стартап",
    team: "Erbium",
    category: "Стартап",
    description:
      "Платформа для туристических сервисов: поиск туров, бронирование, личный кабинет. Полный цикл — от парсинга данных до деплоя.",
    stack: ["Angular", "Node.js", "MongoDB", "Redis", "Docker", "Nginx"],
    icon: "MapPin",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
  {
    title: "Медицинская платформа",
    team: "Erbium",
    category: "Стартап",
    description:
      "Сервис для медицинской отрасли: управление данными пациентов, расписание, аналитика. Реляционная и документоориентированная БД.",
    stack: ["Angular", "FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Docker"],
    icon: "HeartPulse",
    color: "text-red-500",
    bg: "bg-red-500/10",
  },
  {
    title: "Хакатонные решения",
    team: "Erbium",
    category: "Хакатон",
    description:
      "Быстрые MVP для различных хакатонов. Проектирование архитектуры за 24–48 часов, полный стек от фронта до деплоя.",
    stack: ["Python", "FastAPI", "Angular", "Redis", "Celery", "Pytest"],
    icon: "Zap",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Веб-сервисы (коммерция)",
    team: "Фриланс",
    category: "Коммерция",
    description:
      "Разработка новых веб-сервисов под задачи клиентов: SPA-приложения, REST API, интеграции. Поддержка и автоматизация существующих систем.",
    stack: ["Angular", "Node.js", "Express.js", "MongoDB", "PostgreSQL"],
    icon: "Briefcase",
    color: "text-green-500",
    bg: "bg-green-500/10",
  },
  {
    title: "Системы с очередями задач",
    team: "Erbium / Фриланс",
    category: "Backend",
    description:
      "Асинхронная обработка задач через Celery + Redis. Парсеры данных, фоновые воркеры, уведомления.",
    stack: ["Python", "Celery", "Redis", "FastAPI", "Pytest"],
    icon: "Cpu",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
  },
  {
    title: "Парсинг и автоматизация",
    team: "Erbium",
    category: "Data",
    description:
      "Автоматический сбор и обработка данных с веб-ресурсов с помощью Python и Selenium. Пополнение БД, мониторинг изменений.",
    stack: ["Python", "Selenium", "PostgreSQL", "MongoDB"],
    icon: "Bot",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
  },
];

const categories = ["Все", "Стартап", "Хакатон", "Коммерция", "Backend", "Data"];

export default function ProjectsPage() {
  const [active, setActive] = useState("Все");
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const filtered = active === "Все" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="ArrowLeft" size={16} />
              <span className="text-sm">Назад</span>
            </Link>
            <span className="text-muted-foreground">/</span>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                <Icon name="Code2" size={12} className="text-primary-foreground" />
              </div>
              <span className="font-semibold">Проекты</span>
            </div>
          </div>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Портфолио</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Мои проекты</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Стартапы, хакатоны и коммерческие сервисы — проекты, в которых я участвовал как fullstack-разработчик
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={active === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActive(cat)}
              >
                {cat}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <Card key={project.title} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${project.bg}`}>
                      <Icon name={project.icon as "MapPin"} size={20} className={project.color} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-semibold text-base">{project.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{project.team}</p>
                    </div>
                    <Badge variant="secondary" className="text-xs flex-shrink-0">{project.category}</Badge>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <Badge key={s} variant="outline" className="text-xs">{s}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">Есть задача? Готов обсудить</p>
            <Button size="lg" asChild>
              <Link to="/#contact">Написать мне</Link>
            </Button>
          </div>
        </div>
      </main>

      <footer className="border-t py-6 px-4 text-center text-muted-foreground text-sm">
        <p>&copy; 2025 Fullstack Web Developer</p>
      </footer>
    </div>
  );
}
