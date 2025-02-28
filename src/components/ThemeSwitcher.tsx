"use client";

import { Switch } from "@heroui/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <Switch isDisabled color="primary" size="lg" />;

  return (
    <Switch
      color="primary"
      isSelected={resolvedTheme === "dark"}
      size="lg"
      thumbIcon={({ isSelected, className }) => (isSelected ? <FiMoon className={className} /> : <FiSun className={className} />)}
      onValueChange={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    />
  );
}
