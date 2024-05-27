import { getViewAllStore } from "@/utils/getViewAllStore"

const ViewAllStore = async() => {
    const stores = await getViewAllStore()
    // console.log(stores);
  return (
    <div>
      <h3 className="text-xl bg-gray-400 text-white font-semibold p-2">
        All Store: {stores.length}
      </h3>
      <div className="bg-gray-200 p-2 h-[500px] overflow-scroll overflow-x-hidden">
        {stores.map((store) => (
          <div key={store._id}>
            <div className="border border-gray-300 text-center">
              <h5 className="py-2">
                Sub Category: <strong>{store.storeName}</strong>
              </h5>
              <div className="py-2">
                {store?.ownerId.map(item=>(
                    <div key={item._id}>
                        <p>Store Name: {item.name}</p>
                    </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewAllStore