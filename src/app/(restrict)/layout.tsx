import Navbar from '@/components/Navbar'
import Rodape from '@/components/Rodape'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      <div className="md:container md:mx-auto">{children}</div>

      <footer
        className="footer-container"
        style={{ fontSize: '0.8rem', padding: 'rem' }}
      >
        <Rodape
          principal={'Desenvolvido por  CODEFATHER'}
          secundario={'Secundário Text'}
          style={{ fontSize: '1rem' }}
        />
      </footer>
    </>
  )
}
