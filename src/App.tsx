import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider, createRouter } from '@tanstack/react-router'
import {CarouselPlugin} from './components/BannerCarousel'
import { routeTree } from './routeTree.gen'
import Header from './components/Header'
import Footer from "./components/Footer";

const queryClient = new QueryClient();
const router = createRouter({ routeTree , context : {queryClient}})


declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
function App() {




  return (
    <>
    <QueryClientProvider client={queryClient}>
          <div className="hidden lg:flex items-center justify-center h-screen text-2xl text-black">
            This website is only available on mobile devices.
          </div>
   
          <section className={`flex flex-col min-h-screen overflow-x:hidden md:hidden lg:hidden`}>
            <Header/>
          <CarouselPlugin/>
          <RouterProvider router={router} />
          <Footer/>
          </section>
     

    </QueryClientProvider>
    </>
  )
}

export default App


