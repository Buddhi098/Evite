import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { visuallyHidden } from "@mui/utils";
import PendingIcon from '@mui/icons-material/HourglassEmpty';
import AcceptedIcon from '@mui/icons-material/CheckCircleOutline';
import OngoingIcon from '@mui/icons-material/Autorenew';
import CompletedIcon from '@mui/icons-material/CheckCircle';
import { headCells, additionalFields } from "./TableConfig";
import OrderDialog from "./OrderDialog";

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {headCell.disableSort ? (
              headCell.label
            ) : (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const statusIcons = {
  accepted: <AcceptedIcon style={{ color: '#008000' }} />,
  ongoing: <OngoingIcon style={{ color: '#1E90FF' }} />,
  completed: <CompletedIcon style={{ color: '#4CAF50' }} />,
};

export default function TableComponent({ rows }) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('orderId');
  const [page, setPage] = useState(0);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [tab, setTab] = useState(0);
  const [selectedRow, setSelectedRow] = React.useState(null); 
  const [open, setOpen] = React.useState(false); 
  const [dialogOpen, setDialogOpen] = useState(false);


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleRowClick = (row) => {
    setSelectedRow(row);
    setDialogOpen(true);
  };

  const handleClose = () => {
    setDialogOpen(false);
    setSelectedRow(null); // Optionally clear selected row on close
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const handleTabChange = (event, newValue) => {
    setTab(newValue);
  };

  const filterRows = () => {
    const statusMap = ['all','accepted', 'ongoing', 'completed'];
    const status = statusMap[tab];
    if (status === 'all') return rows;
    return rows.filter(row => row.status.toLowerCase() === status.toLowerCase());
  };

  const filteredRows = filterRows();
  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - filteredRows.length) : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <Tabs value={tab} onChange={handleTabChange}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#C0A888", 
            },
            "& .MuiTab-root": {
              color: "#000",
            },
            "& .MuiTab-root.Mui-selected": {
              color: "#C0A888", 
            },
          }}>
          <Tab label="All Orders" />
          <Tab label="Courier Accepted Orders" />
          <Tab label="Ongoing Orders" />
          <Tab label="Completed Orders" />
        </Tabs>

        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(filteredRows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover onClick={() => handleRowClick(row)} tabIndex={-1} key={row.id} sx={{ cursor: "pointer" }}>
                      <TableCell
                          align="left"
                          component="th"
                          id={labelId}
                          scope="row"
                          padding="none"
                          colSpan={2} // This merges the two cells
                        >
                          <div style={{ display: "flex", alignItems: "center" }}>
                            <img src={row.imageUrl} alt={row.info} width={50} style={{ marginRight: 10, marginLeft: 25}} />
                            <div>
                              {row.info}
                              <div style={{ fontSize: "0.75em", color: "#888" }}>
                                Order ID: {row.orderId}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell align="right">{row.customerName}</TableCell>
                        <TableCell align="right">{row.courier}</TableCell>
                        <TableCell align="right">{row.quantity}</TableCell>
                        <TableCell align="right">{row.price}</TableCell>
                        <TableCell align="right">{row.ordered_date}</TableCell>
                        <TableCell align="center">{statusIcons[row.status.toLowerCase()]}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
        <OrderDialog
        open={dialogOpen}
        handleClose={handleClose}
        selectedRow={selectedRow}
      />
    </Box>
  );
}
