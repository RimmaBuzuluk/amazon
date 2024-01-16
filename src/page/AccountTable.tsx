import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectAccounts } from '../store/slice/accountSlice';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from "react-paginate";

const AccountsTable: React.FC = () => {
  const accounts = useSelector(selectAccounts);
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const offset = currentPage * itemsPerPage;
  const paginatedAccounts = accounts.slice(offset, offset + itemsPerPage);

  return (
    <>
      <Table striped bordered hover responsive="md" className="mmt-4 mx-auto w-100 table-responsive">
        <thead>
          <tr>
            <th>Account ID</th>
            <th>Auth Token</th>
            <th>Email</th>
            <th>Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {paginatedAccounts.map((account) => (
            <tr key={account.accountId}>
              <td>{account.accountId}</td>
              <td>{account.authToken}</td>
              <td>{account.email}</td>
              <td>{account.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={Math.ceil(accounts.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination justify-content-center mt-4 align-items: end'}  // Додаємо Bootstrap класи
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousClassName={'page-item'}
        nextClassName={'page-item'}
        previousLinkClassName={'page-link'}
        nextLinkClassName={'page-link'}
        activeClassName={'active'}
      />
    </>
  );
};

export default AccountsTable;
