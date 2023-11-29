import { useQuery } from "@tanstack/react-query";
const UseApartment = () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["assignment"],
            queryFn: async () => {
                const data = await fetch("https://appartment-server.vercel.app/apartment");
                return await data.json();
            }
        }
    );


    return { data, isLoading, isFetching, refetch };
};

export default UseApartment;