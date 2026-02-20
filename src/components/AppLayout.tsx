import { useState } from "react";
import claroLogo from "@/assets/claro-logo.png";
import { Outlet, useLocation } from "react-router-dom";
import { AIChatPanel } from "@/components/AIChatPanel";
import {
  Globe,
  Cloud,
  TrendingDown,
  PieChart,
  Leaf,
  Network,
  Search as SearchIcon,
  Bell,
  Menu,
  ChevronDown,
  BookOpen,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

interface MenuItem {
  title: string;
  url: string;
  icon: React.ElementType;
}

const menuItems: MenuItem[] = [
  { title: "Panorama 360", url: "/panorama-360", icon: Globe },
  { title: "Cloud Orchestration", url: "/cloud-orchestration", icon: Cloud },
  { title: "Cost Management", url: "/cost-management", icon: TrendingDown },
  { title: "Finops 360", url: "/finops-360", icon: PieChart },
  { title: "Mangue", url: "/mangue", icon: Leaf },
  { title: "DCI", url: "/dci", icon: Network },
];

export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

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

        {/* Right: Produtos badge + bell + user */}
        <div className="ml-auto flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-sm font-medium text-foreground">
            <BookOpen className="h-4 w-4" />
            Produtos
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
              Produtos
            </p>
          </div>

          <nav className="flex flex-col gap-0.5 px-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.url}
                to={item.url}
                className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                activeClassName="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                <item.icon className="h-[18px] w-[18px] shrink-0" />
                <span>{item.title}</span>
              </NavLink>
            ))}
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
