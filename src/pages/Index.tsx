import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import { Loader2, Send, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { toast } = useToast();

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Сообщение отправлено!",
      description: "Спасибо за обращение. Отвечу в течение 24 часов.",
    });
    setIsSubmitting(false);
    (event.target as HTMLFormElement).reset();
  };

  const meanStack = [
    { name: "MongoDB", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
    { name: "Express.js", color: "bg-gray-500/10 text-gray-600 dark:text-gray-300" },
    { name: "Angular", color: "bg-red-500/10 text-red-600 dark:text-red-400" },
    { name: "Node.js", color: "bg-green-500/10 text-green-600 dark:text-green-400" },
  ];

  const skillsIntermediate = [
    "HTML", "JavaScript", "CSS", "TypeScript", "ООП",
    "PostgreSQL", "Python", "Node.js", "Angular", "FastAPI",
    "SQL", "REST", "ORM", "SQLAlchemy", "MongoDB", "Express.js", "Redis",
  ];

  const skillsBasic = [
    "Git", "C#", "C++", ".NET Framework", "Docker",
    "Linux", "Celery", "Nginx", "Pytest",
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Code2" size={16} className="text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">Fullstack Developer</span>
          </div>
          <div className="flex items-center gap-3">
            <nav className="hidden md:flex gap-5 text-sm text-muted-foreground">
              <a href="#services" className="hover:text-foreground transition-colors">Услуги</a>
              <a href="#skills" className="hover:text-foreground transition-colors">Навыки</a>
              <a href="#experience" className="hover:text-foreground transition-colors">Опыт</a>
              <Link to="/projects" className="hover:text-foreground transition-colors">Проекты</Link>
              <Link to="/achievements" className="hover:text-foreground transition-colors">Достижения</Link>
              <a href="#contact" className="hover:text-foreground transition-colors">Контакт</a>
            </nav>
            <Button variant="outline" size="icon" onClick={toggleTheme}>
              {isDark ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6 text-sm px-4 py-1">
            ✦ Открыт для новых проектов
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent leading-tight">
            Fullstack Web Developer
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Разрабатываю полноценные веб-приложения — от Angular-интерфейса до серверной логики на Node.js, Python и FastAPI.
          </p>

          {/* MEAN Stack pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            <span className="text-sm text-muted-foreground self-center font-medium">MEAN стек:</span>
            {meanStack.map((t) => (
              <span key={t.name} className={`px-4 py-1.5 rounded-full text-sm font-semibold border border-transparent ${t.color}`}>
                {t.name}
              </span>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mb-10">+ Redis · PostgreSQL · Python · FastAPI · Docker</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button size="lg" className="text-base px-8" asChild>
              <a href="#contact">Обсудить проект</a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8" asChild>
              <Link to="/projects">Мои проекты</Link>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Github" size={24} />
            </a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Send" size={24} />
            </a>
            <a href="mailto:dev@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Icon name="Linkedin" size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Что я делаю</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный цикл разработки — от идеи до продакшена
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Monitor" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Frontend разработка</h3>
                <p className="text-muted-foreground mb-4">
                  Современные SPA на Angular + TypeScript. Адаптивная вёрстка, высокая производительность, чистый код.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Angular</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">RxJS</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Server" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Backend и API</h3>
                <p className="text-muted-foreground mb-4">
                  REST API на Node.js / Express и Python / FastAPI. Автоматизация процессов, очереди задач через Celery + Redis.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">FastAPI</Badge>
                  <Badge variant="secondary">Python</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Database" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Базы данных и деплой</h3>
                <p className="text-muted-foreground mb-4">
                  Проектирование схем БД (реляционных и NoSQL), кэширование Redis, развёртывание на VPS через Docker + Nginx.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Docker</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Навыки</h2>
          </div>
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Средний уровень</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsIntermediate.map((s) => (
                  <Badge key={s} variant="secondary" className="text-sm px-3 py-1">{s}</Badge>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                <span className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Базовый уровень</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsBasic.map((s) => (
                  <Badge key={s} variant="outline" className="text-sm px-3 py-1">{s}</Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Опыт</h2>
          </div>
          <div className="space-y-6">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">Коммерческая разработка</h3>
                    <p className="text-muted-foreground text-sm mt-1">Fullstack Web Developer · Фриланс</p>
                  </div>
                  <Badge variant="secondary">1.5 года</Badge>
                </div>
                <ul className="text-muted-foreground space-y-1.5 text-sm leading-relaxed list-disc list-inside">
                  <li>Разработка новых веб-сервисов с нуля</li>
                  <li>Поддержка и развитие существующих приложений</li>
                  <li>Автоматизация бизнес-процессов</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Angular</Badge>
                  <Badge variant="outline">Node.js</Badge>
                  <Badge variant="outline">PostgreSQL</Badge>
                  <Badge variant="outline">MongoDB</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-semibold">Студенческая команда Erbium</h3>
                    <p className="text-muted-foreground text-sm mt-1">Fullstack разработчик · Стартапы и хакатоны</p>
                  </div>
                  <Badge variant="secondary">2 г. 5 мес.</Badge>
                </div>
                <ul className="text-muted-foreground space-y-1.5 text-sm leading-relaxed list-disc list-inside">
                  <li>Стартапы в сфере туризма и медицины, хакатонные решения</li>
                  <li>Парсинг данных на Python + Selenium</li>
                  <li>Проектирование архитектуры и БД (нотации Мартина, IDEF1X) — PostgreSQL, MongoDB, SQLAlchemy</li>
                  <li>Backend на FastAPI, Express / Node.js; кэш и очереди задач через Redis + Celery</li>
                  <li>Frontend на Angular + TypeScript</li>
                  <li>Тестирование backend — Pytest</li>
                  <li>Развёртывание на VPS (Ubuntu) через Docker + Nginx</li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">FastAPI</Badge>
                  <Badge variant="outline">Angular</Badge>
                  <Badge variant="outline">Redis</Badge>
                  <Badge variant="outline">Docker</Badge>
                  <Badge variant="outline">Pytest</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">4+</div>
              <div className="text-muted-foreground text-sm">лет в разработке</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground text-sm">проектов запущено</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">24ч</div>
              <div className="text-muted-foreground text-sm">время ответа</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Projects and Achievements */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 hover:shadow-lg transition-shadow group">
              <CardContent className="p-0">
                <Link to="/projects" className="block">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name="FolderOpen" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Проекты</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Стартапы в туризме и медицине, хакатонные решения и коммерческие веб-сервисы
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Смотреть проекты <Icon name="ArrowRight" size={14} />
                  </span>
                </Link>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow group">
              <CardContent className="p-0">
                <Link to="/achievements" className="block">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name="Trophy" size={24} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Достижения</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Научные статьи, свидетельства о регистрации программ для ЭВМ, дипломы хакатонов и конкурсов
                  </p>
                  <span className="text-primary text-sm font-medium flex items-center gap-1">
                    Смотреть достижения <Icon name="ArrowRight" size={14} />
                  </span>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Давайте работать вместе</h2>
            <p className="text-lg text-muted-foreground">
              Есть проект? Расскажите — обсудим детали.
            </p>
          </div>

          <Card className="w-full mx-auto">
            <CardHeader>
              <CardTitle>Написать мне</CardTitle>
              <CardDescription>
                Опишите задачу, сроки и стек — отвечу в течение 24 часов.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" name="name" placeholder="Ваше имя" required disabled={isSubmitting} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" placeholder="your@email.com" required disabled={isSubmitting} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">О проекте</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Расскажите о проекте: что нужно разработать, какой стек предпочтителен, сроки и бюджет..."
                    className="min-h-[140px]"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" />Отправляю...</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" />Отправить сообщение</>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
          <p>&copy; 2025 Fullstack Web Developer. Все права защищены.</p>
          <div className="flex gap-4 flex-wrap justify-center">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Telegram</a>
            <a href="mailto:dev@example.com" className="hover:text-foreground transition-colors">Email</a>
            <Link to="/projects" className="hover:text-foreground transition-colors">Проекты</Link>
            <Link to="/achievements" className="hover:text-foreground transition-colors">Достижения</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
