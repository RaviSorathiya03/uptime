"use client";

import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Clock } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

export function Appbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Clock className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">UptimeGuard</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium hover:text-primary">Features</Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary">How It Works</Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary">Pricing</Link>
          <Link href="#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</Link>
          <Link href="#faq" className="text-sm font-medium hover:text-primary">FAQ</Link>
        </nav>

        {/* Authentication Actions */}
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="ghost" className="text-sm font-medium hover:underline underline-offset-4">
                Log in
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button>Get Started</Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
