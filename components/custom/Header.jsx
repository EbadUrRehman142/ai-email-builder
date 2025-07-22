'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useSession } from '@supabase/auth-helpers-react';
import { supabase } from '@/lib/utils';

const Header = () => {
  const session = useSession();
  const [avatarUrl, setAvatarUrl] = useState('');
  const [username, setUsername] = useState('');


  useEffect(() => {
    const fetchAvatar = async () => {
      if (session) {
        const { data, error } = await supabase
          .from('profiles')
          .select('avatar_url')
          .eq('id', session.user.id)
          .single();
        if (data && data.avatar_url) {
          setAvatarUrl(data.avatar_url);
        } else {
          setAvatarUrl('');
        }
      }
    };
    fetchAvatar();
  }, [session]);

  useEffect(() => {
    const fetchUsername = async () => {
      if (session) {
        const { data, error } = await supabase
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
    }
    fetchUsername();
  }, [session]);  

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.reload();
  };

  return (
    <div className='flex justify-between items-center p-4 border-b border-gray-300'>
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        <div className='flex gap-4 items-center'>
          {!session ? (
            <>
              <Button>
                <Link href="/login">Login</Link>
              </Button>
              <Button>
                <Link href="/login">Signup</Link>
              </Button>
            </>
          ) : (
            <>
            <p className="text-gray-700" >
              Welcome, {username || 'User'}!
            </p>
              <Link href="/dashboard">
              <img
                  src={avatarUrl || '/logo.svg'}
                  alt="Avatar"
                  className="w-10 h-10 rounded-full object-cover border"
                  style={{ minWidth: 40, minHeight: 40 }}
                />
              </Link>
              <Button onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </div>
    </div>
  )
}

export default Header