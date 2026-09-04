"use client";

import { siteConfig } from "@/config/site";

export function useWhatsAppLink() {
  const getConsultationLink = () => {
    const text = encodeURIComponent(siteConfig.waTemplates.generalConsultation);
    return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${text}`;
  };

  return { getConsultationLink };
}