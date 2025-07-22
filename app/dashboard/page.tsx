"use client";
import { useSession } from '@supabase/auth-helpers-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/utils';

export default function Dashboard() {
  const session = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [avatarSuccess, setAvatarSuccess] = useState('');

  useEffect(() => {
    if (!session) {
      router.replace('/login');
    } else {
      getProfile();
    }
    // eslint-disable-next-line
  }, [session]);

  async function getProfile() {
    setLoading(true);
    setError('');
    setSuccess('');
    const { data, error } = await supabase
      .from('profiles')
      .select('username, avatar_url')
      .eq('id', session?.user?.id)
      .single();
    if (error && error.code !== 'PGRST116') setError(error.message);
    if (data) {
      setUsername(data.username || '');
      setAvatarUrl(data.avatar_url || '');
    }
    setLoading(false);
  }

  async function updateProfile(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');
    const updates = {
      id: session?.user.id,
      username,
      avatar_url: avatarUrl,
      updated_at: new Date(),
    };
    const { error } = await supabase.from('profiles').upsert(updates);
    if (error) {
      setError(error.message);
      setSuccess('');
    } else {
      setSuccess('Profile updated successfully!');
    }
    setLoading(false);
  }

  async function uploadAvatar(event: React.ChangeEvent<HTMLInputElement>) {
    setAvatarSuccess('');
    setError('');
    try {
      setUploading(true);
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const filePath = `${session?.user.id}.${fileExt}`;
      let { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file, { upsert: true });
      if (uploadError) throw uploadError;
      const { data } = supabase.storage.from('avatars').getPublicUrl(filePath);
      setAvatarUrl(data.publicUrl);
      setAvatarSuccess('Avatar uploaded successfully!');
    } catch (error: any) {
      setError(error.message);
      setAvatarSuccess('');
    } finally {
      setUploading(false);
    }
  }

  if (!session) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Dashboard</h2>
        <form onSubmit={updateProfile} className="flex flex-col gap-4">
          <div className="flex flex-col items-center">
            <label htmlFor="avatar-upload" className="cursor-pointer">
              <img
                src={avatarUrl || '/logo.svg'}
                alt="Avatar"
                className="w-24 h-24 rounded-full object-cover border mb-2"
              />
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={uploadAvatar}
                className="hidden"
                disabled={uploading}
              />
            </label>
            {uploading && <span className="text-blue-600">Uploading...</span>}
            {avatarSuccess && <span className="text-green-600">{avatarSuccess}</span>}
          </div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
          {error && <div className="text-red-500 text-center">{error}</div>}
          {success && <div className="text-green-600 text-center">{success}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Save Profile'}
          </button>
        </form>
      </div>
    </div>
  );
}
