import { SvgIcon, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    logo: {
        height: "30px"
    }
}))

export function Logo() {
    const classes = useStyles();

    return (
        <img src="/src/assets/yt-preto.png" alt="logo" className={classes.logo}/>
    )
}