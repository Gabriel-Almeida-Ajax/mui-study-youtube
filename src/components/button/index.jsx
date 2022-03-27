import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        borderRadius: 0,
    },
}));

export default function ButtonComponent({ children, ...props }) {
    const classes = useStyles();

    return (
        <Button className={classes.button} variant="contained" {...props}>
            {children}
        </Button>
    )
}