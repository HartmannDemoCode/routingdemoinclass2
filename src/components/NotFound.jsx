import { useParams } from 'react-router'
const NotFound = () => {
    const params = useParams();
    const filePath = params["*"];

    return (
        <>
            <h1>No Content found on path: {filePath}</h1>
        </>
    );

}
export default NotFound;