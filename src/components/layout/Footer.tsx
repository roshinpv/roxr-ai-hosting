"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-card/80 border-t border-border py-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="inline-block mb-4">
                            <img
                                src="/logo.png"
                                alt="roxr.ai"
                                style={{ height: '38px', width: 'auto' }}
                                className="object-contain"
                            />
                        </Link>
                        <p className="text-foreground/60 max-w-sm flex items-center flex-wrap gap-1">
                            Strategic AI consultation, bespoke development, and business transformation. Scale your vision with the
                            <img src="/logo.png" alt="roxr" className="h-4 w-auto inline-block mx-1" />
                            approach.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-foreground font-semibold mb-4">The Approach</h4>
                        <ul className="space-y-2">
                            <li><Link href="/#services" className="text-foreground/60 hover:text-neon-cyan transition-colors">Services</Link></li>
                            <li><Link href="/evaluation" className="text-foreground/60 hover:text-neon-cyan transition-colors">AI Evaluator</Link></li>
                            <li><Link href="/aiprophet" className="text-foreground/60 hover:text-neon-cyan transition-colors">AIProphet</Link></li>
                            <li><Link href="/founder" className="text-foreground/60 hover:text-neon-cyan transition-colors">Founder</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-foreground font-semibold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-foreground/5 rounded-full hover:bg-neon-purple/10 hover:text-neon-purple transition-all text-foreground/70">
                                <Twitter size={20} />
                            </a>
                            <a href="#" className="p-2 bg-foreground/5 rounded-full hover:bg-neon-purple/10 hover:text-neon-purple transition-all text-foreground/70">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.youtube.com/channel/UCyglSJZd8j_FiK9DWGH5sXA" target="_blank" rel="noopener noreferrer" className="p-2 bg-foreground/5 rounded-full hover:bg-neon-purple/10 hover:text-neon-purple transition-all text-foreground/70">
                                <Youtube size={20} />
                            </a>
                            <a href="#" className="p-2 bg-foreground/5 rounded-full hover:bg-neon-purple/10 hover:text-neon-purple transition-all text-foreground/70">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-foreground/40 text-sm">
                        © {new Date().getFullYear()} roxr.ai. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <Link href="#" className="text-foreground/40 hover:text-foreground text-sm">Privacy Policy</Link>
                        <Link href="#" className="text-foreground/40 hover:text-foreground text-sm">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
