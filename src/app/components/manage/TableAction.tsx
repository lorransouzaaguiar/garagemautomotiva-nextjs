import { Icon, IconButton, Td } from "@chakra-ui/react"
import DeleteOutlineOutlined from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlined from '@material-ui/icons/EditOutlined';

const TableAction = () =>
    <Td>
        <IconButton
            aria-label='delete'
            variant='outline'
            border='none'
            icon={<Icon as={DeleteOutlineOutlined} borderRadius='50px' w='45px' />} 
            onClick={() => {
               
            }}
            />
        <IconButton
            aria-label='edit'
            variant='outline'
            border='none'
            icon={<Icon as={EditOutlined} borderRadius='50px' w='45px' />} 
            onClick={() => console.log('clicando...')}
            />

    </Td>

export default TableAction