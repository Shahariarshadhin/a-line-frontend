"use client";
import { useState } from "react";

import ServicePublic from "@/components/Pages/ServicePublic/ServicePublicPage";
import FloatingButtons from "@/components/Shared/FloatingButtons";

export default function ServicesPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <FloatingButtons isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
      <ServicePublic setIsModalOpen={setIsModalOpen} />
    </FloatingButtons>
  );
}
