import { makeStyles } from "@material-ui/core"
import ButtonComponent from "../../components/button"
import AppBar from '../../components/appbar'

const useStyles = makeStyles(theme => ({
    root: {
        background: theme.palette.background.default,
        height: "100vh",
    },
}))


export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar />
        </div>
    )
}