import OwnerMyPage from '@/components/OwnerMyPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/mypage/')({
  component: OwnerMyPage
})
