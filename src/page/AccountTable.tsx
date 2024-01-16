import React, { useState } from 'react';
import { Button, FormControl, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectAccounts } from '../store/slice/accountSlice';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactPaginate from "react-paginate";

const AccountsTable: React.FC = () => {
  const accounts = useSelector(selectAccounts);
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(0);
  const [filterEmail, setFilterEmail] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterEmail(e.target.value.toLowerCase());
  };

  const handleSort = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortByDate = (a: any, b: any) => {
    const dateA = new Date(a.creationDate).getTime();
    const dateB = new Date(b.creationDate).getTime();

    return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
  };

  const offset = currentPage * itemsPerPage;

  let filteredAndSortedAccounts = [...accounts];

  // Фільтрація за емейлом
  if (filterEmail) {
    filteredAndSortedAccounts = filteredAndSortedAccounts.filter(account =>
      account.email.toLowerCase().includes(filterEmail)
    );
  }

  // Сортування за датою
  filteredAndSortedAccounts.sort(sortByDate);

  const paginatedAccounts = filteredAndSortedAccounts.slice(offset, offset + itemsPerPage);

  return (
    <>
      <FormControl
        type="email"
        placeholder="Filter by email"
        className="mt-4"
        onChange={handleFilter}
      />
      <div className="mt-2 mb-2">
        <Button variant="primary" onClick={handleSort}>
          Sort by Creation Date {sortOrder === 'asc' ? '▲' : '▼'}
        </Button>
      </div>
      <Table striped bordered hover responsive="md" className="mt-4 mx-auto">
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
        pageCount={Math.ceil(filteredAndSortedAccounts.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination justify-content-center mt-4 align-items: end;'}
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
