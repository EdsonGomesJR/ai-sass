import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import{UserButton } from '@clerk/nextjs'
import MobileSidebar from "./mobile-sidebar";

export function Navbar() {
  return (
    <div className="flex items-center p-4">
     <MobileSidebar />
     <div className="flex w-full justify-end">
      <UserButton afterSignOutUrl="/"/>
     </div>
    </div>
  )
}
