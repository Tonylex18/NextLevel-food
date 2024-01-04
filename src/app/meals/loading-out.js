import classes from './loading.module.css';

export default function loadingMeals() {
    return <p className={classes.loading}>Fetching meals...</p>
}