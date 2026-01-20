import { Shield, Lock, Settings, Layers } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Strongest protection",
    description: "Code is converted to bytecode that cannot be directly understood",
  },
  {
    icon: Lock,
    title: "Anti-decompilation",
    description: "No standard JavaScript to reverse engineer",
  },
  {
    icon: Settings,
    title: "Customizable VM",
    description: "Each obfuscation generates unique opcodes and VM structure",
  },
  {
    icon: Layers,
    title: "Layered security",
    description: "Combine with other obfuscation options for defense in depth",
  },
];

export function Features() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-secondary/50 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
