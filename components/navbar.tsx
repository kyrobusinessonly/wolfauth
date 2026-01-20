"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Sparkles, BookOpen, Github, Code, Moon, LogIn } from "lucide-react";
import { AnimatedBorderButton } from "@/components/animated-border-button";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
              <span className="text-background font-bold text-sm">{"{ }"}</span>
            </div>
            <span className="font-semibold text-foreground text-lg">Obfuscator.io</span>
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#pricing" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Pricing</span>
            </Link>
            <Link href="#docs" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
              <BookOpen className="w-4 h-4" />
              <span>Documentation</span>
            </Link>
            <Link href="#github" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </Link>
            <Link href="#playground" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
              <Code className="w-4 h-4" />
              <span>Playground</span>
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">

            {/* Dark/Light Mode Button avec fond #102d3e transparent au hover */}
            <button 
              className="p-2 rounded-full text-muted-foreground hover:text-primary transition-colors flex items-center justify-center"
              style={{ backgroundColor: "transparent" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#102d3e80")} // 50% opacity
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
              aria-label="Toggle dark mode"
            >
              <Moon className="w-5 h-5" />
            </button>

            {/* Ligne verticale séparatrice */}
            <div className="h-6 w-px bg-border hidden sm:block" />

            {/* Sign In avec fond #102d3e transparent au hover */}
            <Link 
              href="#signin" 
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-muted-foreground hover:text-primary transition-colors text-sm"
              style={{ backgroundColor: "transparent" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#102d3e80")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In</span>
            </Link>

            {/* Bouton Register animé */}
            <AnimatedBorderButton>Register</AnimatedBorderButton>

          </div>
        </div>
      </div>
    </header>
  );
}
