import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import AccountsTable from './page/AccountTable';
import ProfilesTable from './page/ProfilesTable';
import CampaignsTable from './page/CampaignsTable';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className='App'>
      <Router>
        <Container>
          <Header />
          <Routes>
            <Route path="/" element={<AccountsTable />} />
            <Route path="/profiles" element={<ProfilesTable />} />
            <Route path="/campaigns/:profileId" element={<CampaignsTable />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
