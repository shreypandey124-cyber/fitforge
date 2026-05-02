import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FitForge - Your Personal Workout Planner",
  description: "Generate personalized workout plans based on your biometrics and fitness goals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}