import DashboardCard from '@/components/dashboard/DashboardCard'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="flex">
        <div className="p-5 w-full">
          <h1 className="text-2xl">Dashboard</h1>
          <DashboardCard />
          <Link href="/records">Registros</Link>
        </div>
      </div>
    </>
  )
}
