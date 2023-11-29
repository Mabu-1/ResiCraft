import { useQuery } from "@tanstack/react-query";
const UseAnnouncement = () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["announcement"],
            queryFn: async () => {
                const data = await fetch("http://localhost:5001/announcement");
                return await data.json();
            }
        }
    );


    return { data, isLoading, isFetching, refetch };
};

export default UseAnnouncement;