import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Server, Shield, Zap, Circle, Hexagon, Rss } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background to-muted/30">
      {/* Анимация фона */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-primary/5 dark:bg-primary/10"
            style={{
              width: Math.random() * 10 + 5 + 'px',
              height: Math.random() * 10 + 5 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `float ${Math.random() * 10 + 10}s infinite ${Math.random() * 5}s ease-in-out`,
            }}
          />
        ))}

        <div className="absolute inset-0 opacity-5 dark:opacity-[0.03] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        
        <div className="absolute -top-[20%] -left-[10%] w-[60vh] h-[60vh] rounded-full bg-primary/5 dark:bg-primary/10 blur-3xl animate-float" />
        <div className="absolute -bottom-[20%] -right-[10%] w-[50vh] h-[50vh] rounded-full bg-accent/5 dark:bg-accent/10 blur-3xl animate-float animate-delay-300" />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Левая колонка с текстом */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-muted/50 rounded-full text-sm font-medium">
                <Rss className="h-4 w-4 text-primary" />
                <span>IT решения для бизнеса</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  Оптимизируем
                </span>
                <span className="block">вашу IT-инфраструктуру</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Комплексный аудит, настройка и обслуживание IT-систем для повышения эффективности и безопасности вашего бизнеса
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-lg px-8 group">
                <Link to="/services" className="flex items-center">
                  Наши услуги
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => navigate('/Contacts')} 
              >
                Бесплатная консультация
              </Button>
            </div>

            {/* Карточки с гарантированно видимым текстом */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8">
              {[
                { 
                  icon: Server, 
                  title: "Инфраструктура", 
                  desc: "Полный цикл услуг"
                },
                { 
                  icon: Shield, 
                  title: "Безопасность", 
                  desc: "Надежная защита"
                },
                { 
                  icon: Zap, 
                  title: "Оптимизация", 
                  desc: "Повышение эффективности"
                }
              ].map((feature, i) => (
                <div 
                  key={i}
                  className="flex p-4 bg-muted/30 hover:bg-muted/50 rounded-xl border border-muted/50 transition-all cursor-default animate-slide-in-right"
                  style={{ 
                    animationDelay: `${i * 100 + 100}ms`,
                    minHeight: '120px'
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <feature.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 overflow-visible">
                      <h3 className="font-semibold text-sm sm:text-base leading-snug">{feature.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground leading-tight whitespace-normal">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Правая колонка с графикой */}
          <div className="relative animate-fade-in animate-delay-200">
            <div className="relative w-full max-w-xl mx-auto">
              <div className="relative bg-card rounded-3xl p-8 shadow-xl border border-muted/50 overflow-hidden">
                <Hexagon className="absolute -top-8 -right-8 h-32 w-32 text-primary/10 rotate-45" />
                <Circle className="absolute -bottom-6 -left-6 h-24 w-24 text-accent/10" />
                
                <div className="relative space-y-8 z-10">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full max-w-xs">
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-border/50" />
                      <div className="absolute top-0 bottom-0 left-1/2 w-px bg-border/50" />

                      <div className="grid grid-cols-3 grid-rows-2 gap-8">
                        {[
                          { icon: Server, color: "primary", pos: "row-start-1 col-start-2" },
                          { icon: Shield, color: "accent", pos: "row-start-2 col-start-1" },
                          { icon: Zap, color: "secondary", pos: "row-start-2 col-start-3" }
                        ].map((node, i) => (
                          <div 
                            key={i}
                            className={`${node.pos} flex justify-center items-center`}
                          >
                            <div className={`w-16 h-16 bg-${node.color}/10 rounded-xl flex items-center justify-center animate-float`} style={{ animationDelay: `${i * 200}ms` }}>
                              <node.icon className={`h-8 w-8 text-${node.color}`} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: "500+", label: "Успешных проектов" },
                      { value: "24/7", label: "Техническая поддержка" },
                      { value: "99.9%", label: "Доступность систем" },
                      { value: "10+", label: "Лет опыта" }
                    ].map((stat, i) => (
                      <div 
                        key={i}
                        className="text-center p-4 bg-muted/30 hover:bg-muted/50 rounded-xl border border-muted/50 transition-all cursor-default"
                      >
                        <div className="text-3xl font-bold text-primary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;