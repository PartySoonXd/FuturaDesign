const { Menu } = require("react-admin")
import CollectionsIcon from '@mui/icons-material/Collections';
import FeedbackIcon from '@mui/icons-material/Feedback';

const CustomMenu = () => {
    return (
        <Menu>
            <Menu.Item to="/feedback" primaryText="Feedback" leftIcon={<FeedbackIcon/>}/>
            <Menu.Item to="/portfolio" primaryText="Portfolio" leftIcon={<CollectionsIcon/>}/>
        </Menu>
    )
}

export default CustomMenu