import useResource from '../hooks/useResource'


export default function ReportTable({hours,reports,}) {
    const { resources, createResource, deleteResource , } = useResource(); 
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
                                     <td className='flex flex-row border border-collapse border-black table-auto '>{item.location} {<svg onClick={()=>deleteResource(item.id)} xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
</svg>} </td>
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