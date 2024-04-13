import { Button, Input, Label, Tabs, TabsContent, TabsList, TabsTrigger } from '@openui-org/react/components'

export function LoginRegister() {
  return (
    <Tabs defaultValue="login" className="bg-background w-full text-primary">
      <TabsList className="bg-background text-primary">
        <TabsTrigger value="login" className="data-[state=active]:bg-primary data-[state=active]:text-background">Login</TabsTrigger>
        <TabsTrigger value="register" className="data-[state=active]:bg-primary data-[state=active]:text-background">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="login" className="border-0">
        <form className="flex flex-col gap-4 text-start">
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="jondoe@gmail.com" />
          </div>
          <div>
            <Label>password</Label>
            <Input type="password" placeholder="*******" />
          </div>
          <Button className="w-full" variant="default">Login</Button>
          <Button className="w-full" variant="default">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-google mr-2">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z" />
            </svg>
            Login with Google
          </Button>
        </form>
      </TabsContent>
      <TabsContent value="register" className="border-0">
        <form className="flex flex-col gap-2 text-start">
          <div>
            <Label>User</Label>
            <Input type="email" placeholder="John Abraham" />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="jondoe@gmail.com" />
          </div>
          <div>
            <Label>password</Label>
            <Input type="password" placeholder="*******" />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input type="text" placeholder="Enter your phone number" />
          </div>
          <Button className="w-full mt-5" variant="default">Register</Button>
          <Button className="w-full" variant="default">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-brand-google mr-2">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z" />
            </svg>
            Register with Google
          </Button>
        </form>
      </TabsContent>
    </Tabs>
  )
}
