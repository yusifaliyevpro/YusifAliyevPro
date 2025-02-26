"use client";

import { Button } from "@heroui/button";

export function Alert() {
  return (
    <div className="flex justify-center">
      <Button color="primary" className="w-32" onPress={() => alert("You clicked button")}>
        Click Me
      </Button>
    </div>
  );
}
