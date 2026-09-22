
export const getApps = async() => {
    const response = await fetch("http://localhost:3000/data.json");
    const data = await response.json();
    return data;
}