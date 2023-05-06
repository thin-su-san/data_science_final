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
        sortable: true
    },
    {
        name: 'Happiness Rank',
        selector: row => row.HappinessRank,
        sortable: true
    }
];