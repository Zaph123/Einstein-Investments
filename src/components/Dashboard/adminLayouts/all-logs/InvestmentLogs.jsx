

const InvestmentLogs = () => {
  const Table = [
    {
      id: 1,
      name: `row ${1}`,
      values: [
        {
          id: 1,
          value: '0001',
        },
        {
          id: 2,
          value: "Einstein"
        },
        {
          id: 3,
          value: "Paystack"
        },
        {
          id: 4,
          value: "$500.00"
        },
        {
          id: 5,
          value: "$USDT"
        },
        {
          id: 6,
          value: "$5.00"
        },
        {
          id: 7,
          value: "20/07/31"
        },
      ]
    }
  ]

  return (
    <div className="w-full h-full p-[30px]">
      <div className="w-full flex flex-col items-center  gap-10 p-10">
        <div className="w-full flex items-center justify-between">
         <h1 className="font-bold text-[1.2rem]">All Deposits</h1>
         <div className="w-auto flex items-center gap-10">
          <button className="px-10 py-5 shadow-[0_10px_10px_rgb(99,102,241,0.35)] bg-main_blue text-white rounded-[10px]">Search</button>
          </div>
        </div>
        <div className="w-full bg-white p-10 rounded-[10px] h-[250px]">
         <table className="w-full border-collapse border-spacing-4 table-auto">
          <tr className="bg-[#f1f1f1] text-[1rem] text-left h-50">
            <th className="px-10 py-5">Trx</th>
            <th className="px-10 py-5">User</th>
            <th className="px-10 py-5">Gateway</th>
            <th className="px-10 py-5">Amount</th>
            <th className="px-10 py-5">Currency</th>
            <th className="px-10 py-5">Charge</th>
            <th className="px-10 py-5">Payment Date</th>
          </tr>
          {Table.map(table => {
            return (
              <tr className="h-30">
                {table.values.map(t => {
                  return (
                    <td className="px-10 py-5 text-[#797979]">{t.value}</td>
                  )
                })}
              </tr>
            )
          })}
         </table>
        </div>
      </div>
    </div>
  )
}

export default InvestmentLogs
