import { ShieldOff } from "lucide-react";

export function InfoBox() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <ShieldOff className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-2">No Deobfuscator Exists</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                There is no existing deobfuscator for VM-obfuscated code, and creating one is an extremely complex task. Each obfuscation produces unique bytecode with a custom virtual machine, requiring extensive manual reverse engineering to understand a protected file.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
