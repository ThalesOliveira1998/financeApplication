import SideNav from '@/app/_ui-REMOVER/dashboard/sidenav'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <section className="w-full flex-none md:w-24">
        <SideNav />
      </section>
      <section className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </section>
    </section>
  )
}
