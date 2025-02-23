import { LoginForm } from "@/components/login"
import Image from "next/image"


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-background m-0">
        <div className="w-24 h-24 relative rounded-lg overflow-hidden mb-4">
          <Image
            src='/logo.png'
            alt="Photo of logo"
            layout="fill"
            objectFit="cover"
          />
        </div>
      <h3 className="text-2xl font-bold mb-8 text-center">Welcome to AASTU <br/>Smart ID System</h3>
      <LoginForm />
    </main>
  )
}
