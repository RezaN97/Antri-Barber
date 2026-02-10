const TableAntrian = () => {
    return (
        <>
        {/* antrian onsite */}
                         <div className="w-full  h-auto flex flex-col justify-center mt-2">
                        <h1 className="text-center mb-2 uppercase text-lg text-slate-700">antrian terbaru </h1>
                        <table className="w-full ">
                            <thead>
                                <tr>
                                    <th className="border-2 p-2">No</th>        
                                    <th className="border-2 p-2">Name</th>
                                    <th className="border-2 p-2">Barber</th>
                                    <th className="border-2 p-2">Service</th>
                                    <th className="border-2 p-2">Status</th>
                               </tr>
                            </thead>
                            <tbody> 
                                <tr>
                                    <td className="border-2 p-2">1</td>        
                                    <td className="border-2 p-2">Doni</td>
                                    <td className="border-2 p-2">Nico</td>
                                    <td className="border-2 p-2">Dewasa</td>  
                                    <td className="border-2 p-2 bg-green-400">Selesai</td>  
                                 </tr>
                                <tr>
                                    <td className="border-2 p-2">2</td>        
                                    <td className="border-2 p-2">Jono</td>
                                    <td className="border-2 p-2">Nico</td>
                                    <td className="border-2 p-2">Dewasa</td>  
                                    <td className="border-2 p-2 bg-amber-300">Proses</td>  
                                 </tr>
                                <tr>
                                    <td className="border-2 p-2">3</td>        
                                    <td className="border-2 p-2">Gilang</td>
                                    <td className="border-2 p-2 ">Nico</td>
                                    <td className="border-2 p-2">Dewasa</td>  
                                    <td className="border-2 p-2 bg-red-500">Antrian</td>  
                                 </tr>
                            </tbody>     
                        </table>
                    </div>

                    {/* antiran booking */}

                    <div className="flex w-full justify-center flex-col mt-3">
                        <h1 className="uppercase text-center">antrian booking</h1>
                        <table>
                            <thead>
                                <tr>
                                    <th className="border-2 p-2">ID</th>
                                    <th className="border-2 p-2">Name</th>
                                    <th className="border-2 p-2">Time</th>
                                    <th className="border-2 p-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border-2 p-2">NC-001</td>
                                    <td className="border-2 p-2">Robert</td>
                                    <td className="border-2 p-2">14:00</td>
                                    <td className="border-2 p-2">Online</td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td className="border-2 p-2">NC-002</td>
                                    <td className="border-2 p-2">Jono</td>
                                    <td className="border-2 p-2">14:30</td>
                                    <td className="border-2 p-2">Walk-in</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
        
        </>
    )
}
    export default TableAntrian;