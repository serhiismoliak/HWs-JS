const TransactionsTableHistory = ({items=[]}) => {
    return (
        <table className="w-128 border-collapse border border-black table-fixed"> 
            <thead className="**:border">
                <tr className="bg-black text-white">
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody className="text-center **:border">
                {items.map(item => (
                    <tr key={item.id} className="even:bg-neutral-300">
                        <td className="text-left pl-12">{item.type}</td>
                        <td className="text-center">{item.amount}</td>
                        <td className="text-center">{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
export default TransactionsTableHistory