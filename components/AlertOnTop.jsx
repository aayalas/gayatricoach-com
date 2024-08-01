import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { MessageCircleWarning } from 'lucide-react';
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import {useTranslations} from 'next-intl';


export function AlertOnTop() {
  const t = useTranslations('Navigation');
  return (
    <Alert variant="success" className="bg-teal-300" >
      <AlertTitle></AlertTitle>
      <AlertDescription className="text-center">
        <a href="https://wa.me/message/BAB446IPVXTGO1" target="_blank" class="flex items-center justify-center space-x-2 font-bold text-base text-pink-400 hover:underline">
          <span>{t('alert')}</span>
          <LinkIcon class="w-3 h-3" />
        </a>
      </AlertDescription>
    </Alert>
  )
}
