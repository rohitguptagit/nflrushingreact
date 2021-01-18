import { render } from '@testing-library/react';
import DataTable from './DataTable';

const rushingData = [
    {
      "Player":"Joe Banyard",
      "Team":"JAX",
      "Pos":"RB",
      "Att":2,
      "Att/G":2,
      "Yds":7,
      "Avg":3.5,
      "Yds/G":7,
      "TD":0,
      "Lng":"7",
      "1st":0,
      "1st%":0,
      "20+":0,
      "40+":0,
      "FUM":0
    },
    {
      "Player":"Shaun Hill",
      "Team":"MIN",
      "Pos":"QB",
      "Att":5,
      "Att/G":1.7,
      "Yds":5,
      "Avg":1,
      "Yds/G":1.7,
      "TD":0,
      "Lng":"9",
      "1st":0,
      "1st%":0,
      "20+":0,
      "40+":0,
      "FUM":0
    },
    {
      "Player":"Breshad Perriman",
      "Team":"BAL",
      "Pos":"WR",
      "Att":1,
      "Att/G":0.1,
      "Yds":2,
      "Avg":2,
      "Yds/G":0.1,
      "TD":0,
      "Lng":"2",
      "1st":0,
      "1st%":0,
      "20+":0,
      "40+":0,
      "FUM":0
    }
]

let state = {
    data: rushingData,
      direction: {
        yds: 'desc',
        TD: 'desc',
        Lng: 'desc'
      }
}

//const dtComponent = render(<DataTable data={state.data}/>);

describe('Renders different parts of the DataTable Component', () => {
    it('renders the filter box correctly', () => {
        const dtComponent = render(<DataTable data={state.data}/>);
        expect(dtComponent.getByTestId('filterBox-test')).toBeInTheDocument();
    });
    it('renders the export button correctly', () => {
        const dtComponent = render(<DataTable data={state.data}/>);
        expect(dtComponent.getByTestId('exportButton-test')).toBeInTheDocument();
    });
    it('renders the data table correctly', () => {
        const dtComponent = render(<DataTable data={state.data}/>);
        expect(dtComponent.getByTestId('dataTable-test')).toBeInTheDocument();
    });
});