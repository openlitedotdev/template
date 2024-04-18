import { useTheme } from 'next-themes'
import { Toaster as Sonner } from 'sonner'

type ToasterProps = React.ComponentProps<typeof Sonner>

function Toaster({ ...props }: ToasterProps) {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast: 'group toast group-[.toaster]:bg-background group-[.toaster]:text-red-500 group-[.toaster]:border-border group-[.toaster]:shadow-lg',
          description: 'group-[.toast]:text-primary',
          actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary',
          cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-primary',
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
