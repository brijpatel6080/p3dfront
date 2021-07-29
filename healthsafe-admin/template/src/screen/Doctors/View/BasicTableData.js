const BasicTableData = () => {
  const header = [
    // { id: 1, title: '#' },
    { id: 2, title: "First Name" },
    { id: 3, title: "Last Name" },
    // { id: 4, title: "Username" },
    // { id: 5, title: "Status" },
  ];

  const headerResponsive = [
    // { id: 1, title: '#' },
    { id: 2, title: "First Name" },
    { id: 3, title: "Last Name" },
    // { id: 4, title: "Username" },
    // { id: 5, title: "Age" },
    // { id: 7, title: "Date" },
    // { id: 8, title: "Location" },
    // { id: 9, title: "Status" },
  ];

  const rows = [
    {
      // id: 1,
      first: "Dhruv",
      last: "Bhatiya",
      username: "@dragon",
      status: "success",
      badge: "Work",
      age: "21",
      date: "1990/12/01",
      location: "Melbourne",
      status_resp: "success",
      badge_resp: "In Progress",
    },
  ];

  const basicTableData = {
    tableHeaderData: header,
    tableHeaderResponsiveData: headerResponsive,
    tableRowsData: rows,
  };
  return basicTableData;
};

export default BasicTableData;
