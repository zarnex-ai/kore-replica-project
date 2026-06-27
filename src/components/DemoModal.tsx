import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, ArrowLeft, CheckCircle2, Cpu, Sparkles, Clock, ShieldCheck, FileText } from "lucide-react";
import { toast } from "sonner";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
  const [step, setStep] = useState(1);
  const [loadingEstimate, setLoadingEstimate] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    domain: "",
    timeline: "Standard (2-4 weeks)",
    complexityFeatures: [] as string[],
    name: "",
    email: "",
    notes: "",
  });

  const domains = [
    { id: "ai", label: "AI Solutions & Agents", desc: "Orchestration, Agentic RAG, & automation" },
    { id: "web", label: "Web & App Development", desc: "React, Next.js, & mobile apps" },
    { id: "vfx", label: "Enterprise VFX & 3D", desc: "3D rendering, video, & logo design" },
    { id: "academic", label: "College Final Year Projects", desc: "ML prototypes, research, & platforms" },
  ];

  const featuresList = {
    ai: ["Knowledge Graph / RAG", "Multi-Agent Systems", "Prompt Guardrails", "Data Integrations"],
    web: ["Database & Auth", "Admin Control Panel", "Stripe Payments", "Realtime WebSocket API"],
    vfx: ["3D WebGL Viewer", "Cinematic Animations", "Custom Branding Assets", "Video Rendering"],
    academic: ["Thesis Documentation", "Source Code Setup", "Presentation Slides", "Deployment Guide"],
  };

  const handleNextStep = () => {
    if (step === 1 && !formData.domain) {
      toast.error("Please select a project domain to proceed.");
      return;
    }
    if (step === 3) {
      if (!formData.name.trim() || !formData.email.trim()) {
        toast.error("Name and Email are required fields.");
        return;
      }
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        toast.error("Please enter a valid email address.");
        return;
      }
      
      // Trigger scoping calculation loading
      setLoadingEstimate(true);
      setStep(4);
      setTimeout(() => {
        setLoadingEstimate(false);
        toast.success("AI scoping report generated!");
      }, 2500);
      return;
    }
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const toggleFeature = (feat: string) => {
    setFormData((prev) => {
      const exists = prev.complexityFeatures.includes(feat);
      return {
        ...prev,
        complexityFeatures: exists
          ? prev.complexityFeatures.filter((f) => f !== feat)
          : [...prev.complexityFeatures, feat],
      };
    });
  };

  const resetForm = () => {
    setStep(1);
    setFormData({
      domain: "",
      timeline: "Standard (2-4 weeks)",
      complexityFeatures: [],
      name: "",
      email: "",
      notes: "",
    });
    onClose();
  };

  // Generate estimates based on selections
  const getScopingEstimates = () => {
    const selectedDomain = domains.find(d => d.id === formData.domain)?.label || "AI Solution";
    let estTimeline = "7 - 14 Days";
    let complexity = "Medium";
    let techStack = "React + Tailwind + Tailwind-Animate";

    if (formData.timeline === "Urgent (under 1 week)") {
      estTimeline = "3 - 5 Days";
      complexity = "High Priority";
    } else if (formData.timeline === "Flexible (1+ months)") {
      estTimeline = "30+ Days";
      complexity = "High Complexity";
    }

    if (formData.domain === "ai") {
      techStack = "LangChain + OpenAI + VectorDB + FastStream";
    } else if (formData.domain === "web") {
      techStack = "Vite + TypeScript + PostgreSQL + Shadcn UI";
    } else if (formData.domain === "vfx") {
      techStack = "Three.js + Blender + Premiere Pro + WebGL";
    } else if (formData.domain === "academic") {
      techStack = "Python / ML Models + Streamlit / React + FastAPI";
    }

    return { selectedDomain, estTimeline, complexity, techStack };
  };

  const { selectedDomain, estTimeline, complexity, techStack } = getScopingEstimates();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && resetForm()}>
      <DialogContent className="max-w-lg w-[95vw] backdrop-blur-xl border shadow-2xl rounded-2xl p-6 sm:p-8 overflow-hidden z-[100]" style={{ background: 'linear-gradient(135deg, #0a1628 0%, #050a14 100%)', borderColor: 'var(--zarnex-border)' }}>
        
        {step < 4 && (
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-bold flex items-center gap-2">
              <Sparkles className="w-5 h-5 animate-pulse" style={{ color: 'var(--zarnex-cyan)' }} />
              Interactive Project Scoping
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              Step {step} of 3: Give us the requirements, and let Zarnex AI estimate your layout.
            </DialogDescription>
          </DialogHeader>
        )}

        {/* STEP 1: Select Domain */}
        {step === 1 && (
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
              Select Your Project Domain
            </h3>
            <div className="grid gap-3">
              {domains.map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setFormData({ ...formData, domain: d.id, complexityFeatures: [] })}
                  className={`text-left p-4 rounded-xl border transition-all duration-300 ${
                    formData.domain === d.id
                      ? "shadow-md translate-x-1"
                      : "hover:bg-white/5"
                  }`}
                  style={{
                    borderColor: formData.domain === d.id ? 'var(--zarnex-cyan)' : 'var(--zarnex-border)',
                    background: formData.domain === d.id ? 'rgba(0, 200, 255, 0.05)' : 'transparent',
                  }}
                >
                  <div className="font-semibold text-foreground text-sm sm:text-base flex items-center justify-between">
                    {d.label}
                    {formData.domain === d.id && <CheckCircle2 className="w-4 h-4" style={{ color: 'var(--zarnex-cyan)' }} />}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">{d.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Scoping Details */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                Timeline Requirement
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["Urgent (under 1 week)", "Standard (2-4 weeks)", "Flexible (1+ months)"].map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeline: time })}
                    className={`p-3 rounded-lg border text-xs font-semibold text-center transition-all ${
                      formData.timeline === time
                        ? "shadow-sm"
                        : "hover:bg-white/5"
                    }`}
                    style={{
                      borderColor: formData.timeline === time ? 'var(--zarnex-cyan)' : 'var(--zarnex-border)',
                      background: formData.timeline === time ? 'rgba(0, 200, 255, 0.05)' : 'transparent',
                      color: formData.timeline === time ? 'var(--zarnex-cyan)' : undefined,
                    }}
                  >
                    {time.split(" ")[0]}
                    <span className="block text-[10px] font-normal text-muted-foreground mt-0.5">
                      {time.substring(time.indexOf("("))}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
                Desired Features & Deliverables
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(featuresList[formData.domain as keyof typeof featuresList] || []).map((feat) => {
                  const isChecked = formData.complexityFeatures.includes(feat);
                  return (
                    <button
                      key={feat}
                      type="button"
                      onClick={() => toggleFeature(feat)}
                      className={`p-3 rounded-lg border text-left text-xs font-medium transition-all ${
                        isChecked
                          ? "border-purple-600 bg-purple-50/30 text-purple-700 font-semibold"
                          : "border-border/60 hover:bg-muted text-foreground"
                      }`}
                    >
                      <span className="flex items-center gap-1.5 justify-between">
                        {feat}
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Contact Info */}
        {step === 3 && (
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-2">
              Let's Connect
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">YOUR NAME</label>
                <Input
                  type="text"
                  placeholder="Mohammed Aashiq"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="rounded-lg"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">EMAIL ADDRESS</label>
                <Input
                  type="email"
                  placeholder="aashiq@zarnexsolutions.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="rounded-lg"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">SPECIFIC REQUIREMENTS (OPTIONAL)</label>
                <Textarea
                  placeholder="Provide any additional details or stack requirements..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="rounded-lg min-h-[80px]"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 4: Scoping Calculation Screen */}
        {step === 4 && (
          <div className="py-6 text-center space-y-6">
            {loadingEstimate ? (
              <div className="flex flex-col items-center justify-center space-y-4">
                <Cpu className="w-12 h-12 text-purple-600 animate-spin" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">Analyzing Project Blueprint</h3>
                  <p className="text-xs text-muted-foreground animate-pulse">
                    Synthesizing stack details, estimating timelines & calculating developer allocations...
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <ShieldCheck className="w-10 h-10 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Scoping Report Ready</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Thanks {formData.name}, we've configured your AI-scoped blueprint request.
                  </p>
                </div>

                {/* Scoped Summary Box */}
                <div className="bg-muted/50 rounded-2xl border border-border/40 p-4 text-left grid gap-3.5 text-sm">
                  <div className="flex items-center justify-between border-b border-border/40 pb-2">
                    <span className="text-muted-foreground flex items-center gap-1.5"><FileText className="w-4 h-4 text-purple-500" /> Project Scope:</span>
                    <span className="font-semibold text-foreground text-right">{selectedDomain}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border/40 pb-2">
                    <span className="text-muted-foreground flex items-center gap-1.5"><Clock className="w-4 h-4 text-purple-500" /> Est. Delivery:</span>
                    <span className="font-semibold text-foreground text-right">{estTimeline}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-border/40 pb-2">
                    <span className="text-muted-foreground flex items-center gap-1.5"><Cpu className="w-4 h-4 text-purple-500" /> Architect Stack:</span>
                    <span className="font-mono text-xs text-foreground text-right max-w-[200px] truncate">{techStack}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-purple-500" /> Priority Level:</span>
                    <span className="font-semibold text-purple-600 text-right">{complexity}</span>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground px-4">
                  A Zarnex AI engineering leader will email your comprehensive API blueprint and budget range to <span className="font-medium text-foreground">{formData.email}</span> within the hour.
                </p>

                <div className="pt-2">
                  <Button onClick={resetForm} className="w-full rounded-xl bg-purple-600 hover:bg-purple-700 text-white py-3 font-semibold shadow-md">
                    Finish Scoping & Close
                  </Button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* STEP BUTTONS */}
        {step < 4 && (
          <div className="flex justify-between items-center gap-4 mt-8 pt-4 border-t border-border/50">
            {step > 1 ? (
              <Button
                variant="outline"
                onClick={handlePrevStep}
                className="rounded-xl flex items-center gap-1.5 text-xs sm:text-sm px-4 py-2 border-border/60 hover:bg-muted"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            ) : (
              <div /> // Spacer
            )}
            
            <Button
              onClick={handleNextStep}
              className="rounded-xl flex items-center gap-1.5 text-xs sm:text-sm px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 shadow-md ml-auto"
            >
              {step === 3 ? "Submit Scope" : "Continue"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
