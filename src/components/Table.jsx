
import React from 'react'




const Table = () => {
  return (
    <table>
    <thead>
      <tr>
        <th>국가명</th>
        <th>금메달</th>
        <th>은메달</th>
        <th>동메달</th>
        <th>액션</th>
      </tr>
    </thead>
    <tbody>
      <tr className="odd">
        <td>대한민국</td>
        <td>100</td>
        <td>30</td>
        <td>50</td>
        <td><button>삭제</button></td>
      </tr>
      <tr className="even">
        <td>미국</td>
        <td>80</td>
        <td>20</td>
        <td>10</td>
        <td><button>삭제</button></td>
      </tr>
      <tr>
        <td>중국</td>
        <td>30</td>
        <td>20</td>
        <td>10</td>
        <td><button>삭제</button></td>
      </tr>
    </tbody>
  </table>
  )
}

export default Table
