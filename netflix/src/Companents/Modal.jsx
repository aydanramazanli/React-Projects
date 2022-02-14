import React, {useRef, useMemo} from 'react'
import SDK from './Sdk'
import shortid from "shortid";


export default function Modal({closeModal, media_type, id, datas}) {
    const sdk = new SDK();
    const list = useRef(null)


    const add=async(e) => {
        e.preventDefault();
        const id = list.current.value
        const listData={
            items : [
            {
                media_type: media_type,
                media_id: id
            }
        ]}

        try{
             await sdk.addItem(id, listData)
        }
        catch(error){
            console.log(error)
        }

        if (listData) {
            alert('Movie to list added')
        }
    }

    const Lists = useMemo(() => {
        return (
            datas?.results.map((e) => {
                return (
                    <option key={shortid.generate()} value={e?.id}>{e?.name}</option>
                )
            })
        )
    }, [datas])



  return (
    <>
<div className="main-modal">
    <div className="main-body" onClick={() => closeModal(false)}> 
    <form action="" onSubmit={add}>
        <select ref={list} name="" id="">
        <option value="0" selected>Select list</option>
        {Lists}
        </select>
        <button> Add Item</button>
    </form>
    </div>
</div>
    
    </>
  )
}
