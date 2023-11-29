import { useQuery } from "@tanstack/react-query";
const UseUser = () => {

    const { data, isLoading, isFetching, refetch } = useQuery(
        {
            queryKey: ["users"],
            queryFn: async () => {
                const data = await fetch("http://localhost:5001/users");
                return await data.json();
            }
        }
    );


    return { data, isLoading, isFetching, refetch };
};

export default UseUser;