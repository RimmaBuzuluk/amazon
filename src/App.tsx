import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import AccountsTable from './page/AccountTable';
import ProfilesTable from './page/ProfilesTable';
import CampaignsTable from './page/CampaignsTable';
import { Container } from 'react-bootstrap';
import "./App.css"

function App() {
  return (
      <Router>
        <Container>
          <Header />
          <div className='App'>
          <Routes>
            <Route path="/" element={<AccountsTable />} />
            <Route path="/profile/:accountId" element={<ProfilesTable />} />
            <Route path="/compaigns/:profileId" element={<CampaignsTable />} />
          </Routes>
          </div>
        </Container>
      </Router>
  );
}

export default App;
