import OwnerProfileSetting from '@/components/OwnerProfileSetting'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/profile/')({
  component: OwnerProfileSetting
})
