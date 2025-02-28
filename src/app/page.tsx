import Link from "next/link";

import { Button } from "@/components/ui/button";

import RestaurantPage from "./[slug]/page";


const HomePage=  () => {
  
  return (

  <div className="flex flex-col items-center justify-center h-screen space-x-4 p-10">
    <Button>
      <Link href={`/${RestaurantPage}`}>
      </Link>
    </Button>

      <h1 className="font-black">Home Page</h1>

  </div>

  )
};

export default HomePage;
