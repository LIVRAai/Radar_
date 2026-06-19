import { AdminCrud } from '@/components/AdminTable';export default function Page(){return <AdminCrud table="municipalities" fields={['name','department','country','is_active']}/>}
