import React from 'react'

export default function Main() {
  return (
    <div className="w-96 h-80 bg-zinc-300 m-auto relative" >
    <div className="flex  w-full justify-center absolute bottom-2">
        <input type="text" placeholder="type" className="py-1.5 px-3 rounded mx-2 outline-none w-[70%]"  />
        <button type="button" className="bg-cyan-600 py-1.5 px-5 rounded text-slate-50 font-semibold">Entry</button>
    </div>
    </div>
  )
}
