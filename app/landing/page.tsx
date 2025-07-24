'use client'
import React, { useEffect, useState } from 'react';
import Header from '@/components/custom/Header';
import Footer from '@/components/custom/Footer';
import { useSession } from '@supabase/auth-helpers-react';
import { supabase } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const LandingPage = () => {
  const session = useSession();
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUsername = async () => {
      if (session) {
        const { data } = await supabase
          .from('profiles')
          .select('username')
          .eq('id', session.user.id)
          .single();
        if (data && data.username) {
          setUsername(data.username);
        } else {
          setUsername('');
        }
      }
    };
    fetchUsername();
  }, [session]);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="flex items-center justify-between w-full mb-4">
          <div className="text-xl pl-6">
          <h1 className="text-2xl  text-gray-800">
            Hello, <span className="text-fuchsia-700">{username || 'User'}</span>
          </h1>
          </div>
          <Button className="mr-6" variant="outline" size="sm">
            + Create New Template
          </Button>
        </div>
        <h2 className="text-xl mb-4 ml-  self-start w-full pl-6">
  Workspace
</h2>

        <div className="mb-6">
          <Image src="/overview.png" alt="Template Preview" width={400} height={200} className="rounded-lg shadow-md" />
        </div>
        <Button className="mt-2" variant="default" size="lg">
          Try Template
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
