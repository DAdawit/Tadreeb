"use client";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchLatestTransactions } from "@/services/user";
import Pending from "@/common/status/Pending";
import Approved from "@/common/status/Approved";
import Rejected from "@/common/status/Rejected";
import moment from "moment";
const LastTransactions = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["fetchHarvests"],
    queryFn: fetchLatestTransactions,
  });
  return (
    <>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      <section className="container mx-auto px-5 sm:px-0 mt-7">
        <h1 className=" pl-2 font-medium py-2 text-lg text-gray-700">
          Last Transactions
        </h1>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  No
                </th>
                <th scope="col" className="px-6 py-3">
                  Round
                </th>
                <th scope="col" className="px-6 py-3">
                  From
                </th>
                <th scope="col" className="px-6 py-3">
                  To
                </th>
                <th scope="col" className="px-6 py-3">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                {/* <th scope="col" className="px-6 py-3">
                  Action
                </th> */}
              </tr>
            </thead>
            <tbody>
              {data?.results &&
                Array.isArray(data.results) &&
                data.count === 0 && <p>No Transactions yet .</p>}
              {data &&
                Array.isArray(data.results) &&
                data.results.map((transaction, index) => (
                  <tr key={index} className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {index + 1}
                    </th>
                    <td className="px-6 py-4">{transaction.round}</td>
                    <td className="px-6 py-4 capitalize whitespace-nowrap">
                      {transaction._from.first_name}{" "}
                      {transaction._from.last_name}
                    </td>
                    <td className="px-6 py-4 capitalize whitespace-nowrap">
                      {transaction._to.first_name} {transaction._to.last_name}
                    </td>
                    <td className="px-6 py-4">{transaction.amount}</td>
                    <td className="px-6 py-4">
                      <td className="px-6 py-4">
                        {transaction.status === "Pending" && <Pending />}
                        {transaction.status === "Received" && <Approved />}
                        {transaction.status === "Rejected" && <Rejected />}
                      </td>
                    </td>
                    <td className="px-6 py-4">
                      {" "}
                      {moment(transaction.created_at).format("MMM Do YY")}
                    </td>
                    {/* <td className="px-6 py-4">
                      {(index + 1) % 2 !== 0 ? (
                        <h2 className="border-2 border-green-400 px-4 py-2 rounded-full text-green-400 w-max">
                          Approved
                        </h2>
                      ) : (
                        <button className="bg-blue-400 px-4 py-2 rounded-full text-white w-max">
                          Approve transaction
                        </button>
                      )}
                    </td> */}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default LastTransactions;
