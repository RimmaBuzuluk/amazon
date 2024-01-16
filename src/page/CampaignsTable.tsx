// src/components/CampaignsTable.tsx
import React, { useState } from 'react';
import { Table, Form as RouterForm, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactPaginate from "react-paginate";
import { selectCampaigns } from '../store/slice/campaignsSlice';

const CampaignsTable: React.FC = () => {
  const { profileId } = useParams();
  const campaigns = useSelector(selectCampaigns);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  // You may need to adjust this logic based on your data structure
  const filteredCampaigns = campaigns.filter(campaign => campaign.profileId === profileId);

  const offset = currentPage * itemsPerPage;
  const paginatedCampaigns = filteredCampaigns.slice(offset, offset + itemsPerPage);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ fontSize: '30px' }}>Campaign ID</th>
            <th style={{ fontSize: '30px' }}>Clicks</th>
            <th style={{ fontSize: '30px' }}>Cost</th>
            <th style={{ fontSize: '30px' }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {paginatedCampaigns.map((campaign) => (
            <tr key={campaign.campaignId}>
              <td style={{ fontSize: '30px' }}>{campaign.campaignId}</td>
              <td style={{ fontSize: '30px' }}>{campaign.clicks}</td>
              <td style={{ fontSize: '30px' }}>{campaign.cost}</td>
              <td style={{ fontSize: '30px' }}>{campaign.date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={Math.ceil(filteredCampaigns.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'pagination justify-content-center mt-4 align-items-end'}
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

export default CampaignsTable;
