import React from "react";
import Table from "./Table"


// https://stackoverflow.com/questions/53888948/react-table-individual-cell-style
// https://codesandbox.io/s/744n0nmvl0?file=/index.js:570-571 

// https://stackblitz.com/edit/how-to-add-a-style-element-inside-a-cell-when-the-text-inside-c?file=index.js - Doesn't seem to work because react-table doesn't come with a CSS file


const columns = [
  {
    Header: 'Things to Do',
    accessor: 'item',
    getProps: (rowInfo) => {
      return {
        style: {
            backgroundColor: rowInfo && rowInfo.row.item === 'Do a thing' ? 'red' : null,
        },
      }
    }
  },
  {
    Header: '2020-04-01',
    accessor: 'date.2020-04-01',
    getProps: (rowInfo) => {
      return {
        style: {
          backgroundColor: rowInfo && rowInfo.row['date.2020-04-01'] === 'Y' ? 'red' : null,
        },
      }
    }
  },
  {
    Header: '2020-04-02',
    accessor: 'date.2020-04-02',
    getProps: (rowInfo) => {
      return {
        style: {
          backgroundColor: rowInfo.row["date.2020-04-02"] === 'Y' ? 'green' : null,
        },
      }
    }
  },
  {
    Header: '2020-04-03',
    accessor: 'date.2020-04-03',
    
  },
  {
    Header: '2020-04-04',
    accessor: 'date.2020-04-04'
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
      '2020-04-01': 'N',
      '2020-04-02': 'Y',
      '2020-04-03': 'Y',
      '2020-04-04': 'Y',
    }
  },
  {
    item: 'Do a third thing',
    date: {
      '2020-04-01': 'N',
      '2020-04-02': 'Y',
      '2020-04-03': 'N',
      '2020-04-04': 'N',
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







