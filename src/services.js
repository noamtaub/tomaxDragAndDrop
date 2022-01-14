export const getUserApi = async (url) => {
    const result = await fetch(url);
    return await result.json();
}
