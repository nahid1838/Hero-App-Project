export const getApps = async () => {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data.json`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("Error fetching apps data", error);
        return [];
    }
};