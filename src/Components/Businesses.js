/* eslint-disable no-script-url */
import React from 'react';
import {Link} from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';


const rows = JSON.parse(localStorage.getItem("businesses")) ? JSON.parse(localStorage.getItem("businesses")): [] ;


export default function Businesses() {
  return (
    <React.Fragment>
      <Title>Business Listings</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>URL</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Views</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length !== 0 ? (rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.description}</TableCell>
              <TableCell>{row.businessCategory ? row.businessCategory.map(category => <div>{category}</div>) : ''}</TableCell>
              <TableCell>{row.url}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.views? row.views : 3}</TableCell>
            </TableRow>
          ))) : <p>Business list is empty click <Link to={'/admin/createbusiness'}>here</Link> to create one</p> }
        </TableBody>
      </Table>
    </React.Fragment>
  );
}