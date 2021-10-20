import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 2000);
  }, []);

  return (
    <div className="title-not-found">
      <h1>Oopppss...</h1>
      <h2>Halaman yang anda cari tidak ditemukan</h2>
    </div>
  );
}
