
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const navigate = useNavigate()

    return (
        <div className="min-h-screen bg-background flex flex-col">
            <div className="p-6">
                <Button variant="ghost" size="sm" onClick={() => navigate('/')} className="gap-2">
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Button>
            </div>

            <div className="flex-1 flex items-center justify-center p-4">
                <Card className="w-full max-w-md shadow-2xl border-none bg-card">
                    <CardHeader className="space-y-4 items-center text-center">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-2">
                            <Eye className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div className="space-y-2">
                            <CardTitle className="text-2xl font-serif">Welcome back</CardTitle>
                            <CardDescription>
                                Sign in to your KhojIQ account
                            </CardDescription>
                        </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" placeholder="name@boutique.com" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <Label htmlFor="password">Password</Label>
                                <a href="#" className="text-sm text-primary hover:underline">
                                    Forgot password?
                                </a>
                            </div>
                            <Input id="password" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-4">
                        <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => navigate('/client')}>Sign In</Button>
                        <div className="text-center text-sm text-muted-foreground">
                            Don't have an account?{' '}
                            <a href="#" className="text-primary hover:underline font-medium">
                                Request access
                            </a>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}

export default SignIn
