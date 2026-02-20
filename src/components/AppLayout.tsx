import { useState } from "react";
import claroLogo from "@/assets/claro-logo.png";
import { Outlet, useLocation } from "react-router-dom";
import { AIChatPanel } from "@/components/AIChatPanel";
import {
  Users,
  LayoutDashboard,
  SlidersHorizontal,
  FileText,
  Search as SearchIcon,
  Stethoscope,
  ClipboardList,
  Bell,
  Menu,
  ChevronDown,
  ChevronRight,
  Activity,
  Briefcase,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface MenuItem {
  title: string;
  url: string;
  icon: React.ElementType;
  children?: { title: string; url: string }[];
}

const menuItems: MenuItem[] = [
  { title: "Clientes", url: "/clientes", icon: Users },
  { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
  { title: "Gestão de Parâmetros", url: "/gestao-parametros", icon: SlidersHorizontal },
  {
    title: "Relatórios",
    url: "/relatorios",
    icon: FileText,
    children: [
      { title: "Saúde Geral", url: "/saude-geral" },
      { title: "Performance", url: "/performance-contratual" },
      { title: "Estabilidade e Quedas", url: "/estabilidade-quedas" },
      { title: "Experiência Wi-Fi", url: "/experiencia-wifi" },
      { title: "Capacidade por OLT", url: "/capacidade-olt" },
      { title: "Geoestratégia", url: "/geo-estrategico" },
      { title: "Preditivo", url: "/preditivo" },
      { title: "Analítico", url: "/analitico" },
    ],
  },
  { title: "Diagnóstico", url: "/diagnostico", icon: Stethoscope },
  { title: "Audit Log", url: "/audit-log", icon: ClipboardList },
];

export default function AppLayout() {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openGroups, setOpenGroups] = useState<string[]>(["Relatórios"]);

  const toggleGroup = (title: string) => {
    setOpenGroups((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  const isActive = (url: string) => location.pathname === url;
  const isChildActive = (item: MenuItem) =>
    item.children?.some((c) => location.pathname === c.url);

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 flex h-14 items-center border-b bg-card px-4 shadow-sm">
        {/* Left: Logo + hamburger */}
        <div className="flex items-center gap-3">
          <img src={claroLogo} alt="Claro" className="h-8 w-auto" />
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded p-1.5 hover:bg-muted"
          >
            <Menu className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* Center: Search */}
        <div className="ml-6 hidden flex-1 sm:block sm:max-w-sm">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Busque por produtos"
              className="h-9 rounded-full border-border bg-background pl-9 text-sm"
            />
          </div>
        </div>

        {/* Right: GPON badge + bell + user */}
        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
            <Briefcase className="h-4 w-4" />
            GPON
          </div>
          <button className="relative rounded p-1.5 hover:bg-muted">
            <Bell className="h-5 w-5 text-foreground" />
          </button>
          <div className="flex items-center gap-1 text-sm text-foreground">
            <span className="hidden font-medium sm:inline">usuário</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={cn(
            "sticky top-14 h-[calc(100vh-3.5rem)] shrink-0 border-r bg-card transition-all duration-200 overflow-y-auto",
            sidebarOpen ? "w-56" : "w-0 overflow-hidden border-r-0"
          )}
        >
          <div className="px-3 pb-2 pt-4">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
              GPON
            </p>
          </div>

          <nav className="flex flex-col gap-0.5 px-2">
            {menuItems.map((item) => {
              const hasChildren = !!item.children?.length;
              const groupOpen = openGroups.includes(item.title);
              const active = isActive(item.url);
              const childActive = isChildActive(item);

              if (hasChildren) {
                return (
                  <div key={item.title}>
                    <button
                      onClick={() => toggleGroup(item.title)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                        childActive
                          ? "text-primary"
                          : "text-foreground hover:bg-muted"
                      )}
                    >
                      <item.icon className="h-[18px] w-[18px] shrink-0" />
                      <span className="flex-1 text-left">{item.title}</span>
                      <ChevronRight
                        className={cn(
                          "h-4 w-4 transition-transform",
                          groupOpen && "rotate-90"
                        )}
                      />
                    </button>
                    {groupOpen && (
                      <div className="ml-5 mt-0.5 flex flex-col gap-0.5 border-l border-border pl-3">
                        {item.children!.map((child) => (
                          <NavLink
                            key={child.url}
                            to={child.url}
                            className="rounded-md px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                            activeClassName="bg-primary text-primary-foreground font-medium hover:bg-primary/90"
                          >
                            {child.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <NavLink
                  key={item.url}
                  to={item.url}
                  className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                  activeClassName="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <item.icon className="h-[18px] w-[18px] shrink-0" />
                  <span>{item.title}</span>
                </NavLink>
              );
            })}
          </nav>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto bg-background">
          <Outlet />
        </main>
      </div>

      {/* AI Chat Panel - available on all pages */}
      <AIChatPanel />
    </div>
  );
}
