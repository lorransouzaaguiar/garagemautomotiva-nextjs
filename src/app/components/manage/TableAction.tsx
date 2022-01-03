import { Icon, IconButton, Td } from "@chakra-ui/react"
import DeleteOutlineOutlined from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlined from '@material-ui/icons/EditOutlined';

const TableAction = () =>
    <Td >
        <IconButton
            size='sm'
            aria-label='delete'
            variant='outline'
            border='none'
            icon={<Icon as={DeleteOutlineOutlined}   />} 
            onClick={() => {
               
            }}
            />
        <IconButton
            size='sm'
            aria-label='edit'
            variant='outline'
            border='none'
            icon={<Icon as={EditOutlined} />} 
            onClick={() => console.log('clicando...')}
            />

    </Td>

export default TableAction