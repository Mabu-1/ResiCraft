import { useQuery } from "@tanstack/react-query";
const UseCupons = () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["cupons"],
            queryFn: async () => {
                const data = await fetch("https://appartment-server.vercel.app/cupons");
                return await data.json();
            }
        }
    );


    return { data, isLoading, isFetching, refetch };
};

export default UseCupons;