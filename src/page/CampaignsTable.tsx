import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { selectCampaigns } from '../store/slice/campaignsSlice';
import PriceFilterSlider from '../component/PriceFilterSlider';

const CampaignsTable: React.FC = () => {
  const { profileId } = useParams();
  const campaigns = useSelector(selectCampaigns);
  const [filteredCampaigns, setFilteredCampaigns] = useState(campaigns);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage] = useState(10);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [paginatedCampaigns, setPaginatedCampaigns] = useState([]);

  useEffect(() => {
    filterCampaignsByPrice();
  }, [campaigns, profileId, currentPage, itemsPerPage, priceRange]);

  const filterCampaignsByPrice = () => {
    const updatedFilteredCampaigns = campaigns.filter(campaign => campaign.profileId === profileId && campaign.cost >= priceRange[0] && campaign.cost <= priceRange[1]);
    setFilteredCampaigns(updatedFilteredCampaigns);
    updatePaginatedCampaigns(updatedFilteredCampaigns);
  };

  const updatePaginatedCampaigns = (filteredCampaigns) => {
    const offset = currentPage * itemsPerPage;
    const paginatedCampaigns = filteredCampaigns.slice(offset, offset + itemsPerPage);
    setPaginatedCampaigns(paginatedCampaigns); 
  };

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
    filterCampaignsByPrice();
  };

  const handlePriceFilterChange = (newPriceRange: [number, number]) => {
    setPriceRange(newPriceRange);
    filterCampaignsByPrice();
  };


  return (
    <>
      <PriceFilterSlider campaigns={campaigns} onPriceChange={handlePriceFilterChange}/>
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