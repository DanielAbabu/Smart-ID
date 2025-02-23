"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"

export function LoginForm() {
  const [idNumber, setIdNumber] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!idNumber || !password) {
      alert("Please enter both ID and password.")
      return
    }

    let role = ""
    if (idNumber.startsWith("ETS")) {
      role = "student"
      router.push(`/${role}/${idNumber}`)
    } else if (idNumber.startsWith("ADMIN")) {
      role = "admin"
      router.push(`/${role}`)
    } else {
      alert("Invalid ID format. Please enter a valid student or admin ID.")
      return
    }
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Login</CardTitle>
        {/* <CardDescription>Enter your ID number and password to access the Smart ID System</CardDescription> */}
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="idNumber">ID Number</Label>
            <Input
              id="idNumber"
              type="text"
              placeholder="ETS-0001-12"
              value={idNumber}
              onChange={(e) => setIdNumber(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
