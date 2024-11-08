"use client"
import * as React from "react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function Languages() {
    const [level, setLevel] = useState("");
    const [language, setLanguage] = useState("");
    const languages = [
        "C", "C++", "Java", "Python", "Javascript", "RUST", "Go", "Kotlin"
    ];
    return (
        <div className="flex justify-center items-center align-middle mt-32">
            <Card className="w-[500px] h-[300px]">
                <CardHeader>
                    <CardTitle>Choose Programming Language</CardTitle>
                    <CardDescription>Get started with your favorite language.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Level</Label>
                                <Select onValueChange={(val) => setLevel(val)}>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="basic">Basic</SelectItem>
                                        <SelectItem value="intermediate">Intermediate</SelectItem>
                                        <SelectItem value="advance">Advance</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Programming Language</Label>
                                <Select onValueChange={(val) => setLanguage(val)}>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        {
                                            languages.map((val) =>

                                                <SelectItem key={val} value={val}>
                                                    {val}
                                                </SelectItem>
                                            )
                                        }
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Continue</Button>
                </CardFooter>
            </Card>
        </div>
    );
}
