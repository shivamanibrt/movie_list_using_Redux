import { Container } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchForm } from './Components/SearchForm';
import Row from 'react-bootstrap/Row';
import { TableDisplay } from './Components/TableDisplay';


function App() {
  return (
    <div className="App bg-dark">
      <Container>
        <Row>
          <SearchForm />
        </Row>
        <TableDisplay />
      </Container>
    </div>
  );
}
export default App;
