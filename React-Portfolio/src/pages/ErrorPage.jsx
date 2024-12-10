import { useRouteError } from "react-router";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">
            <h1>Error!</h1>
            <p>Something went wrong...</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}