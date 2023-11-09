'use client'

import { ArrowRight } from "lucide-react"
import { SignInButton } from "@clerk/clerk-react"
import { Button } from "../ui/button"
import { useConvexAuth } from "convex/react"
import { Spinner } from "../Spinner"
import Link from "next/link"

const Heading = () => {

  const {isAuthenticated, isLoading} = useConvexAuth()

  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
         Your Ideas, Documents, & Plans. Unified. Welcome to
         <span className="underline text-indigo-500"> Elixir</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
       Elixir is the connected workspace where <br />
       better, faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg"/>
        </div>
      )}
      {isAuthenticated && (
        <Button variant='purple' asChild>
          <Link href="/documents">
          Enter  Elixir
          <ArrowRight className="h-4 w-4 ml-2"/>
          </Link>
       </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button variant={"purple"}>
            Get Elixir free
            <ArrowRight className="h-4 w-4 ml-2"/>
          </Button>
        </SignInButton>
      )}
    </div>
  )
}

export default Heading
