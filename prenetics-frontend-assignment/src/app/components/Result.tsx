import React, { useEffect, useState } from 'react'
import { Table,Paper,TableBody,TextField, TableHead, TableRow, TableCell, makeStyles, TablePagination, TableSortLabel,Toolbar, InputAdornment, Card, Typography  } from '@material-ui/core'
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Search } from "@material-ui/icons";
import useTable from "./useTable"
import ResultDataService from '../services/ResultServices';
import { IRestult } from '../types/ResultTypes';
import {useOrganizationContext} from '../hooks/useContext/organizationContext'
import { Constants } from '../config/consts';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    // searchInput: {
    //     width: '75%'
    // },
     root: {
        backgroundColor: '#fdfdff'
    },
    pageHeader:{
        padding:theme.spacing(4),
        display:'flex',
        marginBottom:theme.spacing(2)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subtitle2':{
            opacity:'0.6'
        }
    },
    searchInput: {
        width: '75%',
        
    //     padding: 7,
    // fontSize: "0.75rem",
        // opacity: '0.6',
        // padding: `0px ${theme.spacing(1)}px`,
        // fontSize: '0.8rem',
        // '&:hover': {
        //     backgroundColor: '#f2f2f2'
        // },
        // '& .MuiSvgIcon-root': {
        //     marginRight: theme.spacing(1)
        // }
    }
}))




const Result: React.FC = () => {
    const {name:OrganizationName}=useOrganizationContext();
    const isCircleOrgnization:boolean= OrganizationName && OrganizationName == Constants.Organization.cirlce? true:false;
    const headCells = [
        { id: 'name', label: 'Patient name' },
        { id: 'sampleId', label: 'Sample barcode' },
        { id: 'activateTime', label: 'Activation Date' },
        { id: 'resultTime', label: 'result date' },
        { id: 'result', label: 'result value', disableSorting: true,  },
        { id: 'resultType', label: 'Result Type', disableSorting: true,hidden:!isCircleOrgnization },
        { id: 'id', label: 'patient ID', disableSorting: true, hidden:!isCircleOrgnization },
        
        
    ]
   
    const classes = useStyles();
    const [records, setRecords] = useState<IRestult[]>([]);
    const [filterFn, setFilterFn] = useState({ fn: (items:IRestult[]) => { return items; } })
   console.log("records",records);
    const {
        TblContainer,
        TblHead,
        TblPagination,
        recordsAfterPagingAndSorting
    } = useTable(records, headCells, filterFn);
    const handleSearch = (e:any) => {
        const target = e.target;
        console.log(target);
        setFilterFn({
            fn: items => {
                if (target.value == "")
                    return items;
                else
                    return items.filter((x:IRestult) => x.profile.name.toLowerCase().includes(target.value)
                    ||  x.sampleId.toLowerCase().includes(target.value) ||  x.profile.id.toLowerCase().includes(target.value) 
                    || x.resultTime.toString().includes(target.value) || x.activateTime.toString().includes(target.value)
                    || isCircleOrgnization && x.profile.id.includes(target.value)
                    )
            }
        })
    }
    
    useEffect(()=>{
        ResultDataService.getAll().then((result)=>{
            console.log(result);
            setRecords(result);
        })

    },[])

    return (
        <>
           {/* <Paper elevation={0} square className={classes.root}>
            <div className={classes.pageHeader}>
               
                   
               
                <div className={classes.pageTitle}>
                    <Typography
                        variant="h6"
                        component="div">
                        Patient Management</Typography>
                    
                </div>
            </div>
        </Paper> */}
        {/* {name} */}
            <Paper className={classes.pageContent}>
                {/* <EmployeeForm /> */}
                <Toolbar>
            <TextField
            variant="outlined"
            label="Search Patient"
            name="Search Patient"
            size="small"
            className={classes.searchInput}
            InputProps={{
                startAdornment: (<InputAdornment position="start">
                    <Search />
                </InputAdornment>)
            }}        
            //value={value}
            onChange={handleSearch}
           />
                </Toolbar>
                <TblContainer>
                    <TblHead />
                    <TableBody>
                        {
                            recordsAfterPagingAndSorting().map((item:IRestult) =>
                                (<TableRow key={item.id}>
                                    <TableCell>{item.profile.name}</TableCell>
                                    <TableCell>{item.sampleId}</TableCell>
                                    <TableCell>{item.activateTime}</TableCell>
                                    <TableCell>{item.resultTime}</TableCell>
                                    <TableCell>{item.result}</TableCell>
                                    
                                    {isCircleOrgnization &&
                                    <>
                                    <TableCell>{item.resultType}</TableCell>
                                    <TableCell>{item.profile.id}</TableCell>
                                    </> }

                                        
                                   
                                </TableRow>)
                            )
                        }
                    </TableBody>
                </TblContainer>
                <TblPagination />
            </Paper>
        </>
        
    )

}

export default Result;
