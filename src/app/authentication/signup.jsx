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

export default function SignUp() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>New User??</CardTitle>
                <CardDescription>
                    Register now on knowly to start learning.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                    <Label htmlFor="current">Name</Label>
                    <Input id="current" type="name" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="current">Email</Label>
                    <Input id="current" type="name" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="new">New password</Label>
                    <Input id="new" type="password" />
                </div>
                <div className="space-y-1">
                    <Label htmlFor="new">Confirm password</Label>
                    <Input id="new" type="password" />
                </div>
            </CardContent>
            <CardFooter>
                <Button>Save password</Button>
            </CardFooter>
        </Card>
    )
}