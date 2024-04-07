export const  calculateRelativeTime = (uploadDate: Date) => {

    // const currentDate = new Date();
    // const timeDifference = Math.floor((currentDate.getTime() - uploadDate.getTime()) / 1000);


    // Determine the user's time zone
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // console.log(userTimeZone);

    // Convert the uploadDate to the user's time zone
    const userUploadDate = new Date(uploadDate.toLocaleString('en-US', { timeZone: userTimeZone }));

    const currentDate = new Date();
    const timeDifference = Math.floor((currentDate.getTime() - userUploadDate.getTime()) / 1000);

    if (timeDifference < 60) {
        return `${timeDifference} second${timeDifference !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < 3600) {
        const minutes = Math.floor(timeDifference / 60);
        return `${minutes} minute${minutes !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < 86400) {
        const hours = Math.floor(timeDifference / 3600);
        return `${hours} hour${hours !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < 2592000) { // 30 days
        const days = Math.floor(timeDifference / 86400);
        return `${days} day${days !== 1 ? 's' : ''} ago`;
    } else if (timeDifference < 31536000) { // 365 days
        const months = Math.floor(timeDifference / 2592000); // Average month length
        return `${months} month${months !== 1 ? 's' : ''} ago`;
    } else {
        const years = Math.floor(timeDifference / 31536000); // Average year length
        return `${years} year${years !== 1 ? 's' : ''} ago`;
    }
};