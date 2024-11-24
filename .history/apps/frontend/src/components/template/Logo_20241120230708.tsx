import { Righteous } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const fonte = Righteous( {
    subsets: ['latin'],
    weight: '400',
})

export default function Logo() {
  return (
    <Link href="/" className={`flex items-center ${fonte.className}`}>
        <Image src='/logo.svg' width={50} height={50} alt='logo'/>
        <h1 className='leading-5'>
            <div>CONVITE</div>
            <div>DIGITAL</div>
        </h1>
    </Link>
  );
}
