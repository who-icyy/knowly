import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function LanguageCard(props) {
    return (
        <div>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>{props.name}</CardTitle>
                    <CardDescription>{props.level}</CardDescription>
                </CardHeader>
                <CardContent>
                    
                    <Progress value={props.progress} className="w-[60%]" />                    
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Continue</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
