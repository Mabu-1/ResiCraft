import { useQuery } from "@tanstack/react-query";
const UseSubmit = () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["submit"],
            queryFn: async () => {
                const data = await fetch("https://estudy-server.vercel.app/submit");
                return await data.json();
            }
        }
    );


    return { data, isLoading, isFetching, refetch };
};

export default UseSubmit;