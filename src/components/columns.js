const weights = {
    "A": 10000,
    "B": 1000,
    "C": 100,
    "D": 10,
    "+": 1,
    "-": -1
  }

  const gradingSort = (rowA, rowB) => {
    const a = rowA.HappinessGrade.split('').map(char => weights[char]).reduce((a,b) => a+b)
    const b = rowB.HappinessGrade.split('').map(char => weights[char]).reduce((a,b) => a+b)

    console.log('a')
    console.log(a);
    console.log('b')
    console.log(b);

    if (a > b) {
        return 1;
    }

    if (b > a) {
        return -1;
    }

    return 0;
  };

export const COLUMNS = [
    // {
    //     Header: 'Cluster',
    //     accessor: 'cluster'
    // }, 
    {
        name: 'University',
        selector: row => row.name,
        sortable: true
    },
    {
        name: 'GPA',
        selector: row => row.GPA,
        sortable: true
    },
    {
        name: 'Happiness Grade',
        selector: row => row.HappinessGrade,
        sortable: true,
        sortFunction: gradingSort
    },
    {
        name: 'Happiness Rank',
        selector: row => row.HappinessRank,
        sortable: true
    }
];