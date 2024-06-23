export function useRole(role: string) {
  const ROLE_ACCESS = 'admin'

  if (role !== ROLE_ACCESS)
    throw new Error('Your role not is admin. I"m Sorry')
}
