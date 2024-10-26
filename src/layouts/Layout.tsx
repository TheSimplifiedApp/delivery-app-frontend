// Object Types
// You can define the structure of an object using types.

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'

// type User = {
//   id: number;
//   name: string;
//   isAdmin: boolean;
// };

// let user: User = {
//   id: 1,
//   name: "Alice",
//   isAdmin: true,
// };

type Props = {
  children: React.ReactNode,
  showHero?: boolean
}

const Layout = ({ children, showHero = false }: Props) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      {showHero && <Hero />}
      <div className="container mx-auto flex-1 py-10">
        {children}
      </div>
      <Footer />
    </div>
  )
}
export default Layout