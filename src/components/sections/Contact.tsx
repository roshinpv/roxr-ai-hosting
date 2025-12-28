"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Send } from "lucide-react";

export const Contact = () => {
    const [formState, setFormState] = useState({ name: "", email: "", type: "development", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Wireframe functionality - just log for now
        console.log("Form Submitted:", formState);
        alert("Thanks for reaching out! We will get back to you shortly.");
        setFormState({ name: "", email: "", type: "development", message: "" });
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                            Let's Build the <br />
                            <span className="text-gradient">Future</span>
                        </h2>
                        <p className="text-xl text-foreground/60 mb-8 max-w-md">
                            Ready to scale your AI vision? Whether you need development, growth strategy, or media coverage, roxr.ai is your partner.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-1 h-12 bg-gradient-to-b from-neon-purple to-electric-blue rounded-full" />
                                <div>
                                    <h4 className="text-foreground font-bold">Email Us</h4>
                                    <p className="text-foreground/40">hello@roxr.ai</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="p-8 bg-card/80 backdrop-blur-xl border-border shadow-2xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/70">Name</label>
                                    <input
                                        type="text"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full bg-foreground/5 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-neon-purple transition-colors placeholder:text-foreground/20"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/70">Email</label>
                                    <input
                                        type="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full bg-foreground/5 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-neon-purple transition-colors placeholder:text-foreground/20"
                                        placeholder="john@company.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/70">Project Type</label>
                                    <select
                                        value={formState.type}
                                        onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                                        className="w-full bg-foreground/5 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-neon-purple transition-colors"
                                    >
                                        <option value="development" className="bg-card">AI Application Development</option>
                                        <option value="growth" className="bg-card">Business Growth & Strategy</option>
                                        <option value="media" className="bg-card">Media & Promotion (AIProphet)</option>
                                        <option value="other" className="bg-card">Other</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/70">Message</label>
                                    <textarea
                                        required
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full bg-foreground/5 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:border-neon-purple transition-colors h-32 resize-none placeholder:text-foreground/20"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full">
                                    Send Message <Send size={18} />
                                </Button>
                            </form>
                        </Card>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
