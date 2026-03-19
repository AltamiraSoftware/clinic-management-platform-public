"use client";
import Header from "@/components/layout/header";
import { useAuthModal } from "@/hooks/useAuthModal";

export default function HeaderClient() {
  const { openLogin, openRegister } = useAuthModal();

  return <Header openLogin={openLogin} openRegister={openRegister} />;
}
