import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/bingo')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex items-center justify-center p-2 bg-gray-100">
    
        <h1 className="text-xl font-[8px] text-center">No games found</h1>
    
    </div>
      )
}
