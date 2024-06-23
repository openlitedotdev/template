import { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@openlabs/ui'
import { useEffect, useState } from 'react'

interface AlertModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  loading: boolean
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  loading,
}) => {
  const [isMounted, setIsMounted] = useState(false)

  const onChange = (open: boolean) => {
    if (!open)
      onClose()
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted)
    return null

  return (
    <Dialog open={isOpen} onOpenChange={onChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>This action cannot be undone.</DialogDescription>
        </DialogHeader>
        <div className="pt-6 space-x-2 flex items-center justify-end w-full">
          <Button disabled={loading} onClick={onClose}>
            Cancel
          </Button>
          <Button disabled={loading} color="error" onClick={onConfirm}>
            Continue
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
