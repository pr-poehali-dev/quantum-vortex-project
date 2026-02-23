import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";

const achievements = [
  {
    category: "Свидетельства",
    icon: "FileCheck",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    items: [
      {
        title: "Свидетельство о государственной регистрации программы для ЭВМ",
        description: "Добавьте название и номер свидетельства",
        year: "—",
        tag: "Роспатент",
      },
      {
        title: "Свидетельство о государственной регистрации программы для ЭВМ",
        description: "Добавьте название и номер свидетельства",
        year: "—",
        tag: "Роспатент",
      },
    ],
  },
  {
    category: "Научные публикации",
    icon: "BookOpen",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    items: [
      {
        title: "Научная статья",
        description: "Добавьте название статьи, журнал и соавторов",
        year: "—",
        tag: "Статья",
      },
      {
        title: "Научная статья",
        description: "Добавьте название статьи, журнал и соавторов",
        year: "—",
        tag: "Статья",
      },
    ],
  },
  {
    category: "Хакатоны и конкурсы",
    icon: "Trophy",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    items: [
      {
        title: "Победитель хакатона",
        description: "Добавьте название хакатона, тему проекта и организатора",
        year: "—",
        tag: "Победитель",
      },
      {
        title: "Призёр конкурса",
        description: "Добавьте название конкурса и организатора",
        year: "—",
        tag: "Призёр",
      },
      {
        title: "Участник конкурса",
        description: "Добавьте название конкурса и организатора",
        year: "—",
        tag: "Участник",
      },
    ],
  },
];

const tagColors: Record<string, string> = {
  Роспатент: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  Статья: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  Победитель: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
  Призёр: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  Участник: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
};

export default function AchievementsPage() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

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
              <span className="font-semibold">Достижения</span>
            </div>
          </div>
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {isDark ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>
      </header>

      <main className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">Университет и достижения</Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Достижения</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Научные публикации, свидетельства о регистрации программ, дипломы хакатонов и конкурсов
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-14">
            <Card className="p-5 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-1">2+</div>
                <div className="text-xs text-muted-foreground">Свидетельства ЭВМ</div>
              </CardContent>
            </Card>
            <Card className="p-5 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-1">2+</div>
                <div className="text-xs text-muted-foreground">Научных статьи</div>
              </CardContent>
            </Card>
            <Card className="p-5 text-center">
              <CardContent className="p-0">
                <div className="text-3xl font-bold text-primary mb-1">3+</div>
                <div className="text-xs text-muted-foreground">Дипломов и наград</div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements by category */}
          <div className="space-y-10">
            {achievements.map((group) => (
              <div key={group.category}>
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${group.bg}`}>
                    <Icon name={group.icon as "Trophy"} size={18} className={group.color} />
                  </div>
                  <h2 className="text-xl font-semibold">{group.category}</h2>
                </div>

                <div className="space-y-3">
                  {group.items.map((item, idx) => (
                    <Card key={idx} className="p-5 hover:shadow-md transition-shadow">
                      <CardContent className="p-0">
                        <div className="flex items-start justify-between gap-3 flex-wrap">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-base mb-1">{item.title}</h3>
                            <p className="text-muted-foreground text-sm">{item.description}</p>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {item.year !== "—" && (
                              <span className="text-sm text-muted-foreground">{item.year}</span>
                            )}
                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${tagColors[item.tag] ?? "bg-muted text-muted-foreground"}`}>
                              {item.tag}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 p-6 rounded-xl border border-dashed text-center">
            <Icon name="Info" size={20} className="text-muted-foreground mx-auto mb-2" />
            <p className="text-muted-foreground text-sm">
              Это шаблон для достижений. Напишите мне свои реальные данные — статьи, номера свидетельств, хакатоны — и я заполню страницу.
            </p>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link to="/projects">Посмотреть проекты</Link>
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
