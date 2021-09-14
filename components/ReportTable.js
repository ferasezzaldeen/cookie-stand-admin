export default function ReportTable({hours,reports}) {
    console.log(reports)
    let totalOfHours=[0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    let totalOfTotal=0
    return (
        <div className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
            
                    <table >
                        
                        <thead >
                            <tr className='border border-collapse border-black table-auto'>
                                    <th>Location</th>
                                    {hours.map((item,index)=>{
                                        return (
                                            <th className='border border-collapse border-black table-auto'>{item}</th>
                                        )
                                    })}
                                    <th className='border border-collapse border-black table-auto'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                             {reports.map((item,index)=>{
                                 
                                 let total=0

                                 return (
                                 
                                     <tr className='border border-collapse border-black table-auto'>
                                     <td className='border border-collapse border-black table-auto '>{item.location}</td>
                                     {item.hourly_sales.map((x,index)=>{
                                         total=total+x
                                         totalOfHours[index]=totalOfHours[index]+x
                                         return (
                                            
                                             <td className='border border-collapse border-black table-auto '>{x}</td>
                                         )
                                     })}
                                     <td className='border border-collapse border-black table-auto '>{total}</td>
                                     </tr>
                                 )
                             })}       

                        </tbody>                
                        <tfoot>
                            <tr className='border border-collapse border-black table-auto '>
                            <td className='border border-collapse border-black table-auto ' >TOTAL</td>
                            {totalOfHours.map((x)=>{
                                totalOfTotal=totalOfTotal+x
                                return (<td className='border border-collapse border-black table-auto '>{x}</td>)
                            })}
                            <td className='border border-collapse border-black table-auto '>{totalOfTotal}</td>
                            </tr>
                        </tfoot>         

                    </table>
         
        </div>
    )
}