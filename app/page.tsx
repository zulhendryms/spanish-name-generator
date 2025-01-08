"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const [name, setName] = useState<{
    firstName: string;
    lastName1: string;
    lastName2: string;
    fullName: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const generateName = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/random-name');
      const data = await response.json();
      setName(data.name);
    } catch (error) {
      console.error('Failed to generate name:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900 bg-[length:400%_400%] animate-[gradient_15s_ease_infinite]">
      <main className="flex-grow p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <Card className="border-2 border-primary/20 shadow-lg backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
            <CardHeader className="text-center space-y-4">
              <div className="w-24 h-24 relative mx-auto mb-4 animate-[pulse_2s_ease-in-out_infinite]">
                <Image
                  src="/zzuluIT.png"
                  alt="ZZULU IT Logo"
                  width={96}
                  height={96}
                  className="object-contain"
                  priority
                />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Spanish Name Generator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 p-6">
              <Button 
                onClick={generateName} 
                className="w-full h-12 text-lg font-medium relative overflow-hidden transition-all hover:scale-105 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500"
                disabled={loading}
              >
                <span className="flex items-center justify-center gap-2">
                  {loading ? "Generating..." : (
                    <>
                      Generate Random Name
                      <Sparkles className="w-5 h-5" />
                    </>
                  )}
                </span>
              </Button>
              
              {name && (
                <div className="mt-6 space-y-4 animate-[fadeIn_0.5s_ease-out]">
                  <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-primary/20">
                    <p className="text-center text-xl font-semibold text-primary">
                      {name.fullName}
                    </p>
                    <div className="mt-3 space-y-2 text-sm text-muted-foreground">
                      <p className="flex justify-between">
                        <span>First Name:</span>
                        <span className="font-medium text-foreground">{name.firstName}</span>
                      </p>
                      <p className="flex justify-between">
                        <span>First Surname:</span>
                        <span className="font-medium text-foreground">{name.lastName1}</span>
                      </p>
                      <p className="flex justify-between">
                        <span>Second Surname:</span>
                        <span className="font-medium text-foreground">{name.lastName2}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="py-6 text-center text-sm font-medium text-primary/80 border-t border-primary/10 backdrop-blur-sm bg-white/30 dark:bg-gray-900/30">
        ©ZZULUIT, 2025. ALL RIGHTS RESERVED
      </footer>
    </div>
  );
}