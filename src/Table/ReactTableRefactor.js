import React from "react";
import Table from "./Table"



const columns = [
  {
    Header: 'Things to Do',
    accessor: 'item',
  },
  {
    Header: '2020-04-01',
    accessor: 'date.2020-04-01',
  },
  {
    Header: '2020-04-02',
    accessor: 'date.2020-04-02',
  },
  {
    Header: '2020-04-03',
    accessor: 'date.2020-04-03',
  },
  {
    Header: '2020-04-04',
    accessor: 'date.2020-04-04',
  },
    

];



const data = [
  {
    item: 'Do a thing',
    date: {
      '2020-04-01': 'Y',
      '2020-04-02': 'Y',
      '2020-04-03': 'N',
      '2020-04-04': 'Y',
    },
  },
  {
    item: 'Do a second thing',
    date: {
      '2020-04-01': '',
      '2020-04-02': 'Y',
      '2020-04-03': 'NS',
      '2020-04-04': 'Y',
    }
  },
  {
    item: 'Do a third thing',
    date: {
      '2020-04-01': 'N',
      '2020-04-02': 'Y',
      '2020-04-03': 'Y',
      '2020-04-04': '0',
    },
  },
];




class ReactTableRefactor extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {

  
    return (
      <div className="App">
        <Table columns={columns} data={data} />
      </div>
          
      );
  }

    
}


export default ReactTableRefactor;







