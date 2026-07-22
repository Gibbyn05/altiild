import { useEffect } from "react";

export default function TinaAdmin() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.location.href = "/admin/index.html";
    }
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <p className="text-lg text-gray-600">Laster innholdsstyrer...</p>
      </div>
    </div>
  );
}
