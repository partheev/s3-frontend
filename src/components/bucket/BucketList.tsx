import { useEffect, useState } from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Axios } from '../../utils/Axios'
import { routes } from '../../utils/routes'

interface BucketItem {
    Name: string
    CreationDate: string
}

export function BucketList() {
    const [bucketList, setbucketList] = useState<BucketItem[]>([])
    const fetchBucketList = async () => {
        try {
            const res = (await Axios.get(routes.getBuckets)) as any
            setbucketList(res.data.bucketsList.Buckets)
        } catch (err) {}
    }

    useEffect(() => {
        fetchBucketList()
    }, [])

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label='simple table'>
                <TableHead>
                    <TableRow>
                        <TableCell>Bucket Name</TableCell>
                        <TableCell align='right'>Creation Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {bucketList.map((bucket) => (
                        <TableRow
                            key={bucket.Name}
                            sx={{
                                '&:last-child td, &:last-child th': {
                                    border: 0,
                                },
                            }}
                        >
                            <TableCell component='th' scope='row'>
                                {bucket.Name}
                            </TableCell>
                            <TableCell align='right'>
                                {new Date(bucket.CreationDate).toLocaleString()}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
