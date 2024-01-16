import React, { useState } from 'react';
import { Table, Form as RouterForm, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectProfiles } from '../store/slice/profileSlice';
import ReactPaginate from "react-paginate";

const ProfilesTable: React.FC = () => {
  const { accountId } = useParams();
  const profiles = useSelector(selectProfiles);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 5;

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };


  // we create a state to store selected countries and markets
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<string[]>([]);

  // We filter profiles by accountId
  const filteredProfiles = profiles.filter(profile => profile.accountId === accountId);

  // Function for processing changes in the country filter
  const handleCountryChange = (country: string) => {
    setSelectedCountries(prevState => {
      if (prevState.includes(country)) {
        return prevState.filter(selectedCountry => selectedCountry !== country);
      } else {
        return [...prevState, country];
      }
    });
  };

  // A function to process changes in the markets filter
  const handleMarketplaceChange = (marketplace: string) => {
    setSelectedMarketplaces(prevState => {
      if (prevState.includes(marketplace)) {
        return prevState.filter(selectedMarketplace => selectedMarketplace !== marketplace);
      } else {
        return [...prevState, marketplace];
      }
    });
  };

  // We filter profiles by selected countries and markets
  const finalFilteredProfiles = filteredProfiles.filter(profile => {
    return (
      (selectedCountries.length === 0 || selectedCountries.includes(profile.country)) &&
      (selectedMarketplaces.length === 0 || selectedMarketplaces.includes(profile.marketplace))
    );
  });

  const offset = currentPage * itemsPerPage;
const paginatedProfiles = finalFilteredProfiles.slice(offset, offset + itemsPerPage);
  return (
    <>
      <RouterForm className="mb-4 mt-4">
        <RouterForm.Group as={Row} controlId="formHorizontalCountries">
          <RouterForm.Label column sm={2} style={{ fontSize: '25px' }}>
            Countries
          </RouterForm.Label>
          <Col sm={10}>
            {['Ukraine', 'USA', 'Germany', 'France'].map(country => (
              <RouterForm.Check
                key={country}
                type="checkbox"
                label={country}
                checked={selectedCountries.includes(country)}
                onChange={() => handleCountryChange(country)}
                style={{ fontSize: '25px', marginLeft: '100px'}}
              />
            ))}
          </Col>
        </RouterForm.Group>

        <RouterForm.Group as={Row} controlId="formHorizontalMarketplaces">
          <RouterForm.Label column sm={2} style={{ fontSize: '25px' }}>
            Marketplaces
          </RouterForm.Label>
          <Col sm={10}>
            {['Amazon', 'prom', 'Rozetka', 'OLX', 'AliExpress'].map(marketplace => (
              <RouterForm.Check
                key={marketplace}
                type="checkbox"
                label={marketplace}
                checked={selectedMarketplaces.includes(marketplace)}
                onChange={() => handleMarketplaceChange(marketplace)}
                style={{ fontSize: '25px' , marginLeft: '100px'}}
              />
            ))}
          </Col>
        </RouterForm.Group>
      </RouterForm>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ fontSize: '30px' }}>Profile ID</th>
            <th style={{ fontSize: '30px' }}>Country</th>
            <th style={{ fontSize: '30px' }}>Marketplace</th>
          </tr>
        </thead>
        <tbody>
        {paginatedProfiles.map((profile) => (
          <tr key={profile.profileId}>
            <td style={{ fontSize: '30px' }}>{profile.profileId}</td>
            <td style={{ fontSize: '30px' }}>{profile.country}</td>
            <td style={{ fontSize: '30px' }}>{profile.marketplace}</td>
          </tr>
        ))}
      </tbody>
      </Table>
      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={Math.ceil(finalFilteredProfiles.length / itemsPerPage)}
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

export default ProfilesTable;
