import { Righteous } from 'next/font/google';

const fonte = Righteous( {
    subsets: ['latin'],
    weight: '400',
})

export default function Logo() {
  return (
    <div>
        <span>Logo</span>
    </div>
  );
}
