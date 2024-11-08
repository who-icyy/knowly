import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import Login from "./login"
import Signup from "./signup"

export default function AuthPage() {
    return (
        <div className="flex justify-center items-center">
            <Tabs defaultValue="Sign In" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="Sign In">Sign In</TabsTrigger>
                    <TabsTrigger value="Sign Up">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="Sign In">
                    <Login />
                </TabsContent>
                <TabsContent value="Sign Up">
                    <Signup/>
                </TabsContent>
            </Tabs>
        </div>
    )
}
