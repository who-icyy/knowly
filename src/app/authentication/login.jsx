import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export default function Login() {
    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>Logging In</CardTitle>
                    <CardDescription>
                        Log In to your Knowly Account.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                    <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input  id="email" defaultValue="" />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" defaultValue="" />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button>Sign In</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
