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

  const techStack = [
    { name: "Angular", color: "bg-red-500/10 text-red-600 dark:text-red-400" },
    { name: "Node.js", color: "bg-green-500/10 text-green-600 dark:text-green-400" },
    { name: "MongoDB", color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400" },
    { name: "Redis", color: "bg-orange-500/10 text-orange-600 dark:text-orange-400" },
    { name: "PostgreSQL", color: "bg-blue-500/10 text-blue-600 dark:text-blue-400" },
    { name: "Python", color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400" },
    { name: "TypeScript", color: "bg-blue-400/10 text-blue-500 dark:text-blue-300" },
    { name: "REST API", color: "bg-purple-500/10 text-purple-600 dark:text-purple-400" },
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
            <nav className="hidden md:flex gap-6 text-sm text-muted-foreground">
              <a href="#services" className="hover:text-foreground transition-colors">Услуги</a>
              <a href="#stack" className="hover:text-foreground transition-colors">Стек</a>
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
          <div className="mb-6">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-1">
              ✦ Открыт для новых проектов
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent leading-tight">
              Fullstack Web Developer
            </h1>
            <p className="text-xl text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
              Разрабатываю полноценные веб-приложения — от Angular-интерфейса до серверной логики на Node.js.
            </p>
            <p className="text-base text-muted-foreground mb-10 max-w-xl mx-auto">
              Основной стек: <span className="text-foreground font-medium">MEAN</span> (MongoDB, Express, Angular, Node.js) + Redis, PostgreSQL, Python
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
            <Button size="lg" className="text-base px-8" asChild>
              <a href="#contact">Обсудить проект</a>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8" asChild>
              <a href="#services">Мои услуги</a>
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
                  Создаю современные SPA и сложные интерфейсы на Angular с TypeScript.
                  Адаптивная вёрстка, высокая производительность, чистый код.
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
                  Разрабатываю REST API и серверную логику на Node.js и Python.
                  Работаю с MongoDB, PostgreSQL и Redis для надёжного хранения данных.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Node.js</Badge>
                  <Badge variant="secondary">Express</Badge>
                  <Badge variant="secondary">Python</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Database" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Базы данных и оптимизация</h3>
                <p className="text-muted-foreground mb-4">
                  Проектирую схемы баз данных, настраиваю кэширование через Redis,
                  оптимизирую запросы для высоких нагрузок.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">MongoDB</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Redis</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Технологический стек</h2>
            <p className="text-lg text-muted-foreground">
              Инструменты, которыми пользуюсь каждый день
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className={`px-4 py-2 rounded-full text-sm font-medium border border-transparent ${tech.color}`}
              >
                {tech.name}
              </span>
            ))}
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">3+</div>
              <div className="text-muted-foreground">года в коммерческой разработке</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">проектов запущено</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">24ч</div>
              <div className="text-muted-foreground">время ответа на запрос</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Давайте работать вместе</h2>
            <p className="text-lg text-muted-foreground">
              Есть проект на примете? Расскажите — и обсудим детали.
            </p>
          </div>

          <Card className="w-full max-w-2xl mx-auto">
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
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      disabled={isSubmitting}
                    />
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
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Отправляю...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Отправить сообщение
                    </>
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
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href="https://t.me" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Telegram</a>
            <a href="mailto:dev@example.com" className="hover:text-foreground transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
