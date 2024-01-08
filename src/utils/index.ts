export const convertYear = (dateString: string) => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    return `${year}`;
};
