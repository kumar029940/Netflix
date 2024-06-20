import React from 'react'

function MyList({myList, sectionList}) {

    const Collections = sectionList.filter(list => myList[list.id])

  return (
    <div>
    <h2>My Collections</h2>
    {Collections.length > 0 ? (
        <div>
            {Collections.map((collection) => {
                return (
                    <div key = {collection.id}>
                        <img src = {collection.image} alt = {collection.title} />
                    </div>
                )
            })}
        </div>
    ):(
        <>Your List is Empty</>
    )}
    </div>
  )
}

export default MyList
