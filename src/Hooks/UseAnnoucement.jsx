import { useQuery } from "@tanstack/react-query";
const UseAnnouncement = () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["announcement"],
            queryFn: async () => {
                const data = await fetch("https://appartment-server.vercel.app/announcement");
                return await data.json();
            }
        }
    );


    return { data, isLoading, isFetching, refetch };
};

export default UseAnnouncement;