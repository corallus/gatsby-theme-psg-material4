import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            position: 'relative'
        },
        content: {
            position: 'absolute'
        }
    })
)

export default useStyles
