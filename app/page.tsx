'use client'
import { Button } from "@/components/ui/button";
import Body from "@/components/custom/Body";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer"
import { useSession } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.replace('/login');
    }
  }, [session, router]);

  if (!session) return null;

  return (
    <div>
      <Header />
      <Body />
      <Footer/>
    </div>
  );
}
