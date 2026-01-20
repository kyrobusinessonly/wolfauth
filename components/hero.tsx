import { ArrowRight, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          <span className="text-foreground">The First AI-Powered</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-300">
            VM Obfuscation
          </span>
        </h1>
        <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Transform your code into custom bytecode that runs on a JS virtual machine. The strongest protection against reverse engineering.
        </p>
        <div className="flex flex-col items-center gap-4">
          <Button 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-medium"
          >
            Get VM Protection
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Link href="#standard" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm">
            <Code className="w-4 h-4" />
            <span>Or try free standard obfuscation</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
